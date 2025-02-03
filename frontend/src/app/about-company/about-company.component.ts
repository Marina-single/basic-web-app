import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.css'
})
export class AboutCompanyComponent {

}
