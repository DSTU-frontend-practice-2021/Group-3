function highAndLow(numbers){
    let arr = numbers.split(' ');
    let min = numArr[0];
    let max = numArr[0];
    
    for (let i of arr) {
      if (Number(i) > max) {
        max = i;
      }
      
      if (Number(i) < min) {
        min = i;
      }
    }
    
    return max + ' ' + min
  }