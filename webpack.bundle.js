/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/bind.js":
/*!*****************************************!*\
  !*** ./node_modules/classnames/bind.js ***!
  \*****************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(this && this[arg] || arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(this, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(this && this[key] || key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/classnames/bind.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/station.jpg */ \"./src/images/station.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tlist-style: none;\n}\n\nhtml {\n\tfont-family: 'Poppins';\n}\n\nbody {\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n\tbackground-size: cover;\n\t/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */\n\tfont-weight: bold;\n\ttext-align: center;\n}\n\nh1 {\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n\tfont-weight: 600;\n}\n\n\nh2 {\n\tfont-size: 30px;\n\tmargin-top: 0;\n\tmargin-bottom: 20px;\n\tpadding: 10px;\n\twidth: 80px;\n\theight: 70px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-weight: 600;\n\tborder-radius: 50%;\n\tbox-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n\ttransition: .5s;\n}\n\nh2:hover {\n\tbackground-color: rgb(92, 91, 91);\n}\n\ndom-js {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\nbutton {\n\tborder: none;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tcolor: white;\n\tfont-weight: bold;\n\twidth: 200px;\n\tmargin-bottom: 5px;\n\tborder-radius: 5px;\n}\n\np {\n\tpadding: 30px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(5,50px);\n\tgap: 10px;\n\tjustify-content: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://standalone-javascript/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modules/app.module.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modules/app.module.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n\n.rYGlxxLQmsa6dszRAgki,\n._5nPleVU7Hpnlb1VNp9Hx,\n.Z6YgnBMZffy7eyBW9dF7 {\n\tcursor: pointer;\n\ttransition: 0.5s;\n\tfont-weight: 600;\n}\n\n.rYGlxxLQmsa6dszRAgki {\n\tbackground: darkred;\n}\n\n.rYGlxxLQmsa6dszRAgki:hover {\n\tbackground: rgb(197, 53, 53);\n}\n\n._5nPleVU7Hpnlb1VNp9Hx {\n\tbackground: rgb(29, 94, 94);\n}\n\n._5nPleVU7Hpnlb1VNp9Hx:hover {\n\tbackground: rgb(68, 197, 197);\n\tcolor: black;\n}\n\n.Z6YgnBMZffy7eyBW9dF7 {\n\tbackground: darkgreen;\n}\n.Z6YgnBMZffy7eyBW9dF7:hover {\n\tbackground: rgb(45, 172, 45);\n}\n\n.Y5YcoGlWgjHzJiNUXehg {\n\ttransition: opacity 1s;\n}\n\n\n\n.eSl8dzc0n0VeIFDNWXQw {\n\tpadding: 5px;\n\twidth: 45px;\n\theight: 45px;\n\tborder-radius: 50%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttransition: .5s;\n\tbox-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.eSl8dzc0n0VeIFDNWXQw:hover {\n\tbackground-color: rgb(238, 238, 146);\n\tcolor: black;\n}\n\n.Tfoii06OkCr1djmFE7HE {\n\tbackground-color: rgb(56, 30, 56);\n\tcolor: white;\n}\n\n.IkhXPky3ciTAPTeQZu3l {\n\tbackground-color: green;\n\tcolor: white;\n  }\n  \n  .JkqDqqcLTkJ5erwKJDFQ {\n\tbackground-color: yellow;\n\tcolor: black;\n  }\n\n  .ODXgFUGcB3tKN4O6VpQk {\n\tbackground-color: orange;\n  }\n  \n  .rGoQONnqwvPGSRNKjVrA {\n\tbackground-color: red;\n\tcolor: white;\n\t\n  }\n  \n  .svAYECRZ0JUPDJbPK4h_ {\n\tbackground-color: black;\n\tcolor: white;\n  }\n\n  .eSl8dzc0n0VeIFDNWXQw .svAYECRZ0JUPDJbPK4h_ {\n\tfont-size: 20px;\n  }`, \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"increment-btn\": `rYGlxxLQmsa6dszRAgki`,\n\t\"decrement-btn\": `_5nPleVU7Hpnlb1VNp9Hx`,\n\t\"save-btn\": `Z6YgnBMZffy7eyBW9dF7`,\n\t\"smooth-loading\": `Y5YcoGlWgjHzJiNUXehg`,\n\t\"card\": `eSl8dzc0n0VeIFDNWXQw`,\n\t\"violet-bg\": `Tfoii06OkCr1djmFE7HE`,\n\t\"green-bg\": `IkhXPky3ciTAPTeQZu3l`,\n\t\"yellow-bg\": `JkqDqqcLTkJ5erwKJDFQ`,\n\t\"orange-bg\": `ODXgFUGcB3tKN4O6VpQk`,\n\t\"red-bg\": `rGoQONnqwvPGSRNKjVrA`,\n\t\"black-bg\": `svAYECRZ0JUPDJbPK4h_`\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://standalone-javascript/./src/css/modules/app.module.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://standalone-javascript/./src/css/index.css?");

