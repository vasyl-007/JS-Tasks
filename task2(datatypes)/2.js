'use strict';

const inc1 = n => n + 1;

const inc2 = num => {
  num.n += 1;
};

const a = 10;
const b = inc1(a);
console.dir({ a, b });

const myObj = { n: 5 };
inc2(myObj);
console.dir(myObj);
