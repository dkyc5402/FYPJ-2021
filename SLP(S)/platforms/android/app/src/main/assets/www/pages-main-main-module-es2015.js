(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-header></app-main-header>\r\n<ion-content>\r\n  <div class=\"maincontent\">\r\n  <ion-grid class=\"center\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <button (click)=\"InitiateSession()\"><img src=\"assets/images/enrollment.png\" alt=\"Initiate Session\"></button>\r\n          <div style=\"font-size: large;\">Request Tuition</div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div>\r\n          <button (click)=\"JoinSession()\"><img src=\"assets/images/html.png\" alt=\"Join Session\"></button>\r\n          <div style=\"font-size: large;\">Join Session</div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <button (click)=\"MySession()\"><img src=\"assets/images/assignment.png\" alt=\"My Session\"><br/></button><span></span>\r\n          <div style=\"font-size: large;\">My Sessions</div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div>\r\n          <button (click)=\"Help()\"><img src=\"assets/images/question.png\" alt=\"Help\"><br/></button>\r\n          <div style=\"font-size: large;\">Help</div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/main/main-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/main/main-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/pages/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");








let MainPageModule = class MainPageModule {
};
MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/pages/main/main.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  background-color: transparent;\n}\n\nbutton:hover:active {\n  border: solid #e5741f 0.5em;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxJb25pY0ZQL3NyY1xcYXBwXFxwYWdlc1xcbWFpblxcbWFpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKOztBRENFO0VBQ0UsMkJBQUE7QUNFSjs7QURBRTtFQUVFLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGJ1dHRvbjpob3ZlcjphY3RpdmV7XHJcbiAgICBib3JkZXI6c29saWQgI2U1NzQxZiAwLjVlbTtcclxuICB9XHJcbiAgLmNlbnRlclxyXG4gIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAiLCJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYnV0dG9uOmhvdmVyOmFjdGl2ZSB7XG4gIGJvcmRlcjogc29saWQgI2U1NzQxZiAwLjVlbTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/main/main.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let MainPage = class MainPage {
    constructor(router, platform, globalService) {
        this.router = router;
        this.platform = platform;
        this.globalService = globalService;
    }
    ngOnInit() {
        this.globalService.GenerateLoginInfo();
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/main');
        });
        console.log('the platform height is ' + this.platform.height());
        console.log('student id :', this.studentid);
    }
    InitiateSession() {
        this.router.navigateByUrl('tabs/session-view/session-initiate');
    }
    JoinSession() {
        this.router.navigateByUrl('tabs/session-view/session-join');
    }
    MySession() {
        this.router.navigateByUrl('tabs/session-view/session-my');
    }
    Help() {
        this.router.navigateByUrl('tabs/support/logout');
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
];
MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/main/main.page.scss")).default]
    })
], MainPage);



/***/ })

}]);
//# sourceMappingURL=pages-main-main-module-es2015.js.map