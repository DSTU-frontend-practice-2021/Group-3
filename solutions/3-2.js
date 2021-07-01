function solution(string) {
    let result = "";
    for(let i = 0; i < string.length; i++){
      if(string[i].charCodeAt() > 96){
        result += string[i];
      }
      else{
        result += " " + string[i];
      }  
    }
    return result;
}