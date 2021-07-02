//Highest and Lowest
function highAndLow(numbers){
    let numbarr = numbers.split(' ')
    let answer = Math.max.apply(Math,numbarr).toString() + ' ' + Math.min.apply(Math,numbarr).toString()
    return answer
  }