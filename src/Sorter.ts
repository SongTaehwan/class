export class Sorter {
  constructor(public data: number[]) {}

  sort(): void {
    const { length } = this.data;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.data[j] > this.data[j + 1]) {
          const leftHand = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = leftHand;
        }
      }
    }
  }
}
