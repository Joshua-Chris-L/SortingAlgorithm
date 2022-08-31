export class NumbersCollection {

    constructor(public data:number[]){}
    // Returns lenght when an intance of number collection is created without ()
    get length(): number{
        return this.data.length;
    }

    compare(leftIndex:number, rightIndex:number): boolean {
         return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
       const temp = this.data[leftIndex];  //temp = leftHand
       this.data[leftIndex] = this.data[rightIndex]
       this.data[rightIndex] = temp;
    }
}
