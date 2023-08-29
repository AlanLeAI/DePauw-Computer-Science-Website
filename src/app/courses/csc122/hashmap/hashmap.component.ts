import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-hashmap',
  templateUrl: './hashmap.component.html',
  styleUrls: ['./hashmap.component.css']
})
export class HashmapComponent {
  myHashTable: {[key: string]: any[]} = {
    '1': [2, 3],
    '2': [1, 4],
    '4': [4,5,6,7,8],
    'Apple': ['Iphone', 'Macbook','Ipad']
  };
  
  width = 500;
  height = 300;
  boxWidth = 50;
  boxHeight = 50;
  margin = { top: 10, right: 10, bottom: 10, left: 10 };

  addValueBtn:boolean = false
  addKeyBtn:boolean = false
  close: boolean = true

  logKeys() {
    const keys = Object.keys(this.myHashTable);
    return keys
  }

  

  Onclose(){
    this.addValueBtn = false
    this.addKeyBtn = false
    this.close = true
  }

  key: any = 0
  value: any = 0

  addValue(){
    this.addValueBtn = true
    this.close = false
  }

  onSubmitAddvalue(){
    let hasKey = false
    const keys = Object.keys(this.myHashTable);
    for(let i of keys){
      if(this.key == i){
        hasKey = true
      }
    }
    if(hasKey == false){
      alert("There is no key in the hashtable")
    }
    if(hasKey == true){
      this.myHashTable[this.key].push(this.value)
    }
  }

  addKey(){
    this.addKeyBtn = true
    this.close = false
  }

  newkey: any = ''
  onSubmitAddKey(){
    let hasKey = false
    const keys = Object.keys(this.myHashTable);
    for(let i of keys){
      if(this.key == i){
        hasKey = true
      }
    }
    if(hasKey == false){
      this.myHashTable[this.newkey] = []
    }
    if(hasKey == true){
      alert("Already has the key!")
    }
  }
}
