"use strict";

var _lib = require("./lib");

require("@babel/polyfill");

// es6 모듈
//polyfill load
console.log(_lib.pi);
console.log((0, _lib.power)(_lib.pi, _lib.pi));
var f = new _lib.Foo();
console.log(f.foo());
console.log(f.bar()); //es6에서 추가된 promise, object.assign, array.from 등은 
//es5에서 대체할수 있는 기능이 없다. 
//polyfill이 필요한 코드

console.log(new Promise(function (resolve, reject) {
  setTimeout(function () {
    return resolve(1);
  }, 100);
}));
console.log(Object.assign({}, {
  x: 1
}, {
  y: 2
}));
console.log(Array.from([1, 2, 3], function (v) {
  return v + v;
}));