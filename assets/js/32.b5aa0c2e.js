"use strict";
exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 25032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mdTransitionAnimation: () => (/* binding */ mdTransitionAnimation)
/* harmony export */ });
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8120);
/* harmony import */ var _index2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48712);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const mdTransitionAnimation = (_, opts) => {
    var _a, _b, _c;
    const OFF_BOTTOM = '40px';
    const CENTER = '0px';
    const backDirection = opts.direction === 'back';
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const ionPageElement = (0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.g)(enteringEl);
    const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
    const rootTransition = (0,_animation_js__WEBPACK_IMPORTED_MODULE_1__.c)();
    rootTransition.addElement(ionPageElement).fill('both').beforeRemoveClass('ion-page-invisible');
    // animate the component itself
    if (backDirection) {
        rootTransition.duration(((_a = opts.duration) !== null && _a !== void 0 ? _a : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition
            .duration(((_b = opts.duration) !== null && _b !== void 0 ? _b : 0) || 280)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .fromTo('transform', `translateY(${OFF_BOTTOM})`, `translateY(${CENTER})`)
            .fromTo('opacity', 0.01, 1);
    }
    // Animate toolbar if it's there
    if (enteringToolbarEle) {
        const enteringToolBar = (0,_animation_js__WEBPACK_IMPORTED_MODULE_1__.c)();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.addAnimation(enteringToolBar);
    }
    // setup leaving view
    if (leavingEl && backDirection) {
        // leaving content
        rootTransition.duration(((_c = opts.duration) !== null && _c !== void 0 ? _c : 0) || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
        const leavingPage = (0,_animation_js__WEBPACK_IMPORTED_MODULE_1__.c)();
        leavingPage
            .addElement((0,_index2_js__WEBPACK_IMPORTED_MODULE_0__.g)(leavingEl))
            .onFinish((currentStep) => {
            if (currentStep === 1 && leavingPage.elements.length > 0) {
                leavingPage.elements[0].style.setProperty('display', 'none');
            }
        })
            .fromTo('transform', `translateY(${CENTER})`, `translateY(${OFF_BOTTOM})`)
            .fromTo('opacity', 1, 0);
        rootTransition.addAnimation(leavingPage);
    }
    return rootTransition;
};




/***/ })

};
;