console.log("START");

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} стоит.`);
    }
  }
  
  let animal = new Animal("Мой питомец");