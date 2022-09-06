//Antes asignando parametros default
function newUser(name, age, country) {
  var name = name || "No Ingreso name";
  var age = age || "No Ingreso age";
  var country = country || "No Ingreso country";
  console.log(name, age, country);
}
newUser();
newUser("juan", 15, "CRC");

//ES6
function newAdmin(name = "Juan", age = 25, country = "CRC") {
  console.log(name, age, country);
}
newAdmin();
newAdmin("david", 15, "COL");
