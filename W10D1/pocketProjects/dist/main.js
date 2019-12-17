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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n// const htmlGenerator=require('./warmup.js');\n\n\n\n\nlet clockElement = document.getElementById('clock');\n\n\n\nclass Clock{\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    // console.log(timeString);\n    Object(_warmup_js__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString,clockElement);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n\n\n}\n\n\nconst clock=new Clock();\n\n\n// module.exports = Clock;\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n//val via dogs[key]\n//for (let key in dogsj) { }\n\n\n function dogLinkCreator(){\n  let dogLinks = [];\n  Object.keys(dogs).forEach( dogKey => {\n    let anchorNode = document.createElement('A');\n    anchorNode.innerHTML=`${dogKey}`;\n    anchorNode.setAttribute('href', `${dogs[dogKey]}`);\n    let listNode = document.createElement('LI');\n    listNode.setAttribute('class', 'dog-link');\n    listNode.appendChild(anchorNode);\n    dogLinks.push(listNode);\n  });\n  return dogLinks;\n}\n\nfunction attachDogLinks(){\n let dogLinks= dogLinkCreator();\n//  debugger\n  let dropdownUl = document.getElementsByClassName('drop-down-dog-list');\n for (let i=0; i<dogLinks.length; i++){\n  dropdownUl[0].appendChild(dogLinks[i]);\n }\n}\n\nattachDogLinks();\n\nfunction handleEnter(){\n  let dropdownUl = document.getElementsByClassName('drop-down-dog-nav');\n  let dropdownLi = document.getElementsByClassName('dog-link');\n  dropdownUl[0].addEventListener(\"mouseenter\", e => {\n    let dropdownLiArr = Array.from(dropdownLi);\n    dropdownLiArr.forEach(li => {\n      li.classList.remove(\"dog-link\");\n      li.classList.add(\"dog-link-open\");\n    });\n  });\n}\n\nhandleEnter();\n\nfunction handleLeave(){\n  let dropdownUl = document.getElementsByClassName('drop-down-dog-nav');\n  let dropdownLi = document.getElementsByClassName('dog-link-open');\n  dropdownUl[0].addEventListener(\"mouseleave\", e => {\n    let dropdownLiArr = Array.from(dropdownLi);\n    dropdownLiArr.forEach(li => {\n      li.classList.remove(\"dog-link-open\");\n      li.classList.add(\"dog-link\");\n    });\n  });\n}\n\nhandleLeave();\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_2__);\n\nconst Clock=__webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n// const dropDown=require('./drop_down.js');\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nlet todos=[];\n\nlet todoUl=document.getElementsByClassName('todos')[0];\n\nlet todoForm = document.getElementsByClassName('add-todo-form')[0];\n\nfunction addTodo(){\n  todoForm.addEventListener('submit', e =>{\n    e.preventDefault();\n    let input= document.getElementsByName('add-todo')[0];\n    let value=input.value;\n    let todo = {\n      something: value\n      // done: false,\n      // skipped the checkbox functionality\n    };\n    todos.push(todo);\n    input.value = \"\";\n    populateList(todos);\n\n    // attempted to created local storage to preserve todo list on refresh\n    stringifiedTodos = JSON.stringify(todos);\n    localStorage.setItem(\"theBox\", stringifiedTodos);\n    parsedTodos = JSON.parse(stringifiedTodos);\n    if (localStorage.getItem(\"theBox\").length === 0){\n      todos = [];\n    } else {\n      populateList(localStorage.getItem(\"theBox\"));\n    }\n  });\n  \n\n}\n\nfunction populateList(todos){\n  for (let i = 0; i < todos.length; i++) {\n    let nodeLi = document.createElement('li');\n    let nodeLabel = document.createElement('label');\n    let nodeText = document.createTextNode(todos[i].something);\n    nodeLabel.appendChild(nodeText);\n    nodeLi.appendChild(nodeLabel); \n    todoUl.appendChild(nodeLi);  \n  }\n}\n\naddTodo();\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let node = document.createElement('P');\n  let textnode = document.createTextNode(`${string}`);\n  node.appendChild(textnode);\n        \n    //method attempt for making child array...\n    let child_array=Array.from(htmlElement.children);\n\n    while (child_array.length > 0) {\n      // console.log(child_array[0]); \n      htmlElement.removeChild(child_array.shift()); \n    }\n    // for (let i = 0; i < child_array.length; i++) {\n    //   console.log(child_array[i]); \n    //   htmlElement.removeChild(child_array[i]); \n    // }\n    \n      //method for removing child by node\n  // while (htmlElement.firstChild) {\n  // htmlElement.removeChild(htmlElement.firstChild);\n  // }\n\n  htmlElement.appendChild(node);\n};\n\n//partyHeader ?\n// htmlGenerator('Party Time.', 'party');\n\nhtmlGenerator('Party Time.', partyHeader);\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });