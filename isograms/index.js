/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
 */
function isIsogram(str){
  const stringL = str.toLowerCase();
  const word = [];
  for(let letter of stringL){
    if(word.indexOf(letter) !== -1){
      return false;
    }if(word.indexOf(letter) === -1){
      word.push(letter);
    }
  }
  if(word.lenght === stringL.lenght){
    return true;
  }
}
isIsogram('');