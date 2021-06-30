function strangeMath(n, k){
const a = [];
for (var i = 1; i <= n; i++) {
a.push(i)
}
return a.sort().indexOf(k) + 1
}