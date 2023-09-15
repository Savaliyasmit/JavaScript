//generator function use in most of rect
//you don'need return write multiple time

// function* generator() {
//     yield 11+1+11;
//     yield 11+1+21;
//     return 11+1+31;
// }

// let gern =generator()
// console.log(gern.next().value);
// console.log(gern.next().value);
// console.log(gern.next().value);


//f1.unction call()method 
/*
1.The call() method is a predefined JavaScript method.
 2.It can be used to invoke (call) a method with an owner object as an
argument (parameter).
3. With call(), an object can use a method belonging to another object.
*/

// function ca(){
        
//      return  `the product name is :-${this.productName} and price is :-${this.price}`
    
// }

// let product = {
//       productName:"tv",
//        price:9000
// }

// x = ca.call(product)
// console.log(x);




//2.apply() work as array

// function ca(warrnty,bill){
        
//      return  `the product name is :-${this.productName} and price is :-${this.price}
// warranty is ${warrnty} , bill orignal make ${bill}`
    
// }

// let product = {
//       productName:"tv",
//        price:9000
// }

// x = ca.apply(product,['3years' ,'9000'])
// console.log(x);




//bind method()
// function ca(){
        
//      return  `the product name is ${this.productName}. and price is ${this.price}.`
    
// }

// let product = {
//       productName:"tv",
//        price:9000
// }

//  let x = ca.bind(product)
// console.log(x());
