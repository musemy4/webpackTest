// es6 모듈
import { pi, power, Foo } from './lib';

//polyfill load
import "@babel/polyfill";

console.log(pi);
console.log(power(pi,pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());


//es6에서 추가된 promise, object.assign, array.from 등은 
//es5에서 대체할수 있는 기능이 없다. 

//polyfill이 필요한 코드
console.log(new Promise((resolve, reject) =>{
    setTimeout(() => resolve(1), 100);
}));

console.log(Object.assign({}, {x: 1}, {y: 2}));

console.log(Array.from([1,2,3],v => v + v));

