// Type your code below this line!
const prompt = require('prompt-sync')();

function FriendList(friends) {
  this.friends = friends;
}
//const name = prompt("Ingresa tu nombre");
const amountOfFriends = +prompt('¿Cuántos amigos tienes? ');
//console.log(amountOfFriends);

const userFriends = [];
for (let i = 0; i < amountOfFriends; i++) {
  let friend = prompt(`¿Cómo se llama el amigo número ${i + 1}? `);
  userFriends.push(friend);
}
//console.log(userFriends);

const hommies = new FriendList(userFriends);
console.log(hommies.friends);

// Type your code above this line!
