// enhance object literals
//antes
function newUser(name, age, country) {
  return {
    name: usenamer,
    age: age,
    country: country,
  };
}
//Ahora

function newUsers(name, age, country) {
  return {
    name,
    age,
    country,
  };
}
