import { Component } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent {
  items = [11,12,13,14];

  onClose: boolean = true

  onEnqueue = false
  onDequeue = false
  enqueueVal: number = 0
  ngOnInit(){
  }


  close(){
    this.onClose = true
    this.onEnqueue = false
    this.onDequeue = false
  }

  addHead = false
  enqueuePush(){
    this.onClose = false
    this.onEnqueue = true
  }


  enqueue(){
    // Adding the new values to the existing items array
    this.items.push(this.enqueueVal);
    // Resetting the input field
    this.enqueueVal = 0
    this.close()
  }

  currIndex = 0

  dequeue(){
    if (this.items.length === 0) {
      console.log("Queue is empty");
      return;
    }

    // Remove the first item from the queue
    const dequeuedItem = this.items.shift();

    console.log("Dequeued item:", dequeuedItem);

    // Optionally, you can update any UI components or properties here

    // If needed, you can return the dequeued item
    return dequeuedItem;
  }

  // doneStop: boolean = false
  

  // deleteNode(){
  //   this.onClose = false
  //   this.onDelete = true
  //   this.currIndex = 0
  //   this.currValue = this.items[this.nodeIndex]
  // }

  // nextDelete(){
    
  // }
}
