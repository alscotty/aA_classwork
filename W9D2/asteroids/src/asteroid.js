const Util=require('./util.js');
const MovingObject=require('./moving_object.js');


Util.inherits(Asteroid,MovingObject);

COLOR='mediumorchid';
RADIUS=25;

//pass is as {pos: }
function Asteroid(pos, game){
  MovingObject.call(this,pos);
  this.color=COLOR;
  this.radius=RADIUS;
  this.vel = Util.randomVec(10)
  this.game = game;

};

module.exports = Asteroid;
