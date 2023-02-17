// Object.assign sem objeto vazio

const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// Object.assign com objeto vazio

const person1 = {
    name:'Roberto',
  };
  
  const lastName1 = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person1,lastName1);

  newPerson.name = 'Gilberto';

  console.log(newPerson);
  console.log(person1);
