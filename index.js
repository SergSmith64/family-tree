console.log("START");

// ___ Object ___

let homo = {
  name: "John",
  familia: undefined,
  age: 0
}
console.log(homo);
if (homo.familia === undefined)
  console.log("!!!!!!!!!!!");
  else console.log("???????????");


// ---------------------------------------------------

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;
// console.log("___animal__ =", animal);
// console.log("___rabbit__ =", rabbit);

// --------------------------

// class Animal {
// 		constructor(name) {
// 			this.speed = 0;
// 			this.name = name;
// 		}
// 		run(speed) {
// 			this.speed = speed;
// 			console.log(`${this.name} бежит со скоростью ${this.speed}.`);
// 		}
// 		stop() {
// 			this.speed = 0;
// 			console.log(`${this.name} стоит.`);
// 		}
// 	}

// 	let animal = new Animal("Мой питомец");

console.log("END");
