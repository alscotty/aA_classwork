const Util = require('./util.js');
const MovingObject = require('./moving_object.js');


Util.inherits(Ship,MovingObject);

COLOR1="goldenrod";
RADIUS1=15;

function Ship(pos_hash){
  this.color=COLOR1;
  this.radius=RADIUS1;
  this.vel=0;
  this.pos=pos_hash['pos'];
};



module.exports = Ship;