/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util=__webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject=__webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\nUtil.inherits(Asteroid,MovingObject);\n\nCOLOR='mediumorchid';\nRADIUS=25;\n\n//pass is as {pos: }\nfunction Asteroid(pos, game){\n  MovingObject.call(this,pos);\n  this.color=COLOR;\n  this.radius=RADIUS;\n  this.vel = Util.randomVec(10)\n  this.game = game;\n\n};\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\n DIM_X=1000\n DIM_Y=800\n NUM_ASTEROIDS=10\n\n Game.prototype.randomPosition=function(){\n  //  let pos = [(Math.random() * 600), (Math.random() * 400)];\n\n   return { pos: [(Math.random() * DIM_X), (Math.random() * DIM_Y)]};\n }\n\n function Game() {\n   this.asteroids=[];\n   this.addAsteroids();\n   this.ship= new Ship(this.randomPosition());\n }\n\n Game.prototype.addAsteroids=function(){\n   let random;\n  while (this.asteroids.length<NUM_ASTEROIDS){\n    random=this.randomPosition();\n    this.asteroids.push(new Asteroid(random,this))\n  }\n   \n }\n\nGame.prototype.draw=function(ctx) {\n  ctx.clearRect(0, 0, DIM_X, DIM_Y);\n this.asteroids.forEach(asteroid=>{\n  asteroid.draw(ctx);\n });\n this.ship.draw(ctx);\n}\n\nGame.prototype.moveObjects = function() {\n  this.asteroids.forEach(asteroid => {\n  asteroid.move();\n});\n}\n\n\nGame.prototype.wrap=function(pos){\n  if (pos[0]>DIM_X){\n    pos[0]=0;\n  } else if (pos[0]<0){\n    pos[0]=DIM_X;\n  }\n  if (pos[1] > DIM_Y) {\n    pos[1] = 0;\n  } else if(pos[1] < 0){\n    pos[1] = DIM_Y;\n  }\n\n  return pos;\n}\n\nGame.prototype.checkCollisions=function(){\n  for(let i=0; i<this.asteroids.length;i++){\n    for (let j = i+1; j < this.asteroids.length-1; j++) {\n      if (this.asteroids[i].isCollidedWith(this.asteroids[j])){\n        // alert(\"Collision!!\");\n        this.asteroids[i].collideWith(this.asteroids[j]);\n      }\n    }\n  }\n}\n\nGame.prototype.step=function(){\n  this.moveObjects();\n  this.checkCollisions();\n}\n\nGame.prototype.remove = function(asteroid) {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    if (this.asteroids[i] === asteroid) {\n       this.asteroids=this.asteroids.slice(0,i).concat(this.asteroids.slice(i+1));\n    }\n  }\n}\n\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(game,ctx){\n  this.game=game;\n  this.ctx=ctx;\n}\n\n\nGameView.prototype.start = function() {\n  let that=this;\n  setInterval(function () {\n    that.game.draw(that.ctx);\n    that.game.step();\n  }, 20);\n\n  // setInterval(this.game.draw(this.ctx), 20);\n  // setInterval(this.game.moveObjects(), 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\"); \nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\nwindow.Ship = Ship;\n\nconsole.log(\"Webpack is working!\")\n\nwindow.addEventListener('DOMContentLoaded', (event)=>{\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n\n  g=new Game();\n  gv=new GameView(g,ctx);\n  gv.start()\n\n  console.log('DOM fully loaded and parsed');\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(optionsObject){\n  this.pos = optionsObject[\"pos\"];\n  this.vel = optionsObject[\"vel\"];\n  this.radius = optionsObject[\"radius\"];\n  this.color = optionsObject[\"color\"];\n  this.game = optionsObject[\"game\"];\n}\n\nMovingObject.prototype.draw=function(ctx){\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n\n}\n\n\nMovingObject.prototype.move = function() {\n  this.pos[0] = this.pos[0] + this.vel[0];\n  this.pos[1] = this.pos[1] + this.vel[1];\n  this.game.wrap(this.pos);\n}\n\n\nMovingObject.prototype.isCollidedWith=function(otherObject){\n  let sum_radii=this.radius+otherObject.radius;\n  let x_1 = this.pos[0];\n  let y_1 = this.pos[1];\n  let x_2 = otherObject.pos[0];\n  let y_2 = otherObject.pos[1] ;\n\n  let dist = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);\n\n  if (dist<sum_radii){\n    return true;\n  }\n  else if (dist<sum_radii){\n    return true;\n  }\n  return false;\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  this.game.remove(this);\n  otherObject.game.remove(otherObject);\n\n  // for (let i = 0; i < this.game.asteroids.length; i++) {\n  //   for (let j = i + 1; j < this.asteroids.length - 1; j++) {\n  //     if (this.[i].isCollidedWith(this.asteroids[j])) {\n  //       //;\n  //     }\n  //   }\n  // }\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\nUtil.inherits(Ship,MovingObject);\n\nCOLOR1=\"goldenrod\";\nRADIUS1=15;\n\nfunction Ship(pos_hash){\n  this.color=COLOR1;\n  this.radius=RADIUS1;\n  this.vel=0;\n  this.pos=pos_hash['pos'];\n};\n\n\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n  function SurrogateClass() { };\n  SurrogateClass.prototype = parentClass.prototype;\n  let surrogateInstance = new SurrogateClass();\n  childClass.prototype = surrogateInstance;\n  childClass.prototype.constructor = childClass;\n},\n// Return a randomly oriented vector with the given length.\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n}\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });