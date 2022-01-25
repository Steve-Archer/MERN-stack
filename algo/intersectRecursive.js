const intersect = (arr1, arr2, oneIndex = 0, twoIndex = 0, array = []) => {
    if (oneIndex >= arr1.length || twoIndex >= arr2.length) return array
    if (arr1[oneIndex] == arr2[twoIndex]) {
        array.push(arr1[oneIndex])
        return intersect(arr1, arr2, oneIndex + 1, twoIndex + 1, array)
    }
    if (arr1[oneIndex] < arr2[twoIndex]) return intersect(arr1, arr2, oneIndex + 1, twoIndex, array)
    else return intersect(arr1, arr2, oneIndex, twoIndex + 1, array)
}
console.log(intersect([1, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 5, 6]))
