import { Sortable } from "./Sorter";

class Node {
  constructor(public data: number) {}
  next: (null | Node) = null;
}

export class LinkedList implements Sortable {
  head: (null | Node) = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while(node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  add(value: number): void {
    const node = new Node(value);

    if (!this.head) {
      // will be tail
      this.head = node;
      return;
    }

    // go from tail to head, and connect new Node with current head
    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    const head = tail;
    head.next = node;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Out of bounds');
    }

    let currentIndex = 0;

    let node: (Node | null) = this.head;

    while(node) {
      if (currentIndex === index) {
        return node;
      }

      node = node.next;
      currentIndex++;
    }

    throw new Error('Out of bounds');
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

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const leftHand = leftNode.data;
    leftNode.data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }
}
