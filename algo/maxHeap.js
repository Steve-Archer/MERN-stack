class MaximumHeap {
    constructor() {
        this.values = [null];
    }
    swap(value1,value2){
        [this.values[value1], this.values[value2]]=[this.values[value2], this.values[value1]]
    }
    insert(value) {
        this.values.push(value);
        let currentIdx = this.values.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);
        while (currentIdx > 1 && this.values[parentIdx] < this.values[currentIdx]) {
            [this.values[parentIdx], this.values[currentIdx]] = [this.values[currentIdx], this.values[parentIdx]];
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
        console.log(this.values)
        return this;
    }
    extractMax(){
        this.swap(1,this.values.length-1);
        let max = this.values.pop()
        let currentIdx = 1;
        let childIdx = '';
        while(this.values[currentIdx]<this.values[currentIdx*2]||this.values[currentIdx]<this.values[(currentIdx*2+1)]){
            if(this.values[currentIdx*2]>this.values[currentIdx*2+1]){
                childIdx = currentIdx*2;
            }
            else{
                childIdx = currentIdx*2+1;
            }
            this.swap(currentIdx,childIdx)
            currentIdx = childIdx;
        }
        console.log(this.values)
        return max;
    }
}
let heap1 = new MaximumHeap()

heap1.insert(7).insert(5).insert(3).insert(-1).insert(6).insert(44).insert(13).insert(100).extractMax()

console.log(heap1.values)