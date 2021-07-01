const findSquares = num => {
  let bigger = 2;
  let smaller = 1;
  while((bigger*bigger - smaller*smaller) != num){
    smaller++;
    bigger++;
  }
  return bigger*bigger.toString() + "-" + smaller*smaller.toString();
};