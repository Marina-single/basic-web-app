import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-family-support-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './family-support-page.component.html',
  styleUrl: './family-support-page.component.css'
})
export class FamilySupportPageComponent {
    constructor(public translate: TranslateService) {}

}
