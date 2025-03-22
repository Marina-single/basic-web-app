import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImmigrationComponent} from './immigration/immigration.component';
import { RelocationInfoComponent} from './relocation-info/relocation-info.component';
import { HomeSearchPageComponent} from './home-search-page/home-search-page.component';
import { SettleInPageComponent} from './settle-in-page/settle-in-page.component';
import { FamilySupportPageComponent } from './family-support-page/family-support-page.component';
import { InterculturalServicePageComponent } from './intercultural-service-page/intercultural-service-page.component';
import { IndividualNeedsPageComponent } from './individual-needs-page/individual-needs-page.component';
import { TranslateService } from '@ngx-translate/core';
import { OurVisionSectionComponent } from './our-vision-section/our-vision-section.component';
import { OurValuesSectionComponent } from './our-values-section/our-values-section.component';
import { AdvantagesAboutCompanySectionComponent } from './advantages-about-company-section/advantages-about-company-section.component';
import { YourAdvantagesPageComponent } from './your-advantages-page/your-advantages-page.component';
import { BenefitsForHrSectionComponent } from './benefits-for-hr-section/benefits-for-hr-section.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeaderBannerComponent,
    ContactUsComponent,
    OurServicesComponent,
    FooterComponent,
    CompanyComponent,
    AboutCompanyComponent,
    HomePageComponent,
    ImmigrationComponent,
    RelocationInfoComponent,
    HomeSearchPageComponent,
    SettleInPageComponent,
    CompanyInfoComponent,
    FamilySupportPageComponent,
    InterculturalServicePageComponent,
    IndividualNeedsPageComponent,
    OurVisionSectionComponent,
    OurValuesSectionComponent,
    AdvantagesAboutCompanySectionComponent,
    YourAdvantagesPageComponent,
    BenefitsForHrSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'frontend';

 constructor(
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) {}

   ngOnInit() {

     this.translate.addLangs(['en', 'de']);
     this.translate.setDefaultLang('en');

     let selectedLang = 'en';

     if (isPlatformBrowser(this.platformId)) {
       const savedLang = localStorage.getItem('language');

            if (savedLang) {
               selectedLang = savedLang;
            }
            else
            {
               const browserLang = this.translate.getBrowserLang();
               if (browserLang && ['en', 'de'].includes(browserLang)) {
                 selectedLang = browserLang;
               }
               localStorage.setItem('language', selectedLang);
            }

        this.translate.use(selectedLang);

        this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
    }
  }
}

