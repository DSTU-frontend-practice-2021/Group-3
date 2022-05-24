function highAndLow(numbers){
    const nums = numbers.split(" ").map(num => +num);
    return `${Math.max(...nums)} ${Math.min(...nums)}`  
  }
  