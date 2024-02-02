{
    let x = 0;
    for( i=0 ;i<arguments.length ;i++){
        x += arguments[i] ;
    }
    return x ;
}
let result = lensum(1,2,3)
console.log(result);