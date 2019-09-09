'use strict';

const elements = [
  true,
  false,
  false,
  'hello',
  'end',
  123,
  'wow',
  false,
  'maybe',
  1991,
  'marcus',
  1984,
  -500,
  'good',
];

const collection = {
  number: 0,
  string: 0,
  boolean: 0,
};
for (const iterator of elements) {
  typeof(iterator) === 'number' ? collection.number++ :
    typeof(iterator) === 'boolean' ? collection.boolean++ :
      collection.string++;
}

console.log(collection);

/*=======================*/
delete collection.boolean;
delete collection.number;
delete collection.string;

for (const iterator of elements) {
  const tempType = typeof(iterator);
  if (tempType in collection) {
    collection[tempType.toString()]++;
  } else {
    collection[tempType.toString()] = 1;
  }
}

console.log(collection);
