import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-relocation-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './relocation-info.component.html',
  styleUrl: './relocation-info.component.css'
})
export class RelocationInfoComponent {
    constructor(public translate: TranslateService) {}
}
