function highAndLow(numbers){
  let numbersList;
  numbersList = numbers.split(" ").map(Number);
  numbersList.sort(function(a, b) {return a - b;});
  return numbersList[numbersList.length - 1].toString() + " " + numbersList[0].toString() 
}