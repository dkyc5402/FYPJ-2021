function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedModulePopoverParticipantInvitePopoverParticipantInvitePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <h2 class=\"title\" style=\"font-size: large;padding:2%;\"><b>Invite Friends</b><ion-icon style=\"float: right;\" src=\"assets/images/pop-up-cross.svg\" (click)=\"closePopover()\"></ion-icon> </h2>\r\n</ion-header>\r\n<div style=\"display: flex; justify-content: center;align-items: center;padding:2%\">{{displayaddedparticipants}}</div>\r\n<div style=\"display: flex; justify-content: center;align-items: center;\"><button class=\"popoverinvitebutton\" (click)=\"invitefriends()\"><b>Invite Friend</b></button></div>\r\n<ion-content>\r\n  \r\n  <h2 class=\"title\"><ion-searchbar [(ngModel)]=\"searchParticipant\" animated=\"true\"></ion-searchbar></h2>\r\n   <div class=\"container\" *ngFor=\"let participant of textdisplayparticipant| filter:searchParticipant\">\r\n      <div class=\"popovercss\" *ngIf=\"participant.toBeInvited==='N'\">\r\n       ({{participant.levelInfo_DisplayName}}) <b>{{participant.username}}</b><label (click) = \"AddParticipant(participant)\" *ngIf=\"participant.toBeInvited==='N'\" class=\"popoveraddlabel\">Add</label>\r\n      </div> \r\n    </div>\r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharedModulePopoverParticipantInvitePopoverParticipantInvitePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 0 4% 0 4%;\n}\n\nion-toolbar {\n  --min-height:0px!important;\n}\n\n.popoverinvitebutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.popoveraddlabel {\n  color: black;\n  float: right;\n  padding: 0.1em;\n}\n\n.popovercss {\n  border: solid #000000;\n  background-color: white;\n  margin-bottom: 0.5em;\n  padding: 0.3em;\n}\n\n.popoveraddbutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  float: right;\n  padding: 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LWludml0ZS9DOlxcVXNlcnNcXERhbmFlXFxEZXNrdG9wXFxGWVBKXFxJb25pY0ZQL3NyY1xcYXBwXFxwYWdlc1xcc2hhcmVkLW1vZHVsZVxccG9wb3Zlci1wYXJ0aWNpcGFudC1pbnZpdGVcXHBvcG92ZXItcGFydGljaXBhbnQtaW52aXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LWludml0ZS9wb3BvdmVyLXBhcnRpY2lwYW50LWludml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsMEJBQUE7QUNFSjs7QURBRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0lGOztBREZBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0tGOztBREhBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LWludml0ZS9wb3BvdmVyLXBhcnRpY2lwYW50LWludml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDAgNCUgMCA0JTtcclxufVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1taW4taGVpZ2h0OjBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wb3BvdmVyaW52aXRlYnV0dG9ue1xyXG4gICAgYm9yZGVyOnNvbGlkIDAuMWVtIGJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxYzkxYTg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgfVxyXG4ucG9wb3ZlcmFkZGxhYmVse1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOjAuMWVtO1xyXG59XHJcbi5wb3BvdmVyY3Nze1xyXG4gIGJvcmRlcjpzb2xpZCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206MC41ZW07XHJcbiAgcGFkZGluZzowLjNlbTtcclxufVxyXG4ucG9wb3ZlcmFkZGJ1dHRvbntcclxuICBib3JkZXI6c29saWQgMC4xZW0gYmxhY2s7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWM5MWE4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOjAuMWVtO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgNCUgMCA0JTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6MHB4IWltcG9ydGFudDtcbn1cblxuLnBvcG92ZXJpbnZpdGVidXR0b24ge1xuICBib3JkZXI6IHNvbGlkIDAuMWVtIGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkxYTg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLnBvcG92ZXJhZGRsYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwLjFlbTtcbn1cblxuLnBvcG92ZXJjc3Mge1xuICBib3JkZXI6IHNvbGlkICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgcGFkZGluZzogMC4zZW07XG59XG5cbi5wb3BvdmVyYWRkYnV0dG9uIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjFlbSBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MWE4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDAuMWVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts ***!
    \***************************************************************************************************/

  /*! exports provided: PopoverParticipantInvitePage */

  /***/
  function srcAppPagesSharedModulePopoverParticipantInvitePopoverParticipantInvitePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverParticipantInvitePage", function () {
      return PopoverParticipantInvitePage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_assignments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/assignments.service */
    "./src/app/services/assignments.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _model_global_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../model/global-api */
    "./src/app/model/global-api.ts");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PopoverParticipantInvitePage = /*#__PURE__*/function () {
      function PopoverParticipantInvitePage(globalService, nativeHttp, router, assignmentsService, storage, popoverController) {
        _classCallCheck(this, PopoverParticipantInvitePage);

        this.globalService = globalService;
        this.nativeHttp = nativeHttp;
        this.router = router;
        this.assignmentsService = assignmentsService;
        this.storage = storage;
        this.popoverController = popoverController;
        this.data = [];
        this.searchParticipant = "";
        this.countaddedparticipant = 0;
        this.displayaddedparticipants = this.countaddedparticipant + " Student(s) added";
      }

      _createClass(PopoverParticipantInvitePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.token = this.globalService.getselectedtoken();
          this.studentid = this.globalService.getselectedStudentId();
          this.CallAPISearchStudentsToInvite();
        }
        /*Get Search Students to Invite*/

      }, {
        key: "CallAPISearchStudentsToInvite",
        value: function CallAPISearchStudentsToInvite() {
          var _this = this;

          this.sessionid = this.assignmentsService.getselectedsessionid();
          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/searchStudents2Invite', {
            "Authentication_Token": this.token,
            "Student_Id": this.studentid,
            "Session_Id": this.sessionid
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            try {
              console.log('this is response data', response);
              response.data = JSON.parse(response.data);
              _this.textdisplayparticipant = response.data;
            } catch (e) {
              console.error('JSON parsing error plaese be patient');

              _this.assignmentsService.presentError();

              setTimeout(function () {
                _this.closePopover();

                _this.router.navigateByUrl('tabs/main');
              }, 3000);
            }
          })["catch"](function (response) {
            // prints 403
            console.log(response.status); // prints Permission denied

            console.log(response.error);

            _this.assignmentsService.presentError();

            setTimeout(function () {
              _this.closePopover();

              _this.router.navigateByUrl('tabs/main');
            }, 3000);
          });
        }
      }, {
        key: "closePopover",
        value: function closePopover() {
          this.popoverController.dismiss();
        }
      }, {
        key: "AddParticipant",
        value: function AddParticipant(participant) {
          this.countaddedparticipant++;
          this.displayaddedparticipants = this.countaddedparticipant + " Student(s) added";
          participant.toBeInvited = participant.toBeInvited == 'N' ? 'Y' : 'N';
          this.invitedfriends = participant;
          this.data.push(this.invitedfriends);
        }
      }, {
        key: "invitefriends",
        value: function invitefriends() {
          var _this2 = this;

          //console.log(this.data)-->Add more than  a student at a time
          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_6__["apiurl"].apiUrl + 'session/participant_invite', {
            "Authentication_Token": this.token,
            "Owner_Id": this.studentid,
            "Session_Id": this.sessionid,
            "StudentList": JSON.stringify(this.data)
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            _this2.assignmentsService.presentLoading();

            try {
              response.data = JSON.parse(response.data); //console.log(response.data)

              _this2.storage.set('mysession', response.data);

              _this2.storage.set('assignmentdetails', response.data.assignments);

              _this2.assignmentsService.dismissLoading();

              _this2.popoverController.dismiss();
            } catch (e) {
              console.error('JSON parsing error');

              _this2.assignmentsService.presentError();

              setTimeout(function () {
                _this2.closePopover();

                _this2.assignmentsService.dismissLoading();

                _this2.router.navigateByUrl('tabs/main');
              }, 3000);
            }
          })["catch"](function (response) {
            // prints 403
            console.log(response.status); // prints Permission denied

            console.log(response.error);

            _this2.assignmentsService.presentError();

            setTimeout(function () {
              _this2.closePopover();

              _this2.assignmentsService.dismissLoading();

              _this2.router.navigateByUrl('tabs/main');
            }, 3000);
          });
        }
      }]);

      return PopoverParticipantInvitePage;
    }();

    PopoverParticipantInvitePage.ctorParameters = function () {
      return [{
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentsService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])], PopoverParticipantInvitePage.prototype, "infiniteScroll", void 0);
    PopoverParticipantInvitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover-participant-invite',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popover-participant-invite.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popover-participant-invite.page.scss */
      "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.scss"))["default"]]
    })], PopoverParticipantInvitePage);
    /***/
  }
}]);
//# sourceMappingURL=default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3-es5.js.map