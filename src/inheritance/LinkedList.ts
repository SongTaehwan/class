import { Sorter } from "./Sorter"

class Node {
  next: (Node | null) = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: (Node | null) = null;
  constructor() {
    super();
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    
    while(tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let node = this.head;
    let currentIndex = 0;

    while(node.next) {
      if (currentIndex === index) {
        return node;
      }

      node = node.next;
      currentIndex++;
    }

    throw new Error('Index out of bounds');
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node = this.head;

    while(node.next) {
      console.log(node.data);
      node = node.next;
    }
  }
  
  get length(): number {
    if (!this.head) {
      return 0;
    }

    let tail = this.head;
    let length = 0;

    while(tail.next) {
      length++;
      tail = tail.next;
    }

    return length;
  }

  compare(left: number, right: number): boolean {
    return this.at(left).data > this.at(right).data;
  }

  swap(left: number, right: number): void {
    const leftNode = this.at(left);
    const rightNode = this.at(right);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
}
