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
  !*** ./node_modules/.pnpm/@docusaurus+plugin-pwa@3.1.0_eslint@8.56.0_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
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
    const precacheManifest = [{"revision":"ab4e16537ef6c6324fdeaf7960aea5eb","url":"404.html"},{"revision":"6dbb91c94f4f820890fcc28de2033d5e","url":"assets/css/styles.7ab7043e.css"},{"revision":"a6fdc10f8b8564973af7dba7cbeed506","url":"assets/js/0014f2e3.44630a1e.js"},{"revision":"2e60fa7fc59dde92e2b7718b0b39e13e","url":"assets/js/0035e275.ce2ee2e4.js"},{"revision":"7d5dcad4283e6bd8ce38096a9fd4ba07","url":"assets/js/0042287f.7a2a9711.js"},{"revision":"f50d29b4ce587f9adc8322c027a4baa4","url":"assets/js/0055ae99.9b470217.js"},{"revision":"8a446fd876dec8058747c35ee1e2957b","url":"assets/js/00fb4336.3e6f09ba.js"},{"revision":"0a3f778c70d86ee113f964cc66292327","url":"assets/js/00ffc4be.d627d5e0.js"},{"revision":"cc51d2f797820103f72ddb57f0bea2b4","url":"assets/js/05d10116.28b1b60e.js"},{"revision":"13ae844701270e1a21594608e830f7d9","url":"assets/js/05d10be6.9e088f26.js"},{"revision":"e2425ceafadad87ad3dfe26c23b56906","url":"assets/js/06d86785.b8a9241d.js"},{"revision":"ff757b9dcdab7ee75b832cd3619da2f3","url":"assets/js/07ac9507.e2664b5c.js"},{"revision":"8d87094c25c9af8dc4ea31710ff27ce1","url":"assets/js/08e8f103.6befb031.js"},{"revision":"17fff05764a53bef56a2cd38851434de","url":"assets/js/0a863ded.ac3293dd.js"},{"revision":"7541e9475baff8a11a7dea548e5f7ecb","url":"assets/js/0b4d5ba7.a7260b08.js"},{"revision":"1c2e49f449bbaa65e54927c46766df82","url":"assets/js/0bab7aa4.32a80aca.js"},{"revision":"786518d4afb75343c0742ee4038aec0f","url":"assets/js/0c1a9b43.9a170103.js"},{"revision":"eb55add2ce48edbf07092dd6cc89089b","url":"assets/js/0d5abc34.4810afe4.js"},{"revision":"586d9b099f4699a85500b9c09414a61d","url":"assets/js/0dfa3724.c843115e.js"},{"revision":"d75bb0384a142ae4b38283b40c7dee1f","url":"assets/js/0dfb7804.417d2f6e.js"},{"revision":"1a1897dab70ac2ff2914331ee57d734c","url":"assets/js/0e675381.d6c563db.js"},{"revision":"41c1d9b3dc43525586936eb251899ea9","url":"assets/js/0ec2a0b0.0e8644c0.js"},{"revision":"d8aaba667d2fd6ebd237cd8f3083f645","url":"assets/js/0fb07bd5.a4511c63.js"},{"revision":"99b1fd4361d6e52651ce6306f262572f","url":"assets/js/1011.6dce4288.js"},{"revision":"625366815122554d6b2750689dd3218a","url":"assets/js/12570b78.6b890511.js"},{"revision":"e07c1ba287c5f814f0babb5c553bf3ee","url":"assets/js/12c97a1c.d7b95301.js"},{"revision":"25dd7f71d3ae306c1cae2d0a2ff5b0a8","url":"assets/js/13bbecf7.db61af45.js"},{"revision":"691e3802487417dcb7ae723b3f58dea3","url":"assets/js/13ec1e59.777416a8.js"},{"revision":"9b7566234974972152bc0e3f20ea811c","url":"assets/js/14eb3368.b5c3ce82.js"},{"revision":"337bffebbcc97246060daf667de35dd4","url":"assets/js/1549.c958d515.js"},{"revision":"6d0d4d3373985834e4e6bd27ff2aad29","url":"assets/js/1584a71e.df3cc214.js"},{"revision":"75746627e01dfe25810beed9652754ec","url":"assets/js/160513e6.656cfc57.js"},{"revision":"71e7d408215518481cc7147f8036cafa","url":"assets/js/1675e895.1642f307.js"},{"revision":"93140b91ed6812a2afeda4c192f4d875","url":"assets/js/17896441.3ad88f33.js"},{"revision":"dcab1c4421ecae5d785e9f5d5688986a","url":"assets/js/196ca7f2.1c61eb0c.js"},{"revision":"119ab6a20065a14bf596c24a4606c179","url":"assets/js/1a591ed8.c4659ed0.js"},{"revision":"70f0e891b2d68e317b108eb18f2265ff","url":"assets/js/1bd3ddb7.82157e11.js"},{"revision":"eae497dddcbc7b166b713a97158a2ef8","url":"assets/js/1bda19f4.af734176.js"},{"revision":"e8ac7111519dd6449dd49a04c1d6a1ad","url":"assets/js/1c5fcc5b.ff91c13f.js"},{"revision":"450d188d78ef5511af780109c54da6f0","url":"assets/js/1cafaec8.f5ce8378.js"},{"revision":"11d79dee2a2bb3de589fcd302292033b","url":"assets/js/1d67b61b.0290e0dd.js"},{"revision":"6c822a5167cddbac0754f9c8304dba4d","url":"assets/js/1df93b7f.3f66f869.js"},{"revision":"329f8408c86755e9bb438ac348ae03dd","url":"assets/js/1ecebb43.ed5d0a92.js"},{"revision":"b397b3a204e55b24a9ce7da874765d30","url":"assets/js/1ef3786a.499896ec.js"},{"revision":"dbba3fd6c3cd76f6569821ffe137384c","url":"assets/js/1f391b9e.1a106f8c.js"},{"revision":"3f91b56f65460fdf383de733183c3d20","url":"assets/js/21518505.495e426e.js"},{"revision":"bc23dc7ad5ceed6212d846caa3b4ce54","url":"assets/js/21cf50b3.1f61503a.js"},{"revision":"08b3bc23f03da91f8b912259dfed3b1d","url":"assets/js/24f838f6.97c17cc8.js"},{"revision":"c56f9bdf624db4abef766568ee54d03a","url":"assets/js/25ea0b6e.5280657d.js"},{"revision":"10f0d434ebb04c2d95fb9cf14f657456","url":"assets/js/26b500ba.7022a866.js"},{"revision":"c74ab8a1cd14decc6c1ad2070a588cfa","url":"assets/js/26e692e3.bcb5ee4a.js"},{"revision":"7be2865254cd43e505b4e71241249ea2","url":"assets/js/272.b1c7de25.js"},{"revision":"06e818540aec0c4834b4e535bf9c7155","url":"assets/js/2797603f.f5126d8a.js"},{"revision":"515f7186902430d8da8c9710dd75bf11","url":"assets/js/28d0a442.71559638.js"},{"revision":"8ecdacc7de7f6855e79a4936c8923596","url":"assets/js/298.e994d959.js"},{"revision":"1332802699be1ff2381366a55830c5cd","url":"assets/js/2981a785.54e5bc67.js"},{"revision":"cb342564d1b3a1da3570154763d3bc5e","url":"assets/js/299fd2d4.0ce47c36.js"},{"revision":"1d5a4fe0661ab37d90f1f10efdaefb33","url":"assets/js/2a5f10a0.ee86a102.js"},{"revision":"76dc74775569467cbc247dd065ed4e2d","url":"assets/js/2aa24227.cc013cb4.js"},{"revision":"b98d67b28a66462c0486751323e41e20","url":"assets/js/2abe3314.c8d592ee.js"},{"revision":"dcef6d83c25b401226eddd01f8985583","url":"assets/js/2bfd5bf2.a5cace16.js"},{"revision":"6b7af79a894fd3581dad59571a245671","url":"assets/js/2c0913dd.537f81b1.js"},{"revision":"9716ce0f23832a46eb87a5dc5f0262f7","url":"assets/js/2c2817b8.521d8fc9.js"},{"revision":"d52b80e0e121bcfa48b9ac197cdae849","url":"assets/js/2c2f03e3.1a3e3d39.js"},{"revision":"2ba148d660c13334d306929a6f6b082d","url":"assets/js/2ead8e40.a6747d4a.js"},{"revision":"e3f735266a218fa56360ea2752a2d537","url":"assets/js/3099fbd1.b281da4d.js"},{"revision":"79d38afd05007c54b7eadfe1358e42a2","url":"assets/js/31885b5e.b7f1872d.js"},{"revision":"730ec4371013803c685c85c07e7c72ab","url":"assets/js/335f5346.dff6363b.js"},{"revision":"ca6b5ac95be477f1c3072b4bb9250c59","url":"assets/js/34e9cad0.1ad7ec0b.js"},{"revision":"2397930d0a480aa1d6785e0f6b0b05be","url":"assets/js/353d7f1f.59d8d72f.js"},{"revision":"92af936a8182e1ac9ecb80dbd5f51096","url":"assets/js/3617eece.99d71632.js"},{"revision":"c815a812cc776ef833a4c3c5695419b6","url":"assets/js/3685eac7.9bdfaa51.js"},{"revision":"ac53f49a9c1b7ae6e22a0550b2e49ec6","url":"assets/js/368b2af3.2d16ada0.js"},{"revision":"a4ce0cb3c66f0d5647bd21ad13e960bf","url":"assets/js/3831.37e0c7c6.js"},{"revision":"4eab5af7384aa777d23846b6739e1c5d","url":"assets/js/38d436cc.a956b0e6.js"},{"revision":"2c41c424f0502705d55ceec341499d48","url":"assets/js/3a9fc4f0.1a1179f9.js"},{"revision":"e6950aed47a01074e0bdcbf694c7c980","url":"assets/js/3aa1d8cf.7eac8277.js"},{"revision":"e4a570f19e9deecf8a0e2f46941117fa","url":"assets/js/3c16a28c.a2a6850d.js"},{"revision":"523b79780773fa2e32aa33a007c7fb51","url":"assets/js/3c655c76.a4316bf3.js"},{"revision":"0f37f9ae4a0cab1b0563fd8ca3f65844","url":"assets/js/3eb8918e.7d8a80ba.js"},{"revision":"5ed916a5f0fcab667d9b08fd51462440","url":"assets/js/3efc06cb.843eb637.js"},{"revision":"cc29b45fcd323d428a35ad1bb4b76f91","url":"assets/js/3f3e63fb.d3cf325d.js"},{"revision":"b182e1eefed3a025f6e5ff3ef68ca9e8","url":"assets/js/3f835183.5b1b1fe0.js"},{"revision":"86aca3644fc50f3d68aedd9138e1c4a3","url":"assets/js/401f1e8f.b8439bee.js"},{"revision":"f1cfdc065bba3623514ec93565d92d01","url":"assets/js/417dc7cb.c7808b85.js"},{"revision":"6d0224806349c66d729a91d6f02443f9","url":"assets/js/418ad307.a33f4068.js"},{"revision":"c7179861c000d11721f8620b48ae5e64","url":"assets/js/41d4d076.a3bd6e14.js"},{"revision":"9c5383b568f181f1f7bade02973c0ea9","url":"assets/js/421ae91c.1963ce17.js"},{"revision":"1486b21bede0675d54207245d8321dc4","url":"assets/js/4290a99b.cc2e4b39.js"},{"revision":"ee604e4d8f8c175de2f578ba903fe095","url":"assets/js/430cb1dc.0f6f255b.js"},{"revision":"14bda7f2d334ec54d283c11e2d2d61a1","url":"assets/js/43fcff82.cec7d445.js"},{"revision":"d3d4dd9a1a10b524cb9e603cab05e4f0","url":"assets/js/444d4fb9.d53314c4.js"},{"revision":"f6d9660853dbbdf0791fcd4cc4957359","url":"assets/js/4455a696.4f2f81f8.js"},{"revision":"80d8f77ed761f9d906dfa0e5df11eb47","url":"assets/js/45ca1306.cf859124.js"},{"revision":"ef0a0f8a74b5c12a1e753839186df242","url":"assets/js/4725.a3388345.js"},{"revision":"f9b8622058afbef483b75f64d369b1ac","url":"assets/js/47db058b.596c693b.js"},{"revision":"d9406abc2980ac72d502af35744dd409","url":"assets/js/4800.66cbb97c.js"},{"revision":"042911f1f33ce45b4d59ac27839342a3","url":"assets/js/486efa96.73e1a3da.js"},{"revision":"46120224ff87341c867a93212824b4f3","url":"assets/js/4882.327621f1.js"},{"revision":"c0fa67f5dd4d67ebef4ed997fe9d8d39","url":"assets/js/4899.49640c31.js"},{"revision":"f01df813a708b8822e95ebf7fbf2a0d5","url":"assets/js/48a7df61.eb543437.js"},{"revision":"0d96ce9235bd3f00cbd0fe0945adfc29","url":"assets/js/48ff9475.11c1e846.js"},{"revision":"715e884bc50d9d2ef3bdfbcdc5530bbd","url":"assets/js/49847bb5.df2fac6e.js"},{"revision":"48778787d2d0d69a76be28c7443d749c","url":"assets/js/499dbc29.faa79625.js"},{"revision":"3e16ec85c9eb523f4a94d766b86db643","url":"assets/js/49a680fa.d41c7b97.js"},{"revision":"3c5aacc80e74cbbc6d5f88c388f7efce","url":"assets/js/4b1bc88e.52dd1998.js"},{"revision":"0b79bfcff6da0189ecdfb73830de2be9","url":"assets/js/4dd2532d.5b65af73.js"},{"revision":"195102e4ea4c9d07496c429f8bfa637b","url":"assets/js/4dd87e68.505d2818.js"},{"revision":"0aa949369c59d3a8ff351b641bef97f7","url":"assets/js/4e122f11.7f56de4c.js"},{"revision":"220256e86abdd37f11fb99221c845a56","url":"assets/js/4e7898af.0525ee92.js"},{"revision":"fda764f6933287c469582c5f4ac399ed","url":"assets/js/4ec2ca4e.895d7255.js"},{"revision":"ff626a5e9a10b40aa418b9228fa49e68","url":"assets/js/4edc808e.09a8813c.js"},{"revision":"eb30f73af80d25b78c47cd63b2b03550","url":"assets/js/4ee1adc2.3942ff47.js"},{"revision":"afd48db3a380c4e5b5973fa8e93b042f","url":"assets/js/4ef6f358.0b163fc2.js"},{"revision":"620d182bde1aa5f049754979a93f36e3","url":"assets/js/4f4befa1.bdccbef1.js"},{"revision":"a4fd3a67a6bf9af2eec8fca5a9e42fa6","url":"assets/js/51a1dc1a.3cb32e99.js"},{"revision":"c325bf4dd31478bfc080a3cd12b546ec","url":"assets/js/525a390a.2f66b8b8.js"},{"revision":"69fec067d8607544607c2cb335a61726","url":"assets/js/531.08d30cd2.js"},{"revision":"8044d6f0850520086667355c5c5c33d2","url":"assets/js/5412b5d2.5ed774ff.js"},{"revision":"ca13519cc37bf77131813d2180199aab","url":"assets/js/54d7e390.3bf17efc.js"},{"revision":"3c644d237a20bef941a3c74b9fbfbefa","url":"assets/js/5531.45f331a8.js"},{"revision":"ab14074dae09eec246e3e985c03bf7d3","url":"assets/js/55667eca.31a4a7a4.js"},{"revision":"03525bea1723827d54bd2994579c3a24","url":"assets/js/5667.e6f5c800.js"},{"revision":"73ab87afb572a6852fbbc6c8c7a9a17a","url":"assets/js/56833e7f.c2e78330.js"},{"revision":"3474df812825eac56ada99e2159e81f2","url":"assets/js/56a7c978.72627a1e.js"},{"revision":"db3291b306395ce1b0b6aedd92846639","url":"assets/js/574dbab1.cbab31ff.js"},{"revision":"e423c09cdd81cbe7df6bdd86f0419a83","url":"assets/js/57e1e6c5.10c80bd1.js"},{"revision":"9a59ea4fa71d056b08218b88ac8aac5e","url":"assets/js/583ba798.965a72a1.js"},{"revision":"2bee23f8165997a1fdf2e2199f890449","url":"assets/js/585ae644.bf7ebbb9.js"},{"revision":"42dafa4a389ab69a8f55956dfdd60ac7","url":"assets/js/5901cc52.23103b12.js"},{"revision":"f54705f0536f706baa214d2c717220e9","url":"assets/js/593ca3da.13c5b697.js"},{"revision":"5cbf3ce432708c383d21607665aa7a04","url":"assets/js/5c5ed4b0.aeb433dc.js"},{"revision":"a7ebfbffbb400ec1247bdca58fa947b5","url":"assets/js/5c926596.82d23d7f.js"},{"revision":"517386947ea6891ef5204487c94de441","url":"assets/js/5d0ce896.88c81152.js"},{"revision":"ec26d672eac229a6945f0247e29a048a","url":"assets/js/5d44278d.46240905.js"},{"revision":"8e4568fefab3ff957f494278188eed50","url":"assets/js/5d901f6c.0e4beb5b.js"},{"revision":"22303b84790f08a7be7a747c33e63022","url":"assets/js/5e812b6d.561d4643.js"},{"revision":"2cf87a562933b4fcdb385d38d3bce8fd","url":"assets/js/5e95c892.5bc5d80c.js"},{"revision":"3b177731077379e669dac5ebea38b4a4","url":"assets/js/5eb2f6ae.1d3ac61c.js"},{"revision":"5e9e59cc611cf8e41c13b8ef17c7206e","url":"assets/js/5fbcf17e.027b7f1b.js"},{"revision":"e0ceb7dea152220be15970a21c061599","url":"assets/js/5fc3e4dd.550ae463.js"},{"revision":"70a28d2c948e05110ad5e4cd7d235536","url":"assets/js/60535e1c.4eddf4a7.js"},{"revision":"c503120ecfe50b566d1970c743db8002","url":"assets/js/6059.691256c2.js"},{"revision":"65e094acba7da67bf4d2f2284fc4a4f4","url":"assets/js/60704716.3f5bfed4.js"},{"revision":"adc1c26cc6c66143b1262cbd9b02b57c","url":"assets/js/60add6f1.65d56b6a.js"},{"revision":"7d3cc5f646e8872bb5170e2e67db543e","url":"assets/js/60cd687a.de7ba53c.js"},{"revision":"9feb1bc05cc67b5ff4e165cbcc93f593","url":"assets/js/632f43f9.c72293f8.js"},{"revision":"0e2051051069369b424f2a626b002a91","url":"assets/js/638be404.4d5b20c8.js"},{"revision":"05d6eeebbd72394654ac408afc91b0a6","url":"assets/js/649.d8910d8d.js"},{"revision":"2c05698cee11107f600aa447e34d4f67","url":"assets/js/65e4ccd4.70517e41.js"},{"revision":"31474ca5dd9ae29402141892e711cfbc","url":"assets/js/6798f4e4.4b0e7a82.js"},{"revision":"e1f0421ab13b735f0ffd4ca1d0e17328","url":"assets/js/68233c82.8cd43fa7.js"},{"revision":"58feb962ff8f41db03ab6ce1d832774d","url":"assets/js/68e30b06.970add08.js"},{"revision":"97417ac08f6e6dd68c026568057a3a82","url":"assets/js/6a00305c.f932974b.js"},{"revision":"f3d56d5c6a8367372d33e637da1106eb","url":"assets/js/6c4c4dea.1e84cec8.js"},{"revision":"0c763d946a92c13193e2415d7928f751","url":"assets/js/6d9bc096.b2ae45d5.js"},{"revision":"faca9965ea62d08d852590a9b9e3f60a","url":"assets/js/6ec71b44.0bbcbad7.js"},{"revision":"1d54188badd5f73c7a9d1cc06d2aee8e","url":"assets/js/6fd14778.a4e38cd2.js"},{"revision":"e50afce220a95d17cabb517486f4f18a","url":"assets/js/7049.55f26c66.js"},{"revision":"cf7bbd63e854eee7f5e5252270f4fa4a","url":"assets/js/70c0a5b1.8e15330a.js"},{"revision":"258707ac6632cae3c5de580757b674a1","url":"assets/js/70c4bb45.ad07ff5c.js"},{"revision":"7955b6d7ead2440c44df098db0e17ea0","url":"assets/js/7152fb6e.ae33b6eb.js"},{"revision":"26e7552d27034f3145ac2d4a3e45c6fc","url":"assets/js/719399d6.ddd79a44.js"},{"revision":"031087fc16c06be827cf2cb4b5ac3233","url":"assets/js/7298.3fa2135e.js"},{"revision":"7d62dde5d887e1a54c2c7ba9da78cd70","url":"assets/js/72cf1be6.6671cc88.js"},{"revision":"c2836995168492b4e7d2a2a48c3264d6","url":"assets/js/738fa3a4.e855961a.js"},{"revision":"d48e5be2945bcf49ee9196c1120314fd","url":"assets/js/74512fd2.6f6ec16c.js"},{"revision":"50fbbf85bec95a516a1df0be908ade5b","url":"assets/js/74dda8d0.673b2a67.js"},{"revision":"2e13ecf50ea3afac3c3bcc2b667f732b","url":"assets/js/768714c1.2b67adb3.js"},{"revision":"5773206fc60d740e0fb03df1edacf4fb","url":"assets/js/76def669.03a053c2.js"},{"revision":"95fc79b290e16e1cad349537528ee9ca","url":"assets/js/7723.4a44d3a6.js"},{"revision":"32c3c1a9ce64e185020f0632343acae5","url":"assets/js/77a552d2.d0172d83.js"},{"revision":"e011d7d295f6f4424d02e84ac727bf15","url":"assets/js/79606cc0.549bd370.js"},{"revision":"9b4e9b3842835749cc237a48c0f935ea","url":"assets/js/7be57a40.bbb26096.js"},{"revision":"93ef5861e069ebd297541eaa7fd90587","url":"assets/js/7ccbf748.4fe4888a.js"},{"revision":"e435a5f81a1c8e605da54bf1f3d721a7","url":"assets/js/7d4014a0.e29222a4.js"},{"revision":"44e55758757c7323e4c63032e63d9093","url":"assets/js/7d79b262.0884bccf.js"},{"revision":"f8e7a7ed210b369cf361ecf1b4e40dae","url":"assets/js/7fcbdee5.37dffc29.js"},{"revision":"5bb9f00297e0387128d9ffeefa2a6c8a","url":"assets/js/81350798.ef282d7f.js"},{"revision":"e44021f950fc1d21623610e36d03315a","url":"assets/js/814f3328.da254b0c.js"},{"revision":"9bd3f7ab6bc1c529032f12e61cc4c814","url":"assets/js/81b0b826.d5ce2ccd.js"},{"revision":"d3734769e2c0f5e62ace8b7a072785d0","url":"assets/js/81d45afe.4a8f5de8.js"},{"revision":"e110dfc9e58e0ecf181739252bfb10bd","url":"assets/js/831d5710.5e345390.js"},{"revision":"1269dd04537f77e8f5692db34af19e11","url":"assets/js/8405e40b.f52a7075.js"},{"revision":"2780af42c5a4cb7757f50cee5a08ab77","url":"assets/js/844e8bde.6f9e1edb.js"},{"revision":"9fc539716ad48f23190b13cbbcef418b","url":"assets/js/8698047a.ef54532f.js"},{"revision":"e82ec0dc61887f1a70e9f70068c2db3a","url":"assets/js/877814a5.faffd8ee.js"},{"revision":"5b3f62204301238fbb2fa7e862011256","url":"assets/js/878419eb.a7fd0988.js"},{"revision":"aaf0c8332ef3665197e299db7fbd9da5","url":"assets/js/87f085ac.1c776e9c.js"},{"revision":"5c8649d6e4726409ccc5bd8ebc2b3bbc","url":"assets/js/88ee3594.5e132c86.js"},{"revision":"1a120e006bf1a21e7ecf9f60a2f9c41d","url":"assets/js/891c38c1.56984e00.js"},{"revision":"7429de4f875eacfd61c5d58d8e422f37","url":"assets/js/8934c416.9524829c.js"},{"revision":"94fc30c261f2d9067ef4e25fd57661e6","url":"assets/js/8954.f074ff44.js"},{"revision":"7b87b6ea48c41b13618903cd06b847b7","url":"assets/js/8bb873be.4105832d.js"},{"revision":"cbb0ee234e254490343b032af7ee591f","url":"assets/js/8d3daf7e.d0da8702.js"},{"revision":"afc561221bcddf94372760735cc04b40","url":"assets/js/8d5100a5.184a8df7.js"},{"revision":"c29f8f9fd8150408e3e9f4aa37e538b8","url":"assets/js/8d6d7042.bc13e011.js"},{"revision":"743609224069c3ab92ddae9c6248aa4e","url":"assets/js/8d87430e.7d40ec6d.js"},{"revision":"27c0ebcb6deb2cc7b79a9ab913185de2","url":"assets/js/8de208d4.d5f86b96.js"},{"revision":"0d460351d6eba4a388ae3c82d09dcdcc","url":"assets/js/8f2d6012.067b497c.js"},{"revision":"fa515a077c0ce05001733741d91f446e","url":"assets/js/8fbb1d25.1d4ab5ee.js"},{"revision":"621adf609cd5ff90d1e34bddc0b7bd5d","url":"assets/js/9074.4c628453.js"},{"revision":"d53f15deddef805f88372b03b7c81ab4","url":"assets/js/91a408cf.233c3b18.js"},{"revision":"3735e8c819b57088c14be5d3de91479d","url":"assets/js/931c7e04.9ba2ea8d.js"},{"revision":"98be14b4bac8b5cf5896094c026c3f8b","url":"assets/js/935f2afb.768e2f0c.js"},{"revision":"ca0e9501500664c0cb5b83f6d5eb9443","url":"assets/js/93c7142c.79f14037.js"},{"revision":"4a7f0714a361accfe83344b7a1408104","url":"assets/js/94642dbf.59a1971a.js"},{"revision":"a791936fc37cbbf4a593bed3ecf5f217","url":"assets/js/9627.1677a00a.js"},{"revision":"3fb4261e046f6999f736556af97379c1","url":"assets/js/97dd099a.7c339eb4.js"},{"revision":"6f0d6850e3e6cb9f659c1bfb5af4817d","url":"assets/js/97e86fd8.e0e91fcb.js"},{"revision":"c29f643e6d9635b320957c0ecd93a50b","url":"assets/js/985ca71a.0de5f922.js"},{"revision":"1e9b4e4d1cbe04c3b821271c5ff20783","url":"assets/js/98df52f6.f008cf35.js"},{"revision":"ed2a5d3408c3d741a0cf5842c5c95ac9","url":"assets/js/99b5f837.4b2ecb03.js"},{"revision":"c4bcd0b275282ed281be3e7c468cd1d2","url":"assets/js/9ab58b3d.d6aa0b9e.js"},{"revision":"2e3fc5a9b70be93c52daaf1259215820","url":"assets/js/9ad987dc.268a0a8f.js"},{"revision":"6be92e7f33f5c2ac8ba6073105096e46","url":"assets/js/9b9d8a78.d043a995.js"},{"revision":"89bb22525acb735ceb43d8554d0d1804","url":"assets/js/9c34cbca.9b69e231.js"},{"revision":"e88d585f0779dd8aa5266dd9e3c5b7cd","url":"assets/js/9c658726.58a47c1d.js"},{"revision":"1838335f5e097852b33ce304b92721e5","url":"assets/js/9cf65f97.b1c52f68.js"},{"revision":"7b6002a96b7b9a6285e1b673e517ca6a","url":"assets/js/9dd555b1.f9fe8c1a.js"},{"revision":"5fa42733bade11fe5dd8af609d5464b1","url":"assets/js/9e4087bc.bfa4914f.js"},{"revision":"e5f21fff2bd888c43afed8d6f9fab251","url":"assets/js/9fa1da0a.d47a9d73.js"},{"revision":"cb531a08dfc538aee6b42124cab2510b","url":"assets/js/a037c63f.c97fd198.js"},{"revision":"536ffb85a13595163386f2fd56df2066","url":"assets/js/a1a3e7de.a5c3d1bc.js"},{"revision":"fd0895ae7d15637ef819bf251b3be505","url":"assets/js/a24f541c.46fa52b4.js"},{"revision":"7795bcc0642353f0abdec13a4f88a7f3","url":"assets/js/a342c8c4.30b0e535.js"},{"revision":"4fde67b3583c454723a559022c34f9ff","url":"assets/js/a3919590.38315bc5.js"},{"revision":"acbab30ee58f43efde68e94effec37c4","url":"assets/js/a3a61869.b9ab4188.js"},{"revision":"80e94fc707dd3ed511d6835fee9de1c4","url":"assets/js/a3c88c0b.4de8acad.js"},{"revision":"68cd2ca80b410ec5775f6e89e9577a0e","url":"assets/js/a3f2e35e.fcc9af86.js"},{"revision":"868898e9242b74b6a8897ab7d5e7ce73","url":"assets/js/a44af050.02b027b6.js"},{"revision":"f889d0cd9ef1508ccc38d850a3f5fe39","url":"assets/js/a5aec623.34d50710.js"},{"revision":"af7f84162eaefda437a34bb9d6643455","url":"assets/js/a60a8c4d.56a21c92.js"},{"revision":"b069bee02b0d0c6a45cd9bea39176d37","url":"assets/js/a6aa9e1f.08a4fd98.js"},{"revision":"21386d9ac6221e0058030065875c6875","url":"assets/js/a7bd4aaa.a500b789.js"},{"revision":"13a00bf9f7fe39de36ec7349a7f88e23","url":"assets/js/a85b56be.d113cc94.js"},{"revision":"d313e422d543cb628f2f5dc5335cf100","url":"assets/js/a94703ab.be2fc366.js"},{"revision":"6446bfec5ea02720c2d18fb073c76f95","url":"assets/js/a9fb8aad.9d1717c0.js"},{"revision":"9ca6187287b5fdc07fe32858f2e8ef06","url":"assets/js/ab0d2325.44a919f5.js"},{"revision":"0803ac4163fdbee70015671808aa6a80","url":"assets/js/aeb09130.cfa7a8de.js"},{"revision":"25768ec4ef467301a5ca7eb540c751cd","url":"assets/js/af593c11.e453fc9f.js"},{"revision":"12d3647f00f009aadba17785f52edb71","url":"assets/js/b0072286.edc9ba30.js"},{"revision":"346f205f28f539ca6daf71c5b301fd8c","url":"assets/js/b01385c6.af250ba0.js"},{"revision":"698d833d4b7ff97da9ab3f95aa0d30d9","url":"assets/js/b09a966d.88a2d705.js"},{"revision":"93bee9aba81f655325dd9268a4206f17","url":"assets/js/b10d2d1d.93c2fa2c.js"},{"revision":"df1081755c847a948855cef64d702eda","url":"assets/js/b180cfad.269ce71e.js"},{"revision":"c1111a057002eba1c95b83640c2be2f0","url":"assets/js/b1adbe5f.eaf3d5ee.js"},{"revision":"192d4d1ce3326e0b32f6007ef99ec2ca","url":"assets/js/b229e7b4.900b000c.js"},{"revision":"a27594600f8c1224a701d9b2d23e9323","url":"assets/js/b2b675dd.865ac02b.js"},{"revision":"b2a00673bda01962c589dfb6a46fd3b5","url":"assets/js/b2f554cd.9f376515.js"},{"revision":"aa99248fc99bc9ce7af91e43c5c98432","url":"assets/js/b468d581.7a52c6f1.js"},{"revision":"6cb59e03253d7af7640946b73a9a541e","url":"assets/js/b4d1969b.bb6ee14c.js"},{"revision":"71f0be09f335d65e179ae65e3d6f6466","url":"assets/js/b5054348.e406584c.js"},{"revision":"45fb41ff297160327f0142279713527a","url":"assets/js/b7fd5d9b.8f27b5c6.js"},{"revision":"f8b988caad73e2928b6dd3234bd2a217","url":"assets/js/b8bad8b6.59e8887e.js"},{"revision":"07a613fc49a59b99eedecb5eef804ab1","url":"assets/js/b8f857cb.45297d00.js"},{"revision":"d2fa8daf20248a110929284708073d3a","url":"assets/js/bca100fd.f706c30c.js"},{"revision":"9674a6f9a21e42345b2c63b44904c90a","url":"assets/js/bcadd4b5.c734e7da.js"},{"revision":"91cd7b9694199cb741a7603c28916906","url":"assets/js/c059fc3b.5de5952b.js"},{"revision":"2e67176330abf32f81bfef4e3076a78d","url":"assets/js/c09518a0.9798028e.js"},{"revision":"d2b7974ec46d1c56655cd5f08f3e7e77","url":"assets/js/c143124a.9a25c5fb.js"},{"revision":"a54b5352d9facde6435215d87c7d8ed2","url":"assets/js/c1cbba14.b9e8e8cb.js"},{"revision":"038698d402acf97b2bffb80bfbd36989","url":"assets/js/c2ba1a43.beb0c10c.js"},{"revision":"0560899c040c4ed017ff8a0110ec7c94","url":"assets/js/c36f9ac4.859fd77f.js"},{"revision":"9b4f4db122123f3d159c0b41c5c24df8","url":"assets/js/c37f2d73.778e56a3.js"},{"revision":"588a54d597165cfe4db67d3ff518169b","url":"assets/js/c399785c.a00cab94.js"},{"revision":"6fb19181661be4a64c83af1b84e40e2a","url":"assets/js/c5697d08.ab6d4dcc.js"},{"revision":"13877dc3f5598d1361f8b401cbb31258","url":"assets/js/c5a80f01.30eddb43.js"},{"revision":"9b6d3456e8ed6893ba1f7411285e5464","url":"assets/js/c6fa8535.69f6695f.js"},{"revision":"d3a3789c21c0c3569f08e99d051f0a65","url":"assets/js/c713fb68.4e7bdd59.js"},{"revision":"70668589b760d56e4224404d410af6f7","url":"assets/js/c7d7c2cf.57b869da.js"},{"revision":"297755904bc6a102038aa8b3e45511a9","url":"assets/js/c7f20b34.c6c66c3b.js"},{"revision":"7b01b64cb3c8195aad17abbce35efc34","url":"assets/js/c918d1af.65bf299b.js"},{"revision":"b3832e6508fc26df3afc7538802e8ce9","url":"assets/js/c923d4b1.139e1835.js"},{"revision":"3a1b913df677fedcb1ccc5641f65700f","url":"assets/js/c96ee667.51adcf97.js"},{"revision":"8d1476935de644fd454cf5c921e2d5f0","url":"assets/js/cabb6052.3b69db71.js"},{"revision":"48b593303518853308d435935ffc937b","url":"assets/js/caeb3f87.2139e792.js"},{"revision":"42aae4e122dad21455f08b548677d9bf","url":"assets/js/cba120a0.a36f11f4.js"},{"revision":"af1805a8ccab34668c2ed9e1a45013f5","url":"assets/js/cbbcf4f2.80b76b41.js"},{"revision":"04b1202f98a0cd9865e5d64c7ed6f778","url":"assets/js/ccc49370.0cb3c0c0.js"},{"revision":"d396e1a23eab7946cb8d599894b8f5c4","url":"assets/js/cce3350d.f67061a7.js"},{"revision":"1dfc96defd35887425bd3af0a8eb827b","url":"assets/js/cd46b10a.c3550a90.js"},{"revision":"71b42c11ed06692ffac1f5825ec01e87","url":"assets/js/cd85a010.4d07141c.js"},{"revision":"46f3227913d6abbfebe7a8f7a94a5c80","url":"assets/js/cf1baa66.81bbe4df.js"},{"revision":"902560e958074580afddfe65ed41a058","url":"assets/js/cf4855b3.af3e6262.js"},{"revision":"aed7b70daf7380c0b7aaf90d673ad774","url":"assets/js/cfc0d746.805c7545.js"},{"revision":"6d84e6e11de9ecb2ce241045f80f2bd2","url":"assets/js/common.e7ff61e5.js"},{"revision":"236165148982baf78bc27a65d0a1ca9a","url":"assets/js/d089f3a2.01e17396.js"},{"revision":"2c8ec035fd8a89c140b33ebaa9bd0a6d","url":"assets/js/d0eed897.32073246.js"},{"revision":"ada465a90cef75a7e58bd8debac2ed1c","url":"assets/js/d27e4703.d4bd772b.js"},{"revision":"cbd72022070a66a6e9dadb345362e16d","url":"assets/js/d4244827.97d6fabb.js"},{"revision":"e7ac129248ec0f84cc32fbd9fd834716","url":"assets/js/d4693b41.04d9b66b.js"},{"revision":"658359dfd91bd3dc40ef011f46ca6a07","url":"assets/js/d4927cd4.2e3510f5.js"},{"revision":"795f76754b8c5b3c9ec72a0604dbe3c4","url":"assets/js/d69a32a8.698ee67e.js"},{"revision":"6818ff6c69d22696722c273c09e95903","url":"assets/js/d774de2f.b28404d5.js"},{"revision":"e6d955c1653a09d46f015cd6117aacb7","url":"assets/js/d7d404e6.5e5e649a.js"},{"revision":"0cd969b6953ce14b5a1258644e0d20ea","url":"assets/js/d806ecdc.cdcb4caa.js"},{"revision":"17731408c5623d42b627d0710ee02daf","url":"assets/js/d8911f7f.57ef4acb.js"},{"revision":"23c0484d7059891bf56fe71393c21d29","url":"assets/js/db19a329.462f2a71.js"},{"revision":"009c007e382fecc33fef2b386aa92bb7","url":"assets/js/dbeb8484.ec8a9fbc.js"},{"revision":"97de74f5be157200eee599c803e195a9","url":"assets/js/dc0f51b3.2bc30812.js"},{"revision":"d854898deeb48f32286527f4fa890405","url":"assets/js/dd4157fa.92436cce.js"},{"revision":"314c124ce8b7a9afc94acbe9d798171d","url":"assets/js/dd68989e.200420e5.js"},{"revision":"9d036c589e2695074ee708c1dcbef3a3","url":"assets/js/dda8ff89.e1d9377d.js"},{"revision":"63231c33ce619aa9db1dddd367576416","url":"assets/js/defee600.e1e9fea8.js"},{"revision":"59cccda68cd14638b7be37dd54274485","url":"assets/js/df64ceb5.74cc3856.js"},{"revision":"add43e83e7c657e4111fa77ea4f43e71","url":"assets/js/df8a8323.6e683bf1.js"},{"revision":"9b4c620025be5eefaa5badafc03c3e09","url":"assets/js/dfa18018.8669318d.js"},{"revision":"ecb371bbbd3bfb835362b80581b7f16e","url":"assets/js/e028d6bb.5da98b36.js"},{"revision":"778b7c9076a5cc8be2973f8593b07a3c","url":"assets/js/e044428a.5e959eca.js"},{"revision":"00d87778948461227b71e567812a7275","url":"assets/js/e161bfb2.3de82884.js"},{"revision":"4c7c5039222e96feec80b6f5d4ac197b","url":"assets/js/e38db323.f31caf6d.js"},{"revision":"79565955da9794ea433d51b4da1a1a92","url":"assets/js/e689bc2e.0d12dbef.js"},{"revision":"468995918b7ecbff362feebdac103bba","url":"assets/js/e69d98b9.18753891.js"},{"revision":"6eb40e6fe83dab19d4bbee1d81bd6d67","url":"assets/js/e6d1a3ae.82d43298.js"},{"revision":"da87a72104794ca2ad52d7c71f38b9fc","url":"assets/js/e73c9379.13dd6104.js"},{"revision":"04720d4e5caf8aa8e5c4fc735c97fdbd","url":"assets/js/e79a2b5d.f7071547.js"},{"revision":"83ef5fb9dc61204f3055f83c703c9ab9","url":"assets/js/e7a4155a.6a57e9d3.js"},{"revision":"b92ed245b8329ca9766e1f55706cd356","url":"assets/js/e86a1834.70cea8ea.js"},{"revision":"dc1d754f979453adaaa3348c4412fc46","url":"assets/js/e9d27e10.82202a35.js"},{"revision":"55534ba8923e5f2bddf4332b5eb96b3d","url":"assets/js/ec5e0ba1.f6ec8cb6.js"},{"revision":"491a5e5c602b7a04891c90a7641f35cd","url":"assets/js/ed2090f1.15ebb910.js"},{"revision":"ca5aa62049a21309cebbf6f1053c5f57","url":"assets/js/ed34e6e9.da6be3e4.js"},{"revision":"9cb6d46c8d133d84d50cc8cd262e1948","url":"assets/js/ee438ba6.a84ac612.js"},{"revision":"7b76f410b71269f9ea423baa27847ce9","url":"assets/js/eed7c618.467bbaea.js"},{"revision":"792e7760dec6ca043a37d99cf96abe0f","url":"assets/js/ef328f1e.d27dbcba.js"},{"revision":"4cf921407e2d558601d05d2b1bd70aeb","url":"assets/js/efbda9ff.ead777ae.js"},{"revision":"a8630815a6586eb98371746a1ed4a810","url":"assets/js/f1507532.255d065b.js"},{"revision":"d9404037cab6d10c84b16993416dec94","url":"assets/js/f1c47bce.4c633b1a.js"},{"revision":"b4b3c3d82c37a0d0fc077720f8e2ba9e","url":"assets/js/f2775b0c.018f3e53.js"},{"revision":"4d86dabe3dd8fbc34c5612eb3ec5fae8","url":"assets/js/f2ae5213.de8041b3.js"},{"revision":"fb9ad41afb32f6098a57f2eeb2a16636","url":"assets/js/f3af3d3b.387c1271.js"},{"revision":"11f55d92a1290eaac62ca63712ba7c30","url":"assets/js/f58d367a.79340764.js"},{"revision":"f9d290fe41863ab88a7dd2702222daee","url":"assets/js/f5a4bfef.4fc752d3.js"},{"revision":"c3218db06466df0254ae28eebf840d4a","url":"assets/js/f72f448f.25cc0d2a.js"},{"revision":"6a0cbeb74c1f24b764ffa1edeb396b81","url":"assets/js/f80b3d18.eeac72a9.js"},{"revision":"3f461e9321767d3fee059700af92639a","url":"assets/js/f819e736.a14127e5.js"},{"revision":"f5b90fcd1f4ab5b9cf6f8db8d8bf9801","url":"assets/js/f95bdf96.0584149b.js"},{"revision":"abcc79fd6311178f71e1b1ef08978f84","url":"assets/js/f9a3962e.1633e289.js"},{"revision":"599946db0a9aa199ecd4406ddfa5d07b","url":"assets/js/fae5fcc9.3fe5bfae.js"},{"revision":"45e2dc4a942c6c27400f35cde422f973","url":"assets/js/fb54075f.04af7e50.js"},{"revision":"3cfa5094da24b54ccf4b88f6ab083a72","url":"assets/js/fc1378d8.3aa67df4.js"},{"revision":"ce3815cd4f93308bd75322f191def356","url":"assets/js/fcea546d.2a75a842.js"},{"revision":"a12c9a1ff9a8f4b923b922a8c1e2ddcf","url":"assets/js/fd0499a6.db73e165.js"},{"revision":"3038c5f2804787c4b6e33c6bff56888e","url":"assets/js/fdd105ad.eb5d4447.js"},{"revision":"b95c1dfce17921d747bd48d3ac8aea46","url":"assets/js/fdd9c53b.45891d75.js"},{"revision":"2a7350fd9b9a941b8c76a25a773eee03","url":"assets/js/fe8463b5.aa0d3ad1.js"},{"revision":"85edab1a53897f4ed72ff92addb1407f","url":"assets/js/ff82e203.f2efcce9.js"},{"revision":"1249c284038ae8c561a1dc55742bb3ad","url":"assets/js/main.5c0e07e0.js"},{"revision":"1faa7c147eab3f0e1c904add20c1ced7","url":"assets/js/reactPlayerDailyMotion.95182d4e.js"},{"revision":"2baeb96d2893f7496aaaf2e6c3f19e64","url":"assets/js/reactPlayerDailyMotion.9f35b937.js"},{"revision":"f65aa5074b990fb2917e57c2b6f1d786","url":"assets/js/reactPlayerFacebook.7bbd61fc.js"},{"revision":"0d6ffac858291510dd6e2004814b64e8","url":"assets/js/reactPlayerFacebook.b93fb379.js"},{"revision":"f7ee99ca6395e84d4963966627d74cad","url":"assets/js/reactPlayerFilePlayer.28cdc790.js"},{"revision":"414ea947382e3d5f3629803cec48022b","url":"assets/js/reactPlayerFilePlayer.6294a644.js"},{"revision":"761ff9565dbc094602bdd94efa8d2619","url":"assets/js/reactPlayerKaltura.1c6393d7.js"},{"revision":"3fdad68676de88af4ecc309e6d85d26c","url":"assets/js/reactPlayerKaltura.4ea3a78c.js"},{"revision":"e7867b1a029a45d31d27fe178d119aac","url":"assets/js/reactPlayerMixcloud.28b7250a.js"},{"revision":"219e350722e2537e068b41e2270ce957","url":"assets/js/reactPlayerMixcloud.f334baa0.js"},{"revision":"566d2294e88ba85328f12ee7abbb1c6c","url":"assets/js/reactPlayerPreview.3946cb53.js"},{"revision":"5c202218fd9856ee9c190a15071dc3bc","url":"assets/js/reactPlayerPreview.8215cf8b.js"},{"revision":"c80163a8b3fa1f51cf5bded6644e9c6d","url":"assets/js/reactPlayerSoundCloud.ad38d3e7.js"},{"revision":"b4de1965860f0d7ee98d29b2a8abc268","url":"assets/js/reactPlayerSoundCloud.fc2bd9b6.js"},{"revision":"c10251eb865f240155061ffda885c127","url":"assets/js/reactPlayerStreamable.0e432fe6.js"},{"revision":"89b43388f101bab60e67c35b21a883f7","url":"assets/js/reactPlayerStreamable.f2d8cd02.js"},{"revision":"f5428e51c80020037dddacc8bdd2853a","url":"assets/js/reactPlayerTwitch.676667a4.js"},{"revision":"ab20a1ffab2a0896ae05105a5e7159e5","url":"assets/js/reactPlayerTwitch.69927f24.js"},{"revision":"06dbefd2a90e532dd0e8b82e04f6bcb6","url":"assets/js/reactPlayerVidyard.ce0defb8.js"},{"revision":"aa57f6a52c9bf458534e4b713c733386","url":"assets/js/reactPlayerVidyard.d7af7e43.js"},{"revision":"f9cf0a128018006236e6d5df10e49c40","url":"assets/js/reactPlayerVimeo.05d3cf57.js"},{"revision":"1aa88ee5c1ae3a6fbbd06e302b924658","url":"assets/js/reactPlayerVimeo.421f4987.js"},{"revision":"ec87ffc857e251cfdaaf11dfb7311f7d","url":"assets/js/reactPlayerWistia.15ff54b4.js"},{"revision":"9acb9efe2384cbd2f1f35a18db140c2b","url":"assets/js/reactPlayerWistia.a0114c0c.js"},{"revision":"32c0dbe44333c1cc45a6823dca2dcbcb","url":"assets/js/reactPlayerYouTube.58b38856.js"},{"revision":"b7c0eef3a2d07f16ee93fa5b6b604473","url":"assets/js/reactPlayerYouTube.c7bdd58e.js"},{"revision":"f97d1990250f32a281a4b83f611c6987","url":"assets/js/runtime~main.7b3bd9d7.js"},{"revision":"96f32b45d6f4d69ef7d44f7596767be1","url":"blog/2023/11/14/introduction-to-new-centralized-documentation/index.html"},{"revision":"bf5c28a096c33f710fb5fd6bee7f2f6c","url":"blog/2023/12/08/version-12.0.0/index.html"},{"revision":"c33492ebf040e6bfef3fd6d08342f978","url":"blog/2023/12/19/version-12.1.0/index.html"},{"revision":"09bb4510e6d6b22326135d69954ad809","url":"blog/2023/12/20/version-12.2.0/index.html"},{"revision":"a13e2a942aab2e38ff44612dba51b0fc","url":"blog/2024/01/03/version-12.3.0/index.html"},{"revision":"1f483b7527fa57180731b48d6d69e6a7","url":"blog/2024/01/04/version-CSE/index.html"},{"revision":"eb02b85a707effe553097b86813e7bf4","url":"blog/archive/index.html"},{"revision":"ef3944b635ddf647cb5228124c2237fa","url":"blog/index.html"},{"revision":"178eb8277395fd215cf290dc7dff1280","url":"blog/index/index.html"},{"revision":"d0cb8ab417cd2f3a562df37b5be9d894","url":"contributing/index.html"},{"revision":"04c7063bbd7eef165e1f09a73e0612c9","url":"docs/11.10.0/additional-resources/architecture/index.html"},{"revision":"8b99d89cfcd3e68859056a5682a63d7a","url":"docs/11.10.0/additional-resources/audio-formats/index.html"},{"revision":"5647973b10ffe48894ecbe12a8b4f70e","url":"docs/11.10.0/additional-resources/extracting-xlsx-from-h5/index.html"},{"revision":"212583c6773c3edda45d0bebabe3c603","url":"docs/11.10.0/additional-resources/flow/index.html"},{"revision":"9f59d5ed6cc2cbd5e733d6a845c80a8e","url":"docs/11.10.0/additional-resources/get-in-touch/index.html"},{"revision":"63f66bfa0de24a80294d6c542203e6f5","url":"docs/11.10.0/additional-resources/python-venv-activation/index.html"},{"revision":"43ed048b63183179ab73f899e3fe4058","url":"docs/11.10.0/additional-resources/visualisation-online/index.html"},{"revision":"8c287ad2723d9c246be2b2ceffe3c95d","url":"docs/11.10.0/category/additional-resources/index.html"},{"revision":"35f64d26b84b7e4570558ac505a2c0ae","url":"docs/11.10.0/category/requirements/index.html"},{"revision":"faf61b041d4769f91583e94c1260a9e0","url":"docs/11.10.0/category/user-guides/index.html"},{"revision":"e77345ee4db9bcc88a67e4c36e10caf2","url":"docs/11.10.0/index.html"},{"revision":"4f4f0f264809addc7fb58b570bcad0e4","url":"docs/11.10.0/install/index.html"},{"revision":"480ff1bd30a61274beb8c068403952ab","url":"docs/11.10.0/requirements/macos/index.html"},{"revision":"cc9060d6e8c16f112fda16e5cb37eacb","url":"docs/11.10.0/requirements/ubuntu/index.html"},{"revision":"0078f24822506ad3cf35f557695fdcc7","url":"docs/11.10.0/requirements/windows/index.html"},{"revision":"a705d880c19782bba951121982d741de","url":"docs/11.10.0/user-guides/modules-presentation/index.html"},{"revision":"d0e6631b2ecd3bac0dbced36f759bb8f","url":"docs/11.10.0/user-guides/processing-user-guide/export-computations/index.html"},{"revision":"0e35d3eb8e8676c7f40331cc3cbb4fbe","url":"docs/11.10.0/user-guides/processing-user-guide/export-dataframe/index.html"},{"revision":"65b35e607f553280608f7e9f65d6463c","url":"docs/11.10.0/user-guides/processing-user-guide/export-mdm/index.html"},{"revision":"ef032bb530fe8cc55cd01133aec8d8db","url":"docs/11.10.0/user-guides/processing-user-guide/index.html"},{"revision":"aa398b0d4fa86116cab1895eea93b773","url":"docs/11.10.0/user-guides/processing-user-guide/purge-computations/index.html"},{"revision":"50386b34c20ffd9b7b9b2b5f494653a7","url":"docs/11.10.0/user-guides/processing-user-guide/quit/index.html"},{"revision":"eb8271c5920b2a8a9c5751f8900f102e","url":"docs/11.10.0/user-guides/processing-user-guide/refresh-configuration/index.html"},{"revision":"2d03af0e90c6f2368648259c1e34d935","url":"docs/11.10.0/user-guides/processing-user-guide/repack-storage/index.html"},{"revision":"b2ba157985de720a73fb517644ce61f1","url":"docs/11.10.0/user-guides/processing-user-guide/run-all/index.html"},{"revision":"f33bb843da47af1c62048a60e3a6cd46","url":"docs/11.10.0/user-guides/processing-user-guide/run-autoclusters/index.html"},{"revision":"8b596cf21c37f71179709bd7beba31f7","url":"docs/11.10.0/user-guides/processing-user-guide/run-computations/index.html"},{"revision":"d896d01e761ec3b4260da7a0c959a882","url":"docs/11.10.0/user-guides/processing-user-guide/run-digests/index.html"},{"revision":"85e6f5ae61d33180add452fe44b879dd","url":"docs/11.10.0/user-guides/processing-user-guide/run-extractions-and-aggregations/index.html"},{"revision":"a7eebb0e9958e398dd097690b2fe411c","url":"docs/11.10.0/user-guides/processing-user-guide/run-reductions/index.html"},{"revision":"dfed4079f43c813de4d206d31ad0a166","url":"docs/11.10.0/user-guides/processing-user-guide/run-trajectories/index.html"},{"revision":"b5526bce0f0a93398f54a812b90daffe","url":"docs/11.10.0/user-guides/running-campaigns/index.html"},{"revision":"4594178397d033965b67f25e9293b500","url":"docs/11.10.0/user-guides/visualisation-user-guide/index.html"},{"revision":"a272420ac2553775f031ffdb040beb6f","url":"docs/11.9.0/additional-resources/architecture/index.html"},{"revision":"8e2cbc59c1e6645862d249f906c0d5f1","url":"docs/11.9.0/additional-resources/audio-formats/index.html"},{"revision":"4be6dccba9e62641df35d99f4b11070e","url":"docs/11.9.0/additional-resources/discord/index.html"},{"revision":"39bdc30365523d79f6a13c86374bbd17","url":"docs/11.9.0/additional-resources/extracting-xlsx-from-h5/index.html"},{"revision":"a3606ce3cd3e4d06aa782d0eee2778d7","url":"docs/11.9.0/additional-resources/flow/index.html"},{"revision":"73bcdf3f374b0d66d8d1e82948d1aed3","url":"docs/11.9.0/additional-resources/python-venv-activation/index.html"},{"revision":"3b453887dda2526f718c901ef5e61c5a","url":"docs/11.9.0/additional-resources/visualisation-online/index.html"},{"revision":"96cfbb9e7f1ffede810f5343a084fc9b","url":"docs/11.9.0/category/additional-resources/index.html"},{"revision":"9c30666b0053b675ca93c7b641bec64b","url":"docs/11.9.0/category/requirements/index.html"},{"revision":"497d7ec099a40db860e8597f53006e28","url":"docs/11.9.0/category/user-guides/index.html"},{"revision":"5353f0d422d9dc2b67b9eba6ddd9615c","url":"docs/11.9.0/index.html"},{"revision":"f0967784a26c8918d35f9c6ef4879207","url":"docs/11.9.0/install/index.html"},{"revision":"e3184a8ae791f172502d05232bbe8134","url":"docs/11.9.0/requirements/macos/index.html"},{"revision":"18065b4e2cf7b624cbfb82e5b83f31c1","url":"docs/11.9.0/requirements/ubuntu/index.html"},{"revision":"e8cd69045157327d95abb5dba2a2b4cf","url":"docs/11.9.0/requirements/windows/index.html"},{"revision":"124fc5e99732b4a067e16977ab9425e4","url":"docs/11.9.0/user-guides/modules-presentation/index.html"},{"revision":"52445d5f24e76700366f2965ba2858c6","url":"docs/11.9.0/user-guides/processing-user-guide/index.html"},{"revision":"7b730d38d461b55971b5fe6c00dc1560","url":"docs/11.9.0/user-guides/running-campaigns/index.html"},{"revision":"dad9a0023f8e6d84d4642d2cc722da92","url":"docs/11.9.0/user-guides/visualisation-user-guide/index.html"},{"revision":"0a68f46298d0448625f2bba644a50c1d","url":"docs/12.0.0/extras/audio-formats/index.html"},{"revision":"fb676597e30a49b5950508c745565a1c","url":"docs/12.0.0/extras/extract-config-from-storage/index.html"},{"revision":"4ad00c5d45e9ad95eafa223ead555422","url":"docs/12.0.0/extras/file-detection/index.html"},{"revision":"07f15371b9fdd77e32a40d116e6ed53e","url":"docs/12.0.0/extras/get-in-touch/index.html"},{"revision":"5b859c7ee8e95b19e7483799aa3d5e3f","url":"docs/12.0.0/extras/index.html"},{"revision":"860d49fc817a1b919cf61dbba105bdca","url":"docs/12.0.0/extras/offline-access/index.html"},{"revision":"3f79f9ac3a717bb4aa02ae02bfb9ac1f","url":"docs/12.0.0/extras/visualisation-online/index.html"},{"revision":"181fac6142eb32bcab6de2419bd06efa","url":"docs/12.0.0/index.html"},{"revision":"3d5959b62da22c85617ae11a4dc5267c","url":"docs/12.0.0/installation/application/index.html"},{"revision":"6bc831aebe52379abc196821de3755fd","url":"docs/12.0.0/installation/index.html"},{"revision":"23ee74890e0d7cdc670d2bb9ab5015a3","url":"docs/12.0.0/installation/requirements/index.html"},{"revision":"11480e9482242069d19e67d474f4300a","url":"docs/12.0.0/installation/requirements/macos/index.html"},{"revision":"8c48a67528e59d60cb7a88a5ff8c7725","url":"docs/12.0.0/installation/requirements/ubuntu/index.html"},{"revision":"df0b72e8a6216785a912fe57328148ca","url":"docs/12.0.0/installation/requirements/windows/index.html"},{"revision":"dbf67f538722d293743245df2ad8585e","url":"docs/12.0.0/modules/campaign/getting-started/index.html"},{"revision":"b76b169f9fa0232c1a25b8db29c99460","url":"docs/12.0.0/modules/campaign/index.html"},{"revision":"d44c7d2082898408da477114468a9a67","url":"docs/12.0.0/modules/campaign/user-guide/index.html"},{"revision":"cf4714f5d30609925a1b0e4e84cd3dfe","url":"docs/12.0.0/modules/index.html"},{"revision":"b57d7b928c28fa71836556874329f5a4","url":"docs/12.0.0/modules/processing/getting-started/index.html"},{"revision":"36b97818541ad4f1d86c043facf68bf3","url":"docs/12.0.0/modules/processing/index.html"},{"revision":"201ab9fef5ad52575d1cedac7e10a8b2","url":"docs/12.0.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"44e741ed75d2520d883470844e4611f1","url":"docs/12.0.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"22a948156b529fe1520614e13376f1f2","url":"docs/12.0.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"42f22bf9e5fe247e93af5c68b33cc99b","url":"docs/12.0.0/modules/processing/user-guide/index.html"},{"revision":"3e1766f3b10bb454ee4c64af9e96f0c3","url":"docs/12.0.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"6c751792bca14313512d671ed5e850c1","url":"docs/12.0.0/modules/processing/user-guide/quit/index.html"},{"revision":"6930eb86dbe83540bfadc42eafa4121a","url":"docs/12.0.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"2aced5ae24e518187f4d31b8b4556d17","url":"docs/12.0.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"8d1822c6d1737bbaf93594440f9db397","url":"docs/12.0.0/modules/processing/user-guide/run-all/index.html"},{"revision":"30528e24f35c75982d8f275f728e7209","url":"docs/12.0.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"dcc37f0928eae568f6305801942974ac","url":"docs/12.0.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"0505f223f76a11dc3d0673516390fd0f","url":"docs/12.0.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"28dd86984ee24f652ca87c73f20369dc","url":"docs/12.0.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"7ffd9969e95525c9a933a6aea3ddad7f","url":"docs/12.0.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"11b9c80f13a2c9b5602bd9e73fd1b0f9","url":"docs/12.0.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"435dc1e2e6644336f6abded5df5a49ac","url":"docs/12.0.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"6c85b728a5e8467b2bc87575a1c6056d","url":"docs/12.0.0/modules/visualisation/getting-started/index.html"},{"revision":"7e9fe49120b9f68ee055fd8fc611a25e","url":"docs/12.0.0/modules/visualisation/index.html"},{"revision":"d9465914ec248f5193e648bd9d302e5c","url":"docs/12.0.0/modules/visualisation/user-guide/index.html"},{"revision":"9eb2b2e2432ea0f43443586a74846453","url":"docs/12.1.0/extras/audio-formats/index.html"},{"revision":"d5eed034e6c101fdcd19a9785a86f01a","url":"docs/12.1.0/extras/extract-config-from-storage/index.html"},{"revision":"aced1a9366b14b25cd765088973ad8a8","url":"docs/12.1.0/extras/file-detection/index.html"},{"revision":"8522976d4d621d7542df3cade1d5393c","url":"docs/12.1.0/extras/get-in-touch/index.html"},{"revision":"9fabf548c88e9700b22f1504608a482a","url":"docs/12.1.0/extras/index.html"},{"revision":"f4927be9bea871fa1adea630ed806276","url":"docs/12.1.0/extras/offline-access/index.html"},{"revision":"5b40fc95c404da99b605c9bf173569a6","url":"docs/12.1.0/extras/visualisation-online/index.html"},{"revision":"aaa6db8fa52a243655e61c9eb4c8526f","url":"docs/12.1.0/index.html"},{"revision":"1b5d57d4f6e806b5b01b1a959ebfffa1","url":"docs/12.1.0/installation/application/index.html"},{"revision":"16febed2f49ad63003dd17b673c83712","url":"docs/12.1.0/installation/index.html"},{"revision":"78115e6c68221815a5d3529d2a48a7f7","url":"docs/12.1.0/installation/requirements/index.html"},{"revision":"b9becbaa73b6d5c44bbb487824046ea4","url":"docs/12.1.0/installation/requirements/macos/index.html"},{"revision":"62e86f6a185b4ee07f75fd7116ebcfac","url":"docs/12.1.0/installation/requirements/ubuntu/index.html"},{"revision":"dc9f31a4515813748e76000cd0179f98","url":"docs/12.1.0/installation/requirements/windows/index.html"},{"revision":"f6158266e7f950f197d1591654642ac9","url":"docs/12.1.0/modules/campaign/getting-started/index.html"},{"revision":"1ca85a86f10d395a9d43f5bbd3e73e42","url":"docs/12.1.0/modules/campaign/index.html"},{"revision":"7ef9c8742d3852a8dd05bdcfd4b9b34d","url":"docs/12.1.0/modules/campaign/user-guide/index.html"},{"revision":"4a05d602e6870ca072be8d140b49b1e0","url":"docs/12.1.0/modules/index.html"},{"revision":"85373524ed73ee7113d5556966e24977","url":"docs/12.1.0/modules/processing/getting-started/index.html"},{"revision":"6d525e9903967928c1605c296ea3f70d","url":"docs/12.1.0/modules/processing/index.html"},{"revision":"0665e5085008464b63e8d1c06e3c935b","url":"docs/12.1.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"313cfc0d759cbf123e0d749fad38d8b7","url":"docs/12.1.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"4577a02065ba6d1f03e9bef577426f35","url":"docs/12.1.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"f293fe49592c90734a8668bbc23858b4","url":"docs/12.1.0/modules/processing/user-guide/index.html"},{"revision":"1b180c3cb99c0dd365cfe3d07ed12882","url":"docs/12.1.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"3ed182ed9531752567038556d92bedf9","url":"docs/12.1.0/modules/processing/user-guide/quit/index.html"},{"revision":"069f72edb682383ec6599b3c7628da4d","url":"docs/12.1.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"5a664094642b75c11f6d71cd27976e80","url":"docs/12.1.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"b6be077c55ca21b1e56d1d22f03b060f","url":"docs/12.1.0/modules/processing/user-guide/run-all/index.html"},{"revision":"af82b1d0bc7c14c802b961a206f77dc6","url":"docs/12.1.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"7242f763bb06f53ce19dd0b356d16f8e","url":"docs/12.1.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"e8c80ffc0d1839f29cb6583deb6a3bfc","url":"docs/12.1.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"b72f64ba33644786f32f9d1bba06fbe2","url":"docs/12.1.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"92447aaca07f5f1977951e0e55844ede","url":"docs/12.1.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"f6e2b12ab69e67a5b521f5223d8f1c5e","url":"docs/12.1.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"0a9cff6e656704336f75b9b41840eec3","url":"docs/12.1.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"1ea4ac14ade080a003979513b0204960","url":"docs/12.1.0/modules/visualisation/getting-started/index.html"},{"revision":"c7dc90092302afbc7a2f26ec384068ca","url":"docs/12.1.0/modules/visualisation/index.html"},{"revision":"b20f06c14605e1c107234729d99c3516","url":"docs/12.1.0/modules/visualisation/user-guide/index.html"},{"revision":"bc66fb680dcd911e4a9aca471c996983","url":"docs/12.2.0/extras/audio-formats/index.html"},{"revision":"75043b0863a302e1b865d8ff19b2be89","url":"docs/12.2.0/extras/extract-config-from-storage/index.html"},{"revision":"eba0bb4092d7f5cde75b42ebd37b3eed","url":"docs/12.2.0/extras/file-detection/index.html"},{"revision":"3de669499b06328d818b652e564daaf2","url":"docs/12.2.0/extras/get-in-touch/index.html"},{"revision":"b3377ecfe5bb538a19415f6f8a98fa73","url":"docs/12.2.0/extras/index.html"},{"revision":"b96d7b9e2bcd04e772e9e6ac994dc29c","url":"docs/12.2.0/extras/offline-access/index.html"},{"revision":"93e1761e666099ed3c2307559b68d70e","url":"docs/12.2.0/extras/visualisation-online/index.html"},{"revision":"622ed61b2845594c616df5eeb1281db4","url":"docs/12.2.0/index.html"},{"revision":"7beae1d806cb47fdb4b0459d8f703e4c","url":"docs/12.2.0/installation/application/index.html"},{"revision":"35583740a5025fe8e903006993164f77","url":"docs/12.2.0/installation/index.html"},{"revision":"44cfe8ebc87099252d7d2e3b2babac59","url":"docs/12.2.0/installation/requirements/index.html"},{"revision":"b98c29ed86905b108cb100f453ffa6f6","url":"docs/12.2.0/installation/requirements/macos/index.html"},{"revision":"40dccb9171bd88391321243f09f2db4a","url":"docs/12.2.0/installation/requirements/ubuntu/index.html"},{"revision":"f8a2e7ac4775fede38984be49684720b","url":"docs/12.2.0/installation/requirements/windows/index.html"},{"revision":"be3ef99d7f4406b60a40cfed65a876b3","url":"docs/12.2.0/modules/campaign/getting-started/index.html"},{"revision":"a6d829b4c557f0a303d55706f5107dac","url":"docs/12.2.0/modules/campaign/index.html"},{"revision":"de574f6f6a4ccb0bfa4fdf3c635f736c","url":"docs/12.2.0/modules/campaign/user-guide/index.html"},{"revision":"54ca9a1f9d6f003289e6669ea2b8c614","url":"docs/12.2.0/modules/index.html"},{"revision":"83dc157a2a1d0d3a3966a1180721392a","url":"docs/12.2.0/modules/processing/getting-started/index.html"},{"revision":"5d977748f35eb7a485cba33160d9aafa","url":"docs/12.2.0/modules/processing/index.html"},{"revision":"1815de8df718bdfa164712aa7d2bd89a","url":"docs/12.2.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"94e36a000a497166dfc14042ce55f678","url":"docs/12.2.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"f4f0d2ff4c7c987094252abd09397b55","url":"docs/12.2.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"ebb9c7cf81088dc96bafaacd3c98b89e","url":"docs/12.2.0/modules/processing/user-guide/index.html"},{"revision":"472aa9c42b6a8fdb4c6f2220b641404b","url":"docs/12.2.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"ccaca651c5fc0bf826f0e7358e0a2efd","url":"docs/12.2.0/modules/processing/user-guide/quit/index.html"},{"revision":"e9eea71271fb0db614a74badd1583728","url":"docs/12.2.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"cb1369bc47128d12bb2d9121502f69f4","url":"docs/12.2.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"2c39bc66c1dcd776b6c44b5a01f3d82c","url":"docs/12.2.0/modules/processing/user-guide/run-all/index.html"},{"revision":"5816c86fc21a00f6a9da90977ef2f9ef","url":"docs/12.2.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"ddd5c4b61034d66ae13de0d3396e4ca0","url":"docs/12.2.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"99e7e422fccc58666d5c0182723b817b","url":"docs/12.2.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"2a3dbea79e22405bbe16dc6c2ed594a8","url":"docs/12.2.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"ca221a69e74d3d32e2bd0bd8a6a01b36","url":"docs/12.2.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"8cb4e64b3e4540221e4d99c71442ca24","url":"docs/12.2.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"83932b8dfed1ee66a716ab46367d80ea","url":"docs/12.2.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"e5edcac723eb596d7596939fe8e3f792","url":"docs/12.2.0/modules/visualisation/getting-started/index.html"},{"revision":"d98f9c62a7c516a034093de0050f2934","url":"docs/12.2.0/modules/visualisation/index.html"},{"revision":"ba9a99bf8d569365247d14f9adffb1a7","url":"docs/12.2.0/modules/visualisation/user-guide/index.html"},{"revision":"8104d6eb9d5d6f58ba6e476b501e7426","url":"docs/CSE/extras/audio-formats/index.html"},{"revision":"53f21a1fe687d4507bacb4900adf1f74","url":"docs/CSE/extras/extract-config-from-storage/index.html"},{"revision":"e45eb3bc25fd5802a43587a15e46e2ee","url":"docs/CSE/extras/file-detection/index.html"},{"revision":"2ffe373f5d017103ddc7381004175adf","url":"docs/CSE/extras/get-in-touch/index.html"},{"revision":"c3c6fff3a4fbb649da930fbba0f606f5","url":"docs/CSE/extras/index.html"},{"revision":"3dc6b1c0895682d74faed612caacc757","url":"docs/CSE/extras/offline-access/index.html"},{"revision":"60cf7a3c84cefb22863219d37fe86e7a","url":"docs/CSE/extras/repack-storage/index.html"},{"revision":"3bb504e4797d5ae5cc101d21876e4f1a","url":"docs/CSE/extras/visualisation-online/index.html"},{"revision":"f9f843d85d150a9318a5e9de29956652","url":"docs/CSE/index.html"},{"revision":"274cdd56bbbae40d1f2bb4abf41e1718","url":"docs/CSE/installation/application/index.html"},{"revision":"b70c2a73cae2733d10da26f92b6281fc","url":"docs/CSE/installation/index.html"},{"revision":"832d7c5b8a370e4fb8cb38ed1f3a4ba3","url":"docs/CSE/installation/requirements/index.html"},{"revision":"a6bab6a5d68f6af697f7ca33930fca39","url":"docs/CSE/installation/requirements/macos/index.html"},{"revision":"8a68ee7762048f2aed2c2659f604fa09","url":"docs/CSE/installation/requirements/ubuntu/index.html"},{"revision":"c32aaa3f253cef755bdada67ed8ce3e5","url":"docs/CSE/installation/requirements/windows/index.html"},{"revision":"96288fad73c59bbfe1075863a2324224","url":"docs/CSE/modules/campaign/getting-started/index.html"},{"revision":"ebc42c164a38ecb6edc88f456538985f","url":"docs/CSE/modules/campaign/index.html"},{"revision":"474d1c12cf73ea4bfa8e0f4cfe4f4d34","url":"docs/CSE/modules/campaign/user-guide/index.html"},{"revision":"4a84fd609fc5c139b340512765000007","url":"docs/CSE/modules/index.html"},{"revision":"b3ba99f3b2097695c8b0da233ef80522","url":"docs/CSE/modules/processing/getting-started/index.html"},{"revision":"9df2f1567fec1f159e9e1773ec360535","url":"docs/CSE/modules/processing/index.html"},{"revision":"7e5755da6ccd82ca7882fcc9ff4b930d","url":"docs/CSE/modules/processing/user-guide/export-computations/index.html"},{"revision":"f5ceaf53f496e204274aaa7a381968ef","url":"docs/CSE/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"aa3f342c2d023144b44d9958002cfe88","url":"docs/CSE/modules/processing/user-guide/export-mdm/index.html"},{"revision":"5db6023209f7f7ad78035ae5a2bca702","url":"docs/CSE/modules/processing/user-guide/index.html"},{"revision":"99cc64aaabfb7ea8972dab9e48f97303","url":"docs/CSE/modules/processing/user-guide/purge-computations/index.html"},{"revision":"f8e11a0b509f3ec23918d87a0f9662df","url":"docs/CSE/modules/processing/user-guide/quit/index.html"},{"revision":"d2f32060494cb9555b98881ce9c084ae","url":"docs/CSE/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"05506cf784da184c648b2acc5a46bf01","url":"docs/CSE/modules/processing/user-guide/run-all/index.html"},{"revision":"2be966e11dd770cdec24b95caf4ec5b1","url":"docs/CSE/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"a360504a4cd6ac28f0111ef6bd49132b","url":"docs/CSE/modules/processing/user-guide/run-computations/index.html"},{"revision":"91f6e76065b0d6aa53157f2b9783a089","url":"docs/CSE/modules/processing/user-guide/run-digests/index.html"},{"revision":"17fbe67595073a8b65566892f47aa848","url":"docs/CSE/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"6866928a5e4ed5b1b59cbdd1f1c27567","url":"docs/CSE/modules/processing/user-guide/run-reductions/index.html"},{"revision":"b769512919d18c73d964a666449b64e4","url":"docs/CSE/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"ab5bee73ee94a7d520289357d75b8299","url":"docs/CSE/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"93d77845879a65dc2d5341b5f8f8617e","url":"docs/CSE/modules/visualisation/getting-started/index.html"},{"revision":"bc8533d0ccccdf7fb145e102967bcd10","url":"docs/CSE/modules/visualisation/index.html"},{"revision":"62634945ac6ea8af4bd7ac13d2ac0d23","url":"docs/CSE/modules/visualisation/user-guide/index.html"},{"revision":"21aaaf77c5670e2bdd7eb337a2a3791f","url":"docs/extras/audio-formats/index.html"},{"revision":"8621ea89afcf00fccea3431a6ba29354","url":"docs/extras/extract-config-from-storage/index.html"},{"revision":"da41ec805ef03c37d54336779725c8b8","url":"docs/extras/file-detection/index.html"},{"revision":"0def4250aa97645b0f162d4405aa2c88","url":"docs/extras/get-in-touch/index.html"},{"revision":"06c0b07f76f621a7db5416afead633c9","url":"docs/extras/index.html"},{"revision":"7bc3b329840f5c095067e9403c3da564","url":"docs/extras/offline-access/index.html"},{"revision":"1a6573ccedcdb83f530b89f11a70d7e3","url":"docs/extras/repack-storage/index.html"},{"revision":"24af57a01479fec23742c298ebe3a856","url":"docs/extras/visualisation-online/index.html"},{"revision":"49ff26a085b70017549cd28c98c6f910","url":"docs/index.html"},{"revision":"d12cc6fa0409f006df85b9e73c494f9f","url":"docs/installation/application/index.html"},{"revision":"612ebab2ff38826020f20461cedf95c3","url":"docs/installation/index.html"},{"revision":"433e3a4b8ca72f4a6a4c405879b11d0f","url":"docs/installation/requirements/index.html"},{"revision":"4d0da047021baeb87bed4b804c0f69a4","url":"docs/installation/requirements/macos/index.html"},{"revision":"6aaa083514e6917af9afa0ecdbb13d2b","url":"docs/installation/requirements/ubuntu/index.html"},{"revision":"1d371ee5cf32ad33bc6e333d7ee8a8b4","url":"docs/installation/requirements/windows/index.html"},{"revision":"4f2b531f8483c7f178220d1d2cacfea9","url":"docs/modules/campaign/getting-started/index.html"},{"revision":"7abb9ed61b4d86dee1f97806b3ebdc1c","url":"docs/modules/campaign/index.html"},{"revision":"7afc2d38d72c492b382822f4e3d2f231","url":"docs/modules/campaign/user-guide/index.html"},{"revision":"193f2af4754697ebc35d17fa6879bda6","url":"docs/modules/index.html"},{"revision":"d160188f925975cb5529ca4aa151c9cf","url":"docs/modules/processing/getting-started/index.html"},{"revision":"ab62c4b999f52a534966778ca0f63258","url":"docs/modules/processing/index.html"},{"revision":"c3b59d0528cbbb6fd0b4fef5e6c656c5","url":"docs/modules/processing/user-guide/export-computations/index.html"},{"revision":"8b37448224aafe975d8aefacb2d71470","url":"docs/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"2480f8e476b19a075854ada4e387ab13","url":"docs/modules/processing/user-guide/export-mdm/index.html"},{"revision":"10a901a97840386dff217299ebe829b0","url":"docs/modules/processing/user-guide/index.html"},{"revision":"3fa85f5bf7dddf041f4e66f75e5c2b7d","url":"docs/modules/processing/user-guide/purge-computations/index.html"},{"revision":"fbd06cca543df55e509211af8e7deb2a","url":"docs/modules/processing/user-guide/quit/index.html"},{"revision":"ef7f6993078208abcf54e84aa49bd214","url":"docs/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"12f24134e343474c41e77f643a805e5d","url":"docs/modules/processing/user-guide/run-all/index.html"},{"revision":"9da1d5fc9244f436462ef7f24e6a4ef2","url":"docs/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"d6dca4028e6235fc71850a661aa16740","url":"docs/modules/processing/user-guide/run-computations/index.html"},{"revision":"30bc76601f8a9816460e9c0823b7e26d","url":"docs/modules/processing/user-guide/run-digests/index.html"},{"revision":"075d869ed39b739bee4525eb504eca0e","url":"docs/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"85452406a32f77a6b48cd96c848f8470","url":"docs/modules/processing/user-guide/run-reductions/index.html"},{"revision":"7223010b67c62d5bcf0dbd96df156a27","url":"docs/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"b5d0c39049a9c588711fb5c0ea2797c3","url":"docs/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"762790b1a1eb1a3656909fb48437acec","url":"docs/modules/visualisation/getting-started/index.html"},{"revision":"842fd38ae2289949f73ea4c4970c7fe9","url":"docs/modules/visualisation/index.html"},{"revision":"8b997cb02e96ce9700d729aa337b66fb","url":"docs/modules/visualisation/user-guide/index.html"},{"revision":"f7d2813fed0b4e81f42df777a3e0e2bd","url":"docs/next/extras/audio-formats/index.html"},{"revision":"7ee738ea7830bc71151c02136ec8671d","url":"docs/next/extras/extract-config-from-storage/index.html"},{"revision":"df451a5409ca3e3b05e9a9dc3d70861c","url":"docs/next/extras/file-detection/index.html"},{"revision":"6c01c6305930a2b4093d306ba16a07e9","url":"docs/next/extras/get-in-touch/index.html"},{"revision":"99a246c90e4b758e7ca105751c003f9f","url":"docs/next/extras/index.html"},{"revision":"2de44a2d4f69dfafe68b7e645e9b1424","url":"docs/next/extras/offline-access/index.html"},{"revision":"bfacb25421fd60f2205688ec97cb58f4","url":"docs/next/extras/repack-storage/index.html"},{"revision":"77a752706537fc5f32a9252d97efb665","url":"docs/next/extras/visualisation-online/index.html"},{"revision":"90d5073af9135de4f56d1671b2a47c53","url":"docs/next/index.html"},{"revision":"0366fd95fdcf2ece1e91799fa10ae17e","url":"docs/next/installation/application/index.html"},{"revision":"690e2e39feddadeb649ee6c64bac95f9","url":"docs/next/installation/index.html"},{"revision":"71233a1860c670100e5356a7711ab182","url":"docs/next/installation/requirements/index.html"},{"revision":"a6a28cb34edbd0fab651955c8276f483","url":"docs/next/installation/requirements/macos/index.html"},{"revision":"cd92d8da6f2386e8ff5e061bf4ca5a92","url":"docs/next/installation/requirements/ubuntu/index.html"},{"revision":"ad486e5c7049dc0a6678d38e8c7d58a0","url":"docs/next/installation/requirements/windows/index.html"},{"revision":"43e926e83edb63fb3869dbd6a6eca79c","url":"docs/next/modules/campaign/getting-started/index.html"},{"revision":"e3af8b91bfc8815e2549e0097b383e2f","url":"docs/next/modules/campaign/index.html"},{"revision":"d18dc1024aaa8854c4e993d9ac61102f","url":"docs/next/modules/campaign/user-guide/index.html"},{"revision":"f39b03a41f80721b04245d0cc2d621b2","url":"docs/next/modules/index.html"},{"revision":"6462e3d83e78b6ff8d264584c82c5afe","url":"docs/next/modules/processing/getting-started/index.html"},{"revision":"0ec0c4e544f81e898fa491832dddee7d","url":"docs/next/modules/processing/index.html"},{"revision":"98a85ce9853d9505313753bd359e184c","url":"docs/next/modules/processing/user-guide/export-computations/index.html"},{"revision":"47b8f5ef6dd65fb799ac9a3b2351f173","url":"docs/next/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"68b9a5352f1f468847525d24e49013af","url":"docs/next/modules/processing/user-guide/export-mdm/index.html"},{"revision":"faadfc2a945b54c38ca0915cfc2955d2","url":"docs/next/modules/processing/user-guide/index.html"},{"revision":"c5587fe37fa40d4f529073683d799657","url":"docs/next/modules/processing/user-guide/purge-computations/index.html"},{"revision":"d2e47ade07022c2e026bc86ef5bd6ca9","url":"docs/next/modules/processing/user-guide/quit/index.html"},{"revision":"21cc30a7871d5125a89996e9c4f84883","url":"docs/next/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"f4c68e9f88622ceb6d7e64553d9a2d31","url":"docs/next/modules/processing/user-guide/run-all/index.html"},{"revision":"29ec9f68bfd89851edce609a9be2b5cd","url":"docs/next/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"183acd489a93977c8a1cd619624e09d7","url":"docs/next/modules/processing/user-guide/run-computations/index.html"},{"revision":"88adfbe271c1ab9b6f4e336f6128b87e","url":"docs/next/modules/processing/user-guide/run-digests/index.html"},{"revision":"41e8950f6359d4d61981aa45313b6612","url":"docs/next/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"6c67f138cd5a479c35b2beca9cca2142","url":"docs/next/modules/processing/user-guide/run-reductions/index.html"},{"revision":"ed49cecf24b6c8f35684135d80399a3b","url":"docs/next/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"78f88a448f3ec80dceb9ffbcf3144ecd","url":"docs/next/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"d875843c05f341a35ced43cd65c7f91f","url":"docs/next/modules/visualisation/getting-started/index.html"},{"revision":"e2f1cec976a0ed7722df65f4ca349a04","url":"docs/next/modules/visualisation/index.html"},{"revision":"9205236278f3b19b660e81a683bb0439","url":"docs/next/modules/visualisation/user-guide/index.html"},{"revision":"0415d95dcb63f062cb3cfd4d36b2763a","url":"index.html"},{"revision":"92e8fedb8c50fe7462624f1937c6135a","url":"manifest.json"},{"revision":"20c4c56d87d73c5fb63d1900ac7bc88b","url":"assets/images/architecture-81e9840c02b65390032520a2ab57d9e5.svg"},{"revision":"65fd4166d50c3a7bbba520ce99f00356","url":"assets/images/data-inheritance-08824a4da6e173f96b7ac9ff945db24d.svg"},{"revision":"c3c3df64325700f73297731bb837e92b","url":"assets/images/demo-1bfde2ef29c21f9a1398a5bc99292b08.png"},{"revision":"0653b0270f80e7ac6c6fc60b2a438218","url":"assets/images/flow-2fcaabf70941e5a8b298646aa61385b7.svg"},{"revision":"20c4c56d87d73c5fb63d1900ac7bc88b","url":"img/architecture.svg"},{"revision":"694ee26af5d5854e4f83c10b067f6513","url":"img/cse/architecture.png"},{"revision":"9d25c99b1359eee6cfe756cd27eee44d","url":"img/cse/authors/bamdad-sabbagh.jpeg"},{"revision":"0dd4885332becf1c41e64af5e4da70c8","url":"img/cse/authors/frederic-sebe.png"},{"revision":"808a122ea74801529602187a594899f7","url":"img/cse/authors/jeremy-rouch.jpeg"},{"revision":"45060b9909e36267813724b2a2fe6a74","url":"img/cse/authors/lana-minier.jpeg"},{"revision":"230c39fc4f290ab2a73b0d7c5ef36007","url":"img/cse/authors/nicolas-mathevon.jpeg"},{"revision":"8ca7648571bd17394b5844debb2d984c","url":"img/cse/authors/remi-emonet.jpg"},{"revision":"f682f43c6f308d1e9b2ebc16ad256e79","url":"img/cse/logo.svg"},{"revision":"dadaa564f112256a11c9ace09744b1a6","url":"img/cse/sponsors/ecole-pratique-hautes-etudes.png"},{"revision":"f0986d5454be047f2656c2eee5ea21e1","url":"img/cse/sponsors/enes-lab.jpg"},{"revision":"def71edfa122a2e154b82fe2ace99d43","url":"img/cse/sponsors/institut-universitaire-france.png"},{"revision":"e5afdfa93f5e4f0c492bc835864a224c","url":"img/cse/sponsors/labex-celya.svg"},{"revision":"b3a78823d6e4ab9a30434f7e2331c7d0","url":"img/cse/sponsors/laboratoire-hubert-curien.svg"},{"revision":"8d56a641d01b811901abba236d3801bd","url":"img/cse/sponsors/office-francais-biodiversite.png"},{"revision":"09c9fa1b1f643fdf099349f4d8fec5ba","url":"img/cse/sponsors/saint-etienne-metropole.png"},{"revision":"21133949e146287a19317688a1429898","url":"img/cse/sponsors/universite-jean-monnet.png"},{"revision":"65fd4166d50c3a7bbba520ce99f00356","url":"img/data-inheritance.svg"},{"revision":"c3c3df64325700f73297731bb837e92b","url":"img/demo.png"},{"revision":"0653b0270f80e7ac6c6fc60b2a438218","url":"img/flow.svg"},{"revision":"f759aa942ae741fe028abac0c7720511","url":"img/logo-cse.svg"},{"revision":"68d0534f0d92d8d5ee0f93a293c33852","url":"img/logo.ico"},{"revision":"a483aecd1259b3d5b6f8b4640e9133a8","url":"img/logo.png"},{"revision":"37df8de86cf574a428b5d5ef3037cf1e","url":"img/logo.svg"},{"revision":"f2090d740ed96c902c75c41de916b8b0","url":"img/undraw_data_processing_yrrv.svg"},{"revision":"397308d374f0c238969a378bc9785b3a","url":"img/undraw_spreadsheets_re_alt0.svg"},{"revision":"e18535880f2cf03118dadc17d1da1fe1","url":"img/undraw_winter_designer_a-2-m7.svg"},{"revision":"0062bf1cab808369fb574e2da7e02c0a","url":"assets/fonts/jetbrains-mono-latin-400-normal-2fe080a3bf49bdc12fcb3e1838e1f50c.woff2"},{"revision":"354aceff703fbf0797d247cb31e1d807","url":"assets/fonts/jetbrains-mono-latin-400-normal-c226d7283d0d52c2d32c67abdde1f10e.woff"},{"revision":"717f9057150fafd32e39661dc7cd7425","url":"assets/fonts/merriweather-cyrillic-400-normal-2e7c71643f6e0e4c1e73f28a7a1798e6.woff"},{"revision":"cf40598b1eb2a76672c2e704901b59d6","url":"assets/fonts/merriweather-cyrillic-400-normal-fde0b55efc50742fb57fbebbb11c572f.woff2"},{"revision":"63319b42833639824ca3d45c1f343d3b","url":"assets/fonts/merriweather-cyrillic-ext-400-normal-2a880e22b1b888ab54652a36d43b7f16.woff2"},{"revision":"a4ae5cb9dbe02cc6f94841df0729514e","url":"assets/fonts/merriweather-cyrillic-ext-400-normal-7d8546944154663cc54693d15bb31721.woff"},{"revision":"9141c3f9a696074f62f98d090cb94678","url":"assets/fonts/merriweather-latin-400-normal-2c455928024d0ee049d896a25f9e30e1.woff"},{"revision":"2bfde17b9a1384ce64af78db1b87a82f","url":"assets/fonts/merriweather-latin-400-normal-e009f21405b4d7e893674b69deb4cf4a.woff2"},{"revision":"73d7be7e72e71728515248dda266c095","url":"assets/fonts/merriweather-latin-ext-400-normal-4657f5ab02d5923d223f96a9155a9bdc.woff2"},{"revision":"1fae11a03d2f4709959da7b13cbd1abc","url":"assets/fonts/merriweather-latin-ext-400-normal-7b1ee735b2541bc831bd57bacecc9d41.woff"}];
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