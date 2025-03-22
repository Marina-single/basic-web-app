import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css'
})
export class CompanyInfoComponent {
  constructor(public translate: TranslateService) {}
}
