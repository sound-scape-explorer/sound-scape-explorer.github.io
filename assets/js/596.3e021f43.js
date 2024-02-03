"use strict";
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 94596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createSwipeBackGesture: () => (/* binding */ createSwipeBackGesture)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@ionic+core@7.7.0/node_modules/@ionic/core/components/helpers.js
var helpers = __webpack_require__(81376);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ionic+core@7.7.0/node_modules/@ionic/core/components/dir.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = (hostEl) => {
    if (hostEl) {
        if (hostEl.dir !== '') {
            return hostEl.dir.toLowerCase() === 'rtl';
        }
    }
    return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@ionic+core@7.7.0/node_modules/@ionic/core/components/gesture-controller.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class GestureController {
    constructor() {
        this.gestureId = 0;
        this.requestedStart = new Map();
        this.disabledGestures = new Map();
        this.disabledScroll = new Set();
    }
    /**
     * Creates a gesture delegate based on the GestureConfig passed
     */
    createGesture(config) {
        var _a;
        return new GestureDelegate(this, this.newID(), config.name, (_a = config.priority) !== null && _a !== void 0 ? _a : 0, !!config.disableScroll);
    }
    /**
     * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
     */
    createBlocker(opts = {}) {
        return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
    }
    start(gestureName, id, priority) {
        if (!this.canStart(gestureName)) {
            this.requestedStart.delete(id);
            return false;
        }
        this.requestedStart.set(id, priority);
        return true;
    }
    capture(gestureName, id, priority) {
        if (!this.start(gestureName, id, priority)) {
            return false;
        }
        const requestedStart = this.requestedStart;
        let maxPriority = -10000;
        requestedStart.forEach((value) => {
            maxPriority = Math.max(maxPriority, value);
        });
        if (maxPriority === priority) {
            this.capturedId = id;
            requestedStart.clear();
            const event = new CustomEvent('ionGestureCaptured', { detail: { gestureName } });
            document.dispatchEvent(event);
            return true;
        }
        requestedStart.delete(id);
        return false;
    }
    release(id) {
        this.requestedStart.delete(id);
        if (this.capturedId === id) {
            this.capturedId = undefined;
        }
    }
    disableGesture(gestureName, id) {
        let set = this.disabledGestures.get(gestureName);
        if (set === undefined) {
            set = new Set();
            this.disabledGestures.set(gestureName, set);
        }
        set.add(id);
    }
    enableGesture(gestureName, id) {
        const set = this.disabledGestures.get(gestureName);
        if (set !== undefined) {
            set.delete(id);
        }
    }
    disableScroll(id) {
        this.disabledScroll.add(id);
        if (this.disabledScroll.size === 1) {
            document.body.classList.add(BACKDROP_NO_SCROLL);
        }
    }
    enableScroll(id) {
        this.disabledScroll.delete(id);
        if (this.disabledScroll.size === 0) {
            document.body.classList.remove(BACKDROP_NO_SCROLL);
        }
    }
    canStart(gestureName) {
        if (this.capturedId !== undefined) {
            // a gesture already captured
            return false;
        }
        if (this.isDisabled(gestureName)) {
            return false;
        }
        return true;
    }
    isCaptured() {
        return this.capturedId !== undefined;
    }
    isScrollDisabled() {
        return this.disabledScroll.size > 0;
    }
    isDisabled(gestureName) {
        const disabled = this.disabledGestures.get(gestureName);
        if (disabled && disabled.size > 0) {
            return true;
        }
        return false;
    }
    newID() {
        this.gestureId++;
        return this.gestureId;
    }
}
class GestureDelegate {
    constructor(ctrl, id, name, priority, disableScroll) {
        this.id = id;
        this.name = name;
        this.disableScroll = disableScroll;
        this.priority = priority * 1000000 + id;
        this.ctrl = ctrl;
    }
    canStart() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.canStart(this.name);
    }
    start() {
        if (!this.ctrl) {
            return false;
        }
        return this.ctrl.start(this.name, this.id, this.priority);
    }
    capture() {
        if (!this.ctrl) {
            return false;
        }
        const captured = this.ctrl.capture(this.name, this.id, this.priority);
        if (captured && this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
        return captured;
    }
    release() {
        if (this.ctrl) {
            this.ctrl.release(this.id);
            if (this.disableScroll) {
                this.ctrl.enableScroll(this.id);
            }
        }
    }
    destroy() {
        this.release();
        this.ctrl = undefined;
    }
}
class BlockerDelegate {
    constructor(ctrl, id, disable, disableScroll) {
        this.id = id;
        this.disable = disable;
        this.disableScroll = disableScroll;
        this.ctrl = ctrl;
    }
    block() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.disableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.disableScroll(this.id);
        }
    }
    unblock() {
        if (!this.ctrl) {
            return;
        }
        if (this.disable) {
            for (const gesture of this.disable) {
                this.ctrl.enableGesture(gesture, this.id);
            }
        }
        if (this.disableScroll) {
            this.ctrl.enableScroll(this.id);
        }
    }
    destroy() {
        this.unblock();
        this.ctrl = undefined;
    }
}
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll';
const GESTURE_CONTROLLER = new GestureController();



