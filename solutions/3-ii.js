function solution(string) {
  let str = string;
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  for(let i = 0; i < letters.length; i++){
    str = str.split(letters[i]).join(' ' + letters[i])
  }
  return str
}