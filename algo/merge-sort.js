
function mergeSort(arr){
    let half, right, left;
    if (arr.length<=1){
        return arr;
    }
    if(arr.length >= 1){
        half = Math.floor(arr.length/2)
        left = arr.slice(0, half);
        right = arr.slice(half);
        let leftMerge = mergeSort(left);
        let rightMerge = mergeSort(right);
        return merge(leftMerge, rightMerge);
    }
    return arr;
}

function merge(left, right){
    let arr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex<left.length&&rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            arr.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            arr.push(right[rightIndex]);
            rightIndex++;
        }  
    }
    while(leftIndex<left.length){
        arr.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length){
        arr.push(right[rightIndex]);
        rightIndex++;
    }
    return arr;
}
let a = [111,5,414,23];
let b = [54,12,-2,4,0,-33,23,-77];
console.log(mergeSort(a));
console.log(mergeSort(b));
