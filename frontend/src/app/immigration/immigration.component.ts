import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-immigration',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './immigration.component.html',
  styleUrl: './immigration.component.css'
})
export class ImmigrationComponent {
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
           icon: 'bi-gear-wide-connected',
           title: this.translate.instant('EXPERIENCE_SUPPORT_TITLE'),
           description: this.translate.instant('EXPERIENCE_SUPPORT_DESC')
         },
         {
           icon: 'bi-arrow-repeat',
           title: this.translate.instant('STEPS_PART_TITLE'),
           description: this.translate.instant('STEPS_PART_DESC')
         },
         {
           icon: 'bi-cash-coin',
           title: this.translate.instant('MINIMIZE_COST_TITLE'),
           description: this.translate.instant('MINIMIZE_COST_DESC')
         }
       ];
     }
   }
