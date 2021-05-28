function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-method-authentication-method-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationMethodAuthenticationMethodPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Student Learning Platform</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<link href=\"https://code.ionicframework.com/nightly/css/ionic.css\" rel=\"stylesheet\">\r\n\r\n<ion-content padding='true'>\r\n    <div class=\"container\">\r\n\r\n        <div style=\"margin: 30px\">\r\n            <p class=\"p\">Select Authentication Method</p>\r\n            <br>\r\n            <form class=\"container\" [formGroup]=\"loginForm\">\r\n\r\n                    <div class=\"form-group\">\r\n                      <ion-label position=\"stacked\">Phone <span style=\"color: red\">*</span></ion-label>\r\n                      <input id=\"numberTxt\" placeholder=\"Enter mobile number\" value=\"\" type=\"tel\" name=\"phoneNo\" />\r\n                    </div>\r\n                    <div class=\"error-messages\">\r\n                      <ng-container *ngFor=\"let error of error_messages.phoneNo\">\r\n                        <div class=\"error-message\" *ngIf=\"loginForm.get('phoneNo').hasError(error.type) && (loginForm.get('phoneNo').dirty || loginForm.get('phoneNo').touched)\">\r\n                          {{ error.message }}\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n\r\n                    <br>\r\n\r\n                    <div class=\"form-group\">\r\n                        <ion-label position=\"stacked\">Code Input <span style=\"color: red\">*</span></ion-label>\r\n                        <input id=\"messageTxt\" placeholder=\"Enter message\" value=\"\" type=\"text\" name=\"code\"/>\r\n                      </div>\r\n                      <div class=\"error-messages\">\r\n                        <ng-container *ngFor=\"let error of error_messages.code\">\r\n                          <div class=\"error-message\" *ngIf=\"loginForm.get('code').hasError(error.type) && (loginForm.get('code').dirty || loginForm.get('code').touched)\">\r\n                            {{ error.message }}\r\n                          </div>\r\n                        </ng-container>\r\n                      </div>\r\n\r\n                      <br>\r\n\r\n                      <ion-button class=\"form-control btn btn-primary\" share=\"round\" style=\"--background:#20a7c2\" (click)=\"sendSMS()\">Send SMS</ion-button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/authentication-method/authentication-method-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/authentication-method/authentication-method-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: AuthenticationMethodPageRoutingModule */

  /***/
  function srcAppPagesAuthenticationMethodAuthenticationMethodRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPageRoutingModule", function () {
      return AuthenticationMethodPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _authentication_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication-method.page */
    "./src/app/pages/authentication-method/authentication-method.page.ts");

    var routes = [{
      path: '',
      component: _authentication_method_page__WEBPACK_IMPORTED_MODULE_3__["AuthenticationMethodPage"]
    }];

    var AuthenticationMethodPageRoutingModule = function AuthenticationMethodPageRoutingModule() {
      _classCallCheck(this, AuthenticationMethodPageRoutingModule);
    };

    AuthenticationMethodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthenticationMethodPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/authentication-method/authentication-method.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/authentication-method/authentication-method.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AuthenticationMethodPageModule */

  /***/
  function srcAppPagesAuthenticationMethodAuthenticationMethodModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPageModule", function () {
      return AuthenticationMethodPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _authentication_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentication-method-routing.module */
    "./src/app/pages/authentication-method/authentication-method-routing.module.ts");
    /* harmony import */


    var _authentication_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authentication-method.page */
    "./src/app/pages/authentication-method/authentication-method.page.ts");

    var AuthenticationMethodPageModule = function AuthenticationMethodPageModule() {
      _classCallCheck(this, AuthenticationMethodPageModule);
    };

    AuthenticationMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _authentication_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMethodPageRoutingModule"]],
      declarations: [_authentication_method_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationMethodPage"]]
    })], AuthenticationMethodPageModule);
    /***/
  },

  /***/
  "./src/app/pages/authentication-method/authentication-method.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/authentication-method/authentication-method.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthenticationMethodAuthenticationMethodPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\n.p {\n  color: #1c91a8;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.ionbutton {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n}\n\n.error-message {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\nion-button {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n  color: white;\n}\n\n.form > input {\n  clear: right;\n}\n\n.form > ion-icon {\n  margin: -25px 100px;\n  float: right;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext .tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24tbWV0aG9kL0M6XFxVc2Vyc1xcRGFuYWVcXERlc2t0b3BcXEZZUEpcXElvbmljRlAvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoZW50aWNhdGlvbi1tZXRob2RcXGF1dGhlbnRpY2F0aW9uLW1ldGhvZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uLW1ldGhvZC9hdXRoZW50aWNhdGlvbi1tZXRob2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFFSSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDREo7O0FETUU7RUFDRSxVQUFBO0FDSEo7O0FES0U7RUFDRSxxQkFBQTtBQ0ZKOztBREtFO0VBRUUsd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPRTtFQUdBLFlBQUE7QUNORjs7QURTQTtFQUVFLG1CQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBc0JBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUM3QkY7O0FESXFCO0VBQ2pCLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7QUNKSjs7QURPRTtFQUNFLG1CQUFBO0FDTEo7O0FEYUE7RUFDRSxtQkFBQTtBQ1ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24tbWV0aG9kL2F1dGhlbnRpY2F0aW9uLW1ldGhvZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnAge1xyXG4gICAgY29sb3I6ICMxYzkxYTg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmlvbmJ1dHRvbiB7XHJcbiAgICAvLyAtLXdpZHRoOiA1MDBweDtcclxuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIC8vIHBhZGRpbmc6IDEwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgICAgLy8gLS13aWR0aDogNTAwcHg7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAvLyBwYWRkaW5nOiAxMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZm9ybSA+IGlucHV0XHJcbntcclxuICAvLyBmbG9hdDogbGVmdDtcclxuICBjbGVhcjogcmlnaHQ7XHJcbn1cclxuXHJcbi5mb3JtID4gaW9uLWljb25cclxue1xyXG4gIG1hcmdpbjogLTI1cHggMTAwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDsudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbiAgIiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucCB7XG4gIGNvbG9yOiAjMWM5MWE4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW9uYnV0dG9uIHtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC0tcGFkZGluZy1zdGFydDogMTAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtID4gaW5wdXQge1xuICBjbGVhcjogcmlnaHQ7XG59XG5cbi5mb3JtID4gaW9uLWljb24ge1xuICBtYXJnaW46IC0yNXB4IDEwMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IC50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbn1cbi50b29sdGlwIC50b29sdGlwdGV4dCAudG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG4udG9vbHRpcCAudG9vbHRpcHRleHQgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/authentication-method/authentication-method.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/authentication-method/authentication-method.page.ts ***!
    \***************************************************************************/

  /*! exports provided: AuthenticationMethodPage */

  /***/
  function srcAppPagesAuthenticationMethodAuthenticationMethodPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPage", function () {
      return AuthenticationMethodPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AuthenticationMethodPage = /*#__PURE__*/function () {
      function AuthenticationMethodPage(alertController, router, platform, storage, nativeHttp, composer) {
        _classCallCheck(this, AuthenticationMethodPage);

        this.alertController = alertController;
        this.router = router;
        this.platform = platform;
        this.storage = storage;
        this.nativeHttp = nativeHttp;
        this.composer = composer;
      }

      _createClass(AuthenticationMethodPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendSMS",
        value: function sendSMS() {
          var number = document.getElementById('numberTxt').value.toString();
          /* iOS: ensure number is actually a string */

          var message = document.getElementById('messageTxt').value;
          console.log("number=" + number + ", message= " + message); //CONFIGURATION

          var options = {
            replaceLineBreaks: false,
            android: {
              intent: 'INTENT' // send SMS with the native android SMS messaging
              //intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE

            }
          };

          var successMsg = function successMsg() {
            alert('Message sent successfully');
          };

          var errorMsg = function errorMsg(e) {
            alert('Message Failed:' + e);
          };

          var success = function success(hasPermission) {
            if (hasPermission) {
              this.sms.send(number, message, options, successMsg, errorMsg);
            } else if (!hasPermission) {
              this.sms.requestPermission(function () {
                console.log('[OK] Permission accepted');
              }, function (error) {
                console.info('[WARN] Permission not accepted'); // Handle permission not accepted
              });
            } else {
              console.log('[WARN] Permission needed for SMS'); // show a helpful message to explain why you need to require the permission to send a SMS
            }
          };

          var error = function error(e) {
            alert('Something went wrong:' + e);
          };

          this.sms.hasPermission(this.sendSMS, error);
        }
      }]);

      return AuthenticationMethodPage;
    }();

    AuthenticationMethodPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__["EmailComposer"]
      }];
    };

    AuthenticationMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentication-method',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./authentication-method.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./authentication-method.page.scss */
      "./src/app/pages/authentication-method/authentication-method.page.scss"))["default"]]
    })], AuthenticationMethodPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-authentication-method-authentication-method-module-es5.js.map