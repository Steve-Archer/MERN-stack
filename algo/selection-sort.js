function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let largest = arr[0];
        let bigIndex = 0;
        for(let j=0;j<arr.length-i;j++){
            if(largest<arr[j]){
                largest=arr[j];
                bigIndex = j;
            }
        }
        [arr[bigIndex], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[bigIndex]];
    }
    return arr;
}
console.log(selectionSort([5,7,2,9,1,4]));