var humanYearsCatYearsDogYears = function(humanYears) {
// Your code here!
a = [humanYears, 0, 0]
if (humanYears >= 1){
a[1]+=15
a[2]+=15
if (humanYears >= 2){
a[1]+=9
a[2]+=9
}
}
if (humanYears > 2){
a[1] = a[1] + (humanYears - 2) * 4
a[2] = a[2] + (humanYears - 2) * 5
}
return a;