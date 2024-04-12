import { Component } from '@angular/core';

@Component({
  selector: 'app-doublylinkedlist',
  templateUrl: './doublylinkedlist.component.html',
  styleUrls: ['./doublylinkedlist.component.css']
})
export class DoublylinkedlistComponent {
  items = [11,12,13,14];

  onClose: boolean = true

  onAdd: boolean = false
  onInsert: boolean = false
  onDelete: boolean = false
  onLoop: boolean = false
  

  selectedNodeIndex = 0;
  currValue: any = -1
  currIndex: any = -1
  nodeValue: any = -1
  nodeIndex: any = -1
  position: any = 0
  color = 'white';
  
  ngOnInit(){
    this.nodeValue = -1
    this.nodeIndex = -1
  }


  close(){
    this.onClose = true
    this.onAdd = false
    this.onInsert = false
    this.onDelete = false
    this.onLoop = false

    this.nodeIndex = -1
    this.currValue = -1
    this.nodeValue = -1
    this.doneStop = false
    this.currIndex = -1
  }

  addHead = false
  insertNode(){
    this.onClose = false
    this.onInsert = true
    this.currIndex = 0
    this.currValue = this.items[this.nodeIndex]
  }

  doneStop: boolean = false
  nextNode(){
    if(this.nodeIndex == 0 && this.doneStop == false){
      this.addHead = true
      this.items.splice(this.nodeIndex+1,0,this.nodeValue)
      this.doneStop = true
    }
    if(this.position == this.nodeIndex - 1 && this.doneStop == false){
      this.items.splice(this.nodeIndex,0,this.nodeValue)
      this.doneStop =true
    }
    else if(this.position < this.nodeIndex - 1 && this.doneStop == false){
      this.currIndex += 1
      this.currValue  = this.items[this.currIndex]
      this.position += 1
    }
  }

  nodeIndexDelete = 0

  deleteNode(){
    this.onClose = false
    this.onDelete = true
    this.currIndex = 0
    this.currValue = this.items[this.nodeIndexDelete]
  }

  nextDelete(){
    if(this.currIndex !== this.nodeIndexDelete){
      this.currIndex += 1
    }
    else{
      console.log("trigger")
      this.items = this.items.splice(this.nodeIndex, 1);
    }
    
  }
}
