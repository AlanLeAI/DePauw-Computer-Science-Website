import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent {
  stack: number[] = [1,2,3];
  onClose = false
  showPushVisible = false
  newNodeValue = 0

  showpush(){
    this.showPushVisible = true
    this.onClose = false
  }

  close(){
    this.onClose=true;
    this.showPushVisible = false
  }

  push() {
    this.stack.push(this.newNodeValue);
  }

  pop() {
    if (this.stack.length === 0) {
      return; // Handle underflow (e.g., display message)
    }
    this.stack.pop();
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

}
