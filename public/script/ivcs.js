(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("io"));
	else if(typeof define === 'function' && define.amd)
		define(["io"], factory);
	else if(typeof exports === 'object')
		exports["ivcs"] = factory(require("io"));
	else
		root["ivcs"] = factory(root["io"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// MIT License
//
// Copyright (c) 2012 Universidad Politécnica de Madrid
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Copyright (C) <2018> Intel Corporation
//
// SPDX-License-Identifier: Apache-2.0

// This file is borrowed from lynckia/licode with some modifications.

/* global console,window */



/*
 * API to write logs based on traditional logging mechanisms: debug, trace,
 * info, warning, error
 */
const Logger = (function() {
  const DEBUG = 0;
  const TRACE = 1;
  const INFO = 2;
  const WARNING = 3;
  const ERROR = 4;
  const NONE = 5;

  const noOp = function() {};

  // |that| is the object to be returned.
  const that = {
    DEBUG: DEBUG,
    TRACE: TRACE,
    INFO: INFO,
    WARNING: WARNING,
    ERROR: ERROR,
    NONE: NONE,
  };

  that.log = window.console.log.bind(window.console);

  const bindType = function(type) {
    if (typeof window.console[type] === 'function') {
      return window.console[type].bind(window.console);
    } else {
      return window.console.log.bind(window.console);
    }
  };

  const setLogLevel = function(level) {
    if (level <= DEBUG) {
      that.debug = bindType('log');
    } else {
      that.debug = noOp;
    }
    if (level <= TRACE) {
      that.trace = bindType('trace');
    } else {
      that.trace = noOp;
    }
    if (level <= INFO) {
      that.info = bindType('info');
    } else {
      that.info = noOp;
    }
    if (level <= WARNING) {
      that.warning = bindType('warn');
    } else {
      that.warning = noOp;
    }
    if (level <= ERROR) {
      that.error = bindType('error');
    } else {
      that.error = noOp;
    }
  };

  setLogLevel(DEBUG); // Default level is debug.

  that.setLogLevel = setLogLevel;

  return that;
}());

/* harmony default export */ __webpack_exports__["a"] = (Logger);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IvcsError; });
class IvcsError {
    constructor(code,message) {
        this.code = code;
        this.message = message;
    }
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEventListener;
/* harmony export (immutable) */ __webpack_exports__["b"] = dispatchEvent;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeEventListener;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger__ = __webpack_require__(1);


function addEventListener(eventName,ack){
    let event = (data) => {
        __WEBPACK_IMPORTED_MODULE_0__logger__["a" /* default */].info('event with name',eventName,'&data,',data.detail,new Date());
        ack(data.detail);
    }
    window.addEventListener(eventName,event);
    return event;
}
function dispatchEvent(eventName,code,data){
    var value = {};
    if (code){
        value.code = code;
    }
    if (data){
        value.data = data;
    }
    var myEvent = new CustomEvent(eventName, {
        detail:value,
    });
    window.dispatchEvent(myEvent);
}

function removeEventListener(eventName,eventImplementationFunction){
    window.removeEventListener(eventName,eventImplementationFunction);
}

const systemErrorCode = {
     publishLocalFailed:1001,
     subscribeStreamFailed:1002,
     localStreamEnd:1003,
     subscribeStreamEnd:1004,
     zmsServerDisconnected:1005,
     amsSocketIoError:1006,
     ccsSocketIoError:1007
}
/* harmony export (immutable) */ __webpack_exports__["d"] = systemErrorCode;


const systemErrorName = 'systemError';
/* harmony export (immutable) */ __webpack_exports__["e"] = systemErrorName;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getBrowserClientInfo;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeObjectWithId;
/* harmony export (immutable) */ __webpack_exports__["a"] = deepCopy;
/* unused harmony export isMobileBrowser */
function getBrowserClientInfo() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    var m = ua.match(re);
    try{
        Sys.type = m[1].replace(/version/, "safari");
        Sys.version = m[2];
    }catch(e)
    {
        Sys.type = "unknown";
        Sys.version = "unknown";
    }
    return Sys;
}


function removeObjectWithId(sourceData,removeObjectId) {
     try {
         for (let i = 0; i < sourceData.length ; i++) {
             if (sourceData[i].id == removeObjectId){
                 sourceData.splice(i,1);
                 return sourceData;
             }
         }
     }catch (e) {
         return sourceData;
     }
}

function deepCopy(obj){
    var o;
    switch(typeof obj){
        case 'undefined': break;
        case 'string'   : o = obj + '';break;
        case 'number'   : o = obj - 0;break;
        case 'boolean'  : o = obj;break;
        case 'object'   :
            if(obj === null){
                o = null;
            }else{
                if(obj instanceof Array){
                    o = [];
                    for(var i = 0, len = obj.length; i < len; i++){
                        o.push(deepCopy(obj[i]));
                    }
                }else{
                    o = {};
                    for(var k in obj){
                        o[k] = deepCopy(obj[k]);
                    }
                }
            }
            break;
        default:
            o = obj;break;
    }
    return o;
}

function isMobileBrowser(){
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true;
    }else{
        return false;
    }
}





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getFormTemplatesWithGroupsName */
/* harmony export (immutable) */ __webpack_exports__["e"] = getFormTemplatesWithGroupsId;
/* harmony export (immutable) */ __webpack_exports__["a"] = addStreamToMixStream;
/* harmony export (immutable) */ __webpack_exports__["f"] = recordStream;
/* harmony export (immutable) */ __webpack_exports__["g"] = stopRecordStream;
/* harmony export (immutable) */ __webpack_exports__["i"] = uploadFile;
/* harmony export (immutable) */ __webpack_exports__["h"] = streamOutsToMediaServer;
/* harmony export (immutable) */ __webpack_exports__["b"] = agentLogin;
/* harmony export (immutable) */ __webpack_exports__["d"] = getAgentGroups;
/* harmony export (immutable) */ __webpack_exports__["c"] = customerLogin;
/* unused harmony export responseError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_logger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_error__ = __webpack_require__(2);





const login = (url,para) =>{
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url+'/api/v1/auth/logon',para,{
        "Content-Type":"application/json"
    })
}
/* unused harmony export login */


const getGroupsWithUserId = (url,token,userId,page=1,pagesize=1000) =>{
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url+'/api/user-group-relations'+'?page='+page+'&pageSize='+pagesize+'&userId='+userId,{
        headers:{
            'x-access-token':token
        }
    })
}
/* unused harmony export getGroupsWithUserId */



const getGroups = (url,token) =>{
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url+'/api/user/groups',{
        headers:{
            'x-access-token':token
        }
    })
}
/* unused harmony export getGroups */



const addStreamToMix = (url,roomId,streamId,token)=> {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.patch(url+'/rooms/'+roomId+'/streams/'+streamId,[{"op":"add","path":"/info/inViews","value":"common"}],{
        headers:{
            'Content-Type':'application/json',
            'x-access-token':token
        }})
}
/* unused harmony export addStreamToMix */



const startRecord = (backendUrl,roomId,audioStreamId,videoStreamId,token) =>{
    let url = backendUrl + "/rooms/"+roomId+'/recordings';
    let audio = audioStreamId?{
                   from:audioStreamId
                   }:false;
    let video = videoStreamId?{
                  from:videoStreamId
                }:false;
    let para = {
        container:"auto",
        media:{
            audio:audio,
            video:video
        }
    };
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url,para,{
        headers:{
            'Content-Type':'application/json',
            'x-access-token':token
        }})
}
/* unused harmony export startRecord */



const stopRecord = (url,roomId,recordId,token) =>{
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(url+'/rooms/'+roomId+'/recordings/'+recordId,{
        headers:{
            'x-access-token':token
        }
    })
}
/* unused harmony export stopRecord */


/*根据分组名获取当前分组下的详细信息，主要是表单信息·*/
const getGroupsDetailWithName = (url,name,token) =>{
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url+'/api/groups/names/'+name,{
        headers:{
            'x-access-token':token
        }
    })
}
/* unused harmony export getGroupsDetailWithName */


/*根据分组id获取当前分组下的详细信息，主要是表单信息·*/
const getGroupsDetailWithId = (url,id,token) =>{
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url+'/api/groups/'+id,{
        headers:{
            'x-access-token':token
        }
    })
}
/* unused harmony export getGroupsDetailWithId */



const uploadFileWithFormData = (url,data) =>{
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url,data,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
}
/* unused harmony export uploadFileWithFormData */



const streamOuts = (url,roomId,para) => {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url+'/rooms/'+roomId+'/streaming-outs',para,{headers:{
            'Content-Type':'application/json'
        }})
}
/* unused harmony export streamOuts */





async function getFormTemplatesWithGroupsName(url,name,token,needThrownException=false) {
    return await new Promise((resolve,reject)=>{
        getGroupsDetailWithName(url,name,token).then((resp) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`get groups detail with ${name} success,${JSON.stringify(resp)},${new Date()}`);
            if (resp.data.formTemplates){
                resolve(resp.data.formTemplates);
            }else{
                if (needThrownException){
                    let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4001',`get groups detail with ${name},error,${resp}`);
                    reject(response);
                }else{
                    resolve([]);
                }
            }
        }).catch((error) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`get groups detail with ${name},${error},${JSON.stringify(error.response)},${new Date()}`);
            if (needThrownException){
                let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4001',`get groups detail with ${name},${error},${JSON.stringify(error.response)}`);
                reject(response);
            }else{
                resolve([]);
            }
        });
    });
}

async function getFormTemplatesWithGroupsId(url,groupId,token,needThrownException=false) {
    return await new Promise((resolve,reject)=>{
        getGroupsDetailWithId(url,groupId,token).then((resp) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`get groups detail with ${name} success,${JSON.stringify(resp)},${new Date()}`);
            if (resp.data.formTemplates){
                resolve(resp.data.formTemplates);
            }else{
                if (needThrownException){
                    let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4001',`get groups detail with ${name},error,${resp}`);
                    reject(response);
                }else{
                    resolve([]);
                }
            }
        }).catch((error) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`get groups detail with ${name},${error},${JSON.stringify(error.response)},${new Date()}`);
            if (needThrownException){
                let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4001',`get groups detail with ${name},${error},${JSON.stringify(error.response)}`);
                reject(response);
            }else{
                resolve([]);
            }
        });
    });
}



async function addStreamToMixStream(backendUrl,roomId,streamId,accessToken,needThrownException=false) {
    return await new Promise((resolve,reject)=>{
        addStreamToMix(backendUrl,roomId,streamId,accessToken).then((resp) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`add stream to mix success,${streamId},${JSON.stringify(resp)},${new Date()}`);
            resolve();
        }).catch((error) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`add stream to mix failed,${streamId},${error},${JSON.stringify(error.response)},${new Date()}`);
            if (needThrownException){
                let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4002',`add stream to mix failed,${streamId},${error},${JSON.stringify(error.response)}`);
                reject(response);
            }else{
                resolve();
            }
        });
    });
}


async function recordStream(backendUrl,roomId,audioStreamId,videoStreamId,accessToken,needThrownException=false) {
    return await new Promise((resolve,reject)=>{
        startRecord(backendUrl, roomId, audioStreamId, videoStreamId, accessToken).then((resp) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`record mix stream to success,${JSON.stringify(resp)},${new Date()}`);
            if (resp.data&&resp.data.id){
                resolve(resp.data.id);
            }else{
                if (needThrownException){
                    let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4003',`${JSON.stringify(resp)}`);
                    reject(response);
                }else{
                    resolve(null);
                }
            }
        }).catch((error) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`record stream failed,audioStreamId:${audioStreamId},videoStreamId:${videoStreamId},${error},${JSON.stringify(error.response)},${new Date()}`);
            if (needThrownException){
                let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4003',`record stream failed,audioStreamId:${audioStreamId},videoStreamId:${videoStreamId},${JSON.stringify(error.response)},${error}`);
                reject(response);
            }else{
                resolve(null);
            }
        });
    });
}

async function stopRecordStream(backendUrl,roomId,recordId,accessToken,needThrownException=false) {
    return await new Promise((resolve,reject)=>{
        stopRecord(backendUrl, roomId, recordId, accessToken).then((resp) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`stop record stream to success,${JSON.stringify(resp)},${new Date()}`);
            resolve(resp);
        }).catch((error) => {
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`stop record stream failed,${recordId},${error},${JSON.stringify(error.response)},${new Date()}`);
            if (needThrownException){
                let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4004',`stop record stream failed,${recordId},${JSON.stringify(error.response)},${error}`);
                reject(response);
            }else{
                resolve(null);
            }
        });
    });
}


async function uploadFile(url,formData) {
    return await new Promise((resolve,reject)=>{
        uploadFileWithFormData(url,formData).then((resp)=>{
           if (resp.data && resp.data.code == 200){
               var response = resp.data.data;
               resolve(response);
           } else{
               reject(JSON.stringify(resp));
           }
        }).catch((error)=>{
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`upload file failed,url:${url},formdata:${formData},${error},${JSON.stringify(error.response)},${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4005',`upload file failed,url:${url},formdata:${formData},${error},${JSON.stringify(error.response)}`);
            reject(response);
        });
    });
}

async function streamOutsToMediaServer(url,roomId,audioId,videoId,streamOutUrl) {
    return await new Promise((resolve,reject)=>{
        let audio = audioId?{"from":audioId}:false;
        let video = videoId?{"from":videoId}:false;
        let para = {
            "media":
                {
                    "audio":audio,
                    "video":video
                },
            "url":streamOutUrl
        };
        streamOuts(url,roomId,para).then((resp)=>{
            if (resp.data){
                resolve(resp);
            } else{
                reject(JSON.stringify(resp));
            }
        }).catch((error)=>{
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`streamOuts failed,url:${url},streamOutUrl:${streamOutUrl},${error},${JSON.stringify(error.response)},audioId,${audioId},videoId,${videoId}${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4006',`streamOuts failed,url:${url},streamOutUrl:${streamOutUrl},${error},${JSON.stringify(error.response)},audioId,${audioId},videoId,${videoId}`);
            reject(response);
        });
    });
}

async function agentLogin(backendUrl,name,pwd,org) {
    return await new Promise((resolve,reject)=>{
        let para = {userName:name,pwd:pwd,role:"agent",org:org};
        login(backendUrl,para).then((resp)=>{
            resolve(resp);
        }).catch((error)=>{
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`agent login failed,${JSON.stringify(error)},${JSON.stringify(error.response)},at,${new Date()}`);
            var response;
            if (error.response){
                response = responseError(error.response);
            }else{
                response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('400',JSON.stringify(error.message));
            }
            reject(response);
        });
    });
}


async function getAgentGroups(backendUrl,token) {
    return await new Promise((resolve,reject)=>{
         getGroups(backendUrl,token).then((resp)=>{
             var groupsList = [];
             if (resp.data && resp.data.length>0){
                 resp.data.forEach((item)=>{
                     groupsList.push(item.group);
                 });
             }
             resolve(groupsList);
         }).catch((error)=>{
             __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`agent get groups failed,${JSON.stringify(error)},${JSON.stringify(error.response)},at,${new Date()}`);
             var response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4008',`agent get groups failed,${JSON.stringify(error)},${JSON.stringify(error.response)},at,${new Date()}`);
             reject(response);
         })
    });
}

async function customerLogin(backendUrl,name,pwd,org) {
    return await new Promise((resolve,reject)=>{
        let para = {userName:name,pwd:pwd,role:"customer",org:org};
        login(backendUrl,para).then((resp)=>{
            resolve(resp);
        }).catch((error)=>{
            __WEBPACK_IMPORTED_MODULE_1__base_logger__["a" /* default */].info(`customer login failed,${JSON.stringify(error)},${JSON.stringify(error.response)},at,${new Date()}`);
            var response;
            if (error.response){
                response = responseError(error.response);
            }else{
                response = new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('400',JSON.stringify(error.message));
            }
            reject(response);
        });
    });
}


