export abstract class Sorter {
  abstract swap(left: number, right: number): void
  abstract compare(left: number, right: number): boolean
  abstract length: number;

  sort(): void {
    const length = this.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
