import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-csc121',
  templateUrl: './csc121.component.html',
  styleUrls: ['./csc121.component.css']
})
export class Csc121Component {
  selectedContent: string = "";

  showContent(contentName: string) {
    this.selectedContent = contentName;
  }
}
