// function XO(str) {
//     let x = 0;
//     let o = 0;
//     for(const letter of str){
//         if(letter === 'x' || letter === 'X'){
//             x+=1;
//         }
//         if(letter === 'o' || letter === 'O'){
//             o+=1;
//         }
//     }
//     if(x%o===0){
//         return console.log(true);
//     }
//     else{
//         return console.log(false);
//     }
// }
// XO('xxooox');
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
  XO("o");
  console.log(0/2);