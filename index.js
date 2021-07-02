// 2.i Highest and Lowest
function highAndLow(numbers){
  const nums = numbers.split(" ").map(num => +num);
  return `${Math.max(...nums)} ${Math.min(...nums)}`  
}



// 2.ii Find the squares
const findSquares = num => {
  n = (num + 1) / 2
  return `${n**2}-${(n-1)**2}`
};



// 2.iii Strange mathematics
function strangeMath(n, k){
    return Array.from({length: n}).map((i, ind)=>(ind+1).toString()).sort().indexOf((k).toString())+1
}

function strangeMath(n, k){
    const arr = [0];

    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr.sort().indexOf(k)
}