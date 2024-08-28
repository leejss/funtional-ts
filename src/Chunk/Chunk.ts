export class Chunk<T> {
  private _arr: T[];

  constructor(arr: T[]) {
    this._arr = arr;
  }

  map<R>(callback: (value: T, index: number, array: T[]) => R): Chunk<R> {
    const result: R[] = [];
    for (let i = 0; i < this._arr.length; i++) {
      result.push(callback(this._arr[i], i, this._arr));
    }

    return new Chunk(result);
  }

  filter(callback: (value: T, index: number, array: T[]) => boolean): Chunk<T> {
    const result: T[] = [];

    for (let i = 0; i < this._arr.length; i++) {
      if (callback(this._arr[i], i, this._arr)) {
        result.push(this._arr[i]);
      }
    }

    return new Chunk(result);
  }

  forEach(callback: (value: T, index: number, array: T[]) => void) {
    for (let i = 0; i < this._arr.length; i++) {
      callback(this._arr[i], i, this._arr);
    }
  }
}
