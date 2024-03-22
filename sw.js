/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/Deferred.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/Deferred.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkboxError: () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/assert.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/assert.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheMatchIgnoreParams: () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheNames.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheNames.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheNames: () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canConstructResponseFromBodyStream: () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQuotaErrorCallbacks: () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/getFriendlyURL.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFriendlyURL: () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/timeout.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/timeout.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/waitUntil.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/waitUntil.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   waitUntil: () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js ***!
  \*************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/copyResponse.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/copyResponse.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyResponse: () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/messages/messageGenerator.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageGenerator: () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/messages/messages.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/messages/messages.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messages: () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quotaErrorCallbacks: () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheController.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheController.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheController: () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheFallbackPlugin: () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheRoute.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheRoute.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheRoute: () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheStrategy: () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_types.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_types.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js ***!
  \*************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/addPlugins.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/addPlugins.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPlugins: () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/addRoute.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/addRoute.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoute: () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanupOutdatedCaches: () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHandlerBoundToURL: () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKeyForURL: () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/index.js ***!
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
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_types.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/matchPrecache.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/matchPrecache.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchPrecache: () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precache.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precache.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precache: () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precacheAndRoute.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   precacheAndRoute: () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheCacheKeyPlugin: () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrecacheInstallReportPlugin: () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCacheKey: () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteOutdatedCaches: () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateURLVariations: () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreatePrecacheController: () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printCleanupDetails: () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printInstallDetails: () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeIgnoredSearchParams: () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/RegExpRoute.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/RegExpRoute.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRoute: () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Route.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Route.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Route: () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Router.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Router.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js ***!
  \*******************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/registerRoute.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/registerRoute.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerRoute: () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/constants.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/constants.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultMethod: () => (/* binding */ defaultMethod),
/* harmony export */   validMethods: () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrCreateDefaultRouter: () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/normalizeHandler.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeHandler: () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/.pnpm/workbox-routing@7.0.0/node_modules/workbox-routing/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/Strategy.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/Strategy.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strategy: () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/StrategyHandler.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/StrategyHandler.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyHandler: () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/.pnpm/workbox-core@7.0.0/node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/_version.js");
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

