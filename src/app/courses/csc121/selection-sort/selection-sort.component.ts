import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


interface Item {
  value: number;
  color: string;
  state: string;
  x: number;
}


@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css'],
  animations: [
    trigger('swap', [
      state('inactive', style({
        backgroundColor: 'lightblue'
      })),
      state('active', style({
        backgroundColor: 'red'
      })),

      transition('inactive => active', animate('2s')),
      transition('active => inactive', animate('1s'))
    ])
  ]
})
export class SelectionSortComponent {
  items: Item[]= [];
  width = 0.5
  activeIndex = -1
  input1 = "" 
  input2 = ""
  checkres = false
  clickpractice = false

  ngOnInit() {
    this.generateArray()
  }

  generateArray(){
    this.items = []
    for (let i = 0; i < 15; i++) {
      this.items.push({
        value: Math.floor(Math.random() * 100) + 1,
        color: 'lightblue',
        state: 'inactive',
        x: i*this.width
      });
    }
  }

  async selectionSort() {
    this.stopSor = false;
    for (let i = 0; i < this.items.length - 1; i++) {
      if (this.stopSor === false) {
        let minIndex = i;
        for (let j = i + 1; j < this.items.length; j++) {
          this.items[j].state = 'active';
          await new Promise(resolve => setTimeout(resolve, 500));
          if (this.items[j].value < this.items[minIndex].value) {
            minIndex = j;
          }
          this.items[j].state = 'inactive';
        }

        if (minIndex !== i) {
          this.items[i].state = 'active';
          this.items[minIndex].state = 'active';
          await new Promise(resolve => setTimeout(resolve, 500));
          const temp = this.items[i];
          this.items[i] = this.items[minIndex];
          this.items[minIndex] = temp;
          this.items[i].state = 'inactive';
          this.items[minIndex].state = 'inactive';
          // await new Promise(resolve => setTimeout(resolve, 200));
        }
        for (let k = 0; k < this.items.length; k++) {
          if (k <= i) {
            this.items[k].state = 'inactive';
          }
        }
      }
    }
  }

  
  stopSor: boolean = false
  
  stopSort(){
    this.stopSor = true
  }

  checkInput(){
    if( this.input1 == "minIndex" && this.input2 == this.input1){
      this.checkres = true
    }
    else{
      this.checkres = false
    }
  }

  practiceCode(){
    this.clickpractice = !this.clickpractice
  }
}
