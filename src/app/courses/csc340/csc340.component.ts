import { Component } from '@angular/core';

@Component({
  selector: 'app-csc340',
  templateUrl: './csc340.component.html',
  styleUrls: ['./csc340.component.css']
})
export class Csc340Component {
  rsa = false


  openrsa(){
    this.rsa = !this.rsa
  }
  
}
