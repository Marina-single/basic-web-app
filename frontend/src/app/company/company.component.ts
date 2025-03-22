import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-company',
  standalone: true,
  imports: [ CommonModule,TranslateModule ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
reasons: any[] = [];

     constructor(private translate: TranslateService) {
       this.loadAdvantages();
       this.translate.onLangChange.subscribe(() => {
         this.loadAdvantages();
       });
     }

     loadAdvantages() {
       this.reasons = [
         {
           icon: 'bi-box-seam',
           title: this.translate.instant('REASON_TITLE_1'),
           description: this.translate.instant('REASON_DESC_1')
         },
         {
           icon: 'bi-person-heart',
           title: this.translate.instant('REASON_TITLE_2'),
           description: this.translate.instant('REASON_DESC_2')
         },
         {
           icon: 'bi-clock-history',
           title: this.translate.instant('REASON_TITLE_3'),
           description: this.translate.instant('REASON_DESC_3')
         },
         {
          icon: 'bi-lightbulb',
          title: this.translate.instant('REASON_TITLE_4'),
          description: this.translate.instant('REASON_DESC_4')
         }
       ];
     }
}

