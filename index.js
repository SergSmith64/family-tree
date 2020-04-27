console.log("START");

// ___ Object ___

let homo = {
  gender: undefined,
  name: undefined,
  familia: undefined,
  age: 0
}
console.log("HOMO__",homo);
// if (homo.familia === undefined)
//   console.log("!!!!!!!!!!!");
//   else console.log("???????????");

// -------------------------------------

console.log("ВЫВОДИМ начало ввода инфы-1");

document.getElementById('addHomo').onclick = function() {
  console.log("ВЫВОДИМ начало ввода инфы-2");
  var g = document.getElementById('gender').value;
  var f = document.getElementById('familia').value;
  var n = document.getElementById('name').value;
  var a = document.getElementById('age').value;
  console.log("ВЫВОДИМ КЛИК !!!");
  homo.gender = g;
  homo.familia = f;
  homo.name = n;
  homo.age = a;
  console.log("HOMO__",homo);
  veiwInfo();
  console.log("выше вывел инфу о человеке");
}

function veiwInfo() {
  var infoHomo = "";

  infoHomo = homo.familia + " " + homo.name + " " + homo.age;
  document.getElementById('veiwInfo').innerHTML = infoHomo;
}

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
