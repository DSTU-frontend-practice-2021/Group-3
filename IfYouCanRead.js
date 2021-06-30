function to_nato(words) {
  let splits = words.split('');
  let arr = [];
  let arrlen = splits.length;

  for (let i = 0; i<arrlen; i++){
    if (splits[i] == ' '){
      splits.splice(i,1);
    }
  }
  let len2 = splits.length;
  for (let k = 0;k< len2;k++){
    let loww = splits[k].toLowerCase()
    splits.splice(k,1,loww);
  }
  for (let j = 0; j<len2; j++){
    if (["!", ",", ".", "?"].includes(splits[j])){
      arr.push(splits[j]);
    }
    else{
      let char = splits[j];
      arr.push(NATO[char]);
    }
  }
  return arr.join(' ')
}