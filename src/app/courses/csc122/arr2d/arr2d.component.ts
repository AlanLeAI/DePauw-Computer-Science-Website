import { Component } from '@angular/core';

@Component({
  selector: 'app-arr2d',
  templateUrl: './arr2d.component.html',
  styleUrls: ['./arr2d.component.css']
})
export class Arr2dComponent {
  array: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  arrayRows: number = this.array.length
  arrayCols: number = this.array[0].length

  onCreate: boolean = false
  onModify: boolean = false
  onValueKey: boolean = false
  onSubmitIndex: boolean = false
  onSubmitValue: boolean = false
  onLoop: boolean = false
  onKeyValue: boolean = false

  onClose: boolean = true

  readInput: String = ""
  readInt: number = 0
  needModify: number = 0
  searchVal: number = 0
  idxRow: number = -1
  idxCol: number =  -1



  close(){
    this.onClose = true
    this.onCreate = false
    this.onModify = false
    this.onKeyValue = false
    this.onValueKey = false
    this.onLoop = false
  }


  createArray(){
    this.onClose = false
    this.onCreate = true
    const temp = JSON.parse(this.readInput.toString()) as number[][]
    return temp
  }

  submitNewArray(){
    let temp = this.createArray()
    this.array = temp

    this.arrayRows =this.array.length
    this.arrayCols = this.array[0].length
    this.onCreate = false
    this.onClose = true
  }

  modify(){
    this.onModify = true 
    this.onClose = false

    let temp = parseFloat(this.needModify.toString())
    let value = parseFloat(this.readInt.toString())
    console.log(temp)

    let index: number [][]= [[value,value]]
    for(let i = 0;i<this.arrayRows;i++){
      for(let j = 0; j<this.arrayCols;j++){
        if(this.array[i][j]== temp){
          index.push([i,j])
        }
      }
    }
    return index
  }

  submitModify(){
    let temp =this.modify()
    for(let i = 1; i<temp.length;i++){
      let index = temp[i]
      this.array[index[0]][index[1]] = temp[0][0]
    }

    this.onClose = true
    this.onModify = false
  }

  getIndex(){
    this.onKeyValue = true
    this.onClose = false
    for(let i = 0;i<this.arrayRows;i++){
      for(let j = 0; j<this.arrayCols;j++){
        if(this.array[i][j]== this.searchVal){
          return [i,j]
        }
      }
    }
    return [-1,-1]
  }

  submitGetIndex(){
    let temp = this.getIndex()
    if(temp[0] == -1){
      alert("Can not find the value!")
    }
    this.idxRow = temp[0]
    this.idxCol = temp[1]
    this.onSubmitIndex = true
  }

  getValue(){
    this.onClose = false
    this.onValueKey = true
    this.idxCol = parseFloat(this.idxCol.toString())
    this.idxRow = parseFloat(this.idxRow.toString())
  }

  submitValue(){
    this.onSubmitValue = true
  }

  currRow: number = 0
  currCol: number = 0
  currentNum: number = this.array[this.currRow][this.currCol] 
  currSum: number = 0

  RunLoopPanel(){
    this.onLoop = true
    this.onClose = false
    this.currRow == 0
    this.currCol == 0
    this.currentNum = this.array[this.currRow][this.currCol] 
    this.currSum += this.currentNum
    
  }

  onStep(){
    if(this.currCol  >= this.arrayCols || this.currRow >= this.arrayRows){
      return
    }
    if(this.currCol < this.arrayCols-1){
      this.currCol += 1
      this.currentNum = this.array[this.currRow][this.currCol]
      this.currSum += this.currentNum
    }
    else{
      this.currRow += 1
      this.currCol = 0
      this.currentNum = this.array[this.currRow][this.currCol]
      this.currSum += this.currentNum
    }
  }

  restartLoop(){
    this.currSum = 0
    this.RunLoopPanel()
  }
}
