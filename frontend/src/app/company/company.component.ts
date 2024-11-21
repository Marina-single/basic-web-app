import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
advantages = [
    {
      icon: 'bi-box-seam', // Иконка Bootstrap Icons
      title: 'Seamless Service',
      description: 'All services from one provider – no need for multiple vendors.'
    },
    {
      icon: 'bi-person-heart',
      title: 'Personalized Support',
      description: 'Assistance tailored to your unique needs, every step of the way.'
    },
    {
      icon: 'bi-clock-history',
      title: 'Time Savings',
      description: 'We manage the details so you can focus on what’s most important.'
    },
    {
      icon: 'bi-lightbulb',
      title: 'In-Depth Consultation',
      description: 'Expert advice to ensure a smooth and hassle-free transition.'
    }
  ];
}

