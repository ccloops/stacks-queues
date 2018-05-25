'use strict';

class Stack {

  contructor() {
    this.storage = new Array();
  }

  push(item) {
    this.storage.unshift(item);
    console.log(this.storage);
  }

  pop() {
    return this.storage.shift();
  }
}
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);

console.log(s);


// console.log(s.pop());
// console.log(s.pop());

module.exports = Stack;
