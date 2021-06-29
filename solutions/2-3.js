function strangeMath(n, k){
  let numbers = [];
  for(let i = 0; i <= n; i++){
    numbers[i] = i;
  }
  numbers.sort();
  return numbers.indexOf(k);
}