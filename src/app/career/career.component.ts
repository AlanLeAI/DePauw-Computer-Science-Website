import { Component } from '@angular/core';


interface CareerPage {
  title: string;
  link: string;
  imageUrl: string;
}



@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  
  careerPages: CareerPage[] = [
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/LinkedIn_Logo_2011.svg/2048px-LinkedIn_Logo_2011.svg.png'
    },
    {
      title: 'Handshake',
      link: 'https://handshake.co/',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Handshake_logo.svg/2048px-Handshake_logo.svg.png'
    },
    {
      title: 'Glassdoor',
      link: 'https://www.glassdoor.com/',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Glassdoor_logo.svg/2048px-Glassdoor_logo.svg.png'
    }
  ];

}
