import { Component } from '@angular/core';

@Component({
  selector: 'app-publickeyenc',
  templateUrl: './publickeyenc.component.html',
  styleUrls: ['./publickeyenc.component.css']
})
export class PublickeyencComponent {
  rsa = false
  
  
  openrsa(){
    this.rsa = !this.rsa
  }
}
