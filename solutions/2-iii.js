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