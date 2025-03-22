import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [ CommonModule,
    RouterModule,
    TranslateModule
    ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
services = [
    {
      icon: 'bi bi-passport',
      title: 'IMMIGRATION_TITLE',
      subtitle: 'IMMIGRATION_SUBTITLE',
      description: 'IMMIGRATION_DESC'
    },

    {
        icon: 'bi bi-people',
        title: 'FAMILY_SUPPORT_TITLE',
        subtitle: 'FAMILY_SUPPORT_SUBTITLE',
        description: 'FAMILY_SUPPORT_DESC'
    },

    {
         icon: 'bi  bi-geo-alt',
         title: 'SETTLING_IN_TITLE',
         subtitle: 'SETTLING_IN_SUBTITLE',
         description:'SETTLING_IN_DESC'
    },

    {
        icon: 'bi bi-house-door',
        title: 'HOME_SEARCH_TITLE',
        subtitle: 'HOME_SEARCH_TITLE_SUBTITLE',
        description: 'HOME_SEARCH_DESC'
    },

    {
      icon: 'bi bi-globe',
      title: 'INTERCULTURAL_TITLE',
      subtitle: 'INTERCULTURAL_SUBTITLE',
      description:'INTERCULTURAL_DESC'
    },
    {
      icon: 'bi bi-person-check',
      title: 'INDIVIDUAL_NEEDS_TITLE',
      subtitle: 'INDIVIDUAL_NEEDS_SUBTITLE',
      description: 'INDIVIDUAL_NEEDS_DESC'
    }
  ];

  constructor(public translate: TranslateService) {}

}