function responseError(response){
    if (response&&response.data){
        let code = response.data.code;
        let message = response.data.message;
        return new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */](code,message);
    }else{
        return new __WEBPACK_IMPORTED_MODULE_2__base_error__["a" /* IvcsError */]('4000',response);
    }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMSClient; });
/* unused harmony export AmsEvent */
/* harmony export (immutable) */ __webpack_exports__["f"] = refreshAmsTicket;
/* unused harmony export resumeAmsConnection */
/* harmony export (immutable) */ __webpack_exports__["g"] = releaseAmsClient;
/* harmony export (immutable) */ __webpack_exports__["h"] = validateAmsClient;
/* harmony export (immutable) */ __webpack_exports__["c"] = answerCall;
/* harmony export (immutable) */ __webpack_exports__["e"] = hangupCall;
/* harmony export (immutable) */ __webpack_exports__["b"] = amsErrorEvent;
/* harmony export (immutable) */ __webpack_exports__["d"] = connectAmsService;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_logger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_io__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_error__ = __webpack_require__(2);





const defaultOptions = {
    reconnect: false,
    secure: false,
    'force new connection': true
};

const errorCode = {
    refreshTicketFailed:100,
    resumeConnectionFailed:101,
    ticketIsEmpty:102,
    amsSocketIoDisconnected:103,
};

const AmsEvent = {
    refreshTicketFailed:'refreshTicketFailed',
    resumeConnectionFailed:'resumeConnectionFailed',
    socketIoDisconnected:'ams_socket_disConnected',
};
class AMSClient{
   constructor(){
      this.connected = false;
   }
   connect(url,token,success,failed){
         let connectUrl = url;
         let index = url.indexOf("?");
         let query = {};
         if( index !== -1){
               connectUrl = url.substr(0, index);
               let str = url.substr(index+1);
               let strs =str.split("&");
               for (var i = 0; i < strs.length; i++) {
                   let item = strs[i];
                   let sIn = item.indexOf("=")
                   if(sIn !== -1){
                       let key = item.substr(0, sIn);
                       let value = item.substr(sIn+1);
                       query[key] = value;
                   }
               }
         }
        query.token = token;
        query.hashkey = 2;
        defaultOptions.query = query;
        this.socket = __WEBPACK_IMPORTED_MODULE_1__socket_io___default.a.connect(connectUrl, defaultOptions);

        this.socket.on('connect', function(data){
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(new Date(),'-ams-connect:'+data);
                success();
           });
        this.socket.on('connect_error', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-connect_error');
               failed('connect_error');
           });
        this.socket.on('connect_timeout', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-connect_timeout');
               failed('connect_timeout');
         });
        this.socket.on('error', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-connect-error');
               failed('error');
        });
        this.socket.on('disconnect', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-disconnect');
           });
        this.socket.on('reconnect', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-reconnect');
           });
        this.socket.on('reconnect_attempt', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-reconnect_attempt');
           });
        this.socket.on('reconnecting', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-reconnecting');
           });
        this.socket.on('reconnect_error', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-reconnect_error');
           });
        this.socket.on('reconnect_failed', function(data){
               __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ams-reconnect_failed');
           });
   }

    disconnect(){
        this.socket.disconnect();
    }

   onDisconnect(ack){
       this.receive('disconnect', (reason)=>{
           if (this.connected){
               this.connected = false;
               Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(AmsEvent.socketIoDisconnected,errorCode.amsSocketIoDisconnected,'ams socket io disconnected');
           }
           ack(reason);
       })
   }

   receive(eventName,ack){
        if(this.socket){
            this.socket.on(eventName, ack);
        } else {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].error('There is no socket connect');
            ack('socket on event error,',eventName);
        }
   }



   send(eventName,data,ack){
        if(this.socket && this.socket.connected){
            if(data){
                this.socket.emit(eventName, data, ack);
            } else {
                this.socket.emit(eventName, ack);
            }
        }else {
          __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].error('There is no socket connect while send message with Name',eventName,'and data,',data);
          ack('error','There is no socket connect while send message with Name:'+eventName+'&and data:',data);
        }
    }

    onConnect(ack){
           this.receive('connect', function(){
               ack();
           });
    }

    login(data,ack){
       this.send('agent-login',data,function (status,resp) {
           ack(status,resp);
       })
    }

    logout(ack){
       this.send('agent-logout',null,function (status,resp) {
           ack(status,resp);
       })
    }

    checkIn(groups,ack){
        this.send('agent-checkIn',groups,function (status,resp) {
            ack(status,resp);
        })
    }

    checkOut(groups,ack){
        this.send('agent-checkOut',groups,function (status,resp) {
            ack(status,resp);
        })
    }

    refreshTicket(ack){
        this.send('refresh-ticket',null,function (status,resp) {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(new Date(),'refresh-ticket result',status,resp);
            ack(status,resp);
        })
    }

    resumeConnection(ticket,ack){
        this.send('resume-connection',ticket,function (status,resp) {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(new Date(),'resumeConnection result',status,resp);
            ack(status,resp);
        })
    }


    onRing(ack){
        this.receive('ring',(data,onResponse)=> {
                onResponse('ok');
                let session = {};
                session.sessionId = data.session.id;
                session.url = data.session.url;
                session.userData = data.userData;
                session.group = data.session.group;
                ack(session);
        })
    }

    onStopRinging(ack){
       this.receive('stop-ringing', () =>{
           ack();
       })
    }

    onError(ack){
        this.receive('error', (data) =>{
            ack(data);
        })
    }

    onDrop(ack){
        this.receive('drop', () =>{
            ack();
        })
    }

    onReplaced(ack){
        this.receive('replaced', () =>{
            ack();
        })
    }


    ready(ack){
       this.send('agent-ready',null,function (status,resp) {
            ack(status,resp);
       })
    }

    unReady(ack){
        this.send('agent-unready',null,function (status,resp) {
            ack(status,resp);
        })
    }


    answerCall(ack){
        this.send('agent-answer',null,function (status,resp) {
            ack(status,resp);
        })
    }

    rejectCall(ack){
        this.send('agent-reject',null,function (status,resp) {
            ack(status,resp);
        })
    }

    hangup(ack){
        this.send('agent-hangup',null,function (status,resp) {
            ack(status,resp);
        })
    }

    appoint(para,ack){
        this.send('agent-appoint',para,function (status,resp) {
            ack(status,resp);
        })
    }

    otherWork(data,ack){
        this.send('agent-otherWork',data,function (status,resp) {
            ack(status,resp);
        })
    }
}



function refreshAmsTicket(amsClient,refreshTicketTime){
    amsClient.interval = setInterval(function () {
        amsClient.refreshTicket((refreshStatus,refreshResp) =>{
            if (refreshStatus === 'ok'){
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('refresh ams Ticket success',refreshResp);
                amsClient.ticket = refreshResp.ticket;
            }else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].error('refreshTicketFailed,you need to connect ams socket again');
                Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(AmsEvent.refreshTicketFailed,errorCode.refreshTicketFailed,'refreshTicketFailed,you need to connect ams socket again');
                clearInterval(amsClient.interval);
            }
        })
    },refreshTicketTime);
}

function resumeAmsConnection(amsClient,ticket){
    if (ticket){
        amsClient.resumeConnection(ticket, (resumeConnectionStatus,resumeConnectionResp) => {
            if (resumeConnectionStatus === 'ok'){
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('resume ams connection success',resumeConnectionResp);
                amsClient.ticket = resumeConnectionResp.ticket;
            }else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('resume ams connection failed',resumeConnectionResp);
                Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(AmsEvent.resumeConnectionFailed,errorCode.resumeConnectionFailed,resumeConnectionResp);
            }
        })
    }else{
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ticket is Empty',new Date());
        Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(AmsEvent.resumeConnectionFailed,errorCode.ticketIsEmpty,'ticket is Empty');
    }
}

function releaseAmsClient(amsClient) {
    amsClient.accessToken = null;
    amsClient.connected = false;
    amsClient.ticket = null;
    amsClient.disconnect();
    clearInterval(amsClient.interval);
    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`release ams client,${new Date()}}`);
}

function validateAmsClient(amsClient) {
    if (!amsClient){
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ams client is undefined');
        return new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('3001', 'ams client is undefined');
    }
    if (!amsClient.accessToken){
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ams accessToken is undefined or invalid');
        return new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('3002', 'ams accessToken is undefined or invalid');
    }
    if (!amsClient.connected){
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ams socket io is disconnected');
        return new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('3003', 'ams socket io is disconnected');
    }
    return 'ok';
}

async function answerCall(amsClient) {
        return await new Promise((resolve,reject)=>{
        amsClient.answerCall(function (status,resp) {
            if (status === 'ok'){
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`answer call success,${resp},${new Date()}`);
                resolve();
            } else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(`answer call failed,${resp},${new Date()}`);
                let error = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('3004',`answer call failed,${resp}`);
                reject(error);
            }
        })
    })
}


async function hangupCall(amsClient) {
    return await new Promise((resolve,reject)=>{
        amsClient.hangup(function (status,resp) {
            if (status === 'ok'){
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`hangup call success,${resp},${new Date()}`);
                resolve();
            } else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(`hangup call failed,${resp},${new Date()}`);
                let error = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('3005',`hangup call failed,${resp}`);
                reject(error);
            }
        })
    })
}


function amsErrorEvent(callback) {
    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["a" /* addEventListener */])(AmsEvent.resumeConnectionFailed,(info)=>{
        callback(info);
    });
    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["a" /* addEventListener */])(AmsEvent.refreshTicketFailed,(info)=>{
        callback(info);
    });
    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["a" /* addEventListener */])(AmsEvent.socketIoDisconnected,(info)=>{
        callback(info);
    });
}

async function connectAmsService(amsClient,amsUrl,accessToken) {
    new Promise((resolve,reject)=>{
        amsClient.connect(amsUrl,accessToken,()=>{},(reason)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ams connect error',reason);
            let error = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('3000', 'ams connect error'+reason);
            reject(error);
        });
        amsClient.onConnect( (resp) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('connect to ams at',new Date());
            if (!amsClient.connected){
                amsClient.accessToken = accessToken;
                amsClient.connected = true;
                resolve(resp);
            }else{
                resumeAmsConnection(amsClient,amsClient.ticket);
            }
        });
        amsClient.onDisconnect((reason) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ams socket is disconnected,',reason);
            amsClient.connected = false;
        });
    });
}





/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(29);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(12);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(12);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(30);
var buildURL = __webpack_require__(9);
var buildFullPath = __webpack_require__(32);
var parseHeaders = __webpack_require__(35);
var isURLSameOrigin = __webpack_require__(36);
var createError = __webpack_require__(13);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(37);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(31);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["l"] = stopStream;
/* harmony export (immutable) */ __webpack_exports__["k"] = stopPublish;
/* harmony export (immutable) */ __webpack_exports__["f"] = joinRoom;
/* harmony export (immutable) */ __webpack_exports__["c"] = createCameraMicStream;
/* harmony export (immutable) */ __webpack_exports__["d"] = createScreenStream;
/* harmony export (immutable) */ __webpack_exports__["i"] = publishStream;
/* unused harmony export subscribeStream */
/* unused harmony export renderStreamWithVideoLabel */
/* harmony export (immutable) */ __webpack_exports__["g"] = leaveRoom;
/* harmony export (immutable) */ __webpack_exports__["h"] = mute;
/* harmony export (immutable) */ __webpack_exports__["m"] = unmute;
/* harmony export (immutable) */ __webpack_exports__["e"] = isEffectiveMediaStreams;
/* harmony export (immutable) */ __webpack_exports__["j"] = renderRemoteStream;
/* harmony export (immutable) */ __webpack_exports__["n"] = zmsAddEventListener;
/* harmony export (immutable) */ __webpack_exports__["o"] = zmsRemoveEventListener;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IRtcClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IRTC_CUSTOMEREVENT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_logger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tool__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_error__ = __webpack_require__(2);





var IRTC_CUSTOMEREVENT = {
    PUBLICATIONEND: 'irtc_publicationend',
    PUBLICATIOUNMUTE: 'irtc_publicationunmute',
    PUBLICATIONMUTE: 'irtc_publicationmute',
    SUBSCRIPTIONEND: 'irtc_subscriptionend',
    SUBSCRIPTIONUNMUTE: 'irtc_subscriptionunmute',
    SUBSCRIPTIONMUTE: 'irtc_subscriptionmute',
    STREAMADD:'irtc_streamadd',
    STREAMENDED:'irtc_streamended',
    PARTICIPANTADD:'irtc_participantadd',
    PARTICIPANTLEFT:'irtc_participantleft',
    CHATMESSAGE:'irtc_chatmessage',
    SERVERDISCONNECTED:'serverDisconnected',
    PUBLISHSUCCESS:'publishSuccess',
    PUBLISHFAILED:"publishFailed",
    SUBSCRIBESUCCESS:'subscribeSuccess',
    SUBSCRIBEFAILED:'subscribeFailed',
    LEAVE:'leaveroom',
    RoomDeleted:'roomDeleted',
};


class IRtcClient{
    constructor(turnServerUrl,turnServerCredential,turnServerUsername){
        let { ConferenceClient } = IRtc.Conference;
        if (turnServerUrl){
            let ccOptions = {
                rtcConfiguration: {
                    iceServers: [
                        {
                            urls: [
                                turnServerUrl
                            ],
                            credential: turnServerCredential,
                            username: turnServerUsername
                        }]
                }
            };
            this.irtcClient = new ConferenceClient(ccOptions);
        }else{
            this.irtcClient = new ConferenceClient();
        }
        this.subscriptionArr = [];
        this.participants =[];
        this.publicationArr = [];
        this.createStreams = [];
    }

    createCameraMicStream(audioConstraints,videoConstraints,haveAudio=true,haveVideo=true,attributes={}){
        let { StreamSourceInfo } = IRtc.Base;
        let videoSource = haveVideo?"camera":undefined;
        let audioSource = haveAudio?"mic":undefined;
        let streamSourceInfo = new StreamSourceInfo(audioSource, videoSource);
        let mediaStreamDeviceConstraints = {
            audio: audioConstraints,
            video: videoConstraints,
        };
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('stream constraints is',mediaStreamDeviceConstraints);
        return this.createWebRtcMediaStream(mediaStreamDeviceConstraints,streamSourceInfo,attributes);
    }

    createScreenStream(audioConstraints,videoConstraints,attributes={}){
        let { StreamSourceInfo } = IRtc.Base;
        let videoSource = "screen-cast";
        let audioSource = "screen-cast";
        let streamSourceInfo = new StreamSourceInfo(audioSource, videoSource);
        let mediaStreamDeviceConstraints = {
            audio: audioConstraints,
            video: videoConstraints,
        };
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('screen stream constraints is',mediaStreamDeviceConstraints);
        return this.createWebRtcMediaStream(mediaStreamDeviceConstraints,streamSourceInfo,attributes);
    }

    createWebRtcMediaStream(mediaStreamConstraints,streamSourceInfo,attributes){
        let { LocalStream,MediaStreamFactory } = IRtc.Base;
        return new Promise((resolve,reject)=>{
            MediaStreamFactory.createMediaStream(mediaStreamConstraints).then((mediaStream) =>{
                let stream = new LocalStream(mediaStream,streamSourceInfo,attributes);
                if (stream){
                    this.createStreams.push(stream);
                }
                resolve(stream);
            }).catch((error)=>{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(`create Local stream error,${error},${new Date()}`);
                reject(error);
            })

        })
    }

