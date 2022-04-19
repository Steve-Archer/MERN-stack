const dec2binary = num => {
    let array = []
    let remainder = 0
    let result = ""
    while(num>0){
        remainder = num % 2
        num = Math.floor(num/2)
        array.push(remainder)      
    }
    for(i=array.length-1;i>=0;i--){
        result += array[i]
    }
    return result
} 
console.log(dec2binary(28))
console.log(dec2binary(33))

const dec2binaryrecursive = (num, array = []) => {
    if(num == 0){
        let result = ""
        for(i=array.length-1;i>=0;i--){
            result += array[i]
        }
        return result
    }
    if(num > 0){
        array.push(num % 2)
        num = Math.floor(num/2)
        return dec2binaryrecursive(num, array)
    }
}
console.log(dec2binaryrecursive(28))
console.log(dec2binaryrecursive(33))