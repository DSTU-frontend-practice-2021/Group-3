function highAndLow(numbers){
numbers = numbers.split(" ")
numbers = numbers.map(function(num){
return parseInt(num);
});
return Math.max(...numbers).toString() +" " +Math.min(...numbers).toString();
}