    joinRoom(roomToken){
        return new Promise((resolve,reject)=>{
            var self = this;
            this.irtcClient.join(roomToken).then(function (resp) {
                self.setRoomInfo(resp);
                self.clientAddListener();
                resolve(resp);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    setRoomInfo(data){


        this.participants = data.participants;
        this.self = data.self;
        this.id = data.id;
        this.remoteStreams = data.remoteStreams;
        this.mixStreamId = this.remoteStreams[0]?this.remoteStreams[0].id:undefined;

        for (let i = 0; i < this.participants.length; i++) {
            let participant = this.participants[i];
            this.participantAddListener(participant);
        }

        for (let i = 0; i < this.remoteStreams.length; i++) {
            let stream = this.remoteStreams[i];
            this.streamAddListener(stream);
        }

    }

    clientAddListener() {
        this.streamAddImplementation = (eve) => {
            let remoteStream = eve.stream;
            this.remoteStreams.push(remoteStream);
            this.streamAddListener(remoteStream);
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.STREAMADD,null,{
                id:remoteStream.id,
                attributes:remoteStream.attributes
            });
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('new stream add',remoteStream,new Date());
        };
        this.participantJoinedImplementation = (eve) => {
            let participant = eve.participant;
            this.participants.push(participant);
            this.participantAddListener(participant);
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.PARTICIPANTADD,null,participant);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('new participant joined',participant,new Date());
        };
        this.serverDisconnectedImplementation = () => {
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.SERVERDISCONNECTED,null,null);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('irtc server disconnected',new Date());
        }
        this.messageReceivedImplementation = (eve) => {
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.CHATMESSAGE,null,eve);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('receive message',eve,new Date());
        };
        this.irtcClient.addEventListener("streamadded", this.streamAddImplementation);
        this.irtcClient.addEventListener('participantjoined', this.participantJoinedImplementation);
        this.irtcClient.addEventListener("serverdisconnected", this.serverDisconnectedImplementation);
        this.irtcClient.addEventListener('messagereceived', this.messageReceivedImplementation);
    }


    sendMessage(message, participantId) {
        return new Promise((resolve,reject)=>{
            this.irtcClient.send(message, participantId).then(function (resp) {
                resolve(resp);
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('send message error:'+error+' time:',new Date());
                reject(error);
            })
        })
    }

    leaveRoom(){
        for (let i = 0; i < this.participants.length ; i++) {
            let participant = this.participants[i];
            this.participantRemoveListener(participant);
        }
        for (let i = 0; i < this.remoteStreams.length; i++) {
            let stream = this.remoteStreams[i];
            this.streamRemoveListener(stream);
        }
        for (let i = 0; i < this.publicationArr.length ; i++) {
            let publication = this.publicationArr[i];
            this.publicationRemoveListener(publication);
        }
        for (let i = 0; i < this.subscriptionArr.length ; i++) {
            let subscription = this.subscriptionArr[i];
            this.subscriptionRemoveListener(subscription);
        }
        for (let i = 0; i < this.createStreams.length; i++) {
            let stream = this.createStreams[i];
            stopStream(stream);
        }
        this.clientRemoveListener();
        return new Promise((resolve,reject)=>{
            this.irtcClient.leave().then(function (resp) {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`leave room success',${resp},${new Date()}`);
                resolve(resp);
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`leave room error',${error},${new Date()}`);
                reject(error);
            })
        });
    }
    //订阅流
    subscribeStream(stream) {
        let [audio, video] = [stream.settings.audio !== undefined, stream.settings.video !== undefined];
        let option = {
            audio: audio,
            video: video
        };
        return new Promise((resolve,reject)=>{
            var self = this;
            this.irtcClient.subscribe(stream,option).then(function (subscription) {
                subscription.originId = stream.id;
                self.subscriptionArr.push(subscription);
                self.subscriptionAddListener(subscription);
                resolve(subscription);
            }).catch(function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.SUBSCRIBEFAILED,null,{
                    value: stream.id,
                });
                reject(error);
            })
        });
    }

    /*subscription add listener*/
    subscriptionAddListener(subscription) {
        this.subscriptionEndedImplementation = (event)=>{
            Object(__WEBPACK_IMPORTED_MODULE_2__tool__["c" /* removeObjectWithId */])(this.subscriptionArr,subscription.id);
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.SUBSCRIPTIONEND,null,{
                value:subscription.id
            });
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`subscription is end,${subscription},${event},${new Date()}`);
        };
        this.subscriptionMuteImplementation = (event) => {
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.SUBSCRIPTIONMUTE,null,{
                value: subscription,
                kind:event.kind,
            });
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`subscription is muted,${subscription},${event},${new Date()}`);
        };
        this.subscriptionUnmuteImplementation = (event) => {
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.SUBSCRIPTIONUNMUTE,null,{
                value: subscription,
                kind:event.kind,
            });
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`subscription is unmuted,${subscription},${event},${new Date()}`);
        };
        subscription.addEventListener('ended', this.subscriptionEndedImplementation);
        subscription.addEventListener('mute', this.subscriptionMuteImplementation);
        subscription.addEventListener('unmute', this.subscriptionUnmuteImplementation);
    }

    /*subscription remove listener*/
    subscriptionRemoveListener(subscription){
        if (subscription){
            subscription.clearEventListener('ended');
            subscription.clearEventListener('mute');
            subscription.clearEventListener('unmute');
            subscription.removeEventListener('ended', this.subscriptionEndedImplementation);
            subscription.removeEventListener('mute', this.subscriptionMuteImplementation);
            subscription.removeEventListener('unmute', this.subscriptionUnmuteImplementation);
        }
    }


    publishStream(stream,option) {
        return new Promise((resolve,reject)=>{
            var self = this;
            var audioTracks = stream.mediaStream?stream.mediaStream.getAudioTracks():stream.getAudioTracks();
            var videoTracks = stream.mediaStream?stream.mediaStream.getVideoTracks():stream.getVideoTracks();
            if (!audioTracks || audioTracks.length <= 0){
                option.audio = false;
            }
            if (!videoTracks || videoTracks.length <= 0){
                option.video = false;
            }
            this.irtcClient.publish(stream,option).then(function (publication) {
                publication.originId = stream.id;
                self.publicationArr.push(publication);
                self.publicationAddListener(publication);
                resolve(publication);
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`publish stream,${stream},error,${error},${new Date()}`);
                Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.PUBLISHFAILED,null,{
                    value: stream.id,
                });
                reject(error);
            })
        });
    }


    /*local audio and video control*/
    publicationMediaOperate(type,status,publication){
        if (status){
            return new Promise((resolve,reject)=>{
                if (type != 'audio'||type != 'video'){
                    reject('The parameter type is invalid. Only Audio and video are supported');
                    return;
                }
                publication.mute(type).then(function (resp) {
                    resolve(resp);
                }).catch(function (error) {
                    reject(error);
                })
            });
        }else{
            return new Promise((resolve,reject)=>{
                if (type != 'audio'||type != 'video'){
                    reject('The parameter type is invalid. Only Audio and video are supported');
                    return;
                }
                publication.unmute(type).then(function (resp) {
                    resolve(resp);
                }).catch(function (error) {
                    reject(error);
                })
            });
        }
    }


    publicationAddListener(publication) {
        this.publicationEndImplementation = (event) => {
            Object(__WEBPACK_IMPORTED_MODULE_2__tool__["c" /* removeObjectWithId */])(this.publicationArr,publication.id);
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.PUBLICATIONEND,null,{
                value:publication.id
            });
            let streamId = "";
            for (let i = 0; i < this.createStreams.length; i++) {
                let stream = this.createStreams[i];
                if (stream.id === publication.originId){
                    stopStream(stream);
                    streamId = stream.id;
                }
            }
            Object(__WEBPACK_IMPORTED_MODULE_2__tool__["c" /* removeObjectWithId */])(this.createStreams,streamId);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`publication end,streamId:${publication.originId},${JSON.stringify(event)},${JSON.stringify(publication)},${JSON.stringify(this.createStreams)},${new Date()}`);
        };

        this.publicationMuteImplementation = (event) => {
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.PUBLICATIONMUTE,null,{
                value:publication,
                kind:event.kind
            });
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`publication ${publication.id} muted ${event.kind}:${new Date()}`);
        };

        this.publicationUnmuteImplementation = (event) => {
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.PUBLICATIOUNMUTE,null,{
                value:publication,
                kind:event.kind
            });
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`publication ${publication.id} unmuted ${event.kind}:${new Date()}`);
        };
        publication.addEventListener('mute', this.publicationMuteImplementation);
        publication.addEventListener('unmute', this.publicationUnmuteImplementation);
        publication.addEventListener('ended', this.publicationEndImplementation);
    }

    publicationRemoveListener(publication) {
        if (publication){
            publication.clearEventListener('ended');
            publication.clearEventListener('unmute');
            publication.clearEventListener('mute');
            publication.removeEventListener('ended',this.publicationEndImplementation);
            publication.removeEventListener('mute', this.publicationMuteImplementation);
            publication.removeEventListener('unmute', this.publicationUnmuteImplementation);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`${JSON.stringify(publication)} remove listener:${new Date()}`);
        }
    }


    /*stream add listener*/
    streamAddListener(stream) {
        this.streamEndedImplementation = (event) => {
            Object(__WEBPACK_IMPORTED_MODULE_2__tool__["c" /* removeObjectWithId */])(this.remoteStreams,stream.id);
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.STREAMENDED,null,{
                id:stream.id,
                attributes:stream.attributes
            });
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`${JSON.stringify(stream)} is end,${JSON.stringify(event)},:${new Date()}`);
        };
        stream.addEventListener('ended', this.streamEndedImplementation);
    }

    /*stream remove listener*/
    streamRemoveListener(stream){
        if (stream){
            stream.removeEventListener('ended', this.streamEndedImplementation);
            stream.clearEventListener('ended');
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`${JSON.stringify(stream)} remove ended listener,:${new Date()}`);
        }
    }

    /*participant add listener*/
    participantAddListener(participant) {
        this.participantLeftImplementation = (event) => {
            Object(__WEBPACK_IMPORTED_MODULE_2__tool__["c" /* removeObjectWithId */])(this.participants,participant.id);
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(IRTC_CUSTOMEREVENT.PARTICIPANTLEFT,null,participant);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`${JSON.stringify(participant)} is left,${JSON.stringify(event)},:${new Date()}`);
        };
        participant.addEventListener('left', this.participantLeftImplementation);
    }

    /*participant remove listener*/
    participantRemoveListener(participant) {
        if (participant){
            participant.removeEventListener('left',this.participantLeftImplementation);
            participant.clearEventListener('left');
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`${JSON.stringify(participant)} remove left listener,:${new Date()}`);
        }
    }



    clientRemoveListener(){
        this.irtcClient.clearEventListener("streamadded");
        this.irtcClient.clearEventListener("serverdisconnected");
        this.irtcClient.clearEventListener("participantjoined");
        this.irtcClient.clearEventListener("messagereceived");
        this.irtcClient.removeEventListener("streamadded",this.streamAddImplementation);
        this.irtcClient.removeEventListener('participantjoined',this.participantJoinedImplementation);
        this.irtcClient.removeEventListener("serverdisconnected",this.serverDisconnectedImplementation);
        this.irtcClient.removeEventListener('messagereceived',this.messageReceivedImplementation);
    }

    isMePublishStream(stream) {
        return stream.origin === this.self.id;
    }

}




function stopStream(stream) {
    if (!stream){
        return;
    }
    if (stream.mediaStream){
        stream.mediaStream.getTracks().forEach(track => {
            track.stop();
        })
    } else{
        stream.getTracks().forEach(track => {
            track.stop();
        })
    }
}

function stopPublish(publication) {
    if (!publication){
        return;
    }
    publication.stop();
}

async function joinRoom(irtcClient,roomId,roomToken){
    return await new Promise((resolve,reject)=>{
        irtcClient.joinRoom(roomToken).then((roomInfo) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`join roomId,${roomId} success,${JSON.stringify(roomInfo)},${new Date()}`);
            resolve(roomInfo);
        }).catch((error) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`join roomId ${roomId} failed,${error},${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('6001',`join roomId,${roomId} failed,${error}`);
            reject(response);
        });
    })
}


async function createCameraMicStream(irtcClient,streamOptions,videoLabel) {
    return await new Promise((resolve,reject)=>{
        irtcClient.createCameraMicStream(streamOptions.audioConstraints, streamOptions.videoConstraints, undefined, undefined, {
            type: videoLabel,
        }).then((stream) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`create Camera Mic stream success,${JSON.stringify(streamOptions)},streamId:${stream.id},${new Date()}`);
            resolve(stream);
        }).catch((error) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`createCameraMicStream failed,${error},${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('6002',`createCameraMicStream failed,${error}`);
            reject(response);
        });
    });
}

async function createScreenStream(irtcClient,streamOptions,videoLabel) {
    return await new Promise((resolve,reject)=>{
        irtcClient.createScreenStream(streamOptions.audioConstraints, streamOptions.videoConstraints,{
            type:videoLabel
        }).then((stream) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`create screen stream success,${JSON.stringify(streamOptions)},streamId:${stream.id},${new Date()}`);
            resolve(stream);
        }).catch((error) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`create screen stream failed,${error},${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('6003',`create screen stream failed,${error}`);
            reject(response);
        });
    });
}


async function publishStream(irtcClient,stream,publishOptions) {
    return await new Promise((resolve,reject)=>{
        irtcClient.publishStream(stream, publishOptions).then((publication) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`publish stream ${stream.id} success,${new Date()}`);
            resolve(publication);
        }).catch((error) => {
            stopStream(stream);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`publish stream failed,${stream.id},${error},${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('6004',`publish stream,${stream.id},failed,${error}`);
            reject(response);
        });
    });
}


