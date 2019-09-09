'use strict';

const menArray = [
  { name: 'Mark', phone: '+380965487564' },
  { name: 'Timur', phone: '+380964578521' },
  { name: 'Rostislav', phone: '+380686541235' },
  { name: 'Igor', phone: '+380987453122' },
  { name: 'Deniska', phone: '+380965555555' },
  { name: 'Nechaika', phone: '+380971234567' },
];


const findPhoneByName = name => {
  let found = true;
  for (let index = 0; index < menArray.length; index++) {
    if (menArray[index].name !== name) {
      found = false;
      continue;
    } else {
      found = true;
      return menArray[index].phone;
    }
  }
  if (found === false) {
    return 'User not found';
  }
};

console.log(findPhoneByName('Deniska'));
console.log(findPhoneByName('Victor')); //not found

menArray.push({ name: 'Victor', phone: '+380784523175' });

console.log(findPhoneByName('Victor')); //found
