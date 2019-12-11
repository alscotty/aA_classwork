const Game = require('./game.js');

function GameView(game,ctx){
  this.game=game;
  this.ctx=ctx;
}


GameView.prototype.start = function() {
  let that=this;
  setInterval(function () {
    that.game.draw(that.ctx);
    that.game.step();
  }, 20);

  // setInterval(this.game.draw(this.ctx), 20);
  // setInterval(this.game.moveObjects(), 20);
}

module.exports = GameView;