'use strict';

const myName = 'metamodern';
const DATE = 2000;
const greeeting = (name = 'anonymous') => {
  console.log('Hello, ' + name);
};

greeeting('timur');
greeeting(myName);
greeeting(DATE);
