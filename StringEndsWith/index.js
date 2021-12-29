/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). */

function solution(str, ending){
    const le = ending.length;
    str.slice(-le)===ending ? console.log(true) : console.log(false);
}
solution('abc', 'bc');
/* function solution(str, ending){
    return console.log(str.endsWith(ending));
}
solution('gol', 's'); */