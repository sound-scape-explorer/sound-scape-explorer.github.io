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
    const precacheManifest = [{"revision":"56e10103d4af392f820d70b02c1cfbf9","url":"404.html"},{"revision":"580b59cfd38cada4e5bdf0b2889363fe","url":"assets/css/styles.4a6ab280.css"},{"revision":"a6fdc10f8b8564973af7dba7cbeed506","url":"assets/js/0014f2e3.44630a1e.js"},{"revision":"2e60fa7fc59dde92e2b7718b0b39e13e","url":"assets/js/0035e275.ce2ee2e4.js"},{"revision":"7d5dcad4283e6bd8ce38096a9fd4ba07","url":"assets/js/0042287f.7a2a9711.js"},{"revision":"f50d29b4ce587f9adc8322c027a4baa4","url":"assets/js/0055ae99.9b470217.js"},{"revision":"8a446fd876dec8058747c35ee1e2957b","url":"assets/js/00fb4336.3e6f09ba.js"},{"revision":"0a3f778c70d86ee113f964cc66292327","url":"assets/js/00ffc4be.d627d5e0.js"},{"revision":"cc51d2f797820103f72ddb57f0bea2b4","url":"assets/js/05d10116.28b1b60e.js"},{"revision":"13ae844701270e1a21594608e830f7d9","url":"assets/js/05d10be6.9e088f26.js"},{"revision":"e2425ceafadad87ad3dfe26c23b56906","url":"assets/js/06d86785.b8a9241d.js"},{"revision":"ff757b9dcdab7ee75b832cd3619da2f3","url":"assets/js/07ac9507.e2664b5c.js"},{"revision":"8d87094c25c9af8dc4ea31710ff27ce1","url":"assets/js/08e8f103.6befb031.js"},{"revision":"17fff05764a53bef56a2cd38851434de","url":"assets/js/0a863ded.ac3293dd.js"},{"revision":"7541e9475baff8a11a7dea548e5f7ecb","url":"assets/js/0b4d5ba7.a7260b08.js"},{"revision":"1c2e49f449bbaa65e54927c46766df82","url":"assets/js/0bab7aa4.32a80aca.js"},{"revision":"786518d4afb75343c0742ee4038aec0f","url":"assets/js/0c1a9b43.9a170103.js"},{"revision":"eb55add2ce48edbf07092dd6cc89089b","url":"assets/js/0d5abc34.4810afe4.js"},{"revision":"586d9b099f4699a85500b9c09414a61d","url":"assets/js/0dfa3724.c843115e.js"},{"revision":"d75bb0384a142ae4b38283b40c7dee1f","url":"assets/js/0dfb7804.417d2f6e.js"},{"revision":"1a1897dab70ac2ff2914331ee57d734c","url":"assets/js/0e675381.d6c563db.js"},{"revision":"41c1d9b3dc43525586936eb251899ea9","url":"assets/js/0ec2a0b0.0e8644c0.js"},{"revision":"d8aaba667d2fd6ebd237cd8f3083f645","url":"assets/js/0fb07bd5.a4511c63.js"},{"revision":"99b1fd4361d6e52651ce6306f262572f","url":"assets/js/1011.6dce4288.js"},{"revision":"625366815122554d6b2750689dd3218a","url":"assets/js/12570b78.6b890511.js"},{"revision":"e07c1ba287c5f814f0babb5c553bf3ee","url":"assets/js/12c97a1c.d7b95301.js"},{"revision":"25dd7f71d3ae306c1cae2d0a2ff5b0a8","url":"assets/js/13bbecf7.db61af45.js"},{"revision":"691e3802487417dcb7ae723b3f58dea3","url":"assets/js/13ec1e59.777416a8.js"},{"revision":"9b7566234974972152bc0e3f20ea811c","url":"assets/js/14eb3368.b5c3ce82.js"},{"revision":"337bffebbcc97246060daf667de35dd4","url":"assets/js/1549.c958d515.js"},{"revision":"6d0d4d3373985834e4e6bd27ff2aad29","url":"assets/js/1584a71e.df3cc214.js"},{"revision":"75746627e01dfe25810beed9652754ec","url":"assets/js/160513e6.656cfc57.js"},{"revision":"71e7d408215518481cc7147f8036cafa","url":"assets/js/1675e895.1642f307.js"},{"revision":"93140b91ed6812a2afeda4c192f4d875","url":"assets/js/17896441.3ad88f33.js"},{"revision":"dcab1c4421ecae5d785e9f5d5688986a","url":"assets/js/196ca7f2.1c61eb0c.js"},{"revision":"119ab6a20065a14bf596c24a4606c179","url":"assets/js/1a591ed8.c4659ed0.js"},{"revision":"70f0e891b2d68e317b108eb18f2265ff","url":"assets/js/1bd3ddb7.82157e11.js"},{"revision":"eae497dddcbc7b166b713a97158a2ef8","url":"assets/js/1bda19f4.af734176.js"},{"revision":"e8ac7111519dd6449dd49a04c1d6a1ad","url":"assets/js/1c5fcc5b.ff91c13f.js"},{"revision":"450d188d78ef5511af780109c54da6f0","url":"assets/js/1cafaec8.f5ce8378.js"},{"revision":"11d79dee2a2bb3de589fcd302292033b","url":"assets/js/1d67b61b.0290e0dd.js"},{"revision":"6c822a5167cddbac0754f9c8304dba4d","url":"assets/js/1df93b7f.3f66f869.js"},{"revision":"329f8408c86755e9bb438ac348ae03dd","url":"assets/js/1ecebb43.ed5d0a92.js"},{"revision":"b397b3a204e55b24a9ce7da874765d30","url":"assets/js/1ef3786a.499896ec.js"},{"revision":"dbba3fd6c3cd76f6569821ffe137384c","url":"assets/js/1f391b9e.1a106f8c.js"},{"revision":"3f91b56f65460fdf383de733183c3d20","url":"assets/js/21518505.495e426e.js"},{"revision":"bc23dc7ad5ceed6212d846caa3b4ce54","url":"assets/js/21cf50b3.1f61503a.js"},{"revision":"08b3bc23f03da91f8b912259dfed3b1d","url":"assets/js/24f838f6.97c17cc8.js"},{"revision":"c56f9bdf624db4abef766568ee54d03a","url":"assets/js/25ea0b6e.5280657d.js"},{"revision":"10f0d434ebb04c2d95fb9cf14f657456","url":"assets/js/26b500ba.7022a866.js"},{"revision":"c74ab8a1cd14decc6c1ad2070a588cfa","url":"assets/js/26e692e3.bcb5ee4a.js"},{"revision":"7be2865254cd43e505b4e71241249ea2","url":"assets/js/272.b1c7de25.js"},{"revision":"06e818540aec0c4834b4e535bf9c7155","url":"assets/js/2797603f.f5126d8a.js"},{"revision":"515f7186902430d8da8c9710dd75bf11","url":"assets/js/28d0a442.71559638.js"},{"revision":"8ecdacc7de7f6855e79a4936c8923596","url":"assets/js/298.e994d959.js"},{"revision":"1332802699be1ff2381366a55830c5cd","url":"assets/js/2981a785.54e5bc67.js"},{"revision":"cb342564d1b3a1da3570154763d3bc5e","url":"assets/js/299fd2d4.0ce47c36.js"},{"revision":"1d5a4fe0661ab37d90f1f10efdaefb33","url":"assets/js/2a5f10a0.ee86a102.js"},{"revision":"76dc74775569467cbc247dd065ed4e2d","url":"assets/js/2aa24227.cc013cb4.js"},{"revision":"b98d67b28a66462c0486751323e41e20","url":"assets/js/2abe3314.c8d592ee.js"},{"revision":"dcef6d83c25b401226eddd01f8985583","url":"assets/js/2bfd5bf2.a5cace16.js"},{"revision":"6b7af79a894fd3581dad59571a245671","url":"assets/js/2c0913dd.537f81b1.js"},{"revision":"9716ce0f23832a46eb87a5dc5f0262f7","url":"assets/js/2c2817b8.521d8fc9.js"},{"revision":"d52b80e0e121bcfa48b9ac197cdae849","url":"assets/js/2c2f03e3.1a3e3d39.js"},{"revision":"2ba148d660c13334d306929a6f6b082d","url":"assets/js/2ead8e40.a6747d4a.js"},{"revision":"e3f735266a218fa56360ea2752a2d537","url":"assets/js/3099fbd1.b281da4d.js"},{"revision":"79d38afd05007c54b7eadfe1358e42a2","url":"assets/js/31885b5e.b7f1872d.js"},{"revision":"730ec4371013803c685c85c07e7c72ab","url":"assets/js/335f5346.dff6363b.js"},{"revision":"ca6b5ac95be477f1c3072b4bb9250c59","url":"assets/js/34e9cad0.1ad7ec0b.js"},{"revision":"2397930d0a480aa1d6785e0f6b0b05be","url":"assets/js/353d7f1f.59d8d72f.js"},{"revision":"92af936a8182e1ac9ecb80dbd5f51096","url":"assets/js/3617eece.99d71632.js"},{"revision":"c815a812cc776ef833a4c3c5695419b6","url":"assets/js/3685eac7.9bdfaa51.js"},{"revision":"ac53f49a9c1b7ae6e22a0550b2e49ec6","url":"assets/js/368b2af3.2d16ada0.js"},{"revision":"a4ce0cb3c66f0d5647bd21ad13e960bf","url":"assets/js/3831.37e0c7c6.js"},{"revision":"4eab5af7384aa777d23846b6739e1c5d","url":"assets/js/38d436cc.a956b0e6.js"},{"revision":"2c41c424f0502705d55ceec341499d48","url":"assets/js/3a9fc4f0.1a1179f9.js"},{"revision":"e6950aed47a01074e0bdcbf694c7c980","url":"assets/js/3aa1d8cf.7eac8277.js"},{"revision":"e4a570f19e9deecf8a0e2f46941117fa","url":"assets/js/3c16a28c.a2a6850d.js"},{"revision":"523b79780773fa2e32aa33a007c7fb51","url":"assets/js/3c655c76.a4316bf3.js"},{"revision":"0f37f9ae4a0cab1b0563fd8ca3f65844","url":"assets/js/3eb8918e.7d8a80ba.js"},{"revision":"5ed916a5f0fcab667d9b08fd51462440","url":"assets/js/3efc06cb.843eb637.js"},{"revision":"cc29b45fcd323d428a35ad1bb4b76f91","url":"assets/js/3f3e63fb.d3cf325d.js"},{"revision":"b182e1eefed3a025f6e5ff3ef68ca9e8","url":"assets/js/3f835183.5b1b1fe0.js"},{"revision":"86aca3644fc50f3d68aedd9138e1c4a3","url":"assets/js/401f1e8f.b8439bee.js"},{"revision":"f1cfdc065bba3623514ec93565d92d01","url":"assets/js/417dc7cb.c7808b85.js"},{"revision":"6d0224806349c66d729a91d6f02443f9","url":"assets/js/418ad307.a33f4068.js"},{"revision":"c7179861c000d11721f8620b48ae5e64","url":"assets/js/41d4d076.a3bd6e14.js"},{"revision":"9c5383b568f181f1f7bade02973c0ea9","url":"assets/js/421ae91c.1963ce17.js"},{"revision":"1486b21bede0675d54207245d8321dc4","url":"assets/js/4290a99b.cc2e4b39.js"},{"revision":"ee604e4d8f8c175de2f578ba903fe095","url":"assets/js/430cb1dc.0f6f255b.js"},{"revision":"14bda7f2d334ec54d283c11e2d2d61a1","url":"assets/js/43fcff82.cec7d445.js"},{"revision":"d3d4dd9a1a10b524cb9e603cab05e4f0","url":"assets/js/444d4fb9.d53314c4.js"},{"revision":"f6d9660853dbbdf0791fcd4cc4957359","url":"assets/js/4455a696.4f2f81f8.js"},{"revision":"80d8f77ed761f9d906dfa0e5df11eb47","url":"assets/js/45ca1306.cf859124.js"},{"revision":"ef0a0f8a74b5c12a1e753839186df242","url":"assets/js/4725.a3388345.js"},{"revision":"f9b8622058afbef483b75f64d369b1ac","url":"assets/js/47db058b.596c693b.js"},{"revision":"d9406abc2980ac72d502af35744dd409","url":"assets/js/4800.66cbb97c.js"},{"revision":"042911f1f33ce45b4d59ac27839342a3","url":"assets/js/486efa96.73e1a3da.js"},{"revision":"46120224ff87341c867a93212824b4f3","url":"assets/js/4882.327621f1.js"},{"revision":"c0fa67f5dd4d67ebef4ed997fe9d8d39","url":"assets/js/4899.49640c31.js"},{"revision":"f01df813a708b8822e95ebf7fbf2a0d5","url":"assets/js/48a7df61.eb543437.js"},{"revision":"0d96ce9235bd3f00cbd0fe0945adfc29","url":"assets/js/48ff9475.11c1e846.js"},{"revision":"715e884bc50d9d2ef3bdfbcdc5530bbd","url":"assets/js/49847bb5.df2fac6e.js"},{"revision":"48778787d2d0d69a76be28c7443d749c","url":"assets/js/499dbc29.faa79625.js"},{"revision":"3e16ec85c9eb523f4a94d766b86db643","url":"assets/js/49a680fa.d41c7b97.js"},{"revision":"3c5aacc80e74cbbc6d5f88c388f7efce","url":"assets/js/4b1bc88e.52dd1998.js"},{"revision":"0b79bfcff6da0189ecdfb73830de2be9","url":"assets/js/4dd2532d.5b65af73.js"},{"revision":"195102e4ea4c9d07496c429f8bfa637b","url":"assets/js/4dd87e68.505d2818.js"},{"revision":"0aa949369c59d3a8ff351b641bef97f7","url":"assets/js/4e122f11.7f56de4c.js"},{"revision":"220256e86abdd37f11fb99221c845a56","url":"assets/js/4e7898af.0525ee92.js"},{"revision":"fda764f6933287c469582c5f4ac399ed","url":"assets/js/4ec2ca4e.895d7255.js"},{"revision":"ff626a5e9a10b40aa418b9228fa49e68","url":"assets/js/4edc808e.09a8813c.js"},{"revision":"eb30f73af80d25b78c47cd63b2b03550","url":"assets/js/4ee1adc2.3942ff47.js"},{"revision":"afd48db3a380c4e5b5973fa8e93b042f","url":"assets/js/4ef6f358.0b163fc2.js"},{"revision":"620d182bde1aa5f049754979a93f36e3","url":"assets/js/4f4befa1.bdccbef1.js"},{"revision":"a4fd3a67a6bf9af2eec8fca5a9e42fa6","url":"assets/js/51a1dc1a.3cb32e99.js"},{"revision":"c325bf4dd31478bfc080a3cd12b546ec","url":"assets/js/525a390a.2f66b8b8.js"},{"revision":"69fec067d8607544607c2cb335a61726","url":"assets/js/531.08d30cd2.js"},{"revision":"8044d6f0850520086667355c5c5c33d2","url":"assets/js/5412b5d2.5ed774ff.js"},{"revision":"ca13519cc37bf77131813d2180199aab","url":"assets/js/54d7e390.3bf17efc.js"},{"revision":"3c644d237a20bef941a3c74b9fbfbefa","url":"assets/js/5531.45f331a8.js"},{"revision":"ab14074dae09eec246e3e985c03bf7d3","url":"assets/js/55667eca.31a4a7a4.js"},{"revision":"03525bea1723827d54bd2994579c3a24","url":"assets/js/5667.e6f5c800.js"},{"revision":"73ab87afb572a6852fbbc6c8c7a9a17a","url":"assets/js/56833e7f.c2e78330.js"},{"revision":"3474df812825eac56ada99e2159e81f2","url":"assets/js/56a7c978.72627a1e.js"},{"revision":"db3291b306395ce1b0b6aedd92846639","url":"assets/js/574dbab1.cbab31ff.js"},{"revision":"e423c09cdd81cbe7df6bdd86f0419a83","url":"assets/js/57e1e6c5.10c80bd1.js"},{"revision":"9a59ea4fa71d056b08218b88ac8aac5e","url":"assets/js/583ba798.965a72a1.js"},{"revision":"2bee23f8165997a1fdf2e2199f890449","url":"assets/js/585ae644.bf7ebbb9.js"},{"revision":"42dafa4a389ab69a8f55956dfdd60ac7","url":"assets/js/5901cc52.23103b12.js"},{"revision":"f54705f0536f706baa214d2c717220e9","url":"assets/js/593ca3da.13c5b697.js"},{"revision":"5cbf3ce432708c383d21607665aa7a04","url":"assets/js/5c5ed4b0.aeb433dc.js"},{"revision":"a7ebfbffbb400ec1247bdca58fa947b5","url":"assets/js/5c926596.82d23d7f.js"},{"revision":"517386947ea6891ef5204487c94de441","url":"assets/js/5d0ce896.88c81152.js"},{"revision":"ec26d672eac229a6945f0247e29a048a","url":"assets/js/5d44278d.46240905.js"},{"revision":"8e4568fefab3ff957f494278188eed50","url":"assets/js/5d901f6c.0e4beb5b.js"},{"revision":"22303b84790f08a7be7a747c33e63022","url":"assets/js/5e812b6d.561d4643.js"},{"revision":"2cf87a562933b4fcdb385d38d3bce8fd","url":"assets/js/5e95c892.5bc5d80c.js"},{"revision":"3b177731077379e669dac5ebea38b4a4","url":"assets/js/5eb2f6ae.1d3ac61c.js"},{"revision":"5e9e59cc611cf8e41c13b8ef17c7206e","url":"assets/js/5fbcf17e.027b7f1b.js"},{"revision":"e0ceb7dea152220be15970a21c061599","url":"assets/js/5fc3e4dd.550ae463.js"},{"revision":"70a28d2c948e05110ad5e4cd7d235536","url":"assets/js/60535e1c.4eddf4a7.js"},{"revision":"c503120ecfe50b566d1970c743db8002","url":"assets/js/6059.691256c2.js"},{"revision":"65e094acba7da67bf4d2f2284fc4a4f4","url":"assets/js/60704716.3f5bfed4.js"},{"revision":"adc1c26cc6c66143b1262cbd9b02b57c","url":"assets/js/60add6f1.65d56b6a.js"},{"revision":"7d3cc5f646e8872bb5170e2e67db543e","url":"assets/js/60cd687a.de7ba53c.js"},{"revision":"9feb1bc05cc67b5ff4e165cbcc93f593","url":"assets/js/632f43f9.c72293f8.js"},{"revision":"0e2051051069369b424f2a626b002a91","url":"assets/js/638be404.4d5b20c8.js"},{"revision":"05d6eeebbd72394654ac408afc91b0a6","url":"assets/js/649.d8910d8d.js"},{"revision":"2c05698cee11107f600aa447e34d4f67","url":"assets/js/65e4ccd4.70517e41.js"},{"revision":"31474ca5dd9ae29402141892e711cfbc","url":"assets/js/6798f4e4.4b0e7a82.js"},{"revision":"e1f0421ab13b735f0ffd4ca1d0e17328","url":"assets/js/68233c82.8cd43fa7.js"},{"revision":"58feb962ff8f41db03ab6ce1d832774d","url":"assets/js/68e30b06.970add08.js"},{"revision":"97417ac08f6e6dd68c026568057a3a82","url":"assets/js/6a00305c.f932974b.js"},{"revision":"8b5db0f64aabf46ae3508640218f6ab5","url":"assets/js/6c4c4dea.e48d0715.js"},{"revision":"d09175d33665661a2869d9e636b991ce","url":"assets/js/6d9bc096.76d710c2.js"},{"revision":"faca9965ea62d08d852590a9b9e3f60a","url":"assets/js/6ec71b44.0bbcbad7.js"},{"revision":"1d54188badd5f73c7a9d1cc06d2aee8e","url":"assets/js/6fd14778.a4e38cd2.js"},{"revision":"e50afce220a95d17cabb517486f4f18a","url":"assets/js/7049.55f26c66.js"},{"revision":"cf7bbd63e854eee7f5e5252270f4fa4a","url":"assets/js/70c0a5b1.8e15330a.js"},{"revision":"258707ac6632cae3c5de580757b674a1","url":"assets/js/70c4bb45.ad07ff5c.js"},{"revision":"7955b6d7ead2440c44df098db0e17ea0","url":"assets/js/7152fb6e.ae33b6eb.js"},{"revision":"26e7552d27034f3145ac2d4a3e45c6fc","url":"assets/js/719399d6.ddd79a44.js"},{"revision":"031087fc16c06be827cf2cb4b5ac3233","url":"assets/js/7298.3fa2135e.js"},{"revision":"7d62dde5d887e1a54c2c7ba9da78cd70","url":"assets/js/72cf1be6.6671cc88.js"},{"revision":"c2836995168492b4e7d2a2a48c3264d6","url":"assets/js/738fa3a4.e855961a.js"},{"revision":"d48e5be2945bcf49ee9196c1120314fd","url":"assets/js/74512fd2.6f6ec16c.js"},{"revision":"50fbbf85bec95a516a1df0be908ade5b","url":"assets/js/74dda8d0.673b2a67.js"},{"revision":"2e13ecf50ea3afac3c3bcc2b667f732b","url":"assets/js/768714c1.2b67adb3.js"},{"revision":"5773206fc60d740e0fb03df1edacf4fb","url":"assets/js/76def669.03a053c2.js"},{"revision":"95fc79b290e16e1cad349537528ee9ca","url":"assets/js/7723.4a44d3a6.js"},{"revision":"32c3c1a9ce64e185020f0632343acae5","url":"assets/js/77a552d2.d0172d83.js"},{"revision":"e011d7d295f6f4424d02e84ac727bf15","url":"assets/js/79606cc0.549bd370.js"},{"revision":"9b4e9b3842835749cc237a48c0f935ea","url":"assets/js/7be57a40.bbb26096.js"},{"revision":"93ef5861e069ebd297541eaa7fd90587","url":"assets/js/7ccbf748.4fe4888a.js"},{"revision":"e435a5f81a1c8e605da54bf1f3d721a7","url":"assets/js/7d4014a0.e29222a4.js"},{"revision":"44e55758757c7323e4c63032e63d9093","url":"assets/js/7d79b262.0884bccf.js"},{"revision":"f8e7a7ed210b369cf361ecf1b4e40dae","url":"assets/js/7fcbdee5.37dffc29.js"},{"revision":"5bb9f00297e0387128d9ffeefa2a6c8a","url":"assets/js/81350798.ef282d7f.js"},{"revision":"e44021f950fc1d21623610e36d03315a","url":"assets/js/814f3328.da254b0c.js"},{"revision":"9bd3f7ab6bc1c529032f12e61cc4c814","url":"assets/js/81b0b826.d5ce2ccd.js"},{"revision":"d3734769e2c0f5e62ace8b7a072785d0","url":"assets/js/81d45afe.4a8f5de8.js"},{"revision":"e110dfc9e58e0ecf181739252bfb10bd","url":"assets/js/831d5710.5e345390.js"},{"revision":"1269dd04537f77e8f5692db34af19e11","url":"assets/js/8405e40b.f52a7075.js"},{"revision":"e9b26ab654ab43529850c84f38d08409","url":"assets/js/844e8bde.c4efe0f7.js"},{"revision":"563aaaab91753945dde293bc0a56fbca","url":"assets/js/8698047a.77bcea58.js"},{"revision":"e82ec0dc61887f1a70e9f70068c2db3a","url":"assets/js/877814a5.faffd8ee.js"},{"revision":"5b3f62204301238fbb2fa7e862011256","url":"assets/js/878419eb.a7fd0988.js"},{"revision":"aaf0c8332ef3665197e299db7fbd9da5","url":"assets/js/87f085ac.1c776e9c.js"},{"revision":"5c8649d6e4726409ccc5bd8ebc2b3bbc","url":"assets/js/88ee3594.5e132c86.js"},{"revision":"1a120e006bf1a21e7ecf9f60a2f9c41d","url":"assets/js/891c38c1.56984e00.js"},{"revision":"7429de4f875eacfd61c5d58d8e422f37","url":"assets/js/8934c416.9524829c.js"},{"revision":"94fc30c261f2d9067ef4e25fd57661e6","url":"assets/js/8954.f074ff44.js"},{"revision":"7b87b6ea48c41b13618903cd06b847b7","url":"assets/js/8bb873be.4105832d.js"},{"revision":"cbb0ee234e254490343b032af7ee591f","url":"assets/js/8d3daf7e.d0da8702.js"},{"revision":"afc561221bcddf94372760735cc04b40","url":"assets/js/8d5100a5.184a8df7.js"},{"revision":"c29f8f9fd8150408e3e9f4aa37e538b8","url":"assets/js/8d6d7042.bc13e011.js"},{"revision":"743609224069c3ab92ddae9c6248aa4e","url":"assets/js/8d87430e.7d40ec6d.js"},{"revision":"27c0ebcb6deb2cc7b79a9ab913185de2","url":"assets/js/8de208d4.d5f86b96.js"},{"revision":"0d460351d6eba4a388ae3c82d09dcdcc","url":"assets/js/8f2d6012.067b497c.js"},{"revision":"fa515a077c0ce05001733741d91f446e","url":"assets/js/8fbb1d25.1d4ab5ee.js"},{"revision":"621adf609cd5ff90d1e34bddc0b7bd5d","url":"assets/js/9074.4c628453.js"},{"revision":"d53f15deddef805f88372b03b7c81ab4","url":"assets/js/91a408cf.233c3b18.js"},{"revision":"3735e8c819b57088c14be5d3de91479d","url":"assets/js/931c7e04.9ba2ea8d.js"},{"revision":"98be14b4bac8b5cf5896094c026c3f8b","url":"assets/js/935f2afb.768e2f0c.js"},{"revision":"ca0e9501500664c0cb5b83f6d5eb9443","url":"assets/js/93c7142c.79f14037.js"},{"revision":"4a7f0714a361accfe83344b7a1408104","url":"assets/js/94642dbf.59a1971a.js"},{"revision":"a791936fc37cbbf4a593bed3ecf5f217","url":"assets/js/9627.1677a00a.js"},{"revision":"3fb4261e046f6999f736556af97379c1","url":"assets/js/97dd099a.7c339eb4.js"},{"revision":"6f0d6850e3e6cb9f659c1bfb5af4817d","url":"assets/js/97e86fd8.e0e91fcb.js"},{"revision":"c29f643e6d9635b320957c0ecd93a50b","url":"assets/js/985ca71a.0de5f922.js"},{"revision":"1e9b4e4d1cbe04c3b821271c5ff20783","url":"assets/js/98df52f6.f008cf35.js"},{"revision":"ed2a5d3408c3d741a0cf5842c5c95ac9","url":"assets/js/99b5f837.4b2ecb03.js"},{"revision":"2bf241c88e1036e1b2a00d355ccd4d9e","url":"assets/js/9ab58b3d.aee22dd4.js"},{"revision":"2e3fc5a9b70be93c52daaf1259215820","url":"assets/js/9ad987dc.268a0a8f.js"},{"revision":"6be92e7f33f5c2ac8ba6073105096e46","url":"assets/js/9b9d8a78.d043a995.js"},{"revision":"89bb22525acb735ceb43d8554d0d1804","url":"assets/js/9c34cbca.9b69e231.js"},{"revision":"e88d585f0779dd8aa5266dd9e3c5b7cd","url":"assets/js/9c658726.58a47c1d.js"},{"revision":"1838335f5e097852b33ce304b92721e5","url":"assets/js/9cf65f97.b1c52f68.js"},{"revision":"7b6002a96b7b9a6285e1b673e517ca6a","url":"assets/js/9dd555b1.f9fe8c1a.js"},{"revision":"5fa42733bade11fe5dd8af609d5464b1","url":"assets/js/9e4087bc.bfa4914f.js"},{"revision":"e5f21fff2bd888c43afed8d6f9fab251","url":"assets/js/9fa1da0a.d47a9d73.js"},{"revision":"cb531a08dfc538aee6b42124cab2510b","url":"assets/js/a037c63f.c97fd198.js"},{"revision":"536ffb85a13595163386f2fd56df2066","url":"assets/js/a1a3e7de.a5c3d1bc.js"},{"revision":"fd0895ae7d15637ef819bf251b3be505","url":"assets/js/a24f541c.46fa52b4.js"},{"revision":"7795bcc0642353f0abdec13a4f88a7f3","url":"assets/js/a342c8c4.30b0e535.js"},{"revision":"4fde67b3583c454723a559022c34f9ff","url":"assets/js/a3919590.38315bc5.js"},{"revision":"acbab30ee58f43efde68e94effec37c4","url":"assets/js/a3a61869.b9ab4188.js"},{"revision":"80e94fc707dd3ed511d6835fee9de1c4","url":"assets/js/a3c88c0b.4de8acad.js"},{"revision":"68cd2ca80b410ec5775f6e89e9577a0e","url":"assets/js/a3f2e35e.fcc9af86.js"},{"revision":"868898e9242b74b6a8897ab7d5e7ce73","url":"assets/js/a44af050.02b027b6.js"},{"revision":"f889d0cd9ef1508ccc38d850a3f5fe39","url":"assets/js/a5aec623.34d50710.js"},{"revision":"af7f84162eaefda437a34bb9d6643455","url":"assets/js/a60a8c4d.56a21c92.js"},{"revision":"b069bee02b0d0c6a45cd9bea39176d37","url":"assets/js/a6aa9e1f.08a4fd98.js"},{"revision":"21386d9ac6221e0058030065875c6875","url":"assets/js/a7bd4aaa.a500b789.js"},{"revision":"13a00bf9f7fe39de36ec7349a7f88e23","url":"assets/js/a85b56be.d113cc94.js"},{"revision":"d313e422d543cb628f2f5dc5335cf100","url":"assets/js/a94703ab.be2fc366.js"},{"revision":"6446bfec5ea02720c2d18fb073c76f95","url":"assets/js/a9fb8aad.9d1717c0.js"},{"revision":"9ca6187287b5fdc07fe32858f2e8ef06","url":"assets/js/ab0d2325.44a919f5.js"},{"revision":"0803ac4163fdbee70015671808aa6a80","url":"assets/js/aeb09130.cfa7a8de.js"},{"revision":"25768ec4ef467301a5ca7eb540c751cd","url":"assets/js/af593c11.e453fc9f.js"},{"revision":"12d3647f00f009aadba17785f52edb71","url":"assets/js/b0072286.edc9ba30.js"},{"revision":"346f205f28f539ca6daf71c5b301fd8c","url":"assets/js/b01385c6.af250ba0.js"},{"revision":"698d833d4b7ff97da9ab3f95aa0d30d9","url":"assets/js/b09a966d.88a2d705.js"},{"revision":"93bee9aba81f655325dd9268a4206f17","url":"assets/js/b10d2d1d.93c2fa2c.js"},{"revision":"df1081755c847a948855cef64d702eda","url":"assets/js/b180cfad.269ce71e.js"},{"revision":"c1111a057002eba1c95b83640c2be2f0","url":"assets/js/b1adbe5f.eaf3d5ee.js"},{"revision":"192d4d1ce3326e0b32f6007ef99ec2ca","url":"assets/js/b229e7b4.900b000c.js"},{"revision":"a27594600f8c1224a701d9b2d23e9323","url":"assets/js/b2b675dd.865ac02b.js"},{"revision":"1b5f0c3b3312a23c88de20edaf5d4527","url":"assets/js/b2f554cd.d6226ebe.js"},{"revision":"aa99248fc99bc9ce7af91e43c5c98432","url":"assets/js/b468d581.7a52c6f1.js"},{"revision":"6cb59e03253d7af7640946b73a9a541e","url":"assets/js/b4d1969b.bb6ee14c.js"},{"revision":"ff7064f00cd3912ecb7dedd97593caa7","url":"assets/js/b5054348.2db2f1fc.js"},{"revision":"45fb41ff297160327f0142279713527a","url":"assets/js/b7fd5d9b.8f27b5c6.js"},{"revision":"f8b988caad73e2928b6dd3234bd2a217","url":"assets/js/b8bad8b6.59e8887e.js"},{"revision":"07a613fc49a59b99eedecb5eef804ab1","url":"assets/js/b8f857cb.45297d00.js"},{"revision":"d2fa8daf20248a110929284708073d3a","url":"assets/js/bca100fd.f706c30c.js"},{"revision":"9674a6f9a21e42345b2c63b44904c90a","url":"assets/js/bcadd4b5.c734e7da.js"},{"revision":"91cd7b9694199cb741a7603c28916906","url":"assets/js/c059fc3b.5de5952b.js"},{"revision":"2e67176330abf32f81bfef4e3076a78d","url":"assets/js/c09518a0.9798028e.js"},{"revision":"d2b7974ec46d1c56655cd5f08f3e7e77","url":"assets/js/c143124a.9a25c5fb.js"},{"revision":"a54b5352d9facde6435215d87c7d8ed2","url":"assets/js/c1cbba14.b9e8e8cb.js"},{"revision":"038698d402acf97b2bffb80bfbd36989","url":"assets/js/c2ba1a43.beb0c10c.js"},{"revision":"0560899c040c4ed017ff8a0110ec7c94","url":"assets/js/c36f9ac4.859fd77f.js"},{"revision":"927a63f76d65b88cc40d2bdb974bbdad","url":"assets/js/c37f2d73.e20921e2.js"},{"revision":"588a54d597165cfe4db67d3ff518169b","url":"assets/js/c399785c.a00cab94.js"},{"revision":"6fb19181661be4a64c83af1b84e40e2a","url":"assets/js/c5697d08.ab6d4dcc.js"},{"revision":"13877dc3f5598d1361f8b401cbb31258","url":"assets/js/c5a80f01.30eddb43.js"},{"revision":"9b6d3456e8ed6893ba1f7411285e5464","url":"assets/js/c6fa8535.69f6695f.js"},{"revision":"d3a3789c21c0c3569f08e99d051f0a65","url":"assets/js/c713fb68.4e7bdd59.js"},{"revision":"55ff1d70f0a846e41f920c26e9aa6187","url":"assets/js/c7d7c2cf.f0ddc18a.js"},{"revision":"297755904bc6a102038aa8b3e45511a9","url":"assets/js/c7f20b34.c6c66c3b.js"},{"revision":"7b01b64cb3c8195aad17abbce35efc34","url":"assets/js/c918d1af.65bf299b.js"},{"revision":"b3832e6508fc26df3afc7538802e8ce9","url":"assets/js/c923d4b1.139e1835.js"},{"revision":"3a1b913df677fedcb1ccc5641f65700f","url":"assets/js/c96ee667.51adcf97.js"},{"revision":"8d1476935de644fd454cf5c921e2d5f0","url":"assets/js/cabb6052.3b69db71.js"},{"revision":"48b593303518853308d435935ffc937b","url":"assets/js/caeb3f87.2139e792.js"},{"revision":"42aae4e122dad21455f08b548677d9bf","url":"assets/js/cba120a0.a36f11f4.js"},{"revision":"af1805a8ccab34668c2ed9e1a45013f5","url":"assets/js/cbbcf4f2.80b76b41.js"},{"revision":"04b1202f98a0cd9865e5d64c7ed6f778","url":"assets/js/ccc49370.0cb3c0c0.js"},{"revision":"d396e1a23eab7946cb8d599894b8f5c4","url":"assets/js/cce3350d.f67061a7.js"},{"revision":"1dfc96defd35887425bd3af0a8eb827b","url":"assets/js/cd46b10a.c3550a90.js"},{"revision":"71b42c11ed06692ffac1f5825ec01e87","url":"assets/js/cd85a010.4d07141c.js"},{"revision":"46f3227913d6abbfebe7a8f7a94a5c80","url":"assets/js/cf1baa66.81bbe4df.js"},{"revision":"902560e958074580afddfe65ed41a058","url":"assets/js/cf4855b3.af3e6262.js"},{"revision":"aed7b70daf7380c0b7aaf90d673ad774","url":"assets/js/cfc0d746.805c7545.js"},{"revision":"ad9213b514556890fa08189d5093f584","url":"assets/js/common.c8dd0c86.js"},{"revision":"236165148982baf78bc27a65d0a1ca9a","url":"assets/js/d089f3a2.01e17396.js"},{"revision":"2c8ec035fd8a89c140b33ebaa9bd0a6d","url":"assets/js/d0eed897.32073246.js"},{"revision":"ada465a90cef75a7e58bd8debac2ed1c","url":"assets/js/d27e4703.d4bd772b.js"},{"revision":"cbd72022070a66a6e9dadb345362e16d","url":"assets/js/d4244827.97d6fabb.js"},{"revision":"e7ac129248ec0f84cc32fbd9fd834716","url":"assets/js/d4693b41.04d9b66b.js"},{"revision":"658359dfd91bd3dc40ef011f46ca6a07","url":"assets/js/d4927cd4.2e3510f5.js"},{"revision":"795f76754b8c5b3c9ec72a0604dbe3c4","url":"assets/js/d69a32a8.698ee67e.js"},{"revision":"6818ff6c69d22696722c273c09e95903","url":"assets/js/d774de2f.b28404d5.js"},{"revision":"e6d955c1653a09d46f015cd6117aacb7","url":"assets/js/d7d404e6.5e5e649a.js"},{"revision":"0cd969b6953ce14b5a1258644e0d20ea","url":"assets/js/d806ecdc.cdcb4caa.js"},{"revision":"17731408c5623d42b627d0710ee02daf","url":"assets/js/d8911f7f.57ef4acb.js"},{"revision":"23c0484d7059891bf56fe71393c21d29","url":"assets/js/db19a329.462f2a71.js"},{"revision":"009c007e382fecc33fef2b386aa92bb7","url":"assets/js/dbeb8484.ec8a9fbc.js"},{"revision":"97de74f5be157200eee599c803e195a9","url":"assets/js/dc0f51b3.2bc30812.js"},{"revision":"e3c70346ff44f5409dbac2cc642e8e23","url":"assets/js/dd4157fa.eb05f26a.js"},{"revision":"314c124ce8b7a9afc94acbe9d798171d","url":"assets/js/dd68989e.200420e5.js"},{"revision":"9d036c589e2695074ee708c1dcbef3a3","url":"assets/js/dda8ff89.e1d9377d.js"},{"revision":"63231c33ce619aa9db1dddd367576416","url":"assets/js/defee600.e1e9fea8.js"},{"revision":"59cccda68cd14638b7be37dd54274485","url":"assets/js/df64ceb5.74cc3856.js"},{"revision":"add43e83e7c657e4111fa77ea4f43e71","url":"assets/js/df8a8323.6e683bf1.js"},{"revision":"9b4c620025be5eefaa5badafc03c3e09","url":"assets/js/dfa18018.8669318d.js"},{"revision":"ecb371bbbd3bfb835362b80581b7f16e","url":"assets/js/e028d6bb.5da98b36.js"},{"revision":"778b7c9076a5cc8be2973f8593b07a3c","url":"assets/js/e044428a.5e959eca.js"},{"revision":"00d87778948461227b71e567812a7275","url":"assets/js/e161bfb2.3de82884.js"},{"revision":"4c7c5039222e96feec80b6f5d4ac197b","url":"assets/js/e38db323.f31caf6d.js"},{"revision":"79565955da9794ea433d51b4da1a1a92","url":"assets/js/e689bc2e.0d12dbef.js"},{"revision":"468995918b7ecbff362feebdac103bba","url":"assets/js/e69d98b9.18753891.js"},{"revision":"6eb40e6fe83dab19d4bbee1d81bd6d67","url":"assets/js/e6d1a3ae.82d43298.js"},{"revision":"da87a72104794ca2ad52d7c71f38b9fc","url":"assets/js/e73c9379.13dd6104.js"},{"revision":"04720d4e5caf8aa8e5c4fc735c97fdbd","url":"assets/js/e79a2b5d.f7071547.js"},{"revision":"83ef5fb9dc61204f3055f83c703c9ab9","url":"assets/js/e7a4155a.6a57e9d3.js"},{"revision":"b92ed245b8329ca9766e1f55706cd356","url":"assets/js/e86a1834.70cea8ea.js"},{"revision":"dc1d754f979453adaaa3348c4412fc46","url":"assets/js/e9d27e10.82202a35.js"},{"revision":"55534ba8923e5f2bddf4332b5eb96b3d","url":"assets/js/ec5e0ba1.f6ec8cb6.js"},{"revision":"491a5e5c602b7a04891c90a7641f35cd","url":"assets/js/ed2090f1.15ebb910.js"},{"revision":"ca5aa62049a21309cebbf6f1053c5f57","url":"assets/js/ed34e6e9.da6be3e4.js"},{"revision":"9cb6d46c8d133d84d50cc8cd262e1948","url":"assets/js/ee438ba6.a84ac612.js"},{"revision":"7b76f410b71269f9ea423baa27847ce9","url":"assets/js/eed7c618.467bbaea.js"},{"revision":"792e7760dec6ca043a37d99cf96abe0f","url":"assets/js/ef328f1e.d27dbcba.js"},{"revision":"4cf921407e2d558601d05d2b1bd70aeb","url":"assets/js/efbda9ff.ead777ae.js"},{"revision":"a8630815a6586eb98371746a1ed4a810","url":"assets/js/f1507532.255d065b.js"},{"revision":"d9404037cab6d10c84b16993416dec94","url":"assets/js/f1c47bce.4c633b1a.js"},{"revision":"b4b3c3d82c37a0d0fc077720f8e2ba9e","url":"assets/js/f2775b0c.018f3e53.js"},{"revision":"4d86dabe3dd8fbc34c5612eb3ec5fae8","url":"assets/js/f2ae5213.de8041b3.js"},{"revision":"fb9ad41afb32f6098a57f2eeb2a16636","url":"assets/js/f3af3d3b.387c1271.js"},{"revision":"884001dcfe1cb52cd465c1d691657a88","url":"assets/js/f58d367a.191175a8.js"},{"revision":"f9d290fe41863ab88a7dd2702222daee","url":"assets/js/f5a4bfef.4fc752d3.js"},{"revision":"c3218db06466df0254ae28eebf840d4a","url":"assets/js/f72f448f.25cc0d2a.js"},{"revision":"6a0cbeb74c1f24b764ffa1edeb396b81","url":"assets/js/f80b3d18.eeac72a9.js"},{"revision":"3f461e9321767d3fee059700af92639a","url":"assets/js/f819e736.a14127e5.js"},{"revision":"f5b90fcd1f4ab5b9cf6f8db8d8bf9801","url":"assets/js/f95bdf96.0584149b.js"},{"revision":"abcc79fd6311178f71e1b1ef08978f84","url":"assets/js/f9a3962e.1633e289.js"},{"revision":"599946db0a9aa199ecd4406ddfa5d07b","url":"assets/js/fae5fcc9.3fe5bfae.js"},{"revision":"45e2dc4a942c6c27400f35cde422f973","url":"assets/js/fb54075f.04af7e50.js"},{"revision":"3cfa5094da24b54ccf4b88f6ab083a72","url":"assets/js/fc1378d8.3aa67df4.js"},{"revision":"ce3815cd4f93308bd75322f191def356","url":"assets/js/fcea546d.2a75a842.js"},{"revision":"a12c9a1ff9a8f4b923b922a8c1e2ddcf","url":"assets/js/fd0499a6.db73e165.js"},{"revision":"3038c5f2804787c4b6e33c6bff56888e","url":"assets/js/fdd105ad.eb5d4447.js"},{"revision":"b95c1dfce17921d747bd48d3ac8aea46","url":"assets/js/fdd9c53b.45891d75.js"},{"revision":"2a7350fd9b9a941b8c76a25a773eee03","url":"assets/js/fe8463b5.aa0d3ad1.js"},{"revision":"85edab1a53897f4ed72ff92addb1407f","url":"assets/js/ff82e203.f2efcce9.js"},{"revision":"9a92cf16b09634ef6e9c13cec3506115","url":"assets/js/main.c3101957.js"},{"revision":"1faa7c147eab3f0e1c904add20c1ced7","url":"assets/js/reactPlayerDailyMotion.95182d4e.js"},{"revision":"2baeb96d2893f7496aaaf2e6c3f19e64","url":"assets/js/reactPlayerDailyMotion.9f35b937.js"},{"revision":"f65aa5074b990fb2917e57c2b6f1d786","url":"assets/js/reactPlayerFacebook.7bbd61fc.js"},{"revision":"0d6ffac858291510dd6e2004814b64e8","url":"assets/js/reactPlayerFacebook.b93fb379.js"},{"revision":"f7ee99ca6395e84d4963966627d74cad","url":"assets/js/reactPlayerFilePlayer.28cdc790.js"},{"revision":"414ea947382e3d5f3629803cec48022b","url":"assets/js/reactPlayerFilePlayer.6294a644.js"},{"revision":"761ff9565dbc094602bdd94efa8d2619","url":"assets/js/reactPlayerKaltura.1c6393d7.js"},{"revision":"3fdad68676de88af4ecc309e6d85d26c","url":"assets/js/reactPlayerKaltura.4ea3a78c.js"},{"revision":"e7867b1a029a45d31d27fe178d119aac","url":"assets/js/reactPlayerMixcloud.28b7250a.js"},{"revision":"219e350722e2537e068b41e2270ce957","url":"assets/js/reactPlayerMixcloud.f334baa0.js"},{"revision":"566d2294e88ba85328f12ee7abbb1c6c","url":"assets/js/reactPlayerPreview.3946cb53.js"},{"revision":"5c202218fd9856ee9c190a15071dc3bc","url":"assets/js/reactPlayerPreview.8215cf8b.js"},{"revision":"c80163a8b3fa1f51cf5bded6644e9c6d","url":"assets/js/reactPlayerSoundCloud.ad38d3e7.js"},{"revision":"b4de1965860f0d7ee98d29b2a8abc268","url":"assets/js/reactPlayerSoundCloud.fc2bd9b6.js"},{"revision":"c10251eb865f240155061ffda885c127","url":"assets/js/reactPlayerStreamable.0e432fe6.js"},{"revision":"89b43388f101bab60e67c35b21a883f7","url":"assets/js/reactPlayerStreamable.f2d8cd02.js"},{"revision":"f5428e51c80020037dddacc8bdd2853a","url":"assets/js/reactPlayerTwitch.676667a4.js"},{"revision":"ab20a1ffab2a0896ae05105a5e7159e5","url":"assets/js/reactPlayerTwitch.69927f24.js"},{"revision":"06dbefd2a90e532dd0e8b82e04f6bcb6","url":"assets/js/reactPlayerVidyard.ce0defb8.js"},{"revision":"aa57f6a52c9bf458534e4b713c733386","url":"assets/js/reactPlayerVidyard.d7af7e43.js"},{"revision":"f9cf0a128018006236e6d5df10e49c40","url":"assets/js/reactPlayerVimeo.05d3cf57.js"},{"revision":"1aa88ee5c1ae3a6fbbd06e302b924658","url":"assets/js/reactPlayerVimeo.421f4987.js"},{"revision":"ec87ffc857e251cfdaaf11dfb7311f7d","url":"assets/js/reactPlayerWistia.15ff54b4.js"},{"revision":"9acb9efe2384cbd2f1f35a18db140c2b","url":"assets/js/reactPlayerWistia.a0114c0c.js"},{"revision":"32c0dbe44333c1cc45a6823dca2dcbcb","url":"assets/js/reactPlayerYouTube.58b38856.js"},{"revision":"b7c0eef3a2d07f16ee93fa5b6b604473","url":"assets/js/reactPlayerYouTube.c7bdd58e.js"},{"revision":"106b225b482f9131d6916ff1a9e13118","url":"assets/js/runtime~main.db80dd6d.js"},{"revision":"4108169507e504f79eb1f7c5e65fc73e","url":"blog/2023/11/14/introduction-to-new-centralized-documentation/index.html"},{"revision":"da0cae1eebe64283ec0cfa9bba69c42c","url":"blog/2023/12/08/version-12.0.0/index.html"},{"revision":"b192d48a52cc953674d7c453b20425b3","url":"blog/2023/12/19/version-12.1.0/index.html"},{"revision":"12186e48838bfa7caace140ff3f36155","url":"blog/2023/12/20/version-12.2.0/index.html"},{"revision":"f45b4adcdc615a9fa2ebdc073bfae2f3","url":"blog/2024/01/03/version-12.3.0/index.html"},{"revision":"09cac1fa92749468e2c7331f6eeb735f","url":"blog/2024/01/04/version-CSE/index.html"},{"revision":"891f871cfbc9aa16cc0755fec7361aa9","url":"blog/archive/index.html"},{"revision":"8d39906a045303e8d83d50413c2ea323","url":"blog/index.html"},{"revision":"9f60a9c2aafc8202d7dba9421563ace0","url":"blog/index/index.html"},{"revision":"278072b013bdf363209008276de2bad1","url":"contributing/index.html"},{"revision":"78c63bc0ee3f674393000ed6992f1282","url":"docs/11.10.0/additional-resources/architecture/index.html"},{"revision":"10422194d013329e11ef2d31014e5a9f","url":"docs/11.10.0/additional-resources/audio-formats/index.html"},{"revision":"e1787d7104b417a793f369993643d246","url":"docs/11.10.0/additional-resources/extracting-xlsx-from-h5/index.html"},{"revision":"467d37189352bcc6ab1284dadfa430ca","url":"docs/11.10.0/additional-resources/flow/index.html"},{"revision":"3d1ca08402c9f778c6e6f70273707475","url":"docs/11.10.0/additional-resources/get-in-touch/index.html"},{"revision":"27cedc808970505a3b935326cc9fd183","url":"docs/11.10.0/additional-resources/python-venv-activation/index.html"},{"revision":"efdc381a8cf388d5767357ded7271bbc","url":"docs/11.10.0/additional-resources/visualisation-online/index.html"},{"revision":"373b2d0e82bafb82f910f26eec98a0cd","url":"docs/11.10.0/category/additional-resources/index.html"},{"revision":"4dcf87bac333031d1898122ee3bfb517","url":"docs/11.10.0/category/requirements/index.html"},{"revision":"44937c3ae55acdb4fd295ce5e4672d93","url":"docs/11.10.0/category/user-guides/index.html"},{"revision":"41c181456707026aed2807198995b327","url":"docs/11.10.0/index.html"},{"revision":"5295c1804327533cb8f02c04fb2ddec9","url":"docs/11.10.0/install/index.html"},{"revision":"aef4eef6c1ea51823eb492838cf0f93e","url":"docs/11.10.0/requirements/macos/index.html"},{"revision":"455dc32e842be2c09402575fcedb0088","url":"docs/11.10.0/requirements/ubuntu/index.html"},{"revision":"f67b3c65b6822050377316c92af83d5d","url":"docs/11.10.0/requirements/windows/index.html"},{"revision":"0f01cce009748c2a761ae189849184cb","url":"docs/11.10.0/user-guides/modules-presentation/index.html"},{"revision":"bfdfdfad9e5a59cbd5ee9227f12bbb6d","url":"docs/11.10.0/user-guides/processing-user-guide/export-computations/index.html"},{"revision":"56c452169d7cc8a13f30720bb4dbcaf2","url":"docs/11.10.0/user-guides/processing-user-guide/export-dataframe/index.html"},{"revision":"9b63c277a9ea086397ad047f3fa9c73b","url":"docs/11.10.0/user-guides/processing-user-guide/export-mdm/index.html"},{"revision":"3026e759aa640f34e09f90e7d2b08476","url":"docs/11.10.0/user-guides/processing-user-guide/index.html"},{"revision":"5aaa2222566314eff6058376e3d8c29c","url":"docs/11.10.0/user-guides/processing-user-guide/purge-computations/index.html"},{"revision":"9f0004268da34cadb4229b56bd406766","url":"docs/11.10.0/user-guides/processing-user-guide/quit/index.html"},{"revision":"eb18e2fc68fabbb13d41640f630eb654","url":"docs/11.10.0/user-guides/processing-user-guide/refresh-configuration/index.html"},{"revision":"1c52dbd4bb79b015bd0442026890fe5d","url":"docs/11.10.0/user-guides/processing-user-guide/repack-storage/index.html"},{"revision":"06c4fb00d61e0e638f372280a8d31393","url":"docs/11.10.0/user-guides/processing-user-guide/run-all/index.html"},{"revision":"e619cd04847b665bf0d9deae24cd47f9","url":"docs/11.10.0/user-guides/processing-user-guide/run-autoclusters/index.html"},{"revision":"f6a051754d959f4e2865b57bd69d94b4","url":"docs/11.10.0/user-guides/processing-user-guide/run-computations/index.html"},{"revision":"9747c4154e5981a816cdae7c2d83da09","url":"docs/11.10.0/user-guides/processing-user-guide/run-digests/index.html"},{"revision":"f4e378af36dbea82b81b8fe67b411011","url":"docs/11.10.0/user-guides/processing-user-guide/run-extractions-and-aggregations/index.html"},{"revision":"869d0b3c16a0ec227d16131b5df0dc38","url":"docs/11.10.0/user-guides/processing-user-guide/run-reductions/index.html"},{"revision":"e6e6ba0a8547cd9084d9ee75a6b83c55","url":"docs/11.10.0/user-guides/processing-user-guide/run-trajectories/index.html"},{"revision":"20c5d715646d7fc5839e2e8511638a58","url":"docs/11.10.0/user-guides/running-campaigns/index.html"},{"revision":"dfa8329ef4aabeafd7755d11d124ac68","url":"docs/11.10.0/user-guides/visualisation-user-guide/index.html"},{"revision":"b74f050d4cc206cad949d95c042da282","url":"docs/11.9.0/additional-resources/architecture/index.html"},{"revision":"b026ccbd3b06f52ac5c8059a509334c1","url":"docs/11.9.0/additional-resources/audio-formats/index.html"},{"revision":"11ead5979a3973afa12debb4e7d111bb","url":"docs/11.9.0/additional-resources/discord/index.html"},{"revision":"cff0cdb172c09b0f54d74a2d5902e6cb","url":"docs/11.9.0/additional-resources/extracting-xlsx-from-h5/index.html"},{"revision":"a8aa03c858f46ca90864c29c708ae865","url":"docs/11.9.0/additional-resources/flow/index.html"},{"revision":"1daf393b804d5596e98e196ac5a46d3e","url":"docs/11.9.0/additional-resources/python-venv-activation/index.html"},{"revision":"58866fe82b1b823c6a78dc2537d4088c","url":"docs/11.9.0/additional-resources/visualisation-online/index.html"},{"revision":"e75e05c5c9e853e48b11e903da2cff04","url":"docs/11.9.0/category/additional-resources/index.html"},{"revision":"9f85a1e67ce3b1aef025613aabfa5787","url":"docs/11.9.0/category/requirements/index.html"},{"revision":"8b8a980307313bcc9a7bf4e8590b2b28","url":"docs/11.9.0/category/user-guides/index.html"},{"revision":"ecb90270de633504fbe6eb97e4a6af1d","url":"docs/11.9.0/index.html"},{"revision":"14bd8e40ce4532b3a2a9015fe0a27f6b","url":"docs/11.9.0/install/index.html"},{"revision":"1fb9bf9d2008ec93307c9fecfba1aaa9","url":"docs/11.9.0/requirements/macos/index.html"},{"revision":"6c9bf6ec97500fd0754c9317a83e239e","url":"docs/11.9.0/requirements/ubuntu/index.html"},{"revision":"1ab09a71a66467119e947432c5d2338f","url":"docs/11.9.0/requirements/windows/index.html"},{"revision":"db69f8bd6a9bea3e7cc0227aae71f300","url":"docs/11.9.0/user-guides/modules-presentation/index.html"},{"revision":"26249aa2f5705e4df34df3a582b36fed","url":"docs/11.9.0/user-guides/processing-user-guide/index.html"},{"revision":"401346d87148bdbc390fe8338642500a","url":"docs/11.9.0/user-guides/running-campaigns/index.html"},{"revision":"79d4141905463ed622eccd3cbaa9074c","url":"docs/11.9.0/user-guides/visualisation-user-guide/index.html"},{"revision":"b2b1b183d649095c0f053f619d5ce0cd","url":"docs/12.0.0/extras/audio-formats/index.html"},{"revision":"b6edf177287e9ce3d162aa3b61c96287","url":"docs/12.0.0/extras/extract-config-from-storage/index.html"},{"revision":"96e4dccde505ea414a01e6fb0eea4408","url":"docs/12.0.0/extras/file-detection/index.html"},{"revision":"cf8eebfb327c27e7e312407415bee374","url":"docs/12.0.0/extras/get-in-touch/index.html"},{"revision":"9ea3ca36c97a1f2814135b496717f126","url":"docs/12.0.0/extras/index.html"},{"revision":"2d6a132231dbc1567c75a034c4948bb5","url":"docs/12.0.0/extras/offline-access/index.html"},{"revision":"4fb6f74b404871342f49044c966f4756","url":"docs/12.0.0/extras/visualisation-online/index.html"},{"revision":"51e0e510b22c51e25bbea49f6677cccd","url":"docs/12.0.0/index.html"},{"revision":"5748b3e3ddea42846fa5662a10ce9da8","url":"docs/12.0.0/installation/application/index.html"},{"revision":"d9e356298ce2aeafefb2f587a12a8487","url":"docs/12.0.0/installation/index.html"},{"revision":"9b4943d37924d4aa476a7740080ca582","url":"docs/12.0.0/installation/requirements/index.html"},{"revision":"a7aba31779fa7df85ee0325e30f14c9e","url":"docs/12.0.0/installation/requirements/macos/index.html"},{"revision":"3b207f0896204c856c7101ad97ed3b57","url":"docs/12.0.0/installation/requirements/ubuntu/index.html"},{"revision":"5098d5236718555df4f7e29ca2f3df4d","url":"docs/12.0.0/installation/requirements/windows/index.html"},{"revision":"2105691e6ef8ff45b8ea12b3adbe96c5","url":"docs/12.0.0/modules/campaign/getting-started/index.html"},{"revision":"38df9867f3c9e09e90f86d32bf5e632f","url":"docs/12.0.0/modules/campaign/index.html"},{"revision":"0e82415ba44bf62a123d43ebb3cf45ba","url":"docs/12.0.0/modules/campaign/user-guide/index.html"},{"revision":"95ed4ca10fae04598d011dc4982e0cee","url":"docs/12.0.0/modules/index.html"},{"revision":"64ef026a089099a1cc763d39b10e15af","url":"docs/12.0.0/modules/processing/getting-started/index.html"},{"revision":"2e3888af4614a7ea91d3882321ef1f39","url":"docs/12.0.0/modules/processing/index.html"},{"revision":"b37bf5f1948571deac44a4251a9b0eb1","url":"docs/12.0.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"522a70fcaa21ede461d6f190b88c181f","url":"docs/12.0.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"827d2b0ee40e7c819716c4dd51516737","url":"docs/12.0.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"4a21465083da258f4606b21b9e54b05d","url":"docs/12.0.0/modules/processing/user-guide/index.html"},{"revision":"736d7bc308fce94e3398ee28f47f1bfc","url":"docs/12.0.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"9521ca08873979d1a22373765eb7657c","url":"docs/12.0.0/modules/processing/user-guide/quit/index.html"},{"revision":"3c49333f62dc5745540b439f87eaccec","url":"docs/12.0.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"18000b1a62d15cd0cf3265b583b216f9","url":"docs/12.0.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"dd980c80e13062d291edb7912957a471","url":"docs/12.0.0/modules/processing/user-guide/run-all/index.html"},{"revision":"841aeefafa3e594b30b1b1fc254be6f6","url":"docs/12.0.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"e1f2a26a5b35bdb04e7185341fd99cb0","url":"docs/12.0.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"a3aa11cb1b86b90e328b228975c61758","url":"docs/12.0.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"3a01281cf232698f9d1ee5005b739f42","url":"docs/12.0.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"a3eac8f749ba9fe93a853d1d889c0a3e","url":"docs/12.0.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"8d2805fd6dd7e8019ed1365d8377b787","url":"docs/12.0.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"a31f16066cf3b79bdee2f82a7ca015c4","url":"docs/12.0.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"8da5fb0689d46a55c141c3981443839e","url":"docs/12.0.0/modules/visualisation/getting-started/index.html"},{"revision":"aa1461fe4eb158a6a5a1312e6391801f","url":"docs/12.0.0/modules/visualisation/index.html"},{"revision":"fc0a9fd7b277d66de3c945df493ce400","url":"docs/12.0.0/modules/visualisation/user-guide/index.html"},{"revision":"a03f5a4e6d0dee73653884894416067e","url":"docs/12.1.0/extras/audio-formats/index.html"},{"revision":"7da6a5f4d7b0da691a7d40431f65d72d","url":"docs/12.1.0/extras/extract-config-from-storage/index.html"},{"revision":"f004d158cc8d023a68f69374d56eaa2b","url":"docs/12.1.0/extras/file-detection/index.html"},{"revision":"9c283a32560cb9b005adc409d85637a4","url":"docs/12.1.0/extras/get-in-touch/index.html"},{"revision":"ae5d2ada927b5f9f2453894a64751fad","url":"docs/12.1.0/extras/index.html"},{"revision":"c34fed10904998e0e7993ad69bb2f977","url":"docs/12.1.0/extras/offline-access/index.html"},{"revision":"a5580ae2e8fe950bc123dd2fd821163a","url":"docs/12.1.0/extras/visualisation-online/index.html"},{"revision":"ac8b58b0b432f537d2110a0346405f76","url":"docs/12.1.0/index.html"},{"revision":"3e7f0b5ffb16eb185acabb2044ede08a","url":"docs/12.1.0/installation/application/index.html"},{"revision":"9a1067699b11e3c12466c557ddba822e","url":"docs/12.1.0/installation/index.html"},{"revision":"9ad3bf5a325b7a2af6403f2a13f63762","url":"docs/12.1.0/installation/requirements/index.html"},{"revision":"a8c2986addd50871c2c48a76a740ae30","url":"docs/12.1.0/installation/requirements/macos/index.html"},{"revision":"4199f040e6497ec16145a4cea94b8722","url":"docs/12.1.0/installation/requirements/ubuntu/index.html"},{"revision":"51b54857661ebfeffa5734e2d63a292e","url":"docs/12.1.0/installation/requirements/windows/index.html"},{"revision":"1d0686abf28fc99da321161d4ee0ee75","url":"docs/12.1.0/modules/campaign/getting-started/index.html"},{"revision":"e4e9452c597f3be741c0135b33ebf00c","url":"docs/12.1.0/modules/campaign/index.html"},{"revision":"a12bcd77b776e1f5caad6cae11a6d536","url":"docs/12.1.0/modules/campaign/user-guide/index.html"},{"revision":"72529dfd9a49d20a0d67b97e9ffabe97","url":"docs/12.1.0/modules/index.html"},{"revision":"6d1bb9f5e4dfe5058a877c796642f34c","url":"docs/12.1.0/modules/processing/getting-started/index.html"},{"revision":"2e86828e381641f5791325f361910019","url":"docs/12.1.0/modules/processing/index.html"},{"revision":"bece2f0200800c4c8ce8e1789eea2936","url":"docs/12.1.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"132b59c6bba34af1a6d7a35d6485a1df","url":"docs/12.1.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"608c665e9fe283da8b4ad4ea77cc548f","url":"docs/12.1.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"b1d6179f46d2246c7e777a06210d6128","url":"docs/12.1.0/modules/processing/user-guide/index.html"},{"revision":"e8f39cccc41bed07ef47be9db30e325d","url":"docs/12.1.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"cef937172b5b57e778a5d509e2ea63d0","url":"docs/12.1.0/modules/processing/user-guide/quit/index.html"},{"revision":"427c9c18a01c15eb57e84f00fcba40eb","url":"docs/12.1.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"b47fc3fbe81912fb9a7bcf1d428ddfe8","url":"docs/12.1.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"692b0923d2da170418448955804d58c4","url":"docs/12.1.0/modules/processing/user-guide/run-all/index.html"},{"revision":"901100e0ded594fae1913974ff037e96","url":"docs/12.1.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"97d1c4a8164aa19e01890f84b02dedae","url":"docs/12.1.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"452ffbc4bf9ada9b44dbdeb9c2db0550","url":"docs/12.1.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"5fecaa97ddcf318f6ece7033195b5ad0","url":"docs/12.1.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"9962a74d77b22db0b85b14d98527d074","url":"docs/12.1.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"dccd35459999e2e30e8c8b12f704f363","url":"docs/12.1.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"dc6eb1c56c5a7cbfb262b611502bd315","url":"docs/12.1.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"ec6a36cae81a180c34cb909ebb8ef370","url":"docs/12.1.0/modules/visualisation/getting-started/index.html"},{"revision":"5c54f8c3ec821f79780d48cc487a617f","url":"docs/12.1.0/modules/visualisation/index.html"},{"revision":"ad48250a966e81a7d775bb1b6e2f4b99","url":"docs/12.1.0/modules/visualisation/user-guide/index.html"},{"revision":"2c61432e7d70f9d5d9dd5f22ecc0f107","url":"docs/12.2.0/extras/audio-formats/index.html"},{"revision":"d9a12f1c09e7439106033b50942fb7eb","url":"docs/12.2.0/extras/extract-config-from-storage/index.html"},{"revision":"ede43ba3dee11beefa2c05fe14564f7c","url":"docs/12.2.0/extras/file-detection/index.html"},{"revision":"4f939a775af35f1340d9fa4721ff16aa","url":"docs/12.2.0/extras/get-in-touch/index.html"},{"revision":"6385d771cc2d649f52eb59931cbdec9d","url":"docs/12.2.0/extras/index.html"},{"revision":"e366c99b4f78e68fe941297504d77e00","url":"docs/12.2.0/extras/offline-access/index.html"},{"revision":"315748fc0187724e5c709c642c3a632b","url":"docs/12.2.0/extras/visualisation-online/index.html"},{"revision":"612d63ab66f133d7cbd340fd712d7e35","url":"docs/12.2.0/index.html"},{"revision":"76e33aa53efbf99f7e1eeeea315107b8","url":"docs/12.2.0/installation/application/index.html"},{"revision":"e156b71c5e86bbf4f35f7c09f8c323db","url":"docs/12.2.0/installation/index.html"},{"revision":"35dfd0be40baa63b1e0dfb9060d03c81","url":"docs/12.2.0/installation/requirements/index.html"},{"revision":"67a0093f6f53f0e17b60e864d152b86a","url":"docs/12.2.0/installation/requirements/macos/index.html"},{"revision":"1fca814d7d550d99effc8597c32ebba0","url":"docs/12.2.0/installation/requirements/ubuntu/index.html"},{"revision":"d33fb0e532f26d7f156d0804625bc95b","url":"docs/12.2.0/installation/requirements/windows/index.html"},{"revision":"025cf4ef18fad12ad2a5ce0758344164","url":"docs/12.2.0/modules/campaign/getting-started/index.html"},{"revision":"5ad3cc44f4af2a130ff6707100e734f5","url":"docs/12.2.0/modules/campaign/index.html"},{"revision":"53d962d2dcc22f8e3e5d4260cc8e785d","url":"docs/12.2.0/modules/campaign/user-guide/index.html"},{"revision":"a18a3c0df8495a26872445192682cae7","url":"docs/12.2.0/modules/index.html"},{"revision":"97a7913cf0bcc7a5fd2e35ffe8f58477","url":"docs/12.2.0/modules/processing/getting-started/index.html"},{"revision":"d122bd4f6dc633b9c732c8ba293f493c","url":"docs/12.2.0/modules/processing/index.html"},{"revision":"c5bd5b1a072f74ea2c8ef7970fb09d15","url":"docs/12.2.0/modules/processing/user-guide/export-computations/index.html"},{"revision":"ea6e50f656b1c80f081e130e71224e9a","url":"docs/12.2.0/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"a0f74fa6e84363e1f33a1e80feba9ef7","url":"docs/12.2.0/modules/processing/user-guide/export-mdm/index.html"},{"revision":"b0708c88eda98b2e21cff7b9ce552080","url":"docs/12.2.0/modules/processing/user-guide/index.html"},{"revision":"0343feea31175d8f64e5bf2e916c417d","url":"docs/12.2.0/modules/processing/user-guide/purge-computations/index.html"},{"revision":"c5f468e273437e3028464a688ad7d2d4","url":"docs/12.2.0/modules/processing/user-guide/quit/index.html"},{"revision":"50c4b18ea32f6ef1b99ce594affe0a38","url":"docs/12.2.0/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"c21aa439973a6513fb03158314e63511","url":"docs/12.2.0/modules/processing/user-guide/repack-storage/index.html"},{"revision":"bc0ae4fea51fd22b0b5a9a2c7c706440","url":"docs/12.2.0/modules/processing/user-guide/run-all/index.html"},{"revision":"7797b6e70a5f681d39cd49bc624fb409","url":"docs/12.2.0/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"bfc9e359f0192908e1786a9b81de290b","url":"docs/12.2.0/modules/processing/user-guide/run-computations/index.html"},{"revision":"b5dee0122c53954d220f33f3ef078917","url":"docs/12.2.0/modules/processing/user-guide/run-digests/index.html"},{"revision":"4c9ac781a8b1fb5a13655d7421d8e8ba","url":"docs/12.2.0/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"f76d847b80bbb5ff7c643934ee451c9e","url":"docs/12.2.0/modules/processing/user-guide/run-reductions/index.html"},{"revision":"3a41bbefcb1619a4f472b18b46b4885d","url":"docs/12.2.0/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"01615aeaf9d8f18ed46a0db372fbe794","url":"docs/12.2.0/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"938962ac2100804cab73663bee313ba7","url":"docs/12.2.0/modules/visualisation/getting-started/index.html"},{"revision":"a535597fdd74899fb2d9554f9de95516","url":"docs/12.2.0/modules/visualisation/index.html"},{"revision":"01ec2e26cdeee778c85582adb80e8aa1","url":"docs/12.2.0/modules/visualisation/user-guide/index.html"},{"revision":"6cf3432115ec6f6ca8af9173dd51974e","url":"docs/CSE/extras/audio-formats/index.html"},{"revision":"c9c8b9fdbf7ed7d63c030c4fdc44ca82","url":"docs/CSE/extras/extract-config-from-storage/index.html"},{"revision":"aafbd6cc50ccc47bb77ca8698b3f5ee9","url":"docs/CSE/extras/file-detection/index.html"},{"revision":"4e651d6cb6a224c2f60940c43391be09","url":"docs/CSE/extras/get-in-touch/index.html"},{"revision":"0f3983942e27b4532b2bc5b249912699","url":"docs/CSE/extras/index.html"},{"revision":"06cd5cbff72c2bf395715220f2e8f222","url":"docs/CSE/extras/offline-access/index.html"},{"revision":"354e44e1dc3248142d301076157d9f17","url":"docs/CSE/extras/repack-storage/index.html"},{"revision":"ab03201fb18326e569d332f91a9e2f1e","url":"docs/CSE/extras/visualisation-online/index.html"},{"revision":"243f06f0d10abbd1a402525c325074f4","url":"docs/CSE/index.html"},{"revision":"a580bcb1d04bac291f87dee4d7dba787","url":"docs/CSE/installation/application/index.html"},{"revision":"15d200ff7e9c57bdb1568365c811c65d","url":"docs/CSE/installation/index.html"},{"revision":"3c02e4961fe3af08029f56034dbf0dc0","url":"docs/CSE/installation/requirements/index.html"},{"revision":"21cfb3416bf9f76c673253ce705ad5e1","url":"docs/CSE/installation/requirements/macos/index.html"},{"revision":"5dbdbaa7f95d7b7a1cf6b282e0422d4a","url":"docs/CSE/installation/requirements/ubuntu/index.html"},{"revision":"c9bee2c6d3afa94dfe2d8b74dcc19b53","url":"docs/CSE/installation/requirements/windows/index.html"},{"revision":"79ebe3b8367ce3fb1862b5d149120287","url":"docs/CSE/modules/campaign/getting-started/index.html"},{"revision":"f3d513941cb21357335bb1f91eb12aaa","url":"docs/CSE/modules/campaign/index.html"},{"revision":"50db37812ff5e08927c63c180a61d707","url":"docs/CSE/modules/campaign/user-guide/index.html"},{"revision":"48c595e489c34a3913624bc6425aed88","url":"docs/CSE/modules/index.html"},{"revision":"c9a232823a152a19e9998da9e5aff267","url":"docs/CSE/modules/processing/getting-started/index.html"},{"revision":"52eef5feb3e6309c7991944fd7561e95","url":"docs/CSE/modules/processing/index.html"},{"revision":"30d0718496106aacc5a0c152e8b34a46","url":"docs/CSE/modules/processing/user-guide/export-computations/index.html"},{"revision":"dcb51175ceac75034c699ffd138200ee","url":"docs/CSE/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"80678a4f011cc38b6d2f7f203c6add23","url":"docs/CSE/modules/processing/user-guide/export-mdm/index.html"},{"revision":"e96a6364047b4c333266fa30ae8e2aa3","url":"docs/CSE/modules/processing/user-guide/index.html"},{"revision":"5e7f4a5c0f4577af5bad6760b8030357","url":"docs/CSE/modules/processing/user-guide/purge-computations/index.html"},{"revision":"0fedd2c3b6c98d275712b5bbf182ab6e","url":"docs/CSE/modules/processing/user-guide/quit/index.html"},{"revision":"b733882509ace2dfa624996b90da5707","url":"docs/CSE/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"15750b305262f43fb86dd1c1c8f51c64","url":"docs/CSE/modules/processing/user-guide/run-all/index.html"},{"revision":"ca6c34cfc23929cb1bbf363601d60f54","url":"docs/CSE/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"f501b1d813de18fb562c069b368cd18c","url":"docs/CSE/modules/processing/user-guide/run-computations/index.html"},{"revision":"0195ecc03545bf6c5c883c70c74e58b3","url":"docs/CSE/modules/processing/user-guide/run-digests/index.html"},{"revision":"434ecac6d9be8f74545afdcdfa855e04","url":"docs/CSE/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"3ba0bd9ba61797a6bb2471d1dfd31d7b","url":"docs/CSE/modules/processing/user-guide/run-reductions/index.html"},{"revision":"7357e565f31146cead41f8fb9b54a200","url":"docs/CSE/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"f86ef2d93fd0b12ba9991d5eb1b97abc","url":"docs/CSE/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"66c9dd8b40ebf3efe6e43f07efcda95f","url":"docs/CSE/modules/visualisation/getting-started/index.html"},{"revision":"60b518600971b7a11eb60c78ab913d10","url":"docs/CSE/modules/visualisation/index.html"},{"revision":"5a6ffc8b4444644efa36b0c5d8a751ce","url":"docs/CSE/modules/visualisation/user-guide/index.html"},{"revision":"490b8b799295a0b77fbb4395b93b6ca3","url":"docs/extras/audio-formats/index.html"},{"revision":"66a47b63023798f61ed2eb78225819dd","url":"docs/extras/extract-config-from-storage/index.html"},{"revision":"40cde58d4f418ad7f4fb85ae81afc2ce","url":"docs/extras/file-detection/index.html"},{"revision":"47f52af69d9bdb724d6100698c3f5db4","url":"docs/extras/get-in-touch/index.html"},{"revision":"666fd5d7807cd37f18c72b443750c494","url":"docs/extras/index.html"},{"revision":"daa6dbbaa8f0aad5dda796b9310fb429","url":"docs/extras/offline-access/index.html"},{"revision":"bd59685e223c65b5908d934218a2c5f6","url":"docs/extras/repack-storage/index.html"},{"revision":"1b26adbb3b84caef28da80d21d9b097d","url":"docs/extras/visualisation-online/index.html"},{"revision":"c6563dc93da382826ba8c181446becaa","url":"docs/index.html"},{"revision":"6a490a4c460862695ab6ecfb72f36ccf","url":"docs/installation/application/index.html"},{"revision":"c5b6bfb130b193ac9c2a76eee33c58fa","url":"docs/installation/index.html"},{"revision":"86ecd7ee8dfd7ba1f9115648f7807a02","url":"docs/installation/requirements/index.html"},{"revision":"e93e86d0e11ec413bc881eacdaf270ac","url":"docs/installation/requirements/macos/index.html"},{"revision":"914ea40ce4207c74a10c08a7ed1fbd58","url":"docs/installation/requirements/ubuntu/index.html"},{"revision":"dfde01764be2fab7a7a91f51eb684919","url":"docs/installation/requirements/windows/index.html"},{"revision":"3f9e1d10f9081ab5b069170e76c0a0d0","url":"docs/modules/campaign/getting-started/index.html"},{"revision":"b377c06393bafff5197189dc8bcd01ab","url":"docs/modules/campaign/index.html"},{"revision":"c9f067f6d0ea2a5ec60d613204e3162c","url":"docs/modules/campaign/user-guide/index.html"},{"revision":"dcad552f3ca40975a4880919d0ca6e15","url":"docs/modules/index.html"},{"revision":"226dcb1dcd6658ceac4c5fbd749f3cf7","url":"docs/modules/processing/getting-started/index.html"},{"revision":"3d93493f464e8bd3c6d699c94aa02a03","url":"docs/modules/processing/index.html"},{"revision":"425eb941b859da4e7dbeea7ab1e59006","url":"docs/modules/processing/user-guide/export-computations/index.html"},{"revision":"a0e570a66c0eac3ed67fcd32e4446538","url":"docs/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"788607b1a0e9ef8d143c308791513e75","url":"docs/modules/processing/user-guide/export-mdm/index.html"},{"revision":"703edf06449f2eeddebac0dcaa45f060","url":"docs/modules/processing/user-guide/index.html"},{"revision":"0cd84f7d039b85d5358bd8a83b25b98f","url":"docs/modules/processing/user-guide/purge-computations/index.html"},{"revision":"ef20f40cff9df3ceccf7a65f39c8e504","url":"docs/modules/processing/user-guide/quit/index.html"},{"revision":"558e3c1c92ceebf5108ffd75ab6b8a1e","url":"docs/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"4fee5d9f92b0e7bc6ec02355425ab1fc","url":"docs/modules/processing/user-guide/run-all/index.html"},{"revision":"ddf20cc7369de1282571f80dec0e57bd","url":"docs/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"48c544066a2dff8f90678fc0ac1b3b6f","url":"docs/modules/processing/user-guide/run-computations/index.html"},{"revision":"ef3ceeb0c19421725d3c1aea75871124","url":"docs/modules/processing/user-guide/run-digests/index.html"},{"revision":"4350e0cd92cad9ede3d07a00a8297fc5","url":"docs/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"1b12ae165be17a46485710e314a063b7","url":"docs/modules/processing/user-guide/run-reductions/index.html"},{"revision":"0a15c113c1f24036877c4d20c7aa0ed4","url":"docs/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"18ea7922f6db1bcee74b5150652c480d","url":"docs/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"ac1aafda7b89de7d888513394400e357","url":"docs/modules/visualisation/getting-started/index.html"},{"revision":"7094a753119df8aa61b9c7a40bfd99e9","url":"docs/modules/visualisation/index.html"},{"revision":"99c7927dd57dd29d7bed6f5a69f7f5e4","url":"docs/modules/visualisation/user-guide/index.html"},{"revision":"6f7fe8790b25fa21ac39398ab341c503","url":"docs/next/extras/audio-formats/index.html"},{"revision":"004821770c237331d368a9aeb5abff69","url":"docs/next/extras/extract-config-from-storage/index.html"},{"revision":"ee3bd96909589ce026d8877095a709b6","url":"docs/next/extras/file-detection/index.html"},{"revision":"a4241da6011bc95216e3be02e39188f9","url":"docs/next/extras/get-in-touch/index.html"},{"revision":"79da19532869ca7fb669dc5ba9da0809","url":"docs/next/extras/index.html"},{"revision":"c9323fec0933a1f497c3505fd3f0e481","url":"docs/next/extras/offline-access/index.html"},{"revision":"a1ee166b77afdb03a39d550190004196","url":"docs/next/extras/repack-storage/index.html"},{"revision":"9eea591f6abaa2e2e4f2bcc8bcccf490","url":"docs/next/extras/visualisation-online/index.html"},{"revision":"eba4b2fdf7bf8b1b8e1364af8ec36b15","url":"docs/next/index.html"},{"revision":"b44ba9d142de4f7e2bf5d9a81d5d8a31","url":"docs/next/installation/application/index.html"},{"revision":"f74457453bce7086f84db4f7390289fa","url":"docs/next/installation/index.html"},{"revision":"4f8e7b20094fa9b8bc883a4e342735b5","url":"docs/next/installation/requirements/index.html"},{"revision":"0adaf8fcf8364b191cf6b3e956b72d0f","url":"docs/next/installation/requirements/macos/index.html"},{"revision":"827e84e836fc9b9c263c341d4ff1bcc2","url":"docs/next/installation/requirements/ubuntu/index.html"},{"revision":"22c03a741598f0b42d5552acd1fb355b","url":"docs/next/installation/requirements/windows/index.html"},{"revision":"7c068f3f653260ae4b3f6181cde11053","url":"docs/next/modules/campaign/getting-started/index.html"},{"revision":"752154960c31a14d90392841e1c9bfb8","url":"docs/next/modules/campaign/index.html"},{"revision":"aa066515f0b10460173f7eb8d958a48a","url":"docs/next/modules/campaign/user-guide/index.html"},{"revision":"3d061433e9146077aded3a6b73cc4468","url":"docs/next/modules/index.html"},{"revision":"135121d21316458cd449db36ce58cc1b","url":"docs/next/modules/processing/getting-started/index.html"},{"revision":"efc7a69b30e79aa9a9357258c716b7a1","url":"docs/next/modules/processing/index.html"},{"revision":"452b10c3293dfa447084f7213edec692","url":"docs/next/modules/processing/user-guide/export-computations/index.html"},{"revision":"be14449b16bc7e9d2c1a3b874757576e","url":"docs/next/modules/processing/user-guide/export-dataframe/index.html"},{"revision":"092698692a1e03c5f7f3afcef3cc38fb","url":"docs/next/modules/processing/user-guide/export-mdm/index.html"},{"revision":"c5963a8c6a1957c2f41c57a4b2fa6fb4","url":"docs/next/modules/processing/user-guide/index.html"},{"revision":"873de5308fdb5ca4bd042ddd789f9e8c","url":"docs/next/modules/processing/user-guide/purge-computations/index.html"},{"revision":"7d64d463a24791b55d48797b0a1a25f1","url":"docs/next/modules/processing/user-guide/quit/index.html"},{"revision":"c404d51e50edd466dd751d88bd1c8308","url":"docs/next/modules/processing/user-guide/refresh-configuration/index.html"},{"revision":"7c9dc7b8f9c3437ab4230a927a00d01d","url":"docs/next/modules/processing/user-guide/run-all/index.html"},{"revision":"45f03d7cf40e2686454c62059b1d34a1","url":"docs/next/modules/processing/user-guide/run-autoclusters/index.html"},{"revision":"541adb6a41a33af476f8eb4587ebb593","url":"docs/next/modules/processing/user-guide/run-computations/index.html"},{"revision":"65f6621456f7d55c326925091c386e5f","url":"docs/next/modules/processing/user-guide/run-digests/index.html"},{"revision":"432089427e71807cbb185834f2f2b540","url":"docs/next/modules/processing/user-guide/run-extractions-and-aggregations/index.html"},{"revision":"72497216e634237aaa37044aae5cb070","url":"docs/next/modules/processing/user-guide/run-reductions/index.html"},{"revision":"4eebe3afba243fe3bd41026b72537c53","url":"docs/next/modules/processing/user-guide/run-relative-trajectories/index.html"},{"revision":"020eb7b1085dcc610e81fa06ee637496","url":"docs/next/modules/processing/user-guide/run-trajectories/index.html"},{"revision":"50d481077cf3a3e0a41c9114afba3e0a","url":"docs/next/modules/visualisation/getting-started/index.html"},{"revision":"34afa887f0acb183a3de3eb7e1525a52","url":"docs/next/modules/visualisation/index.html"},{"revision":"448badd23bca06332fa88f59fca19281","url":"docs/next/modules/visualisation/user-guide/index.html"},{"revision":"b620170019656a287bbe042610fc30e1","url":"index.html"},{"revision":"92e8fedb8c50fe7462624f1937c6135a","url":"manifest.json"},{"revision":"20c4c56d87d73c5fb63d1900ac7bc88b","url":"assets/images/architecture-81e9840c02b65390032520a2ab57d9e5.svg"},{"revision":"65fd4166d50c3a7bbba520ce99f00356","url":"assets/images/data-inheritance-08824a4da6e173f96b7ac9ff945db24d.svg"},{"revision":"c3c3df64325700f73297731bb837e92b","url":"assets/images/demo-1bfde2ef29c21f9a1398a5bc99292b08.png"},{"revision":"0653b0270f80e7ac6c6fc60b2a438218","url":"assets/images/flow-2fcaabf70941e5a8b298646aa61385b7.svg"},{"revision":"20c4c56d87d73c5fb63d1900ac7bc88b","url":"img/architecture.svg"},{"revision":"9d25c99b1359eee6cfe756cd27eee44d","url":"img/cse/authors/bamdad-sabbagh.jpeg"},{"revision":"0dd4885332becf1c41e64af5e4da70c8","url":"img/cse/authors/frederic-sebe.png"},{"revision":"808a122ea74801529602187a594899f7","url":"img/cse/authors/jeremy-rouch.jpeg"},{"revision":"45060b9909e36267813724b2a2fe6a74","url":"img/cse/authors/lana-minier.jpeg"},{"revision":"230c39fc4f290ab2a73b0d7c5ef36007","url":"img/cse/authors/nicolas-mathevon.jpeg"},{"revision":"8ca7648571bd17394b5844debb2d984c","url":"img/cse/authors/remi-emonet.jpg"},{"revision":"dadaa564f112256a11c9ace09744b1a6","url":"img/cse/sponsors/ecole-pratique-hautes-etudes.png"},{"revision":"def71edfa122a2e154b82fe2ace99d43","url":"img/cse/sponsors/institut-universitaire-france.png"},{"revision":"e5afdfa93f5e4f0c492bc835864a224c","url":"img/cse/sponsors/labex-celya.svg"},{"revision":"b3a78823d6e4ab9a30434f7e2331c7d0","url":"img/cse/sponsors/laboratoire-hubert-curien.svg"},{"revision":"8d56a641d01b811901abba236d3801bd","url":"img/cse/sponsors/office-francais-biodiversite.png"},{"revision":"09c9fa1b1f643fdf099349f4d8fec5ba","url":"img/cse/sponsors/saint-etienne-metropole.png"},{"revision":"1b0306106abdc0329ea67082e83940d1","url":"img/cse/sponsors/universite-jean-monnet.png"},{"revision":"65fd4166d50c3a7bbba520ce99f00356","url":"img/data-inheritance.svg"},{"revision":"c3c3df64325700f73297731bb837e92b","url":"img/demo.png"},{"revision":"0653b0270f80e7ac6c6fc60b2a438218","url":"img/flow.svg"},{"revision":"f759aa942ae741fe028abac0c7720511","url":"img/logo-cse.svg"},{"revision":"68d0534f0d92d8d5ee0f93a293c33852","url":"img/logo.ico"},{"revision":"a483aecd1259b3d5b6f8b4640e9133a8","url":"img/logo.png"},{"revision":"37df8de86cf574a428b5d5ef3037cf1e","url":"img/logo.svg"},{"revision":"f2090d740ed96c902c75c41de916b8b0","url":"img/undraw_data_processing_yrrv.svg"},{"revision":"397308d374f0c238969a378bc9785b3a","url":"img/undraw_spreadsheets_re_alt0.svg"},{"revision":"e18535880f2cf03118dadc17d1da1fe1","url":"img/undraw_winter_designer_a-2-m7.svg"},{"revision":"0062bf1cab808369fb574e2da7e02c0a","url":"assets/fonts/jetbrains-mono-latin-400-normal-2fe080a3bf49bdc12fcb3e1838e1f50c.woff2"},{"revision":"354aceff703fbf0797d247cb31e1d807","url":"assets/fonts/jetbrains-mono-latin-400-normal-c226d7283d0d52c2d32c67abdde1f10e.woff"},{"revision":"717f9057150fafd32e39661dc7cd7425","url":"assets/fonts/merriweather-cyrillic-400-normal-2e7c71643f6e0e4c1e73f28a7a1798e6.woff"},{"revision":"cf40598b1eb2a76672c2e704901b59d6","url":"assets/fonts/merriweather-cyrillic-400-normal-fde0b55efc50742fb57fbebbb11c572f.woff2"},{"revision":"63319b42833639824ca3d45c1f343d3b","url":"assets/fonts/merriweather-cyrillic-ext-400-normal-2a880e22b1b888ab54652a36d43b7f16.woff2"},{"revision":"a4ae5cb9dbe02cc6f94841df0729514e","url":"assets/fonts/merriweather-cyrillic-ext-400-normal-7d8546944154663cc54693d15bb31721.woff"},{"revision":"9141c3f9a696074f62f98d090cb94678","url":"assets/fonts/merriweather-latin-400-normal-2c455928024d0ee049d896a25f9e30e1.woff"},{"revision":"2bfde17b9a1384ce64af78db1b87a82f","url":"assets/fonts/merriweather-latin-400-normal-e009f21405b4d7e893674b69deb4cf4a.woff2"},{"revision":"73d7be7e72e71728515248dda266c095","url":"assets/fonts/merriweather-latin-ext-400-normal-4657f5ab02d5923d223f96a9155a9bdc.woff2"},{"revision":"1fae11a03d2f4709959da7b13cbd1abc","url":"assets/fonts/merriweather-latin-ext-400-normal-7b1ee735b2541bc831bd57bacecc9d41.woff"}];
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