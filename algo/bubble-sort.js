function bubbleSort(arr){
    for(let i=arr.length-1;i>=0;i--){
        for(let j=0;j<=arr.length;j++){
            if(j<i){
                if (arr[j]>=arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    console.log(arr);
                }
            }
            
        }
    }
    return arr;
}
let array = [4,11,23,15,6]
console.log(bubbleSort(array)); 