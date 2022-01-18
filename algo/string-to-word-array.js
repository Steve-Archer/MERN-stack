let stringToArray = string => {
    let array = []
    let start = 0
    while(string[start]== " "){
        start++
    }
    for(let i=start;i<string.length;i++){
        if(string[i+1] == undefined){
            let temp = string.slice(start, i+1)
            array.push(temp)
        }
        if(string[i] == " " && string[i-1] == " "){
            start = i+1
        }
        if(string[i] ==" " && string[i-1] != " "){
            let temp = string.slice(start, i)
            array.push(temp)
            start = i+1
        }
    }
    if(array[array.length-1]==" "){
        array.pop()
    }
    return array
}
let x = "      Welcome    to   week two!!!    "
console.log(stringToArray(x))