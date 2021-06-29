function list(names){
    let arrLen = names.length;
    let arr = [];
    let i = 0;
    while (i<arrLen){
      if (i == arrLen-1) {
        if (arrLen ==1){
          arr.push(names[i].name);
        }
        else{
          arr.push("&");
          arr.push(names[i].name);
        }
        i++;
      }
      else if (i ==arrLen-2) {
        arr.push(names[i].name);
        i++;
      }
      else {
        arr.push(names[i].name +",");
        i++;
      }
    }
    return arr.join(' ')
  }