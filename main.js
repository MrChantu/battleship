/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    font-family: 'Bruno Ace', cursive;\r\n}\r\n\r\n#setup, #boards {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#container, #playerboard, #opponentboard {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    align-self: center;\r\n    border: 1px solid black;\r\n}\r\n\r\n.cell, .oppcell, .uninteractablecell {\r\n    box-sizing: border-box;\r\n    min-width: 50px;\r\n    min-height: 50px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.hover {\r\n    background-color: black;\r\n}\r\n\r\n.placed {\r\n    background-color: black;\r\n}\r\n\r\n#boards > div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n#boards > div > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.oppcell:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n#reset {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    font-family: 'Bruno Ace', cursive;\r\n}\r\n\r\n#setup, #boards {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#container, #playerboard, #opponentboard {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    align-self: center;\r\n    border: 1px solid black;\r\n}\r\n\r\n.cell, .oppcell, .uninteractablecell {\r\n    box-sizing: border-box;\r\n    min-width: 50px;\r\n    min-height: 50px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.hover {\r\n    background-color: black;\r\n}\r\n\r\n.placed {\r\n    background-color: black;\r\n}\r\n\r\n#boards > div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n#boards > div > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.oppcell:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n#reset {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/game.js":
/*!*****************************!*\
  !*** ./src/classes/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ game)
/* harmony export */ });
class game {
    constructor() {
        this.board = game.generateBoard();
        this.unmappedBoard = game.generateEmptyBoard();
        this.lives = 17;
    }

    static generateBoard() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push([]);
            for (let j = 0; j < 10; j++) {
                array[i].push(0);
            }
        }
        return array;
    }

    static generateEmptyBoard() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push([]);
            for (let j = 0; j < 10; j++) {
                array[i].push(null);
            }
        }
        return array;
    }

    mapTarget(target, opponent) {
        const oppboard = opponent.getBoard();
        const unmapped = this.unmappedBoard;

        if (oppboard[target.y][target.x] === 1) {
            unmapped[target.y][target.x] = 1;
            opponent.removeLife();
        } else {
            unmapped[target.y][target.x] = 0;
        }
    }

    getBoard() {
        return this.board;
    }

    getLives() {
        return this.lives;
    }

    removeLife() {
        this.lives -= 1;
    }

    isGameOver() {
        this.lives === 0 ? true : false;
    }
}

/***/ }),

/***/ "./src/misc/eventlisteners.js":
/*!************************************!*\
  !*** ./src/misc/eventlisteners.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listeners)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/misc/utils.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/misc/globals.js");



class listeners {
    static addShipPositionListeners() {
        const SHIPS = [2, 3, 3, 4, 5];
        let currentShip = 0;
        let CURRENTAXIS = "Y";
        const BOARD = _globals__WEBPACK_IMPORTED_MODULE_1__["default"].getPlayer().board;

        function addClass(cell, axis) {
            const selectedShip = SHIPS[currentShip];
            const num = Math.ceil(selectedShip / 2);
            const CELLS = document.querySelectorAll(".cell");
            const CELLSARRAY = [];
            let counter = 0;

            for (let i = 0; i < 10; i++) {
                CELLSARRAY.push([]);
                for (let j = 0; j < 10; j++) {
                    CELLSARRAY[i].push(CELLS[counter]);
                    counter += 1;
                }
            }

            if (axis === "Y") {
                if (!cell.classList.contains("placed")) {
                    cell.classList.add("hover");
                }
                const [row, col] = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].findCell(cell);
                if (num === 1) {
                    for (let i = 0; i < 2; i++) {
                        if (
                            row + i < 10 &&
                            !CELLSARRAY[row + i][col].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row + i][col].classList.add("hover");
                        }
                    }
                } else if (selectedShip === 4) {
                    for (let i = 0; i < 3; i++) {
                        if (
                            row + i < 10 &&
                            !CELLSARRAY[row + i][col].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row + i][col].classList.add("hover");
                        }
                    }
                    for (let i = 0; i < 2; i++) {
                        if (
                            row - i >= 0 &&
                            !CELLSARRAY[row - i][col].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row - i][col].classList.add("hover");
                        }
                    }
                } else {
                    for (let i = 0; i < num; i++) {
                        if (
                            row + i < 10 &&
                            !CELLSARRAY[row + i][col].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row + i][col].classList.add("hover");
                        }
                    }
                    for (let i = 0; i < num; i++) {
                        if (
                            row - i >= 0 &&
                            !CELLSARRAY[row - i][col].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row - i][col].classList.add("hover");
                        }
                    }
                }
                // Placements aren't correct for X axis and for removeclass
            } else {
                if (!cell.classList.contains("placed")) {
                    cell.classList.add("hover");
                }
                const [row, col] = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].findCell(cell);
                console.log(currentShip);
                if (num === 1) {
                    for (let i = 0; i < 2; i++) {
                        if (
                            col + i < 10 &&
                            !CELLSARRAY[row][col + i].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row][col + i].classList.add("hover");
                        }
                    }
                } else if (selectedShip === 4) {
                    for (let i = 0; i < 3; i++) {
                        if (
                            col + i < 10 &&
                            !CELLSARRAY[row][col + i].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row][col + i].classList.add("hover");
                        }
                    }
                    for (let i = 0; i < 2; i++) {
                        if (
                            col - i >= 0 &&
                            !CELLSARRAY[row][col - i].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row][col - i].classList.add("hover");
                        }
                    }
                } else {
                    for (let i = 0; i < num; i++) {
                        if (
                            col + i < 10 &&
                            !CELLSARRAY[row][col + i].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row][col + i].classList.add("hover");
                        }
                    }
                    for (let i = 0; i < num; i++) {
                        if (
                            col - i >= 0 &&
                            !CELLSARRAY[row][col - i].classList.contains(
                                "placed"
                            )
                        ) {
                            CELLSARRAY[row][col - i].classList.add("hover");
                        }
                    }
                }
            }
        }

        function removeClass(cell, axis) {
            const selectedShip = SHIPS[currentShip];
            const num = Math.ceil(selectedShip / 2);
            const CELLS = document.querySelectorAll(".cell");
            const CELLSARRAY = [];
            let counter = 0;
            for (let i = 0; i < 10; i++) {
                CELLSARRAY.push([]);
                for (let j = 0; j < 10; j++) {
                    CELLSARRAY[i].push(CELLS[counter]);
                    counter += 1;
                }
            }
            if (axis === "Y") {
                cell.classList.remove("hover");
                const foundCell = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].findCell(cell);
                const [row, col] = foundCell;
                if (num === 1) {
                    for (let i = 0; i < 2; i++) {
                        if (row + i < 10) {
                            CELLSARRAY[row + i][col].classList.remove("hover");
                        }
                    }
                } else if (selectedShip === 4) {
                    for (let i = 0; i < 3; i++) {
                        if (row + i < 10) {
                            CELLSARRAY[row + i][col].classList.remove("hover");
                        }
                    }
                    for (let i = 0; i < 2; i++) {
                        if (row - i >= 0) {
                            CELLSARRAY[row - i][col].classList.remove("hover");
                        }
                    }
                } else {
                    for (let i = 0; i < num; i++) {
                        if (row + i < 10) {
                            CELLSARRAY[row + i][col].classList.remove("hover");
                        }
                    }
                    for (let i = 0; i < num; i++) {
                        if (row - i >= 0) {
                            CELLSARRAY[row - i][col].classList.remove("hover");
                        }
                    }
                }
            } else {
                cell.classList.remove("hover");
                const foundCell = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].findCell(cell);
                const [row, col] = foundCell;
                if (num === 1) {
                    for (let i = 0; i < 2; i++) {
                        if (col + i < 10) {
                            CELLSARRAY[row][col + i].classList.remove("hover");
                        }
                    }
                } else if (selectedShip === 4) {
                    for (let i = 0; i < 3; i++) {
                        if (col + i < 10) {
                            CELLSARRAY[row][col + i].classList.remove("hover");
                        }
                    }
                    for (let i = 0; i < 2; i++) {
                        if (col - i >= 0) {
                            CELLSARRAY[row][col - i].classList.remove("hover");
                        }
                    }
                } else {
                    for (let i = 0; i < num; i++) {
                        if (col + i < 10) {
                            CELLSARRAY[row][col + i].classList.remove("hover");
                        }
                    }
                    for (let i = 0; i < num; i++) {
                        if (col - i >= 0) {
                            CELLSARRAY[row][col - i].classList.remove("hover");
                        }
                    }
                }
            }
        }

        function handleBoardPlacement() {
            const CELLS = Array.prototype.slice.call(
                document.querySelectorAll(".cell")
            );
            const selectedShip = SHIPS[currentShip];
            const BOARDSIZE = BOARD.length;
            const placements = document.querySelectorAll(".hover");
            placements.forEach((placement) => {
                placement.classList.remove("hover");
            });
            // Check if placement length matches current ship
            if (placements.length !== selectedShip) {
                return;
            }

            let canBePlaced = true;
            for (let i = 0; i < placements.length; i++) {
                const placementIndex = CELLS.indexOf(placements[i]);
                const row = Math.floor(placementIndex / BOARDSIZE);
                const col = placementIndex % BOARDSIZE;
                // Check if cell is already occupied
                if (BOARD[row][col] === 1) {
                    canBePlaced = false;
                    return;
                }
            }

            // Place ship and update array if all cells are valid
            if (canBePlaced) {
                for (let i = 0; i < placements.length; i++) {
                    const placementIndex = CELLS.indexOf(placements[i]);
                    const row = Math.floor(placementIndex / BOARDSIZE);
                    const col = placementIndex % BOARDSIZE;
                    placements[i].classList.add("placed");
                    BOARD[row][col] = 1;
                }
                // Get next ship from array
                currentShip++;
                // If all ships are placed, load a button that says finalize placements
                // Code...
                if (currentShip >= SHIPS.length) {
                    const SETUPCONTAINER = document.querySelector("#setup");
                    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].loadButton("Finalize Placements", SETUPCONTAINER);
                    // Remove board and load player and opponent boards
                    const BODY = document.querySelector("body");
                    BODY.removeChild(SETUPCONTAINER);
                    // Load game boards
                    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].loadGameBoards();
                }
            }
        }

        const CELLS = Array.prototype.slice.call(
            document.querySelectorAll(".cell")
        );

        CELLS.forEach((cell) => {
            cell.addEventListener("mouseover", () => {
                addClass(cell, CURRENTAXIS);
            });

            cell.addEventListener("mouseleave", () => {
                removeClass(cell, CURRENTAXIS);
            });

            cell.addEventListener("click", handleBoardPlacement);
        });

        // AXIS BTN
        const AXISBTN = document.querySelector("#axisbtn");
        AXISBTN.addEventListener("click", () => {
            // Change axis and rerender board with all cells that are already placed
            // And add new eventlisteners to all cells
            if (CURRENTAXIS === "Y") {
                CURRENTAXIS = "X";

                const oldCONTAINER = document.querySelector("#container");
                const SETUP = document.querySelector("#setup");
                SETUP.removeChild(oldCONTAINER);

                const newCONTAINER = document.createElement("div");
                for (let i = 0; i < BOARD.length; i++) {
                    for (let j = 0; j < BOARD[i].length; j++) {
                        const newCELL = document.createElement("div");
                        newCELL.classList.add("cell");
                        if (BOARD[i][j] === 1) {
                            newCELL.classList.add("placed");
                        }

                        newCELL.addEventListener("mouseover", () => {
                            addClass(newCELL, CURRENTAXIS);
                        });

                        newCELL.addEventListener("mouseleave", () => {
                            removeClass(newCELL, CURRENTAXIS);
                        });

                        newCELL.addEventListener("click", handleBoardPlacement);

                        newCONTAINER.appendChild(newCELL);
                    }
                }
                newCONTAINER.setAttribute("id", "container");
                SETUP.appendChild(newCONTAINER);
            } else {
                CURRENTAXIS = "Y";

                const oldCONTAINER = document.querySelector("#container");
                const SETUP = document.querySelector("#setup");
                SETUP.removeChild(oldCONTAINER);

                const newCONTAINER = document.createElement("div");
                for (let i = 0; i < BOARD.length; i++) {
                    for (let j = 0; j < BOARD[i].length; j++) {
                        const newCELL = document.createElement("div");
                        newCELL.classList.add("cell");
                        if (BOARD[i][j] === 1) {
                            newCELL.classList.add("placed");
                        }

                        newCELL.addEventListener("mouseover", () => {
                            addClass(newCELL, CURRENTAXIS);
                        });
                        newCELL.addEventListener("mouseleave", () => {
                            removeClass(newCELL, CURRENTAXIS);
                        });
                        newCELL.addEventListener("click", handleBoardPlacement);

                        newCONTAINER.appendChild(newCELL);
                    }
                }
                newCONTAINER.setAttribute("id", "container");
                SETUP.appendChild(newCONTAINER);
            }
        });
    }
}


/***/ }),

/***/ "./src/misc/globals.js":
/*!*****************************!*\
  !*** ./src/misc/globals.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ globals)
/* harmony export */ });
/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/game */ "./src/classes/game.js");


class globals {
    static player = new _classes_game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    static opponent = new _classes_game__WEBPACK_IMPORTED_MODULE_0__["default"]();

    static newGame() {
        globals.player = new _classes_game__WEBPACK_IMPORTED_MODULE_0__["default"]();
        globals.opponent = new _classes_game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

    static getPlayer() {
        return globals.player;
    }

    static getOpponent() {
        return globals.opponent;
    }
}

/***/ }),

/***/ "./src/misc/utils.js":
/*!***************************!*\
  !*** ./src/misc/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ utils)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/misc/globals.js");
/* harmony import */ var _eventlisteners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventlisteners */ "./src/misc/eventlisteners.js");



class utils {
    static addDomCells(number) {
        const CONTAINER = document.querySelector("#container");
        for (let i = 0; i < number; i++) {
            const CELL = document.createElement("div");
            CELL.classList.add("cell");
            CONTAINER.appendChild(CELL);
        }
    }
    static findCell(cell) {
        const CELLS = document.querySelectorAll(".cell");
        const CELLSARRAY = [];
        let counter = 0;
        for (let i = 0; i < 10; i++) {
            CELLSARRAY.push([]);
            for (let j = 0; j < 10; j++) {
                CELLSARRAY[i].push(CELLS[counter]);
                counter += 1;
            }
        }

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (cell === CELLSARRAY[i][j]) {
                    return [i, j];
                }
            }
        }
    }

    static isValidPosition(row, col, shipSize, board, math) {
        for (let i = 0; i < shipSize; i++) {
            if (math === 0) {
                if (row + i > 9 || board[row + i][col] === 1) return false;
                if (col + i > 9 || board[row][col + i] === 1) return false;
            } else {
                if (row - i < 0 || board[row - i][col] === 1) return false;
                if (col - i < 0 || board[row][col - i] === 1) return false;
            }
        }
        return true;
    }

    static randomizeOpponentBoard() {
        const BOARD = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().board;
        const SHIPS = [2, 3, 3, 4, 5];
        const usedPositions = [];

        for (let i = 0; i < SHIPS.length; i++) {
            let row, col, math, pos, isValid;
            while (!isValid) {
                row = Math.floor(Math.random() * 10);
                col = Math.floor(Math.random() * 10);
                math = Math.floor(Math.random() * 2);
                pos = Math.floor(Math.random() * 2);
                isValid = utils.isValidPosition(
                    row,
                    col,
                    SHIPS[i],
                    BOARD,
                    math
                );
            }
            usedPositions.push([row, col]);
            if (math === 0) {
                for (let j = 0; j < SHIPS[i]; j++) {
                    if (pos === 0) {
                        if (row + j < 10) {
                            BOARD[row + j][col] = 1;
                        }
                    } else {
                        if (col + j < 10) {
                            BOARD[row][col + j] = 1;
                        }
                    }
                }
            } else {
                for (let j = 0; j < SHIPS[i]; j++) {
                    if (pos === 0) {
                        if (row - j >= 0) {
                            BOARD[row - j][col] = 1;
                        }
                    } else {
                        if (col - j >= 0) {
                            BOARD[row][col - j] = 1;
                        }
                    }
                }
            }
        }
    }

    static loadButton(text, container) {
        const BUTTON = document.createElement("button");
        BUTTON.textContent = text;
        container.appendChild(BUTTON);
    }

    static checkCellOpp(cell) {
        const OPPBOARD = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().board;
        const CELLS = Array.prototype.slice.call(
            document.querySelectorAll(".oppcell")
        );
        const INDEX = CELLS.indexOf(cell);
        const LENGTH = OPPBOARD.length;

        if (OPPBOARD[Math.floor(INDEX / LENGTH)][INDEX % LENGTH] === 1) {
            return true;
        }
        return false;
    }

    static checkCellPlayer(cell) {
        const PBOARD = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().board;
        const CELLS = Array.prototype.slice.call(
            document.querySelectorAll(".cell")
        );
        const INDEX = CELLS.indexOf(cell);
        const LENGTH = PBOARD.length;

        if (PBOARD[Math.floor(INDEX / LENGTH)][INDEX % LENGTH] === 1) {
            return true;
        }
        return false;
    }

    static shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    static sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static getComputerMove() {
        const BOARD = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().unmappedBoard;
        const mappedCells = BOARD.flat().filter((x) => x !== null).length;

        if (mappedCells === 0) {
            // handle special case where no cells have been mapped yet
            const size = BOARD.length;
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);
            let target = { x: x, y: y };
            return target;
        }

        // find all unmapped cells adjacent to hits
        let potentialMoves = [];
        BOARD.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell === null) {
                    // check if adjacent to hit cell
                    let adjacentHit = false;
                    if (rowIndex > 0 && BOARD[rowIndex - 1][colIndex] === 1) {
                        adjacentHit = true;
                    }
                    if (colIndex > 0 && BOARD[rowIndex][colIndex - 1] === 1) {
                        adjacentHit = true;
                    }
                    if (
                        rowIndex < BOARD.length - 1 &&
                        BOARD[rowIndex + 1][colIndex] === 1
                    ) {
                        adjacentHit = true;
                    }
                    if (
                        colIndex < row.length - 1 &&
                        BOARD[rowIndex][colIndex + 1] === 1
                    ) {
                        adjacentHit = true;
                    }
                    if (adjacentHit) {
                        potentialMoves.push({ x: colIndex, y: rowIndex });
                    }
                }
            });
        });

        // if no adjacent hits, choose randomly from unmapped cells
        if (potentialMoves.length === 0) {
            potentialMoves = [];
            BOARD.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    if (cell === null) {
                        potentialMoves.push({ x: colIndex, y: rowIndex });
                    }
                });
            });
        }

        potentialMoves = utils.shuffle(potentialMoves);

        // iterate through potential moves and select the first one that hasn't been tried yet
        let target = null;
        potentialMoves.forEach((move) => {
            if (BOARD[move.y][move.x] === null) {
                target = move;
                return;
            }
        });

        return target;
    }

    static loadInteractableEnemyBoard() {
        const OPPBOARD = document.querySelector("#opponentboard");
        const CONTAINER = OPPBOARD.parentElement;
        const UNMAPPED = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().unmappedBoard;

        CONTAINER.removeChild(OPPBOARD);

        const NEWBOARD = document.createElement("div");
        NEWBOARD.id = "opponentboard";
        for (let i = 0; i < UNMAPPED.length; i++) {
            for (let j = 0; j < UNMAPPED[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("oppcell");
                CELL.addEventListener("click", () => {
                    utils.handleCellClick(CELL);
                });
                if (UNMAPPED[i][j] === 1) {
                    CELL.style.backgroundColor = "red";
                } else if (UNMAPPED[i][j] === 0) {
                    CELL.style.backgroundColor = "gray";
                }
                NEWBOARD.appendChild(CELL);
            }
        }
        CONTAINER.appendChild(NEWBOARD);
    }

    static loadUninteractableEnemyBoard() {
        const OPPBOARD = document.querySelector("#opponentboard");
        const CONTAINER = OPPBOARD.parentElement;
        const UNMAPPED = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().unmappedBoard;

        CONTAINER.removeChild(OPPBOARD);

        const NEWBOARD = document.createElement("div");
        NEWBOARD.id = "opponentboard";
        for (let i = 0; i < UNMAPPED.length; i++) {
            for (let j = 0; j < UNMAPPED[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("uninteractablecell");
                if (UNMAPPED[i][j] === 1) {
                    CELL.style.backgroundColor = "red";
                } else if (UNMAPPED[i][j] === 0) {
                    CELL.style.backgroundColor = "gray";
                }
                NEWBOARD.appendChild(CELL);
            }
        }
        CONTAINER.appendChild(NEWBOARD);
    }

    static reloadPlayerBoard() {
        const PBOARD = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().board;
        const UNMAPPEDBOARD = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().unmappedBoard;

        const OLDBOARD = document.querySelector("#playerboard");
        const CONTAINER = OLDBOARD.parentElement;

        CONTAINER.removeChild(OLDBOARD);

        const NEWBOARD = document.createElement("div");
        NEWBOARD.id = "playerboard";

        for (let i = 0; i < PBOARD.length; i++) {
            for (let j = 0; j < PBOARD[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("cell");
                if (UNMAPPEDBOARD[i][j] === 1) {
                    CELL.style.backgroundColor = "red";
                } else if (UNMAPPEDBOARD[i][j] === 0) {
                    CELL.style.backgroundColor = "gray";
                } else if (PBOARD[i][j] === 1 && UNMAPPEDBOARD[i][j] === null) {
                    CELL.style.backgroundColor = "black";
                }
                NEWBOARD.appendChild(CELL);
            }
        }
        CONTAINER.appendChild(NEWBOARD);
    }

    static removeAllChildren(parent) {
        while (parent.firstChild) {
            parent.firstChild.remove();
        }
    }

    static handleReset() {
        const BODY = document.querySelector("body");
        utils.removeAllChildren(BODY);

        const SETUP = document.createElement("div");
        const BTN = document.createElement("button");
        const CONTAINER = document.createElement("div");
        SETUP.id = "setup";
        CONTAINER.id = "container";
        BTN.id = "axisbtn";
        BTN.textContent = "CHANGE AXIS";

        BODY.appendChild(SETUP);
        SETUP.append(BTN, CONTAINER);

        utils.addDomCells(100);
        _globals__WEBPACK_IMPORTED_MODULE_0__["default"].newGame();
        _eventlisteners__WEBPACK_IMPORTED_MODULE_1__["default"].addShipPositionListeners();
    }

    static loadGameOver(winner) {
        const BODY = document.querySelector("body");
        const BOARDS = document.querySelector("#boards");
        BODY.removeChild(BOARDS);
        const DIV = document.createElement("div");
        DIV.id = "reset";
        const BUTTON = document.createElement("button");
        const H1 = document.createElement("h1");
        BUTTON.textContent = "Play Again";
        BUTTON.id = "resetbtn";
        if (winner === "player") {
            H1.textContent = "You win!";
        } else {
            H1.textContent = "You lose.";
        }
        BODY.appendChild(DIV);
        DIV.append(H1, BUTTON);
        BUTTON.addEventListener("click", utils.handleReset);
    }

    static handleCellClick(cell) {
        (async () => {
            if (utils.checkCellOpp(cell)) {
                // Check if opponent has any lives left
                if (_globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().getLives() === 0) {
                    utils.loadGameOver("player");
                }
            }
            // Update players unmapped board to include the hit or miss
            // Remove dom elements so player can't click on cells
            const OPPCELLS = Array.prototype.slice.call(
                document.querySelectorAll(".oppcell")
            );
            const TURNTEXT = document.querySelector("#turntext");
            _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().mapTarget(
                {
                    x: OPPCELLS.indexOf(cell) % 10,
                    y: Math.floor(OPPCELLS.indexOf(cell) / 10),
                },
                _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent()
            );

            utils.loadUninteractableEnemyBoard();

            TURNTEXT.textContent = "Opponents turn";
            const OPPTURN = utils.getComputerMove();
            _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().mapTarget(OPPTURN, _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer());
            //await utils.sleep(500);
            utils.reloadPlayerBoard();
            if (_globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().getLives() === 0) {
                utils.loadGameOver("enemy");
            }
            //await utils.sleep(500);
            TURNTEXT.textContent = "Your turn";
            //await utils.sleep(500);
            utils.loadInteractableEnemyBoard();
            console.log("Player: " + _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().getLives());
            console.log("Enemy " + _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().getLives());
            // Update turn text to opponent
            // Get opponents turn
            // When done rerender opponent board to be clickable
            // Set text back to player turn

            // First remove event listeners from all cells by removing from the DOM
            // Add it back but without event listeners
            // Check if cell is a hit or miss, subtract from opponent board lives
            // Check if opponent lives is 0, if so game over and player wins
            // If not then get opponents turn set text to "Opponents turn"
            // Set timeout for 1 second then call opponentTurn()
            // Check if opponent hit or miss, subtract from player board lives
            // Check if player lives is 0, if so game over and opponent wins
            // If not then get players turn set text to "Your turn"
            // Rerender opponent board and add event listeners to all cells

            // Let player go first
            // When player clicks on a cell check if hit or miss etc update blank board
            // Now it's opponents turn, rerender opponents board so player can't click again
            // Wait for opponent to click once that's done rerender player board with
            // eventlisteners
            // (You want to remove them when its opponents turn so player can't click anything)
            // Have player and opponent function check if have 17 x's on board
            // Count all x's on a board and if 17 then game over

            // Check if hit
            // Check if all ships destroyed
            // Get opponents turn
            // Figure out how to loop back to players turn

            // make 2 more blank boards
            // For player turn set same coordinates on blank board then compare them to the real board
            // The opponent will use the same logic
            // If hit set blank to 1 else 0
            // Opponent uses that board to calculate next move

            // For turns if its player turn have text say "Your turn" else "Opponents turn"
        })();
    }

    static loadGameBoards() {
        utils.randomizeOpponentBoard();
        const BODY = document.querySelector("body");
        const DIV = document.createElement("div");
        const BOARDSCONTAINER = document.createElement("div");
        const EMPTYDIV1 = document.createElement("div");
        const EMPTYDIV2 = document.createElement("div");
        const HEADING1 = document.createElement("h1");
        const HEADING2 = document.createElement("h1");
        const TURNTEXT = document.createElement("h1");
        const PLAYERDIV = document.createElement("div");
        const OPPONENTDIV = document.createElement("div");
        DIV.setAttribute("id", "boards");
        PLAYERDIV.setAttribute("id", "playerboard");
        OPPONENTDIV.setAttribute("id", "opponentboard");
        TURNTEXT.setAttribute("id", "turntext");
        HEADING1.textContent = "YOU";
        HEADING2.textContent = "ENEMY";
        TURNTEXT.textContent = "YOUR TURN";
        const PBoard = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().board;
        const OBoard = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().board;
        // Player Board
        for (let i = 0; i < PBoard.length; i++) {
            for (let j = 0; j < PBoard[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("cell");
                PBoard[i][j] === 0
                    ? (CELL.style.backgroundColor = "white")
                    : (CELL.style.backgroundColor = "black");
                PLAYERDIV.appendChild(CELL);
            }
        }
        // Opponent Board
        for (let i = 0; i < OBoard.length; i++) {
            for (let j = 0; j < OBoard[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("oppcell");
                OBoard[i][j] === 1
                    ? (CELL.dataset.hit = "true")
                    : (CELL.dataset.hit = "false");
                CELL.addEventListener("click", () => {
                    utils.handleCellClick(CELL);
                });
                OPPONENTDIV.appendChild(CELL);
            }
        }
        BODY.appendChild(DIV);
        DIV.append(TURNTEXT, BOARDSCONTAINER);
        BOARDSCONTAINER.append(EMPTYDIV1, EMPTYDIV2);
        EMPTYDIV1.append(HEADING1, PLAYERDIV);
        EMPTYDIV2.append(HEADING2, OPPONENTDIV);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _misc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/utils */ "./src/misc/utils.js");
/* harmony import */ var _misc_eventlisteners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/eventlisteners */ "./src/misc/eventlisteners.js");
/* harmony import */ var _misc_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc/globals */ "./src/misc/globals.js");





class ship {
    constructor(size) {
        this.size = size;
    }

    generateShip() {}

    findPos(row, col) {

    }
}

function handleAxis(axis) {
    if (axis === "Y") {
    }
}

const startup = (() => {
    // Generate cells into  container
    _misc_utils__WEBPACK_IMPORTED_MODULE_1__["default"].addDomCells(100);
    _misc_globals__WEBPACK_IMPORTED_MODULE_3__["default"].newGame();

    // Load eventlisteners (Allow player to place ships down and confirm)
    _misc_eventlisteners__WEBPACK_IMPORTED_MODULE_2__["default"].addShipPositionListeners();
    console.log(_misc_globals__WEBPACK_IMPORTED_MODULE_3__["default"].getOpponent().board);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQWlCO0FBQ3JCLElBQUksNkRBQWU7QUFDbkI7QUFDQTtBQUNBLElBQUkscUZBQWtDO0FBQ3RDLGdCQUFnQixpRUFBbUI7QUFDbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NsYXNzZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21pc2MvZXZlbnRsaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9taXNjL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9taXNjL3V0aWxzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCcnVubyBBY2UnLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2V0dXAsICNib2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciwgI3BsYXllcmJvYXJkLCAjb3Bwb25lbnRib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwsIC5vcHBjZWxsLCAudW5pbnRlcmFjdGFibGVjZWxsIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkcyA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkcyA+IGRpdiA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vcHBjZWxsOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxyXFxufVxcclxcblxcclxcbiNyZXNldCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0JydW5vIEFjZScsIGN1cnNpdmU7XFxyXFxufVxcclxcblxcclxcbiNzZXR1cCwgI2JvYXJkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyLCAjcGxheWVyYm9hcmQsICNvcHBvbmVudGJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCwgLm9wcGNlbGwsIC51bmludGVyYWN0YWJsZWNlbGwge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzID4gZGl2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wcGNlbGw6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IGdhbWUuZ2VuZXJhdGVCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMudW5tYXBwZWRCb2FyZCA9IGdhbWUuZ2VuZXJhdGVFbXB0eUJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDE3O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZUJvYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goW10pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2ldLnB1c2goMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZUVtcHR5Qm9hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChbXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbaV0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwVGFyZ2V0KHRhcmdldCwgb3Bwb25lbnQpIHtcclxuICAgICAgICBjb25zdCBvcHBib2FyZCA9IG9wcG9uZW50LmdldEJvYXJkKCk7XHJcbiAgICAgICAgY29uc3QgdW5tYXBwZWQgPSB0aGlzLnVubWFwcGVkQm9hcmQ7XHJcblxyXG4gICAgICAgIGlmIChvcHBib2FyZFt0YXJnZXQueV1bdGFyZ2V0LnhdID09PSAxKSB7XHJcbiAgICAgICAgICAgIHVubWFwcGVkW3RhcmdldC55XVt0YXJnZXQueF0gPSAxO1xyXG4gICAgICAgICAgICBvcHBvbmVudC5yZW1vdmVMaWZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdW5tYXBwZWRbdGFyZ2V0LnldW3RhcmdldC54XSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEJvYXJkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpdmVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpZmUoKSB7XHJcbiAgICAgICAgdGhpcy5saXZlcyAtPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlzR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9PT0gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgZ2xvYmFscyBmcm9tIFwiLi9nbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaXN0ZW5lcnMge1xyXG4gICAgc3RhdGljIGFkZFNoaXBQb3NpdGlvbkxpc3RlbmVycygpIHtcclxuICAgICAgICBjb25zdCBTSElQUyA9IFsyLCAzLCAzLCA0LCA1XTtcclxuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSAwO1xyXG4gICAgICAgIGxldCBDVVJSRU5UQVhJUyA9IFwiWVwiO1xyXG4gICAgICAgIGNvbnN0IEJPQVJEID0gZ2xvYmFscy5nZXRQbGF5ZXIoKS5ib2FyZDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQ2xhc3MoY2VsbCwgYXhpcykge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFNoaXAgPSBTSElQU1tjdXJyZW50U2hpcF07XHJcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IE1hdGguY2VpbChzZWxlY3RlZFNoaXAgLyAyKTtcclxuICAgICAgICAgICAgY29uc3QgQ0VMTFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IENFTExTQVJSQVkgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBDRUxMU0FSUkFZLnB1c2goW10pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtpXS5wdXNoKENFTExTW2NvdW50ZXJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcIllcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInBsYWNlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHV0aWxzLmZpbmRDZWxsKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyArIGkgPCAxMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIUNFTExTQVJSQVlbcm93ICsgaV1bY29sXS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93ICsgaV1bY29sXS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyArIGkgPCAxMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIUNFTExTQVJSQVlbcm93ICsgaV1bY29sXS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93ICsgaV1bY29sXS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93IC0gaSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhQ0VMTFNBUlJBWVtyb3cgLSBpXVtjb2xdLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3cgLSBpXVtjb2xdLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgKyBpIDwgMTAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFDRUxMU0FSUkFZW3JvdyArIGldW2NvbF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3JvdyArIGldW2NvbF0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93IC0gaSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhQ0VMTFNBUlJBWVtyb3cgLSBpXVtjb2xdLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3cgLSBpXVtjb2xdLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBsYWNlbWVudHMgYXJlbid0IGNvcnJlY3QgZm9yIFggYXhpcyBhbmQgZm9yIHJlbW92ZWNsYXNzXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxhY2VkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gdXRpbHMuZmluZENlbGwoY2VsbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2hpcCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICsgaSA8IDEwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhQ0VMTFNBUlJBWVtyb3ddW2NvbCArIGldLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3ddW2NvbCArIGldLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaGlwID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICsgaSA8IDEwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhQ0VMTFNBUlJBWVtyb3ddW2NvbCArIGldLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3ddW2NvbCArIGldLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgLSBpID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFDRUxMU0FSUkFZW3Jvd11bY29sIC0gaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3Jvd11bY29sIC0gaV0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCArIGkgPCAxMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIUNFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgLSBpID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFDRUxMU0FSUkFZW3Jvd11bY29sIC0gaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3Jvd11bY29sIC0gaV0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhjZWxsLCBheGlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU2hpcCA9IFNISVBTW2N1cnJlbnRTaGlwXTtcclxuICAgICAgICAgICAgY29uc3QgbnVtID0gTWF0aC5jZWlsKHNlbGVjdGVkU2hpcCAvIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBDRUxMUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcclxuICAgICAgICAgICAgY29uc3QgQ0VMTFNBUlJBWSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgQ0VMTFNBUlJBWS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbaV0ucHVzaChDRUxMU1tjb3VudGVyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChheGlzID09PSBcIllcIikge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZENlbGwgPSB1dGlscy5maW5kQ2VsbChjZWxsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBmb3VuZENlbGw7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyArIGkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3cgKyBpXVtjb2xdLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaGlwID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyArIGkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3cgKyBpXVtjb2xdLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93IC0gaSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3JvdyAtIGldW2NvbF0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgKyBpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93ICsgaV1bY29sXS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93IC0gaSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3JvdyAtIGldW2NvbF0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZENlbGwgPSB1dGlscy5maW5kQ2VsbChjZWxsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBmb3VuZENlbGw7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCArIGkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3ddW2NvbCArIGldLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaGlwID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCArIGkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3ddW2NvbCArIGldLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sIC0gaSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3Jvd11bY29sIC0gaV0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgKyBpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sIC0gaSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3Jvd11bY29sIC0gaV0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVCb2FyZFBsYWNlbWVudCgpIHtcclxuICAgICAgICAgICAgY29uc3QgQ0VMTFMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFNoaXAgPSBTSElQU1tjdXJyZW50U2hpcF07XHJcbiAgICAgICAgICAgIGNvbnN0IEJPQVJEU0laRSA9IEJPQVJELmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG92ZXJcIik7XHJcbiAgICAgICAgICAgIHBsYWNlbWVudHMuZm9yRWFjaCgocGxhY2VtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgcGxhY2VtZW50IGxlbmd0aCBtYXRjaGVzIGN1cnJlbnQgc2hpcFxyXG4gICAgICAgICAgICBpZiAocGxhY2VtZW50cy5sZW5ndGggIT09IHNlbGVjdGVkU2hpcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FuQmVQbGFjZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudEluZGV4ID0gQ0VMTFMuaW5kZXhPZihwbGFjZW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IocGxhY2VtZW50SW5kZXggLyBCT0FSRFNJWkUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gcGxhY2VtZW50SW5kZXggJSBCT0FSRFNJWkU7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBjZWxsIGlzIGFscmVhZHkgb2NjdXBpZWRcclxuICAgICAgICAgICAgICAgIGlmIChCT0FSRFtyb3ddW2NvbF0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW5CZVBsYWNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUGxhY2Ugc2hpcCBhbmQgdXBkYXRlIGFycmF5IGlmIGFsbCBjZWxscyBhcmUgdmFsaWRcclxuICAgICAgICAgICAgaWYgKGNhbkJlUGxhY2VkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRJbmRleCA9IENFTExTLmluZGV4T2YocGxhY2VtZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihwbGFjZW1lbnRJbmRleCAvIEJPQVJEU0laRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sID0gcGxhY2VtZW50SW5kZXggJSBCT0FSRFNJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50c1tpXS5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJPQVJEW3Jvd11bY29sXSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgbmV4dCBzaGlwIGZyb20gYXJyYXlcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwKys7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbGwgc2hpcHMgYXJlIHBsYWNlZCwgbG9hZCBhIGJ1dHRvbiB0aGF0IHNheXMgZmluYWxpemUgcGxhY2VtZW50c1xyXG4gICAgICAgICAgICAgICAgLy8gQ29kZS4uLlxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTaGlwID49IFNISVBTLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFNFVFVQQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR1cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2FkQnV0dG9uKFwiRmluYWxpemUgUGxhY2VtZW50c1wiLCBTRVRVUENPTlRBSU5FUik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGJvYXJkIGFuZCBsb2FkIHBsYXllciBhbmQgb3Bwb25lbnQgYm9hcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQk9EWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEJPRFkucmVtb3ZlQ2hpbGQoU0VUVVBDT05UQUlORVIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgZ2FtZSBib2FyZHNcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5sb2FkR2FtZUJvYXJkcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBDRUxMUyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIilcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBDRUxMUy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhjZWxsLCBDVVJSRU5UQVhJUyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhjZWxsLCBDVVJSRU5UQVhJUyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRQbGFjZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBWElTIEJUTlxyXG4gICAgICAgIGNvbnN0IEFYSVNCVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNidG5cIik7XHJcbiAgICAgICAgQVhJU0JUTi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2UgYXhpcyBhbmQgcmVyZW5kZXIgYm9hcmQgd2l0aCBhbGwgY2VsbHMgdGhhdCBhcmUgYWxyZWFkeSBwbGFjZWRcclxuICAgICAgICAgICAgLy8gQW5kIGFkZCBuZXcgZXZlbnRsaXN0ZW5lcnMgdG8gYWxsIGNlbGxzXHJcbiAgICAgICAgICAgIGlmIChDVVJSRU5UQVhJUyA9PT0gXCJZXCIpIHtcclxuICAgICAgICAgICAgICAgIENVUlJFTlRBWElTID0gXCJYXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBTRVRVUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0dXBcIik7XHJcbiAgICAgICAgICAgICAgICBTRVRVUC5yZW1vdmVDaGlsZChvbGRDT05UQUlORVIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJELmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCT0FSRFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdDRUxMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q0VMTC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJPQVJEW2ldW2pdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDRUxMLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NFTEwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhuZXdDRUxMLCBDVVJSRU5UQVhJUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q0VMTC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhuZXdDRUxMLCBDVVJSRU5UQVhJUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q0VMTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRQbGFjZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q09OVEFJTkVSLmFwcGVuZENoaWxkKG5ld0NFTEwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld0NPTlRBSU5FUi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgICAgIFNFVFVQLmFwcGVuZENoaWxkKG5ld0NPTlRBSU5FUik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBDVVJSRU5UQVhJUyA9IFwiWVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgU0VUVVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHVwXCIpO1xyXG4gICAgICAgICAgICAgICAgU0VUVVAucmVtb3ZlQ2hpbGQob2xkQ09OVEFJTkVSKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q0VMTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NFTEwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCT0FSRFtpXVtqXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q0VMTC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDRUxMLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MobmV3Q0VMTCwgQ1VSUkVOVEFYSVMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q0VMTC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhuZXdDRUxMLCBDVVJSRU5UQVhJUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDRUxMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCb2FyZFBsYWNlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDT05UQUlORVIuYXBwZW5kQ2hpbGQobmV3Q0VMTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3Q09OVEFJTkVSLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgU0VUVVAuYXBwZW5kQ2hpbGQobmV3Q09OVEFJTkVSKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBnYW1lIGZyb20gXCIuLi9jbGFzc2VzL2dhbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdsb2JhbHMge1xyXG4gICAgc3RhdGljIHBsYXllciA9IG5ldyBnYW1lKCk7XHJcbiAgICBzdGF0aWMgb3Bwb25lbnQgPSBuZXcgZ2FtZSgpO1xyXG5cclxuICAgIHN0YXRpYyBuZXdHYW1lKCkge1xyXG4gICAgICAgIGdsb2JhbHMucGxheWVyID0gbmV3IGdhbWUoKTtcclxuICAgICAgICBnbG9iYWxzLm9wcG9uZW50ID0gbmV3IGdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWxzLnBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T3Bwb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbHMub3Bwb25lbnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZ2xvYmFscyBmcm9tIFwiLi9nbG9iYWxzXCI7XHJcbmltcG9ydCBsaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRsaXN0ZW5lcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHV0aWxzIHtcclxuICAgIHN0YXRpYyBhZGREb21DZWxscyhudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBDT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IENFTEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBDRUxMLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICBDT05UQUlORVIuYXBwZW5kQ2hpbGQoQ0VMTCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbmRDZWxsKGNlbGwpIHtcclxuICAgICAgICBjb25zdCBDRUxMUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcclxuICAgICAgICBjb25zdCBDRUxMU0FSUkFZID0gW107XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBDRUxMU0FSUkFZLnB1c2goW10pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIENFTExTQVJSQVlbaV0ucHVzaChDRUxMU1tjb3VudGVyXSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsID09PSBDRUxMU0FSUkFZW2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtpLCBqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNWYWxpZFBvc2l0aW9uKHJvdywgY29sLCBzaGlwU2l6ZSwgYm9hcmQsIG1hdGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1hdGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3cgKyBpID4gOSB8fCBib2FyZFtyb3cgKyBpXVtjb2xdID09PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sICsgaSA+IDkgfHwgYm9hcmRbcm93XVtjb2wgKyBpXSA9PT0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyAtIGkgPCAwIHx8IGJvYXJkW3JvdyAtIGldW2NvbF0gPT09IDEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2wgLSBpIDwgMCB8fCBib2FyZFtyb3ddW2NvbCAtIGldID09PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhbmRvbWl6ZU9wcG9uZW50Qm9hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgQk9BUkQgPSBnbG9iYWxzLmdldE9wcG9uZW50KCkuYm9hcmQ7XHJcbiAgICAgICAgY29uc3QgU0hJUFMgPSBbMiwgMywgMywgNCwgNV07XHJcbiAgICAgICAgY29uc3QgdXNlZFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNISVBTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb3csIGNvbCwgbWF0aCwgcG9zLCBpc1ZhbGlkO1xyXG4gICAgICAgICAgICB3aGlsZSAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgICAgIG1hdGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgICAgIHBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHV0aWxzLmlzVmFsaWRQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICByb3csXHJcbiAgICAgICAgICAgICAgICAgICAgY29sLFxyXG4gICAgICAgICAgICAgICAgICAgIFNISVBTW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIEJPQVJELFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGhcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXNlZFBvc2l0aW9ucy5wdXNoKFtyb3csIGNvbF0pO1xyXG4gICAgICAgICAgICBpZiAobWF0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBTSElQU1tpXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93ICsgaiA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCT0FSRFtyb3cgKyBqXVtjb2xdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgKyBqIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJPQVJEW3Jvd11bY29sICsgal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBTSElQU1tpXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93IC0gaiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCT0FSRFtyb3cgLSBqXVtjb2xdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgLSBqID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJPQVJEW3Jvd11bY29sIC0gal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkQnV0dG9uKHRleHQsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IEJVVFRPTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgQlVUVE9OLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQlVUVE9OKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tDZWxsT3BwKGNlbGwpIHtcclxuICAgICAgICBjb25zdCBPUFBCT0FSRCA9IGdsb2JhbHMuZ2V0T3Bwb25lbnQoKS5ib2FyZDtcclxuICAgICAgICBjb25zdCBDRUxMUyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wcGNlbGxcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IElOREVYID0gQ0VMTFMuaW5kZXhPZihjZWxsKTtcclxuICAgICAgICBjb25zdCBMRU5HVEggPSBPUFBCT0FSRC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChPUFBCT0FSRFtNYXRoLmZsb29yKElOREVYIC8gTEVOR1RIKV1bSU5ERVggJSBMRU5HVEhdID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrQ2VsbFBsYXllcihjZWxsKSB7XHJcbiAgICAgICAgY29uc3QgUEJPQVJEID0gZ2xvYmFscy5nZXRQbGF5ZXIoKS5ib2FyZDtcclxuICAgICAgICBjb25zdCBDRUxMUyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IElOREVYID0gQ0VMTFMuaW5kZXhPZihjZWxsKTtcclxuICAgICAgICBjb25zdCBMRU5HVEggPSBQQk9BUkQubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAoUEJPQVJEW01hdGguZmxvb3IoSU5ERVggLyBMRU5HVEgpXVtJTkRFWCAlIExFTkdUSF0gPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2h1ZmZsZShhcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICAgICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzbGVlcChtcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb21wdXRlck1vdmUoKSB7XHJcbiAgICAgICAgY29uc3QgQk9BUkQgPSBnbG9iYWxzLmdldE9wcG9uZW50KCkudW5tYXBwZWRCb2FyZDtcclxuICAgICAgICBjb25zdCBtYXBwZWRDZWxscyA9IEJPQVJELmZsYXQoKS5maWx0ZXIoKHgpID0+IHggIT09IG51bGwpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG1hcHBlZENlbGxzID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlcmUgbm8gY2VsbHMgaGF2ZSBiZWVuIG1hcHBlZCB5ZXRcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IEJPQVJELmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB7IHg6IHgsIHk6IHkgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmQgYWxsIHVubWFwcGVkIGNlbGxzIGFkamFjZW50IHRvIGhpdHNcclxuICAgICAgICBsZXQgcG90ZW50aWFsTW92ZXMgPSBbXTtcclxuICAgICAgICBCT0FSRC5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBhZGphY2VudCB0byBoaXQgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGphY2VudEhpdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCA+IDAgJiYgQk9BUkRbcm93SW5kZXggLSAxXVtjb2xJbmRleF0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqYWNlbnRIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sSW5kZXggPiAwICYmIEJPQVJEW3Jvd0luZGV4XVtjb2xJbmRleCAtIDFdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkamFjZW50SGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dJbmRleCA8IEJPQVJELmxlbmd0aCAtIDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgQk9BUkRbcm93SW5kZXggKyAxXVtjb2xJbmRleF0gPT09IDFcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqYWNlbnRIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbEluZGV4IDwgcm93Lmxlbmd0aCAtIDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgQk9BUkRbcm93SW5kZXhdW2NvbEluZGV4ICsgMV0gPT09IDFcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqYWNlbnRIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRqYWNlbnRIaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsTW92ZXMucHVzaCh7IHg6IGNvbEluZGV4LCB5OiByb3dJbmRleCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiBubyBhZGphY2VudCBoaXRzLCBjaG9vc2UgcmFuZG9tbHkgZnJvbSB1bm1hcHBlZCBjZWxsc1xyXG4gICAgICAgIGlmIChwb3RlbnRpYWxNb3Zlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcG90ZW50aWFsTW92ZXMgPSBbXTtcclxuICAgICAgICAgICAgQk9BUkQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm93LmZvckVhY2goKGNlbGwsIGNvbEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsTW92ZXMucHVzaCh7IHg6IGNvbEluZGV4LCB5OiByb3dJbmRleCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3RlbnRpYWxNb3ZlcyA9IHV0aWxzLnNodWZmbGUocG90ZW50aWFsTW92ZXMpO1xyXG5cclxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggcG90ZW50aWFsIG1vdmVzIGFuZCBzZWxlY3QgdGhlIGZpcnN0IG9uZSB0aGF0IGhhc24ndCBiZWVuIHRyaWVkIHlldFxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHBvdGVudGlhbE1vdmVzLmZvckVhY2goKG1vdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKEJPQVJEW21vdmUueV1bbW92ZS54XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gbW92ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkSW50ZXJhY3RhYmxlRW5lbXlCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBPUFBCT0FSRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Bwb25lbnRib2FyZFwiKTtcclxuICAgICAgICBjb25zdCBDT05UQUlORVIgPSBPUFBCT0FSRC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IFVOTUFQUEVEID0gZ2xvYmFscy5nZXRQbGF5ZXIoKS51bm1hcHBlZEJvYXJkO1xyXG5cclxuICAgICAgICBDT05UQUlORVIucmVtb3ZlQ2hpbGQoT1BQQk9BUkQpO1xyXG5cclxuICAgICAgICBjb25zdCBORVdCT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgTkVXQk9BUkQuaWQgPSBcIm9wcG9uZW50Ym9hcmRcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFVOTUFQUEVELmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgVU5NQVBQRURbMF0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENFTEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgQ0VMTC5jbGFzc0xpc3QuYWRkKFwib3BwY2VsbFwiKTtcclxuICAgICAgICAgICAgICAgIENFTEwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5oYW5kbGVDZWxsQ2xpY2soQ0VMTCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChVTk1BUFBFRFtpXVtqXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENFTEwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoVU5NQVBQRURbaV1bal0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBDRUxMLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgTkVXQk9BUkQuYXBwZW5kQ2hpbGQoQ0VMTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQ09OVEFJTkVSLmFwcGVuZENoaWxkKE5FV0JPQVJEKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZFVuaW50ZXJhY3RhYmxlRW5lbXlCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBPUFBCT0FSRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Bwb25lbnRib2FyZFwiKTtcclxuICAgICAgICBjb25zdCBDT05UQUlORVIgPSBPUFBCT0FSRC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IFVOTUFQUEVEID0gZ2xvYmFscy5nZXRQbGF5ZXIoKS51bm1hcHBlZEJvYXJkO1xyXG5cclxuICAgICAgICBDT05UQUlORVIucmVtb3ZlQ2hpbGQoT1BQQk9BUkQpO1xyXG5cclxuICAgICAgICBjb25zdCBORVdCT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgTkVXQk9BUkQuaWQgPSBcIm9wcG9uZW50Ym9hcmRcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFVOTUFQUEVELmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgVU5NQVBQRURbMF0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENFTEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgQ0VMTC5jbGFzc0xpc3QuYWRkKFwidW5pbnRlcmFjdGFibGVjZWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFVOTUFQUEVEW2ldW2pdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChVTk1BUFBFRFtpXVtqXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENFTEwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBORVdCT0FSRC5hcHBlbmRDaGlsZChDRUxMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBDT05UQUlORVIuYXBwZW5kQ2hpbGQoTkVXQk9BUkQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWxvYWRQbGF5ZXJCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBQQk9BUkQgPSBnbG9iYWxzLmdldFBsYXllcigpLmJvYXJkO1xyXG4gICAgICAgIGNvbnN0IFVOTUFQUEVEQk9BUkQgPSBnbG9iYWxzLmdldE9wcG9uZW50KCkudW5tYXBwZWRCb2FyZDtcclxuXHJcbiAgICAgICAgY29uc3QgT0xEQk9BUkQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcmJvYXJkXCIpO1xyXG4gICAgICAgIGNvbnN0IENPTlRBSU5FUiA9IE9MREJPQVJELnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIENPTlRBSU5FUi5yZW1vdmVDaGlsZChPTERCT0FSRCk7XHJcblxyXG4gICAgICAgIGNvbnN0IE5FV0JPQVJEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBORVdCT0FSRC5pZCA9IFwicGxheWVyYm9hcmRcIjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQQk9BUkQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBQQk9BUkRbMF0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENFTEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgQ0VMTC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChVTk1BUFBFREJPQVJEW2ldW2pdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChVTk1BUFBFREJPQVJEW2ldW2pdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoUEJPQVJEW2ldW2pdID09PSAxICYmIFVOTUFQUEVEQk9BUkRbaV1bal0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBDRUxMLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE5FV0JPQVJELmFwcGVuZENoaWxkKENFTEwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChORVdCT0FSRCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCkge1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIGNvbnN0IEJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgICAgICB1dGlscy5yZW1vdmVBbGxDaGlsZHJlbihCT0RZKTtcclxuXHJcbiAgICAgICAgY29uc3QgU0VUVVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IEJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBTRVRVUC5pZCA9IFwic2V0dXBcIjtcclxuICAgICAgICBDT05UQUlORVIuaWQgPSBcImNvbnRhaW5lclwiO1xyXG4gICAgICAgIEJUTi5pZCA9IFwiYXhpc2J0blwiO1xyXG4gICAgICAgIEJUTi50ZXh0Q29udGVudCA9IFwiQ0hBTkdFIEFYSVNcIjtcclxuXHJcbiAgICAgICAgQk9EWS5hcHBlbmRDaGlsZChTRVRVUCk7XHJcbiAgICAgICAgU0VUVVAuYXBwZW5kKEJUTiwgQ09OVEFJTkVSKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYWRkRG9tQ2VsbHMoMTAwKTtcclxuICAgICAgICBnbG9iYWxzLm5ld0dhbWUoKTtcclxuICAgICAgICBsaXN0ZW5lcnMuYWRkU2hpcFBvc2l0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRHYW1lT3Zlcih3aW5uZXIpIHtcclxuICAgICAgICBjb25zdCBCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgY29uc3QgQk9BUkRTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZHNcIik7XHJcbiAgICAgICAgQk9EWS5yZW1vdmVDaGlsZChCT0FSRFMpO1xyXG4gICAgICAgIGNvbnN0IERJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgRElWLmlkID0gXCJyZXNldFwiO1xyXG4gICAgICAgIGNvbnN0IEJVVFRPTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgQlVUVE9OLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XHJcbiAgICAgICAgQlVUVE9OLmlkID0gXCJyZXNldGJ0blwiO1xyXG4gICAgICAgIGlmICh3aW5uZXIgPT09IFwicGxheWVyXCIpIHtcclxuICAgICAgICAgICAgSDEudGV4dENvbnRlbnQgPSBcIllvdSB3aW4hXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgSDEudGV4dENvbnRlbnQgPSBcIllvdSBsb3NlLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBCT0RZLmFwcGVuZENoaWxkKERJVik7XHJcbiAgICAgICAgRElWLmFwcGVuZChIMSwgQlVUVE9OKTtcclxuICAgICAgICBCVVRUT04uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLmhhbmRsZVJlc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFuZGxlQ2VsbENsaWNrKGNlbGwpIHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuY2hlY2tDZWxsT3BwKGNlbGwpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBvcHBvbmVudCBoYXMgYW55IGxpdmVzIGxlZnRcclxuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxzLmdldE9wcG9uZW50KCkuZ2V0TGl2ZXMoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmxvYWRHYW1lT3ZlcihcInBsYXllclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgcGxheWVycyB1bm1hcHBlZCBib2FyZCB0byBpbmNsdWRlIHRoZSBoaXQgb3IgbWlzc1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgZG9tIGVsZW1lbnRzIHNvIHBsYXllciBjYW4ndCBjbGljayBvbiBjZWxsc1xyXG4gICAgICAgICAgICBjb25zdCBPUFBDRUxMUyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHBjZWxsXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IFRVUk5URVhUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0dXJudGV4dFwiKTtcclxuICAgICAgICAgICAgZ2xvYmFscy5nZXRQbGF5ZXIoKS5tYXBUYXJnZXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogT1BQQ0VMTFMuaW5kZXhPZihjZWxsKSAlIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IE1hdGguZmxvb3IoT1BQQ0VMTFMuaW5kZXhPZihjZWxsKSAvIDEwKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmdldE9wcG9uZW50KClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmxvYWRVbmludGVyYWN0YWJsZUVuZW15Qm9hcmQoKTtcclxuXHJcbiAgICAgICAgICAgIFRVUk5URVhULnRleHRDb250ZW50ID0gXCJPcHBvbmVudHMgdHVyblwiO1xyXG4gICAgICAgICAgICBjb25zdCBPUFBUVVJOID0gdXRpbHMuZ2V0Q29tcHV0ZXJNb3ZlKCk7XHJcbiAgICAgICAgICAgIGdsb2JhbHMuZ2V0T3Bwb25lbnQoKS5tYXBUYXJnZXQoT1BQVFVSTiwgZ2xvYmFscy5nZXRQbGF5ZXIoKSk7XHJcbiAgICAgICAgICAgIC8vYXdhaXQgdXRpbHMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgdXRpbHMucmVsb2FkUGxheWVyQm9hcmQoKTtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbHMuZ2V0UGxheWVyKCkuZ2V0TGl2ZXMoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9hZEdhbWVPdmVyKFwiZW5lbXlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9hd2FpdCB1dGlscy5zbGVlcCg1MDApO1xyXG4gICAgICAgICAgICBUVVJOVEVYVC50ZXh0Q29udGVudCA9IFwiWW91ciB0dXJuXCI7XHJcbiAgICAgICAgICAgIC8vYXdhaXQgdXRpbHMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgdXRpbHMubG9hZEludGVyYWN0YWJsZUVuZW15Qm9hcmQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXI6IFwiICsgZ2xvYmFscy5nZXRQbGF5ZXIoKS5nZXRMaXZlcygpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbmVteSBcIiArIGdsb2JhbHMuZ2V0T3Bwb25lbnQoKS5nZXRMaXZlcygpKTtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHR1cm4gdGV4dCB0byBvcHBvbmVudFxyXG4gICAgICAgICAgICAvLyBHZXQgb3Bwb25lbnRzIHR1cm5cclxuICAgICAgICAgICAgLy8gV2hlbiBkb25lIHJlcmVuZGVyIG9wcG9uZW50IGJvYXJkIHRvIGJlIGNsaWNrYWJsZVxyXG4gICAgICAgICAgICAvLyBTZXQgdGV4dCBiYWNrIHRvIHBsYXllciB0dXJuXHJcblxyXG4gICAgICAgICAgICAvLyBGaXJzdCByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGZyb20gYWxsIGNlbGxzIGJ5IHJlbW92aW5nIGZyb20gdGhlIERPTVxyXG4gICAgICAgICAgICAvLyBBZGQgaXQgYmFjayBidXQgd2l0aG91dCBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY2VsbCBpcyBhIGhpdCBvciBtaXNzLCBzdWJ0cmFjdCBmcm9tIG9wcG9uZW50IGJvYXJkIGxpdmVzXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIG9wcG9uZW50IGxpdmVzIGlzIDAsIGlmIHNvIGdhbWUgb3ZlciBhbmQgcGxheWVyIHdpbnNcclxuICAgICAgICAgICAgLy8gSWYgbm90IHRoZW4gZ2V0IG9wcG9uZW50cyB0dXJuIHNldCB0ZXh0IHRvIFwiT3Bwb25lbnRzIHR1cm5cIlxyXG4gICAgICAgICAgICAvLyBTZXQgdGltZW91dCBmb3IgMSBzZWNvbmQgdGhlbiBjYWxsIG9wcG9uZW50VHVybigpXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIG9wcG9uZW50IGhpdCBvciBtaXNzLCBzdWJ0cmFjdCBmcm9tIHBsYXllciBib2FyZCBsaXZlc1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBwbGF5ZXIgbGl2ZXMgaXMgMCwgaWYgc28gZ2FtZSBvdmVyIGFuZCBvcHBvbmVudCB3aW5zXHJcbiAgICAgICAgICAgIC8vIElmIG5vdCB0aGVuIGdldCBwbGF5ZXJzIHR1cm4gc2V0IHRleHQgdG8gXCJZb3VyIHR1cm5cIlxyXG4gICAgICAgICAgICAvLyBSZXJlbmRlciBvcHBvbmVudCBib2FyZCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVycyB0byBhbGwgY2VsbHNcclxuXHJcbiAgICAgICAgICAgIC8vIExldCBwbGF5ZXIgZ28gZmlyc3RcclxuICAgICAgICAgICAgLy8gV2hlbiBwbGF5ZXIgY2xpY2tzIG9uIGEgY2VsbCBjaGVjayBpZiBoaXQgb3IgbWlzcyBldGMgdXBkYXRlIGJsYW5rIGJvYXJkXHJcbiAgICAgICAgICAgIC8vIE5vdyBpdCdzIG9wcG9uZW50cyB0dXJuLCByZXJlbmRlciBvcHBvbmVudHMgYm9hcmQgc28gcGxheWVyIGNhbid0IGNsaWNrIGFnYWluXHJcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIG9wcG9uZW50IHRvIGNsaWNrIG9uY2UgdGhhdCdzIGRvbmUgcmVyZW5kZXIgcGxheWVyIGJvYXJkIHdpdGhcclxuICAgICAgICAgICAgLy8gZXZlbnRsaXN0ZW5lcnNcclxuICAgICAgICAgICAgLy8gKFlvdSB3YW50IHRvIHJlbW92ZSB0aGVtIHdoZW4gaXRzIG9wcG9uZW50cyB0dXJuIHNvIHBsYXllciBjYW4ndCBjbGljayBhbnl0aGluZylcclxuICAgICAgICAgICAgLy8gSGF2ZSBwbGF5ZXIgYW5kIG9wcG9uZW50IGZ1bmN0aW9uIGNoZWNrIGlmIGhhdmUgMTcgeCdzIG9uIGJvYXJkXHJcbiAgICAgICAgICAgIC8vIENvdW50IGFsbCB4J3Mgb24gYSBib2FyZCBhbmQgaWYgMTcgdGhlbiBnYW1lIG92ZXJcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGhpdFxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgZGVzdHJveWVkXHJcbiAgICAgICAgICAgIC8vIEdldCBvcHBvbmVudHMgdHVyblxyXG4gICAgICAgICAgICAvLyBGaWd1cmUgb3V0IGhvdyB0byBsb29wIGJhY2sgdG8gcGxheWVycyB0dXJuXHJcblxyXG4gICAgICAgICAgICAvLyBtYWtlIDIgbW9yZSBibGFuayBib2FyZHNcclxuICAgICAgICAgICAgLy8gRm9yIHBsYXllciB0dXJuIHNldCBzYW1lIGNvb3JkaW5hdGVzIG9uIGJsYW5rIGJvYXJkIHRoZW4gY29tcGFyZSB0aGVtIHRvIHRoZSByZWFsIGJvYXJkXHJcbiAgICAgICAgICAgIC8vIFRoZSBvcHBvbmVudCB3aWxsIHVzZSB0aGUgc2FtZSBsb2dpY1xyXG4gICAgICAgICAgICAvLyBJZiBoaXQgc2V0IGJsYW5rIHRvIDEgZWxzZSAwXHJcbiAgICAgICAgICAgIC8vIE9wcG9uZW50IHVzZXMgdGhhdCBib2FyZCB0byBjYWxjdWxhdGUgbmV4dCBtb3ZlXHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgdHVybnMgaWYgaXRzIHBsYXllciB0dXJuIGhhdmUgdGV4dCBzYXkgXCJZb3VyIHR1cm5cIiBlbHNlIFwiT3Bwb25lbnRzIHR1cm5cIlxyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRHYW1lQm9hcmRzKCkge1xyXG4gICAgICAgIHV0aWxzLnJhbmRvbWl6ZU9wcG9uZW50Qm9hcmQoKTtcclxuICAgICAgICBjb25zdCBCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgY29uc3QgRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBCT0FSRFNDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IEVNUFRZRElWMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgRU1QVFlESVYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBIRUFESU5HMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBjb25zdCBIRUFESU5HMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBjb25zdCBUVVJOVEVYVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBjb25zdCBQTEFZRVJESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IE9QUE9ORU5URElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBESVYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib2FyZHNcIik7XHJcbiAgICAgICAgUExBWUVSRElWLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyYm9hcmRcIik7XHJcbiAgICAgICAgT1BQT05FTlRESVYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvcHBvbmVudGJvYXJkXCIpO1xyXG4gICAgICAgIFRVUk5URVhULnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHVybnRleHRcIik7XHJcbiAgICAgICAgSEVBRElORzEudGV4dENvbnRlbnQgPSBcIllPVVwiO1xyXG4gICAgICAgIEhFQURJTkcyLnRleHRDb250ZW50ID0gXCJFTkVNWVwiO1xyXG4gICAgICAgIFRVUk5URVhULnRleHRDb250ZW50ID0gXCJZT1VSIFRVUk5cIjtcclxuICAgICAgICBjb25zdCBQQm9hcmQgPSBnbG9iYWxzLmdldFBsYXllcigpLmJvYXJkO1xyXG4gICAgICAgIGNvbnN0IE9Cb2FyZCA9IGdsb2JhbHMuZ2V0T3Bwb25lbnQoKS5ib2FyZDtcclxuICAgICAgICAvLyBQbGF5ZXIgQm9hcmRcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBCb2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IFBCb2FyZFswXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ0VMTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBDRUxMLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgUEJvYXJkW2ldW2pdID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgUExBWUVSRElWLmFwcGVuZENoaWxkKENFTEwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9wcG9uZW50IEJvYXJkXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPQm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBPQm9hcmRbMF0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENFTEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgQ0VMTC5jbGFzc0xpc3QuYWRkKFwib3BwY2VsbFwiKTtcclxuICAgICAgICAgICAgICAgIE9Cb2FyZFtpXVtqXSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgID8gKENFTEwuZGF0YXNldC5oaXQgPSBcInRydWVcIilcclxuICAgICAgICAgICAgICAgICAgICA6IChDRUxMLmRhdGFzZXQuaGl0ID0gXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgICAgIENFTEwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5oYW5kbGVDZWxsQ2xpY2soQ0VMTCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIE9QUE9ORU5URElWLmFwcGVuZENoaWxkKENFTEwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEJPRFkuYXBwZW5kQ2hpbGQoRElWKTtcclxuICAgICAgICBESVYuYXBwZW5kKFRVUk5URVhULCBCT0FSRFNDT05UQUlORVIpO1xyXG4gICAgICAgIEJPQVJEU0NPTlRBSU5FUi5hcHBlbmQoRU1QVFlESVYxLCBFTVBUWURJVjIpO1xyXG4gICAgICAgIEVNUFRZRElWMS5hcHBlbmQoSEVBRElORzEsIFBMQVlFUkRJVik7XHJcbiAgICAgICAgRU1QVFlESVYyLmFwcGVuZChIRUFESU5HMiwgT1BQT05FTlRESVYpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vbWlzYy91dGlsc1wiO1xyXG5pbXBvcnQgbGlzdGVuZXJzIGZyb20gXCIuL21pc2MvZXZlbnRsaXN0ZW5lcnNcIjtcclxuaW1wb3J0IGdsb2JhbHMgZnJvbSBcIi4vbWlzYy9nbG9iYWxzXCI7XHJcblxyXG5jbGFzcyBzaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlU2hpcCgpIHt9XHJcblxyXG4gICAgZmluZFBvcyhyb3csIGNvbCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQXhpcyhheGlzKSB7XHJcbiAgICBpZiAoYXhpcyA9PT0gXCJZXCIpIHtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3RhcnR1cCA9ICgoKSA9PiB7XHJcbiAgICAvLyBHZW5lcmF0ZSBjZWxscyBpbnRvICBjb250YWluZXJcclxuICAgIHV0aWxzLmFkZERvbUNlbGxzKDEwMCk7XHJcbiAgICBnbG9iYWxzLm5ld0dhbWUoKTtcclxuXHJcbiAgICAvLyBMb2FkIGV2ZW50bGlzdGVuZXJzIChBbGxvdyBwbGF5ZXIgdG8gcGxhY2Ugc2hpcHMgZG93biBhbmQgY29uZmlybSlcclxuICAgIGxpc3RlbmVycy5hZGRTaGlwUG9zaXRpb25MaXN0ZW5lcnMoKTtcclxuICAgIGNvbnNvbGUubG9nKGdsb2JhbHMuZ2V0T3Bwb25lbnQoKS5ib2FyZCk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==