const stringDecode = str => {
    let newString = ""
    let temp = ""
    let counter = 0
    for(let i=0;i<str.length;i++){
        if(isNaN(str[i])){
            temp = str[i]
        }else{
            if(counter == 0 && !isNaN(str[i+1])){
                counter = str[i]
            }
            if(counter == 0 && isNaN(str[i+1])){
                counter = str[i]
                while(counter != 0){
                    newString += temp
                    counter--
                }
            }
            if(counter != 0 && isNaN(str[i+1])){
                counter = counter + str[i]
                while(counter != 0){
                    newString += temp
                    counter--
                }
            }
        }
        console.log(counter, temp, newString)
    }
    return newString
}
let codeString = "a3b14c12d1"
console.log(stringDecode(codeString))