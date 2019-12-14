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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=domNodeCollection;\n\nclass domNodeCollection{\n    constructor(nodes){\n        //created internal array of nodes\n        this.nodes=nodes;\n    }\n\n    html(optionalstring){\n        if (optionalstring){\n            this.nodes.forEach(node =>{\n                node.innerHTML='optionalstring';\n            });\n        } else{\n            this.nodes[0].innerHTML='optionalstring';\n        }\n    }\n\n    empty(){\n        this.nodes.forEach(node=>{\n            node.html('');\n        });\n    }\n\n    append(children){\n        //should be checking the type for children to see if we need to coerce them into Domnodecollections or not, \n        this.nodes.forEach(node=>{\n            node.innerHTML+=children.outerHTML;\n        });\n    }\n\n    attr(attr_type,set_type){\n        if(set_type){\n        this.nodes.forEach(node=>{\n            node.setAttribute(attr_type,set_type);\n        });} else{\n            return this.nodes[0].getAttribue(attr_type);\n        }\n    }\n\n    addClass(class_name){\n        this.nodes.forEach(node => {\n            node.classList.add(classname);\n        });\n    }\n\n    removeClass(class_name){\n        this.nodes.forEach(node => {\n            node.classList.remove(classname);\n        });\n    }\n    \n    //Traversal!!\n    children(){\n        let childrenNodes=[];\n        this.nodes.forEach(node=>{\n            childrenNodes.concat(node.children);\n        });\n        return new domNodeCollection(childrenNodes);\n    }\n\n  \n}\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports=Index;\nconst domNodeCollection=__webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = (arg) =>{\n    if(arg instanceof 'string'){\n        return getNodesFromDom(arg)\n    } else if(arg instanceof 'HTMLElement'){\n        return new domNodeCollection(arg);\n    }\n\n\n\n }\n\n//if arg is a string, should be a css selector\nfunction getNodesFromDom(selector){\n    let nodeList = Document.querySelectorAll(selector);\n    const nodesArray= Array.from(nodeList);\n    return new domNodeCollection(nodesArray);\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });