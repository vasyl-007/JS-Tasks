'use strict';



let index = 15;

while (index <= 30) {
  console.log(index);
  index += 2;
}

const range = (start = 0, end = 10) => {
  if (end <= start) {
    console.log('Start is less than end, fool)');
    return;
  }
  let index = start;
  while (index <= end) {
    console.log(index);
    index += 2;
  }
};

range(20);
