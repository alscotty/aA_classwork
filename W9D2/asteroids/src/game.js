const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');


 DIM_X=1000
 DIM_Y=800
 NUM_ASTEROIDS=10

 Game.prototype.randomPosition=function(){
  //  let pos = [(Math.random() * 600), (Math.random() * 400)];

   return { pos: [(Math.random() * DIM_X), (Math.random() * DIM_Y)]};
 }

 function Game() {
   this.asteroids=[];
   this.addAsteroids();
   this.ship= new Ship(this.randomPosition());
 }

 Game.prototype.addAsteroids=function(){
   let random;
  while (this.asteroids.length<NUM_ASTEROIDS){
    random=this.randomPosition();
    this.asteroids.push(new Asteroid(random,this))
  }
   
 }

Game.prototype.draw=function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
 this.asteroids.forEach(asteroid=>{
  asteroid.draw(ctx);
 });
 this.ship.draw(ctx);
}

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(asteroid => {
  asteroid.move();
});
}


Game.prototype.wrap=function(pos){
  if (pos[0]>DIM_X){
    pos[0]=0;
  } else if (pos[0]<0){
    pos[0]=DIM_X;
  }
  if (pos[1] > DIM_Y) {
    pos[1] = 0;
  } else if(pos[1] < 0){
    pos[1] = DIM_Y;
  }

  return pos;
}

Game.prototype.checkCollisions=function(){
  for(let i=0; i<this.asteroids.length;i++){
    for (let j = i+1; j < this.asteroids.length-1; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])){
        // alert("Collision!!");
        this.asteroids[i].collideWith(this.asteroids[j]);
      }
    }
  }
}

Game.prototype.step=function(){
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
  for (let i = 0; i < this.asteroids.length; i++) {
    if (this.asteroids[i] === asteroid) {
       this.asteroids=this.asteroids.slice(0,i).concat(this.asteroids.slice(i+1));
    }
  }
}


module.exports = Game;
