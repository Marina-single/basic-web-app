import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    TranslateModule,
    NgIf,
    NgFor,
    NgClass,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  successMessage: string = '';
  errorMessage: string = '';

  user = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };


  copiedIndex: number | null = null;

  copy(text: string, index: number) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedIndex = index;
      setTimeout(() => {
        this.copiedIndex = null;
      }, 2000);
    });
  }

  adjustHeight(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
  }
  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Please fill out all required fields.';
      this.successMessage = '';
      return;
    }

    this.http.post('http://localhost:3000/send-email', this.user)
      .subscribe(
        response => {
          console.log('Email sent:', response);
          this.successMessage = 'Your message has been sent!';
          this.errorMessage = '';
          form.resetForm(); //
        },
        error => {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred while sending. Please try again later.';
          this.successMessage = '';
          form.resetForm();

        }
      );
  }
}
