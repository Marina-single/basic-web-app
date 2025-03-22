import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-advantages-about-company-section',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './advantages-about-company-section.component.html',
  styleUrl: './advantages-about-company-section.component.css'
})
export class AdvantagesAboutCompanySectionComponent {

 advantages: any[] = [];

     constructor(private translate: TranslateService) {
       this.loadAdvantages();
       this.translate.onLangChange.subscribe(() => {
         this.loadAdvantages();
       });
     }

     loadAdvantages() {
       this.advantages = [
         {
           icon: 'bi-collection',
           title: this.translate.instant('ADVANTAGES_TITLE_1'),
           description: this.translate.instant('ADVANTAGES_DESC_1')
         },
         {
           icon: 'bi-person-check',
           title: this.translate.instant('ADVANTAGES_TITLE_2'),
           description: this.translate.instant('ADVANTAGES_DESC_2')
         },
         {
           icon: 'bi-lightning',
           title: this.translate.instant('ADVANTAGES_TITLE_3'),
           description: this.translate.instant('ADVANTAGES_DESC_3')
         },
         {
          icon: 'bi-journal-bookmark',
          title: this.translate.instant('ADVANTAGES_TITLE_4'),
          description: this.translate.instant('ADVANTAGES_DESC_4')
         },
         {
          icon: 'bi-people',
          title: this.translate.instant('ADVANTAGES_TITLE_5'),
          description: this.translate.instant('ADVANTAGES_DESC_5')
         }
       ];
     }
}

