import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent {
  selectedSection: string = 'info';
  sectionTitle: string = '';
  sectionContent: string[] = [];

  updateContent(section: string): void {
    this.selectedSection = section;
    switch (section) {
      case 'info':

        this.sectionContent = [
          '1Source Relocation is more than just a service provider; it’s a trusted resource for anyone starting fresh in Hamburg or elsewhere.Our team combines expertise with empathy to deliver tailored solutions that make the transition to a new life as smooth as possible.',
          'We believe that every move is an opportunity—an invitation to explore an exciting new world.That’s why we go beyond addressing practical matters like finding a home or navigating administrative processes.We also provide emotional support, helping our clients feel at home in their new environment.',
          'Choose 1Source Relocation and experience a partnership built on trust and understanding. Together, let\'s make your new chapter a resounding success!'
        ];
        break;
      case 'team':

        this.sectionContent = [
          'Our team is composed of experienced professionals who understand the challenges of relocation.',
          'Meet the people dedicated to making your move a success!'
        ];
        break;

    }
  }

  ngOnInit(): void {
    this.updateContent('info');
  }
}
