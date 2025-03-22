import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-settle-in-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './settle-in-page.component.html',
  styleUrl: './settle-in-page.component.css'
})
export class SettleInPageComponent {
  constructor(public translate: TranslateService) {}
}
