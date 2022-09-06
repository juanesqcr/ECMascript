//ES6
// Arrays destructuring

let fruit = ["apple", "banana"];
let [a, b] = fruit;
console.log(a, fruit[1]);

// Objects destructuring
let user = { usWername: "Juan", age: 25 };
let { username, age } = user;
console.log(username, user.age);

// spread operator, para unir objetos

let person = { name: "juanes", age: 29 };
let country = "CRC";
let data = { id: 1, ...person, country };
console.log(data);

// rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 2, 3, 4, 1, 2, 3, 4, 5, 6);
