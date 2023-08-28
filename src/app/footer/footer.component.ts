import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @HostBinding('class.sticky-footer') isSticky = false;

  constructor() {
    window.onscroll = () => {
      this.isSticky = window.pageYOffset > 0;
    };
  }
}
