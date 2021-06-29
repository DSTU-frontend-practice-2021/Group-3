function list(names){

  const namelist = names.map((name, i)=>{
       return name.name + ","      
  })
  
  if(namelist.length > 1) {
    
    namelist.splice(namelist.length - 1, 0, "&");
    
    namelist.splice(namelist.length -1, 1, namelist[namelist.length-1].substring(0, namelist[namelist.length-1].length - 1));
    namelist.splice(namelist.length -3, 1, namelist[namelist.length-3].substring(0, namelist[namelist.length-3].length - 1));
  }
  
  if(namelist.length === 1) {
    namelist.splice(namelist.length -1, 1, namelist[namelist.length-1].substring(0, namelist[namelist.length-1].length - 1));
  
  }

  
  return namelist.join(" ")
  
}