;// CONCATENATED MODULE: ./node_modules/.pnpm/@ionic+core@7.7.0/node_modules/@ionic/core/components/index3.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const addEventListener = (el, // TODO(FW-2832): type
eventName, callback, opts) => {
    // use event listener options when supported
    // otherwise it's just a boolean for the "capture" arg
    const listenerOpts = supportsPassive(el)
        ? {
            capture: !!opts.capture,
            passive: !!opts.passive,
        }
        : !!opts.capture;
    let add;
    let remove;
    if (el['__zone_symbol__addEventListener']) {
        add = '__zone_symbol__addEventListener';
        remove = '__zone_symbol__removeEventListener';
    }
    else {
        add = 'addEventListener';
        remove = 'removeEventListener';
    }
    el[add](eventName, callback, listenerOpts);
    return () => {
        el[remove](eventName, callback, listenerOpts);
    };
};
const supportsPassive = (node) => {
    if (_sPassive === undefined) {
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => {
                    _sPassive = true;
                },
            });
            node.addEventListener('optsTest', () => {
                return;
            }, opts);
        }
        catch (e) {
            _sPassive = false;
        }
    }
    return !!_sPassive;
};
let _sPassive;

const MOUSE_WAIT = 2000;
// TODO(FW-2832): types
const createPointerEvents = (el, pointerDown, pointerMove, pointerUp, options) => {
    let rmTouchStart;
    let rmTouchMove;
    let rmTouchEnd;
    let rmTouchCancel;
    let rmMouseStart;
    let rmMouseMove;
    let rmMouseUp;
    let lastTouchEvent = 0;
    const handleTouchStart = (ev) => {
        lastTouchEvent = Date.now() + MOUSE_WAIT;
        if (!pointerDown(ev)) {
            return;
        }
        if (!rmTouchMove && pointerMove) {
            rmTouchMove = addEventListener(el, 'touchmove', pointerMove, options);
        }
        /**
         * Events are dispatched on the element that is tapped and bubble up to
         * the reference element in the gesture. In the event that the element this
         * event was first dispatched on is removed from the DOM, the event will no
         * longer bubble up to our reference element. This leaves the gesture in an
         * unusable state. To account for this, the touchend and touchcancel listeners
         * should be added to the event target so that they still fire even if the target
         * is removed from the DOM.
         */
        if (!rmTouchEnd) {
            rmTouchEnd = addEventListener(ev.target, 'touchend', handleTouchEnd, options);
        }
        if (!rmTouchCancel) {
            rmTouchCancel = addEventListener(ev.target, 'touchcancel', handleTouchEnd, options);
        }
    };
    const handleMouseDown = (ev) => {
        if (lastTouchEvent > Date.now()) {
            return;
        }
        if (!pointerDown(ev)) {
            return;
        }
        if (!rmMouseMove && pointerMove) {
            rmMouseMove = addEventListener(getDocument(el), 'mousemove', pointerMove, options);
        }
        if (!rmMouseUp) {
            rmMouseUp = addEventListener(getDocument(el), 'mouseup', handleMouseUp, options);
        }
    };
    const handleTouchEnd = (ev) => {
        stopTouch();
        if (pointerUp) {
            pointerUp(ev);
        }
    };
    const handleMouseUp = (ev) => {
        stopMouse();
        if (pointerUp) {
            pointerUp(ev);
        }
    };
    const stopTouch = () => {
        if (rmTouchMove) {
            rmTouchMove();
        }
        if (rmTouchEnd) {
            rmTouchEnd();
        }
        if (rmTouchCancel) {
            rmTouchCancel();
        }
        rmTouchMove = rmTouchEnd = rmTouchCancel = undefined;
    };
    const stopMouse = () => {
        if (rmMouseMove) {
            rmMouseMove();
        }
        if (rmMouseUp) {
            rmMouseUp();
        }
        rmMouseMove = rmMouseUp = undefined;
    };
    const stop = () => {
        stopTouch();
        stopMouse();
    };
    const enable = (isEnabled = true) => {
        if (!isEnabled) {
            if (rmTouchStart) {
                rmTouchStart();
            }
            if (rmMouseStart) {
                rmMouseStart();
            }
            rmTouchStart = rmMouseStart = undefined;
            stop();
        }
        else {
            if (!rmTouchStart) {
                rmTouchStart = addEventListener(el, 'touchstart', handleTouchStart, options);
            }
            if (!rmMouseStart) {
                rmMouseStart = addEventListener(el, 'mousedown', handleMouseDown, options);
            }
        }
    };
    const destroy = () => {
        enable(false);
        pointerUp = pointerMove = pointerDown = undefined;
    };
    return {
        enable,
        stop,
        destroy,
    };
};
const getDocument = (node) => {
    return node instanceof Document ? node : node.ownerDocument;
};

