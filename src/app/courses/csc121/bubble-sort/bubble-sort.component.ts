import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


interface Item {
  value: number;
  color: string;
  state: string;
  x: number;
}

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css'],
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


export class BubbleSortComponent implements OnInit{
  items: Item[]= [];
  width = 0.5

  ngOnInit() {
    this.generateArray()
    console.log(this.items)
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

  async bubbleSort() {
    this.stopSor = false
    for (let i = 0; i < this.items.length; i++) {
      for (let j = i+1; j < this.items.length; j++) {
        if(this.stopSor==false){
          await new Promise(resolve => setTimeout(resolve, 500));
          this.items[j].state = 'active';
          this.items[i].state = 'active';
          await new Promise(resolve => setTimeout(resolve, 500));
          if (this.items[i].value > this.items[j].value) {
            const temp = this.items[j];
            this.items[j] = this.items[i];
            this.items[i] = temp;
          }
          setTimeout(() => {
            this.items[j].state = 'inactive';
            this.items[i].state = 'inactive';
          }, 200);
        }
        else{
          return
        }
  
      }
    }
  }
  stopSor: boolean = false

  stopSort(){
    this.stopSor = true
  }
}

