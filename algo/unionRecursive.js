function unionRecursive(arr1, arr2, array=[], oneIndex=0, twoIndex=0){
    if (oneIndex >= arr1.length || twoIndex >= arr2.length) return array
    if(arr1[oneIndex]== arr2[twoIndex]){
        array.push(arr1[oneIndex])
        return unionRecursive(arr1, arr2, array, oneIndex + 1, twoIndex + 1)
    }
    if (arr1[oneIndex] < arr2[twoIndex] && arr1 != undefined){
        array.push(arr1[oneIndex])
        return unionRecursive(arr1, arr2, array, oneIndex+1, twoIndex)
    }
    if (arr1[oneIndex] > arr2[twoIndex] && arr1 != undefined){
        array.push(arr2[twoIndex])
        return unionRecursive(arr1, arr2, array, oneIndex, twoIndex+1)
    }
}
console.log(unionRecursive([1,2,2,2,7],[2,2,6,6,7] )) //[1,2,2,2,6,6,7]