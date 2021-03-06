// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size() {
    // need a counting variable
    let counter = 0;
    // need a reference to the head
    let node = this.head;
    // need to iterate using the next as a reference
    while (node) {
      counter ++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (node.next === null){
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return null;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next){
      this.head = null;
      return;
    }

    let node = this.head.next;
    let previous = this.head;

    while (node) {
      if (node.next === null){
        previous.next = null;
        return;
      }
      node = node.next;
      previous = previous.next;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
    }
    let node = this.getLast();
    node.next = new Node(data, null);
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    let counter = 0;

    while (node) {
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if(!this.head){
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;

    return;
  }

  insertAt(data, integer){
    if(!this.head){
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

}

module.exports = { Node, LinkedList };
