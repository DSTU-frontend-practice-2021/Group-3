function strangeMath(n, k) {
    return [...Array(n + 1).keys()].slice(1).sort().indexOf(k) + 1;
}