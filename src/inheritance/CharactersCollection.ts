import { Sorter } from "./Sorter"

export class CharactersCollection extends Sorter {
  constructor(public data: string[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const leftHand = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = leftHand;
  }
}
