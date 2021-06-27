function list(names){
  let str = '';
  let lst = names;
  for(let i = 0; i < lst.length; i++){
    if(i === lst.length-2){
      str += lst[i].name + ' & '
    }else if(i === lst.length-1){
        str += lst[i].name
      }else{
  str += lst[i].name + ', '
      }
    }
  return str
}