import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bst',
  templateUrl: './bst.component.html',
  styleUrls: ['./bst.component.css']
})
export class BstComponent {

  title = 'AngularBinaryTree';
  treeNodes: any[] = [];
  onClose = false

  ngOnInit(): void {
    this.treeNodes = [];
    // tslint:disable-next-line:max-line-length
    const parentNode = { Value: 4, Children: [
      { Value: 2, Children: [{ Value: 1, Children: [] }, { Value: 3, Children: [] }] }, 
      { Value: 6, Children: [{ Value: 5, Children: [] }, { Value: 7, Children: [] }] }
    ]};
    this.treeNodes.push(parentNode);
  }

  showAddNodePanelVisible = false;
  newNodeValue = '';

  showAddNodePanel() {
    this.showAddNodePanelVisible = true;
    this.onClose = false
  }

  showRemoveNodePanelVisible = false

  showRemoveNodePanel(){
    this.showRemoveNodePanelVisible = true
    this.onClose = false
  }

  removenode = ''
  removeNode(){
    const newNode = { Value: this.removenode, Children: [] };
    this.deleteNode(newNode, this.treeNodes[0]);
    this.removenode = ''
  }

  deleteNode(node: any, parentNodes: any){
    if (parentNodes.Value === null) {
      console.log("Parent null")
      return;
    }

    if(parentNodes === null){
      return parentNodes
    }
  
    if (node.Value > parentNodes.Value) {
      if (parentNodes.Children.length === 0) {
        // Value not found
        return;
      }
  
      if (parentNodes.Children[1].Value === node.Value) {
        parentNodes.Children[1] = this.mergeSubtrees(parentNodes.Children[1].Children);
        if(parentNodes.Children[1].Value === null && parentNodes.Children[0].Value === null){
          parentNodes.Children = []
        }
      } else {
        this.deleteNode(node, parentNodes.Children[1]);
      }
    } 
    
    else if (node.Value < parentNodes.Value) {
      if (parentNodes.Children.length === 0) {
        // Value not found
        return;
      }
      if (parentNodes.Children[0].Value === node.Value) {
        parentNodes.Children[0] = this.mergeSubtrees(parentNodes.Children[0].Children);
        if(parentNodes.Children[1].Value === null && parentNodes.Children[0].Value === null){
          parentNodes.Children = []
        }
      } else {
        this.deleteNode(node, parentNodes.Children[0]);
      }
    } else {  
      // Node with the value to remove found
      parentNodes.Value = null;
      parentNodes.Children = [];
    }
  }

  mergeSubtrees(subtrees: any[]): any {
    if (subtrees.length === 0) {
      return { Value: null, Children: [] };
    } else if (subtrees.length === 1) {
      return subtrees[0];
    } else {
      // Merge subtrees based on your merging logic
      // For simplicity, assuming merging left and right subtrees
      const mergedNode = {
        Value: subtrees[0].Value,
        Children: [this.mergeSubtrees(subtrees[0].Children), subtrees[1]]
      };
      return mergedNode;
    }
  }


  addNode() {
    const newNode = { Value: this.newNodeValue, Children: [] };
    this.insertNode(newNode, this.treeNodes[0]); // Insert the node into the tree
    this.newNodeValue = '';
  }

  insertNode(node: any, parentNodes: any): void {
    // Logic to insert the node into the tree while maintaining BST properties
    if(parentNodes.Value === null){
      // console.log("Error in adding Node")
      parentNodes.Value = node.Value;
      return
    }

    if(node.Value > parentNodes.Value){
      if(parentNodes.Children.length === 0){
        const newNodeleft = { Value: null, Children: [] }
        parentNodes.Children.push(newNodeleft);
        parentNodes.Children.push(node);
        return
      }
      else{
        
        this.insertNode(node, parentNodes.Children[1])
      }
    }
    else {
      if (parentNodes.Children.length === 0) {
        const newNodeLeft = { Value: null, Children: [] };
        parentNodes.Children.push(node);
        parentNodes.Children.push(newNodeLeft);
      } else {
        this.insertNode(node, parentNodes.Children[0]);
      }
    }
  }

  close(){
    this.onClose = true
    this.showRemoveNodePanelVisible = false
    this.showAddNodePanelVisible = false
    this.onLoop = false
  }

  onLoop: boolean = false
  searchVal = 0
  currNode = this.treeNodes[0]
  returnMessage = ""
  

  onStep(){
    if(this.currNode.Children.length === 0 && this.currNode.Value !== this.searchVal){
      this.returnMessage = "Value not found in the binary search tree";
    }
    else if(this.currNode.Children.length === 0 && this.currNode.Value === this.searchVal){
      this.returnMessage = "Value found in the binary search tree";
    }

    else{
      if(this.currNode.Value === this.searchVal){
        this.returnMessage = "Value found in the binary search tree";
      }
      else if(this.currNode.Value < this.searchVal){
        this.currNode = this.currNode.Children[1]
      }
      else{
        this.currNode = this.currNode.Children[0]
      }
    }
  }

  restartLoop(){
    this.RunLoopPanel()
  }
  
  RunLoopPanel(){
    this.onLoop = true
    this.onClose = false
    this.currNode = this.treeNodes[0]
  }
  getNodeComparison(): string {
    if (this.currNode.Value < this.searchVal) {
      return 'Less Than';
    } else if (this.currNode.Value > this.searchVal) {
      return 'Greater Than';
    } else {
      return 'Equal';
    }
  }

}

