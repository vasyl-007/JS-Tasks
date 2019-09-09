'use strict';

const average = (a, b) => {
  const result = ((a + b) / 2).toFixed(2);
  return result;
};


console.log(average(7, 40));
console.log(average(-1, 8));
console.log(average(0, 123));
/*=======================*/

const square = a => a * a;
console.log(square(2));
/*=======================*/


const cube = a => Math.pow(a, 3);


console.log(cube(2));
/*=======================*/

console.log('/*=======================*/');
for (let index = 0; index < 10; index++) {
  console.log((average(square(index), cube(index))));
}
