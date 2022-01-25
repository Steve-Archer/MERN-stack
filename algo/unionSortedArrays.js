function union(arr1,arr2){
    let array = []
    let oneIndex = 0
    let twoIndex = 0
    while(oneIndex < arr1.length && twoIndex < arr2.length){
        if(arr1[oneIndex]==arr2[twoIndex]){
            array.push(arr1[oneIndex])
            oneIndex++
            twoIndex++
        }
        if (arr1[oneIndex]< arr2[twoIndex] && arr1[oneIndex] != undefined){
            array.push(arr1[oneIndex])
            oneIndex++
        }
        if (arr1[oneIndex] > arr2[twoIndex] && arr1[oneIndex] != undefined){
            array.push(arr2[twoIndex])
            twoIndex++
        }
    }
    return array
}

console.log(union([1,2,2,2,7],[2,2,6,6,7] )) //[1,2,2,2,6,6,7]