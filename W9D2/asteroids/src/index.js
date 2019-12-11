const MovingObject = require('./moving_object.js'); 
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');
const Ship = require('./ship.js');

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;

console.log("Webpack is working!")

window.addEventListener('DOMContentLoaded', (event)=>{
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext("2d");

  g=new Game();
  gv=new GameView(g,ctx);
  gv.start()

  console.log('DOM fully loaded and parsed');
});
