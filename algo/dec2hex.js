const dec2hex = num => {
    let array = []
    let result = ""
    while(num != 0){

        if(num%16<=9){
            array.push(num % 16)
        }
        else if (num%16==10){
                array.push("A")
        }
        else if (num%16==11){
                array.push("B")
        }
        else if (num%16==12){
                array.push("C")
        }
        else if (num%16==13){
                array.push("D")
        }
        else if (num%16==14){
                array.push("E")
        }
        else if (num%16==15){
                array.push("F")
        }
        num = Math.floor(num/16)
    }
    for(i=array.length-1;i>=0;i--){
        result += array[i]
    }
    return result
}

console.log(dec2hex(35631)) // 8B2F
console.log(dec2hex(28))

const dec2hexRecursive = (num, array = []) => {
    if(num == 0){
        let result = ""
        for(i=array.length-1;i>=0;i--){
            result += array[i]
        }
        return result
    }
    if(num%16<=9){
        array.push(num%16)
        return dec2hexRecursive(Math.floor(num/16), array)
    }
    else if(num%16==10){
        array.push("A")
        return dec2hexRecursive(Math.floor(num/16), array)
    }
    else if(num%16==11){
        array.push("B")
        return dec2hexRecursive(Math.floor(num/16), array)
    }
    else if(num%16==12){
        array.push("C")
        return dec2hexRecursive(Math.floor(num/16), array)
    }
    else if(num%16==13){
        array.push("D")
        return dec2hexRecursive(Math.floor(num/16), array)
    }
    else if(num%16==14){
        array.push("E")
        return dec2hexRecursive(Math.floor(num/16), array)
    }
    else if(num%16==15){
        array.push("F")
        return dec2hexRecursive(Math.floor(num/16), array)
    }
}
console.log(dec2hexRecursive(35631))

function decToHex(number){
    let conversion = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let result = '';
    while(number/16>0){
        result = conversion[number%16] + result;
        number = Math.floor(number/16)
    }
    return result;
}