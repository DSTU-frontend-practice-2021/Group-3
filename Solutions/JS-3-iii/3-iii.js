function to_nato(words) {
  let str1 = words;
  let str2 = '';
  let nato = NATO;
  for(let i = 0; i < str1.length; i++){
    let str3 = str1[i].toLowerCase();
    if(str1[i] === ',' || str1[i] === '.' || str1[i] === '!' || str1[i] === '?'){
      str2 += str1[i] + ' '
    } else if(str1[i] === ' '){
      str2 += ''
    } else{
      str2 += nato[str3] + ' ';
      
    }
  }
  return str2.trim()
}