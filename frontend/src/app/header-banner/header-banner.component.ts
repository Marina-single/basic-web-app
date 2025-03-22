import { Component, AfterViewInit } from '@angular/core';
import {HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.css'
})
export class HeaderBannerComponent {
    constructor(public translate: TranslateService) {}

}
