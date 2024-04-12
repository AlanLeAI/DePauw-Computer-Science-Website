import { Component, HostListener, OnInit } from '@angular/core';
import { WindowRefService, ICustomWindow} from './WindowRefService';


@Component({
  selector: 'app-csc340',
  templateUrl: './csc340.component.html',
  styleUrls: ['./csc340.component.css']
})

export class Csc340Component{
  selectedContent: string = "";

  showContent(contentName: string) {
    this.selectedContent = contentName;
  }

}
