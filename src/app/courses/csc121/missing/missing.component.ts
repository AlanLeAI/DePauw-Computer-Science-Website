import { Component } from '@angular/core';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.css']
})
export class MissingComponent {
  k: number = 10;
  result: string | number = -1;
  arr = [1,2,3,4,5,7,8,9,10]

  input2 = ""
  checkres = false
  ele1 = -1
  ele2 = -1

  resetResults() {
    for(let i = 0; i < this.arr.length; i++){
      for(let j = 0; j< this.arr.length; j++){
        if(this.arr[i] + this.arr[j] == this.k){
          this.ele1 = this.arr[i]
          this.ele2 = this.arr[j]
          this.result = 2
          return
        }
      }
    }
    this.result = -1
  }

  checkInput(){
    if(this.input2 == "i" || this.input2 == " i " || this.input2 == " i"){
      this.checkres = true
    }

    else{
      this.checkres = false
    }
  }
} 
