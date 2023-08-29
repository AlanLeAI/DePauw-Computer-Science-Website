import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


interface Item {
  value: number;
  color: string;
  state: string;
  x: number;
}


@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css'],
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
export class InsertionSortComponent {
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

  async insertionSort() {
    this.stopSor = false;
    for (let i = 1; i < this.items.length; i++) {
      if(this.stopSor == false){
        await new Promise(resolve => setTimeout(resolve, 500));
        let key = this.items[i];
        key.state = 'active';
        await new Promise(resolve => setTimeout(resolve, 500));
        let j = i - 1;
        while (j >= 0 && this.items[j].value > key.value) {
          this.items[j + 1] = this.items[j];
          j = j - 1;
        }
        this.items[j + 1] = key;
        await new Promise(resolve => setTimeout(resolve, 200));
        key.state = 'inactive';
      }
    }
  }
  
  stopSor: boolean = false
  
  stopSort(){
    this.stopSor = true
  }
}
