import { ThisReceiver } from '@angular/compiler';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-csc122',
  templateUrl: './csc122.component.html',
  styleUrls: ['./csc122.component.css']
})
export class Csc122Component{
  selectedContent = "";

  showContent(contentName: string) {
    this.selectedContent = contentName;
  }
}
