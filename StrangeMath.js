function strangeMath(n, k){
    let arr = []
    for (i = 1; i<= n; i++) {
     arr.push(i)
    }
    arr = arr.sort()
    return arr.indexOf(k) + 1
  }