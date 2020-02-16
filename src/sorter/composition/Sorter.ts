export interface Sortable {
  length: number;
  swap(leftIndex: number, rightIndex: number): void
  compare(leftIndex: number, rightIndex: number): boolean
}

export class Sorter {
  constructor(public data: Sortable) {}

  sort(): void {
    const length = this.data.length;
    
    for (let i = 0; i < length; i++) {
      for (let j = 0 ; j < length - 1 - i; j++) {
        if (this.data.compare(j, j+ 1)) {
          this.data.swap(j, j + 1);
        }
      }
    }
  }
}
