/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/Deferred.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/Deferred.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/assert.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/assert.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheNames.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheNames.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in globalThis)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/timeout.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/timeout.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/waitUntil.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/waitUntil.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js ***!
  \*************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.6.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/copyResponse.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/copyResponse.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/messages/messages.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/messages/messages.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheController.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheController.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheRoute.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_types.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_types.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js ***!
  \*************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.6.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/addPlugins.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/addPlugins.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/addRoute.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/addRoute.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/matchPrecache.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/matchPrecache.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/precache.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/precache.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/precacheAndRoute.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/RegExpRoute.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/RegExpRoute.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/Route.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/Route.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/Router.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/Router.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js ***!
  \*******************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.6.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/registerRoute.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/registerRoute.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/constants.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/constants.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/normalizeHandler.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@6.6.1/node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/Strategy.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/Strategy.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/StrategyHandler.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/StrategyHandler.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@6.6.1/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/_version.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@6.6.1/node_modules/workbox-strategies/_version.js ***!
  \*************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.6.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/index.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/index.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   PrecacheFallbackPlugin: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   PrecacheRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   PrecacheStrategy: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   addPlugins: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   addRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   cleanupOutdatedCaches: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   createHandlerBoundToURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   getCacheKeyForURL: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   matchPrecache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   precache: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   precacheAndRoute: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/index.js");


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@3.0.1_eslint@8.53.0_react-dom@18.2.0_react@18.2.0_typescript@5.2.2/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \********************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@6.6.1/node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"0633ab638cca6ce385ee31b5dcc55b20","url":"404.html"},{"revision":"50842d366152643b7194e291dd02a377","url":"assets/css/styles.b3a3600a.css"},{"revision":"7040ae59b12ab064a65d889a46a138ed","url":"assets/js/0014f2e3.bde3c34b.js"},{"revision":"9da75c94dd762c487cc0cc046a7cd201","url":"assets/js/0035e275.bf8f230e.js"},{"revision":"99339e91f775ecc8fdc600a51674c2fa","url":"assets/js/0042287f.2d365f5f.js"},{"revision":"a572b18459b355d5e37c330c876c39e4","url":"assets/js/0055ae99.60911490.js"},{"revision":"aba3a2b3e5598d78906d632b749ec7bf","url":"assets/js/00fb4336.97a59018.js"},{"revision":"25c1e9e4357a97af63a27199f271c270","url":"assets/js/00ffc4be.62da7a7c.js"},{"revision":"a890c041e5a32e5e8a22af41ddc046b0","url":"assets/js/05d10116.e3ab952c.js"},{"revision":"a3233b20237755887fedf33e72002f46","url":"assets/js/05d10be6.f9fadb7e.js"},{"revision":"153b463e8a3206f7eb91e7fb830bbbf5","url":"assets/js/06d86785.b772c0c1.js"},{"revision":"c403183747648be1b46786fe7f0a54a6","url":"assets/js/07ac9507.80361dc5.js"},{"revision":"e9a00be6fe4e73ad778b968ae708f675","url":"assets/js/08e8f103.f4611a81.js"},{"revision":"dfc7294cb104aa6491f2d4233a3a5648","url":"assets/js/0a863ded.adfcbb21.js"},{"revision":"f9505af1248935705661085bce241d8d","url":"assets/js/0b4d5ba7.bdb01b27.js"},{"revision":"b584062f3efdd60f8777c075e6ea00aa","url":"assets/js/0bab7aa4.a1105371.js"},{"revision":"4de0f0502ecaf81abd6211ad0ab4bef5","url":"assets/js/0c1a9b43.b828dd40.js"},{"revision":"eb55add2ce48edbf07092dd6cc89089b","url":"assets/js/0d5abc34.4810afe4.js"},{"revision":"267a57ee1ad815088765ab7142dce288","url":"assets/js/0dfa3724.926f8623.js"},{"revision":"cb8ccc23122d5794e420e3bc71bbb671","url":"assets/js/0dfb7804.b183ad51.js"},{"revision":"979c5445fa914f0c5433ae6e15e8bb63","url":"assets/js/0e675381.4278797f.js"},{"revision":"885b734a5d5c49b46dbe40b0675554af","url":"assets/js/0ec2a0b0.40673979.js"},{"revision":"7e97c9cfde7f33e063c5678606904d73","url":"assets/js/0fb07bd5.04cbdfcf.js"},{"revision":"62f9b0904ea070741e71bbe738c483df","url":"assets/js/12570b78.7b6c31e1.js"},{"revision":"406ac8dd84a67a29997be31a9c3bd234","url":"assets/js/1298.180f8389.js"},{"revision":"0cd6fe577107ebdf31578cec47cd9012","url":"assets/js/12c97a1c.71402d41.js"},{"revision":"6dab80d1373141a3374c6a8a1350efc5","url":"assets/js/13bbecf7.372941e3.js"},{"revision":"691e3802487417dcb7ae723b3f58dea3","url":"assets/js/13ec1e59.777416a8.js"},{"revision":"1d871edad34a31854dbd8f4352f0409f","url":"assets/js/14eb3368.66942097.js"},{"revision":"2b6969edc23fdb7369f814fecde91c8f","url":"assets/js/1584a71e.a450d6df.js"},{"revision":"607805a283b22e30667e5b92c701e6ce","url":"assets/js/160513e6.615d5f72.js"},{"revision":"c79fe2d5904bb688a9e7e5d073c8b086","url":"assets/js/1675e895.83034cd8.js"},{"revision":"8ab32d3ffdfa233aff14d18d593b0c20","url":"assets/js/17896441.fa493e2e.js"},{"revision":"0214594ad99a34502093a1a5dc68513d","url":"assets/js/196ca7f2.503a07f6.js"},{"revision":"546715fe5c17b161eeed8f6f77ba3525","url":"assets/js/1a591ed8.60097e1e.js"},{"revision":"543296455ca4b81709d5cdf273b86da4","url":"assets/js/1bd3ddb7.d11f6d80.js"},{"revision":"84091deb00cc3ad3aabefb75ae003ca9","url":"assets/js/1bda19f4.92122ecf.js"},{"revision":"2f5341c66667ae3c382fba49123a91b1","url":"assets/js/1c5fcc5b.9103a042.js"},{"revision":"9502e8a2f7c1d3f49b928b0bb521a63e","url":"assets/js/1cafaec8.f071d57f.js"},{"revision":"4a327f10c8d772c6775939f4eb636066","url":"assets/js/1d67b61b.c6ce90cd.js"},{"revision":"370bb07835bda6452bbb76e74ac2482e","url":"assets/js/1df93b7f.d5fe5116.js"},{"revision":"f27c45babb8bcf59255026a25fe06963","url":"assets/js/1ecebb43.3ad49ec7.js"},{"revision":"25d97da668e0ea15cdcfa5a821b48c08","url":"assets/js/1ef3786a.3281609c.js"},{"revision":"f866cd61d065d777229006739374a8f3","url":"assets/js/1f391b9e.0329b813.js"},{"revision":"b76d336908754c35d6b488a4493dd2e4","url":"assets/js/211.74692373.js"},{"revision":"e72b27e7817e2a7bee01009bc17be30c","url":"assets/js/21518505.b8fae4e8.js"},{"revision":"f73a88a5d438ccddd9dc38b6ce41db5a","url":"assets/js/21cf50b3.862e17b3.js"},{"revision":"5dc90f41d7e6bed76ab5210ab85e2483","url":"assets/js/24f838f6.e2530eb2.js"},{"revision":"4d12fbac6c77b31053cdab4204227f4f","url":"assets/js/25ea0b6e.6d2ea879.js"},{"revision":"2c143caba64f3e7442e0fa74a3aa7c6c","url":"assets/js/2656.9ea2a092.js"},{"revision":"10f0d434ebb04c2d95fb9cf14f657456","url":"assets/js/26b500ba.7022a866.js"},{"revision":"b13e701a6bbf7a5e828dbf12113f5c65","url":"assets/js/26e692e3.e330d881.js"},{"revision":"c1e15c3b62d684b3d673b8613834ef9e","url":"assets/js/2797603f.9b518728.js"},{"revision":"9246faefa8ff7bf68fb18294f32ceba6","url":"assets/js/28d0a442.364a867f.js"},{"revision":"a3cead87fe2f6be05889f17c078d22dd","url":"assets/js/2981a785.ee0c806d.js"},{"revision":"312ff7415c8b7c3aa427b701ce9b50bb","url":"assets/js/299fd2d4.5e987071.js"},{"revision":"3e1149a58a0fe1db6092ffac1ac94e9c","url":"assets/js/2a5f10a0.5775a1dc.js"},{"revision":"ff116d97a85ef454d6b3eaefc0b621be","url":"assets/js/2aa24227.e96c0e5a.js"},{"revision":"9166ca2924af39f123e7bb2edd72df62","url":"assets/js/2abe3314.13b81755.js"},{"revision":"7dc508001a210c93f0e96154ae2e51c3","url":"assets/js/2bfd5bf2.b65fdb41.js"},{"revision":"c82845320bf4b43874ffd0534f3ef8dc","url":"assets/js/2c0913dd.dee66df7.js"},{"revision":"bfe96b8b696a08ee784334b01e53dd46","url":"assets/js/2c2817b8.33408617.js"},{"revision":"96cb3aab056049295ba61de862f447b5","url":"assets/js/2c2f03e3.dd7918b8.js"},{"revision":"a7a4e85689cb1d958d54fd07366448a5","url":"assets/js/2ead8e40.ba3f0986.js"},{"revision":"bb8df87b23813ce2f48d9a5512d0fa8d","url":"assets/js/3099fbd1.e20d78bd.js"},{"revision":"0b01f1d254f46f7d3a0304181fce50f8","url":"assets/js/31885b5e.e7b6db9c.js"},{"revision":"4aa12fa2ef5a7223d2a2f20d6f0609fd","url":"assets/js/335f5346.d4557f19.js"},{"revision":"2c0e2268593f04c20da370d22d9c614e","url":"assets/js/34e9cad0.5ba194f1.js"},{"revision":"f40ed06bc3eaca70ab9bba4ac66895d6","url":"assets/js/353d7f1f.2a81f1ed.js"},{"revision":"4e83bda8ec1758b9c526d9ff94a511fe","url":"assets/js/3617eece.0f2b4740.js"},{"revision":"54a0cd7bf265846bc2d5205c733dac9e","url":"assets/js/3685eac7.bb7018c4.js"},{"revision":"509bdea60ec62f2915277a584eaa92c9","url":"assets/js/368b2af3.1659263e.js"},{"revision":"615d78f4f9cd699c568a92f26c474d21","url":"assets/js/3733.6433bab5.js"},{"revision":"1e1aa050237d6611d5baff35b2b9fc78","url":"assets/js/3747.69310eff.js"},{"revision":"2d662cf71f2c272d4c5708ce1a58f9b1","url":"assets/js/3861.dc441233.js"},{"revision":"70b03defc0e7b19679caf13faf2ae870","url":"assets/js/38d436cc.2a7767b8.js"},{"revision":"48fbe26aa4326a6ae5723319da29eff6","url":"assets/js/3a9fc4f0.468889a2.js"},{"revision":"49514dc85fba4b3eb1e0e28ed1d9f5fb","url":"assets/js/3aa1d8cf.3496d750.js"},{"revision":"33a2e77811febb82a4378ba3b747d416","url":"assets/js/3c16a28c.1f553929.js"},{"revision":"789828c896fc1b1faa7176783dcd7484","url":"assets/js/3c655c76.52741ef1.js"},{"revision":"6d800ab4221dc0355a8a7eb4a05f64df","url":"assets/js/3eb8918e.8f5fea81.js"},{"revision":"7c51d78ac569a30d0bfb5378dc00de15","url":"assets/js/3efc06cb.132bf2f9.js"},{"revision":"ce60a20f55b98e85c45b0a58c134d1be","url":"assets/js/3f3e63fb.90a65e28.js"},{"revision":"b0949cd496223e2d1b2875623948fe46","url":"assets/js/3f835183.8bac00f6.js"},{"revision":"96b9368937b95e836ce451fbecb0cb37","url":"assets/js/401f1e8f.7d9aae98.js"},{"revision":"65868586878d7623c6d8464b83061c12","url":"assets/js/417dc7cb.3a1eba6c.js"},{"revision":"9fd7e80831679ed9f323838f7e181fb0","url":"assets/js/418ad307.b74241cd.js"},{"revision":"359d138386e382a4e23e67b5946edcfb","url":"assets/js/41d4d076.56ecf2eb.js"},{"revision":"4c007abea1fb9be6df930b092da3071d","url":"assets/js/421ae91c.b19a77d7.js"},{"revision":"a1195ce366ed6a54db2052023bda7412","url":"assets/js/4290a99b.a351c6ee.js"},{"revision":"5d5b98d8f8ac9893ec8d669342fccc04","url":"assets/js/430cb1dc.b8a7bd2a.js"},{"revision":"b027e00d5bf24bd42fa4273fac31279c","url":"assets/js/43fcff82.f5335814.js"},{"revision":"3bc484c9c7a78378a6c1688506c35222","url":"assets/js/444d4fb9.b11b2ad4.js"},{"revision":"f957f379aa77b6ed1fb57867379303ab","url":"assets/js/4455a696.81399f98.js"},{"revision":"3a664d92e4b1a1e887956b5d797cc538","url":"assets/js/45ca1306.1893056b.js"},{"revision":"bc64df267f9af7150634aab952cb2e32","url":"assets/js/47db058b.8e6a6831.js"},{"revision":"cd4f580b970f215f9f46a3980054feb7","url":"assets/js/486.325788d4.js"},{"revision":"042911f1f33ce45b4d59ac27839342a3","url":"assets/js/486efa96.73e1a3da.js"},{"revision":"e4b6012df86da59eb449a00685746e89","url":"assets/js/48a7df61.1c654ff7.js"},{"revision":"aaf27403b64021b775e01122172cb0b1","url":"assets/js/48ff9475.4d1ef976.js"},{"revision":"e848a116eec93abea10569549738ebd8","url":"assets/js/49847bb5.c59cd671.js"},{"revision":"9a4ca22ae41e78fe6aea4b8bb2d3adbd","url":"assets/js/499dbc29.0a2bccd0.js"},{"revision":"3e16ec85c9eb523f4a94d766b86db643","url":"assets/js/49a680fa.d41c7b97.js"},{"revision":"7ff0a6a3fc91daac5901208906f96f2b","url":"assets/js/4b1bc88e.3063a43b.js"},{"revision":"16f151046725b0ea9050d7951122f0ef","url":"assets/js/4dd2532d.9aa7544e.js"},{"revision":"3bd3796ed43ecab9f823636aa572353b","url":"assets/js/4dd87e68.ea645b99.js"},{"revision":"f07be9ba86cf2b2d5ab62a7ddac65480","url":"assets/js/4e122f11.992f89d2.js"},{"revision":"6519a86925ec22d7bc00483033610be0","url":"assets/js/4e7898af.a3645f3e.js"},{"revision":"fda764f6933287c469582c5f4ac399ed","url":"assets/js/4ec2ca4e.895d7255.js"},{"revision":"5242f6f8425fe2c9fffde74c4e75eb7a","url":"assets/js/4edc808e.e7359c54.js"},{"revision":"45a8cb606d5552d6c3051ea05639662f","url":"assets/js/4ee1adc2.cf94e5d3.js"},{"revision":"64fa630a72ab43fdfc5df6f8e474b499","url":"assets/js/4ef6f358.ca269e85.js"},{"revision":"11e9845cc780b196db0d63a1fa789806","url":"assets/js/4f4befa1.7fcdb478.js"},{"revision":"4688e8826ba8f828efe5368592945291","url":"assets/js/51a1dc1a.f2d1428c.js"},{"revision":"3041be3ff96abb4fb32591bbe3df713d","url":"assets/js/525a390a.e42c5ef3.js"},{"revision":"34cee382fd7d2fbd37583ed89bb96e6d","url":"assets/js/537.b4aef0ba.js"},{"revision":"8433b48710ed514172d1e5ce62961435","url":"assets/js/5412b5d2.fff9aa90.js"},{"revision":"09913b16f74b207abb883b605ff099d9","url":"assets/js/54d7e390.4e20fdf2.js"},{"revision":"36eaa5e58d1638d206aa882675dda8f7","url":"assets/js/5537.47e2f440.js"},{"revision":"4e6e2df99255bf5d4e05ecc1f335a5c1","url":"assets/js/55667eca.3c99e7c6.js"},{"revision":"c20d4aa923bc0ea937815b153015f2f3","url":"assets/js/5669.5380a265.js"},{"revision":"b6ce0b4b79157e1137c4c7ccfae7e999","url":"assets/js/56833e7f.b78c79e8.js"},{"revision":"90289ef2c0aba8afa7aeed1d83dfda20","url":"assets/js/56a7c978.f8784fde.js"},{"revision":"e6e459c98f01acb17fcb3746a8b7fc6b","url":"assets/js/574dbab1.e7a1466a.js"},{"revision":"d91a1ad96c62e9ddf0aeada0960d5515","url":"assets/js/5780.0ce1b261.js"},{"revision":"b04b04791921975ff88086cf91898d76","url":"assets/js/57e1e6c5.5916bd14.js"},{"revision":"0c1a15a60d163e323fe042d3b94f5337","url":"assets/js/583ba798.df029a93.js"},{"revision":"448d43f4679881b9c59c5584dfaef9ff","url":"assets/js/585ae644.64a8ab09.js"},{"revision":"b849160e056799ac114eb1fe0cc361f8","url":"assets/js/5901cc52.ad0c1488.js"},{"revision":"bd90e2139dc5d933cfba238a19bce61b","url":"assets/js/593ca3da.36db6404.js"},{"revision":"6457e2db5a016718845fcc5b3da527f6","url":"assets/js/5c5ed4b0.4d9db42b.js"},{"revision":"48809650a085157280f5b1102b01f592","url":"assets/js/5c926596.fd4214d3.js"},{"revision":"118bfc8642434e7e7730a61a869fe36d","url":"assets/js/5d0ce896.549ceafd.js"},{"revision":"fb3365e65619a8a9e44ac50c23ccc7b6","url":"assets/js/5d44278d.d1154f14.js"},{"revision":"2f4e3b3ef46bd4a1164da747542795eb","url":"assets/js/5d901f6c.8f87324d.js"},{"revision":"82b2a4a2e65e798502e1033271c82efe","url":"assets/js/5e812b6d.23a86a62.js"},{"revision":"a8fdc92e9159476547622e21d48c6ff1","url":"assets/js/5e95c892.a332c7a1.js"},{"revision":"8b1ab5f138b9f462db4262832de2f34f","url":"assets/js/5eb2f6ae.321a90a0.js"},{"revision":"5e9e59cc611cf8e41c13b8ef17c7206e","url":"assets/js/5fbcf17e.027b7f1b.js"},{"revision":"16e20ee5760e99586c90411c1fad19d4","url":"assets/js/5fc3e4dd.67a89122.js"},{"revision":"3f99a60d06491a3bac58cbbc91d8ecd8","url":"assets/js/60535e1c.0fe19033.js"},{"revision":"a5c5e004d3f700882e5d7c56cc44cb59","url":"assets/js/60704716.a22373e0.js"},{"revision":"633a5721d624ae7e37a5b5d0d0d7d8cb","url":"assets/js/60add6f1.ba4b5a7f.js"},{"revision":"19629b865f2b7b85884ac56767b0fd0a","url":"assets/js/60cd687a.2d0f5306.js"},{"revision":"c273db50f0923423a5d4ed16c5980f2e","url":"assets/js/6100.0fea0de8.js"},{"revision":"919c971bcbe7f71c726d93581f4956d3","url":"assets/js/615.ef8a6766.js"},{"revision":"7965c0aca36c953a8dd874ed3bf41b7d","url":"assets/js/632f43f9.6cbd1a21.js"},{"revision":"412ecb3015851521c5c807ec25188c48","url":"assets/js/638be404.66820041.js"},{"revision":"fc26cfd9981f12798512de30c5ba60ea","url":"assets/js/656.7a6564a3.js"},{"revision":"3585f82d361b9ac1e53a2cab96e9865b","url":"assets/js/65e4ccd4.e066b010.js"},{"revision":"b79a30347b1d2e28d94c79e68b1a7c9d","url":"assets/js/6798f4e4.150cb35b.js"},{"revision":"be3c0adab5e1d315caac78590fb7a6ba","url":"assets/js/68233c82.44eeddfc.js"},{"revision":"58fadcd90b815e4b8d7e2f6e95fd0532","url":"assets/js/68e30b06.5e0bb59a.js"},{"revision":"f51728a3ee98b81ce2ed121f265fcf9e","url":"assets/js/6a00305c.5f625600.js"},{"revision":"ee5f89bfe152d212af18beabd6c7497c","url":"assets/js/6c4c4dea.aacdbd08.js"},{"revision":"443639b2f1e6f7a03ec6f12f1629c479","url":"assets/js/6d9bc096.56d0cbd4.js"},{"revision":"b35b018502cc7a5e7df4d6130679512d","url":"assets/js/6ec71b44.cdfaa792.js"},{"revision":"0236ef5b312f891e2ab0b6881b9e0bde","url":"assets/js/6fd14778.db9bf5c0.js"},{"revision":"ff17810edfc623a7ef050b16d045f884","url":"assets/js/70c0a5b1.8a1ca3f9.js"},{"revision":"c762a4173c147d01ca1125b006555e4b","url":"assets/js/70c4bb45.b2218b98.js"},{"revision":"d96823b224579e479ae7152743267078","url":"assets/js/7152fb6e.90756266.js"},{"revision":"45171db946099aa5f5d7c2348ccfb056","url":"assets/js/719399d6.e1de36af.js"},{"revision":"201aa73e6ed5da69cd80ca7cf9b2e568","url":"assets/js/72cf1be6.2e1c65bf.js"},{"revision":"4ae639479d83253dc03b504faa40543c","url":"assets/js/738fa3a4.3978fef3.js"},{"revision":"7373682b80fab712050481a88ef8e2b2","url":"assets/js/74512fd2.6f874829.js"},{"revision":"50fbbf85bec95a516a1df0be908ade5b","url":"assets/js/74dda8d0.673b2a67.js"},{"revision":"73cb6096d48f0928c3ba4185553a7320","url":"assets/js/7615.b146b80d.js"},{"revision":"06bd2c3d84162d66e84ee740562fcf49","url":"assets/js/768714c1.c76300d4.js"},{"revision":"d4821dba4a6d319bbed861da4c744a44","url":"assets/js/76def669.396cd87e.js"},{"revision":"b9c90614a910fa45573da5dadd480993","url":"assets/js/77a552d2.152e3000.js"},{"revision":"423693bc7fe684775ffc8dbf4ffc93dd","url":"assets/js/780.3738b819.js"},{"revision":"e8160559d594785bc14ba0bf1438428a","url":"assets/js/7877.d09d97ea.js"},{"revision":"77d4357a81f0436379b59a42156a5f92","url":"assets/js/79606cc0.ef716dd1.js"},{"revision":"eb27f56d339efb96326784700277df5c","url":"assets/js/7be57a40.78168ba5.js"},{"revision":"55529e97f34a04b4f53c26799e6e16ff","url":"assets/js/7ccbf748.20d40f6a.js"},{"revision":"b38d3c90697e59aa5531ef099904db84","url":"assets/js/7d4014a0.b41748a4.js"},{"revision":"9687d9f9a848a4e7a1485ba9f3473e36","url":"assets/js/7d79b262.1e83d0b1.js"},{"revision":"0909e7d31a678c37c93d1cf815880785","url":"assets/js/7fcbdee5.e26c2968.js"},{"revision":"0d47d051ec4afcb688439c0dfc775df4","url":"assets/js/81350798.6ed01bbb.js"},{"revision":"e44021f950fc1d21623610e36d03315a","url":"assets/js/814f3328.da254b0c.js"},{"revision":"4d352e5b4e7fdbeaeab65341bad5c14c","url":"assets/js/81b0b826.9118357d.js"},{"revision":"6cf5658636c723bf082e400bc3ba2aba","url":"assets/js/81d45afe.b8ec16cf.js"},{"revision":"f988b38b26050f6edeaa6aa2f89ac97a","url":"assets/js/831d5710.55ad73c3.js"},{"revision":"3510f8db41c3e002d1e26c72400fec48","url":"assets/js/8388.7938a7d9.js"},{"revision":"7f6bde51d32e81b23d59c43fdf569361","url":"assets/js/8405e40b.9362c9a1.js"},{"revision":"14804306790f7f408d8f2b4205099ad2","url":"assets/js/844e8bde.ef445919.js"},{"revision":"117e03a3babaabbc2f8848e088391eaf","url":"assets/js/8698047a.2988a121.js"},{"revision":"04152f3d7b978b07b81070db39a27495","url":"assets/js/8721.29b5a329.js"},{"revision":"f741af8a41a4767406cf5fcaea44cb51","url":"assets/js/877814a5.5bfcd618.js"},{"revision":"c1ab7f7296f1a3059fa0b8af6cf3cba7","url":"assets/js/878419eb.b8ea94fb.js"},{"revision":"472b081738148dad85a537e3d6d23a59","url":"assets/js/87f085ac.3146aab7.js"},{"revision":"0c89c40ddb69b72b2e326416088b0b82","url":"assets/js/88ee3594.0557c192.js"},{"revision":"f5854466d49bd261f5062e3fc842a844","url":"assets/js/891c38c1.772a7da9.js"},{"revision":"6df1dffa96fb49c916aef865f23907d3","url":"assets/js/8934c416.b967c73b.js"},{"revision":"d06481f98ed43250d8631c8613095623","url":"assets/js/8bb873be.25616e70.js"},{"revision":"e1a33e8fce9319a9e1ef10076ee0a93f","url":"assets/js/8d3daf7e.000e95d4.js"},{"revision":"842f9142b098aa2287981eff9c3e8422","url":"assets/js/8d5100a5.ca6a8490.js"},{"revision":"9f9c2ee63c95d04624e27b01c5dc620a","url":"assets/js/8d6d7042.92e79bd3.js"},{"revision":"09ca844416b3f46cbd801bd41bf019f5","url":"assets/js/8d87430e.4802a412.js"},{"revision":"ff2044ddbe52c98f79917d965fb722c2","url":"assets/js/8de208d4.9ca514e6.js"},{"revision":"0d460351d6eba4a388ae3c82d09dcdcc","url":"assets/js/8f2d6012.067b497c.js"},{"revision":"263faa055d0f65de3b088458cb05c21c","url":"assets/js/8fbb1d25.cbcc3059.js"},{"revision":"763a06a3fdce08d09a05ac62bc30dcc2","url":"assets/js/91a408cf.3b38b285.js"},{"revision":"dcdf394bfd4989b6e9732fb814e252df","url":"assets/js/9254.0658eece.js"},{"revision":"f473b64c0e8288b9aa6604d7f56611dc","url":"assets/js/931c7e04.efe44fa9.js"},{"revision":"98be14b4bac8b5cf5896094c026c3f8b","url":"assets/js/935f2afb.768e2f0c.js"},{"revision":"697a2327add745d4ed0aac4743aab6a3","url":"assets/js/93c7142c.f37ec47d.js"},{"revision":"8961c6a13b9fee1c6e57454eb7e981e5","url":"assets/js/94642dbf.76ac30f7.js"},{"revision":"569e18dd049e4e1aa20b74fc5155ea80","url":"assets/js/97dd099a.28bc2f98.js"},{"revision":"6a2f4d7e330eac9bc3833d4fc58ab22b","url":"assets/js/97e86fd8.c119754c.js"},{"revision":"6ada61a054a93136eab7c6cdfe2e33f5","url":"assets/js/985ca71a.d6fb5d5f.js"},{"revision":"bfdeb42398b5e2c62ab3c69c994b1e97","url":"assets/js/98df52f6.8a59616d.js"},{"revision":"7f06ac7ddf62baa3af48252eb20d72a1","url":"assets/js/99b5f837.53a7d8d9.js"},{"revision":"bedc342869828a36b406615a689f6cd0","url":"assets/js/9ab58b3d.5785c7a4.js"},{"revision":"e54fa2551564e2fb5a5615bec83f9857","url":"assets/js/9ad987dc.db8c4df9.js"},{"revision":"154d8852db4cddb51e4343118db9d5da","url":"assets/js/9b9d8a78.2197a7f2.js"},{"revision":"89bb22525acb735ceb43d8554d0d1804","url":"assets/js/9c34cbca.9b69e231.js"},{"revision":"253be5043d28a899f2a88146521d5e9b","url":"assets/js/9c658726.20bae14b.js"},{"revision":"2aa6334c74b19120b6a6e1af7b0d17d7","url":"assets/js/9cf65f97.606b087c.js"},{"revision":"18fd6fcb1b8a4ace90c6848955bc33c5","url":"assets/js/9dd555b1.a35e81ae.js"},{"revision":"fe7f2f2a41bd833cde8187c573144d13","url":"assets/js/9e4087bc.6fc4eaa6.js"},{"revision":"64399094061f7bd04e0cda22e50622a3","url":"assets/js/9fa1da0a.1fc69d65.js"},{"revision":"9e05f39497e1a167782182de6fee37fc","url":"assets/js/a037c63f.8dcc8b9b.js"},{"revision":"c31a7e8fbc4f12c848563032b92d6caa","url":"assets/js/a1a3e7de.6b4374d0.js"},{"revision":"7ecf5ebf6db4e1e57af54d7051ea8437","url":"assets/js/a24f541c.9153ea9a.js"},{"revision":"63aa94967c7aa2d2b3fa5ef6f7620a9a","url":"assets/js/a342c8c4.b65da6df.js"},{"revision":"63e8deeb8b8771758fba811b3281f401","url":"assets/js/a3919590.b5cd3a07.js"},{"revision":"18be3b0601297ff6019f2e1d99b9b26e","url":"assets/js/a3a61869.b5d54c5b.js"},{"revision":"6c64a5f7491999d5c8d11700a11266e7","url":"assets/js/a3c88c0b.2f7f2678.js"},{"revision":"9441ef4227cec426bff26fd267676ff1","url":"assets/js/a3f2e35e.7a679066.js"},{"revision":"846f1290ce2489f9a5dfa5b9850e5c03","url":"assets/js/a44af050.fb969f6e.js"},{"revision":"0f93c031517d0ff3c534fc32f507254a","url":"assets/js/a5aec623.21c20ef9.js"},{"revision":"af7f84162eaefda437a34bb9d6643455","url":"assets/js/a60a8c4d.56a21c92.js"},{"revision":"701bca972d4dc049f7ecc71e283c1272","url":"assets/js/a6aa9e1f.49f75596.js"},{"revision":"46a8793c3cb7c5bcf378fe342007de4e","url":"assets/js/a7bd4aaa.b93f4bfa.js"},{"revision":"4296a3efdfc93e03222c48286a32d45c","url":"assets/js/a85b56be.17e53fc0.js"},{"revision":"cc3e59fd88a090e867f3dfcc489d6390","url":"assets/js/a94703ab.55edf98f.js"},{"revision":"c15295cd5e3605944f8a0027e252b8ea","url":"assets/js/a9fb8aad.dbed90aa.js"},{"revision":"fc3fd3fb1e259fab1c99352630bd5fd7","url":"assets/js/ab0d2325.1387ba80.js"},{"revision":"623cb22a0fe9ca1a5fc20f77dca02a2a","url":"assets/js/aeb09130.bb24629e.js"},{"revision":"774a8a4f5c16083a0de62c48d8b934b4","url":"assets/js/af593c11.1479e15b.js"},{"revision":"d22596e0d75ba73dc5c8a2feccfe3381","url":"assets/js/b0072286.5610dde4.js"},{"revision":"f9a087f30836a34259fe33e054ef3968","url":"assets/js/b01385c6.e5e2e73b.js"},{"revision":"ef4628003f44ff601184edf2511fc981","url":"assets/js/b09a966d.dacdde1b.js"},{"revision":"ff4aaf0b4ba3fa9f491fd4b58daab26d","url":"assets/js/b10d2d1d.7f8baac8.js"},{"revision":"2e9cb7d3e242ae0eaedf106b9a978f1c","url":"assets/js/b180cfad.1cab5a73.js"},{"revision":"2e7e7b9587e362b4afb12999759bda89","url":"assets/js/b1adbe5f.aab107c7.js"},{"revision":"cb620073e3d5f564e2189417643b8ceb","url":"assets/js/b229e7b4.ee7aab36.js"},{"revision":"a27594600f8c1224a701d9b2d23e9323","url":"assets/js/b2b675dd.865ac02b.js"},{"revision":"7eed1bded73de409952650cc77cad853","url":"assets/js/b2f554cd.32fe7389.js"},{"revision":"b09cd53bb8613204a0a93cb3594a14b1","url":"assets/js/b468d581.751d3881.js"},{"revision":"cbca532ea27377f505f9238a574e7e7a","url":"assets/js/b4d1969b.227abd7a.js"},{"revision":"fae1c5a45c07ef219d6f57e00a69b874","url":"assets/js/b5054348.19956b81.js"},{"revision":"efdc8fb6219a5b9bd44571c823cec876","url":"assets/js/b7fd5d9b.5373da68.js"},{"revision":"9ddb1c44b425da59021cb25cdc078383","url":"assets/js/b8bad8b6.75bad714.js"},{"revision":"b51e52c93b11c9ac213be6d36d1f45b6","url":"assets/js/b8f857cb.ca6ba436.js"},{"revision":"d2fa8daf20248a110929284708073d3a","url":"assets/js/bca100fd.f706c30c.js"},{"revision":"4286615bbdb073f0210cb11613cea8b0","url":"assets/js/bcadd4b5.b71b7628.js"},{"revision":"aa8a7551f830ed31d5e574ee372a2da0","url":"assets/js/c059fc3b.35d4249b.js"},{"revision":"56a0bb04b23d8c5fe1490fe96b7cd1b9","url":"assets/js/c09518a0.deaf106c.js"},{"revision":"08b73df44dd3ef3aefa8b6c162cfcea0","url":"assets/js/c143124a.72d8b3be.js"},{"revision":"29a9c245d619dde653d6386f1586c9e1","url":"assets/js/c1cbba14.ce3044b1.js"},{"revision":"038698d402acf97b2bffb80bfbd36989","url":"assets/js/c2ba1a43.beb0c10c.js"},{"revision":"ca3f999eab69a3b434b9622a895bd28b","url":"assets/js/c36f9ac4.885253c2.js"},{"revision":"768418fa272216ce47a114e8d3ad26ac","url":"assets/js/c37f2d73.0b859c80.js"},{"revision":"a8925ca01d35ffb6f0352ac3cd1d092d","url":"assets/js/c399785c.c28a5478.js"},{"revision":"2f130e1681533a6d9d033a82902a5fb2","url":"assets/js/c5697d08.26ba875c.js"},{"revision":"c2499c22873928fcc7e99221f2a4f1e4","url":"assets/js/c5a80f01.44d972e0.js"},{"revision":"f22225f44a27eb36b7eb1686ddb16ae1","url":"assets/js/c6fa8535.cb8acf5f.js"},{"revision":"7a9f708679022d02eada8cb3848a58fd","url":"assets/js/c713fb68.78f3bd7e.js"},{"revision":"0356a854ef87ca6dabbeb6115a38a17a","url":"assets/js/c7d7c2cf.826dce88.js"},{"revision":"5d42d97c6bf25501591dd47adc50c1d8","url":"assets/js/c7f20b34.64a0d6db.js"},{"revision":"d13d6f933329ebf2ec3572bbea261ab2","url":"assets/js/c918d1af.619570b3.js"},{"revision":"c79cd7811a4bbb49d36c452e96a9133a","url":"assets/js/c923d4b1.5813058c.js"},{"revision":"01885f345aa821345497c2355a8536a7","url":"assets/js/c96ee667.b32ce7d8.js"},{"revision":"2c31cc36538ba56c5ee843e0643d92d7","url":"assets/js/cabb6052.d779d100.js"},{"revision":"03890b8a33f85f9711674d57d3a7cc73","url":"assets/js/caeb3f87.1b0bc5a0.js"},{"revision":"f0695b42f382a07b1bb6fdb961fa394d","url":"assets/js/cba120a0.36cf87b1.js"},{"revision":"cef8ec4b486c0cb2ce24b04364ba1484","url":"assets/js/cbbcf4f2.ddccc009.js"},{"revision":"90be797d438a7ae46b21410b19fb5899","url":"assets/js/ccc49370.ff5fa7e6.js"},{"revision":"a87a4f73bc885068f1134f02ea3460ef","url":"assets/js/cce3350d.47d61e10.js"},{"revision":"b65e6303ad6c39f63e1d743eef41689f","url":"assets/js/cd46b10a.e1881dec.js"},{"revision":"23c3b15e2302d7e7b5285fd8806f3ba0","url":"assets/js/cd85a010.32db0084.js"},{"revision":"0ea01be0b129fcdf556539fd979c871a","url":"assets/js/cf1baa66.66c79ff7.js"},{"revision":"a189aa478d4848ed20e428fbc34ee8b7","url":"assets/js/cf4855b3.7335b66d.js"},{"revision":"221af63dd7587fa5264ca5e1d002ed81","url":"assets/js/cfc0d746.8c5ee69f.js"},{"revision":"3db9fc15e2539e75d69c8e8071ee29b7","url":"assets/js/common.7d3847cd.js"},{"revision":"bdab40434bc37137ace8c0d5c2546f52","url":"assets/js/d089f3a2.5f8038ca.js"},{"revision":"2c8ec035fd8a89c140b33ebaa9bd0a6d","url":"assets/js/d0eed897.32073246.js"},{"revision":"4a55d99203e74d4ec64b25ca4b45fc22","url":"assets/js/d27e4703.fb2af797.js"},{"revision":"e4e9393ca9c911d98ff1ad51789c2165","url":"assets/js/d4244827.57cd25ee.js"},{"revision":"26accbfe814045d93386adebf2045594","url":"assets/js/d4693b41.f5f0aa63.js"},{"revision":"4a56259e4486af4d46468664dd8dd9e4","url":"assets/js/d4927cd4.abcccbdc.js"},{"revision":"25297dcb621d1b3c907163c5949fddf2","url":"assets/js/d69a32a8.6945b363.js"},{"revision":"a04d23d878e0642c6bc2c13dd5eb2aab","url":"assets/js/d774de2f.e4809536.js"},{"revision":"4603f54cd9d2eba9dd87cefe4e7ded52","url":"assets/js/d7d404e6.806ef705.js"},{"revision":"0cd969b6953ce14b5a1258644e0d20ea","url":"assets/js/d806ecdc.cdcb4caa.js"},{"revision":"d4e721c49e0e3639f4000671ca186b62","url":"assets/js/d8911f7f.a1e9a76f.js"},{"revision":"a1e1fc21567748a532fe7e6ac7c2e5df","url":"assets/js/db19a329.d21241f2.js"},{"revision":"ae6df69242767d0cacdfbad9d2cf336c","url":"assets/js/dbeb8484.db5d7410.js"},{"revision":"400b1da6cab7d60ca772cdb6789040a4","url":"assets/js/dc0f51b3.1995ad4a.js"},{"revision":"6af8e72709f5e732138174b55159a3eb","url":"assets/js/dd4157fa.b4c1c571.js"},{"revision":"71edd75fdf51439dffb2aaa79c83bcb7","url":"assets/js/dd68989e.95e09442.js"},{"revision":"928f5401e99f8972b27833dfb024b1f1","url":"assets/js/dda8ff89.83546507.js"},{"revision":"1f9fd68f2e1ce8df4ba2645ef610fcdd","url":"assets/js/defee600.68012eed.js"},{"revision":"f86a59ee3c66d59b0ff137aa9f75104b","url":"assets/js/df64ceb5.a3832429.js"},{"revision":"b5e49a88616c8bf12ed151fcd1619970","url":"assets/js/df8a8323.0fb0cf5a.js"},{"revision":"a08c0f7bfbf86fa2974d50c6d7da70ef","url":"assets/js/dfa18018.c632413f.js"},{"revision":"7a614cbe2b7858228a2d810cd6bc6ef7","url":"assets/js/e028d6bb.d6ba97d7.js"},{"revision":"2b584e0aaeda5af076920792f02f80e4","url":"assets/js/e044428a.1af2bb35.js"},{"revision":"54c76bfef634418562d7e00dc2bb4e6a","url":"assets/js/e161bfb2.6c6300c5.js"},{"revision":"c88d91e03c8ef240c4a9de93668ac20c","url":"assets/js/e38db323.c78fddb1.js"},{"revision":"bcaa7b014c11e7c6d03c5b4df54c1c95","url":"assets/js/e689bc2e.085df84a.js"},{"revision":"92f432b87b4ae9161777c85ebc044d91","url":"assets/js/e69d98b9.dfb8e61e.js"},{"revision":"132602035410b540d6156dfe4f123f82","url":"assets/js/e6d1a3ae.79eb482f.js"},{"revision":"4df24c0ce8311289a736bda70a8a6336","url":"assets/js/e73c9379.3dc966dc.js"},{"revision":"0cd0ba1805dc82861b06ddd6543fe6b7","url":"assets/js/e79a2b5d.4b96b4d1.js"},{"revision":"454820c7cbd0ba5d9069e41029538c9f","url":"assets/js/e7a4155a.080a5855.js"},{"revision":"d2c441bd9a6753ae9539ceb81055aff8","url":"assets/js/e86a1834.3cb119f4.js"},{"revision":"fdc3ab7e8c166896c678510ea9f7112a","url":"assets/js/e9d27e10.1eee188b.js"},{"revision":"f90db72cf757d1fa1a287ee7e104b993","url":"assets/js/ec5e0ba1.2cc3c77a.js"},{"revision":"2aecbd70dda7c051ef0d5dccf9c97d59","url":"assets/js/ed2090f1.ca18c1e6.js"},{"revision":"198cc4edd22469ceecec6d29463d33f5","url":"assets/js/ed34e6e9.37d73e86.js"},{"revision":"5d46aefc4ca18f06837a893af0231ca7","url":"assets/js/ee438ba6.8bbdc65a.js"},{"revision":"e25d66fdd6341a4e6e09463f69cdea6c","url":"assets/js/eed7c618.fd87f53d.js"},{"revision":"eeed7273e6c802a205707876549ac809","url":"assets/js/ef328f1e.86f60aae.js"},{"revision":"bff112e120e5b6366c8e1bdb98190d83","url":"assets/js/efbda9ff.ea7f8009.js"},{"revision":"3c97492545bf5d0d4483735e8f832ad6","url":"assets/js/f1507532.208c2d46.js"},{"revision":"d0b2539cb479f0ee2f7e62d0a7d5b3e2","url":"assets/js/f1c47bce.9d302c10.js"},{"revision":"93cf38be95ca929ba35494a001a4f528","url":"assets/js/f2775b0c.e1d1fb01.js"},{"revision":"dba2976a344818f9b8a71a8c452f35d2","url":"assets/js/f2ae5213.b31d8118.js"},{"revision":"666be3500e429c5f0fc69575d89e4500","url":"assets/js/f3af3d3b.2b7a1a32.js"},{"revision":"7ea6e612d6d976f0a7ea7630896b5f4c","url":"assets/js/f58d367a.a097d1a3.js"},{"revision":"dc5b4d7d7066f6c964c91a20b10a274e","url":"assets/js/f5a4bfef.54a1adff.js"},{"revision":"cdbe4eb2c85b4d2e1783a152cb0b844a","url":"assets/js/f72f448f.77fbd726.js"},{"revision":"82168143ef003dba94cc198b44f5be7c","url":"assets/js/f80b3d18.da250b1b.js"},{"revision":"e53a59fa254803ec12a220c0915e5b61","url":"assets/js/f819e736.5860a7c0.js"},{"revision":"8bb106d05018017e68ed53090d53d23b","url":"assets/js/f95bdf96.7159dd4e.js"},{"revision":"d2e9e6cae06a6ad9b1fab81ce8956c14","url":"assets/js/f9a3962e.756fddfa.js"},{"revision":"0e171a49a6294e44eee98be055210be9","url":"assets/js/fae5fcc9.148ca3e1.js"},{"revision":"984800320a1611a26128dec9bd94c140","url":"assets/js/fb54075f.08dd4306.js"},{"revision":"6ffdf430dcde23e9835f16d2bb54c320","url":"assets/js/fc1378d8.c311ef26.js"},{"revision":"e64ded20aabb2185e468650cb75b6a4b","url":"assets/js/fcea546d.82dc3262.js"},{"revision":"ad7666332f6e0c136ed4e67cf553021d","url":"assets/js/fd0499a6.9ff8e372.js"},{"revision":"4367613289e89e7b02e6c54c0aff9d3d","url":"assets/js/fdd105ad.6afe35b8.js"},{"revision":"dde7d7be92498583e9170d8bb2cae4da","url":"assets/js/fdd9c53b.e05fc160.js"},{"revision":"ae3ab402bb5faee6973015dae8b658fb","url":"assets/js/fe8463b5.0021746b.js"},{"revision":"9b2e5e2a53b164092553984bb78b432e","url":"assets/js/ff82e203.fd86cc62.js"},{"revision":"e52b5992121522218dca4fd3c4e25738","url":"assets/js/main.cbce424d.js"},{"revision":"1feb03ad839546ce90e08c1a7d3b82db","url":"assets/js/runtime~main.5d166417.js"},{"revision":"e460d73dad1ce7dd434f8ecde76fd67c","url":"blog/2023/11/14/introduction-to-new-centralized-documentation/index.html"},{"revision":"e1838fec2e80aa5ea55f06b0cc792c10","url":"blog/2023/12/08/version-12.0.0/index.html"},{"revision":"48e8177d6949f44c0615b4fa392919a7","url":"blog/2023/12/19/version-12.1.0/index.html"},{"revision":"cacc81f30cf0911a482b0b6ef7dcf11d","url":"blog/2023/12/20/version-12.2.0/index.html"},{"revision":"2392cd53b67aa34fa309c92658fa96c5","url":"blog/2024/01/03/version-12.3.0/index.html"},{"revision":"7be54d0fbff4fba34500e5f28413f493","url":"blog/2024/01/04/version-CSE/index.html"},{"revision":"300c420b872e67936023ff32234dc4fe","url":"blog/archive/index.html"},{"revision":"e6cf2f65b2dfcfb35fa7afba1d53a627","url":"blog/index.html"},{"revision":"6f67eda30a139adc139601ce74e4e3a4","url":"blog/index/index.html"},{"revision":"b1944fc96e1598c8980444f0d9ae0365","url":"contributing/index.html"},{"revision":"32fd889d41f3628550a57ee4f00d886e","url":"docs/11.10.0/additional-resources/architecture/index.html"},{"revision":"9fc9d00c91051bc582189b8f54ed038a","url":"docs/11.10.0/additional-resources/audio-formats/index.html"},{"revision":"b110d029bc6b8d55af300fe9371e50ff","url":"docs/11.10.0/additional-resources/extracting-xlsx-from-h5/index.html"},{"revision":"1ee0e5b4a4de7b513e290036426fe401","url":"docs/11.10.0/additional-resources/flow/index.html"},{"revision":"5297dbd3c37834c671ca51733c357897","url":"docs/11.10.0/additional-resources/get-in-touch/index.html"},{"revision":"f37a1b4aca051d13768bc48f1a0eb95e","url":"docs/11.10.0/additional-resources/python-venv-activation/index.html"},{"revision":"963f999d36c7874c24838157f9722bc2","url":"docs/11.10.0/additional-resources/visualisation-online/index.html"},{"revision":"c8193116783cc0ea7b2c995e39540528","url":"docs/11.10.0/category/additional-resources/index.html"},{"revision":"9cec5495be338fa5360f78f2eb64a3ea","url":"docs/11.10.0/category/requirements/index.html"},{"revision":"2a71ee20c82df72afaf9a05d54ff468a","url":"docs/11.10.0/category/user-guides/index.html"},{"revision":"b05573d7b4fbd8d7c1db04225c048052","url":"docs/11.10.0/index.html"},{"revision":"85460a041045ed6b5e1f6deb7282c52f","url":"docs/11.10.0/install/index.html"},{"revision":"6b94fb6b9404481856f5d6f3167d9197","url":"docs/11.10.0/requirements/macos/index.html"},{"revision":"15c0bcb5e9736cd767ca5ffcc2849a1f","url":"docs/11.10.0/requirements/ubuntu/index.html"},{"revision":"87c9d22d4828e8fc801bbc7064caa1f9","url":"docs/11.10.0/requirements/windows/index.html"},{"revision":"0cfe1227a6a651ec743f3877e3dea5e2","url":"docs/11.10.0/user-guides/modules-presentation/index.html"},{"revision":"a8e2d103dfbd17570c3915b5043de3c3","url":"docs/11.10.0/user-guides/processing-user-guide/export-computations/index.html"},{"revision":"37e7db02717059434aa5a40094db13bb","url":"docs/11.10.0/user-guides/processing-user-guide/export-dataframe/index.html"},{"revision":"ecf4f0866da440dca0a2123c9bbfe06c","url":"docs/11.10.0/user-guides/processing-user-guide/export-mdm/index.html"},{"revision":"90cbab023364fb04398a69b631f1d88c","url":"docs/11.10.0/user-guides/processing-user-guide/index.html"},{"revision":"7ce0cb8d99631283e1332b7f8460e58b","url":"docs/11.10.0/user-guides/processing-user-guide/purge-computations/index.html"},{"revision":"4f644937be1e17751a3870f8f89660d0","url":"docs/11.10.0/user-guides/processing-user-guide/quit/index.html"},{"revision":"fa8180308383f60a44f2022b7b0160a8","url":"docs/11.10.0/user-guides/processing-user-guide/refresh-configuration/index.html"},{"revision":"80a305016307b861e61ee4b55eb67d7a","url":"docs/11.10.0/user-guides/processing-user-guide/repack-storage/index.html"},{"revision":"df0d9080d3c2a0b3c49775fd853db680","url":"docs/11.10.0/user-guides/processing-user-guide/run-all/index.html"},{"revision":"095bdcb9bf4e09c313ff04e09cb6d359","url":"docs/11.10.0/user-guides/processing-user-guide/run-autoclusters/index.html"},{"revision":"d6581795b8e7d18a115916429f014353","url":"docs/11.10.0/user-guides/processing-user-guide/run-computations/index.html"},{"revision":"ed80655c4d0b3dccec053e621514b1b1","url":"docs/11.10.0/user-guides/processing-user-guide/run-digests/index.html"},{"revision":"2e785b696e6e27e4735cf959b4f30795","url":"docs/11.10.0/user-guides/processing-user-guide/run-extractions-and-aggregations/index.html"},{"revision":"9efaa7b28d6a8e8ef273f9445c337bdd","url":"docs/11.10.0/user-guides/processing-user-guide/run-reductions/index.html"},{"revision":"74b9867f04229927a449c5edd5b40b60","url":"docs/11.10.0/user-guides/processing-user-guide/run-trajectories/index.html"},{"revision":"af16c772d050d401fc6a000bf980f817","url":"docs/11.10.0/user-guides/running-campaigns/index.html"},{"revision":"331b5cb0c8331b8740491612a84236a6","url":"docs/11.10.0/user-guides/visualisation-user-guide/index.html"},{"revision":"67c24ee19d64e4b898c1b5877d730871","url":"docs/11.9.0/additional-resources/architecture/index.html"},{"revision":"eb6f6286abd51651a2b968cedcfcef48","url":"docs/11.9.0/additional-resources/audio-formats/index.html"},{"revision":"4f3b2a2503d326fbd27caf2cc2da2223","url":"docs/11.9.0/additional-resources/discord/index.html"},{"revision":"cb71b5cb484a6fbc63f883e9f9efde52","url":"docs/11.9.0/additional-resources/extracting-xlsx-from-h5/index.html"},{"revision":"0cf5d0cdc87f35f4214eda9dc2246826","url":"docs/11.9.0/additional-resources/flow/index.html"},{"revision":"f9145a709774a18a2beb87a06b764bb2","url":"docs/11.9.0/additional-resources/python-venv-activation/index.html"},{"revision":"5b8e9cd9e93236876fc8b68515378388","url":"docs/11.9.0/additional-resources/visualisation-online/index.html"},{"revision":"eb34b6a5d1f4eab55d12217ebb50ed04","url":"docs/11.9.0/category/additional-resources/index.html"},{"revision":"ec24d1dd4252c8e53726f4b7f7879458","url":"docs/11.9.0/category/requirements/index.html"},{"revision":"7454b0886b75e1ca567cc4f9df3f2e06","url":"docs/11.9.0/category/user-guides/index.html"},{"revision":"d716647c142a53dcd57f03f8c6f44080","url":"docs/11.9.0/index.html"},{"revision":"9195809e10a891c04cae3a6f38578e62","url":"docs/11.9.0/install/index.html"},{"revision":"9d9c77d62d1c9651da2a27f64f15519f","url":"docs/11.9.0/requirements/macos/index.html"},{"revision":"74d5545ad57a4b7d11e3935a42e58ddf","url":"docs/11.9.0/requirements/ubuntu/index.html"},{"revision":"e21f5d5d15841c2536625fabab5bb5bb","url":"docs/11.9.0/requirements/windows/index.html"},{"revision":"73a1289abed460713fee93d28522b4fe","url":"docs/11.9.0/user-guides/modules-presentation/index.html"},{"revision":"f3c8aa0ee7640d5d5117bcb0fd306de7","url":"docs/11.9.0/user-guides/processing-user-guide/index.html"},{"revision":"4ef75a28fbd4cb390327b75d76582b60","url":"docs/11.9.0/user-guides/running-campaigns/index.html"},{"revision":"3dcffdee087ef2123e876307b3d0393f","url":"docs/11.9.0/user-guides/visualisation-user-guide/index.html"},{"revision":"204b3c56d96e1f20b44c3c865df437e0","url":"docs/12.0.0/extras/audio-formats/index.html"},{"revision":"b29e1cc9d3400aad463db385b10fbe36","url":"docs/12.0.0/extras/extract-config-from-storage/index.html"},{"revision":"aa95cac7f8ed077bd6a342bf55fd86ab","url":"docs/12.0.0/extras/file-detection/index.html"},{"revision":"87c79fbfec201dd6a03d7a0806e1c823","url":"docs/12.0.0/extras/get-in-touch/index.html"},{"revision":"349c1d4f8c082c9e8c8bbf0aae1bb654","url":"docs/12.0.0/extras/index.html"},{"revision":"f41a6b63c43060e87c13e84e25289f72","url":"docs/12.0.0/extras/offline-access/index.html"},{"revision":"729fe1fb2bb2da36829b4a2d9b498a60","url":"docs/12.0.0/extras/visualisation-online/index.html"},{"revision":"82b283bc1c02f47066a1b58429ede2fa","url":"docs/12.0.0/index.html"},{"revision":"22b93db7d505d8b9e30f6d1ad50d2a3a","url":"docs/12.0.0/installation/application/index.html"},{"revision":"b300624bf0548ca834579925b3e138af","url":"docs/12.0.0/installation/index.html"},{"revision":"9a7bf9392b23312412c0c50feb0803f0","url":"docs/12.0.0/installation/requirements/index.html"},{"revision":"33bb6ab6eab740e13d272b52f8b9b641","url":"docs/12.0.0/installation/requirements/macos/index.html"},{"revision":"b9cfad23b22b6765adad283f462599c0","url":"docs/12.0.0/installation/requirements/ubuntu/index.html"},{"revision":"a8c50bff6706f557059c2aa7ade1c6a9","url":"docs/12.0.0/installation/requirements/windows/index.html"},{"revision":"538dd0d422f36a90ca349417fdb9a4ba","url":"docs/12.0.0/modules/campaign/getting-started/index.html"},{"revision":"101e0e587eac031323853505c44be90c","url":"docs/12.0.0/modules/campaign/index.html"},{"revision":"37f8c0421be9d5619f05f62e0678f262","url":"docs/12.0.0/modules/campaign/user-guide/index.html"},{"revision":"2d6c93051488e0746f0759993877a727","url":"docs/12.0.0/modules/index.html"},{"revision":"40ecabc52a50346af572630201fa4290","url":"docs/12.0.0/modules/processing/getting-started/index.html"},{"revision":"b480d0d2cdab768f7aa5d320c2d7a97f","url":"docs/12.0.0/modules/processing/index.html"},{"revision":"47f1b4d81742538c4ca6f8d1de69bfab","url":"docs/12.0.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"39dde1f7634fca5e5ff808ae25e63ffb","url":"docs/12.0.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"5e26cb0368c00d6aa0df1f9430221b90","url":"docs/12.0.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"9ed657da28faf21c8124b75f105752c0","url":"docs/12.0.0/modules/processing/user-guide/index.html"},{"revision":"7d59f7f6d4a2ab64651de29bb4fb1a8c","url":"docs/12.0.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"860ef806129ba2d992bb996470a3beb1","url":"docs/12.0.0/modules/processing/user-guide/quit/index.html"},{"revision":"66b4bc205ecb190b2bc1ec703552e409","url":"docs/12.0.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"6af3ec94772286e4d0fd1daac4a6867b","url":"docs/12.0.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"62956c32d81ed078928352cb14e4f1df","url":"docs/12.0.0/modules/processing/user-guide/run-all/index.html"},{"revision":"b74d4f0a350f1fdfad3dbad356812822","url":"docs/12.0.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"100f433d962fb075fcb3fc9f3529b981","url":"docs/12.0.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"9f9f1bebf1f7b4d0f8826c3eb52239b4","url":"docs/12.0.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"0d850989fdc03a1490057d90b69cdbd0","url":"docs/12.0.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"72204f449d87f8878cd7a380558673ef","url":"docs/12.0.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"1bf6c56582859338f06c15665c5e439f","url":"docs/12.0.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"18e7aefdc62e48c45e227ffca5eb8fec","url":"docs/12.0.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"e77bc5967b47b240062d7072c0fdfb15","url":"docs/12.0.0/modules/visualisation/getting-started/index.html"},{"revision":"f64687b3dfe2779285126690e98adb4f","url":"docs/12.0.0/modules/visualisation/index.html"},{"revision":"0a372570d5cd63b54c80d44da20d3958","url":"docs/12.0.0/modules/visualisation/user-guide/index.html"},{"revision":"9c617cc95fcae0ef977f15b7bc8df050","url":"docs/12.1.0/extras/audio-formats/index.html"},{"revision":"aad869ceff26d27819b9a42a12d6253f","url":"docs/12.1.0/extras/extract-config-from-storage/index.html"},{"revision":"6c9eb231a982f53ba10289eee83775a2","url":"docs/12.1.0/extras/file-detection/index.html"},{"revision":"cadc11cb764455fe4a6bc3c7ef2093aa","url":"docs/12.1.0/extras/get-in-touch/index.html"},{"revision":"4284700079541ff35ddb9242c48de6ad","url":"docs/12.1.0/extras/index.html"},{"revision":"9d32e4eeb34784aa923e8802d621a1af","url":"docs/12.1.0/extras/offline-access/index.html"},{"revision":"8a9070080bf9a31bb65e4eceff440846","url":"docs/12.1.0/extras/visualisation-online/index.html"},{"revision":"cb06910af294821f627103553f19f4c7","url":"docs/12.1.0/index.html"},{"revision":"01e5049f8a4a07c2188a241d9d9cd4b2","url":"docs/12.1.0/installation/application/index.html"},{"revision":"4ee18e7dc4db965dae98ce18837ee9d8","url":"docs/12.1.0/installation/index.html"},{"revision":"0b2ab996dfa7c5f7c9acb59fab3ac3eb","url":"docs/12.1.0/installation/requirements/index.html"},{"revision":"0d599bc6d5539b26f8b48cdf7a1f3060","url":"docs/12.1.0/installation/requirements/macos/index.html"},{"revision":"0ca9eb768535ee8689b669bbbae63a95","url":"docs/12.1.0/installation/requirements/ubuntu/index.html"},{"revision":"77282bf6ad20f91ba1c47eb29c5bbbe3","url":"docs/12.1.0/installation/requirements/windows/index.html"},{"revision":"2dcd44df8ca865e5a4e76d2b63d61fee","url":"docs/12.1.0/modules/campaign/getting-started/index.html"},{"revision":"94748bd7309a6609d4f84494f3b5e7e6","url":"docs/12.1.0/modules/campaign/index.html"},{"revision":"3a7eaa4d89af21a1fdbcbfbd48ded069","url":"docs/12.1.0/modules/campaign/user-guide/index.html"},{"revision":"b19cba0129431d15865bcae64bace788","url":"docs/12.1.0/modules/index.html"},{"revision":"ddc7df753c4d13a41179f3438a3780c9","url":"docs/12.1.0/modules/processing/getting-started/index.html"},{"revision":"3ed70d6faba6ce272fa14be6e16c6523","url":"docs/12.1.0/modules/processing/index.html"},{"revision":"90d8b1d04f97cfa30bd0b24a6436c09d","url":"docs/12.1.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"b9345f97693b407bad4092a3b076f99c","url":"docs/12.1.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"0db58c0c0c2413edc45c09879f5b3350","url":"docs/12.1.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"fb16062286679dc9c406960db7425bca","url":"docs/12.1.0/modules/processing/user-guide/index.html"},{"revision":"6441f5cc278417010dedf89ce9527ead","url":"docs/12.1.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"7b66a7d19596e07a15c51713c8c2e6cd","url":"docs/12.1.0/modules/processing/user-guide/quit/index.html"},{"revision":"3e7b7238dda01f42f1564492373977ac","url":"docs/12.1.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"90e92188a507dce0175144cf56f94230","url":"docs/12.1.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"bc094f7f290793e9eae216ee49be2c36","url":"docs/12.1.0/modules/processing/user-guide/run-all/index.html"},{"revision":"9c67ebd7cbd3b8c4546f9c695d93f3b5","url":"docs/12.1.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"88857267b1fc5c06def84dc95fa25610","url":"docs/12.1.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"8bd33c128fa6fa0619d7aac2d21091e1","url":"docs/12.1.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"a4ec4ed0cf860823f432c50d28b01146","url":"docs/12.1.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"995995ccabfd2afdacf4633b38e3d247","url":"docs/12.1.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"5a3c67371bf0be70fbe0e0f65504ae71","url":"docs/12.1.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"e069592ed5de73292f85a7893b0081f4","url":"docs/12.1.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"91bf6274aaa725dddc38823b5f2020cd","url":"docs/12.1.0/modules/visualisation/getting-started/index.html"},{"revision":"97cfe708942377b12c83d23927300952","url":"docs/12.1.0/modules/visualisation/index.html"},{"revision":"ef81ac231431223f3c8586c61d48615b","url":"docs/12.1.0/modules/visualisation/user-guide/index.html"},{"revision":"55a0e402043c90b4eacfbd013cb2cfa4","url":"docs/12.2.0/extras/audio-formats/index.html"},{"revision":"0b0ad27b9eadc440e26acbb0702937dd","url":"docs/12.2.0/extras/extract-config-from-storage/index.html"},{"revision":"ca9a29811e791b107080fb70ab92f752","url":"docs/12.2.0/extras/file-detection/index.html"},{"revision":"4668fa03e36a0df0b10aa41bce9988fa","url":"docs/12.2.0/extras/get-in-touch/index.html"},{"revision":"20bfba2123818e5c2bbf249ab53716a3","url":"docs/12.2.0/extras/index.html"},{"revision":"8c22edd3518369de73b029800683c504","url":"docs/12.2.0/extras/offline-access/index.html"},{"revision":"646056e8ccd0546e01465d0d75fd6592","url":"docs/12.2.0/extras/visualisation-online/index.html"},{"revision":"328add0d3587228c27bae368346d6ae9","url":"docs/12.2.0/index.html"},{"revision":"b1b57062b5bf1815815afc29a5350d1b","url":"docs/12.2.0/installation/application/index.html"},{"revision":"a8ee9aaaae56983d8ce26f294f69169a","url":"docs/12.2.0/installation/index.html"},{"revision":"03625210f8028f80d57e6fdf9ca3244c","url":"docs/12.2.0/installation/requirements/index.html"},{"revision":"f945bd26bdd9509990d9f686dbc0128c","url":"docs/12.2.0/installation/requirements/macos/index.html"},{"revision":"363e63eb2ff28e48a4c101f5d59750b7","url":"docs/12.2.0/installation/requirements/ubuntu/index.html"},{"revision":"de14754b61703be4c039963348e5a334","url":"docs/12.2.0/installation/requirements/windows/index.html"},{"revision":"cc616a610fbb2a05424b4f967407b1b6","url":"docs/12.2.0/modules/campaign/getting-started/index.html"},{"revision":"d2a0ef7a53fee29b8300ef5dfb2d2fe9","url":"docs/12.2.0/modules/campaign/index.html"},{"revision":"c87673dde2ba7e4a30cf1a6b262c5d13","url":"docs/12.2.0/modules/campaign/user-guide/index.html"},{"revision":"dcb9a01a1b11d7bf7c6b8a64d422b518","url":"docs/12.2.0/modules/index.html"},{"revision":"881945f98049d13ef8d57f45ea2982de","url":"docs/12.2.0/modules/processing/getting-started/index.html"},{"revision":"35d2e7ecd5f80219fb4a3cc84ce1048e","url":"docs/12.2.0/modules/processing/index.html"},{"revision":"5aa9fd40a38f6ff0e8ae02cc1822f964","url":"docs/12.2.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"30be37ef1bf6bf7f1e3c19a593e49f4a","url":"docs/12.2.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"5518eb2b75cb0f9116e5296ccec5d8a3","url":"docs/12.2.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"a34243a10505d8a1e16ba70fdf4beffa","url":"docs/12.2.0/modules/processing/user-guide/index.html"},{"revision":"42a7c4b379be4c75069e96470debc1c1","url":"docs/12.2.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"a67c103c61d67fe4bf8214f02c2f5a74","url":"docs/12.2.0/modules/processing/user-guide/quit/index.html"},{"revision":"437cf566a3efd6b888292c146927db13","url":"docs/12.2.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"f7dfbd29deb888c2d45799194122659d","url":"docs/12.2.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"0aba42cb737d249efd1f1db3f971d17a","url":"docs/12.2.0/modules/processing/user-guide/run-all/index.html"},{"revision":"5d6acd5bcbfe69b807a75daea795d478","url":"docs/12.2.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"9f92a7afdd109d1f012e0360e9163669","url":"docs/12.2.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"4c0a0763ddee6cb88afcc4fc93068e19","url":"docs/12.2.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"b83d26ab37e9ceeabbda94e4f1ba010a","url":"docs/12.2.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"7b497131ac78fd964ea74d7c2f2cf067","url":"docs/12.2.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"d5fd98903b388142e773d291d962f8f8","url":"docs/12.2.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"57cc315bcb379130b747ba74a0a0296f","url":"docs/12.2.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"64218879976dac584e5bdfed21ea9171","url":"docs/12.2.0/modules/visualisation/getting-started/index.html"},{"revision":"a17f259cedd294896f8c041ef257210e","url":"docs/12.2.0/modules/visualisation/index.html"},{"revision":"e02aee8b0a406f8a6c54a484eb6cfc57","url":"docs/12.2.0/modules/visualisation/user-guide/index.html"},{"revision":"35142de8a35e806033f8a3cdc6559fd6","url":"docs/CSE/extras/audio-formats/index.html"},{"revision":"84c44ec139ec5071e4a953921e62e9d2","url":"docs/CSE/extras/extract-config-from-storage/index.html"},{"revision":"b494fc70e6ea40be80495ecc22e86646","url":"docs/CSE/extras/file-detection/index.html"},{"revision":"a80c5ea43a661054d64cd3b698b8fbe3","url":"docs/CSE/extras/get-in-touch/index.html"},{"revision":"c1e86ca96f2a4c11b59356aa7030d35b","url":"docs/CSE/extras/index.html"},{"revision":"599b59c49cad8f810570bc3d2b6170ec","url":"docs/CSE/extras/offline-access/index.html"},{"revision":"60359729299bc6feaa1ae5604afc6ebd","url":"docs/CSE/extras/repack-storage/index.html"},{"revision":"ce0783d38da7c98b4eb78f277a74010a","url":"docs/CSE/extras/visualisation-online/index.html"},{"revision":"7a720b9296e6ae7861a76bf8888509e1","url":"docs/CSE/index.html"},{"revision":"75fdaeb68f6a39288d42c231fd5b8821","url":"docs/CSE/installation/application/index.html"},{"revision":"70dcf919d18dc140a72b9d872b2bdfc1","url":"docs/CSE/installation/index.html"},{"revision":"2589731fc22111786a07089889601bdf","url":"docs/CSE/installation/requirements/index.html"},{"revision":"28e0b381d90b638d4bd22b246a3ef2a7","url":"docs/CSE/installation/requirements/macos/index.html"},{"revision":"e08335fcab999384565cf1d36f3879c3","url":"docs/CSE/installation/requirements/ubuntu/index.html"},{"revision":"c83425dd51b647ac7fcb7c4d485da702","url":"docs/CSE/installation/requirements/windows/index.html"},{"revision":"1a2bd411b7ce1b959d1424ff6d6f8f28","url":"docs/CSE/modules/campaign/getting-started/index.html"},{"revision":"85267be66f0e6bc9a877154a9af82dd6","url":"docs/CSE/modules/campaign/index.html"},{"revision":"66526db785ea5f066d4e63d5b5d232ed","url":"docs/CSE/modules/campaign/user-guide/index.html"},{"revision":"2631538180b73fcf79faef9b3e7b6e07","url":"docs/CSE/modules/index.html"},{"revision":"223bc97ca17db27e0156809b070c9e94","url":"docs/CSE/modules/processing/getting-started/index.html"},{"revision":"c3f21d448e9838b395d9196a711612ec","url":"docs/CSE/modules/processing/index.html"},{"revision":"bc3563c5ed5c602c172dfac60dbd1d1c","url":"docs/CSE/modules/processing/user-guide/export-computations/index.html"},{"revision":"360236f9781d6c88b3e85a0f69906e79","url":"docs/CSE/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"d24691adbacc3be789ae08258c07d625","url":"docs/CSE/modules/processing/user-guide/export-mdm/index.html"},{"revision":"4741a18d559d220fc86742a1c7d71a12","url":"docs/CSE/modules/processing/user-guide/index.html"},{"revision":"e6a2889c7986df78394cabfd59b41ab7","url":"docs/CSE/modules/processing/user-guide/purge-computations/index.html"},{"revision":"6052702971d590b947b7e359e5e751c8","url":"docs/CSE/modules/processing/user-guide/quit/index.html"},{"revision":"6441d48a4b65d602e6a1e3cc254b709e","url":"docs/CSE/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"4aa8f421e2fe4c41152bcbbdb565349c","url":"docs/CSE/modules/processing/user-guide/run-all/index.html"},{"revision":"3b81df481bbbc422c24889e9dede2c1f","url":"docs/CSE/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"842ac3997a57008c2f160aa5d2c0f216","url":"docs/CSE/modules/processing/user-guide/run-computations/index.html"},{"revision":"83065b03f32827c735498a782e45d86d","url":"docs/CSE/modules/processing/user-guide/run-digests/index.html"},{"revision":"afd9c8b4affec4a0ae4f0112281de42a","url":"docs/CSE/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"430af78d3add91fa8353ee20a0cd3cc7","url":"docs/CSE/modules/processing/user-guide/run-reductions/index.html"},{"revision":"4f6f4e2fa9b042c9eea9f56d5439d067","url":"docs/CSE/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"b1abd9630148b25c6621ad3148b88ff8","url":"docs/CSE/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"316d8a56533f1377dc6b3c1b02fcf000","url":"docs/CSE/modules/visualisation/getting-started/index.html"},{"revision":"faa347e6cef5e0743d1eab7273ade112","url":"docs/CSE/modules/visualisation/index.html"},{"revision":"a19e7bbb793c57deba2654499fa35d7e","url":"docs/CSE/modules/visualisation/user-guide/index.html"},{"revision":"cd6432534c18b968529b9e7ce385fc05","url":"docs/extras/audio-formats/index.html"},{"revision":"8a971080bfd86362de8980bd29e0afaf","url":"docs/extras/extract-config-from-storage/index.html"},{"revision":"67f34d5849ca82d1f9ea7e674122c9be","url":"docs/extras/file-detection/index.html"},{"revision":"e23857defea87dc5fc8690f489637060","url":"docs/extras/get-in-touch/index.html"},{"revision":"a86590a3923abe6ef8e2fcdb83fa282f","url":"docs/extras/index.html"},{"revision":"15641b549991d37fbb4e6c4eb7e39723","url":"docs/extras/offline-access/index.html"},{"revision":"a7efa792b36f13934ca456bc89e2de30","url":"docs/extras/repack-storage/index.html"},{"revision":"b5fe030ae5f269256582511e1521b6d0","url":"docs/extras/visualisation-online/index.html"},{"revision":"ba12c22ba66ccfa7ec145c6985d8ceb1","url":"docs/index.html"},{"revision":"e73eeb1a3fe85e3a188d7c1b05882c9c","url":"docs/installation/application/index.html"},{"revision":"2490450009747211744ee1d43d225160","url":"docs/installation/index.html"},{"revision":"cc6628cb517f367dbd9740151d03d4e0","url":"docs/installation/requirements/index.html"},{"revision":"b223bd19943e681855f9ba1b52ac4e34","url":"docs/installation/requirements/macos/index.html"},{"revision":"a2746a7d2cd3079901dc69f20b81934c","url":"docs/installation/requirements/ubuntu/index.html"},{"revision":"a815d0002bb8581ac1cd64dc8da247dd","url":"docs/installation/requirements/windows/index.html"},{"revision":"8327019e6fae6afc7122ffb803bca527","url":"docs/modules/campaign/getting-started/index.html"},{"revision":"ed964e71f953031f193a3ccbb58d6cd5","url":"docs/modules/campaign/index.html"},{"revision":"65391e22f0d360c99782e363fb6647a4","url":"docs/modules/campaign/user-guide/index.html"},{"revision":"53c4c4dc02e878d48ee272150d868fb9","url":"docs/modules/index.html"},{"revision":"63731cbafed275a1a4c1c5504c13527a","url":"docs/modules/processing/getting-started/index.html"},{"revision":"ac5d5e5b3d87238068824c3f5a32443e","url":"docs/modules/processing/index.html"},{"revision":"200ad55daa7a446697ff4e943b4298a9","url":"docs/modules/processing/user-guide/export-computations/index.html"},{"revision":"2420518f2c40d7999e7706606a5c1bf0","url":"docs/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"a73a8b371976c91d926808d1637f4d3b","url":"docs/modules/processing/user-guide/export-mdm/index.html"},{"revision":"ad923232cde54b026f311aeb004b6a54","url":"docs/modules/processing/user-guide/index.html"},{"revision":"8b484c62776163660505f03246a8f4c4","url":"docs/modules/processing/user-guide/purge-computations/index.html"},{"revision":"93fd665428e8baa015cb65142952e9ae","url":"docs/modules/processing/user-guide/quit/index.html"},{"revision":"6c316eeb9cc860d22c599efdb8b1b210","url":"docs/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"3ae88555cd2e0d5bb83ad081a05c78d7","url":"docs/modules/processing/user-guide/run-all/index.html"},{"revision":"f7188117fac88955c423280ae02fef88","url":"docs/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"6dbe9ca9dfcde6776ee6fe6634292453","url":"docs/modules/processing/user-guide/run-computations/index.html"},{"revision":"83a583d93e40b6aa073f9c87cf11035b","url":"docs/modules/processing/user-guide/run-digests/index.html"},{"revision":"d29311c0fd71d39c29d2b863f29ea1f9","url":"docs/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"b9496911e14c712fae7fdb2c3a1271dc","url":"docs/modules/processing/user-guide/run-reductions/index.html"},{"revision":"98d014b7039ed8a97211cc31cb3b641f","url":"docs/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"2a599d60cc08b8f405da62a6c30a149b","url":"docs/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"da0ae1fbc5ff3aa598e40fb10e415657","url":"docs/modules/visualisation/getting-started/index.html"},{"revision":"a2ef5b94d7fd197092243c214003729d","url":"docs/modules/visualisation/index.html"},{"revision":"3bc6dae3cd1b306b52675ec9fff51eaa","url":"docs/modules/visualisation/user-guide/index.html"},{"revision":"7546f177d6b2855e65f31d1305b71fb5","url":"docs/next/extras/audio-formats/index.html"},{"revision":"ef96a03573fe7350786627707f6a154f","url":"docs/next/extras/extract-config-from-storage/index.html"},{"revision":"af52df9fb17c8a4ccfb17d231d081d8a","url":"docs/next/extras/file-detection/index.html"},{"revision":"94bc3300c8307d7301f18e3f6b787561","url":"docs/next/extras/get-in-touch/index.html"},{"revision":"02d1b62124cd97bbff37b1c9a94a89b7","url":"docs/next/extras/index.html"},{"revision":"0f6737b9872d760f2a2f844058be3a77","url":"docs/next/extras/offline-access/index.html"},{"revision":"3c08dba066237adb2da36b5aa8f43194","url":"docs/next/extras/repack-storage/index.html"},{"revision":"8581cea9c9635b23fb77a066c5ab19b9","url":"docs/next/extras/visualisation-online/index.html"},{"revision":"0a57770a3f601c44c524fd669ff0a799","url":"docs/next/index.html"},{"revision":"902eb92dce5e20cf204140a8653aa5a0","url":"docs/next/installation/application/index.html"},{"revision":"e934b055719f01fe7b285a138c66b9b1","url":"docs/next/installation/index.html"},{"revision":"c0bae96750ee8565c27ccc9748ed9dca","url":"docs/next/installation/requirements/index.html"},{"revision":"55b54a4b6dd93602d0e1d64358805681","url":"docs/next/installation/requirements/macos/index.html"},{"revision":"cdf9b30ef16f5f0abacbebe7b9ef0465","url":"docs/next/installation/requirements/ubuntu/index.html"},{"revision":"15b9e1bef4cc527a189873c941a57749","url":"docs/next/installation/requirements/windows/index.html"},{"revision":"f21324cb99db97e69f650c7394636425","url":"docs/next/modules/campaign/getting-started/index.html"},{"revision":"a97a124551d726189ab93de1b2988fa6","url":"docs/next/modules/campaign/index.html"},{"revision":"829a1ccc0710f3ea92adbecf568c90dc","url":"docs/next/modules/campaign/user-guide/index.html"},{"revision":"ebd53030b1815e64c3eb29b2f4c85801","url":"docs/next/modules/index.html"},{"revision":"b3f96abd6d11a8333cf55255aef42f24","url":"docs/next/modules/processing/getting-started/index.html"},{"revision":"1d5bd261130a8942a54fe17e53744459","url":"docs/next/modules/processing/index.html"},{"revision":"8a5e690a595ed53a5a04037eb3779681","url":"docs/next/modules/processing/user-guide/export-computations/index.html"},{"revision":"43be72f2619fcb55d3eaae60fe267353","url":"docs/next/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"85dfb44c1e7f35ca6e6625c0e2cfc1c0","url":"docs/next/modules/processing/user-guide/export-mdm/index.html"},{"revision":"891faac73598015dc7c1d44995ba6a20","url":"docs/next/modules/processing/user-guide/index.html"},{"revision":"289200abd1074dc24317458ffa39f71a","url":"docs/next/modules/processing/user-guide/purge-computations/index.html"},{"revision":"d2029ce5eed2e3cd22d7103494f2ac22","url":"docs/next/modules/processing/user-guide/quit/index.html"},{"revision":"d88569a63f6ee2d643cc66755a7714ac","url":"docs/next/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"0e97995c5769f1e91bf42f6e0effb319","url":"docs/next/modules/processing/user-guide/run-all/index.html"},{"revision":"83739fce0b30904fef1f5d5c1f16e023","url":"docs/next/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"d54f1cb0dad5e6c8e2bee3bb1366d024","url":"docs/next/modules/processing/user-guide/run-computations/index.html"},{"revision":"4279b46468532bf8cc6d47d94f0cc21a","url":"docs/next/modules/processing/user-guide/run-digests/index.html"},{"revision":"7bc6ef4d0071cc238210d39a58d2f936","url":"docs/next/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"1ca7ed20f9c49f81586ac77269d92de1","url":"docs/next/modules/processing/user-guide/run-reductions/index.html"},{"revision":"4560d263e2505fe93f460ff9e9c60559","url":"docs/next/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"9ddac34565499d7e107e707aac89f397","url":"docs/next/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"c9b66becf74b13be2f33c865ec7f7020","url":"docs/next/modules/visualisation/getting-started/index.html"},{"revision":"055ea9e09776a2bec67f81304f1da385","url":"docs/next/modules/visualisation/index.html"},{"revision":"084e81441297965927fb5af57c983144","url":"docs/next/modules/visualisation/user-guide/index.html"},{"revision":"0651d2b65f8ac0d20764e54039a6d336","url":"index.html"},{"revision":"92e8fedb8c50fe7462624f1937c6135a","url":"manifest.json"},{"revision":"20c4c56d87d73c5fb63d1900ac7bc88b","url":"assets/images/architecture-81e9840c02b65390032520a2ab57d9e5.svg"},{"revision":"65fd4166d50c3a7bbba520ce99f00356","url":"assets/images/data-inheritance-08824a4da6e173f96b7ac9ff945db24d.svg"},{"revision":"c3c3df64325700f73297731bb837e92b","url":"assets/images/demo-1bfde2ef29c21f9a1398a5bc99292b08.png"},{"revision":"0653b0270f80e7ac6c6fc60b2a438218","url":"assets/images/flow-2fcaabf70941e5a8b298646aa61385b7.svg"},{"revision":"20c4c56d87d73c5fb63d1900ac7bc88b","url":"img/architecture.svg"},{"revision":"65fd4166d50c3a7bbba520ce99f00356","url":"img/data-inheritance.svg"},{"revision":"c3c3df64325700f73297731bb837e92b","url":"img/demo.png"},{"revision":"0653b0270f80e7ac6c6fc60b2a438218","url":"img/flow.svg"},{"revision":"f759aa942ae741fe028abac0c7720511","url":"img/logo-cse.svg"},{"revision":"68d0534f0d92d8d5ee0f93a293c33852","url":"img/logo.ico"},{"revision":"a483aecd1259b3d5b6f8b4640e9133a8","url":"img/logo.png"},{"revision":"37df8de86cf574a428b5d5ef3037cf1e","url":"img/logo.svg"},{"revision":"f2090d740ed96c902c75c41de916b8b0","url":"img/undraw_data_processing_yrrv.svg"},{"revision":"397308d374f0c238969a378bc9785b3a","url":"img/undraw_spreadsheets_re_alt0.svg"},{"revision":"e18535880f2cf03118dadc17d1da1fe1","url":"img/undraw_winter_designer_a-2-m7.svg"},{"revision":"b48ee633b11a7f3377aea9472c749b9e","url":"assets/fonts/jetbrains-mono-latin-400-normal-4163112e566ed7697acf3d261319e506.woff2"},{"revision":"5d69eb9abf93baedd033520eb7048375","url":"assets/fonts/jetbrains-mono-latin-400-normal-6c1a3008005254946aef57ceab632806.woff"},{"revision":"717f9057150fafd32e39661dc7cd7425","url":"assets/fonts/merriweather-cyrillic-400-normal-2e7c71643f6e0e4c1e73f28a7a1798e6.woff"},{"revision":"cf40598b1eb2a76672c2e704901b59d6","url":"assets/fonts/merriweather-cyrillic-400-normal-fde0b55efc50742fb57fbebbb11c572f.woff2"},{"revision":"63319b42833639824ca3d45c1f343d3b","url":"assets/fonts/merriweather-cyrillic-ext-400-normal-2a880e22b1b888ab54652a36d43b7f16.woff2"},{"revision":"a4ae5cb9dbe02cc6f94841df0729514e","url":"assets/fonts/merriweather-cyrillic-ext-400-normal-7d8546944154663cc54693d15bb31721.woff"},{"revision":"9141c3f9a696074f62f98d090cb94678","url":"assets/fonts/merriweather-latin-400-normal-2c455928024d0ee049d896a25f9e30e1.woff"},{"revision":"2bfde17b9a1384ce64af78db1b87a82f","url":"assets/fonts/merriweather-latin-400-normal-e009f21405b4d7e893674b69deb4cf4a.woff2"},{"revision":"73d7be7e72e71728515248dda266c095","url":"assets/fonts/merriweather-latin-ext-400-normal-4657f5ab02d5923d223f96a9155a9bdc.woff2"},{"revision":"1fae11a03d2f4709959da7b13cbd1abc","url":"assets/fonts/merriweather-latin-ext-400-normal-7b1ee735b2541bc831bd57bacecc9d41.woff"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map