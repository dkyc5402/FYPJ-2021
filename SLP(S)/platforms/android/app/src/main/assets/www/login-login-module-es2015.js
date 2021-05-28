(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-content padding='true' class=\"vertical-center\">\r\n    <br><br><br><br><br><br><br><br>\r\n  <div class=\"center\">\r\n  <!-- <img src=\"assets/images/logo.jpg\" class=\"smallLogo\"/> -->\r\n  <h1>Student Learning Platform</h1>\r\n  </div>\r\n  <br>\r\n  <form>\r\n  <ion-list>\r\n  <ion-item>\r\n  <ion-label position=\"stacked\">Username</ion-label>\r\n  <ion-input autocomplete=\"off\" type=\"text\" name=\"username\" [(ngModel)]=\"postData.Username\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n  <ion-label position=\"stacked\">Password</ion-label>\r\n  <ion-input autocomplete=\"off\" [type]=\"showPassword3 ? 'text': 'password'\" name=\"password\" [(ngModel)]=\"postData.Password\"></ion-input>\r\n  <ion-icon slot=\"end\" [name]=\"passwordToggleIcon3\" (click)=\"togglePassword3()\"></ion-icon>\r\n</ion-item>\r\n<div class=\"forgot\">\r\n  <p (click)=\"OpenEmailComposer()\">Forgot?</p></div>\r\n<br>\r\n<br>\r\n  <div class=\"button\" div class=\"center\">\r\n    <ion-button class=\"ionbutton\" style=\"color:white\" (click)=\"Login()\" routerDirection=\"root\">Sign In</ion-button>\r\n      <ion-button (click)=\"openCamera()\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-button>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <p class=\"center1\" (click)=\"signin()\" style=\"margin:auto; text-align:center; display:block;\">Sign Up An Account?</p>\r\n  </ion-list>\r\n  \r\n  </form>\r\n  </ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.forgot {\n  text-align: right;\n  padding: 10px;\n  color: gray;\n}\n\n.vertical-center {\n  display: flex;\n  align-items: center;\n}\n\n.button {\n  font-family: \"Roboto\";\n  padding: 1000;\n}\n\nh1 {\n  font: #3f434b #3f434b;\n}\n\n.center1 {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  align-self: center;\n}\n\n.ionbutton {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxEYW5hZVxcRGVza3RvcFxcRllQSlxcSW9uaWNGUC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUVRLGFBQUE7RUFDQSxtQkFBQTtBQ0NSOztBRElBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBRUksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9yZ290IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBwYWRkaW5nOiAxMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250OiAjM2Y0MzRiKHJnYig2Myw2Nyw3NSkpO1xyXG59XHJcblxyXG4uY2VudGVyMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmlvbmJ1dHRvbiB7XHJcbiAgICAvLyAtLXdpZHRoOiA1MDBweDtcclxuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMDBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAiLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9yZ290IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4udmVydGljYWwtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBwYWRkaW5nOiAxMDAwO1xufVxuXG5oMSB7XG4gIGZvbnQ6ICMzZjQzNGIgIzNmNDM0Yjtcbn1cblxuLmNlbnRlcjEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmlvbmJ1dHRvbiB7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");












let LoginPage = class LoginPage {
    constructor(alertController, loadingController, router, platform, storage, nativeHttp, toastService, assignmentsService, composer, camera) {
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.platform = platform;
        this.storage = storage;
        this.nativeHttp = nativeHttp;
        this.toastService = toastService;
        this.assignmentsService = assignmentsService;
        this.composer = composer;
        this.camera = camera;
        this.showPassword3 = false;
        this.passwordToggleIcon3 = "eye";
        this.postData = {
            Username: '',
            Password: ''
        };
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called! in login');
        });
    }
    ngOnInit() {
    }
    togglePassword3() {
        this.showPassword3 = !this.showPassword3;
        if (this.passwordToggleIcon3 == "eye") {
            this.passwordToggleIcon3 = 'eye-off';
        }
        else {
            this.passwordToggleIcon3 = 'eye';
        }
    }
    signin() {
        this.router.navigateByUrl('/signup');
    }
    OpenEmailComposer() {
        this.composer.open({
            to: 'fypups2020@gmail.com'
        });
    }
    Login() {
        if (this.postData.Username == "" && this.postData.Password == "") {
            this.toastService.presentToast('Please enter username and password.');
        }
        else if (this.postData.Username == "") {
            this.toastService.presentToast('Please enter username.');
        }
        else if (this.postData.Password == "") {
            this.toastService.presentToast('Please enter password.');
        }
        else {
            this.AuthLogin();
        }
    }
    AuthLogin() {
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_5__["apiurl"].apiUrl + 'student/login', {
            "Username": this.postData.Username,
            "Password": this.postData.Password
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                response.data = JSON.parse(response.data);
                console.log(response.data);
                this.storage.set('authlogin', response.data);
                this.postData.Username = '';
                this.postData.Password = '';
                const alert = yield this.alertController.create({
                    header: 'Sign In',
                    // subHeader: 'Sub Alert',
                    message: 'Login Successful!',
                    buttons: [{
                            text: 'Okay',
                            role: 'cancel',
                            handler: () => {
                                console.log('You clicked me');
                                this.router.navigateByUrl('/tabs/main');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (e) {
                console.error(e);
                console.log("Not a valid account! Wrong details entered!");
                this.toastService.presentToast('Please enter correct details!');
            }
        }))
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.assignmentsService.presentError();
        });
    }
    //Loading Pop up
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Prepare a loading controller
            this.loading = yield this.loadingController.create({
                message: 'Please Wait',
                cssClass: 'custom-class custom-loading',
                duration: 60000,
                backdropDismiss: false
            });
            // Present the loading controller
            yield this.loading.present();
        });
    }
    openCamera() {
        const cameraOptions = {
            saveToPhotoAlbum: false,
            cameraDirection: 1,
            destinationType: 0,
            quality: 10
        };
        this.camera.getPicture(cameraOptions).then((imageData) => {
            this.presentLoading();
            console.log(imageData);
            this.faceapiCall(imageData).then((resp) => {
                this.loading.dismiss();
                console.log(resp);
                // this if statement just checks whether the response from the api
                // says if there is a face or not.
                if (resp._label == "azim") {
                    this.postData.Username = "john";
                    this.postData.Password = "Pwd123";
                    this.AuthLogin();
                }
                else if (resp._label) {
                    this.toastService.presentToast("Face detected but not recognised.");
                }
                else {
                    this.toastService.presentToast("No faces detected in image.");
                }
            });
        }, (err) => {
            console.log("Camera issue:" + err);
        });
    }
    faceapiCall(imageData) {
        // https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
        var proxyUrl = "https://serene-shelf-84252.herokuapp.com/"; //proxy for CORS
        var apiUrl = "https://stark-shore-14544.herokuapp.com/face";
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var jsonData = {
            face: imageData
        };
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(jsonData),
            redirect: 'follow'
        };
        return fetch(proxyUrl + apiUrl, requestOptions)
            .then(resp => resp.json())
            .catch(error => console.log('error: ', error));
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_9__["AssignmentsService"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(infoMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map