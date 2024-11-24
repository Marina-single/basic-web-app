import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
services = [
    {
      icon: 'bi bi-passport',
      title: 'Immigration',
      description: 'Residence and work permits for Germany - from the application to the collection of the residence card. One-Source Relocation provides you with the necessary information. Whether an EU Blue Card for executives or a work permit for a trainee from a third country – One-Source Relocation is at your side.'
    },
    {
      icon: 'bi  bi-geo-alt',
      title: 'Settling-in',
      description: 'Settling-in services provide support throughout what is known as the settling-in period. Whether you need an area orientation tour, cultural or language training we can help. We can also help with other aspects such as local social group introductions, dealing with local authorities, finding a dentist, and more.'
    },
    {
      icon: 'bi bi-house-door',
      title: 'Home Search',
      description: 'Home Search is one of the key support services provided as part an international relocation. We understand your specific needs and requirements of any accompanying dependents. Our team will work with you and our local area experts who are on the ground at destination to gain a complete understanding of the type of property, location and key success factors before conducting a thorough review of all properties on the market to meet your brief.'
    },
    {
      icon: 'bi bi-people',
      title: 'Family support',
      description: 'When the whole family goes on assignment, the children’s education and the choice of school play a very important role.We at One-Source Relocation know how important it is that both parents and children feel comfortable at the new school and that it fits the needs of the child concerned, especially as schools are not only a place for education, but much more also the place where the children spend most of their day and find new friends.'
    },
    {
      icon: 'bi bi-globe',
      title: 'Intercultural Service',
      description: 'Cross-Cultural Communication Training for Relocating Families. Invest in cross-cultural communication training to ensure the long-term success of your employees and their families in the new country.'
    },
    {
      icon: 'bi bi-person-check',
      title: 'Individual needs',
      description: 'Let us know which service you need. We take care of it. Relocating is a crucial period in a persons life.That is why we offer personalized services, which are tailored to the individual and provide the optimal support for your employee – from purchasing a house or vehicle to medical and your religions needs.'
    }
  ];
}
