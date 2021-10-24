//1.1
const quarterOf = (month) => {
  return Math.ceil(month / 3);
}


//1.2
var humanYearsCatYearsDogYears = function(humanYears) {
  var c = 0;
  var d = 0;
  switch (humanYears) {
      case 1: c = 15;   d = 15  ; break;
      case 2: c = 15+9; d = 15+9; break;
      default: 
        c = 15+9+ (humanYears-2)*4; 
        d = 15+9+ (humanYears-2)*5;
        break;
  }
  return [humanYears,c,d];
}


//1.3
function checkAlive (health) {
  return health > 0;
}


//2.1
function highAndLow(numbers){
  let ints = numbers.split(" ").map( (it) => { return parseInt(it) } );
  let max  = Math.max.apply(null, ints);
  let min  = Math.min.apply(null, ints);
  
  return `${max} ${min}`;
}


//2.2
const findSquares = num => {
  var halfLife = Math.ceil(num / 2);
  var max = Math.pow( halfLife, 2);
  var min = Math.pow( halfLife - 1, 2); 
    return `${max}-${min}`;
};


//2.3
function strangeMath(n, k) {
  let arr = [];
  
  for (var i = 1; i <= n; i++) arr.push(`${i}`);
  return arr.sort().indexOf(`${k}`) + 1;
}

//3 Скука - фундаментальная неспособность осознать жызнь.

// Автор - Данил Козицкий
// весь код проверен на codewars