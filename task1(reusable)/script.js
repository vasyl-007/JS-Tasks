'use strict';

const myName = 'metamodern';

const DATE = 2000;

const greeeting = (name = 'anonymous') => {
  console.log('Hello, ' + name);
};

greeeting('timur');
greeeting(myName);
greeeting(DATE);


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