/***/ "./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/_version.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-strategies@7.0.0/node_modules/workbox-strategies/_version.js ***!
  \*************************************************************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:7.0.0'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/index.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/index.mjs ***!
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/index.js");


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
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@3.1.1_eslint@8.57.0_react-dom@18.2.0_react@18.2.0_typescript@5.4.2/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \********************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/.pnpm/workbox-precaching@7.0.0/node_modules/workbox-precaching/index.mjs");
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
    const precacheManifest = [{"revision":"c41309c226bfb3efe2c66f77f0176716","url":"404.html"},{"revision":"29b14a2d50c07cd3860d754c43546644","url":"assets/css/styles.039e8244.css"},{"revision":"d806e53cbb85a5984a4f71ecfaaff929","url":"assets/js/0014f2e3.4e67897f.js"},{"revision":"ff6435afee999082a03d9356a6f5f9e0","url":"assets/js/0035e275.dd4c9e89.js"},{"revision":"899e89f65cd594c6fc2c3e50b2fba957","url":"assets/js/0042287f.d1d1116d.js"},{"revision":"1a89d9c688472649d01efc8ed73d13f2","url":"assets/js/0055ae99.cb0af058.js"},{"revision":"632fefb293b22884d32eb02afe9a1763","url":"assets/js/00fb4336.f1b00140.js"},{"revision":"5c843a2649ba48b34036e7e6cd787c3a","url":"assets/js/00ffc4be.9d7b7bd3.js"},{"revision":"20e10fb6b2e8755f647cab345c69ffa9","url":"assets/js/05d10be6.9912268a.js"},{"revision":"4733fc1075927864456ace30d3a17739","url":"assets/js/06d86785.ff89853c.js"},{"revision":"849d58125855241c85cc8e36f803a093","url":"assets/js/07ac9507.c07c89f4.js"},{"revision":"ac9b888d3c1304e6521322db3e2e37a4","url":"assets/js/08e8f103.ebf8e97c.js"},{"revision":"dcc48d3ff34ac8039b415f9d5b29d001","url":"assets/js/0a863ded.d969ebf9.js"},{"revision":"f861596842d711a02bfe475e8568f5cb","url":"assets/js/0b4d5ba7.ed9078d4.js"},{"revision":"86036ff2e2ccf6350eb3cb5bb1e2c139","url":"assets/js/0bab7aa4.12c684e1.js"},{"revision":"58b8b8958c0ffe51b889a62d79b84deb","url":"assets/js/0c1a9b43.eb5b2176.js"},{"revision":"03866db55882286ae5fa4fc754fc689d","url":"assets/js/0d5abc34.a9ba6c65.js"},{"revision":"8d39b490944f09d90b08e9dd8dc9cb52","url":"assets/js/0dfa3724.648fe5c6.js"},{"revision":"2b1c5c40d194f217141f57720df3482e","url":"assets/js/0dfb7804.3d865cce.js"},{"revision":"606387b96721595359d910349d9f5677","url":"assets/js/0e675381.76af2b4d.js"},{"revision":"4ca834e2b7fb07a648ae2721503659b4","url":"assets/js/0ec2a0b0.e8ba552d.js"},{"revision":"7cbe41f27af0e51c60d667930aefa742","url":"assets/js/0fb07bd5.1240a370.js"},{"revision":"cf09b9e6c14225c381aa7e0b7f5a30f3","url":"assets/js/12570b78.62a2a16e.js"},{"revision":"da2a690a95d3811dc25d95ee4089a971","url":"assets/js/12c97a1c.813da740.js"},{"revision":"78d70eb72cf3c3e0bdd26a827f99267b","url":"assets/js/13bbecf7.a5d50681.js"},{"revision":"2d3660f7887155fdeb0d8f96c948e4f8","url":"assets/js/13ec1e59.5321e8af.js"},{"revision":"73cdb7163c19352adcb69a8231a25f1a","url":"assets/js/14eb3368.abecc3a1.js"},{"revision":"13105d53be48bf9baa03e3afc872dc57","url":"assets/js/1584a71e.a2c22970.js"},{"revision":"24863302c3aa097a476ec758e222cfc2","url":"assets/js/160513e6.aa4603b9.js"},{"revision":"18da7d7d3d5ac4831b4d5757c0507725","url":"assets/js/165.140dd4ae.js"},{"revision":"07b6dd5bc2a76a288ce32c224f604e5b","url":"assets/js/1675e895.906432d3.js"},{"revision":"c1c6277f6328ce93e08db4f7b81317bf","url":"assets/js/17896441.e7cf91e1.js"},{"revision":"22467c5b987fe23adf5eb160deed5b39","url":"assets/js/18.58347072.js"},{"revision":"862f7642c7e56c0764831e39309d9237","url":"assets/js/186.30f83b99.js"},{"revision":"d0fd1593460446d9d78747363a20ef0c","url":"assets/js/1875.b3e2c141.js"},{"revision":"347455d20edcfce3e6d1edbc4bfd1196","url":"assets/js/196ca7f2.b857da27.js"},{"revision":"2f3b71dc2b47f59f31b0dc5e1cc993af","url":"assets/js/1a591ed8.04cb480a.js"},{"revision":"0a0a9997ba19944781c2191c6906b70b","url":"assets/js/1bd3ddb7.e1ccddf1.js"},{"revision":"793a448c2e4e42bbd657247f0d0cddfc","url":"assets/js/1bda19f4.88a4d7f8.js"},{"revision":"8df2b15563463ab80ce76bc40251bffb","url":"assets/js/1c5fcc5b.0748d354.js"},{"revision":"dbd944c6f70232d36ef732698ffb284d","url":"assets/js/1cafaec8.81c553bb.js"},{"revision":"7c838c9a5013f06e7df00a66a0d4183d","url":"assets/js/1d67b61b.e7e27e45.js"},{"revision":"7fc468132c17e6361650f16999da681b","url":"assets/js/1df93b7f.02bd6dc4.js"},{"revision":"9b6e9230be8dcb73355c30fd74567375","url":"assets/js/1ecebb43.2cc8f1dd.js"},{"revision":"83392c9a7ad75dfe197ef5ac3da65773","url":"assets/js/1ef3786a.cc74ce71.js"},{"revision":"2ded8c79bc11b246f18c962cd45a4457","url":"assets/js/1f391b9e.b3b3be15.js"},{"revision":"7b12a250be2998fbb1bc6ff77c49773f","url":"assets/js/20.b288d25f.js"},{"revision":"aa77c353f318c3319c08d9758d739c73","url":"assets/js/2030.61f86c14.js"},{"revision":"b535b6386b4e1606bb96ccf6f34534e7","url":"assets/js/21518505.fae93438.js"},{"revision":"4a2ed54eff5a67823426fecfe0c8a27f","url":"assets/js/2165.fe6ffe62.js"},{"revision":"cd6fada3aaf23bda2f74b30bf9b52609","url":"assets/js/21cf50b3.84d47df6.js"},{"revision":"136fb696c62593783077da3d91b7094b","url":"assets/js/24f838f6.545af212.js"},{"revision":"144f141005e2411cfd4dc079e011324c","url":"assets/js/25ea0b6e.6c146428.js"},{"revision":"2d62d782327f880cc9cfaf160fda0a65","url":"assets/js/26b500ba.98611fe7.js"},{"revision":"434d6ca2e3e156fe6e3c32d61dc83e11","url":"assets/js/26e692e3.70f1c9d1.js"},{"revision":"8c8eee13f647600406a45cd135c2f920","url":"assets/js/2797603f.6299da8e.js"},{"revision":"8366921a8bec2617175e86538c855486","url":"assets/js/28d0a442.548574e1.js"},{"revision":"73f51fa7f2a28f1e0dfeb930cf0b8b0c","url":"assets/js/2981a785.97072be0.js"},{"revision":"ea0be4c366fafab9835fa220390bca2c","url":"assets/js/299fd2d4.d47efd24.js"},{"revision":"8d4c03d041e283ed3445280a41c003ff","url":"assets/js/2a5f10a0.44c6e834.js"},{"revision":"9cf9ecf92e9283042fd824b463478694","url":"assets/js/2aa24227.9dc9818f.js"},{"revision":"eb454cfdec7c6eb69defc8e466950714","url":"assets/js/2abe3314.015589f1.js"},{"revision":"203e9c5972f5f07739d8baefb5a18365","url":"assets/js/2bfd5bf2.5167a1f4.js"},{"revision":"d59af9045d34e85ba74f1262c6b2c8a3","url":"assets/js/2c0913dd.5ba88efa.js"},{"revision":"e1f4dc031e0849d4d835ca0395502a9a","url":"assets/js/2c2f03e3.05670fcd.js"},{"revision":"7dafdf886f8cd381e2ab50510be78845","url":"assets/js/2ead8e40.036ecb19.js"},{"revision":"2721a88ad37aacac6718fdeae8a805d0","url":"assets/js/3099fbd1.7b8d093e.js"},{"revision":"95747bdebdad030b74490b28dcbd4ff5","url":"assets/js/31885b5e.315f6403.js"},{"revision":"bfc2a3785a73b01c2cbf5d16f1149d63","url":"assets/js/335f5346.662d174c.js"},{"revision":"d2a75cafc7db2f9c3f23f844e1f351d6","url":"assets/js/34e9cad0.f203530a.js"},{"revision":"618ecd811cc4f5b0b70c31fdac9a50a5","url":"assets/js/353d7f1f.48c35944.js"},{"revision":"ba10917df7942cc65a3dbb99eb31d9e0","url":"assets/js/3617eece.aa75a00a.js"},{"revision":"7c79b6f537098e484a0161810407c9b6","url":"assets/js/3685eac7.b277b58b.js"},{"revision":"0ff850e53c0d155277476dd9962ffcf8","url":"assets/js/368b2af3.292740a3.js"},{"revision":"e7089400c08c41e74b88367f6587c06f","url":"assets/js/3743.dce18cef.js"},{"revision":"803014fa82294eee277f1b2c10551db2","url":"assets/js/38d436cc.be74a07d.js"},{"revision":"eac0680b4301ef98d03332169035aade","url":"assets/js/3a9fc4f0.16bb3983.js"},{"revision":"d28b27c28eca1aced42358f3361edc94","url":"assets/js/3aa1d8cf.7b53e608.js"},{"revision":"f22055e17d670468a9f9a9e54664020d","url":"assets/js/3c16a28c.ad40d00c.js"},{"revision":"2b25d9c3d2fe80fe013310ff54699b43","url":"assets/js/3c655c76.ee46da0e.js"},{"revision":"0c0d22d3ebd684576af872382c6c6a0c","url":"assets/js/3eb8918e.6b1b0bd5.js"},{"revision":"8714740c004b0779250be07285e84410","url":"assets/js/3ecdd678.cbddd448.js"},{"revision":"c49ecf2418973de7aa0e8e65183c782d","url":"assets/js/3efc06cb.123fa439.js"},{"revision":"92cadcb60a0e5d338b345368f3bf83cb","url":"assets/js/3f3e63fb.09a86f29.js"},{"revision":"80b5906daff01dbe6d9c0d0bb64c9aa6","url":"assets/js/3f835183.25c3b9ca.js"},{"revision":"8e2d131087d5c4b5f7d7300203351fe3","url":"assets/js/401f1e8f.1a5fbbb1.js"},{"revision":"d27f8846e0ef5ffbb39b3ce7a6611cf0","url":"assets/js/417dc7cb.b75edb22.js"},{"revision":"68c5146447df69d32b6bfadcecc2e86b","url":"assets/js/4186.9eb3838b.js"},{"revision":"858e2ff2123000c7f659690bf754e3d4","url":"assets/js/418ad307.dada6147.js"},{"revision":"8e70f62e0cb6e767863451842bf912f0","url":"assets/js/421ae91c.c7104e91.js"},{"revision":"006a68700b4e3312c10bb57fdbbf5733","url":"assets/js/429.9f7884fa.js"},{"revision":"de8eb5032a41e1b855ec706547ea2746","url":"assets/js/4290a99b.6b09aeb6.js"},{"revision":"9e76c0da05ffbe86da15e35391420d91","url":"assets/js/430cb1dc.de758c3d.js"},{"revision":"4260596544bd47cea3e1df94836c4601","url":"assets/js/43fcff82.85167423.js"},{"revision":"fcdd8b51b22ca5803bdac290c30d6346","url":"assets/js/444d4fb9.0c9d61e2.js"},{"revision":"a36b480c5ef580b282d592f59f6f614f","url":"assets/js/4455a696.51cafaca.js"},{"revision":"aa41d8a8f71a586d1a25f45448948997","url":"assets/js/45ca1306.0bc306cc.js"},{"revision":"a2ad5e4b0a31227ed8efecc28aa84a2f","url":"assets/js/4618fa1a.27931907.js"},{"revision":"a1091478cf72affa43e4ca37c29e6141","url":"assets/js/47db058b.dd09ece3.js"},{"revision":"77d9f60699021ca77adad96843387faf","url":"assets/js/486efa96.cdbf7d8f.js"},{"revision":"0985dba8d234c64a4d5fbc1504f1f947","url":"assets/js/4872.9ca357d2.js"},{"revision":"3d79b280b97551fe47de649d5969384b","url":"assets/js/48a7df61.c2c2eff9.js"},{"revision":"df1a5ba89a98dde4b8e3aeace05794d4","url":"assets/js/48ff9475.7d91c408.js"},{"revision":"14c7f76ea065cc72caa7a74a073410c7","url":"assets/js/49847bb5.85d004f1.js"},{"revision":"e41b0048d7e3670c50e7976a41c5cb27","url":"assets/js/499dbc29.33730ba7.js"},{"revision":"420cd3aa3214348b1e6613883c085f4b","url":"assets/js/49a680fa.0185b39b.js"},{"revision":"bfca8cd804ee7cf705c48e6b87165fd1","url":"assets/js/4b1bc88e.9cd684ca.js"},{"revision":"1b3714b951fdbad88b37ef8cd8d7ab4b","url":"assets/js/4dd2532d.3ad69331.js"},{"revision":"c79a7987de17dc76153405dea1d5c39b","url":"assets/js/4dd87e68.ade05cdf.js"},{"revision":"0d997f4a9f6ea0796804f6fac6d9c09a","url":"assets/js/4e122f11.e535117a.js"},{"revision":"b82460f05e3bdf2f19870d08c13e5b4d","url":"assets/js/4e7898af.63220d91.js"},{"revision":"cc4988682aff178ad2031465a28d9adc","url":"assets/js/4ec2ca4e.6b038702.js"},{"revision":"24f41fa70286dba6743e1c715fcdaa59","url":"assets/js/4edc808e.f86d3caa.js"},{"revision":"62cec0b37fdf7ab6bfa96f783ec9dc86","url":"assets/js/4ee1adc2.cef03548.js"},{"revision":"1e9a1897294cc98c96e2446204de2b0e","url":"assets/js/4ef6f358.884843ec.js"},{"revision":"297b001b0cf29fb08ae88e0c2276db3e","url":"assets/js/4f4befa1.e9460792.js"},{"revision":"78da0094d5ee81097d232bf0043130a4","url":"assets/js/51a1dc1a.4e2d0af9.js"},{"revision":"a107d9d0d74609e369b5a6a9ee902a79","url":"assets/js/525a390a.337fc18d.js"},{"revision":"827dfa12a8ac5c6cbd5e020d324b537c","url":"assets/js/5412b5d2.bd93e8a7.js"},{"revision":"23275b413f2b7059ccf4bf89a36c023e","url":"assets/js/54d7e390.a1005c44.js"},{"revision":"d55f9564a44a1d9f850ada4c0a7da416","url":"assets/js/55667eca.39b91e40.js"},{"revision":"2e22308794adffec029e0f5382ca5c2a","url":"assets/js/56a7c978.d25d6f73.js"},{"revision":"32701f077d019def7cdd5a659af9d78c","url":"assets/js/574dbab1.d523c547.js"},{"revision":"18695c8d9f93f450fa4df6da58e27833","url":"assets/js/57e1e6c5.2776abd3.js"},{"revision":"fd515d2ad23d022d5a47e23ca64846fd","url":"assets/js/583ba798.8b859a13.js"},{"revision":"37571784bf421fc508d631c90aea54dd","url":"assets/js/585ae644.0e8afae6.js"},{"revision":"12287af39e79034faf3f321575242a16","url":"assets/js/5901cc52.151c9397.js"},{"revision":"77f5d755479a683816230557180b2da6","url":"assets/js/593ca3da.e005cf35.js"},{"revision":"1e1f7fb83b362d9879eb8185a199fcf2","url":"assets/js/5c5ed4b0.6fa60125.js"},{"revision":"ec562cabf5159dd1521b7f938c1c3281","url":"assets/js/5c926596.58c73a6e.js"},{"revision":"a21a1790ace170cd718038b7135fcc4a","url":"assets/js/5d0ce896.b119fdf7.js"},{"revision":"9461fce7e992f7e128e2e54d279bcf8f","url":"assets/js/5d44278d.6ac8b3fa.js"},{"revision":"43007b9491847a4cc65b51ccd2b8cb0b","url":"assets/js/5d901f6c.c23299e5.js"},{"revision":"0b1048b1aa64cff8ab4ab4aa98902e68","url":"assets/js/5e812b6d.82c22572.js"},{"revision":"c6a9d4c11ff92d463ef4f882b5c51870","url":"assets/js/5e95c892.b7bb942a.js"},{"revision":"aaeeb0e45c33da75efe9d714f4cdecca","url":"assets/js/5eb2f6ae.2b14f7ac.js"},{"revision":"90ac8b517c10c35ae824fbce81ae89f9","url":"assets/js/5fbcf17e.13e6e906.js"},{"revision":"26a22acf0788b03a07871729c9e2aa0e","url":"assets/js/5fc3e4dd.6077a512.js"},{"revision":"e5cbe8a74ef7e31543854150e287dc55","url":"assets/js/60704716.81f66e09.js"},{"revision":"800858e55481d95049f22307e3218986","url":"assets/js/60add6f1.b205ecd4.js"},{"revision":"61101634437c3320e12e27d7c2befd8a","url":"assets/js/60cd687a.c380cea8.js"},{"revision":"d9f00275f02847a4ae353d7faf3de4d0","url":"assets/js/632f43f9.8ed4d0a1.js"},{"revision":"de046578ac5a86afcd15c60ae1d050d4","url":"assets/js/638be404.69899a13.js"},{"revision":"cc91dfa74623e16f5f29e65af5dbc422","url":"assets/js/65e4ccd4.b6db9cb4.js"},{"revision":"6f66f3bf543d1c790fc733afd7242e05","url":"assets/js/6627.2303bc4c.js"},{"revision":"2b5f676498b6aa818dd37e96de64911b","url":"assets/js/6798f4e4.d14cc954.js"},{"revision":"d10c2b03b8c30aba551ce23f0bbfaa2c","url":"assets/js/68233c82.a30734ab.js"},{"revision":"f755da3488e0446dcfdd19a9005a73d4","url":"assets/js/68e30b06.2ded6abe.js"},{"revision":"1244ca354a358dac66ae827f982f2b30","url":"assets/js/6a00305c.e33761a6.js"},{"revision":"0abb60160fe589293c29da7fefc2deba","url":"assets/js/6a3d40b7.7e0983c7.js"},{"revision":"88953755d550633f04c9336cb29bd2fc","url":"assets/js/6c4c4dea.960bf819.js"},{"revision":"f8145c7b477218e49b0d18f6abc40dd4","url":"assets/js/6d9bc096.d906d9ae.js"},{"revision":"8d5d6847ef08d30b6458e57e730c4e3b","url":"assets/js/6ec71b44.b82ae60a.js"},{"revision":"094ece1b883582efe1ad32bc0a33edbe","url":"assets/js/6fd14778.9eb3612c.js"},{"revision":"a37906ebe7415f2139f4db4cd6b0be70","url":"assets/js/7020.a1767e6b.js"},{"revision":"2e26686c1be0041816f04bb44a6eb464","url":"assets/js/7042.98f8ad70.js"},{"revision":"da0e0cf438fc2e0c8666e6ad66d9ba3f","url":"assets/js/70c0a5b1.8b1b9420.js"},{"revision":"d4f44000667d1fc8bdd3a292e810371d","url":"assets/js/70c4bb45.35660b2f.js"},{"revision":"0e6f636ac4b9aa970ef4284bc68edf74","url":"assets/js/7152fb6e.f619a993.js"},{"revision":"28592e265ce550010a8a07f13c4065e6","url":"assets/js/719399d6.51c3e89d.js"},{"revision":"ac538ad2eb18428805edd1db2a78af59","url":"assets/js/72cf1be6.e7884914.js"},{"revision":"8876e58845bcaf9a38542cc0fcbb143a","url":"assets/js/738fa3a4.465aee4e.js"},{"revision":"d6ca9c74aeebbb989dd913dfa1cba3bb","url":"assets/js/74512fd2.79975cbb.js"},{"revision":"21af7a26a99b4bb48566e2fead7f9bc8","url":"assets/js/74dda8d0.536de03a.js"},{"revision":"3daad87ac8cfdc7777db82990b34b117","url":"assets/js/768714c1.3336d54f.js"},{"revision":"c13b010ed6bc6141c95b4e5ed0073e6a","url":"assets/js/76def669.e0fcfd75.js"},{"revision":"c15dac5001ed5296bcf5c22824f992c6","url":"assets/js/77a552d2.9649bccd.js"},{"revision":"12e60b3f168fd20b8607472ba9c4f50a","url":"assets/js/7886.16476912.js"},{"revision":"30d3935f2c6965bd0f37c80cad676632","url":"assets/js/79606cc0.50fcbcf9.js"},{"revision":"19aa7ca8196a755ba7a9713deab37d03","url":"assets/js/7a28f1bd.a2b1f973.js"},{"revision":"2c0e5d4f1c645f7d8e71f35c29cadb98","url":"assets/js/7be57a40.b3d7de68.js"},{"revision":"f7c4d52bf371bf93c08d002107ccd9b2","url":"assets/js/7ccbf748.297bcfff.js"},{"revision":"bf4b8478147c2adb7da9fc90176f4b56","url":"assets/js/7d4014a0.e348b241.js"},{"revision":"7ff512a90654103efd53544a4410772b","url":"assets/js/7d79b262.8fff1a68.js"},{"revision":"078e96cabbf4d6656b1cda61b6872c61","url":"assets/js/7fcbdee5.d7ae60db.js"},{"revision":"4b23b6684bb8e7d88a6ff172f0b014c4","url":"assets/js/8081.168cf305.js"},{"revision":"6d9f6b98a8a8a352e5a9be9c53b2391a","url":"assets/js/81350798.eea4a769.js"},{"revision":"560606c4e3e11dfd031149430e05afea","url":"assets/js/814f3328.e03e214d.js"},{"revision":"08b30a8d385a0d6ab6092ff5337f4361","url":"assets/js/81b0b826.f660d8d1.js"},{"revision":"92bea00d406903995554b8c9670e5a80","url":"assets/js/8233.3491cbd3.js"},{"revision":"f55a58d3f01428a8162855ee55945d77","url":"assets/js/8235.58bfa92e.js"},{"revision":"26ae9facd4dfdf95f0012dc80957ddc6","url":"assets/js/8264.3f21d0f8.js"},{"revision":"08473e6ade830dbc8fe63c1409a10a70","url":"assets/js/831d5710.90ec8ae6.js"},{"revision":"e9701b37c849bfc372c7ec5aeb0684ed","url":"assets/js/8405e40b.90933f1d.js"},{"revision":"d8dd472a88b84857114ab3ec892fcf48","url":"assets/js/844e8bde.80048111.js"},{"revision":"54231d98d787576f3cfce3e127699049","url":"assets/js/8698047a.ebd86932.js"},{"revision":"224d286259db5d12b41027644051d6c6","url":"assets/js/875.e0e380f1.js"},{"revision":"10be56b447286e08c18b2dca1b0ec238","url":"assets/js/877814a5.3cd0f8dd.js"},{"revision":"8912967cf4b680d96760de904eedad53","url":"assets/js/878419eb.08ca9319.js"},{"revision":"60c6f6d5b3598931f27b7800f3a86a9b","url":"assets/js/87f085ac.78a638cf.js"},{"revision":"16d788a1bb22dca6fe899778f373f6a8","url":"assets/js/88ee3594.2201a0c2.js"},{"revision":"c7b481d3b1286c13a753ad45ccf8862d","url":"assets/js/891c38c1.d6b12351.js"},{"revision":"2da48267c0966bc619b30fb4c43ef691","url":"assets/js/8934c416.f4e98cb8.js"},{"revision":"d86781194099a5d1524cc3988401e116","url":"assets/js/8bb873be.711abd5f.js"},{"revision":"e985b6fc5a36136ff4d68e5a7878244e","url":"assets/js/8d3daf7e.88050122.js"},{"revision":"0ca9cc5822b5ea013b74c7adf45b1557","url":"assets/js/8d5100a5.f509152c.js"},{"revision":"d49d4b7f1385b5748aaa3f83cf5872bf","url":"assets/js/8d6d7042.fcc206ec.js"},{"revision":"07a27f4c96ec3335f2de2f2615c4b11d","url":"assets/js/8d87430e.fd0e242b.js"},{"revision":"e80d6a4dac3149d1c717b34eac79be09","url":"assets/js/8de208d4.90a1efab.js"},{"revision":"bb43e3bf5dee2aadd8de976e703f6f27","url":"assets/js/8f2d6012.3a35bd0d.js"},{"revision":"f8822d69da200e4fad63b232a4921d15","url":"assets/js/8fbb1d25.8e0ad624.js"},{"revision":"be903a392e36c3171b6d9f823c4e602a","url":"assets/js/91a408cf.153e4ed2.js"},{"revision":"ce91e7c120d22dc42ca29dc9ecf96b66","url":"assets/js/931c7e04.9f589295.js"},{"revision":"935e6590d113802c8c44e1d201e27007","url":"assets/js/935f2afb.9ca496b3.js"},{"revision":"5b4b56749546aa89d478fbe43bec2fe4","url":"assets/js/93c7142c.953673f4.js"},{"revision":"a33d0d497b5e7ad3074383827a28f6d3","url":"assets/js/94642dbf.b6a091c8.js"},{"revision":"64fa41f5bbf13ebe09c65c95c316c223","url":"assets/js/97dd099a.0adf011a.js"},{"revision":"70fbc241375294e3c5ac61f129002af4","url":"assets/js/97e86fd8.2ea63b7b.js"},{"revision":"1f4a4b06336689ada2a20012906b8d07","url":"assets/js/985ca71a.daaad558.js"},{"revision":"56cf6909212b5356b9199d164ef74f64","url":"assets/js/98df52f6.8235e0fe.js"},{"revision":"6583eae49f9c32d92d814e6ffde742d3","url":"assets/js/99b5f837.2f014a3e.js"},{"revision":"7e33e2f255b3d26bc47c604e37c3a962","url":"assets/js/9ab58b3d.fab4bba4.js"},{"revision":"0c95e5f0ac48771f2d55530122cf4bc3","url":"assets/js/9ad987dc.fdeb8033.js"},{"revision":"d69400b09ea12b3953c02e6fd4f1295f","url":"assets/js/9b9d8a78.19c68f41.js"},{"revision":"216f4701566646e1a3eeb4b9201014d1","url":"assets/js/9c34cbca.d91e16c0.js"},{"revision":"b43d21aca7a5d74057bfbde47f4f4052","url":"assets/js/9c658726.abcf1782.js"},{"revision":"985165f8675ad87368faedbaf8481eee","url":"assets/js/9cf65f97.9a5d9e1c.js"},{"revision":"3a9000f5631a13e142c59e74bdb8fa66","url":"assets/js/9dd555b1.59630c0e.js"},{"revision":"93b898111fd73de65c7f9b2739c9694b","url":"assets/js/9e4087bc.407e6cce.js"},{"revision":"e1f7b7c5ed8fc9785f6c4a20e7732b0d","url":"assets/js/9fa1da0a.51ed67bb.js"},{"revision":"16b90c956b77a5fc2adddcd41b26f9f5","url":"assets/js/a037c63f.8753d6d1.js"},{"revision":"4b78f5c386326f5f7bac947919c916bf","url":"assets/js/a1a3e7de.8fb41d6d.js"},{"revision":"c3632e800b2421f909c58cdca2232b18","url":"assets/js/a24f541c.eda2a80f.js"},{"revision":"92e135c8fffd4a65b5c62a3e0f5ec3b0","url":"assets/js/a342c8c4.24130ace.js"},{"revision":"d0992102eac1e4320c36a27243d244c3","url":"assets/js/a3919590.9dc38e1e.js"},{"revision":"2ffa3ed395cbde25a8753ebfec00d736","url":"assets/js/a3a61869.37e87e8d.js"},{"revision":"5bf3d810daea1f2a1cf5750c52528978","url":"assets/js/a3c88c0b.88e2b54a.js"},{"revision":"d0a8e0b21d078c8f1dd28edc554a40b8","url":"assets/js/a3f2e35e.022f1d52.js"},{"revision":"bbbba2480a9f0babce1cf22e7d082eeb","url":"assets/js/a44af050.f918253c.js"},{"revision":"5867c02223cb9b9d6aff10bfa70ada13","url":"assets/js/a5aec623.f205577a.js"},{"revision":"4008bb81fdfa7c91c105d0043a646b95","url":"assets/js/a60a8c4d.ee5b8ce5.js"},{"revision":"c7e4a490e3d71c8670826a1079ef1f92","url":"assets/js/a6aa9e1f.99452f5c.js"},{"revision":"e9405c552fc94fd79f74e1167a9fe0b5","url":"assets/js/a7bd4aaa.ac6ec1bd.js"},{"revision":"72305b7d1c0dd9562c512c408619977b","url":"assets/js/a85b56be.7229be55.js"},{"revision":"e9c0f89ed944c3caaf9b36060189da20","url":"assets/js/a94703ab.45f935fd.js"},{"revision":"572ba495e9004a647b71f534ef16ae46","url":"assets/js/a9fb8aad.f2050f98.js"},{"revision":"355e8b005986f99e005c8dc58f23a6c9","url":"assets/js/ab0d2325.e5d57a6c.js"},{"revision":"5531490002f07ceda6c9dcef28dbe0fa","url":"assets/js/ada740c2.51c2dabb.js"},{"revision":"df48f01133e596006901c9a53ce367ee","url":"assets/js/aeb09130.a8bfa50a.js"},{"revision":"55878fc1a7a1d46e72f2d22152f6c740","url":"assets/js/af593c11.f9bfd09e.js"},{"revision":"1684543beb33154f6d430f856cd7f970","url":"assets/js/b0072286.f3bf2806.js"},{"revision":"76594f61d6f28c996560f428088b5ab8","url":"assets/js/b01385c6.449e7fb3.js"},{"revision":"4c4e461978eed27f74490fd65ca4483b","url":"assets/js/b09a966d.99c54206.js"},{"revision":"c23122fb09bd06be802591930ff607f8","url":"assets/js/b10d2d1d.f26aa719.js"},{"revision":"0f44ec741e88b218a2e674f29ea61351","url":"assets/js/b180cfad.88098b28.js"},{"revision":"7678eec51102209e55c723f101626059","url":"assets/js/b1adbe5f.2fabc3c8.js"},{"revision":"c8dc8f66877aef580d2ef473230ad4ce","url":"assets/js/b229e7b4.25bab79d.js"},{"revision":"d04141a12058f23734a53560226ee454","url":"assets/js/b2b675dd.b6c6ab5e.js"},{"revision":"c0d859f38c03763bbbcf0af0bfd40710","url":"assets/js/b2f554cd.036a23a7.js"},{"revision":"aeaa60830dc24c3a3076a926da6931ee","url":"assets/js/b468d581.4cad29d1.js"},{"revision":"653609286c8e646342999a7dd044c15a","url":"assets/js/b4d1969b.886036cc.js"},{"revision":"1960cc963e709ce9803aeaeb19c37236","url":"assets/js/b5054348.9e13d4c5.js"},{"revision":"b4361f7d73a88f50626270fbe6e25fdb","url":"assets/js/b7fd5d9b.a0373d86.js"},{"revision":"16d05fa94184e4d35760aa45bccc970c","url":"assets/js/b8bad8b6.ae1fef5a.js"},{"revision":"d5b2b89d688d794fcc47ff02f573b7f0","url":"assets/js/b8f857cb.ab5d8f7b.js"},{"revision":"3b34a2fcbd339c62063ab41d131670a7","url":"assets/js/bca100fd.05143835.js"},{"revision":"37bdc1d4a8d0bd92b7859859250ceb7e","url":"assets/js/bcadd4b5.77250f39.js"},{"revision":"387644bd2bb2245a805bad8febd554e6","url":"assets/js/c059fc3b.d087bca6.js"},{"revision":"16d593158116f13a4ebf1c63524c052d","url":"assets/js/c09518a0.6a2f4b67.js"},{"revision":"b9d24eddb2fd9d22a1bd2086c8071e40","url":"assets/js/c143124a.a272c396.js"},{"revision":"6ca90f65f32fff64b60eaa6590d9fe93","url":"assets/js/c1cbba14.dc779467.js"},{"revision":"599f315137b5f7e62d1f811078b3106c","url":"assets/js/c2ba1a43.fc5a4204.js"},{"revision":"8548ce4c104ab6885705199cc5a3b403","url":"assets/js/c36f9ac4.92f69e91.js"},{"revision":"148799d77abb8c37e732c24bbda9d0e6","url":"assets/js/c37f2d73.774739c9.js"},{"revision":"2b448793185228ee77664c7b6776621a","url":"assets/js/c399785c.2913410b.js"},{"revision":"e5d5da275ff727582113914bb247a556","url":"assets/js/c5697d08.ba58748c.js"},{"revision":"ff276b1a0e0111f7b181d63481f714b8","url":"assets/js/c5a80f01.06afb5eb.js"},{"revision":"31c19b4ee6c5afa222edf1dd1eea8954","url":"assets/js/c6fa8535.14f0f2c8.js"},{"revision":"01eab6b1ff8c0a74ac398e85441f6ab5","url":"assets/js/c713fb68.bcf93a7e.js"},{"revision":"1a2ca7f1b3a938ae1fb12977c1dfcf16","url":"assets/js/c7d7c2cf.208e8fe5.js"},{"revision":"bb2cda7f8be73a69b8a3478397c8c0e7","url":"assets/js/c7f20b34.1b5798c2.js"},{"revision":"1407a902f040e72845e404bae838b5cc","url":"assets/js/c918d1af.53757286.js"},{"revision":"063bbb67131b9f3ffa861a2236609393","url":"assets/js/c923d4b1.546122b0.js"},{"revision":"51858d9bb09a0d4dd13926be9f48d223","url":"assets/js/c96ee667.b4e81abb.js"},{"revision":"a20c517603d9227b136d743ec226f59b","url":"assets/js/cabb6052.45fa4a54.js"},{"revision":"8264e3e47449781b5c6e1f3d16351c98","url":"assets/js/caeb3f87.089cab96.js"},{"revision":"5364aec2cb6673bb843084ab4ee29248","url":"assets/js/cba120a0.c40f3704.js"},{"revision":"4b7049c4c18b6f300cd14c9fd42cc07a","url":"assets/js/cbbcf4f2.b6511d6d.js"},{"revision":"da8f0f0e2815f9cf312f8b63e4c41118","url":"assets/js/ccc49370.a734e351.js"},{"revision":"d6d654eff873ae4c001ce5dc191a13a5","url":"assets/js/cce3350d.768c322a.js"},{"revision":"a38c07f0ac7fb28ec92e279487f19227","url":"assets/js/cd46b10a.d9efe122.js"},{"revision":"0e66f0a848ff48f9d9d0605e54017b61","url":"assets/js/cd85a010.f195f4ee.js"},{"revision":"25d65be65b4a772ba98aa466c5e0cd61","url":"assets/js/cf1baa66.0061ffa2.js"},{"revision":"d1b8ab0c8d5fe8104f36b62893bf46b3","url":"assets/js/cf4855b3.3a924e28.js"},{"revision":"26554184c418ad6f2bc932996a18f8cb","url":"assets/js/cfc0d746.08a412d9.js"},{"revision":"9ed5c6c547eab1250744715aef89b6c0","url":"assets/js/common.3500a368.js"},{"revision":"9b03fce161d8f08890da0e5c4a0018f3","url":"assets/js/d089f3a2.fce16a8c.js"},{"revision":"7f0989e83e98975e1daa760d68c8e1c3","url":"assets/js/d0eed897.0aa2d5f3.js"},{"revision":"cb8d07fa806029efbccce444beb95c52","url":"assets/js/d146efcf.f73b0f72.js"},{"revision":"31a6cca6797dc5a50a5b3501846a1747","url":"assets/js/d27e4703.121d616f.js"},{"revision":"f35b2b95e611f792fcb48aabd67c589c","url":"assets/js/d4244827.90e2a3f2.js"},{"revision":"fd3f706fcdec7d417c062e33f4f6269f","url":"assets/js/d4693b41.44567d4a.js"},{"revision":"fd4c4d25913fcd3bd30943219c1a34a7","url":"assets/js/d4927cd4.d373de21.js"},{"revision":"cb439a4b6fdeb49ae9aba14d043e008d","url":"assets/js/d69a32a8.c1b7b88f.js"},{"revision":"ecd0cd5fdcaeb6f5cdf0ebb4b258a428","url":"assets/js/d774de2f.c47cea66.js"},{"revision":"d1a20b3692d6df4ade7165d988f738dc","url":"assets/js/d7d404e6.0f281bd7.js"},{"revision":"4c1c9f77f7c5eee5d0984da003e70814","url":"assets/js/d806ecdc.072ed00f.js"},{"revision":"43a779f7d37a195e9f3569427c60e311","url":"assets/js/d8911f7f.7b21fe0e.js"},{"revision":"588901c67ad69155f3876522f3efdd00","url":"assets/js/db19a329.4cf8171f.js"},{"revision":"1f29af57cb2da88ea2783f1018c61284","url":"assets/js/dbeb8484.880049a0.js"},{"revision":"dd4bd9ac03dbbe4713634195453354fe","url":"assets/js/dc0f51b3.6cc0bf82.js"},{"revision":"4641b4eef633ea301c9e3daa9074509a","url":"assets/js/dd4157fa.43881386.js"},{"revision":"02dfb8f4ed912f14b2318a2fb3534789","url":"assets/js/dd68989e.b7320d23.js"},{"revision":"23065c5cb1eed28e059007b86f54b5d8","url":"assets/js/dda8ff89.c011b259.js"},{"revision":"e83d6d8906f9f42b0cb3300600ce43a0","url":"assets/js/defee600.fe562a92.js"},{"revision":"8721ab7de5453ba58897c061771511f5","url":"assets/js/df64ceb5.c853118d.js"},{"revision":"3a61a1f196bc3d3f0d4f3390feb8dca7","url":"assets/js/df8a8323.22bb4bac.js"},{"revision":"c838065e0b04e02eb62990644cbd755c","url":"assets/js/dfa18018.7602f384.js"},{"revision":"1f68c904a0b8492a8be89c4586a1b0e7","url":"assets/js/e028d6bb.15f558dc.js"},{"revision":"5d1f12da32adf2eaf0b0e9daf84f50d8","url":"assets/js/e044428a.23a13feb.js"},{"revision":"ce5d361bae14da49b3fdd3ff958aaffd","url":"assets/js/e161bfb2.62257029.js"},{"revision":"76c4fa4314f3d6c72a5f8ef0c1f26337","url":"assets/js/e38db323.af4a26a9.js"},{"revision":"0ab8e6a0b1dc534d650743d3b129f40f","url":"assets/js/e689bc2e.0c4d9050.js"},{"revision":"d7904b18be209ca02791f32500dc1e78","url":"assets/js/e69d98b9.d14497d8.js"},{"revision":"628990c6cae04ee73a64a0aeef664f50","url":"assets/js/e6d1a3ae.a4eb4859.js"},{"revision":"9de9b3e3a588e25b07597f8498ce8f14","url":"assets/js/e73c9379.aa2d1560.js"},{"revision":"5f28af7dfc2ea361aaca990e93d3f4b6","url":"assets/js/e79a2b5d.69e723d7.js"},{"revision":"b4d3a22cd2544df206a08fb3fec24f34","url":"assets/js/e7a4155a.865f452b.js"},{"revision":"63ae2d091db7bade2e422ebb996cd5c8","url":"assets/js/e86a1834.29b900bc.js"},{"revision":"db52912d66c8cc788110844363266a34","url":"assets/js/e9d27e10.7e348670.js"},{"revision":"741eebbe20112096b970d3a40c67672b","url":"assets/js/ec5e0ba1.0b43ba96.js"},{"revision":"adcb5ef87dd592f018bfd10af4397925","url":"assets/js/ed2090f1.f49c8350.js"},{"revision":"c760d45e76a7e3b212a359c669959f69","url":"assets/js/ed34e6e9.6ea97749.js"},{"revision":"ddd3340047b8ad3c7a5c65826f1ab87a","url":"assets/js/ee438ba6.ce4ef305.js"},{"revision":"48c49de9719b2370aa5cd966d1d30415","url":"assets/js/eed7c618.151290f7.js"},{"revision":"d5c0bb9eca37a8d518f34ffb040c46e0","url":"assets/js/ef328f1e.767293df.js"},{"revision":"7b4f1b5c353c10f8f57b4acce0c8df92","url":"assets/js/efbda9ff.8ab36e43.js"},{"revision":"79111234c33e9c03da59920eaa16278c","url":"assets/js/f1507532.747acd1a.js"},{"revision":"cc379460ea967ff173dbf9f5a9360330","url":"assets/js/f19083af.b49fca4d.js"},{"revision":"236c7b33b00418b032efb998483e9faa","url":"assets/js/f1c47bce.edad4638.js"},{"revision":"3b4165cdca8c4663d8a83fdbc9f64bcf","url":"assets/js/f2775b0c.aba32b22.js"},{"revision":"5cb5b6e66194359fc29abf8b719c8da3","url":"assets/js/f2ae5213.ab33301a.js"},{"revision":"50d81154cf98eec8b88bb88557f8d303","url":"assets/js/f3af3d3b.a79a8a52.js"},{"revision":"0936c9897d15e9783adc978bf03943f9","url":"assets/js/f58d367a.2b303440.js"},{"revision":"eb2d1b197a3d46c3e5121fb56aa98e91","url":"assets/js/f5a4bfef.f3a203ae.js"},{"revision":"af2f8993efa86be31c1fce5053773dd7","url":"assets/js/f5b91dc5.3effc4c4.js"},{"revision":"0fafe7ea73f72d1f0a79163c94567e28","url":"assets/js/f72f448f.eb9c872d.js"},{"revision":"8a3acdc6f2bacbccb5dab9145e0cb32d","url":"assets/js/f80b3d18.bb06d613.js"},{"revision":"50e279d0f235203444c3c537d8787a6b","url":"assets/js/f819e736.59baa381.js"},{"revision":"74354187d41b0624071f274c3572a005","url":"assets/js/f95bdf96.241bb66a.js"},{"revision":"b7a4a98329c2ea1f3fc18651bd0ff231","url":"assets/js/f9a3962e.f99f1589.js"},{"revision":"d85195cb95ed447810aac9b78f23c724","url":"assets/js/fae5fcc9.32f1bebe.js"},{"revision":"8a3f31ed55b80edb1169d4e53e4ef93c","url":"assets/js/fb54075f.a73db30e.js"},{"revision":"cb3fa2225b2ec90f084c4335bc06e1d3","url":"assets/js/fc1378d8.b913ac8a.js"},{"revision":"efaadebafb4a7db9fe2420229d324948","url":"assets/js/fcea546d.0ef2b749.js"},{"revision":"721c37a340fcd9a80657edc4be9c495d","url":"assets/js/fd0499a6.91da3d53.js"},{"revision":"7a89349f5c3561847a9b73c00bd3b207","url":"assets/js/fdd105ad.76c6837a.js"},{"revision":"41ca4bc44aade9aefb6cb8e04cd113b7","url":"assets/js/fdd9c53b.6fcc23eb.js"},{"revision":"a5c6f94799cfcd89cee48fdcc2d99046","url":"assets/js/fe8463b5.e856d9fc.js"},{"revision":"24436b2abbf760e25249af180ce2bd35","url":"assets/js/ff82e203.492c88ea.js"},{"revision":"c6f34c05c892ed37d505dd1cdcf9c0be","url":"assets/js/main.180b119e.js"},{"revision":"f5c9ff4b2e1caf66c11af6d7b73eccfd","url":"assets/js/reactPlayerDailyMotion.957b50d2.js"},{"revision":"0e3c5bf760fe5dc01fb46b5691847853","url":"assets/js/reactPlayerDailyMotion.f8a560a9.js"},{"revision":"600d1f5f03504afd6cc28f941fc9ea43","url":"assets/js/reactPlayerFacebook.2092e4f2.js"},{"revision":"b46ec86930b347a994f8da27699ca55b","url":"assets/js/reactPlayerFacebook.e6afeb80.js"},{"revision":"f73fbf1c769d5b0453c4aba13d3741e0","url":"assets/js/reactPlayerFilePlayer.a49cb734.js"},{"revision":"7206b2573bb9562a50e4d7047c87869b","url":"assets/js/reactPlayerFilePlayer.f695af18.js"},{"revision":"6b2b60f403e95e698d9219c976b71567","url":"assets/js/reactPlayerKaltura.05096a81.js"},{"revision":"67795905cbc17c73a1f27a587e07bade","url":"assets/js/reactPlayerKaltura.4f287d9d.js"},{"revision":"3b224ab6dec27f3513f78ab234cda01f","url":"assets/js/reactPlayerMixcloud.1ce30e66.js"},{"revision":"26b7ec78adaf90e9f2ea3db716156bfe","url":"assets/js/reactPlayerMixcloud.e7656b83.js"},{"revision":"8b563f24e1b00348f5b58197fd1fe247","url":"assets/js/reactPlayerMux.7197bd65.js"},{"revision":"9ac35691ee94ed776a1bd919cc0bdaa0","url":"assets/js/reactPlayerMux.ad82e45d.js"},{"revision":"9f95511a64b790be88d312325139e0f1","url":"assets/js/reactPlayerPreview.319a1dbf.js"},{"revision":"0fd14cbdaf418b6c44cf7ccab3f8e833","url":"assets/js/reactPlayerPreview.e8e952e7.js"},{"revision":"a83d083d08ae9bea939c2f26117d7ade","url":"assets/js/reactPlayerSoundCloud.01f860d5.js"},{"revision":"c1f5b366442aa3d69a889cfd46cf9834","url":"assets/js/reactPlayerSoundCloud.71521e70.js"},{"revision":"afe5b7240a1cd4cc61d9fff1f610e315","url":"assets/js/reactPlayerStreamable.2be5585b.js"},{"revision":"1102759675c4644b2547f96c5ef554eb","url":"assets/js/reactPlayerStreamable.e5173231.js"},{"revision":"67ccc905ea80c033f3f799851ac172b9","url":"assets/js/reactPlayerTwitch.0fdd948f.js"},{"revision":"0ce7c5cd133af55dccf4f7232325119a","url":"assets/js/reactPlayerTwitch.2e5a1f10.js"},{"revision":"62ae555fd45315635fe5779b0d726202","url":"assets/js/reactPlayerVidyard.c67fff4a.js"},{"revision":"2cd1ec687a42dff51a24d383a4f5dc67","url":"assets/js/reactPlayerVidyard.ccc74d9a.js"},{"revision":"91d215f4743d9f80fc3b4bfc6d39d5e2","url":"assets/js/reactPlayerVimeo.02a46302.js"},{"revision":"d3bfbbb6c9d50653d66c27751b4d4d20","url":"assets/js/reactPlayerVimeo.94eb3433.js"},{"revision":"bb8d23107d6613ddd6915491b893aa19","url":"assets/js/reactPlayerWistia.19e9a799.js"},{"revision":"d39ac8edf86d231139015b5129816e14","url":"assets/js/reactPlayerWistia.68d89bdd.js"},{"revision":"85e8388212c665511956d98ec867cf03","url":"assets/js/reactPlayerYouTube.0e5090ed.js"},{"revision":"ad73e8982a05333ff44b1906a81f49c2","url":"assets/js/reactPlayerYouTube.7fcaf15f.js"},{"revision":"d76bd456239dc6de59165734289a2ff1","url":"assets/js/runtime~main.16597e53.js"},{"revision":"6924e2f38ac5a1108a95f7297c303dca","url":"blog/2023/11/14/introduction-to-new-centralized-documentation/index.html"},{"revision":"ad42d176144ef09b9fa2269b1232e7ab","url":"blog/2023/12/08/version-12.0.0/index.html"},{"revision":"ef29ff93d8cc613c2add10552e20b2ed","url":"blog/2023/12/19/version-12.1.0/index.html"},{"revision":"47e98ae3935aa2ee29a135d9c8a8aaa8","url":"blog/2023/12/20/version-12.2.0/index.html"},{"revision":"2d94c0d26de7b717be8de59ce8c527c3","url":"blog/2024/01/03/version-12.3.0/index.html"},{"revision":"caedbbf72857c8f2bea2ef4b41633d69","url":"blog/2024/01/04/version-CSE/index.html"},{"revision":"1442efc1b2baafdc10400045912dcfa2","url":"blog/archive/index.html"},{"revision":"ab236e349347fe5447a3a7dd5b67c28f","url":"blog/index.html"},{"revision":"e586965d7bf6016650d78096e65880a7","url":"blog/index/index.html"},{"revision":"d385656510fdec7f2d18ca199d1fbdd3","url":"contributing/index.html"},{"revision":"03939b42e0f1a3be4b4e0a64a5324e17","url":"docs/11.10.0/additional-resources/architecture/index.html"},{"revision":"4ff4e5b6e65a49ef84b8e6e9b4769d75","url":"docs/11.10.0/additional-resources/audio-formats/index.html"},{"revision":"b6502853b58f9659916f8e93ff0114be","url":"docs/11.10.0/additional-resources/extracting-xlsx-from-h5/index.html"},{"revision":"3f3480e578be54ed9d948bf3bb5b3af0","url":"docs/11.10.0/additional-resources/flow/index.html"},{"revision":"321262e6b917afabf39091db0f2f5d1f","url":"docs/11.10.0/additional-resources/get-in-touch/index.html"},{"revision":"25aa317bb8854108f45023e683970535","url":"docs/11.10.0/additional-resources/python-venv-activation/index.html"},{"revision":"1f0d1e03093ac514164bdfeac1b41efe","url":"docs/11.10.0/additional-resources/visualisation-online/index.html"},{"revision":"7562b417d54f7d11c02ba8de0a4df06a","url":"docs/11.10.0/category/additional-resources/index.html"},{"revision":"d91edcfe4605ec3f1ffa960543cd3356","url":"docs/11.10.0/category/requirements/index.html"},{"revision":"15a1006d27641f45fad7817b7d645612","url":"docs/11.10.0/category/user-guides/index.html"},{"revision":"c17eeff2100f627b81cebc85ccccadd3","url":"docs/11.10.0/index.html"},{"revision":"95e3eef0dbbfbd80629c44852b173b84","url":"docs/11.10.0/install/index.html"},{"revision":"229a08218002e4e335fca827c43d3373","url":"docs/11.10.0/requirements/macos/index.html"},{"revision":"b62bf22f0ed14d8422f6a3e454976218","url":"docs/11.10.0/requirements/ubuntu/index.html"},{"revision":"f523d0f45cd11b7e0fbbfec2cd7ee55d","url":"docs/11.10.0/requirements/windows/index.html"},{"revision":"e0160424ff1c7f187182c87adacc3b54","url":"docs/11.10.0/user-guides/modules-presentation/index.html"},{"revision":"ac2e481c393c0862517fe55fc5928217","url":"docs/11.10.0/user-guides/processing-user-guide/export-computations/index.html"},{"revision":"8c3d8bc142e10c7d69c8bf5893776486","url":"docs/11.10.0/user-guides/processing-user-guide/export-dataframe/index.html"},{"revision":"f32436ebcd5f33ab6be7c201f2e74751","url":"docs/11.10.0/user-guides/processing-user-guide/export-mdm/index.html"},{"revision":"b582db796cab2c9b06f44f53d53d65c1","url":"docs/11.10.0/user-guides/processing-user-guide/index.html"},{"revision":"4cd26ff27b0dc6acc37083b33b3fccd8","url":"docs/11.10.0/user-guides/processing-user-guide/purge-computations/index.html"},{"revision":"88c0e6d4cda0084f1614dd083d0bf8ba","url":"docs/11.10.0/user-guides/processing-user-guide/quit/index.html"},{"revision":"f32b43fee8dd23ad352cb1fa334b73ff","url":"docs/11.10.0/user-guides/processing-user-guide/refresh-configuration/index.html"},{"revision":"999c1e43ad0b3994644792141a208060","url":"docs/11.10.0/user-guides/processing-user-guide/repack-storage/index.html"},{"revision":"45b5a7fc34b92b3f2761b19d7fcc06be","url":"docs/11.10.0/user-guides/processing-user-guide/run-all/index.html"},{"revision":"27a72ed506a3afee03bea189c025b0f6","url":"docs/11.10.0/user-guides/processing-user-guide/run-autoclusters/index.html"},{"revision":"2fa64d2c98172bc5736e92500adb57b8","url":"docs/11.10.0/user-guides/processing-user-guide/run-computations/index.html"},{"revision":"be6108c45580033c99c3fa2081977067","url":"docs/11.10.0/user-guides/processing-user-guide/run-digests/index.html"},{"revision":"9461b09e30ed3e4bec4f157b07911cb3","url":"docs/11.10.0/user-guides/processing-user-guide/run-extractions-and-aggregations/index.html"},{"revision":"a8d3f13eb31473e9f22f0d80ebc39d22","url":"docs/11.10.0/user-guides/processing-user-guide/run-reductions/index.html"},{"revision":"d7e4fd769210463fb00206c837891b9e","url":"docs/11.10.0/user-guides/processing-user-guide/run-trajectories/index.html"},{"revision":"5b319e90f35b64296033c230df326df4","url":"docs/11.10.0/user-guides/running-campaigns/index.html"},{"revision":"05133c8ec219592dbe415a450a135d0a","url":"docs/11.10.0/user-guides/visualisation-user-guide/index.html"},{"revision":"7c876d4174ff273c6618a47b00f85df6","url":"docs/11.9.0/additional-resources/architecture/index.html"},{"revision":"48ef5aaaa918e179a4cba8e203d980d4","url":"docs/11.9.0/additional-resources/audio-formats/index.html"},{"revision":"b25ca901f002983d2ca4f96291f61fe5","url":"docs/11.9.0/additional-resources/discord/index.html"},{"revision":"311e8406bb3c67c50e85bcff4ab73a86","url":"docs/11.9.0/additional-resources/extracting-xlsx-from-h5/index.html"},{"revision":"073cd385a43bfcd40223137d91a1ea9e","url":"docs/11.9.0/additional-resources/flow/index.html"},{"revision":"6960bd24d452c15381aaaa7619481b18","url":"docs/11.9.0/additional-resources/python-venv-activation/index.html"},{"revision":"913bac47dd9569cd269f60a1b61c26e7","url":"docs/11.9.0/additional-resources/visualisation-online/index.html"},{"revision":"74010ca38d846a3e23ceaeb8f4068c0a","url":"docs/11.9.0/category/additional-resources/index.html"},{"revision":"d322db9d4ef281e407bd85cbc3c4101d","url":"docs/11.9.0/category/requirements/index.html"},{"revision":"65bf617726666cd6aa62fed9865e0910","url":"docs/11.9.0/category/user-guides/index.html"},{"revision":"c51c08eaba48cecaacf61633ceffe362","url":"docs/11.9.0/index.html"},{"revision":"ead4c740c65a4031898debe0009e986e","url":"docs/11.9.0/install/index.html"},{"revision":"64e3324643c5355b5cb6965c62e168d6","url":"docs/11.9.0/requirements/macos/index.html"},{"revision":"7238e91b5a71e722fe3a5ba698a4485c","url":"docs/11.9.0/requirements/ubuntu/index.html"},{"revision":"adddb26923e1c05388aa01d1d33b2400","url":"docs/11.9.0/requirements/windows/index.html"},{"revision":"94cc5d594f9ffbe88fec065eac02b4b2","url":"docs/11.9.0/user-guides/modules-presentation/index.html"},{"revision":"71c5d0c6afd2f7fae131c79307d9c43c","url":"docs/11.9.0/user-guides/processing-user-guide/index.html"},{"revision":"37f8ba6c598a15fdf875f64346a969b6","url":"docs/11.9.0/user-guides/running-campaigns/index.html"},{"revision":"0e02f5f6922d97403c9120ee1af5d622","url":"docs/11.9.0/user-guides/visualisation-user-guide/index.html"},{"revision":"45b6489ddeef9734f563e9521b875d5a","url":"docs/12.0.0/extras/audio-formats/index.html"},{"revision":"7a8bc62ca1e3b7192ba6ef0c56f74b90","url":"docs/12.0.0/extras/extract-config-from-storage/index.html"},{"revision":"52fae26989bb3d6e4985399278f087b5","url":"docs/12.0.0/extras/file-detection/index.html"},{"revision":"f57687bfb0f095c2915710c7c2cc445c","url":"docs/12.0.0/extras/get-in-touch/index.html"},{"revision":"5de818c6eade9ac805959a30ba9ace82","url":"docs/12.0.0/extras/index.html"},{"revision":"85ae6a234eba5cf8fd25ca0177b2d6d8","url":"docs/12.0.0/extras/offline-access/index.html"},{"revision":"020cbe6a0fb820a0b78bb3d827bafd16","url":"docs/12.0.0/extras/visualisation-online/index.html"},{"revision":"fa49ad81df993bb9e0034db5d42de4cc","url":"docs/12.0.0/index.html"},{"revision":"df5a4d15bfb8983ae403bda1b56991c6","url":"docs/12.0.0/installation/application/index.html"},{"revision":"bcd989c2cb7681ddc24e682005ed1a57","url":"docs/12.0.0/installation/index.html"},{"revision":"dabb25cfb2249acdc68d861648cf7097","url":"docs/12.0.0/installation/requirements/index.html"},{"revision":"525ef1ce10d02fddbb683fbfde4a87d8","url":"docs/12.0.0/installation/requirements/macos/index.html"},{"revision":"c61bb3490208d95b80f63506dbf89495","url":"docs/12.0.0/installation/requirements/ubuntu/index.html"},{"revision":"462bacbe58af165658d55aeccdc7c4a1","url":"docs/12.0.0/installation/requirements/windows/index.html"},{"revision":"3c4b3dca9ee6cc5d40d9106dbd71d92d","url":"docs/12.0.0/modules/campaign/getting-started/index.html"},{"revision":"138fb5d2a332311bc40a5fbe527b4b5c","url":"docs/12.0.0/modules/campaign/index.html"},{"revision":"45a21b353cbf509dcfde381316dea77e","url":"docs/12.0.0/modules/campaign/user-guide/index.html"},{"revision":"cc0104c0e44a675f4d8756bdb4d1ccde","url":"docs/12.0.0/modules/index.html"},{"revision":"ed47869062597e93c37c6694fd13e1b3","url":"docs/12.0.0/modules/processing/getting-started/index.html"},{"revision":"8b2ffff402ba8999432eb7ef5a0c1eb8","url":"docs/12.0.0/modules/processing/index.html"},{"revision":"19bb05ec12ce865b675aea1d3a110c61","url":"docs/12.0.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"fe2f91ea87a04f3eedc6be76eaca919c","url":"docs/12.0.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"069d86c267cbed4789389a29ab206a92","url":"docs/12.0.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"2daad00653f0946b07deac95e1ad03a4","url":"docs/12.0.0/modules/processing/user-guide/index.html"},{"revision":"66e38936ea2335c4d1064a84a1f75608","url":"docs/12.0.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"5b387e4fc88a4f133acf861729fd553d","url":"docs/12.0.0/modules/processing/user-guide/quit/index.html"},{"revision":"fa7a37a3cc847f79cbe036a613711676","url":"docs/12.0.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"c5f962d07d812ae38337d96217843495","url":"docs/12.0.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"3945d780f5eaf4f6bf6cdc90a9d909c4","url":"docs/12.0.0/modules/processing/user-guide/run-all/index.html"},{"revision":"0f791a20c3da717cbc3e6ac19097e5c6","url":"docs/12.0.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"6724249e036887ca708db7160f59c308","url":"docs/12.0.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"01e08a92361e3176cc6530211ea919b3","url":"docs/12.0.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"9c27c0effa5aca62061074726571853c","url":"docs/12.0.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"d743d9c6bcce72b653286e79f3aaf8a4","url":"docs/12.0.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"76eb4661b19b0792934472f74f6e8f8f","url":"docs/12.0.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"89fc60765a29c66501e236d888e035e2","url":"docs/12.0.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"8582637fc19b8f3ba6e8289b485c5381","url":"docs/12.0.0/modules/visualisation/getting-started/index.html"},{"revision":"5a322e665ba190fd059794552c74230e","url":"docs/12.0.0/modules/visualisation/index.html"},{"revision":"80b449538470f4db22983ca3286e2a34","url":"docs/12.0.0/modules/visualisation/user-guide/index.html"},{"revision":"ed4579e05d5974405fd3bbbd170c88ad","url":"docs/12.1.0/extras/audio-formats/index.html"},{"revision":"f76c8381a238abee070684fd81d1c4f6","url":"docs/12.1.0/extras/extract-config-from-storage/index.html"},{"revision":"dac6184719e7b7816e35730f2232d20b","url":"docs/12.1.0/extras/file-detection/index.html"},{"revision":"f2c9547a18f2543d6d35eb8dfd38b12b","url":"docs/12.1.0/extras/get-in-touch/index.html"},{"revision":"0264433d674a831a03eaf68dca45cbc0","url":"docs/12.1.0/extras/index.html"},{"revision":"503f6abde4cf628622bd03b287f58772","url":"docs/12.1.0/extras/offline-access/index.html"},{"revision":"f3db6640e5cbcf0a9e2f35ab0722be01","url":"docs/12.1.0/extras/visualisation-online/index.html"},{"revision":"421d708f35fa585a53b658cef9a43c98","url":"docs/12.1.0/index.html"},{"revision":"f7fc62d27bb22d683fe6c47d11cb516d","url":"docs/12.1.0/installation/application/index.html"},{"revision":"45c119a79f8001e25ac9fe3e276ab24f","url":"docs/12.1.0/installation/index.html"},{"revision":"7ab4c4169be51f585dac4a14c1ebc70a","url":"docs/12.1.0/installation/requirements/index.html"},{"revision":"01f9c79aad7d340e2cee93a3214a6ebe","url":"docs/12.1.0/installation/requirements/macos/index.html"},{"revision":"d856832764316e75a59adcf7256990c4","url":"docs/12.1.0/installation/requirements/ubuntu/index.html"},{"revision":"d00928e20a51f0ac43edcefa45a3a587","url":"docs/12.1.0/installation/requirements/windows/index.html"},{"revision":"29ea7e9fa04494e86eb533a5347fda2f","url":"docs/12.1.0/modules/campaign/getting-started/index.html"},{"revision":"35f8ce47bf247553076cd3129d189309","url":"docs/12.1.0/modules/campaign/index.html"},{"revision":"3de959c71b34068c397db7ee4293fb17","url":"docs/12.1.0/modules/campaign/user-guide/index.html"},{"revision":"1a0ed831b2b13a80b105b2dc27ae8929","url":"docs/12.1.0/modules/index.html"},{"revision":"fd2d2611235fb997b059332365a522e0","url":"docs/12.1.0/modules/processing/getting-started/index.html"},{"revision":"075dcd0b4aaa61b7c37567b776830dde","url":"docs/12.1.0/modules/processing/index.html"},{"revision":"4c217e7d345c01ec3d4f095cf89abf02","url":"docs/12.1.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"7551c8aa1b7d8253b01ba8d0c8f072c4","url":"docs/12.1.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"fbf868f3893a038ce89c01df2598291e","url":"docs/12.1.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"0f7b1ecaf79b514c8e4e57c21d82f0d9","url":"docs/12.1.0/modules/processing/user-guide/index.html"},{"revision":"c602fd26eccfea9429b2a98f41e7d19b","url":"docs/12.1.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"4aaf7377b9fb7be2026629fa19ec9990","url":"docs/12.1.0/modules/processing/user-guide/quit/index.html"},{"revision":"5c393b0408fe591ef7cf33f9f5e4fc9e","url":"docs/12.1.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"7afe09f8f6c8092d41147b661b6fcde8","url":"docs/12.1.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"4735539eb4b9dce77bfff0ee49379aa2","url":"docs/12.1.0/modules/processing/user-guide/run-all/index.html"},{"revision":"1fae435a4d952f33957042fe1ac583fd","url":"docs/12.1.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"760ab7a9d4715fb4cc1aebe99c7a553b","url":"docs/12.1.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"2d15a29955c439c46bade681a28eb319","url":"docs/12.1.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"8adfda4ea5c64a59bd5804faef4f69be","url":"docs/12.1.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"6d439514e5c22f8f79bc9fbaa5cee2dd","url":"docs/12.1.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"18e153482e1ad590a12fc114b4a8d90b","url":"docs/12.1.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"72c5df671046b4440f550cb84f1d114f","url":"docs/12.1.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"c1a22175cfb6e5539c0b7405eed6cc2f","url":"docs/12.1.0/modules/visualisation/getting-started/index.html"},{"revision":"0bda5654ba31d35e8eae487becba0e30","url":"docs/12.1.0/modules/visualisation/index.html"},{"revision":"059b09f7bfd250f814c52625cdd11e3a","url":"docs/12.1.0/modules/visualisation/user-guide/index.html"},{"revision":"a844a2e7a3090606f24878b1ed5c03ab","url":"docs/12.2.0/extras/audio-formats/index.html"},{"revision":"172f02753c060306f2e187b00e25b056","url":"docs/12.2.0/extras/extract-config-from-storage/index.html"},{"revision":"5756dcc79fd998d7c3a1f9ef6cd92b47","url":"docs/12.2.0/extras/file-detection/index.html"},{"revision":"0ca53818637eef5b2c94924bfd624a86","url":"docs/12.2.0/extras/get-in-touch/index.html"},{"revision":"13e6773e1398b86735352b7242dbb1ad","url":"docs/12.2.0/extras/index.html"},{"revision":"289f7d759345b4cf174ab120a2e562ad","url":"docs/12.2.0/extras/offline-access/index.html"},{"revision":"167889fc856a9494e701b94f2ec4db48","url":"docs/12.2.0/extras/visualisation-online/index.html"},{"revision":"6051055fd8b588cd59e30bcf032962a0","url":"docs/12.2.0/index.html"},{"revision":"321c90acd60a1a7ddde309ab1e465f8b","url":"docs/12.2.0/installation/application/index.html"},{"revision":"3e1070b538fb9d86120b5e84f21fd825","url":"docs/12.2.0/installation/index.html"},{"revision":"d41191c1c3efcfee3a75722ac4292ff9","url":"docs/12.2.0/installation/requirements/index.html"},{"revision":"8f2a53aa50f52f092aba088e491b38e1","url":"docs/12.2.0/installation/requirements/macos/index.html"},{"revision":"522e7d93ce8eea3e613b21f56c09fdc0","url":"docs/12.2.0/installation/requirements/ubuntu/index.html"},{"revision":"ce28265b6b0f135900552ea7b801c453","url":"docs/12.2.0/installation/requirements/windows/index.html"},{"revision":"54a7ceaf37cf8b5393fe4f845c7c2375","url":"docs/12.2.0/modules/campaign/getting-started/index.html"},{"revision":"0ea38adef2cf70e3ed4dbecb0569d818","url":"docs/12.2.0/modules/campaign/index.html"},{"revision":"33c523041cedfc15e0d0c827b35a88b0","url":"docs/12.2.0/modules/campaign/user-guide/index.html"},{"revision":"88d8639a213f8ecfeea528acb968c992","url":"docs/12.2.0/modules/index.html"},{"revision":"193574dd626fb263d977dd3e2d534370","url":"docs/12.2.0/modules/processing/getting-started/index.html"},{"revision":"d29af7f11b667e53dcfbd4147b3c3b2e","url":"docs/12.2.0/modules/processing/index.html"},{"revision":"4f948526cd2690e9afb27e381361a50b","url":"docs/12.2.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"e30bbf57b10a2ef61ba29ba6fec4ea87","url":"docs/12.2.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"918bcde7e995f7e489acc6b715301c56","url":"docs/12.2.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"131e6985000e4c36f8725d21b46c87f9","url":"docs/12.2.0/modules/processing/user-guide/index.html"},{"revision":"98b371b33962a3f25d7bacd95cc94d86","url":"docs/12.2.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"b18f802e623ed14c18ef6aea17d2c69e","url":"docs/12.2.0/modules/processing/user-guide/quit/index.html"},{"revision":"b5a58185f4198d7ec2246586662ab501","url":"docs/12.2.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"953c76c7d4d7ac145232f60cca455770","url":"docs/12.2.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"9537f4c3e59117e55240b0e75a2bf94a","url":"docs/12.2.0/modules/processing/user-guide/run-all/index.html"},{"revision":"a122ba5fd2343269a253251c8d35f3a9","url":"docs/12.2.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"389d017dcaa8556834e015f8598e4975","url":"docs/12.2.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"e7a123b7ec195433281ecf46135ab782","url":"docs/12.2.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"5e9b1e91f1decbeee988a267d683a593","url":"docs/12.2.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"193c1c777c78e9dcd39d96e295d96916","url":"docs/12.2.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"4841d57aa6b07e5c4d5ee20f5155079e","url":"docs/12.2.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"0c981140a1472743c5671e57cd9d4d35","url":"docs/12.2.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"ce0d5f0ec4584db458d756dc4f03670f","url":"docs/12.2.0/modules/visualisation/getting-started/index.html"},{"revision":"efc43659214da977684067355adf3041","url":"docs/12.2.0/modules/visualisation/index.html"},{"revision":"8ffd60889d4eec14f3cf333c56d6c66a","url":"docs/12.2.0/modules/visualisation/user-guide/index.html"},{"revision":"764d612de4d54be4c5dfe4225e4884bf","url":"docs/CSE/extras/audio-formats/index.html"},{"revision":"2de8c0ab0bf87d249cd5eb11dd9c5f9f","url":"docs/CSE/extras/extract-config-from-storage/index.html"},{"revision":"bd4cd11a5a128180ea681e510e63faf8","url":"docs/CSE/extras/file-detection/index.html"},{"revision":"0e12edb5f78e8d910d12e7aa5d14732d","url":"docs/CSE/extras/get-in-touch/index.html"},{"revision":"293d0320556109e1538ed6200718b930","url":"docs/CSE/extras/index.html"},{"revision":"5c1b9f547f5a99b329b180ee8adb405d","url":"docs/CSE/extras/offline-access/index.html"},{"revision":"52f2efd57a93d0dfccb83e4ecbc00358","url":"docs/CSE/extras/repack-storage/index.html"},{"revision":"4442ba40b88df29f1b9154acdb1efb2d","url":"docs/CSE/extras/visualisation-online/index.html"},{"revision":"e0f25bc5542c33479ee65e5d44ae75fe","url":"docs/CSE/index.html"},{"revision":"17aff2958818c1667c65fb43b3d48a20","url":"docs/CSE/installation/application/index.html"},{"revision":"fe1d06441f12c56dbd285ef099a4405f","url":"docs/CSE/installation/index.html"},{"revision":"041343375429efabf71338fda48c3083","url":"docs/CSE/installation/requirements/index.html"},{"revision":"61c99b89409a754e4d029e3dd06647a4","url":"docs/CSE/installation/requirements/macos/index.html"},{"revision":"a69f1c39d8e65b9f0c525b22bbf9d5ba","url":"docs/CSE/installation/requirements/ubuntu/index.html"},{"revision":"7171940ccaa9f306874a35f790f48dcc","url":"docs/CSE/installation/requirements/windows/index.html"},{"revision":"a48713796a2e1a60c0414cbc8319e8dc","url":"docs/CSE/modules/campaign/getting-started/index.html"},{"revision":"b92dc7ddfb02a80bca335bb02f5cf0fd","url":"docs/CSE/modules/campaign/index.html"},{"revision":"80ee9586dc6c62756d976afd9a7fec84","url":"docs/CSE/modules/campaign/user-guide/index.html"},{"revision":"62a4f025919052c324a08953c18cc8c2","url":"docs/CSE/modules/index.html"},{"revision":"1f72e22c087ee0a967d625c3df852ae2","url":"docs/CSE/modules/processing/getting-started/index.html"},{"revision":"46d1cbc65e5a487499bfbb3428a0fb7e","url":"docs/CSE/modules/processing/index.html"},{"revision":"3eb18594d5a969a09061c3b52dd43245","url":"docs/CSE/modules/processing/user-guide/export-computations/index.html"},{"revision":"73c56a11167802e6a0f34ae74554570f","url":"docs/CSE/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"a0a90b8c8c1a0f7a8a073abdd5db4ce9","url":"docs/CSE/modules/processing/user-guide/export-mdm/index.html"},{"revision":"7759a66d82fffdeb127f51bcebd96d1b","url":"docs/CSE/modules/processing/user-guide/index.html"},{"revision":"9777b1de7fe9392bc66e69384ea86ba5","url":"docs/CSE/modules/processing/user-guide/purge-computations/index.html"},{"revision":"88ca276de9c506ea065cac97479159d6","url":"docs/CSE/modules/processing/user-guide/quit/index.html"},{"revision":"043af26736ed1a6469c26ca81f3fb869","url":"docs/CSE/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"b53ab7b8b3e4ca5d5900a4091f347d16","url":"docs/CSE/modules/processing/user-guide/run-all/index.html"},{"revision":"e1c9d2dc7485caafca497555a16b3391","url":"docs/CSE/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"88d2e25875dc10c421251ce9e4de1155","url":"docs/CSE/modules/processing/user-guide/run-computations/index.html"},{"revision":"25e75a66444c51ee3770d516a163062f","url":"docs/CSE/modules/processing/user-guide/run-digests/index.html"},{"revision":"ccae173ef8be6a14f18973332f8f8bd7","url":"docs/CSE/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"ba65aa271acfad8250650432eba00c04","url":"docs/CSE/modules/processing/user-guide/run-reductions/index.html"},{"revision":"2f1294bbcc85b434548a9241afc6f126","url":"docs/CSE/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"e41beb2cf83137a189fbf5134f36d349","url":"docs/CSE/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"56a601af78a101a3a75dcdd0339873aa","url":"docs/CSE/modules/visualisation/getting-started/index.html"},{"revision":"dc000ba5e02e6348e2c6dcf42fcbf441","url":"docs/CSE/modules/visualisation/index.html"},{"revision":"26579e802704a810fba0895e25fbb05e","url":"docs/CSE/modules/visualisation/user-guide/index.html"},{"revision":"98f376701c99e0d49d14bdbe8bc6cae4","url":"docs/extras/audio-formats/index.html"},{"revision":"ab36b4e525d94989ca6255d9f233b1b1","url":"docs/extras/extract-config-from-storage/index.html"},{"revision":"4b2fb1577643ba467dd7cc33dba2e5dc","url":"docs/extras/file-detection/index.html"},{"revision":"cc9c4e4f3a9f4b7bc5a58b957a9c1f36","url":"docs/extras/get-in-touch/index.html"},{"revision":"a4c9f222c6df52e644f12af542144a0a","url":"docs/extras/index.html"},{"revision":"f860d3a6406b727a4640417a1a5909a0","url":"docs/extras/offline-access/index.html"},{"revision":"6033f7ffa334961c300eb762fe84f0a3","url":"docs/extras/repack-storage/index.html"},{"revision":"581a9506d728a48d0b37de54b4dee7b0","url":"docs/extras/visualisation-online/index.html"},{"revision":"66f89e494937a3e33deeb3b3b4f936c6","url":"docs/index.html"},{"revision":"bbfcca56cd43b8439fbc96026616e5bf","url":"docs/installation/application/index.html"},{"revision":"71d28bcb9be3c89845b849764a00aab5","url":"docs/installation/index.html"},{"revision":"709c6a33169bc4492645febf7b4d9b55","url":"docs/installation/requirements/index.html"},{"revision":"65acea3092c8eef4d48dedcf57500582","url":"docs/installation/requirements/macos/index.html"},{"revision":"f83689a7781c4985b73d0f2ffe94f7ed","url":"docs/installation/requirements/ubuntu/index.html"},{"revision":"56439a8e07618bfef5ccf913ee37996f","url":"docs/installation/requirements/windows/index.html"},{"revision":"b6abea8a153d9c0e5bd4af5d4ef36689","url":"docs/modules/campaign/getting-started/index.html"},{"revision":"4ef355974e906d7b14849048c9d05c04","url":"docs/modules/campaign/index.html"},{"revision":"5ef2453af5fdd7d8f3b010bbd5a16521","url":"docs/modules/campaign/user-guide/index.html"},{"revision":"40ef97fd57bbe5dbe833924b408ad34f","url":"docs/modules/index.html"},{"revision":"0658a70d06c79d61d034d3b24e147803","url":"docs/modules/processing/getting-started/index.html"},{"revision":"706849c4ce315f27f7b79e5fdef4086e","url":"docs/modules/processing/index.html"},{"revision":"874cda9d43355b869500adf55d0839fe","url":"docs/modules/processing/user-guide/export-computations/index.html"},{"revision":"d37081753afdeecc82adb3bea06a1607","url":"docs/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"90d216d16e75ff57ad5eae8481cef9c1","url":"docs/modules/processing/user-guide/export-mdm/index.html"},{"revision":"defc0a1f11ad05a45b65cab2476a3310","url":"docs/modules/processing/user-guide/index.html"},{"revision":"51da12da07d30c41cf6526724a70da1a","url":"docs/modules/processing/user-guide/purge-computations/index.html"},{"revision":"44ac9635c4adb1de1ac1dd6131cee57f","url":"docs/modules/processing/user-guide/quit/index.html"},{"revision":"c267588a18ccdc90668d61ef24198fd3","url":"docs/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"11260598e8d1fbeb30d9608b331ce7a9","url":"docs/modules/processing/user-guide/run-all/index.html"},{"revision":"aa17c6e5e631e9e738a3e1db5ffae17a","url":"docs/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"22232e85111e5114ea178cc8e5d88835","url":"docs/modules/processing/user-guide/run-computations/index.html"},{"revision":"95e8362c8e5b575c40a37b240bd270a5","url":"docs/modules/processing/user-guide/run-digests/index.html"},{"revision":"39aca1a1902326e21142d8ee81292dce","url":"docs/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"7dd41acacf6a5397379b74d8cfb4218a","url":"docs/modules/processing/user-guide/run-reductions/index.html"},{"revision":"0e8055e2bc9993dbb3ca59b3c7b33b6b","url":"docs/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"417cf818b985745cac1054666b7d2f48","url":"docs/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"a95945e39cbb5123e78206bd2f9478f7","url":"docs/modules/visualisation/getting-started/index.html"},{"revision":"c1043c2bb859466557f0ac8c35c24aa1","url":"docs/modules/visualisation/index.html"},{"revision":"44a9e3ec129761746b3de88068d64d71","url":"docs/modules/visualisation/user-guide/index.html"},{"revision":"39f1afc54bc516e48b72de9f392df4b3","url":"docs/next/extras/audio-formats/index.html"},{"revision":"add77d915ff1d362c0ac713044aa712f","url":"docs/next/extras/extract-config-from-storage/index.html"},{"revision":"bcc28daac812e7d4df51315845b3ac19","url":"docs/next/extras/file-detection/index.html"},{"revision":"45c53f57e980ecb5915ac96a04ad5e10","url":"docs/next/extras/get-in-touch/index.html"},{"revision":"6c6abd09f53721db67c15b3c1ef73b6f","url":"docs/next/extras/index.html"},{"revision":"44546e37341e46fc3ed2a417c63d3dff","url":"docs/next/extras/offline-access/index.html"},{"revision":"b8495aa9158467fc25a2f9fb0f8817c5","url":"docs/next/extras/repack-storage/index.html"},{"revision":"7cac812091b84c2a12899088397df558","url":"docs/next/extras/visualisation-online/index.html"},{"revision":"b80e88ebf083a426b9c79bcabc58a102","url":"docs/next/index.html"},{"revision":"cf1160c07e5c60e0aa818ebe4fb3cb6f","url":"docs/next/modules/campaign/getting-started/index.html"},{"revision":"210273ed7f0d526cc20a34dcf852577a","url":"docs/next/modules/campaign/index.html"},{"revision":"b2e899f35bf308ea4ab1ba459793bc6e","url":"docs/next/modules/campaign/user-guide/index.html"},{"revision":"5e6e67a516e710542a8dec13cc013921","url":"docs/next/modules/index.html"},{"revision":"6841c0d6c09870aed8b2ee0340bb2055","url":"docs/next/modules/processing/getting-started/index.html"},{"revision":"087cd23f51e7b1f3e4823a4051f89494","url":"docs/next/modules/processing/index.html"},{"revision":"b925c4c183168d8d1d9daf58ac355ea2","url":"docs/next/modules/processing/installation/index.html"},{"revision":"1e9439f296765ffaffc760ba22feef62","url":"docs/next/modules/processing/installation/macos/index.html"},{"revision":"4753b2546ef898787804088f3a2c2b8a","url":"docs/next/modules/processing/installation/ubuntu/index.html"},{"revision":"f1dd72c80f5759200b520f8855d92856","url":"docs/next/modules/processing/installation/windows/index.html"},{"revision":"f3be7701fec276db6ffe55958ab9c736","url":"docs/next/modules/processing/user-guide/export-computations/index.html"},{"revision":"d47ed373e4005ed5b4ef75c509aeaa13","url":"docs/next/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"8d3816d0695ace4331aa3abdcee96bc6","url":"docs/next/modules/processing/user-guide/export-mdm/index.html"},{"revision":"9c9a2d5482116650fc32a1ed8f3b6e18","url":"docs/next/modules/processing/user-guide/index.html"},{"revision":"68ce70b2eaddcc45e6d0e083532ac88e","url":"docs/next/modules/processing/user-guide/purge-computations/index.html"},{"revision":"486754ecacba44e6cc874de988b27a42","url":"docs/next/modules/processing/user-guide/quit/index.html"},{"revision":"23c5fecde788afd87d0099589b44b859","url":"docs/next/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"a46891cb4921b97373535371a57e14ed","url":"docs/next/modules/processing/user-guide/run-all/index.html"},{"revision":"557e8e64a311c43e22e5b4472291059a","url":"docs/next/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"ac2f4cbbe2deb231d6b581af40772fd7","url":"docs/next/modules/processing/user-guide/run-computations/index.html"},{"revision":"c2172092a6749d7bac492e1ba6413cc1","url":"docs/next/modules/processing/user-guide/run-digests/index.html"},{"revision":"9c96de66ffea1826ef36cb5fa708d9df","url":"docs/next/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"232bfdc53d60a44b1419d41a5e7cb2fa","url":"docs/next/modules/processing/user-guide/run-reductions/index.html"},{"revision":"8794f39de7e5f7956ae657d62761670a","url":"docs/next/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"0ff6ec52f81768b9dd300710e5d847c3","url":"docs/next/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"b5f489e5054a386c2acdb5609abcc87b","url":"docs/next/modules/visualisation/getting-started/index.html"},{"revision":"c70c0bf22960aee1b3a0f52caae14f44","url":"docs/next/modules/visualisation/index.html"},{"revision":"b6ca06e18ca52cb89e1bf0444a859a1b","url":"docs/next/modules/visualisation/installation/index.html"},{"revision":"5f4f4c1398ce0344aa600207620bcbaf","url":"docs/next/modules/visualisation/installation/macos/index.html"},{"revision":"06880ed581cb6c110f767b641e92e5af","url":"docs/next/modules/visualisation/installation/ubuntu/index.html"},{"revision":"f34897ca80462770ff00bff1337a342b","url":"docs/next/modules/visualisation/installation/windows/index.html"},{"revision":"771dad2b220ca5440d83cfa1ad3eb6ec","url":"docs/next/modules/visualisation/user-guide/index.html"},{"revision":"d3174c9c82005c195d71a47aa5fe52af","url":"index.html"},{"revision":"92e8fedb8c50fe7462624f1937c6135a","url":"manifest.json"},{"revision":"20c4c56d87d73c5fb63d1900ac7bc88b","url":"assets/images/architecture-81e9840c02b65390032520a2ab57d9e5.svg"},{"revision":"65fd4166d50c3a7bbba520ce99f00356","url":"assets/images/data-inheritance-08824a4da6e173f96b7ac9ff945db24d.svg"},{"revision":"c3c3df64325700f73297731bb837e92b","url":"assets/images/demo-1bfde2ef29c21f9a1398a5bc99292b08.png"},{"revision":"0653b0270f80e7ac6c6fc60b2a438218","url":"assets/images/flow-2fcaabf70941e5a8b298646aa61385b7.svg"},{"revision":"5c5bacce2859bb21876f2b1bb4920faf","url":"img/architecture_13.png"},{"revision":"20c4c56d87d73c5fb63d1900ac7bc88b","url":"img/architecture.svg"},{"revision":"694ee26af5d5854e4f83c10b067f6513","url":"img/cse/architecture.png"},{"revision":"9d25c99b1359eee6cfe756cd27eee44d","url":"img/cse/authors/bamdad-sabbagh.jpeg"},{"revision":"0dd4885332becf1c41e64af5e4da70c8","url":"img/cse/authors/frederic-sebe.png"},{"revision":"808a122ea74801529602187a594899f7","url":"img/cse/authors/jeremy-rouch.jpeg"},{"revision":"45060b9909e36267813724b2a2fe6a74","url":"img/cse/authors/lana-minier.jpeg"},{"revision":"230c39fc4f290ab2a73b0d7c5ef36007","url":"img/cse/authors/nicolas-mathevon.jpeg"},{"revision":"8ca7648571bd17394b5844debb2d984c","url":"img/cse/authors/remi-emonet.jpg"},{"revision":"f682f43c6f308d1e9b2ebc16ad256e79","url":"img/cse/logo.svg"},{"revision":"dadaa564f112256a11c9ace09744b1a6","url":"img/cse/sponsors/ecole-pratique-hautes-etudes.png"},{"revision":"f0986d5454be047f2656c2eee5ea21e1","url":"img/cse/sponsors/enes-lab.jpg"},{"revision":"def71edfa122a2e154b82fe2ace99d43","url":"img/cse/sponsors/institut-universitaire-france.png"},{"revision":"e5afdfa93f5e4f0c492bc835864a224c","url":"img/cse/sponsors/labex-celya.svg"},{"revision":"b3a78823d6e4ab9a30434f7e2331c7d0","url":"img/cse/sponsors/laboratoire-hubert-curien.svg"},{"revision":"8d56a641d01b811901abba236d3801bd","url":"img/cse/sponsors/office-francais-biodiversite.png"},{"revision":"09c9fa1b1f643fdf099349f4d8fec5ba","url":"img/cse/sponsors/saint-etienne-metropole.png"},{"revision":"21133949e146287a19317688a1429898","url":"img/cse/sponsors/universite-jean-monnet.png"},{"revision":"65fd4166d50c3a7bbba520ce99f00356","url":"img/data-inheritance.svg"},{"revision":"c3c3df64325700f73297731bb837e92b","url":"img/demo.png"},{"revision":"0653b0270f80e7ac6c6fc60b2a438218","url":"img/flow.svg"},{"revision":"f759aa942ae741fe028abac0c7720511","url":"img/logo-cse.svg"},{"revision":"68d0534f0d92d8d5ee0f93a293c33852","url":"img/logo.ico"},{"revision":"a483aecd1259b3d5b6f8b4640e9133a8","url":"img/logo.png"},{"revision":"37df8de86cf574a428b5d5ef3037cf1e","url":"img/logo.svg"},{"revision":"f2090d740ed96c902c75c41de916b8b0","url":"img/undraw_data_processing_yrrv.svg"},{"revision":"397308d374f0c238969a378bc9785b3a","url":"img/undraw_spreadsheets_re_alt0.svg"},{"revision":"e18535880f2cf03118dadc17d1da1fe1","url":"img/undraw_winter_designer_a-2-m7.svg"},{"revision":"0062bf1cab808369fb574e2da7e02c0a","url":"assets/fonts/jetbrains-mono-latin-400-normal-2fe080a3bf49bdc12fcb3e1838e1f50c.woff2"},{"revision":"354aceff703fbf0797d247cb31e1d807","url":"assets/fonts/jetbrains-mono-latin-400-normal-c226d7283d0d52c2d32c67abdde1f10e.woff"},{"revision":"717f9057150fafd32e39661dc7cd7425","url":"assets/fonts/merriweather-cyrillic-400-normal-2e7c71643f6e0e4c1e73f28a7a1798e6.woff"},{"revision":"cf40598b1eb2a76672c2e704901b59d6","url":"assets/fonts/merriweather-cyrillic-400-normal-fde0b55efc50742fb57fbebbb11c572f.woff2"},{"revision":"63319b42833639824ca3d45c1f343d3b","url":"assets/fonts/merriweather-cyrillic-ext-400-normal-2a880e22b1b888ab54652a36d43b7f16.woff2"},{"revision":"a4ae5cb9dbe02cc6f94841df0729514e","url":"assets/fonts/merriweather-cyrillic-ext-400-normal-7d8546944154663cc54693d15bb31721.woff"},{"revision":"bcd87cd8804e0840407e9d1286a0b44d","url":"assets/fonts/merriweather-latin-400-normal-48d8af9ce57fa96defa2348f7dad8014.woff"},{"revision":"2bfde17b9a1384ce64af78db1b87a82f","url":"assets/fonts/merriweather-latin-400-normal-e009f21405b4d7e893674b69deb4cf4a.woff2"},{"revision":"73d7be7e72e71728515248dda266c095","url":"assets/fonts/merriweather-latin-ext-400-normal-4657f5ab02d5923d223f96a9155a9bdc.woff2"},{"revision":"1fae11a03d2f4709959da7b13cbd1abc","url":"assets/fonts/merriweather-latin-ext-400-normal-7b1ee735b2541bc831bd57bacecc9d41.woff"}];
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