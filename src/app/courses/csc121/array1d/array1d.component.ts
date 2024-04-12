import { Component } from '@angular/core';

@Component({
  selector: 'app-array1d',
  templateUrl: './array1d.component.html',
  styleUrls: ['./array1d.component.css']
})
export class Array1dComponent {
  arrayelement: number[] = [1,2,3,4,5]
  arrayTitle: string = "Your One Dimension Array"
  arrayLength: number = this.arrayelement.length

  currentIndex: number = 0
  currentNum: number = 0
  nextNum: any = 0
  currSum: number = 0

  onCreateArray: boolean = false
  onPush: boolean = false
  onPop: boolean = false
  onLoop: boolean = false
  onModify: boolean = false
  onClose: boolean = true
  readInput: string = ""
  clickpractice1 = false
  clickpractice2 = false
  clickpractice3 = false
  needmodify: string = ""
  constructor(){

  }

  

  printArray(params:number[]) {
    let results = ""
    for(let ele of this.arrayelement){
      let stringele = ele.toString()
      results += stringele + "  "
    }

    let array = document.getElementById("array-display")
    return results
  }

  createArray(){
    this.onClose = false
    this.onCreateArray = true
    console.log(this.readInput)
    let elements = this.readInput.split(",")
    console.log(elements)
    let newarray: number[]= []
    for(let ele of elements){
      let elefloat = parseFloat(ele)
      newarray.push(elefloat)
    }
    return newarray
  }

  close(){
    this.onClose = true
    this.onPop = false
    this.onCreateArray = false
    this.onPush = false
    this.onModify = false
    this.onLoop = false
    this.clickpractice1 = false
    this.clickpractice2 = false
    this.clickpractice3 = false
    this.currentIndex = 0
    this.currentNum = 0
    this.nextNum = 0
    this.currSum = 0

  }

  submitNewArray(){
    let array = this.createArray()
    this.onClose = true
    this.arrayelement = array
    this.arrayLength = array.length
    this.onCreateArray = false
  }

  addNewValue(){
    this.onClose = false
    this.onPush = true
    let newVal = parseFloat(this.readInput)
    return newVal
  }

  submitPush(){
    let newval = this.addNewValue()
    this.arrayelement.push(newval)
    this.arrayLength += 1
    this.onClose = true
    this.onPush =false
  }

  popLastValue(){
    this.onClose = false
    this.onPop = true
    this.arrayelement.pop()
  }

  modifyValue(){
    this.onClose = false
    this.onModify = true
    let currVal = parseFloat(this.needmodify)
    let newVal  = parseFloat(this.readInput)
    let index:number[] = []
    for(let i = 0; i < this.arrayelement.length;i++){
      if(this.arrayelement[i] == currVal){
        index.push(i)
      }
    }
    index.push(newVal)
    console.log(index)
    return index
  }

  onSubmitModify(){
    let temp = this.modifyValue()
    for(let i = 0; i < temp.length-1;i++){
      this.arrayelement[temp[i]] = temp[temp.length-1]
    }
    this.onClose = true
    this.onModify = false
  }

  RunLoopPanel(){
    this.onClose = false
    this.onLoop = true
    if(this.arrayelement.length == 0){
      this.currentNum = -1
      this.currentIndex = -1
      this.nextNum = -1
      this.currSum = 0
    }
    else{
      this.currentNum = this.arrayelement[0]
      this.currentIndex = 0
      if(this.arrayelement.length == 0){
        this.nextNum = -1
      }
      else{
        this.nextNum = this.arrayelement[1]
      }
      this.currSum += this.currentNum
    }
  }

  onStep(){
    if(this.currentIndex < this.arrayelement.length){
      this.currentIndex += 1
      this.currentNum = this.arrayelement[this.currentIndex]
      this.currSum += this.currentNum
      let temp = this.currentNum

      if(this.currentIndex+1 >= this.arrayelement.length){
        this.nextNum = "End of Array"
      }
      else{
        this.nextNum = this.arrayelement[this.currentIndex]
      }
    }
    else{
      this.currSum = this.currSum
      alert("You have reach the end of the array!")
    }
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

  restartLoop(){
    this.currSum = 0
    this.RunLoopPanel()
  }
}
