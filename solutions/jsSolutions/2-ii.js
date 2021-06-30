const findSquares = num => {
// return `${max}-${min}`;
return Math.pow(~~(num/2) + 1, 2).toString() + "-" + Math.pow(~~(num/2), 2).toString();
};