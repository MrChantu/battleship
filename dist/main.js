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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    font-family: 'Bruno Ace', cursive;\r\n    background: rgb(34,23,200);\r\n    background: linear-gradient(90deg, rgba(34,23,200,1) 0%, rgba(21,103,223,1) 35%, rgba(0,212,255,1) 100%);\r\n}\r\n\r\n#setup, #boards {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#setup {\r\n    gap: 5px;\r\n}\r\n\r\n#container, #playerboard, #opponentboard {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    align-self: center;\r\n    border: 1px solid black;\r\n    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);\r\n-moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);\r\nbox-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.cell, .oppcell, .uninteractablecell {\r\n    box-sizing: border-box;\r\n    min-width: 50px;\r\n    min-height: 50px;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n}\r\n\r\n.hover {\r\n    background-color: black;\r\n}\r\n\r\n.placed {\r\n    background-color: black;\r\n}\r\n\r\n#boards > div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n#boards > div > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.oppcell:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n#reset {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* buttons */\r\n\r\n#axisbtn, #resetbtn {\r\n    background-color: white;\r\n    padding: 5px;\r\n    font-weight: bold;\r\n    border: 3px solid black;\r\n}\r\n\r\n#axisbtn:hover, #resetbtn:hover {\r\n    cursor: pointer;\r\n    background: rgb(228, 13, 13);\r\n    transition: 0.5s;\r\n}\r\n\r\n/* header */\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: center;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iCAAiC;IACjC,0BAA0B;IAC1B,wGAAwG;AAC5G;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,kBAAkB;IAClB,uBAAuB;IACvB,qDAAqD;AACzD,kDAAkD;AAClD,6CAA6C;AAC7C;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,YAAY;;AAEZ;IACI,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,uBAAuB;AAC3B","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    font-family: 'Bruno Ace', cursive;\r\n    background: rgb(34,23,200);\r\n    background: linear-gradient(90deg, rgba(34,23,200,1) 0%, rgba(21,103,223,1) 35%, rgba(0,212,255,1) 100%);\r\n}\r\n\r\n#setup, #boards {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#setup {\r\n    gap: 5px;\r\n}\r\n\r\n#container, #playerboard, #opponentboard {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    align-self: center;\r\n    border: 1px solid black;\r\n    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);\r\n-moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);\r\nbox-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.cell, .oppcell, .uninteractablecell {\r\n    box-sizing: border-box;\r\n    min-width: 50px;\r\n    min-height: 50px;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n}\r\n\r\n.hover {\r\n    background-color: black;\r\n}\r\n\r\n.placed {\r\n    background-color: black;\r\n}\r\n\r\n#boards > div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n#boards > div > div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.oppcell:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n#reset {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* buttons */\r\n\r\n#axisbtn, #resetbtn {\r\n    background-color: white;\r\n    padding: 5px;\r\n    font-weight: bold;\r\n    border: 3px solid black;\r\n}\r\n\r\n#axisbtn:hover, #resetbtn:hover {\r\n    cursor: pointer;\r\n    background: rgb(228, 13, 13);\r\n    transition: 0.5s;\r\n}\r\n\r\n/* header */\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: center;\r\n}"],"sourceRoot":""}]);
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
            let row;
            let col;
            let math;
            let pos;
            let isValid;
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
                    } else if (col + j < 10) {
                        BOARD[row][col + j] = 1;
                    }
                }
            } else {
                for (let j = 0; j < SHIPS[i]; j++) {
                    if (pos === 0) {
                        if (row - j >= 0) {
                            BOARD[row - j][col] = 1;
                        }
                    } else if (col - j >= 0) {
                        BOARD[row][col - j] = 1;
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
            const target = { x, y };
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
                if (UNMAPPED[i][j] === 1) {
                    CELL.style.backgroundColor = "red";
                } else if (UNMAPPED[i][j] === 0) {
                    CELL.style.backgroundColor = "gray";
                }
                if (UNMAPPED[i][j] !== 0 && UNMAPPED[i][j] !== 1) {
                    CELL.addEventListener("click", () => {
                        utils.handleCellClick(CELL);
                    });
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

            if (_globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().getLives() === 0) {
                utils.loadGameOver("player");
                console.log("You win!");
            }

            utils.loadUninteractableEnemyBoard();

            TURNTEXT.textContent = "Opponents turn";
            const OPPTURN = utils.getComputerMove();
            _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getOpponent().mapTarget(OPPTURN, _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer());
            await utils.sleep(500);
            utils.reloadPlayerBoard();
            if (_globals__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().getLives() === 0) {
                utils.loadGameOver("enemy");
            }
            await utils.sleep(500);
            TURNTEXT.textContent = "Your turn";
            await utils.sleep(500);
            utils.loadInteractableEnemyBoard();
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
                if (PBoard[i][j] === 1) CELL.style.backgroundColor = "black";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDVztBQUNhO0FBQ1Q7QUFDckM7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBaUI7QUFDckIsSUFBSSw2REFBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSxxRkFBa0M7QUFDdEMsZ0JBQWdCLGlFQUFtQjtBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWlzYy9ldmVudGxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21pc2MvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21pc2MvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0JydW5vIEFjZScsIGN1cnNpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzNCwyMywyMDApO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzQsMjMsMjAwLDEpIDAlLCByZ2JhKDIxLDEwMywyMjMsMSkgMzUlLCByZ2JhKDAsMjEyLDI1NSwxKSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NldHVwLCAjYm9hcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzZXR1cCB7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyLCAjcGxheWVyYm9hcmQsICNvcHBvbmVudGJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG4tbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG5ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLCAub3BwY2VsbCwgLnVuaW50ZXJhY3RhYmxlY2VsbCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1pbi13aWR0aDogNTBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzID4gZGl2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wcGNlbGw6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGJ1dHRvbnMgKi9cXHJcXG5cXHJcXG4jYXhpc2J0biwgI3Jlc2V0YnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jYXhpc2J0bjpob3ZlciwgI3Jlc2V0YnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAxMywgMTMpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsd0dBQXdHO0FBQzVHOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxREFBcUQ7QUFDekQsa0RBQWtEO0FBQ2xELDZDQUE2QztBQUM3Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBLFlBQVk7O0FBRVo7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQnJ1bm8gQWNlJywgY3Vyc2l2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDM0LDIzLDIwMCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgzNCwyMywyMDAsMSkgMCUsIHJnYmEoMjEsMTAzLDIyMywxKSAzNSUsIHJnYmEoMCwyMTIsMjU1LDEpIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2V0dXAsICNib2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NldHVwIHtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIsICNwbGF5ZXJib2FyZCwgI29wcG9uZW50Ym9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcbi1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcbmJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwsIC5vcHBjZWxsLCAudW5pbnRlcmFjdGFibGVjZWxsIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHMgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHMgPiBkaXYgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3BwY2VsbDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogYnV0dG9ucyAqL1xcclxcblxcclxcbiNheGlzYnRuLCAjcmVzZXRidG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNheGlzYnRuOmhvdmVyLCAjcmVzZXRidG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjgsIDEzLCAxMyk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlciAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBnYW1lLmdlbmVyYXRlQm9hcmQoKTtcclxuICAgICAgICB0aGlzLnVubWFwcGVkQm9hcmQgPSBnYW1lLmdlbmVyYXRlRW1wdHlCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAxNztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBhcnJheS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtpXS5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVFbXB0eUJvYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goW10pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2ldLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIG1hcFRhcmdldCh0YXJnZXQsIG9wcG9uZW50KSB7XHJcbiAgICAgICAgY29uc3Qgb3BwYm9hcmQgPSBvcHBvbmVudC5nZXRCb2FyZCgpO1xyXG4gICAgICAgIGNvbnN0IHVubWFwcGVkID0gdGhpcy51bm1hcHBlZEJvYXJkO1xyXG5cclxuICAgICAgICBpZiAob3BwYm9hcmRbdGFyZ2V0LnldW3RhcmdldC54XSA9PT0gMSkge1xyXG4gICAgICAgICAgICB1bm1hcHBlZFt0YXJnZXQueV1bdGFyZ2V0LnhdID0gMTtcclxuICAgICAgICAgICAgb3Bwb25lbnQucmVtb3ZlTGlmZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVubWFwcGVkW3RhcmdldC55XVt0YXJnZXQueF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2FyZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXZlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXZlcztcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaWZlKCkge1xyXG4gICAgICAgIHRoaXMubGl2ZXMgLT0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpc0dhbWVPdmVyKCkge1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPT09IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IGdsb2JhbHMgZnJvbSBcIi4vZ2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGlzdGVuZXJzIHtcclxuICAgIHN0YXRpYyBhZGRTaGlwUG9zaXRpb25MaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgU0hJUFMgPSBbMiwgMywgMywgNCwgNV07XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwID0gMDtcclxuICAgICAgICBsZXQgQ1VSUkVOVEFYSVMgPSBcIllcIjtcclxuICAgICAgICBjb25zdCBCT0FSRCA9IGdsb2JhbHMuZ2V0UGxheWVyKCkuYm9hcmQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZENsYXNzKGNlbGwsIGF4aXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTaGlwID0gU0hJUFNbY3VycmVudFNoaXBdO1xyXG4gICAgICAgICAgICBjb25zdCBudW0gPSBNYXRoLmNlaWwoc2VsZWN0ZWRTaGlwIC8gMik7XHJcbiAgICAgICAgICAgIGNvbnN0IENFTExTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBDRUxMU0FSUkFZID0gW107XHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgQ0VMTFNBUlJBWS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbaV0ucHVzaChDRUxMU1tjb3VudGVyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJZXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGFjZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB1dGlscy5maW5kQ2VsbChjZWxsKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgKyBpIDwgMTAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFDRUxMU0FSUkFZW3JvdyArIGldW2NvbF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3JvdyArIGldW2NvbF0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFNoaXAgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgKyBpIDwgMTAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFDRUxMU0FSUkFZW3JvdyArIGldW2NvbF0uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3JvdyArIGldW2NvbF0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyAtIGkgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIUNFTExTQVJSQVlbcm93IC0gaV1bY29sXS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93IC0gaV1bY29sXS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93ICsgaSA8IDEwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhQ0VMTFNBUlJBWVtyb3cgKyBpXVtjb2xdLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3cgKyBpXVtjb2xdLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyAtIGkgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIUNFTExTQVJSQVlbcm93IC0gaV1bY29sXS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93IC0gaV1bY29sXS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQbGFjZW1lbnRzIGFyZW4ndCBjb3JyZWN0IGZvciBYIGF4aXMgYW5kIGZvciByZW1vdmVjbGFzc1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcInBsYWNlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHV0aWxzLmZpbmRDZWxsKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNoaXApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCArIGkgPCAxMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIUNFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCArIGkgPCAxMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIUNFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbGFjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sIC0gaSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhQ0VMTFNBUlJBWVtyb3ddW2NvbCAtIGldLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3ddW2NvbCAtIGldLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgKyBpIDwgMTAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFDRUxMU0FSUkFZW3Jvd11bY29sICsgaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGxhY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3Jvd11bY29sICsgaV0uY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sIC0gaSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhQ0VMTFNBUlJBWVtyb3ddW2NvbCAtIGldLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3ddW2NvbCAtIGldLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2VsbCwgYXhpcykge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFNoaXAgPSBTSElQU1tjdXJyZW50U2hpcF07XHJcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IE1hdGguY2VpbChzZWxlY3RlZFNoaXAgLyAyKTtcclxuICAgICAgICAgICAgY29uc3QgQ0VMTFMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IENFTExTQVJSQVkgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIENFTExTQVJSQVkucHVzaChbXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW2ldLnB1c2goQ0VMTFNbY291bnRlcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gXCJZXCIpIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmRDZWxsID0gdXRpbHMuZmluZENlbGwoY2VsbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gZm91bmRDZWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgKyBpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93ICsgaV1bY29sXS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgKyBpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93ICsgaV1bY29sXS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyAtIGkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3cgLSBpXVtjb2xdLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93ICsgaSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3JvdyArIGldW2NvbF0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyAtIGkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3cgLSBpXVtjb2xdLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmRDZWxsID0gdXRpbHMuZmluZENlbGwoY2VsbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gZm91bmRDZWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgKyBpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgKyBpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENFTExTQVJSQVlbcm93XVtjb2wgKyBpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCAtIGkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3ddW2NvbCAtIGldLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sICsgaSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDRUxMU0FSUkFZW3Jvd11bY29sICsgaV0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCAtIGkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtyb3ddW2NvbCAtIGldLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQm9hcmRQbGFjZW1lbnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IENFTExTID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRTaGlwID0gU0hJUFNbY3VycmVudFNoaXBdO1xyXG4gICAgICAgICAgICBjb25zdCBCT0FSRFNJWkUgPSBCT0FSRC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdmVyXCIpO1xyXG4gICAgICAgICAgICBwbGFjZW1lbnRzLmZvckVhY2goKHBsYWNlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHBsYWNlbWVudCBsZW5ndGggbWF0Y2hlcyBjdXJyZW50IHNoaXBcclxuICAgICAgICAgICAgaWYgKHBsYWNlbWVudHMubGVuZ3RoICE9PSBzZWxlY3RlZFNoaXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNhbkJlUGxhY2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRJbmRleCA9IENFTExTLmluZGV4T2YocGxhY2VtZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKHBsYWNlbWVudEluZGV4IC8gQk9BUkRTSVpFKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IHBsYWNlbWVudEluZGV4ICUgQk9BUkRTSVpFO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY2VsbCBpcyBhbHJlYWR5IG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgICBpZiAoQk9BUkRbcm93XVtjb2xdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FuQmVQbGFjZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFBsYWNlIHNoaXAgYW5kIHVwZGF0ZSBhcnJheSBpZiBhbGwgY2VsbHMgYXJlIHZhbGlkXHJcbiAgICAgICAgICAgIGlmIChjYW5CZVBsYWNlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50SW5kZXggPSBDRUxMUy5pbmRleE9mKHBsYWNlbWVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IocGxhY2VtZW50SW5kZXggLyBCT0FSRFNJWkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IHBsYWNlbWVudEluZGV4ICUgQk9BUkRTSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudHNbaV0uY2xhc3NMaXN0LmFkZChcInBsYWNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCT0FSRFtyb3ddW2NvbF0gPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IG5leHQgc2hpcCBmcm9tIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hpcCsrO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYWxsIHNoaXBzIGFyZSBwbGFjZWQsIGxvYWQgYSBidXR0b24gdGhhdCBzYXlzIGZpbmFsaXplIHBsYWNlbWVudHNcclxuICAgICAgICAgICAgICAgIC8vIENvZGUuLi5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2hpcCA+PSBTSElQUy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBTRVRVUENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0dXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9hZEJ1dHRvbihcIkZpbmFsaXplIFBsYWNlbWVudHNcIiwgU0VUVVBDT05UQUlORVIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBib2FyZCBhbmQgbG9hZCBwbGF5ZXIgYW5kIG9wcG9uZW50IGJvYXJkc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBCT0RZLnJlbW92ZUNoaWxkKFNFVFVQQ09OVEFJTkVSKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGdhbWUgYm9hcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMubG9hZEdhbWVCb2FyZHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgQ0VMTFMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgQ0VMTFMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoY2VsbCwgQ1VSUkVOVEFYSVMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoY2VsbCwgQ1VSUkVOVEFYSVMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkUGxhY2VtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQVhJUyBCVE5cclxuICAgICAgICBjb25zdCBBWElTQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzYnRuXCIpO1xyXG4gICAgICAgIEFYSVNCVE4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gQ2hhbmdlIGF4aXMgYW5kIHJlcmVuZGVyIGJvYXJkIHdpdGggYWxsIGNlbGxzIHRoYXQgYXJlIGFscmVhZHkgcGxhY2VkXHJcbiAgICAgICAgICAgIC8vIEFuZCBhZGQgbmV3IGV2ZW50bGlzdGVuZXJzIHRvIGFsbCBjZWxsc1xyXG4gICAgICAgICAgICBpZiAoQ1VSUkVOVEFYSVMgPT09IFwiWVwiKSB7XHJcbiAgICAgICAgICAgICAgICBDVVJSRU5UQVhJUyA9IFwiWFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgU0VUVVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHVwXCIpO1xyXG4gICAgICAgICAgICAgICAgU0VUVVAucmVtb3ZlQ2hpbGQob2xkQ09OVEFJTkVSKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCT0FSRC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQk9BUkRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q0VMTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NFTEwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCT0FSRFtpXVtqXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q0VMTC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDRUxMLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MobmV3Q0VMTCwgQ1VSUkVOVEFYSVMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NFTEwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MobmV3Q0VMTCwgQ1VSUkVOVEFYSVMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NFTEwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvYXJkUGxhY2VtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NPTlRBSU5FUi5hcHBlbmRDaGlsZChuZXdDRUxMKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdDT05UQUlORVIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XHJcbiAgICAgICAgICAgICAgICBTRVRVUC5hcHBlbmRDaGlsZChuZXdDT05UQUlORVIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQ1VSUkVOVEFYSVMgPSBcIllcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRDT05UQUlORVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFNFVFVQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR1cFwiKTtcclxuICAgICAgICAgICAgICAgIFNFVFVQLnJlbW92ZUNoaWxkKG9sZENPTlRBSU5FUik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQk9BUkQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJPQVJEW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NFTEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDRUxMLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQk9BUkRbaV1bal0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NFTEwuY2xhc3NMaXN0LmFkZChcInBsYWNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q0VMTC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKG5ld0NFTEwsIENVUlJFTlRBWElTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NFTEwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MobmV3Q0VMTCwgQ1VSUkVOVEFYSVMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q0VMTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9hcmRQbGFjZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q09OVEFJTkVSLmFwcGVuZENoaWxkKG5ld0NFTEwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld0NPTlRBSU5FUi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgICAgIFNFVFVQLmFwcGVuZENoaWxkKG5ld0NPTlRBSU5FUik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgZ2FtZSBmcm9tIFwiLi4vY2xhc3Nlcy9nYW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbG9iYWxzIHtcclxuICAgIHN0YXRpYyBwbGF5ZXIgPSBuZXcgZ2FtZSgpO1xyXG4gICAgc3RhdGljIG9wcG9uZW50ID0gbmV3IGdhbWUoKTtcclxuXHJcbiAgICBzdGF0aWMgbmV3R2FtZSgpIHtcclxuICAgICAgICBnbG9iYWxzLnBsYXllciA9IG5ldyBnYW1lKCk7XHJcbiAgICAgICAgZ2xvYmFscy5vcHBvbmVudCA9IG5ldyBnYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBsYXllcigpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFscy5wbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE9wcG9uZW50KCkge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWxzLm9wcG9uZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGdsb2JhbHMgZnJvbSBcIi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgbGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50bGlzdGVuZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1dGlscyB7XHJcbiAgICBzdGF0aWMgYWRkRG9tQ2VsbHMobnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBDRUxMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgQ0VMTC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgICAgICAgQ09OVEFJTkVSLmFwcGVuZENoaWxkKENFTEwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmluZENlbGwoY2VsbCkge1xyXG4gICAgICAgIGNvbnN0IENFTExTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xyXG4gICAgICAgIGNvbnN0IENFTExTQVJSQVkgPSBbXTtcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIENFTExTQVJSQVkucHVzaChbXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgQ0VMTFNBUlJBWVtpXS5wdXNoKENFTExTW2NvdW50ZXJdKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwgPT09IENFTExTQVJSQVlbaV1bal0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ksIGpdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1ZhbGlkUG9zaXRpb24ocm93LCBjb2wsIHNoaXBTaXplLCBib2FyZCwgbWF0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobWF0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyArIGkgPiA5IHx8IGJvYXJkW3JvdyArIGldW2NvbF0gPT09IDEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2wgKyBpID4gOSB8fCBib2FyZFtyb3ddW2NvbCArIGldID09PSAxKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93IC0gaSA8IDAgfHwgYm9hcmRbcm93IC0gaV1bY29sXSA9PT0gMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbCAtIGkgPCAwIHx8IGJvYXJkW3Jvd11bY29sIC0gaV0gPT09IDEpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9taXplT3Bwb25lbnRCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBCT0FSRCA9IGdsb2JhbHMuZ2V0T3Bwb25lbnQoKS5ib2FyZDtcclxuICAgICAgICBjb25zdCBTSElQUyA9IFsyLCAzLCAzLCA0LCA1XTtcclxuICAgICAgICBjb25zdCB1c2VkUG9zaXRpb25zID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0hJUFMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvdztcclxuICAgICAgICAgICAgbGV0IGNvbDtcclxuICAgICAgICAgICAgbGV0IG1hdGg7XHJcbiAgICAgICAgICAgIGxldCBwb3M7XHJcbiAgICAgICAgICAgIGxldCBpc1ZhbGlkO1xyXG4gICAgICAgICAgICB3aGlsZSAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgICAgIG1hdGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgICAgIHBvcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHV0aWxzLmlzVmFsaWRQb3NpdGlvbihcclxuICAgICAgICAgICAgICAgICAgICByb3csXHJcbiAgICAgICAgICAgICAgICAgICAgY29sLFxyXG4gICAgICAgICAgICAgICAgICAgIFNISVBTW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIEJPQVJELFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGhcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXNlZFBvc2l0aW9ucy5wdXNoKFtyb3csIGNvbF0pO1xyXG4gICAgICAgICAgICBpZiAobWF0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBTSElQU1tpXTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93ICsgaiA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCT0FSRFtyb3cgKyBqXVtjb2xdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sICsgaiA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJPQVJEW3Jvd11bY29sICsgal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgU0hJUFNbaV07IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyAtIGogPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQk9BUkRbcm93IC0gal1bY29sXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbCAtIGogPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCT0FSRFtyb3ddW2NvbCAtIGpdID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRCdXR0b24odGV4dCwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3QgQlVUVE9OID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBCVVRUT04udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChCVVRUT04pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaGVja0NlbGxPcHAoY2VsbCkge1xyXG4gICAgICAgIGNvbnN0IE9QUEJPQVJEID0gZ2xvYmFscy5nZXRPcHBvbmVudCgpLmJvYXJkO1xyXG4gICAgICAgIGNvbnN0IENFTExTID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BwY2VsbFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgSU5ERVggPSBDRUxMUy5pbmRleE9mKGNlbGwpO1xyXG4gICAgICAgIGNvbnN0IExFTkdUSCA9IE9QUEJPQVJELmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKE9QUEJPQVJEW01hdGguZmxvb3IoSU5ERVggLyBMRU5HVEgpXVtJTkRFWCAlIExFTkdUSF0gPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2hlY2tDZWxsUGxheWVyKGNlbGwpIHtcclxuICAgICAgICBjb25zdCBQQk9BUkQgPSBnbG9iYWxzLmdldFBsYXllcigpLmJvYXJkO1xyXG4gICAgICAgIGNvbnN0IENFTExTID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgSU5ERVggPSBDRUxMUy5pbmRleE9mKGNlbGwpO1xyXG4gICAgICAgIGNvbnN0IExFTkdUSCA9IFBCT0FSRC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChQQk9BUkRbTWF0aC5mbG9vcihJTkRFWCAvIExFTkdUSCldW0lOREVYICUgTEVOR1RIXSA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNsZWVwKG1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbXB1dGVyTW92ZSgpIHtcclxuICAgICAgICBjb25zdCBCT0FSRCA9IGdsb2JhbHMuZ2V0T3Bwb25lbnQoKS51bm1hcHBlZEJvYXJkO1xyXG4gICAgICAgIGNvbnN0IG1hcHBlZENlbGxzID0gQk9BUkQuZmxhdCgpLmZpbHRlcigoeCkgPT4geCAhPT0gbnVsbCkubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobWFwcGVkQ2VsbHMgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVyZSBubyBjZWxscyBoYXZlIGJlZW4gbWFwcGVkIHlldFxyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gQk9BUkQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0geyB4LCB5IH07XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5kIGFsbCB1bm1hcHBlZCBjZWxscyBhZGphY2VudCB0byBoaXRzXHJcbiAgICAgICAgbGV0IHBvdGVudGlhbE1vdmVzID0gW107XHJcbiAgICAgICAgQk9BUkQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgYWRqYWNlbnQgdG8gaGl0IGNlbGxcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRqYWNlbnRIaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggPiAwICYmIEJPQVJEW3Jvd0luZGV4IC0gMV1bY29sSW5kZXhdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkamFjZW50SGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbEluZGV4ID4gMCAmJiBCT0FSRFtyb3dJbmRleF1bY29sSW5kZXggLSAxXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGphY2VudEhpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93SW5kZXggPCBCT0FSRC5sZW5ndGggLSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJPQVJEW3Jvd0luZGV4ICsgMV1bY29sSW5kZXhdID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkamFjZW50SGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xJbmRleCA8IHJvdy5sZW5ndGggLSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJPQVJEW3Jvd0luZGV4XVtjb2xJbmRleCArIDFdID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkamFjZW50SGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkamFjZW50SGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLnB1c2goeyB4OiBjb2xJbmRleCwgeTogcm93SW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgbm8gYWRqYWNlbnQgaGl0cywgY2hvb3NlIHJhbmRvbWx5IGZyb20gdW5tYXBwZWQgY2VsbHNcclxuICAgICAgICBpZiAocG90ZW50aWFsTW92ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzID0gW107XHJcbiAgICAgICAgICAgIEJPQVJELmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLnB1c2goeyB4OiBjb2xJbmRleCwgeTogcm93SW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG90ZW50aWFsTW92ZXMgPSB1dGlscy5zaHVmZmxlKHBvdGVudGlhbE1vdmVzKTtcclxuXHJcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHBvdGVudGlhbCBtb3ZlcyBhbmQgc2VsZWN0IHRoZSBmaXJzdCBvbmUgdGhhdCBoYXNuJ3QgYmVlbiB0cmllZCB5ZXRcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBwb3RlbnRpYWxNb3Zlcy5mb3JFYWNoKChtb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChCT0FSRFttb3ZlLnldW21vdmUueF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IG1vdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZEludGVyYWN0YWJsZUVuZW15Qm9hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgT1BQQk9BUkQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wcG9uZW50Ym9hcmRcIik7XHJcbiAgICAgICAgY29uc3QgQ09OVEFJTkVSID0gT1BQQk9BUkQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCBVTk1BUFBFRCA9IGdsb2JhbHMuZ2V0UGxheWVyKCkudW5tYXBwZWRCb2FyZDtcclxuXHJcbiAgICAgICAgQ09OVEFJTkVSLnJlbW92ZUNoaWxkKE9QUEJPQVJEKTtcclxuXHJcbiAgICAgICAgY29uc3QgTkVXQk9BUkQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIE5FV0JPQVJELmlkID0gXCJvcHBvbmVudGJvYXJkXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBVTk1BUFBFRC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IFVOTUFQUEVEWzBdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBDRUxMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIENFTEwuY2xhc3NMaXN0LmFkZChcIm9wcGNlbGxcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoVU5NQVBQRURbaV1bal0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBDRUxMLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFVOTUFQUEVEW2ldW2pdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChVTk1BUFBFRFtpXVtqXSAhPT0gMCAmJiBVTk1BUFBFRFtpXVtqXSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENFTEwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuaGFuZGxlQ2VsbENsaWNrKENFTEwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgTkVXQk9BUkQuYXBwZW5kQ2hpbGQoQ0VMTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQ09OVEFJTkVSLmFwcGVuZENoaWxkKE5FV0JPQVJEKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZFVuaW50ZXJhY3RhYmxlRW5lbXlCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBPUFBCT0FSRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Bwb25lbnRib2FyZFwiKTtcclxuICAgICAgICBjb25zdCBDT05UQUlORVIgPSBPUFBCT0FSRC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IFVOTUFQUEVEID0gZ2xvYmFscy5nZXRQbGF5ZXIoKS51bm1hcHBlZEJvYXJkO1xyXG5cclxuICAgICAgICBDT05UQUlORVIucmVtb3ZlQ2hpbGQoT1BQQk9BUkQpO1xyXG5cclxuICAgICAgICBjb25zdCBORVdCT0FSRCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgTkVXQk9BUkQuaWQgPSBcIm9wcG9uZW50Ym9hcmRcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFVOTUFQUEVELmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgVU5NQVBQRURbMF0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENFTEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgQ0VMTC5jbGFzc0xpc3QuYWRkKFwidW5pbnRlcmFjdGFibGVjZWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFVOTUFQUEVEW2ldW2pdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChVTk1BUFBFRFtpXVtqXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENFTEwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBORVdCT0FSRC5hcHBlbmRDaGlsZChDRUxMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBDT05UQUlORVIuYXBwZW5kQ2hpbGQoTkVXQk9BUkQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWxvYWRQbGF5ZXJCb2FyZCgpIHtcclxuICAgICAgICBjb25zdCBQQk9BUkQgPSBnbG9iYWxzLmdldFBsYXllcigpLmJvYXJkO1xyXG4gICAgICAgIGNvbnN0IFVOTUFQUEVEQk9BUkQgPSBnbG9iYWxzLmdldE9wcG9uZW50KCkudW5tYXBwZWRCb2FyZDtcclxuXHJcbiAgICAgICAgY29uc3QgT0xEQk9BUkQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcmJvYXJkXCIpO1xyXG4gICAgICAgIGNvbnN0IENPTlRBSU5FUiA9IE9MREJPQVJELnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIENPTlRBSU5FUi5yZW1vdmVDaGlsZChPTERCT0FSRCk7XHJcblxyXG4gICAgICAgIGNvbnN0IE5FV0JPQVJEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBORVdCT0FSRC5pZCA9IFwicGxheWVyYm9hcmRcIjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQQk9BUkQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBQQk9BUkRbMF0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IENFTEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgQ0VMTC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChVTk1BUFBFREJPQVJEW2ldW2pdID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChVTk1BUFBFREJPQVJEW2ldW2pdID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoUEJPQVJEW2ldW2pdID09PSAxICYmIFVOTUFQUEVEQk9BUkRbaV1bal0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBDRUxMLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE5FV0JPQVJELmFwcGVuZENoaWxkKENFTEwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENPTlRBSU5FUi5hcHBlbmRDaGlsZChORVdCT0FSRCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCkge1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIGNvbnN0IEJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgICAgICB1dGlscy5yZW1vdmVBbGxDaGlsZHJlbihCT0RZKTtcclxuXHJcbiAgICAgICAgY29uc3QgU0VUVVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IEJUTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgQ09OVEFJTkVSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBTRVRVUC5pZCA9IFwic2V0dXBcIjtcclxuICAgICAgICBDT05UQUlORVIuaWQgPSBcImNvbnRhaW5lclwiO1xyXG4gICAgICAgIEJUTi5pZCA9IFwiYXhpc2J0blwiO1xyXG4gICAgICAgIEJUTi50ZXh0Q29udGVudCA9IFwiQ0hBTkdFIEFYSVNcIjtcclxuXHJcbiAgICAgICAgQk9EWS5hcHBlbmRDaGlsZChTRVRVUCk7XHJcbiAgICAgICAgU0VUVVAuYXBwZW5kKEJUTiwgQ09OVEFJTkVSKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYWRkRG9tQ2VsbHMoMTAwKTtcclxuICAgICAgICBnbG9iYWxzLm5ld0dhbWUoKTtcclxuICAgICAgICBsaXN0ZW5lcnMuYWRkU2hpcFBvc2l0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRHYW1lT3Zlcih3aW5uZXIpIHtcclxuICAgICAgICBjb25zdCBCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgY29uc3QgQk9BUkRTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZHNcIik7XHJcbiAgICAgICAgQk9EWS5yZW1vdmVDaGlsZChCT0FSRFMpO1xyXG4gICAgICAgIGNvbnN0IERJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgRElWLmlkID0gXCJyZXNldFwiO1xyXG4gICAgICAgIGNvbnN0IEJVVFRPTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgQlVUVE9OLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluXCI7XHJcbiAgICAgICAgQlVUVE9OLmlkID0gXCJyZXNldGJ0blwiO1xyXG4gICAgICAgIGlmICh3aW5uZXIgPT09IFwicGxheWVyXCIpIHtcclxuICAgICAgICAgICAgSDEudGV4dENvbnRlbnQgPSBcIllvdSB3aW4hXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgSDEudGV4dENvbnRlbnQgPSBcIllvdSBsb3NlLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBCT0RZLmFwcGVuZENoaWxkKERJVik7XHJcbiAgICAgICAgRElWLmFwcGVuZChIMSwgQlVUVE9OKTtcclxuICAgICAgICBCVVRUT04uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHV0aWxzLmhhbmRsZVJlc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFuZGxlQ2VsbENsaWNrKGNlbGwpIHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBPUFBDRUxMUyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHBjZWxsXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IFRVUk5URVhUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0dXJudGV4dFwiKTtcclxuICAgICAgICAgICAgZ2xvYmFscy5nZXRQbGF5ZXIoKS5tYXBUYXJnZXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogT1BQQ0VMTFMuaW5kZXhPZihjZWxsKSAlIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IE1hdGguZmxvb3IoT1BQQ0VMTFMuaW5kZXhPZihjZWxsKSAvIDEwKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzLmdldE9wcG9uZW50KClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxzLmdldE9wcG9uZW50KCkuZ2V0TGl2ZXMoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9hZEdhbWVPdmVyKFwicGxheWVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3Ugd2luIVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMubG9hZFVuaW50ZXJhY3RhYmxlRW5lbXlCb2FyZCgpO1xyXG5cclxuICAgICAgICAgICAgVFVSTlRFWFQudGV4dENvbnRlbnQgPSBcIk9wcG9uZW50cyB0dXJuXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IE9QUFRVUk4gPSB1dGlscy5nZXRDb21wdXRlck1vdmUoKTtcclxuICAgICAgICAgICAgZ2xvYmFscy5nZXRPcHBvbmVudCgpLm1hcFRhcmdldChPUFBUVVJOLCBnbG9iYWxzLmdldFBsYXllcigpKTtcclxuICAgICAgICAgICAgYXdhaXQgdXRpbHMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgdXRpbHMucmVsb2FkUGxheWVyQm9hcmQoKTtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbHMuZ2V0UGxheWVyKCkuZ2V0TGl2ZXMoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMubG9hZEdhbWVPdmVyKFwiZW5lbXlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgdXRpbHMuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgVFVSTlRFWFQudGV4dENvbnRlbnQgPSBcIllvdXIgdHVyblwiO1xyXG4gICAgICAgICAgICBhd2FpdCB1dGlscy5zbGVlcCg1MDApO1xyXG4gICAgICAgICAgICB1dGlscy5sb2FkSW50ZXJhY3RhYmxlRW5lbXlCb2FyZCgpO1xyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRHYW1lQm9hcmRzKCkge1xyXG4gICAgICAgIHV0aWxzLnJhbmRvbWl6ZU9wcG9uZW50Qm9hcmQoKTtcclxuICAgICAgICBjb25zdCBCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICAgICAgY29uc3QgRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBCT0FSRFNDT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IEVNUFRZRElWMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgRU1QVFlESVYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBIRUFESU5HMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBjb25zdCBIRUFESU5HMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBjb25zdCBUVVJOVEVYVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICBjb25zdCBQTEFZRVJESVYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IE9QUE9ORU5URElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBESVYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib2FyZHNcIik7XHJcbiAgICAgICAgUExBWUVSRElWLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyYm9hcmRcIik7XHJcbiAgICAgICAgT1BQT05FTlRESVYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvcHBvbmVudGJvYXJkXCIpO1xyXG4gICAgICAgIFRVUk5URVhULnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHVybnRleHRcIik7XHJcbiAgICAgICAgSEVBRElORzEudGV4dENvbnRlbnQgPSBcIllPVVwiO1xyXG4gICAgICAgIEhFQURJTkcyLnRleHRDb250ZW50ID0gXCJFTkVNWVwiO1xyXG4gICAgICAgIFRVUk5URVhULnRleHRDb250ZW50ID0gXCJZT1VSIFRVUk5cIjtcclxuICAgICAgICBjb25zdCBQQm9hcmQgPSBnbG9iYWxzLmdldFBsYXllcigpLmJvYXJkO1xyXG4gICAgICAgIGNvbnN0IE9Cb2FyZCA9IGdsb2JhbHMuZ2V0T3Bwb25lbnQoKS5ib2FyZDtcclxuICAgICAgICAvLyBQbGF5ZXIgQm9hcmRcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBCb2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IFBCb2FyZFswXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ0VMTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBDRUxMLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFBCb2FyZFtpXVtqXSA9PT0gMSkgQ0VMTC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICBQTEFZRVJESVYuYXBwZW5kQ2hpbGQoQ0VMTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT3Bwb25lbnQgQm9hcmRcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9Cb2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IE9Cb2FyZFswXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ0VMTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBDRUxMLmNsYXNzTGlzdC5hZGQoXCJvcHBjZWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgT0JvYXJkW2ldW2pdID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoQ0VMTC5kYXRhc2V0LmhpdCA9IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKENFTEwuZGF0YXNldC5oaXQgPSBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgQ0VMTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmhhbmRsZUNlbGxDbGljayhDRUxMKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgT1BQT05FTlRESVYuYXBwZW5kQ2hpbGQoQ0VMTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQk9EWS5hcHBlbmRDaGlsZChESVYpO1xyXG4gICAgICAgIERJVi5hcHBlbmQoVFVSTlRFWFQsIEJPQVJEU0NPTlRBSU5FUik7XHJcbiAgICAgICAgQk9BUkRTQ09OVEFJTkVSLmFwcGVuZChFTVBUWURJVjEsIEVNUFRZRElWMik7XHJcbiAgICAgICAgRU1QVFlESVYxLmFwcGVuZChIRUFESU5HMSwgUExBWUVSRElWKTtcclxuICAgICAgICBFTVBUWURJVjIuYXBwZW5kKEhFQURJTkcyLCBPUFBPTkVOVERJVik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9taXNjL3V0aWxzXCI7XHJcbmltcG9ydCBsaXN0ZW5lcnMgZnJvbSBcIi4vbWlzYy9ldmVudGxpc3RlbmVyc1wiO1xyXG5pbXBvcnQgZ2xvYmFscyBmcm9tIFwiLi9taXNjL2dsb2JhbHNcIjtcclxuXHJcbmNvbnN0IHN0YXJ0dXAgPSAoKCkgPT4ge1xyXG4gICAgLy8gR2VuZXJhdGUgY2VsbHMgaW50byAgY29udGFpbmVyXHJcbiAgICB1dGlscy5hZGREb21DZWxscygxMDApO1xyXG4gICAgZ2xvYmFscy5uZXdHYW1lKCk7XHJcblxyXG4gICAgLy8gTG9hZCBldmVudGxpc3RlbmVycyAoQWxsb3cgcGxheWVyIHRvIHBsYWNlIHNoaXBzIGRvd24gYW5kIGNvbmZpcm0pXHJcbiAgICBsaXN0ZW5lcnMuYWRkU2hpcFBvc2l0aW9uTGlzdGVuZXJzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhnbG9iYWxzLmdldE9wcG9uZW50KCkuYm9hcmQpO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=