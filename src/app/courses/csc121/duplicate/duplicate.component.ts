import { Component } from '@angular/core';

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.css']
})
export class DuplicateComponent {
  k: number = 10;
  result: string | number = -1;
  arr = [3,5,7,1,2,4,9,6,1]
  idx = ""
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
    if( this.idx == "i+1" || this.idx == " i + 1 " ||  this.idx == "i + 1" ||  this.idx == "i+ 1"){
      if(this.input2 == "i" || this.input2 == " i " || this.input2 == " i"){
        this.checkres = true
      }

    }
    else{
      this.checkres = false
    }
  }
}
