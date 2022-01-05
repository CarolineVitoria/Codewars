// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
    const lengthObject = names.length;
    if(lengthObject===0){
        return '';
    }
    let str = names[0].name;
    
    if(lengthObject===0){
        return '';
    }
    if(lengthObject > 1){
      names[lengthObject - 1].name = ' & ' + names[lengthObject - 1].name;
    }
    for(let i = 1; i < (lengthObject - 1); i++){
      str += ', ' + names[i].name;
    }
        return console.log(str+= names[lengthObject-1].name);
  }
  list([{name:'Bart'}, {name:'Lisa'}, {name: 'Maggie'}]);