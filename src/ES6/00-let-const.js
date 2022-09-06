////////////////////////////////////////////////////////////////////////////////////////
//var y let se pueden re-asignar valores
var lastName = "Juan";
lastName = "Javier";
console.log(lastName);

//var y let se pueden re-asignar valores
let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

// Const no se puede re-asignar
const animal = "dog";
animal = "cat";
console.log(animal);

////////////////////////////////////////////////////////////////////////////////////////
const fruits = () => {
  if (true) {
    var fruit1 = "apple"; // var si puede leerse fuera del bloque
    let fruit2 = "kiwi"; // let se puede leer dentro del bloque pero no afuera de este bloque
    const fruit3 = "banana"; // const se puede leer dentro del bloque pero no afuera de este bloque
  }

  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();

////////////////////////////////////////////////////////////////////////////////////////
