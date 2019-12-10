// Function.prototype.inherits = function(ParentClass) {
//   function Surrogate(){}
//   Surrogate.prototype = ParentClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }

Function.prototype.inherits = function(ParentClass){
  this.prototype=Object.create(ParentClass.prototype)
  this.prototype.constructor = this;
}

function MovingObject(object) {
  this.object = object;
}

function Ship(name,object) {
  MovingObject.call(this,object)
  this.name = name;
}
Ship.inherits(MovingObject);

function Asteroid(craters,object) {
  this.craters=craters;
  MovingObject.call(this,object)
}

Asteroid.inherits(MovingObject);

MovingObject.prototype.move=function(num){
  console.log(`${this.object} moved  ${num} feet.`)
}

let rock=new MovingObject("rock");

let titanic=new Ship("Titanic", 'boat');

let astro=new Asteroid(12,"big rock")

