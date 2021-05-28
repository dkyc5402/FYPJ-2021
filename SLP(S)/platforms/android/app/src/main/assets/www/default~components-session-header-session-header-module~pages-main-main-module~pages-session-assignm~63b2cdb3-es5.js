function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSharedModulePopoverParticipantViewPopoverParticipantViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!---check-->\r\n<ion-header>\r\n  <h2 class=\"title\" style=\"font-size: large;padding: 2%;\"><b>Participants <b *ngIf=\"this.sessionstatusended!==this.sessionstatus\">({{numofparticipants}})</b> </b><ion-icon style=\"float: right;\" src=\"assets/images/pop-up-cross.svg\" (click)=\"closePopover()\"></ion-icon></h2>\r\n</ion-header>\r\n<ion-content >\r\n  <div class=\"container\" *ngIf=\"this.sessionstatusended!==this.sessionstatus\">\r\n<div *ngFor=\"let participant of textdisplayparticipant\">\r\n<div class=\"popovercss\" *ngIf=\"participant.participant_Id==='TUTOR'\">\r\n  [SV] <b>{{participant.username}}</b>   <!--Tutor(SESSION_STATUS_ACCEPTED)-->\r\n</div>\r\n</div>\r\n<div *ngFor=\"let participant of textdisplayparticipant\">\r\n<div class=\"popovercss\" *ngIf=\"participant.is_Initiator==='Y'\">\r\n[IS] ({{participant.levelInfo_DisplayName}}) <b>{{participant.username}}</b>   <!--Session Initiator-->\r\n</div>\r\n</div>\r\n<div *ngFor=\"let participant of textdisplayparticipant\">\r\n<div  *ngIf=\"participant.status==this.participantstatusaccepted&&participant.sessionstatus!=this.sessionstatusaccepted&&participant.is_Initiator!=='Y'\">\r\n  <div class=\"popovercss\" >({{participant.levelInfo_DisplayName}}) <b>{{participant.username}}</b><button *ngIf=\"this.studentid==this.initiatorid&&this.sessionstatus!=this.sessionstatusaccepted\" (click) = \"RemoveParticipant(participant.participant_Id)\"  class=\"popoverremovebutton\">Remove</button>   \r\n  </div>\r\n</div>\r\n</div>\r\n<div><button class=\"popoverinvitebutton\" *ngIf=\"sessionstatus!=this.sessionstatusaccepted&&this.studentid==this.initiatorid\" (click)=\"invitefriend()\"><b>Invite Friend</b></button></div>\r\n</div>\r\n<div *ngIf=\"this.sessionstatusended===this.sessionstatus\" style=\"font-size: larger;text-align: center;\"><b>Session has ended.</b></div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSharedModulePopoverParticipantViewPopoverParticipantViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 0 4% 0 4%;\n}\n\nion-toolbar {\n  --min-height:0px!important;\n}\n\n.popovercss {\n  border: solid #000000;\n  background-color: white;\n  margin-bottom: 0.5em;\n  padding: 0.3em;\n}\n\n.popoverremovebutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  float: right;\n  padding: 0.1em;\n}\n\n.popoverinvitebutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.popoverremovedlabel {\n  color: blakc;\n  float: right;\n  padding: 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LXZpZXcvQzpcXFVzZXJzXFxEYW5hZVxcRGVza3RvcFxcRllQSlxcSW9uaWNGUC9zcmNcXGFwcFxccGFnZXNcXHNoYXJlZC1tb2R1bGVcXHBvcG92ZXItcGFydGljaXBhbnQtdmlld1xccG9wb3Zlci1wYXJ0aWNpcGFudC12aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LXZpZXcvcG9wb3Zlci1wYXJ0aWNpcGFudC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSwwQkFBQTtBQ0VKOztBREFBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaGFyZWQtbW9kdWxlL3BvcG92ZXItcGFydGljaXBhbnQtdmlldy9wb3BvdmVyLXBhcnRpY2lwYW50LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDAgNCUgMCA0JTtcclxuICB9XHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLW1pbi1oZWlnaHQ6MHB4IWltcG9ydGFudDtcclxuICB9XHJcbi5wb3BvdmVyY3Nze1xyXG4gIGJvcmRlcjpzb2xpZCAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206MC41ZW07XHJcbiAgcGFkZGluZzowLjNlbTtcclxufVxyXG4ucG9wb3ZlcnJlbW92ZWJ1dHRvbntcclxuICBib3JkZXI6c29saWQgMC4xZW0gYmxhY2s7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWM5MWE4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOjAuMWVtO1xyXG59XHJcbi5wb3BvdmVyaW52aXRlYnV0dG9ue1xyXG4gIGJvcmRlcjpzb2xpZCAwLjFlbSBibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxYzkxYTg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG59XHJcbi5wb3BvdmVycmVtb3ZlZGxhYmVse1xyXG4gIGNvbG9yOmJsYWtjO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOjAuMWVtO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDQlIDAgNCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OjBweCFpbXBvcnRhbnQ7XG59XG5cbi5wb3BvdmVyY3NzIHtcbiAgYm9yZGVyOiBzb2xpZCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtO1xufVxuXG4ucG9wb3ZlcnJlbW92ZWJ1dHRvbiB7XG4gIGJvcmRlcjogc29saWQgMC4xZW0gYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTFhODtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwLjFlbTtcbn1cblxuLnBvcG92ZXJpbnZpdGVidXR0b24ge1xuICBib3JkZXI6IHNvbGlkIDAuMWVtIGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzkxYTg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLnBvcG92ZXJyZW1vdmVkbGFiZWwge1xuICBjb2xvcjogYmxha2M7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMC4xZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PopoverParticipantViewPage */

  /***/
  function srcAppPagesSharedModulePopoverParticipantViewPopoverParticipantViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverParticipantViewPage", function () {
      return PopoverParticipantViewPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/assignments.service */
    "./src/app/services/assignments.service.ts");
    /* harmony import */


    var _popover_participant_invite_popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../popover-participant-invite/popover-participant-invite.page */
    "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts");
    /* harmony import */


    var _model_global_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../model/global-api */
    "./src/app/model/global-api.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/global.service */
    "./src/app/services/global.service.ts");

    var PopoverParticipantViewPage = /*#__PURE__*/function () {
      function PopoverParticipantViewPage(globalService, assignmentsService, nativeHttp, storage, router, popoverController) {
        _classCallCheck(this, PopoverParticipantViewPage);

        this.globalService = globalService;
        this.assignmentsService = assignmentsService;
        this.nativeHttp = nativeHttp;
        this.storage = storage;
        this.router = router;
        this.popoverController = popoverController;
        this.data = [];
      }

      _createClass(PopoverParticipantViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.token = this.globalService.getselectedtoken();
          this.studentid = this.globalService.getselectedStudentId(); //Check to see whether is initiator to be able to view invite button

          this.CallAPIgetParticipants();
        }
        /*Get All Participants*/

      }, {
        key: "CallAPIgetParticipants",
        value: function CallAPIgetParticipants() {
          var _this = this;

          this.sessionstatus = this.assignmentsService.getselectedsessionstatus(); //Get sessionstatus

          this.sessionid = this.assignmentsService.getselectedsessionid(); //Get Sessionid

          this.initiatorid = this.assignmentsService.getselectedinitiatorid(); //Get Initiator

          this.participantstatusremoved = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["ParticipantStatus"].PARTICIPANT_STATUS_REMOVED;
          this.participantstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["ParticipantStatus"].PARTICIPANT_STATUS_ACCEPTED;
          this.sessionstatuspending = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_PENDING;
          this.sessionstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_ACCEPTED;
          this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_ENDED;
          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'session/listParticipants', {
            "Authentication_Token": this.token,
            "Session_Id": this.sessionid,
            "Student_Id": this.studentid
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            try {
              response.data = JSON.parse(response.data); //console.log(response.data)

              _this.textdisplayparticipant = response.data;
              _this.numofparticipants = _this.textdisplayparticipant.length;
            } catch (e) {
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
        } //Remove Participant

      }, {
        key: "RemoveParticipant",
        value: function RemoveParticipant(participantid) {
          var _this2 = this;

          this.nativeHttp.setDataSerializer('json');
          this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'session/participant_remove', {
            "Authentication_Token": this.token,
            "Owner_Id": this.studentid,
            "Session_Id": this.sessionid,
            "Participant_Id": participantid
          }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }).then(function (response) {
            try {
              response.data = JSON.parse(response.data);
              _this2.textdisplayparticipant = response.data;

              _this2.closePopover();
            } catch (e) {
              console.error('JSON parsing error');

              _this2.assignmentsService.presentError();

              setTimeout(function () {
                _this2.closePopover();

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

              _this2.router.navigateByUrl('tabs/main');
            }, 3000);
          });
        }
      }, {
        key: "closePopover",
        value: function closePopover() {
          this.popoverController.dismiss();
        }
        /*Pop over for participants*/

      }, {
        key: "invitefriend",
        value: function invitefriend(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.popoverController.dismiss();
                    _context.next = 3;
                    return this.popoverController.create({
                      component: _popover_participant_invite_popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_6__["PopoverParticipantInvitePage"],
                      event: ev
                    });

                  case 3:
                    popover = _context.sent;
                    _context.next = 6;
                    return popover.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PopoverParticipantViewPage;
    }();

    PopoverParticipantViewPage.ctorParameters = function () {
      return [{
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"]
      }, {
        type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])], PopoverParticipantViewPage.prototype, "infiniteScroll", void 0);
    PopoverParticipantViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover-participant-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popover-participant-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popover-participant-view.page.scss */
      "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss"))["default"]]
    })], PopoverParticipantViewPage);
    /***/
  }
}]);
//# sourceMappingURL=default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3-es5.js.map