/***/ }),

/***/ "./src/css/modules/app.module.css":
/*!****************************************!*\
  !*** ./src/css/modules/app.module.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./app.module.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/modules/app.module.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_module_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_module_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_app_module_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_app_module_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://standalone-javascript/./src/css/modules/app.module.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://standalone-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ \"./src/start.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _security_HashCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/HashCode */ \"./src/security/HashCode.js\");\n\n\n\n\nconst DOM = document.querySelector('#app');\nDOM.id = (0,_security_HashCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n(0,_start__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DOM); // Renders the Element ID\n\n\n//# sourceURL=webpack://standalone-javascript/./src/index.js?");

/***/ }),

/***/ "./src/js/passenger-counter.js":
/*!*************************************!*\
  !*** ./src/js/passenger-counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PassengerCount: () => (/* binding */ PassengerCount)\n/* harmony export */ });\n/* harmony import */ var _css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/modules/app.module.css */ \"./src/css/modules/app.module.css\");\n\n\nlet count = 0,\n  IncrementBTN,\n  DecrementBTN,\n  CountField,\n  SaveBTN,\n  SaveEL,\n  countInterval;\n\nconst PassengerCount = (DOM) => {\n  IncrementBTN = DOM.querySelector('#increment-btn');\n  DecrementBTN = DOM.querySelector('#decrement-btn');\n  CountField = DOM.querySelector('#count-el');\n  SaveBTN = DOM.querySelector('#save-btn');\n  SaveEL = DOM.querySelector('#save-el');\n\n  IncrementBTN.addEventListener('click', startIncrement)\n  IncrementBTN.addEventListener('click', stopIncrement)\n  IncrementBTN.addEventListener('mousedown', startIncrement);\n  IncrementBTN.addEventListener('mouseup', stopIncrement);\n  IncrementBTN.addEventListener('mouseout', stopIncrement);\n\n  DecrementBTN.addEventListener('mousedown', startDecrement);\n  DecrementBTN.addEventListener('mouseup', stopIncrement);\n  DecrementBTN.addEventListener('mouseout', stopIncrement);\n\n  function startIncrement() {\n    countInterval = setInterval(() => {\n      count++;\n      CountField.innerHTML = count;\n\n      CountField.classList.add('smooth-loading');\n\n      if(count < 0) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n      } else if (count < 10) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`);\n      } else if (count < 100) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`);\n      }  else if (count < 500) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`);\n      } else if (count < 1000) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`);\n      } else {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`);\n      }\n    }, 50);\n  }\n  function startDecrement() {\n    countInterval = setInterval(() => {\n      count--;\n      CountField.innerHTML = count;\n\n      CountField.classList.add('smooth-loading');\n\n      if(count < 0) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n      } else if (count < 10) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`);\n      } else if (count < 100) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`);\n      }  else if (count < 500) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`);\n      } else if (count < 1000) {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`);\n      } else {\n        CountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n        CountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`);\n      }\n    }, 50);\n  }\n\n  function stopIncrement() {\n    clearInterval(countInterval);\n\n    setTimeout(() => {\n      CountField.classList.remove('smooth-loading');\n    }, 1000);\n  }\n\n  SaveBTN.addEventListener('click', Save);\n\n  function Save() {\n\n\tif (count === 0) {\n\t\tResetBG();\n\t  } else {\n\n    const NewDiv = document.createElement('card');\n    NewDiv.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].card}`)\n    NewDiv.innerHTML = count;\n    SaveEL.appendChild(NewDiv);\n\n    if(count < 0){\n      NewDiv.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n    }\n\t else if (count < 10) {\n\t\tNewDiv.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`);\n\t  } else if (count < 100) {\n\t\tNewDiv.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`);\n\t  } else if (count < 499) {\n\t\tNewDiv.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`);\n\t  } else if (count < 1000) {\n\t\tNewDiv.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`);\n\t  } else {\n\t\tNewDiv.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`);\n\t  }\n      count = 0;\n\t  ResetBG();\n\t  }\n\n\n    CountField.innerHTML = count;\n\n    function ResetBG(){\n\t\tCountField.classList.remove(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['yellow-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['red-bg']}`, `${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['black-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['orange-bg']}`,`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['violet-bg']}`);\n\t\tCountField.classList.add(`${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['green-bg']}`);\n\t}\n  }\n};\n\n\n//# sourceURL=webpack://standalone-javascript/./src/js/passenger-counter.js?");

