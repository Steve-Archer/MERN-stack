const bin2dec = binary => {
    let index = binary.length - 1
    let num = 0
    let exp = 0

    while(index>=0){
        if(binary[index] == 1){
            let temp = Math.pow(2, exp)
            num += temp
        }
        index--
        exp++
    }
    return num
}



const bin2decRecursive = (binary, index = binary.length - 1, num = 0, exp = 0) => {
    if(index == -1) return num
    if(binary[index] == 1){
        let temp = Math.pow(2, exp)
        num += temp
    }
    return bin2decRecursive(binary, index - 1, num, exp + 1)
}
console.log(bin2decRecursive("11100")) // 28
console.log(bin2decRecursive("1010101")) // 85
console.log(bin2dec("11100")) // 28
console.log(bin2dec("1010101")) // 85