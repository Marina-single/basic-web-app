import { Component } from '@angular/core';
import { OurServicesComponent } from '../our-services/our-services.component';
import { CompanyComponent } from '../company/company.component';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    OurServicesComponent,
    CompanyComponent,
    HeaderBannerComponent
    ],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
