'use strict';

const Human = {
  name: 'Meta',
};


let Lector = {
  name: 'Marcus',
};

Human.name = 'Pika';
Lector.name = 'Chu';

console.log(Human.name + Lector.name); //PikaChu

// Human = {
//   changed: true,
// };

//Error

Lector = {
  changed: true,
};

const createUser = (createName, createCity) => {
  const newUser = {
    name: createName,
    city: createCity,
  };
  return newUser;
};

const Timur = createUser('Marcus', 'Roma');
console.log(Timur);
console.log(Timur.name + ' lives in ' + Timur.city + '.');
