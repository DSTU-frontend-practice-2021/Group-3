const findSquares = num => {
      let min = (Math.floor(num/2)**2);
      let max = (Math.round(num/2)**2);
      return `${max}-${min}`
    };