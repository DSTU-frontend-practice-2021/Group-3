function solution(string) {
    let newStr = ""
    let stringArr = string.split("")
    for(let cur of stringArr){
    
      if( cur === cur.toString().toUpperCase()){
           newStr +=` ${cur}`
       }else {
           newStr+=cur
       }
      console.log(newStr)
    }
  
  return newStr
}