import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CompanyComponent } from '../company/company.component';
import { BenefitsForHrSectionComponent } from '../benefits-for-hr-section/benefits-for-hr-section.component';


@Component({
  selector: 'app-your-advantages-page',
  standalone: true,
  imports: [
    TranslateModule,
    CompanyComponent,
    BenefitsForHrSectionComponent
    ],
  templateUrl: './your-advantages-page.component.html',
  styleUrl: './your-advantages-page.component.css'
})
export class YourAdvantagesPageComponent {

}
