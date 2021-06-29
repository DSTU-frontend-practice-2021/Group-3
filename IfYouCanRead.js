function to_nato(words) {
    let splits = words.split('');
    let j = 0;
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
    while (j<len2){
      if (splits[j] =="!" || splits[j] =="," || splits[j] =="." || splits[j] =="?"){
        arr.push(splits[j]);
        j++;
      }
      else{
        let char = splits[j];
        arr.push(NATO[char]);
        j++;
      }
    }
    return arr.join(' ')
  }