const quarterOf = (month) => {
  
  let first = [1,2,3]
  let second = [4,5,6]
  let third = [7,8,9]
  let fourth = [10,11,12]
  
  let i = 0
  
  for(i in first){
    
    if (first.includes(month)){
      return 1
    }
    
    else if (second.includes(month)){
      return 2
    }
    
    else if (third.includes(month)){
      return 3
    }
    
    else if (fourth.includes(month)){
      return 4
    }    
    
  }
  
  
}