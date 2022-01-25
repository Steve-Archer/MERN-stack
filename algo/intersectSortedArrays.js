const intersect = (arr1, arr2) => {
    let array = []
    let oneIndex = 0
    let twoIndex = 0
    while (oneIndex < arr1.length && twoIndex < arr2.length){
        if(arr1[oneIndex]==arr2[twoIndex]){
            array.push(arr1[oneIndex])
            oneIndex++
            twoIndex++
        }
        else if (arr1[oneIndex]< arr2[twoIndex]){
            oneIndex++
        }
        else{
            twoIndex++
        }
    }
    return array
}

let array1 = [1,2,3,3,4,5,6]
let array2 = [2,3,3,5,5,6]
console.log(intersect(array1, array2))
