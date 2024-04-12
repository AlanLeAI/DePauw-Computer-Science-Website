import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  readInput: string = ""
  clickpractice1 = false
  clickpractice2 = false
  clickpractice3 = false
  needmodify: string = ""

  close(){
    this.clickpractice1 = false
    this.clickpractice2 = false
    this.clickpractice3 = false
  }

  practice1(){
    this.clickpractice1 = true

  }

  practice2(){
    this.clickpractice2 = true
  }

  practice3(){
    this.clickpractice3 = true
  }

}