async function subscribeStream(irtcClient,stream) {
    return await new Promise((resolve,reject)=>{
        irtcClient.subscribeStream(stream).then((subscription) =>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`subscribe stream,${stream.id} success,${new Date()}`);
            resolve(subscription);
        }).catch(function (error) {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`subscribe stream ${stream.id},error ,${error},${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('6005',`subscribe stream ${stream.id},error ,${error}`);
            reject(response);
        })
    });
}



async function renderStreamWithVideoLabel(stream,videoId,isMe = false) {
    return await  new Promise((resolve,reject)=>{
        var mediaDom = document.getElementById(videoId);
        if (mediaDom){
            mediaDom.srcObject = stream.mediaStream?stream.mediaStream:stream;
            if (isMe){
                mediaDom.setAttribute('muted', 'true');
            }else{
                mediaDom.setAttribute('muted', 'false');
            }
            resolve();
        }else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`dom not exist ,${videoId},${new Date()}`);
            let error = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('6006',`dom not exist ,${videoId}`);
            reject(error);
        }
    })
}


async function leaveRoom(irtcClient) {
    return await new Promise((resolve,reject)=>{
        if (!irtcClient){
            reject(new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('6000','irtc Client is null'));
            return;
        }
        irtcClient.leaveRoom().then((resp)=>{
            resolve(resp);
        }).catch((error)=>{
            reject(new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('60000',error));
        })
    });
}


function queryPublication(publicationArr,publicationId) {
    let filterResult = publicationArr.filter(item => item.id === publicationId);
    return filterResult.length > 0 ? filterResult[0]:null;
}

const checkTypeParameter = type => type === 'audio' || type === 'video';

const checkPublicationExist = (publicationArr,publicationId) => queryPublication(publicationArr,publicationId) != null;

async function mute(publicationId,type,irtcClient) {
    return await new Promise((resolve,reject)=>{
        if (!checkTypeParameter(type)){
            reject(`type is invalid,only support 'audio' & 'video'`);
            return;
        }
        if (!checkPublicationExist(irtcClient.publicationArr,publicationId)){
            reject('stream source is invalid,publication id is invalid');
            return;
        }
        queryPublication(irtcClient.publicationArr,publicationId).mute(type).then(()=>{
            resolve();
        }).catch((error)=>{
            if (type === 'audio'){
                reject(new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('60070',error));
            }else{
                reject(new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('60071',error));
            }
        });
    });
}


async function unmute(publicationId,type,irtcClient) {
    return await new Promise((resolve,reject)=>{
        if (!checkTypeParameter(type)){
            reject(`type is invalid,only support 'audio' & 'video'`);
            return;
        }
        if (!checkPublicationExist(irtcClient.publicationArr,publicationId)){
            reject('stream source is invalid,publication id is invalid');
            return;
        }
        queryPublication(irtcClient.publicationArr,publicationId).unmute(type).then(()=>{
            resolve();
        }).catch((error)=>{
            if (type === 'audio'){
                reject(new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('60080',error));
            }else{
                reject(new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('60081',error));
            }
        });
    });
}

function isEffectiveMediaStreams(stream) {
    if (stream.mediaStream){
         if (typeof stream.mediaStream.getTracks != 'function') {
            return false;
         }
         if (stream.mediaStream.getTracks() && stream.mediaStream.getTracks().length == 0){
             return false;
         }
    }else{
        if (typeof stream.getTracks != 'function') {
            return false;
        }
        if (stream.getTracks() && stream.getTracks().length == 0){
            return false;
        }
    }
    return true;
}

async function renderRemoteStream(irtcClient,streamLabel, videoId, onSuccess, onFailure) {
    if (!irtcClient){
        onFailure('irtc Client is invalid');
    }
    for (let i = 0; i < irtcClient.createStreams.length; i++) {
        let stream = irtcClient.createStreams[i];
        if (stream.attributes && stream.attributes.type === streamLabel) {
            try {
                let renderResult = renderStreamWithVideoLabel(stream, videoId, true);
                onSuccess();
            } catch (error) {
                onFailure(error);
            }
            return;
        }
    }
    for (let i = 0; i < irtcClient.remoteStreams.length; i++) {
        let stream = irtcClient.remoteStreams[i];
        //deal with mini streamIn streams
        if (stream.origin === 'admin' && !stream.attributes) {
            let subscription = await subscribeStream(irtcClient, stream);
            let renderResult = renderStreamWithVideoLabel(stream, videoId, false);
            onSuccess(subscription.id);
        }
        if (stream.attributes && stream.attributes.type === streamLabel) {
            try {
                let isMe = irtcClient.isMePublishStream(stream);
                let subscription = await subscribeStream(irtcClient, stream);
                let renderResult = renderStreamWithVideoLabel(stream, videoId, isMe);
                onSuccess(subscription.id);
            } catch (error) {
                onFailure(error);
            }
            return;
        }
    }
}


function zmsAddEventListener(irtcClient,publication) {
    irtcClient.remoteStreams.forEach((stream) =>{
        if(stream.id !== irtcClient.mixStreamId){
            let streamLabel = (stream.attributes&&stream.attributes.type)?stream.attributes.type:'';
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])('onStreamAdd',null,{
                streamLabel:streamLabel,
            })
        }
    });
    irtcClient.streamAddEvent = Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["a" /* addEventListener */])(IRTC_CUSTOMEREVENT.STREAMADD,(info)=>{
        let stream = info.data;
        let streamLabel = (stream.attributes&&stream.attributes.type)?stream.attributes.type:'';
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])('onStreamAdd',null,{
            streamLabel:streamLabel
        });
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`stream add ${JSON.stringify(info)}`);
    });
    irtcClient.streamEndEvent = Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["a" /* addEventListener */])(IRTC_CUSTOMEREVENT.STREAMENDED,(info)=>{
        let stream = info.data;
        let streamLabel = (stream.attributes&&stream.attributes.type)?stream.attributes.type:'';
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])('onStreamEnd',null,{
            streamLabel:streamLabel
        });
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`stream add ${JSON.stringify(info)}`);
    });
    irtcClient.serverDisConnectEvent = Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["a" /* addEventListener */])(IRTC_CUSTOMEREVENT.SERVERDISCONNECTED,(info)=>{
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(__WEBPACK_IMPORTED_MODULE_1__base_event__["e" /* systemErrorName */],__WEBPACK_IMPORTED_MODULE_1__base_event__["d" /* systemErrorCode */].zmsServerDisconnected,'mcu server disconnected');
    });
    irtcClient.publishEndEvent = Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["a" /* addEventListener */])(IRTC_CUSTOMEREVENT.PUBLICATIONEND,(info)=>{
        let publicationId = info.data.value;
        if (publicationId === publication.id){
            Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(__WEBPACK_IMPORTED_MODULE_1__base_event__["e" /* systemErrorName */],__WEBPACK_IMPORTED_MODULE_1__base_event__["d" /* systemErrorCode */].localStreamEnd,'local stream is end');
        }
    });
    irtcClient.subscribeEndEvent = Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["a" /* addEventListener */])(IRTC_CUSTOMEREVENT.SUBSCRIPTIONEND,(info)=>{
        let subscriptionId = info.data.value;
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["b" /* dispatchEvent */])(__WEBPACK_IMPORTED_MODULE_1__base_event__["e" /* systemErrorName */],__WEBPACK_IMPORTED_MODULE_1__base_event__["d" /* systemErrorCode */].subscribeStreamEnd,subscriptionId);
    });
}


function zmsRemoveEventListener(irtcClient){
    if(irtcClient){
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["c" /* removeEventListener */])(IRTC_CUSTOMEREVENT.SERVERDISCONNECTED,irtcClient.serverDisConnectEvent);
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["c" /* removeEventListener */])(IRTC_CUSTOMEREVENT.PUBLICATIONEND,irtcClient.publishEndEvent);
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["c" /* removeEventListener */])(IRTC_CUSTOMEREVENT.SUBSCRIPTIONEND,irtcClient.subscribeEndEvent);
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["c" /* removeEventListener */])(IRTC_CUSTOMEREVENT.STREAMADD,irtcClient.streamAddEvent);
        Object(__WEBPACK_IMPORTED_MODULE_1__base_event__["c" /* removeEventListener */])(IRTC_CUSTOMEREVENT.STREAMENDED,irtcClient.streamEndEvent);
    }
}







/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CCSClient; });
/* harmony export (immutable) */ __webpack_exports__["s"] = refreshCcsTicket;
/* unused harmony export resumeCcsConnection */
/* harmony export (immutable) */ __webpack_exports__["t"] = releaseCcsClient;
/* harmony export (immutable) */ __webpack_exports__["B"] = validateCcsClient;
/* harmony export (immutable) */ __webpack_exports__["c"] = connect;
/* harmony export (immutable) */ __webpack_exports__["f"] = joinSession;
/* harmony export (immutable) */ __webpack_exports__["q"] = readyToTalk;
/* harmony export (immutable) */ __webpack_exports__["e"] = inviteOtherAgent;
/* harmony export (immutable) */ __webpack_exports__["h"] = notifyTransference;
/* harmony export (immutable) */ __webpack_exports__["p"] = quitSession;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCustomerClientInfoWithMembers;
/* harmony export (immutable) */ __webpack_exports__["b"] = ccsErrorEvent;
/* harmony export (immutable) */ __webpack_exports__["y"] = sendTextMessage;
/* harmony export (immutable) */ __webpack_exports__["o"] = onTextMessage;
/* harmony export (immutable) */ __webpack_exports__["w"] = sendCustomMessage;
/* harmony export (immutable) */ __webpack_exports__["v"] = requestScreenShareWithOthers;
/* harmony export (immutable) */ __webpack_exports__["r"] = receiveRequestScreenShareMessage;
/* harmony export (immutable) */ __webpack_exports__["u"] = releaseScreenShare;
/* unused harmony export receiveReleaseScreenShareMessage */
/* unused harmony export sendDeviceScreenSize */
/* harmony export (immutable) */ __webpack_exports__["j"] = onDeviceScreenSize;
/* harmony export (immutable) */ __webpack_exports__["g"] = markScreen;
/* unused harmony export onScreenPoint */
/* harmony export (immutable) */ __webpack_exports__["i"] = onCustomMessage;
/* harmony export (immutable) */ __webpack_exports__["A"] = shareResource;
/* harmony export (immutable) */ __webpack_exports__["n"] = onResourceMessage;
/* harmony export (immutable) */ __webpack_exports__["x"] = sendForm;
/* harmony export (immutable) */ __webpack_exports__["k"] = onForm;
/* harmony export (immutable) */ __webpack_exports__["l"] = onHoldOn;
/* unused harmony export onJoinSession */
/* unused harmony export onQuitSession */
/* harmony export (immutable) */ __webpack_exports__["z"] = sessionMemberJoinQuitEvent;
/* harmony export (immutable) */ __webpack_exports__["m"] = onInvitationProgress;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_logger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_io__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_error__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool__ = __webpack_require__(4);








const defaultOptions = {
    reconnect: false,
    secure: false,
    'force new connection': true
};

const errorCode = {
    refreshTicketFailed:100,
    resumeConnectionFailed:101,
    ticketIsEmpty:102,
    ccsSocketIoDisconnected:103,
    socketIoDrop:104,
};

const ccsEvent = {
    refreshTicketFailed:'refreshTicketFailed',
    resumeConnectionFailed:'resumeConnectionFailed',
    socketIoDisconnected:'ccs_socket_disConnected',
    socketIoDrop:'socketIoDrop',
};


class CCSClient{

    constructor(){
        this.msgEventListeners = {};
        this.connected = false;
    }


    connect(url,token,success,failed){
        let connectUrl = url;
        let index = url.indexOf("?");
        let query = {};
        if( index !== -1){
            connectUrl = url.substr(0, index);
            let str = url.substr(index+1);
            let strs =str.split("&");
            for (var i = 0; i < strs.length; i++) {
                let item = strs[i];
                let sIn = item.indexOf("=")
                if(sIn !== -1){
                    let key = item.substr(0, sIn);
                    let value = item.substr(sIn+1);
                    query[key] = value;
                }
            }
        }
        query.token = token;
        defaultOptions.query = query;
        this.socket = __WEBPACK_IMPORTED_MODULE_1__socket_io___default.a.connect(connectUrl, defaultOptions);

        this.socket.on('connect', (data)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(new Date(),'-ccs-connect:'+data);
            success();
            this.onMessage();
        });
        this.socket.on('connect_error', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-connect_error');
            failed('connect_error');
        });
        this.socket.on('connect_timeout', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-connect_timeout');
            failed('connect_timeout');
        });
        this.socket.on('error', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-connect-error');
            failed('error');
        });
        this.socket.on('disconnect', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-disconnect');
        });
        this.socket.on('reconnect', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-reconnect');
        });
        this.socket.on('reconnect_attempt', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-reconnect_attempt');
        });
        this.socket.on('reconnecting', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-reconnecting');
        });
        this.socket.on('reconnect_error', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-reconnect_error');
        });
        this.socket.on('reconnect_failed', function(data){
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(new Date(),data + '-ccs-reconnect_failed');
        });
    }

    disconnect(){
        this.socket.disconnect();
    }



    requestSession(data,ack){
         this.send('request-session',data,(status,resp)=>{
             if (status === 'ok'){
                this.clientId = resp.clientId;
             }
             ack(status,resp);
         })
    }

    onInvitationProgress(ack){
        this.msgEventListeners['invitation-progress'] = ack;
    }


    joinSession(data,ack){
        this.send('join-session',data,(status,resp)=>{
            if (status === 'ok'){
                this.clientId = resp.clientId;
            }
            ack(status,resp);
        })
    }

    onJoinedSession(ack){
        this.msgEventListeners['peer-status'] = this.msgEventListeners['peer-status'] || {};
        this.msgEventListeners['peer-status']['joined'] = ack;
    }

    quitSession(ack){
        this.send('quit-session',null,(status,resp)=>{
            if (status === 'ok'){
                this.clientId = null;
            }
            ack(status,resp);
        })
    }

    onQuitSession(ack){
        this.msgEventListeners['peer-status'] = this.msgEventListeners['peer-status'] || {};
        this.msgEventListeners['peer-status']['quit'] = ack;
    }


    sendMessage(type,data,to,ack){
        if (this.clientId){
            let message = {
                type:type,
                id:Math.round(Math.random() * 1000000000000000000) + '',
                from:this.clientId,
                to:to,
                data:data
            };
            this.send('session-message',message,(status,resp)=>{
                ack(status,resp,message.id);
            })
        } else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(`clientId is null,don't in session`,new Date());
            ack('error','clientId is null');
        }
    }


    confirmReceiveMessage(messageId,toWhom){
         let data = {
             id:messageId
         };
         this.sendMessage('ack',data,toWhom,(status,resp)=>{
              if (status === 'ok'){
                  __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send ack -- ${messageId} ok`)
              } else{
                  __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(`send ack -- ${messageId} error`,resp)
              }
         })
    }


    onMessage(){
        this.receive('session-message',(msg)=>{
            let msgData = {
                type: msg.type,
                id: msg.id,
                from: msg.from,
                data: msg.data
            };
            if(msgData.type === 'peer-cmd'){
                if(this.msgEventListeners['peer-cmd'] && this.msgEventListeners['peer-cmd'][msgData.data['cmd']]) {
                    this.msgEventListeners['peer-cmd'][msgData.data['cmd']](msgData);
                }
            }else if(msgData.type === 'peer-status'){
                if( this.msgEventListeners['peer-status'] && this.msgEventListeners['peer-status'][msgData.data['status']]){
                    this.msgEventListeners['peer-status'][msgData.data['status']](msgData);
                }
            }else {
                if(this.msgEventListeners[msgData.type]){
                    this.msgEventListeners[msgData.type](msgData);
                }
            }
            if(msgData.type !== 'ack' && msgData.from !== 'system'){
                this.confirmReceiveMessage(msg.id, msg.from);
            }
        })
    }


    holdOn(toWhom,ack){
        let data = {
            status:'hold-on',
            at:new Date().toISOString()
        };
        this.sendMessage('peer-status',data,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId)
        })
    }

    onHoldOn(ack){
        this.msgEventListeners['peer-status'] = this.msgEventListeners['peer-status'] || {};
        this.msgEventListeners['peer-status']['hold-on'] = ack;
    }


    startTyping(toWhom,ack){
        let data = {
            status: 'start-typing',
            at: new Date().toISOString()
        }
        this.sendMessage('peer-status', data, toWhom,function(status, resp, msgId){
            ack(status, resp, msgId);
        });
    }

    onStartTyping(ack){
        this.msgEventListeners['peer-status'] = this.msgEventListeners['peer-status'] || {};
        this.msgEventListeners['peer-status']['start-typing'] = ack;
    }

    stopTyping(toWhom,ack){
        let data = {
            status: 'stop-typing',
            at: new Date().toISOString()
        }
        this.sendMessage('peer-status', data, toWhom,function(status, resp, msgId){
            ack(status, resp, msgId);
        });
    }

    onStopTyping(ack){
        this.msgEventListeners['peer-status'] = this.msgEventListeners['peer-status'] || {};
        this.msgEventListeners['peer-status']['stop-typing'] = ack;
    }

    readyToTalk(toWhom,ack){
        let data = {
            status: 'ready-to-talk',
            at: new Date().toISOString()
        }
        this.sendMessage('peer-status', data, toWhom,function(status, resp, msgId){
            ack(status, resp, msgId);
        });
    }

    onReadyToTalk(ack){
        this.msgEventListeners['peer-status'] = this.msgEventListeners['peer-status'] || {};
        this.msgEventListeners['peer-status']['ready-to-talk'] = ack;
    }



    onDisconnect(ack){
        this.receive('disconnect', function(reason){
            if (this.connected){
                this.connected = false;
                Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(ccsEvent.socketIoDisconnected,errorCode.ccsSocketIoDisconnected,'ccs socket io disconnected');
            }
            ack(reason);
        })
    }

    receive(eventName,ack){
        if(this.socket){
            this.socket.on(eventName, ack);
        } else {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].error('There is no socket connect');
            ack('socket on event error,',eventName);
        }
    }



    send(eventName,data,ack){
        if(this.socket && this.socket.connected){
            if(data){
                this.socket.emit(eventName, data, ack);
            } else {
                this.socket.emit(eventName, ack);
            }
        }else {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].error('There is no socket connect while send message with Name',eventName,'&data,',data);
            ack('error','There is no socket connect while send message with Name',eventName,'&data,',data);
        }
    }

    onConnect(ack){
        this.receive('connect', ()=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('ccs connect at,',new  Date());
            ack();
        });
    }


    refreshTicket(ack){
        this.send('refresh-ticket',null,function (status,resp) {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(new Date(),'refresh-ticket result',status,resp);
            ack(status,resp);
        })
    }

    resumeConnection(ticket,ack){
        this.send('resume-connection',ticket,function (status,resp) {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(new Date(),'resumeConnection result',status,resp);
            ack(status,resp);
        })
    }


    onError(ack){
        this.receive('error', (data) =>{
            ack(data);
        })
    }

    onDrop(ack){
        this.receive('drop', () =>{
            ack();
        })
    }


    invite(data,ack){
        this.send('invite',data,(status,resp)=>{
           ack(status,resp);
        });
    }

    photoGuideBox(askForPermission = false,toWhom,ack){
            let data = {
                cmd: 'photo_guidebox',
                askForPermission:askForPermission
            };
            this.sendMessage('peer-cmd',data,toWhom,(status,resp,msgId)=>{
               ack(status,resp,msgId);
            });
        }

    onPhotoGuideBox(ack){
            this.msgEventListeners['peer-cmd'] = this.msgEventListeners['peer-status'] || {};
            this.msgEventListeners['peer-cmd']['photo_guidebox'] = ack;
    }

    requestScreenShare(askForPermission = false,toWhom,ack){
        let data = {
            cmd: 'view-screen',
            askForPermission:askForPermission
        };
        this.sendMessage('peer-cmd',data,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId);
        });
    }

    onRequestScreenShare(ack){
        this.msgEventListeners['peer-cmd'] = this.msgEventListeners['peer-status'] || {};
        this.msgEventListeners['peer-cmd']['view-screen'] = ack;
    }


    releaseScreen(askForPermission = false,toWhom,ack){
        let data = {
            cmd: 'release-screen',
            askForPermission:askForPermission
        };
        this.sendMessage('peer-cmd',data,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId);
        });
    }

    onReleaseScreen(ack){
        this.msgEventListeners['peer-cmd'] = this.msgEventListeners['peer-status'] || {};
        this.msgEventListeners['peer-cmd']['release-screen'] = ack;
    }

    sendDeviceScreenSize(data,toWhom,ack){
        this.sendMessage('screenSize',data,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId);
        });
    }

    onDeviceScreenSize(ack){
        this.msgEventListeners['screenSize'] = ack;
    }

    markScreen(data,toWhom,ack){
        this.sendMessage('markScreen',data,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId);
        });
    }

    onScreenPoint(ack){
        this.msgEventListeners['markScreen'] = ack;
    }

    screenSnapshot(askForPermission = false,toWhom,ack){
            let data = {
                cmd: 'screen-snapshot',
                askForPermission:askForPermission
            };
            this.sendMessage('peer-cmd',data,toWhom,(status,resp,msgId)=>{
                ack(status,resp,msgId);
            });
        }

    onScreenSnapshot(ack){
            this.msgEventListeners['peer-cmd'] = this.msgEventListeners['peer-status'] || {};
            this.msgEventListeners['peer-cmd']['screen-snapshot'] = ack;
    }


    handSign(askForPermission = false,data,toWhom,ack){
        this.sendMessage('handwriting',data,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId);
        });
    }

    onHandSignature(ack){
        this.msgEventListeners['handwriting'] = ack;
    }

    sendScreenMarkMessage(trajectoryData,toWhom,ack){
        this.sendMessage('screenShareMark',data,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId);
        });
    }

    onScreenMark(ack){
        this.msgEventListeners['screenShareMark'] = ack;
    }

    shareResource(type,url,name,toWhom,ack){
       let data = {
           type:type,
           url:url,
           name:name
       };
       this.sendMessage('link',data,toWhom,(status,resp,msgId)=>{
          ack(status,resp,msgId);
       });
    }


    onSharedResource(ack){
        this.msgEventListeners['link'] = ack;
    }

    sendTextMessage(message,toWhom,ack){
        this.sendMessage('text',message,toWhom,(status,resp,msgId)=>{
           ack(status,resp,msgId);
        });
    }

    onTextMessage(ack){
        this.msgEventListeners['text'] = ack;
    }


    sendForm(formData,toWhom,ack){
        this.sendMessage('form',formData,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId);
        });
    }

    onFormData(ack){
        this.msgEventListeners['form'] = ack;
    }

    sendCustomMessage(data,toWhom,ack){
        this.sendMessage('custom',data,toWhom,(status,resp,msgId)=>{
            ack(status,resp,msgId);
        })
    }

    onCustomMessage(ack){
        this.msgEventListeners['custom'] = ack;
    }

}




function refreshCcsTicket(ccsClient,refreshTicketTime){
    ccsClient.interval = setInterval(function () {
        ccsClient.refreshTicket((refreshStatus,refreshResp) =>{
            if (refreshStatus === 'ok'){
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('refresh ccs Ticket success',refreshResp);
                ccsClient.ticket = refreshResp.ticket;
            }else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].error(`refreshTicketFailed,you need to connect ccs socket again,${new Date()}`);
                Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(ccsEvent.refreshTicketFailed,errorCode.refreshTicketFailed,'refreshTicketFailed,you need to connect ccs socket again');
                clearInterval(ccsClient.interval);
            }
        })
    },refreshTicketTime);
}

function resumeCcsConnection(ccsClient,ticket){
    if (ticket){
        ccsClient.resumeConnection(ticket, (resumeConnectionStatus,resumeConnectionResp) => {
            if (resumeConnectionStatus === 'ok'){
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`resume ccs connection success,${resumeConnectionResp},${new Date()}`);
                ccsClient.ticket = resumeConnectionResp.ticket;
            }else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning(`resume ccs connection failed,${resumeConnectionResp},${new Date()}`);
                Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(ccsEvent.resumeConnectionFailed,errorCode.resumeConnectionFailed,resumeConnectionResp);
            }
        })
    }else{
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ticket is Empty',new Date());
        Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(ccsEvent.resumeConnectionFailed,errorCode.ticketIsEmpty,'ticket is Empty');
    }
}

function releaseCcsClient(ccsClient) {
    ccsClient.accessToken = null;
    ccsClient.connected = false;
    ccsClient.ticket = null;
    ccsClient.disconnect();
    clearInterval(ccsClient.interval);
    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`release ccs client,${new Date()}}`);
}

function validateCcsClient(ccsClient) {
    if (!ccsClient){
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ccs client is undefined');
        return new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5001', 'ccs client is undefined');
    }
    if (!ccsClient.accessToken){
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ccs accessToken is undefined or invalid');
        return new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5002', 'ccs accessToken is undefined or invalid');
    }
    if (!ccsClient.connected){
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ccs socket io is disconnected');
        return new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5003', 'ccs socket io is disconnected');
    }
    return 'ok';
}

async function connect(ccsClient,ccsUrl,accessToken) {
    return await new Promise((resolve,reject)=>{
        ccsClient.connect(ccsUrl,accessToken,(resp)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`connect to ccs success,${new Date()},${resp}`);
            resolve();
        },(error)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`connect to ccs error,${error},${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5000',`connect to ${ccsUrl} error,${error}`);
            reject(response);
        });
        ccsClient.onConnect( (resp) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('connect to ccs at',new Date());
            if (!ccsClient.connected){
                ccsClient.accessToken = accessToken;
                ccsClient.connected = true;
            }else{
                resumeCcsConnection(ccsClient,ccsClient.ticket);
            }
        });
        ccsClient.onDisconnect((reason) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ccs socket is disconnected,',reason,new Date());
            ccsClient.connected = false;
        });
        ccsClient.onDrop((reason)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ccs socket io is drop,',reason,new Date());
            Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])(ccsEvent.socketIoDrop,errorCode.socketIoDrop,'ccs socket io is drop');
            ccsClient.connected = false;
        });
    })
}


