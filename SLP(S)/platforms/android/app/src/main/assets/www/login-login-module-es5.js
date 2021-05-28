function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-content padding='true' class=\"vertical-center\">\r\n    <br><br><br><br><br><br><br><br>\r\n  <div class=\"center\">\r\n  <!-- <img src=\"assets/images/logo.jpg\" class=\"smallLogo\"/> -->\r\n  <h1>Student Learning Platform</h1>\r\n  </div>\r\n  <br>\r\n  <form>\r\n  <ion-list>\r\n  <ion-item>\r\n  <ion-label position=\"stacked\">Username</ion-label>\r\n  <ion-input autocomplete=\"off\" type=\"text\" name=\"username\" [(ngModel)]=\"postData.Username\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n  <ion-label position=\"stacked\">Password</ion-label>\r\n  <ion-input autocomplete=\"off\" [type]=\"showPassword3 ? 'text': 'password'\" name=\"password\" [(ngModel)]=\"postData.Password\"></ion-input>\r\n  <ion-icon slot=\"end\" [name]=\"passwordToggleIcon3\" (click)=\"togglePassword3()\"></ion-icon>\r\n</ion-item>\r\n<div class=\"forgot\">\r\n  <p (click)=\"OpenEmailComposer()\">Forgot?</p></div>\r\n<br>\r\n<br>\r\n  <div class=\"button\" div class=\"center\">\r\n    <ion-button class=\"ionbutton\" style=\"color:white\" (click)=\"Login()\" routerDirection=\"root\">Sign In</ion-button>\r\n      <ion-button (click)=\"openCamera()\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-button>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <p class=\"center1\" (click)=\"signin()\" style=\"margin:auto; text-align:center; display:block;\">Sign Up An Account?</p>\r\n  </ion-list>\r\n  \r\n  </form>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  text-align: center;\n}\n\n.forgot {\n  text-align: right;\n  padding: 10px;\n  color: gray;\n}\n\n.vertical-center {\n  display: flex;\n  align-items: center;\n}\n\n.button {\n  font-family: \"Roboto\";\n  padding: 1000;\n}\n\nh1 {\n  font: #3f434b #3f434b;\n}\n\n.center1 {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  align-self: center;\n}\n\n.ionbutton {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxEYW5hZVxcRGVza3RvcFxcRllQSlxcSW9uaWNGUC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUVRLGFBQUE7RUFDQSxtQkFBQTtBQ0NSOztBRElBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBRUksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9yZ290IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBwYWRkaW5nOiAxMDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250OiAjM2Y0MzRiKHJnYig2Myw2Nyw3NSkpO1xyXG59XHJcblxyXG4uY2VudGVyMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmlvbmJ1dHRvbiB7XHJcbiAgICAvLyAtLXdpZHRoOiA1MDBweDtcclxuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTAwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMDBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAiLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9yZ290IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4udmVydGljYWwtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBwYWRkaW5nOiAxMDAwO1xufVxuXG5oMSB7XG4gIGZvbnQ6ICMzZjQzNGIgIzNmNDM0Yjtcbn1cblxuLmNlbnRlcjEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmlvbmJ1dHRvbiB7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _model_global_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../model/global-api */
    "./src/app/model/global-api.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_assignments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/assignments.service */
    "./src/app/services/assignments.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(alertController, loadingController, router, platform, storage, nativeHttp, toastService, assignmentsService, composer, camera) {
        _classCallCheck(this, LoginPage);

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

      _createClass(LoginPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called! in login');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "togglePassword3",
        value: function togglePassword3() {
          this.showPassword3 = !this.showPassword3;

          if (this.passwordToggleIcon3 == "eye") {
            this.passwordToggleIcon3 = 'eye-off';
          } else {
            this.passwordToggleIcon3 = 'eye';
          }
        }
      }, {
        key: "signin",
        value: function signin() {
          this.router.navigateByUrl('/signup');
        }
      }, {
        key: "OpenEmailComposer",
        value: function OpenEmailComposer() {
          this.composer.open({
            to: 'fypups2020@gmail.com'
          });
        }
      }, {
        key: "Login",
        value: function Login() {
          if (this.postData.Username == "" && this.postData.Password == "") {
            this.toastService.presentToast('Please enter username and password.');
          } else if (this.postData.Username == "") {
            this.toastService.presentToast('Please enter username.');
          } else if (this.postData.Password == "") {
            this.toastService.presentToast('Please enter password.');
          } else {
            this.AuthLogin();
          }
        }
      }, {
        key: "AuthLogin",
        value: function AuthLogin() {
          var _this = this;

          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_5__["apiurl"].apiUrl + 'student/login', {
            "Username": this.postData.Username,
            "Password": this.postData.Password
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      response.data = JSON.parse(response.data);
                      console.log(response.data);
                      this.storage.set('authlogin', response.data);
                      this.postData.Username = '';
                      this.postData.Password = '';
                      _context.next = 8;
                      return this.alertController.create({
                        header: 'Sign In',
                        // subHeader: 'Sub Alert',
                        message: 'Login Successful!',
                        buttons: [{
                          text: 'Okay',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('You clicked me');

                            _this2.router.navigateByUrl('/tabs/main');
                          }
                        }]
                      });

                    case 8:
                      alert = _context.sent;
                      _context.next = 11;
                      return alert.present();

                    case 11:
                      _context.next = 18;
                      break;

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](0);
                      console.error(_context.t0);
                      console.log("Not a valid account! Wrong details entered!");
                      this.toastService.presentToast('Please enter correct details!');

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 13]]);
            }));
          })["catch"](function (response) {
            // prints 403
            console.log(response.status); // prints Permission denied

            console.log(response.error);

            _this.assignmentsService.presentError();
          });
        } //Loading Pop up

      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Please Wait',
                      cssClass: 'custom-class custom-loading',
                      duration: 60000,
                      backdropDismiss: false
                    });

                  case 2:
                    this.loading = _context2.sent;
                    _context2.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openCamera",
        value: function openCamera() {
          var _this3 = this;

          var cameraOptions = {
            saveToPhotoAlbum: false,
            cameraDirection: 1,
            destinationType: 0,
            quality: 10
          };
          this.camera.getPicture(cameraOptions).then(function (imageData) {
            _this3.presentLoading();

            console.log(imageData);

            _this3.faceapiCall(imageData).then(function (resp) {
              _this3.loading.dismiss();

              console.log(resp); // this if statement just checks whether the response from the api
              // says if there is a face or not.

              if (resp._label == "azim") {
                _this3.postData.Username = "john";
                _this3.postData.Password = "Pwd123";

                _this3.AuthLogin();
              } else if (resp._label) {
                _this3.toastService.presentToast("Face detected but not recognised.");
              } else {
                _this3.toastService.presentToast("No faces detected in image.");
              }
            });
          }, function (err) {
            console.log("Camera issue:" + err);
          });
        }
      }, {
        key: "faceapiCall",
        value: function faceapiCall(imageData) {
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
          return fetch(proxyUrl + apiUrl, requestOptions).then(function (resp) {
            return resp.json();
          })["catch"](function (error) {
            return console.log('error: ', error);
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_9__["AssignmentsService"]
      }, {
        type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  },

  /***/
  "./src/app/services/toast.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/toast.service.ts ***!
    \*******************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService(toastController) {
        _classCallCheck(this, ToastService);

        this.toastController = toastController;
      }

      _createClass(ToastService, [{
        key: "presentToast",
        value: function presentToast(infoMessage) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: infoMessage,
                      duration: 2000
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ToastService;
    }();

    ToastService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToastService);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map