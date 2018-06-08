// require('babel-polyfill');
require('core-js/fn/promise');

console.log('works 2');

const sum = (a,b) => a+b;

class myClass {
    constructor() {
        this.myVar = "value"
    }
}

let p1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 1000, 'test');
});

p1.then(function(resp){
    console.log(resp)
});