function rep(n, s){
    let str = '';
    for(i=0; i<n; i++){
        str+=s;
    }
    return console.log(str);
}
rep(2, 'hello');