async function joinSession(ccsClient,joinData) {
    return await new Promise((resolve,reject)=>{
        ccsClient.joinSession(joinData, (status,joinResult) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`join session ${joinData.sessionId} success,${JSON.stringify(joinResult)},${new Date()}`);
            if (status === 'ok'){
                resolve(joinResult);
            }else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`join session ${joinData.sessionId} error,${joinResult},${new Date()}`);
                let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5004',`join session ${joinData.sessionId} error,${joinResult}`);
                reject(response);
            }
        }, (error) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`join session ${joinData.sessionId} error,${error},${new Date()}`);
            let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5004',`join session ${joinData.sessionId} error,${error}`);
            reject(response);
        });
    });
}


async function readyToTalk(ccsClient) {
    return await new Promise((resolve,reject)=>{
        ccsClient.readyToTalk('customers',(status,resp) => {
            if (status === 'ok'){
                resolve();
            } else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`tell customer readyToTalk WhileStreamPublishSuccess error,${resp},${new Date()}`);
                let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5005',`tell customer readyToTalk WhileStreamPublishSuccess error,${resp}`);
                reject(response);
            }
        });
    });
}


async function inviteOtherAgent(ccsClient,inviteData){
    return await new Promise((resolve,reject)=>{
        ccsClient.invite(inviteData,(status,resp)=>{
            if (status === 'ok'){
                resolve();
            } else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`invite other agent error,${inviteData},${resp},${new Date()}`);
                let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5006',`invite with parameter ,${inviteData}, error,${resp}`);
                reject(response);
            }
        })
    });
}


async function notifyTransference(ccsClient) {
    return await new Promise((resolve,reject)=>{
         ccsClient.holdOn('customers',(status,resp,msgId)=>{
             if (status === 'ok'){
                 resolve();
             }else{
                 __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`tell Customer hold on error,${resp},${new Date()}`);
                 let response = new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5007',`tell Customer hold on,msgId ${msgId},error,${resp}`);
                 reject(response);
             }
         })
    });
}


async function quitSession(ccsClient) {
    return await  new Promise((resolve,reject)=>{
        if (!ccsClient){
            reject(new __WEBPACK_IMPORTED_MODULE_3__base_error__["a" /* IvcsError */]('5001','ccs client is null'));
            return;
        }
        ccsClient.quitSession((status,resp)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('quit session result,',status,resp,new Date());
            if (status === 'ok'){
                resolve(resp);
            }else{
                reject(resp);
            }
        })
    })
}

function getCustomerClientInfoWithMembers(members) {
    let customerClientType = 'web';
    members.map((currentValue,index,arr)=>{
        if (currentValue.role === 'customer'){
            let clientInfo = currentValue.clientInfo?currentValue.clientInfo:undefined;
            customerClientType = clientInfo?clientInfo.type:undefined;
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('customerClientInfo,',clientInfo,customerClientType);
        }
    });
    return customerClientType;
}


function ccsErrorEvent(callback) {
    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["a" /* addEventListener */])(ccsEvent.resumeConnectionFailed,(info)=>{
        callback(info);
    });
    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["a" /* addEventListener */])(ccsEvent.refreshTicketFailed,(info)=>{
        callback(info);
    });
    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["a" /* addEventListener */])(ccsEvent.socketIoDisconnected,(info)=>{
        callback(info);
    });
    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["a" /* addEventListener */])(ccsEvent.socketIoDrop,(info)=>{
        callback(info);
    });
}

function sendTextMessage(ccsClient,message,clientId,onSuccess,onFailure) {
    let isValid = validateCcsClient(__WEBPACK_IMPORTED_MODULE_5__client__["a" /* client */].ccsClient);
    if (isValid != 'ok'){
        onFailure(isValid);
    }
    ccsClient.sendTextMessage(message,clientId,(status,resp,msgId)=>{
        if (status === 'ok'){
            onSuccess();
        }else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send text message:${message} to ${clientId} failed,reason:${resp},msgId ${msgId},${new Date()}`);
            onFailure(resp);
        }
    })
}

function onTextMessage(ccsClient,ack) {
    let isValid = validateCcsClient(__WEBPACK_IMPORTED_MODULE_5__client__["a" /* client */].ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onTextMessage((data)=>{
        ack(data);
    })
}

function sendCustomMessage(ccsClient,data,toWhom,onSuccess,onFailure) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        onFailure(isValid);
    }
    ccsClient.sendCustomMessage(data,toWhom,(status,resp,msgId)=>{
        if (status === 'ok'){
            onSuccess(msgId);
        }else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send custom message:${data} to ${toWhom} failed,reason:${resp},msgId ${msgId},${new Date()}`);
            onFailure(resp);
        }
    })
}

function requestScreenShareWithOthers(ccsClient,toWhom,onSuccess,onFailure) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        onFailure(isValid);
    }
    ccsClient.requestScreenShare(false,toWhom,(status,resp,msgId)=>{
        if (status === 'ok'){
            onSuccess(msgId);
        }else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send request screen share message to ${toWhom} failed,reason:${resp},msgId ${msgId},${new Date()}`);
            onFailure(resp);
        }
    });
}

function receiveRequestScreenShareMessage(ccsClient,ack) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onRequestScreenShare((data)=>{
        ack(data);
    })
}

function releaseScreenShare(ccsClient,toWhom,onSuccess,onFailure) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        onFailure(isValid);
    }
    ccsClient.releaseScreen(false,toWhom,(status,resp,msgId)=>{
        if (status === 'ok'){
            onSuccess(msgId);
        }else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send request screen share message to ${toWhom} failed,reason:${resp},msgId ${msgId},${new Date()}`);
            onFailure(resp);
        }
    });
}

function receiveReleaseScreenShareMessage(ccsClient,ack) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onReleaseScreen((data)=>{
        ack(data);
    })
}


function sendDeviceScreenSize(ccsClient,data,toWhom,onSuccess,onFailure) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        onFailure(isValid);
    }
    ccsClient.sendDeviceScreenSize(data,toWhom,(status,resp,msgId)=>{
        if (status === 'ok'){
            onSuccess(msgId);
        }else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send device screenSize message to ${toWhom} failed,reason:${resp},msgId ${msgId},${new Date()}`);
            onFailure(resp);
        }
    });
}

function onDeviceScreenSize(ccsClient,ack) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onDeviceScreenSize((data)=>{
        ack(data);
    })
}

function markScreen(ccsClient,data,toWhom,onSuccess,onFailure) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        onFailure(isValid);
    }
    ccsClient.markScreen(data,toWhom,(status,resp,msgId)=>{
        if (status === 'ok'){
            onSuccess(msgId);
        }else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`markScreen message ${data}to ${toWhom} failed,reason:${resp},msgId ${msgId},${new Date()}`);
            onFailure(resp);
        }
    });
}

function onScreenPoint(ccsClient,ack) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onScreenPoint((data)=>{
        ack(data);
    })
}


function onCustomMessage(ccsClient,ack) {
    let isValid = validateCcsClient(ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onCustomMessage((data)=>{
        ack(data);
    })
}

async function shareResource(ccsClient,uploadUrl,type,formData,clientId,onSuccess,onFailure) {
    let supportType = ['doc', 'pic', 'video', 'audio', 'page', 'paper'];
    if (supportType.indexOf(type) === -1){
        onFailure(`type is invalid,only support 'doc','pic', 'video', 'audio', 'page', 'paper'`);
        return;
    }
    let isValid = validateCcsClient(__WEBPACK_IMPORTED_MODULE_5__client__["a" /* client */].ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    try {
        let uploadResult = await Object(__WEBPACK_IMPORTED_MODULE_4__api__["i" /* uploadFile */])(uploadUrl,formData);
        ccsClient.shareResource(type,uploadResult.url,uploadResult.originalname,clientId,(status,resp,msgId)=>{
            if (status === 'ok'){
                onSuccess(uploadResult);
            }else{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send shareResource message failed,${resp},msgId${msgId},${new Date()}`);
                onFailure(resp);
            }
        });
    }catch (error) {
        onFailure(error);
    }
}

