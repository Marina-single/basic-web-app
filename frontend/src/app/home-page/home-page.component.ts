import { Component } from '@angular/core';
import { OurServicesComponent } from '../our-services/our-services.component';
import { CompanyComponent } from '../company/company.component';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { RelocationInfoComponent} from '../relocation-info/relocation-info.component';
import { CompanyInfoComponent } from '../company-info/company-info.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    OurServicesComponent,
    CompanyComponent,
    HeaderBannerComponent,
    RelocationInfoComponent,
    CompanyInfoComponent

    ],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
