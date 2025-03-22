import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home-search-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home-search-page.component.html',
  styleUrl: './home-search-page.component.css'
})
export class HomeSearchPageComponent {
    constructor(public translate: TranslateService) {}

}