/***/ }),

/***/ "./src/security/HashCode.js":
/*!**********************************!*\
  !*** ./src/security/HashCode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UniqueHash)\n/* harmony export */ });\nconst GenerateHashes = new Set();\n\nfunction UniqueHash() {\n\tlet hash;\n\tdo {\n\t\thash = Math.random().toString(36).substring(2);\n\t} while (GenerateHashes.has(hash));\n\tGenerateHashes.add(hash);\n\treturn hash;\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/security/HashCode.js?");

/***/ }),

/***/ "./src/security/Render.js":
/*!********************************!*\
  !*** ./src/security/Render.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Render)\n/* harmony export */ });\n/* harmony import */ var _HashCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HashCode */ \"./src/security/HashCode.js\");\n\n\nfunction Render() {\n\t// Get Render's ID\n\tconst ContainerDOM = document.getElementById('container');\n\n\t// Hash Applied\n\twindow.addEventListener('DOMContentLoaded', () => {\n\t\tContainerDOM.id = (0,_HashCode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t});\n\n\t// Render's the JS Component\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/security/Render.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cx: () => (/* binding */ cx),\n/* harmony export */   \"default\": () => (/* binding */ Start)\n/* harmony export */ });\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/modules/app.module.css */ \"./src/css/modules/app.module.css\");\n/* harmony import */ var _security_Render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/Render */ \"./src/security/Render.js\");\n/* harmony import */ var _js_passenger_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/passenger-counter */ \"./src/js/passenger-counter.js\");\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default().bind(_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction Start(DOM) {\n\tDOM.innerHTML = `\n        <dom-js id='container'>\n        \n            <h1>People entered:</h1>\n            <h2 id=\"count-el\">0</h2>\n            <button id='increment-btn' class='${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]['increment-btn']}'>Increment</button>\n            <button id='decrement-btn' class='${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]['decrement-btn']}'>Decrement</button>\n            <button id='save-btn' class='${_css_modules_app_module_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]['save-btn']}'>Save</button>\n            <p id='save-el'></p>\n            \n        </dom-js>\n\n        `;\n\n    (0,_js_passenger_counter__WEBPACK_IMPORTED_MODULE_3__.PassengerCount)(DOM); /* PassengerCount function serve as \n                            <script src='passenger-counter.js'></script */\n    \n\t(0,_security_Render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DOM); // Renders all the Element ID's\n}\n\n\n//# sourceURL=webpack://standalone-javascript/./src/start.js?");

/***/ }),

/***/ "./src/images/station.jpg":
/*!********************************!*\
  !*** ./src/images/station.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"65a5e06a5afb39eb59fe.jpg\";\n\n//# sourceURL=webpack://standalone-javascript/./src/images/station.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;