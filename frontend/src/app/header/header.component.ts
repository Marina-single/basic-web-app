import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  currentLanguage = 'en';
  isBrowser = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.translate.setDefaultLang('en');

    if (this.isBrowser) {
      this.loadLanguage();
    }

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.scrollToSection(fragment);
        }
      });
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.loadLanguage();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string) {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;

    if (this.isBrowser) {
      setTimeout(() => {
        try {
          localStorage.setItem('language', language);
        } catch (error) {
          console.warn('Ошибка доступа к localStorage:', error);
        }
      }, 0);
    }
  }

  private loadLanguage() {
    setTimeout(() => {
      try {
        const savedLang = localStorage.getItem('language') || this.translate.getBrowserLang() || 'en';
        this.translate.use(savedLang);
        this.currentLanguage = savedLang;
      } catch (error) {
        console.warn('Ошибка доступа к localStorage:', error);
      }
    }, 0);
  }
}
