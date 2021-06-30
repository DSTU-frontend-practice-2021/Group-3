const findSquares = num => {
    let max = (num + 1) / 2;
    let min = max - 1;
    return `${max**2}-${min**2}`;
};