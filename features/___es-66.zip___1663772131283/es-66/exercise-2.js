const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

//const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};
let {id,...rest}=person;
//console.log(id, personInfo);
console.log(id,rest);
console.log(rest);
