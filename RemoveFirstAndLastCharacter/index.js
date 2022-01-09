function removeChar(str){
    const lastL = str.length-1;
    console.log(str.slice(1, str.length-1));
};
removeChar('eloquent');
// function removeChar(str){
//     return str.slice(1,-1)  // argument -1 is the same as 'str.length -1'
//    };