const createPanRecognizer = (direction, thresh, maxAngle) => {
    const radians = maxAngle * (Math.PI / 180);
    const isDirX = direction === 'x';
    const maxCosine = Math.cos(radians);
    const threshold = thresh * thresh;
    let startX = 0;
    let startY = 0;
    let dirty = false;
    let isPan = 0;
    return {
        start(x, y) {
            startX = x;
            startY = y;
            isPan = 0;
            dirty = true;
        },
        detect(x, y) {
            if (!dirty) {
                return false;
            }
            const deltaX = x - startX;
            const deltaY = y - startY;
            const distance = deltaX * deltaX + deltaY * deltaY;
            if (distance < threshold) {
                return false;
            }
            const hypotenuse = Math.sqrt(distance);
            const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
            if (cosine > maxCosine) {
                isPan = 1;
            }
            else if (cosine < -maxCosine) {
                isPan = -1;
            }
            else {
                isPan = 0;
            }
            dirty = false;
            return true;
        },
        isGesture() {
            return isPan !== 0;
        },
        getDirection() {
            return isPan;
        },
    };
};

// TODO(FW-2832): types
const createGesture = (config) => {
    let hasCapturedPan = false;
    let hasStartedPan = false;
    let hasFiredStart = true;
    let isMoveQueued = false;
    const finalConfig = Object.assign({ disableScroll: false, direction: 'x', gesturePriority: 0, passive: true, maxAngle: 40, threshold: 10 }, config);
    const canStart = finalConfig.canStart;
    const onWillStart = finalConfig.onWillStart;
    const onStart = finalConfig.onStart;
    const onEnd = finalConfig.onEnd;
    const notCaptured = finalConfig.notCaptured;
    const onMove = finalConfig.onMove;
    const threshold = finalConfig.threshold;
    const passive = finalConfig.passive;
    const blurOnStart = finalConfig.blurOnStart;
    const detail = {
        type: 'pan',
        startX: 0,
        startY: 0,
        startTime: 0,
        currentX: 0,
        currentY: 0,
        velocityX: 0,
        velocityY: 0,
        deltaX: 0,
        deltaY: 0,
        currentTime: 0,
        event: undefined,
        data: undefined,
    };
    const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
    const gesture = GESTURE_CONTROLLER.createGesture({
        name: config.gestureName,
        priority: config.gesturePriority,
        disableScroll: config.disableScroll,
    });
    const pointerDown = (ev) => {
        const timeStamp = now(ev);
        if (hasStartedPan || !hasFiredStart) {
            return false;
        }
        updateDetail(ev, detail);
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTime = detail.currentTime = timeStamp;
        detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
        detail.event = ev;
        // Check if gesture can start
        if (canStart && canStart(detail) === false) {
            return false;
        }
        // Release fallback
        gesture.release();
        // Start gesture
        if (!gesture.start()) {
            return false;
        }
        hasStartedPan = true;
        if (threshold === 0) {
            return tryToCapturePan();
        }
        pan.start(detail.startX, detail.startY);
        return true;
    };
    const pointerMove = (ev) => {
        // fast path, if gesture is currently captured
        // do minimum job to get user-land even dispatched
        if (hasCapturedPan) {
            if (!isMoveQueued && hasFiredStart) {
                isMoveQueued = true;
                calcGestureData(detail, ev);
                requestAnimationFrame(fireOnMove);
            }
            return;
        }
        // gesture is currently being detected
        calcGestureData(detail, ev);
        if (pan.detect(detail.currentX, detail.currentY)) {
            if (!pan.isGesture() || !tryToCapturePan()) {
                abortGesture();
            }
        }
    };
    const fireOnMove = () => {
        // Since fireOnMove is called inside a RAF, onEnd() might be called,
        // we must double check hasCapturedPan
        if (!hasCapturedPan) {
            return;
        }
        isMoveQueued = false;
        if (onMove) {
            onMove(detail);
        }
    };
    const tryToCapturePan = () => {
        if (!gesture.capture()) {
            return false;
        }
        hasCapturedPan = true;
        hasFiredStart = false;
        // reset start position since the real user-land event starts here
        // If the pan detector threshold is big, not resetting the start position
        // will cause a jump in the animation equal to the detector threshold.
        // the array of positions used to calculate the gesture velocity does not
        // need to be cleaned, more points in the positions array always results in a
        // more accurate value of the velocity.
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTime = detail.currentTime;
        if (onWillStart) {
            onWillStart(detail).then(fireOnStart);
        }
        else {
            fireOnStart();
        }
        return true;
    };
    const blurActiveElement = () => {
        if (typeof document !== 'undefined') {
            const activeElement = document.activeElement;
            if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur) {
                activeElement.blur();
            }
        }
    };
    const fireOnStart = () => {
        if (blurOnStart) {
            blurActiveElement();
        }
        if (onStart) {
            onStart(detail);
        }
        hasFiredStart = true;
    };
    const reset = () => {
        hasCapturedPan = false;
        hasStartedPan = false;
        isMoveQueued = false;
        hasFiredStart = true;
        gesture.release();
    };
    // END *************************
    const pointerUp = (ev) => {
        const tmpHasCaptured = hasCapturedPan;
        const tmpHasFiredStart = hasFiredStart;
        reset();
        if (!tmpHasFiredStart) {
            return;
        }
        calcGestureData(detail, ev);
        // Try to capture press
        if (tmpHasCaptured) {
            if (onEnd) {
                onEnd(detail);
            }
            return;
        }
        // Not captured any event
        if (notCaptured) {
            notCaptured(detail);
        }
    };
    const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
        capture: false,
        passive,
    });
    const abortGesture = () => {
        reset();
        pointerEvents.stop();
        if (notCaptured) {
            notCaptured(detail);
        }
    };
    return {
        enable(enable = true) {
            if (!enable) {
                if (hasCapturedPan) {
                    pointerUp(undefined);
                }
                reset();
            }
            pointerEvents.enable(enable);
        },
        destroy() {
            gesture.destroy();
            pointerEvents.destroy();
        },
    };
};
const calcGestureData = (detail, ev) => {
    if (!ev) {
        return;
    }
    const prevX = detail.currentX;
    const prevY = detail.currentY;
    const prevT = detail.currentTime;
    updateDetail(ev, detail);
    const currentX = detail.currentX;
    const currentY = detail.currentY;
    const timestamp = (detail.currentTime = now(ev));
    const timeDelta = timestamp - prevT;
    if (timeDelta > 0 && timeDelta < 100) {
        const velocityX = (currentX - prevX) / timeDelta;
        const velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    detail.event = ev;
};
const updateDetail = (ev, detail) => {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    let x = 0;
    let y = 0;
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
        }
    }
    detail.currentX = x;
    detail.currentY = y;
};
const now = (ev) => {
    return ev.timeStamp || Date.now();
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@ionic+core@7.7.0/node_modules/@ionic/core/components/swipe-back.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
    const win = el.ownerDocument.defaultView;
    let rtl = isRTL(el);
    /**
     * Determine if a gesture is near the edge
     * of the screen. If true, then the swipe
     * to go back gesture should proceed.
     */
    const isAtEdge = (detail) => {
        const threshold = 50;
        const { startX } = detail;
        if (rtl) {
            return startX >= win.innerWidth - threshold;
        }
        return startX <= threshold;
    };
    const getDeltaX = (detail) => {
        return rtl ? -detail.deltaX : detail.deltaX;
    };
    const getVelocityX = (detail) => {
        return rtl ? -detail.velocityX : detail.velocityX;
    };
    const canStart = (detail) => {
        /**
         * The user's locale can change mid-session,
         * so we need to check text direction at
         * the beginning of every gesture.
         */
        rtl = isRTL(el);
        return isAtEdge(detail) && canStartHandler();
    };
    const onMove = (detail) => {
        // set the transition animation's progress
        const delta = getDeltaX(detail);
        const stepValue = delta / win.innerWidth;
        onMoveHandler(stepValue);
    };
    const onEnd = (detail) => {
        // the swipe back gesture has ended
        const delta = getDeltaX(detail);
        const width = win.innerWidth;
        const stepValue = delta / width;
        const velocity = getVelocityX(detail);
        const z = width / 2.0;
        const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
        const missing = shouldComplete ? 1 - stepValue : stepValue;
        const missingDistance = missing * width;
        let realDur = 0;
        if (missingDistance > 5) {
            const dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 540);
        }
        onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,helpers.m)(0, stepValue, 0.9999), realDur);
    };
    return createGesture({
        el,
        gestureName: 'goback-swipe',
        /**
         * Swipe to go back should have priority over other horizontal swipe
         * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
         */
        gesturePriority: 101,
        threshold: 10,
        canStart,
        onStart: onStartHandler,
        onMove,
        onEnd,
    });
};




/***/ })

};
;