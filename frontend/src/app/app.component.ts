import { Component, OnInit } from '@angular/core';
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
import { AboutCompanyComponent } from './about-company/about-company.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImmigrationComponent} from './immigration/immigration.component';


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
    ImmigrationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

 constructor(private router: Router) {}

   ngOnInit() {
     if (typeof window !== 'undefined') {
       this.router.events
         .pipe(filter(event => event instanceof NavigationEnd))
         .subscribe(() => {
           window.scrollTo({ top: 0, behavior: 'auto' }); // Прокрутка наверх
         });
     }
   }
 }
