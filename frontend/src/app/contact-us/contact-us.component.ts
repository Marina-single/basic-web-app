import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms'; //
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    TranslateModule,
    NgIf,
    NgFor,
    NgClass,
    FormsModule,
    HttpClientModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
 user = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/send-email', this.user)
      .subscribe(
        response => {
        console.log('Email sent:', response);
        alert('Your message has been sent!');
        this.user = { name: '', email: '', phone: '', message: '' };
      },
    error => {
        console.error('Error:', error);
        alert('An error occurred while sending. Please try again later.');
     });

  }
}
