import { Component } from '@angular/core';
import { CompanyComponent } from '../company/company.component';
import { CompanyInfoComponent } from '../company-info/company-info.component';
import { OurVisionSectionComponent } from '../our-vision-section/our-vision-section.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { OurValuesSectionComponent } from '../our-values-section/our-values-section.component';
import { AdvantagesAboutCompanySectionComponent } from '../advantages-about-company-section/advantages-about-company-section.component';


@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [
    CompanyComponent,
    CompanyInfoComponent,
    OurVisionSectionComponent,
    TranslateModule,
    OurValuesSectionComponent,
    AdvantagesAboutCompanySectionComponent
    ],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.css'
})
export class AboutCompanyComponent {

}
