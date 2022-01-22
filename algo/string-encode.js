fbconst stringEncode = (str) => {
    let stringObj = {}
    let returnString = ""
    for(let i=0;i<str.length;i++){
        if (str[i] in stringObj){
            stringObj[str[i]] += 1
        }
        else{
            stringObj[str[i]] = 1
            if(str[i-1] in stringObj){
                returnString += str[i-1]
                returnString += stringObj[str[i-1]]
            }
        }
        if(str[i+1] == undefined){
            returnString += str[i]
            returnString += stringObj[str[i]]
        }
        console.log(i, stringObj, returnString)
    }
    return returnString
}
console.log(stringEncode("aaabbbcddddeefff"))