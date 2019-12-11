
function MovingObject(optionsObject){
  this.pos = optionsObject["pos"];
  this.vel = optionsObject["vel"];
  this.radius = optionsObject["radius"];
  this.color = optionsObject["color"];
  this.game = optionsObject["game"];
}

MovingObject.prototype.draw=function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();

}


MovingObject.prototype.move = function() {
  this.pos[0] = this.pos[0] + this.vel[0];
  this.pos[1] = this.pos[1] + this.vel[1];
  this.game.wrap(this.pos);
}


MovingObject.prototype.isCollidedWith=function(otherObject){
  let sum_radii=this.radius+otherObject.radius;
  let x_1 = this.pos[0];
  let y_1 = this.pos[1];
  let x_2 = otherObject.pos[0];
  let y_2 = otherObject.pos[1] ;

  let dist = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);

  if (dist<sum_radii){
    return true;
  }
  else if (dist<sum_radii){
    return true;
  }
  return false;
}

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(this);
  otherObject.game.remove(otherObject);

  // for (let i = 0; i < this.game.asteroids.length; i++) {
  //   for (let j = i + 1; j < this.asteroids.length - 1; j++) {
  //     if (this.[i].isCollidedWith(this.asteroids[j])) {
  //       //;
  //     }
  //   }
  // }
}

module.exports = MovingObject;