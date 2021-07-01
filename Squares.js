const findSquares = num => {
      const min = (Math.floor(num/2)**2);
      const max = (Math.round(num/2)**2);
      return `${max}-${min}`
    };
//в условии задачи функция получает только нечетные числа