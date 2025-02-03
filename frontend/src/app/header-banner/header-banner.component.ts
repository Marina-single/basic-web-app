import { Component, AfterViewInit } from '@angular/core';
import {HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.css'
})
export class HeaderBannerComponent {

}