function onResourceMessage(ccsClient,ack){
    let isValid = validateCcsClient(__WEBPACK_IMPORTED_MODULE_5__client__["a" /* client */].ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onSharedResource((data)=>{
        ack(data);
    })
}

function sendForm(ccsClient,formTemplate,clientId,onSuccess,onFailure){
    let isValid = validateCcsClient(__WEBPACK_IMPORTED_MODULE_5__client__["a" /* client */].ccsClient);
    if (isValid != 'ok'){
        onFailure(isValid);
    }
    ccsClient.sendForm(formTemplate,clientId,(status,resp,msgId)=>{
        if (status === 'ok'){
            onSuccess();
        }else{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send form template failed,reason:${resp},msgId${msgId},${new Date()}`);
            onFailure(resp);
        }
    })
}


function onForm(ccsClient,ack) {
    let isValid = validateCcsClient(__WEBPACK_IMPORTED_MODULE_5__client__["a" /* client */].ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onFormData((resp)=>{
        ack(resp);
    })
}


function onHoldOn(ccsClient,ack) {
    let isValid = validateCcsClient(__WEBPACK_IMPORTED_MODULE_5__client__["a" /* client */].ccsClient);
    if (isValid != 'ok'){
        ack(isValid);
    }
    ccsClient.onHoldOn((resp)=>{
        ack(resp);
    })
}

function onJoinSession(ccsClient,ack) {
    ccsClient.onJoinedSession((resp)=>{
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('other member join session,',resp,new Date());
        ack(resp);
    })
}

function onQuitSession(ccsClient,ack) {
    ccsClient.onQuitSession((resp)=>{
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('other member quit session,',resp,new Date());
        ack(resp);
    })
}

function sessionMemberJoinQuitEvent(ccsClient,customerQuitAck) {
    onJoinSession(ccsClient,(resp)=>{
        ccsClient.members.push(resp.data);
        if (resp.data && resp.data.role === 'agent'){
            Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])('onAgentJoinSession',null,resp.data);
        }else if (resp.data && resp.data.role === 'customer'){
            Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])('onCustomerJoinSession',null,resp.data);
        }
    });
    onQuitSession(ccsClient,(resp)=>{
        ccsClient.members.forEach((member)=>{
            if (member.id === resp.data.id){
                if (member.role === 'customer'){
                    customerQuitAck();
                    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])('onCustomerQuitSession',null,member);
                }else if (member.role === 'agent'){
                    Object(__WEBPACK_IMPORTED_MODULE_2__base_event__["b" /* dispatchEvent */])('onAgentQuitSession',null,member);
                }
            }
        });
        Object(__WEBPACK_IMPORTED_MODULE_6__tool__["c" /* removeObjectWithId */])(ccsClient.members,resp.data.id);
    });
}

function onInvitationProgress(ccsClient,ack) {
    ccsClient.onInvitationProgress((progress)=>{
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`invite progress,${JSON.stringify(progress)},${new Date()}`);
        let status = progress.data.status;
        let response = {code:'', message:''};
        if (status === 'notfound'){
            response.code = '404';
            response.message = 'not found others';
        }else if(status === 'timeout'){
            response.code = '401';
            response.message = 'invite timeout';
        }
        else if (status === 'waiting'){
            response.code = '402';
            let waitingCode = progress.data.waitingReasonCode?progress.data.waitingReasonCode:'-1';
            response.waitingCode = waitingCode;
            if (waitingCode === '1000'){
                response.message = 'system is distributing agent';
            }else if (waitingCode === '1001'){
                response.message = 'no available agent was found';
            }else if (waitingCode === '1002'){
                response.message = 'the designated agent of the invitation is not logged in';
            }else if (waitingCode === '1003'){
                response.message = 'the current state of the specified agent is not available';
            }else if (waitingCode === '1004'){
                response.message = 'disconnect when the specified agent rings';
            }
        }else if(status === 'connecting'){
            response.code = '403';
            response.message = 'agent connecting';
        }else if(status === 'accepted'){
            response.code = '405';
            response.message = 'agent accepted';
        }
        ack(response);
    })
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return client; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_logger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ccs_client__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__irtcScript__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_const__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tool__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_error__ = __webpack_require__(2);










var associatedUrls = {};

const defaultLocalStreamParameter = {
    audioConstraints:{
        deviceId:undefined,
        source:'mic',
    },
    videoConstraints:{
        deviceId:undefined,
        frameRate:15,
        resolution:{
            width:640,
            height:480
        },
        source:'camera',
    },
    publishOptions:{
        audio:[{
            codec:{
                name:'opus'
            }
        }],
        video:[
            {
                codec:{
                    name:'vp8'
                },
                maxBitrate:1024
            },
            {
                codec:{
                    name:'h264'
                },
                maxBitrate:1024
            }
        ]
    }
};

let localPublicationId = null;

var requestSessionResult = {};


const client = {

    init: async function (backendUrl, name, password,org,mediaOptions = __WEBPACK_IMPORTED_MODULE_5__base_const__["a" /* defaultMediaOptions */], onSuccess, onFailure) {
        if (backendUrl === undefined || backendUrl === "") {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('backendUrl is empty');
            let error = new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1000', 'backendUrl is empty');
            onFailure(error);
            return;
        }
        if (name === undefined || name === "") {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('name is empty');
            let error = new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1000', 'name is empty');
            onFailure(error);
            return;
        }
        if (password === undefined || password === "") {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('password is empty');
            let error = new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1000', 'password is empty');
            onFailure(error);
            return;
        }
        if (org === undefined || org === "") {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('organization is empty');
            let error = new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1000', 'organization is empty');
            onFailure(error);
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_5__base_const__["b" /* mediaOptionsIsValid */])(mediaOptions) != 'ok'){
            onFailure(Object(__WEBPACK_IMPORTED_MODULE_5__base_const__["b" /* mediaOptionsIsValid */])(mediaOptions));
            return;
        }
        this.mediaOptions = Object(__WEBPACK_IMPORTED_MODULE_6__tool__["a" /* deepCopy */])(mediaOptions);
        try {
            let login = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* customerLogin */])(backendUrl, name, password, org);
            this.ccsClient = new __WEBPACK_IMPORTED_MODULE_1__ccs_client__["a" /* CCSClient */]();
            associatedUrls = login.data.data.urls;
            let ccsUrl = login.data.data.urls.ccsurl;
            let accessToken = login.data.data.accessToken;
            let connectCcs = await Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["c" /* connect */])(this.ccsClient,ccsUrl,accessToken);
            Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["b" /* ccsErrorEvent */])((info)=>{
                Object(__WEBPACK_IMPORTED_MODULE_3__base_event__["b" /* dispatchEvent */])(__WEBPACK_IMPORTED_MODULE_3__base_event__["e" /* systemErrorName */],__WEBPACK_IMPORTED_MODULE_3__base_event__["d" /* systemErrorCode */].ccsSocketIoError,info);
            });
            onSuccess(login.data.data);
        }catch (error) {
            onFailure(error);
        }
    },

    disconnect:function(){
        this.ccsClient.disconnect();
    },

    /*initiate a call*/
    requestSession:function (requestParameter,onSuccess,onFailure) {
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        this.ccsClient.requestSession(requestParameter,(status,resp)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('request session result,',status,resp);
            if (status === 'ok'){
                requestSessionResult = resp;
                this.ccsClient.ticket = resp.ticket;
                let refreshTicketTime = resp.refersh_ticket_time;
                Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["s" /* refreshCcsTicket */])(this.ccsClient,refreshTicketTime);
                this.ccsClient.members = resp.members;
                Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["z" /* sessionMemberJoinQuitEvent */])(this.ccsClient,()=>{
                });
                onSuccess(resp);
            }else{
                onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('5008', resp));
            }
        })
    },

    onInvitationProgress:function(ack){
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["m" /* onInvitationProgress */])(this.ccsClient,(resp)=>{
            ack(resp);
        });
    },

    joinSession:function (joinParameter,onSuccess,onFailure) {
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        this.ccsClient.joinSession(joinParameter,(status,resp)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('join session result,',status,resp);
            if (status === 'ok'){
                this.ccsClient.ticket = resp.ticket;
                let refreshTicketTime = resp.refersh_ticket_time;
                Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["s" /* refreshCcsTicket */])(this.ccsClient,refreshTicketTime);
                onSuccess(resp);
            }else{
                onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('5004', resp));
            }
        })
    },

    /*quit a call*/
    quitSession:function(onSuccess,onFailure) {
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        this.ccsClient.quitSession((status,resp)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('quit session result,',status,resp,new Date());
            if (status === 'ok'){
                Object(__WEBPACK_IMPORTED_MODULE_4__irtcScript__["o" /* zmsRemoveEventListener */])(this.irtcClient);
                onSuccess(resp);
            }else{
                onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('5009', resp));
            }
            //The CCS link disconnects after you quit the session
            Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["t" /* releaseCcsClient */])(this.ccsClient);
        })
    },

    readyToTalk:function(toWho,onSuccess,onFailure){
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        this.ccsClient.readyToTalk(toWho,(status,resp)=>{
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`ready to talk ${toWho},success,',${resp},${new Date()}`);
            if (status === 'ok'){
                onSuccess(resp);
            }else{
                onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('5005', resp));
            }
        })
    },

    onReadyToTalk:function(ack){
        this.ccsClient.onReadyToTalk((resp)=>{
            ack(resp);
        });
    },

    onDrop:function(ack){
        let dropMessage = {
            drop:{
                code:401,
                message:'connect forced termination drop'
            },
            error:{
                code:402,
                message:'socket io connect error'
            }
        };
        this.ccsClient.onDrop((resp)=> {
            Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["t" /* releaseCcsClient */])(this.ccsClient);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ccs connect forced termination drop',resp,new Date());
            ack(dropMessage.drop);
        });
        this.ccsClient.onError((error)=> {
            Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["t" /* releaseCcsClient */])(this.ccsClient);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('css connect error,need to stop current business processing',error,new Date());
            ack(dropMessage.error);
        })
    },

    async startVideo(videoLabel,onSuccess, onFailure) {
        try {
            let turnServerUrl = associatedUrls.turnserverUrl;
            let turnServerCredential = associatedUrls.turnserverCredential;
            let turnServerUsername = associatedUrls.turnserverUsername;
            this.irtcClient = new __WEBPACK_IMPORTED_MODULE_4__irtcScript__["b" /* IRtcClient */](turnServerUrl,turnServerCredential,turnServerUsername);
            let roomInfo = await Object(__WEBPACK_IMPORTED_MODULE_4__irtcScript__["f" /* joinRoom */])(this.irtcClient, requestSessionResult.roomId, requestSessionResult.roomToken);
            let streamOptions = {
                audioConstraints:this.mediaOptions.cameraStreamAudioConstraints,
                videoConstraints:this.mediaOptions.cameraStreamVideoConstraints,
                publishOptions:this.mediaOptions.cameraPublishOptions
            };
            let localStream = await Object(__WEBPACK_IMPORTED_MODULE_4__irtcScript__["c" /* createCameraMicStream */])(this.irtcClient, streamOptions, videoLabel);
            let publication = await Object(__WEBPACK_IMPORTED_MODULE_4__irtcScript__["i" /* publishStream */])(this.irtcClient, localStream, streamOptions.publishOptions);
            localPublicationId = publication.id;
            onSuccess({
               publicationId:publication.id,
               roomInfo:roomInfo
            });
            Object(__WEBPACK_IMPORTED_MODULE_4__irtcScript__["n" /* zmsAddEventListener */])(this.irtcClient,publication);

        }catch (e) {
            onFailure(e);
        }
    },

    addEventListener(eventName,ack){
        let event = (data) => {
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`event with name,${eventName},data,${data.detail},${new Date()}`);
            ack(data.detail);
        };
        window.addEventListener(eventName,event);
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`customer add event listener with Name,${eventName}`);
        return event;
    },

    removeEventListener(eventName,eventImplementationFunction){
        window.removeEventListener(eventName,eventImplementationFunction);
        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`customer remove event listener with Name,${eventName},with implementation function,${eventImplementationFunction}`);
    },

    renderStream:async function(streamLabel,videoId,onSuccess,onFailure){
        Object(__WEBPACK_IMPORTED_MODULE_4__irtcScript__["j" /* renderRemoteStream */])(this.irtcClient,streamLabel,videoId,(resp)=>{
            onSuccess(resp);
        },(error)=>{
            onFailure(error);
        });
    },

    onPhotoGuideBox(ack){
        this.ccsClient.onPhotoGuideBox((data)=>{
            ack(data);
        })
    },

    onHandSignatureRequest(ack){
        this.ccsClient.onHandSignature((resp)=>{
            ack(resp);
        })
    },

    sendHandSignMessage(data,toWhom = 'agents',onSuccess,onFailure){
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
       this.ccsClient.handSign(false,data,toWhom,(status,resp,msgId)=>{
           if (status === "ok"){
               onSuccess(resp);
           } else{
               onFailure(resp);
           }
       })
    },

    onScreenSnapshotRequest(ack){
        this.ccsClient.onScreenSnapshot((resp)=>{
            ack(resp);
        })
    },

    sendTextMessage:function (message,clientId='agents',onSuccess,onFailure) {
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["y" /* sendTextMessage */])(this.ccsClient,message,clientId,(resp)=>{
            onSuccess();
        },(error)=>{
            onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1004', error));
        });
    },

    onTextMessage(ack){
       Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["o" /* onTextMessage */])(this.ccsClient,(resp)=>{
           ack(resp);
       })
    },

    shareResource:async function (type,formData,clientId='agents',onSuccess,onFailure) {
        let supportType = ['doc', 'pic', 'video', 'audio', 'page', 'paper'];
        if (supportType.indexOf(type) === -1){
            let error = new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('2001',`type is invalid,only support 'doc','pic', 'video', 'audio', 'page', 'paper'`);
            onFailure(error);
            return;
        }
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        let url = associatedUrls.uploadUrl + '/v1/upload';
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["A" /* shareResource */])(this.ccsClient,url,type,formData,clientId,(resp)=>{
            onSuccess(resp);
        },(error)=>{
            onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1009', error));
        });
    },

    shareResourceWithUrl:async function (type,url,toRole='agents',onSuccess,onFailure) {
        let supportType = ['doc', 'pic', 'video', 'audio', 'page', 'paper'];
        if (supportType.indexOf(type) === -1){
            let error = new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('2001',`type is invalid,only support 'doc','pic', 'video', 'audio', 'page', 'paper'`);
            onFailure(error);
            return;
        }
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        try {
            this.ccsClient.shareResource(type,url,'',toRole,(status,resp,msgId)=>{
                if (status === 'ok'){
                    onSuccess();
                }else{
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send shareResource message failed,${resp},msgId${msgId},${new Date()}`);
                    onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1009', resp));
                }
            });
        }catch (error) {
            onFailure(error);
        }
    },

    onResourceMessage:function (ack) {
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["n" /* onResourceMessage */])(this.ccsClient,(resp)=>{
            ack(resp);
        })
    },

    submitFormData(formTemplate,clientId = 'agents',onSuccess,onFailure){
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["x" /* sendForm */])(this.ccsClient,formTemplate,clientId,(resp)=>{
            onSuccess(resp);
        },(error)=>{
            onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1005', error));
        });
    },

    onForm(ack){
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["k" /* onForm */])(this.ccsClient,(resp)=>{
            ack(resp);
        })
    },

    onHoldOn(ack){
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["l" /* onHoldOn */])(this.ccsClient,(resp)=>{
            ack(resp);
        })
    },

    sendCustomMessage(data,toRoles = 'agents',onSuccess,onFailure){
        let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
        if (isValid != 'ok'){
            onFailure(isValid);
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["w" /* sendCustomMessage */])(this.ccsClient,data,toRoles,(resp)=>{
            onSuccess(resp);
        },(error)=>{
            onFailure(new __WEBPACK_IMPORTED_MODULE_7__base_error__["a" /* IvcsError */]('1006', error));
        })
    },

    onCustomMessage(ack){
        Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["i" /* onCustomMessage */])(this.ccsClient,(data)=>{
            ack(data);
        })
    },

    mute:async function(type,onSuccess,onFailure){
        try {
            await Object(__WEBPACK_IMPORTED_MODULE_4__irtcScript__["h" /* mute */])(localPublicationId,type,this.irtcClient);
            onSuccess();
        }catch (error) {
            onFailure(error);
        }
    },

    unmute:async function(type,onSuccess,onFailure){
        try {
            await Object(__WEBPACK_IMPORTED_MODULE_4__irtcScript__["m" /* unmute */])(localPublicationId,type,this.irtcClient);
            onSuccess();
        }catch (error) {
            onFailure(error);
        }
    },

    onRequestScreenShare(ack){
      Object(__WEBPACK_IMPORTED_MODULE_1__ccs_client__["r" /* receiveRequestScreenShareMessage */])(this.ccsClient,(resp)=>{
          ack(resp);
      })
    },
}





/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mediaOptionsIsValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(2);


const defaultMediaOptions = {
    cameraStreamAudioConstraints:{
        deviceId:undefined,
        source:'mic',
    },
    cameraStreamVideoConstraints:{
        deviceId:undefined,
        frameRate:15,
        resolution:{
            width:640,
            height:480
        },
        source:'camera',
    },
    cameraPublishOptions:{
        audio:[{
            codec:{
                name:'opus'
            },
            maxBitrate:64
        }],
        video:[
            {
                codec:{
                    name:'vp8'
                },
                maxBitrate:1024
            },
            {
                codec:{
                    name:'h264'
                },
                maxBitrate:1024
            }
        ]
    },
    screenStreamAudioConstraints:{
        source:'screen-cast',
    },
    screenStreamVideoConstraints:{
        frameRate:15,
        resolution:{
            width:1280,
            height:720
        },
        source:'screen-cast',
    },
    screenPublishOptions:{
        audio:[{
            codec:{
                name:'opus'
            },
            maxBitrate:64
        }],
        video:[
            {
                codec:{
                    name:'vp8'
                },
                maxBitrate:1024
            },
            {
                codec:{
                    name:'h264'
                },
                maxBitrate:1024
            }
        ]
    },
};
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultMediaOptions;


const defaultLocalStreamParameter = {
    audioConstraints:{
        deviceId:undefined,
        source:'mic',
    },
    videoConstraints:{
        deviceId:undefined,
        frameRate:15,
        resolution:{
            width:640,
            height:480
        },
        source:'camera',
    },
    publishOptions:{
        audio:[{
            codec:{
                name:'opus'
            }
        }],
        video:[
            {
                codec:{
                    name:'vp8'
                },
                maxBitrate:1024
            },
            {
                codec:{
                    name:'h264'
                },
                maxBitrate:1024
            }
        ]
    }
};
/* unused harmony export defaultLocalStreamParameter */


const defaultScreenStreamParameter = {
    audioConstraints:{
        source:'screen-cast',
    },
    videoConstraints:{
        frameRate:15,
        resolution:{
            width:1280,
            height:720
        },
        source:'screen-cast',
    },
    publishOptions:{
        audio:[{
            codec:{
                name:'opus'
            }
        }],
        video:[
            {
                codec:{
                    name:'vp8'
                },
                maxBitrate:1024
            },
            {
                codec:{
                    name:'h264'
                },
                maxBitrate:1024
            }
        ]
    }
};
/* unused harmony export defaultScreenStreamParameter */



function mediaOptionsIsValid(mediaOptions) {
    if (typeof mediaOptions === 'object') {
        if (!mediaOptions.hasOwnProperty('cameraStreamAudioConstraints')) {
            return new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* IvcsError */]('105', 'cameraStreamAudioConstraints is empty');
        }
        if (!mediaOptions.hasOwnProperty('cameraStreamVideoConstraints')) {
            return new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* IvcsError */]('105', 'cameraStreamVideoConstraints is empty');
        }
        if (!mediaOptions.hasOwnProperty('cameraPublishOptions')) {
            return new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* IvcsError */]('105', 'cameraPublishOptions is empty');
        }
        if (!mediaOptions.hasOwnProperty('screenStreamVideoConstraints')) {
            return new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* IvcsError */]('105', 'screenStreamVideoConstraints is empty');
        }
        if (!mediaOptions.hasOwnProperty('screenPublishOptions')) {
            return new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* IvcsError */]('105', 'screenPublishOptions is empty');
        }
        return 'ok';
    }else{
        return new __WEBPACK_IMPORTED_MODULE_0__error__["a" /* IvcsError */]('105', 'mediaOptions is not object');
    }
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_agent__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_client__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "agent", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_agent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_client__["a"]; });







/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_logger__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ams_client__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tool__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__irtcScript__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ccs_client__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_const__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_error__ = __webpack_require__(2);















/*呼叫相关事件*/
const CallEvent = {
     onRing:'onRing',
     stopRinging:'stopRinging',
}

/*接听的振铃信息，包括sessionId和ccsUrl*/
var ringData = {};

/*当前这个session会话中的数据，目前有加入方clientId,sessionId,roomToken,roomId,members等信息*/
var sessionData = {};

var associatedUrls = {};

const screenStreamLabel = 'screen';

const recordScreenStreamLabel = 'recordScreen';

const miniType = 'mini';

var joinResult = {};

let localPublicationId = null;

const agent = {

      init: async function (backendUrl, name, password, org, mediaOptions = __WEBPACK_IMPORTED_MODULE_7__base_const__["a" /* defaultMediaOptions */], onSuccess, onFailure) {
          if (backendUrl === undefined || backendUrl === "") {
              __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('backendUrl is empty');
              let error = new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1000', 'backendUrl is empty');
              onFailure(error);
              return;
          }
          if (name === undefined || name === "") {
              __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('name is empty');
              let error = new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1000', 'name is empty');
              onFailure(error);
              return;
          }
          if (password === undefined || password === "") {
              __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('password is empty');
              let error = new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1000', 'password is empty');
              onFailure(error);
              return;
          }
          if (org === undefined || org === "") {
              __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('organization is empty');
              let error = new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1000', 'organization is empty');
              onFailure(error);
              return;
          }
          if (Object(__WEBPACK_IMPORTED_MODULE_7__base_const__["b" /* mediaOptionsIsValid */])(mediaOptions) != 'ok'){
              onFailure(Object(__WEBPACK_IMPORTED_MODULE_7__base_const__["b" /* mediaOptionsIsValid */])(mediaOptions));
              return;
          }
          this.mediaOptions = Object(__WEBPACK_IMPORTED_MODULE_4__tool__["a" /* deepCopy */])(mediaOptions);
          try {
              let login = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["b" /* agentLogin */])(backendUrl, name, password, org);
              let accessToken = login.data.data.accessToken;
              associatedUrls = login.data.data.urls;
              let amsUrl = associatedUrls.amsurl;
              let groupList = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["d" /* getAgentGroups */])(backendUrl,accessToken);
              this.amsClient = new __WEBPACK_IMPORTED_MODULE_1__ams_client__["a" /* AMSClient */]();
              let amsConnect = await Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["d" /* connectAmsService */])(this.amsClient,amsUrl,accessToken);
              Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["b" /* amsErrorEvent */])((info) => {
                  Object(__WEBPACK_IMPORTED_MODULE_3__base_event__["b" /* dispatchEvent */])(__WEBPACK_IMPORTED_MODULE_3__base_event__["e" /* systemErrorName */], __WEBPACK_IMPORTED_MODULE_3__base_event__["d" /* systemErrorCode */].amsSocketIoError, info);
              });
              onSuccess({
                  token: accessToken,
                  groupsList: groupList,
                  rtmpServer: associatedUrls.rtmpServer,
                  backendUrl: associatedUrls.backendurl
              });
          }catch (error) {
              onFailure(error);
          }
      },

      //登录
      login:function (onSuccess,onFailure) {
          let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["h" /* validateAmsClient */])(this.amsClient);
          if (isValid != 'ok'){
              onFailure(isValid);
              return;
          }
          this.amsClient.login(null,(status,resp)=>{
              if (status === 'ok'){
                  this.amsClient.ticket = resp.ticket;
                  let refreshTicketTime = resp.refersh_ticket_time;
                  Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["f" /* refreshAmsTicket */])(this.amsClient,refreshTicketTime);
                  onSuccess(resp);
              }else{
                  __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('you need call this method : "init"');
                  onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1001',resp));
              }
          })
      },


       //登出
       logout:function (onSuccess,onFailure) {
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["h" /* validateAmsClient */])(this.amsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
           this.amsClient.logout((status,resp)=>{
                  if (status === 'ok'){
                      onSuccess();
                  }else{
                      onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1002',resp));
                  }
               Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["g" /* releaseAmsClient */])(this.amsClient);
           })
       },

       checkIn(groups,onSuccess,onFailure){
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["h" /* validateAmsClient */])(this.amsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
           this.amsClient.checkIn(groups,(status,resp)=>{
               if (status === 'ok'){
                   onSuccess();
               }else{
                   onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1003',resp));
               }
           });
       },

       checkOut(groups,onSuccess,onFailure){
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["h" /* validateAmsClient */])(this.amsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
           this.amsClient.checkOut(groups,(status,resp)=>{
               if (status === 'ok'){
                   onSuccess();
               }else{
                   onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1004',resp));
               }
           });
       },

       ready:function(onSuccess,onFailure){
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["h" /* validateAmsClient */])(this.amsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
            this.amsClient.ready((status,resp)=>{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('ready result,',status,resp);
                if (status === 'ok'){
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('agent ready onSuccess',resp,new Date());
                    onSuccess();
                } else{
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('agent ready error',resp,new Date());
                    onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1005',resp));
                }
            })
        },

       unReady:function(onSuccess,onFailure){
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["h" /* validateAmsClient */])(this.amsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
           this.amsClient.unReady( (status,resp)=> {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('unReady result,',status,resp);
                if (status === 'ok'){
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('agent unReady success',resp,new Date());
                    onSuccess();
                } else{
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('agent unReady error',resp,new Date());
                    onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1006',resp));
                }
            })
        },

       /*小休*/
       otherWork:function(reason,onSuccess,onFailure){
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["h" /* validateAmsClient */])(this.amsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
           this.amsClient.otherWork(reason,(status,resp)=>{
                  if (status === 'ok'){
                      onSuccess();
                  }else{
                      onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1007',resp));
                  }
           })
        },

       /*会话中预约*/
        appoint:function(reason,onSuccess,onFailure){
            let isValid = Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["h" /* validateAmsClient */])(this.amsClient);
            if (isValid != 'ok'){
                onFailure(isValid);
            }
            this.amsClient.appoint(reason,(status,resp)=>{
                if (status === 'ok'){
                    onSuccess();
                }else{
                    onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1008',resp));
                }
            })
        },

        /*triggered when there is a call response*/
        onRing:function(ack){
             this.amsClient.onRing(function (data) {
                 __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('ring data',data,new Date());
                 ringData = data;
                 ack(data);
             })
        },

        /*triggered when the call is cancelled*/
        onCancelRing:function(ack){
            this.amsClient.onStopRinging(function (reason) {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('stop ring',reason,new Date());
                ringData = {};
                ack(reason);
            })
        },

        onDrop:function(ack){
            let dropMessage = {
               drop:{
                   code:401,
                   message:'connect forced termination drop'
               },
               error:{
                   code:402,
                   message:'socket io connect error'
               },
               replace:{
                   code:403,
                   message:'other person login,the current account login is invalid'
               }
            };
            this.amsClient.onDrop( ()=> {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ams connect forced termination drop',new Date());
                Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["g" /* releaseAmsClient */])(this.amsClient);
                ack(dropMessage.drop);
            })
            this.amsClient.onError(()=> {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('ams connect error,need to stop current business processing',new Date());
                Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["g" /* releaseAmsClient */])(this.amsClient);
                ack(dropMessage.error);
            })
            this.amsClient.onReplaced(()=> {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('other person login,the current account login is invalid, agent that are currently logged in need to be notified, and login again',new Date());
                Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["g" /* releaseAmsClient */])(this.amsClient);
                ack(dropMessage.replace);
            })
        },

        //answer
        answer: async function (videoLabel,customizedMediaStreams, onSuccess, onFailure) {
            if (!videoLabel) {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`The videoLabel is used to tag the current role information`);
                onFailure(`videoLabel is a required parameter`);
                return;
            }
            if (!ringData.url) {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`no ring or ring stop,${new Date()}`);
                onFailure('no ring or ring stop');
                return;
            }
            if (customizedMediaStreams){
                if(!Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["e" /* isEffectiveMediaStreams */])(customizedMediaStreams)){
                    onFailure('customized MediaStreams is invalid');
                    return;
                }
            }
            try {
                let ccsUrl = ringData.url;
                let sessionId = ringData.sessionId;
                let customerGroup = ringData.group;
                let accessToken = this.amsClient.accessToken;
                let joinData = {
                    media: 'video',
                    userData: {
                        skill: '',
                        specifyAgent: ''
                    },
                    sessionId: sessionId,
                    clientInfo: Object(__WEBPACK_IMPORTED_MODULE_4__tool__["b" /* getBrowserClientInfo */])()
                };
                let backendUrl = associatedUrls.backendurl;
                let turnServerUrl = associatedUrls.turnserverUrl;
                let turnServerCredential = associatedUrls.turnserverCredential;
                let turnServerUsername = associatedUrls.turnserverUsername;
                this.irtcClient = new __WEBPACK_IMPORTED_MODULE_5__irtcScript__["b" /* IRtcClient */](turnServerUrl,turnServerCredential,turnServerUsername);
                let answerCallResult = await Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["c" /* answerCall */])(this.amsClient);
                this.ccsClient = new __WEBPACK_IMPORTED_MODULE_6__ccs_client__["a" /* CCSClient */]();
                let connectCcsResult = await Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["c" /* connect */])(this.ccsClient,ccsUrl,accessToken);
                Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["b" /* ccsErrorEvent */])((info)=>{
                    Object(__WEBPACK_IMPORTED_MODULE_3__base_event__["b" /* dispatchEvent */])(__WEBPACK_IMPORTED_MODULE_3__base_event__["e" /* systemErrorName */],__WEBPACK_IMPORTED_MODULE_3__base_event__["d" /* systemErrorCode */].ccsSocketIoError,info);
                });
                let customerSendMessage = [];
                this.onTextMessage((message)=>{
                    customerSendMessage.push(message);
                });
                joinResult = await Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["f" /* joinSession */])(this.ccsClient,joinData);
                let roomInfo = await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["f" /* joinRoom */])(this.irtcClient,joinResult.roomId,joinResult.roomToken);
                let streamOptions = {
                    audioConstraints:this.mediaOptions.cameraStreamAudioConstraints,
                    videoConstraints:this.mediaOptions.cameraStreamVideoConstraints
                };
                let localStream = customizedMediaStreams?customizedMediaStreams:await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["c" /* createCameraMicStream */])(this.irtcClient,streamOptions,videoLabel);
                let publication = await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["i" /* publishStream */])(this.irtcClient,localStream,this.mediaOptions.cameraPublishOptions);
                joinResult.customerClientType = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["d" /* getCustomerClientInfoWithMembers */])(joinResult.members);
                if(joinResult.customerClientType == miniType){
                    let streamOutsUrl = associatedUrls.rtmpServer + '/' + joinResult.clientId +  joinResult.sessionId;
                    let streamOuts = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["h" /* streamOutsToMediaServer */])(backendUrl,joinResult.roomId,publication.id,publication.id,streamOutsUrl);
                }
                let addStreamToMix =  await Object(__WEBPACK_IMPORTED_MODULE_2__api__["a" /* addStreamToMixStream */])(backendUrl,joinResult.roomId,publication.id,accessToken);
                let mixStreamId = this.irtcClient.mixStreamId;
                let recordId = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["f" /* recordStream */])(backendUrl,joinResult.roomId,mixStreamId,mixStreamId,accessToken);
                let formTemplates = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["e" /* getFormTemplatesWithGroupsId */])(backendUrl,customerGroup,accessToken);
                let readyToTalkResult = await Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["q" /* readyToTalk */])(this.ccsClient);
                localPublicationId = publication.id;
                onSuccess({
                    formTemplates:formTemplates,
                    sessionId:sessionId,
                    sessionData:joinResult,
                    customerSendMessage:customerSendMessage,
                    customerClientType:joinResult.customerClientType
                });
                Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["n" /* zmsAddEventListener */])(this.irtcClient,publication);
                //warning:recordings of mix streams need to be placed in the background
                addEventListener(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["a" /* IRTC_CUSTOMEREVENT */].STREAMADD,(info)=>{
                    let stream = info.detail.data;
                    let streamId = stream.id;
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('add stream',stream,'to mix');
                    Object(__WEBPACK_IMPORTED_MODULE_2__api__["a" /* addStreamToMixStream */])(backendUrl,joinResult.roomId,streamId,accessToken);
                });
                this.ccsClient.members = joinResult.members;
                Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["z" /* sessionMemberJoinQuitEvent */])(this.ccsClient,()=>{
                    //customer hangup,the room has been removed and the CCS connection has been disconnected
                   Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["o" /* zmsRemoveEventListener */])(this.irtcClient);
                   this.ccsClient = null;
                   this.irtcClient = null;
                });
            }catch (error) {
                onFailure(error);
            }
        },

       reject:function(onSuccess,onFailure){
            this.amsClient.rejectCall(function (status,resp) {
                if (status === 'ok'){
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('reject call success',resp,new Date());
                    onSuccess();
                } else{
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].warning('reject call failed',resp,new Date());
                    onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1009',resp));
                }
            })
        },

       hangup:async function (onSuccess,onFailure) {
            this.irtcClient?Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["o" /* zmsRemoveEventListener */])(this.irtcClient):undefined;
            Promise.all([
                Object(__WEBPACK_IMPORTED_MODULE_1__ams_client__["e" /* hangupCall */])(this.amsClient),
                Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["p" /* quitSession */])(this.ccsClient),
                Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["g" /* leaveRoom */])(this.irtcClient)
            ]).then(value => {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('agent hangup success',value);
                onSuccess(value);
            },error=>{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('agent hangup error',error);
                onFailure(error);
            });
        },

       addEventListener(eventName,ack){
            let event = (data) => {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`event with name,${eventName},data,${data.detail},${new Date()}`);
                ack(data.detail);
            };
            window.addEventListener(eventName,event);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`agent add event listener with Name,${eventName}`);
            return event;
        },

       removeEventListener(eventName,eventImplementationFunction){
            window.removeEventListener(eventName,eventImplementationFunction);
            __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`agent remove event listener with Name,${eventName},with implementation function,${eventImplementationFunction}`);
        },

       renderStream:async function(streamLabel,videoId,onSuccess,onFailure){
            Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["j" /* renderRemoteStream */])(this.irtcClient,streamLabel,videoId,(resp)=>{
                onSuccess(resp);
            },(error)=>{
                onFailure(error);
            });
        },

       screenShare:async function(onSuccess,onFailure){
            try {
                let streamOptions = {
                    audioConstraints:this.mediaOptions.screenStreamAudioConstraints,
                    videoConstraints:this.mediaOptions.screenStreamVideoConstraints
                };
                let screenStream = await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["d" /* createScreenStream */])(this.irtcClient,streamOptions,screenStreamLabel);
                let publishOptions = Object(__WEBPACK_IMPORTED_MODULE_4__tool__["a" /* deepCopy */])(this.mediaOptions.screenPublishOptions);
                screenStream.mediaStream.getAudioTracks().length > 0 ? (publishOptions.audio ? 1:publishOptions.audio = this.mediaOptions.screenPublishOptions.audio) : publishOptions.audio = false;
                screenStream.mediaStream.getVideoTracks().length > 0 ? (publishOptions.video ? 1:publishOptions.video = this.mediaOptions.screenPublishOptions.video) : publishOptions.video = false;
                let publication = await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["i" /* publishStream */])(this.irtcClient,screenStream,publishOptions);
                if(joinResult.customerClientType == miniType){
                    let backendUrl = associatedUrls.backendurl;
                    let streamOutsUrl = associatedUrls.rtmpServer + '/screen' + joinResult.sessionId;
                    let audioId = screenStream.mediaStream.getAudioTracks().length > 0 ? publication.id:null;
                    let videoId = screenStream.mediaStream.getVideoTracks().length > 0 ? publication.id:null;
                    let streamOuts = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["h" /* streamOutsToMediaServer */])(backendUrl,joinResult.roomId,audioId,videoId,streamOutsUrl);
                }
                screenStream.mediaStream.getVideoTracks()[0].onended = function () {
                    Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["k" /* stopPublish */])(publication);
                    Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["l" /* stopStream */])(screenStream);
                };
                onSuccess(publication.id);
            }catch (error) {
                onFailure(error);
            }
        },

       startRecordScreen:async function(onSuccess,onFailure,onStop){
            try {
                let streamOptions = {
                    audioConstraints:this.mediaOptions.screenStreamAudioConstraints,
                    videoConstraints:this.mediaOptions.screenStreamVideoConstraints,
                    publishOptions:this.mediaOptions.screenPublishOptions
                };
                let screenStream = await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["d" /* createScreenStream */])(this.irtcClient,streamOptions,recordScreenStreamLabel);
                let publication = await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["i" /* publishStream */])(this.irtcClient,screenStream,streamOptions.publishOptions);
                let accessToken = this.amsClient.accessToken;
                let backendUrl = associatedUrls.backendurl;
                let audioId = (screenStream.mediaStream.getAudioTracks()&&screenStream.mediaStream.getAudioTracks().length>0)?publication.id:null;
                let videoId = (screenStream.mediaStream.getVideoTracks()&&screenStream.mediaStream.getVideoTracks().length>0)?publication.id:null;
                let recordId = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["f" /* recordStream */])(backendUrl,joinResult.roomId,audioId,videoId,accessToken);
                screenStream.mediaStream.getVideoTracks()[0].onended = async () => {
                    Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["k" /* stopPublish */])(publication);
                    Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["l" /* stopStream */])(screenStream);
                    onStop();
                };
                onSuccess({
                    publicationId:publication.id,
                    recordId:recordId
                });
            }catch (error) {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('start record screen error',error);
                onFailure(error);
            }
        },

       stopRecordScreen:async function(publicationId,recordId,onSuccess,onFailure){
            try {
                let accessToken = this.amsClient.accessToken;
                let backendUrl = associatedUrls.backendurl;
                let result = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["g" /* stopRecordStream */])(backendUrl,joinResult.roomId,recordId,accessToken,true);
                this.stopScreenShare(publicationId,(resp)=>{
                },(error)=>{
                });
                onSuccess(result);
            }catch (error) {
                onFailure(error);
            }
        },

       stopScreenShare:async function(publicationId,onSuccess,onFailure){
            let flag = false;
            for (let i = 0; i < this.irtcClient.publicationArr.length; i++) {
                let publication = this.irtcClient.publicationArr[i];
                if (publication.id === publicationId){
                    flag = true;
                    Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["k" /* stopPublish */])(publication);
                    for (let j = 0; j < this.irtcClient.createStreams ; j++) {
                        let stream = this.irtcClient.createStreams[j];
                        if (stream.id === publication.originId){
                            Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["l" /* stopStream */])(stream);
                        }
                    }
                }
            }
            if (flag){
                onSuccess();
            } else{
                onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1010','publicationId is invalid'))
            }
        },

       inviteOther:async function(inviteData,onSuccess,onFailure){
            if (!inviteData.skill){
                inviteData.skill = "";
            }
            if (!inviteData.agentId){
                inviteData.agentId = '*';
            }
            await Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["e" /* inviteOtherAgent */])(this.ccsClient,inviteData).catch((error)=>{
                onFailure(error);
            });
            Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["m" /* onInvitationProgress */])(this.ccsClient,(resp)=>{
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('invite other agent progress',resp,new Date());
                let code = resp.code;
                if (code === '402'|| code === '403'|| code === '405'){
                    onSuccess(resp);
                }else if(code === '401'||code==='404'){
                    onFailure(resp);
                }
            });
        },

       transfer:async function(inviteData,waitOtherJoinSession = false,onSuccess,onFailure){
            if (!inviteData.skill){
                inviteData.skill = "";
            }
            if (!inviteData.agentId){
                inviteData.agentId = '*';
            }
            await Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["e" /* inviteOtherAgent */])(this.ccsClient,inviteData).catch((error)=>{
                onFailure(error);
            });
            Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["m" /* onInvitationProgress */])(this.ccsClient, async (resp) => {
                __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info('transfer agent progress', resp, new Date());
                let code = resp.code;
                if (code === '401' || code === '404') {
                    onFailure(resp);
                } else {
                    try {
                        await Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["h" /* notifyTransference */])(this.ccsClient);
                        if (code === '402') {
                            if (!waitOtherJoinSession) {
                                this.hangup((resp) => {
                                    onSuccess();
                                }, (error) => {
                                    onFailure(error);
                                });
                            }else{
                                onFailure(resp);
                            }
                        } else if (code === '403' || code === '405') {
                            if (waitOtherJoinSession) {
                                this.hangup((resp) => {
                                    onSuccess();
                                }, (error) => {
                                    onFailure(error);
                                });
                            }else{
                                onSuccess();
                            }
                        }
                    } catch (error) {
                        onFailure(error);
                    }
                }
            });
        },

       mute:async function(type,onSuccess,onFailure){
            try {
                await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["h" /* mute */])(localPublicationId,type,this.irtcClient);
                onSuccess();
            }catch (error) {
                onFailure(error);
            }
       },

       unmute:async function(type,onSuccess,onFailure){
           try {
               await Object(__WEBPACK_IMPORTED_MODULE_5__irtcScript__["m" /* unmute */])(localPublicationId,type,this.irtcClient);
               onSuccess();
           }catch (error) {
               onFailure(error);
           }
       },

       photoGuideBox:function(onSuccess,onFailure){
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
          this.ccsClient.photoGuideBox(false,'customers',(status,resp,msgId)=>{
                if (status === 'ok'){
                    onSuccess();
                }else{
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send photo guide box message failed,${resp},msgId${msgId},${new Date()}`);
                    onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1011',resp));
                }
           });
        },

       requestScreenSnapshot:function(onSuccess,onFailure){
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
            this.ccsClient.screenSnapshot(false,'customers',(status,resp,msgId)=>{
                if (status === 'ok'){
                    onSuccess();
                }else{
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send screenSnapshot message failed,${resp},msgId${msgId},${new Date()}`);
                    onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1012',resp));
                }
            });
        },

       requestHandSignature:function (onSuccess,onFailure) {
            let isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
            if (isValid != 'ok'){
                   onFailure(isValid);
               }
            //invite customer start handSign
            this.ccsClient.handSign(false,'start','customers',(status,resp,msgId)=>{
                if (status === 'ok'){
                    onSuccess();
                }else{
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send handSign message failed,${resp},msgId${msgId},${new Date()}`);
                    onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1013',resp));
                }
            });
        },

       onHandSignature(ack){
            this.ccsClient.onHandSignature((data)=>{
                ack(data);
            })
        },

       shareResource:async function (type,formData,toRole='customers',onSuccess,onFailure) {
            let supportType = ['doc', 'pic', 'video', 'audio', 'page', 'paper'];
            if (supportType.indexOf(type) === -1){
                let error = new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('2001',`type is invalid,only support 'doc','pic', 'video', 'audio', 'page', 'paper'`);
                onFailure(error);
                return;
            }
            let isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
            if (isValid != 'ok'){
               onFailure(isValid);
            }
            try {
                var url = associatedUrls.uploadUrl + '/v1/upload';
                let uploadResult = await Object(__WEBPACK_IMPORTED_MODULE_2__api__["i" /* uploadFile */])(url,formData);
                this.ccsClient.shareResource(type,uploadResult.url,uploadResult.originalname,toRole,(status,resp,msgId)=>{
                    if (status === 'ok'){
                        onSuccess(uploadResult);
                    }else{
                        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send shareResource message failed,${resp},msgId${msgId},${new Date()}`);
                        onFailure(resp);
                    }
                });
            }catch (error) {
                onFailure(error);
            }
        },

       shareResourceWithUrl:async function (type,url,toRole='customers',onSuccess,onFailure) {
            let supportType = ['doc', 'pic', 'video', 'audio', 'page', 'paper'];
            if (supportType.indexOf(type) === -1){
                let error = new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('2001',`type is invalid,only support 'doc','pic', 'video', 'audio', 'page', 'paper'`);
                onFailure(error);
                return;
            }
            let isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
            if (isValid != 'ok'){
               onFailure(isValid);
            }
            try {
                this.ccsClient.shareResource(type,url,'',toRole,(status,resp,msgId)=>{
                    if (status === 'ok'){
                        onSuccess();
                    }else{
                        __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send shareResource message failed,${resp},msgId${msgId},${new Date()}`);
                        onFailure(resp);
                    }
                });
            }catch (error) {
                onFailure(error);
            }
        },

       sendTextMessage:function (message,toRole='customers',onSuccess,onFailure) {
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
            this.ccsClient.sendTextMessage(message,toRole,(status,resp,msgId)=>{
                if (status === 'ok'){
                    onSuccess();
                }else{
                    __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send text message:${message} failed,reason:${resp},msgId${msgId},${new Date()}`);
                    onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1014',resp));
                }
            })
        },

       onTextMessage(ack){
            this.ccsClient.onTextMessage((data)=>{
                 ack(data);
            })
        },

       onResourceMessage(ack){
            this.ccsClient.onSharedResource((data)=>{
                    ack(data);
            })
        },

       sendForm(formTemplate,toRole = 'customers',onSuccess,onFailure){
           let isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
           if (isValid != 'ok'){
               onFailure(isValid);
           }
           this.ccsClient.sendForm(formTemplate,toRole,(status,resp,msgId)=>{
               if (status === 'ok'){
                   onSuccess();
               }else{
                   __WEBPACK_IMPORTED_MODULE_0__base_logger__["a" /* default */].info(`send form template failed,reason:${resp},msgId${msgId},${new Date()}`);
                   onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1015',resp));
               }
           })
       },

       sendCustomMessage(data,toRole = 'customers',onSuccess,onFailure){
          let isValid = Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["B" /* validateCcsClient */])(this.ccsClient);
          if (isValid != 'ok'){
              onFailure(isValid);
          }
          Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["w" /* sendCustomMessage */])(this.ccsClient,data,toRole,(resp)=>{
                  onSuccess(resp);
                  },(error)=>{
                  onFailure(new __WEBPACK_IMPORTED_MODULE_8__base_error__["a" /* IvcsError */]('1016',error));
          });
       },

       onCustomMessage(ack){
            Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["i" /* onCustomMessage */])(this.ccsClient,(data)=>{
                ack(data);
            })
       },

       viewScreen(toRole = 'customers',onSuccess,onFailure){
            Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["v" /* requestScreenShareWithOthers */])(this.ccsClient,toRole,(resp)=>{
                onSuccess(resp);
            },(error)=>{
                onFailure(error);
            });
       },

       releaseScreen(toRole = 'customers',onSuccess,onFailure){
           Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["u" /* releaseScreenShare */])(this.ccsClient,toRole,(resp)=>{
               onSuccess(resp);
           },(error)=>{
               onFailure(error);
           });
       },

       markScreen(toRole = 'customers',x,y,onSuccess,onFailure){
           let data = {
               x:x,
               y:y
           };
           Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["g" /* markScreen */])(this.ccsClient,data,toRole,(resp)=>{
               onSuccess(resp);
           },(error)=>{
               onFailure(error);
           });
       },

       onDeviceScreenSize(ack){
         Object(__WEBPACK_IMPORTED_MODULE_6__ccs_client__["j" /* onDeviceScreenSize */])(this.ccsClient,(resp)=>{
             ack(resp);
         })
       }
}





/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(8);
var Axios = __webpack_require__(24);
var mergeConfig = __webpack_require__(14);
var defaults = __webpack_require__(11);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(15);
axios.CancelToken = __webpack_require__(38);
axios.isCancel = __webpack_require__(10);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(39);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(9);
var InterceptorManager = __webpack_require__(25);
var dispatchRequest = __webpack_require__(26);
var mergeConfig = __webpack_require__(14);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(27);
var isCancel = __webpack_require__(10);
var defaults = __webpack_require__(11);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(13);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(33);
var combineURLs = __webpack_require__(34);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(15);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ })
/******/ ]);
});