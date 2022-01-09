//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. 
//The string can contain any char.
function XO(str) {
    let x = 0;
    let o = 0;

    for(const letter of str){
      if(letter === 'x' || letter === 'X'){
        x+=1;
      }
      if(letter === 'o' || letter === 'O'){
        o+=1;
      }
    }
    x===o ? console.log(true): console.log(false);
  }
  XO("xoxo");
