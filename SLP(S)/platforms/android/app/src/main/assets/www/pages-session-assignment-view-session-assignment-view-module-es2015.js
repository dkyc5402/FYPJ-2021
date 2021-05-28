(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-assignment-view-session-assignment-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-view/session-assignment-view.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-view/session-assignment-view.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-session-header></app-session-header>\r\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button  class=\"{{isactivevideoorvoice}}\" value=\"conferencing\" >\r\n      <ion-label>Conferencing</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button class=\"{{isactiveassignment}}\" value=\"assignment\">\r\n      <ion-label>Assignment</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot='fixed' (ionRefresh)='UpdateData($event)'>\r\n    <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n  <div *ngIf=\"segmentModel === 'conferencing'\">\r\n    <ion-col>\r\n    <div style=\"text-align: center;\">No Conference Call</div>\r\n    </ion-col>\r\n  </div>    \r\n    <div *ngIf=\"segmentModel === 'assignment'\">\r\n      <div class=\"thirdcontent\" >\r\n        \r\n        <div class=\"box\" *ngIf=\"asgmtlist&&this.sessionstatus!==this.sessionstatusended\">\r\n          <ion-label>\r\n            [{{asgmtlist.created_By_Username}}-{{asgmtlist.created_By_Level}}]  {{asgmtlist.asgmt_Title}} \r\n        </ion-label>\r\n        <ion-icon style=\"position: absolute;right:1em;zoom:1.3\" button src=\"assets/images/1001-cross.svg\" (click)=\"PreviousPage()\" ></ion-icon>\r\n        <br/>\r\n      </div>\r\n      <div class=\"boxSessionEnd\" *ngIf=\"asgmtlist&&this.sessionstatus===this.sessionstatusended\"> \r\n        <ion-label>\r\n          [{{asgmtlist.created_By_Username}}-{{asgmtlist.created_By_Level}}]  {{asgmtlist.asgmt_Title}} \r\n      </ion-label>\r\n      <ion-icon style=\"position: absolute;right:1em;zoom:1.3\" button src=\"assets/images/1001-cross.svg\" (click)=\"PreviousPage()\" ></ion-icon>\r\n      <br/>\r\n    </div>\r\n\r\n      <div class=\"center\">\r\n        <ion-card *ngIf=\"asgmtlist\">\r\n          <b style=\"font-size: x-large;color:black\">Question</b>\r\n          <ion-item>\r\n            <ion-img *ngIf=\"asgmtlist.asgmt_Data==null\" ionImgViewer style=\"width:10em;height:10em;\"  src=\"assets/images/noimage.png\"></ion-img>\r\n            <img (click)=\"presentModalImage(imgdisplayinapp)\" *ngIf=\"asgmtlist.asgmt_Data!=null\" style=\"width:10em;height:10em;\"  [src]=\"imgdisplayinapp\">\r\n            <ion-button *ngIf=\"asgmtlist.created_By===this.studentid&&this.sessionstatus!==this.sessionstatusended\" slot=\"end\" style=\"font-size: larger;color:white;\" (click)=\"EditDrawing()\">Edit</ion-button>\r\n          </ion-item>\r\n            <ion-card-content style=\"font-size: large;color:black;padding: 0em;\">\r\n           {{asgmtlist.asgmt_Value}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card>\r\n          <b style=\"font-size: x-large;color:black\">Discussion</b>\r\n        <div class=\"scrolling-wrapper\">\r\n          <div *ngFor=\"let asgmtlist of asgmtdiscusslist\"  class=\"card\"><h2>\r\n            <ion-label style=\"font-size: medium;\">{{asgmtlist.created_On | date:'medium'}}</ion-label><br/>\r\n            <img style=\"width:10em;height:10em\" (click)=\"presentModalDiscussImage(asgmtlist.asgmtDiscuss_Data, asgmtlist.asgmt_Id, asgmtlist.asgmtDiscuss_Id, this.studentid, this.token)\" *ngIf=\"asgmtlist.asgmtDiscuss_Data!=null\" [src]=\"this.display(asgmtlist.asgmtDiscuss_Data)\"><br/>\r\n            <ion-label style=\"font-size: medium;\" *ngIf=\"asgmtlist.created_By_Username!=null\">Commented By: <b>{{asgmtlist.created_By_Username}} ({{asgmtlist.created_By_Level}})</b></ion-label><br/>\r\n            <ion-label style=\"font-size: medium;\" *ngIf=\"asgmtlist.created_By_Username==null\">Commented By: <b>{{tutornamefordisplay}}</b></ion-label><br/>\r\n          </h2>\r\n        </div>\r\n        </div>\r\n        </ion-card>\r\n        </div>\r\n  </div>\r\n  <!-- </div> -->\r\n</div>\r\n</ion-content>\r\n<ion-footer>\r\n   <ion-fab-button *ngIf=\"segmentModel === 'assignment'&&asgmtlist\" (click)=\"StayonPage(asgmtlist.asgmt_Id)\"  vertical=\"end\" horizontal=\"end\" style=\"position: absolute;bottom: 1em;right: 1em;\"><img style=\"width:3em;height:3em;\" src=\"assets/images/chat-1.svg\"></ion-fab-button> \r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/session-assignment-view/session-assignment-view-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/session-assignment-view/session-assignment-view-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SessionAssignmentViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentViewPageRoutingModule", function() { return SessionAssignmentViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_assignment_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-assignment-view.page */ "./src/app/pages/session-assignment-view/session-assignment-view.page.ts");




const routes = [
    {
        path: '',
        component: _session_assignment_view_page__WEBPACK_IMPORTED_MODULE_3__["SessionAssignmentViewPage"]
    }
];
let SessionAssignmentViewPageRoutingModule = class SessionAssignmentViewPageRoutingModule {
};
SessionAssignmentViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionAssignmentViewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-assignment-view/session-assignment-view.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/session-assignment-view/session-assignment-view.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SessionAssignmentViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentViewPageModule", function() { return SessionAssignmentViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _session_assignment_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-assignment-view-routing.module */ "./src/app/pages/session-assignment-view/session-assignment-view-routing.module.ts");
/* harmony import */ var _session_assignment_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-assignment-view.page */ "./src/app/pages/session-assignment-view/session-assignment-view.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");









let SessionAssignmentViewPageModule = class SessionAssignmentViewPageModule {
};
SessionAssignmentViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _session_assignment_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionAssignmentViewPageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["NgxIonicImageViewerModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_session_assignment_view_page__WEBPACK_IMPORTED_MODULE_6__["SessionAssignmentViewPage"]]
    })
], SessionAssignmentViewPageModule);



/***/ }),

/***/ "./src/app/pages/session-assignment-view/session-assignment-view.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/session-assignment-view/session-assignment-view.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.scrolling-wrapper .card {\n  display: inline-block;\n}\n\nion-item {\n  border: none;\n  padding: 0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LXZpZXcvQzpcXFVzZXJzXFxEYW5hZVxcRGVza3RvcFxcRllQSlxcSW9uaWNGUC9zcmNcXGFwcFxccGFnZXNcXHNlc3Npb24tYXNzaWdubWVudC12aWV3XFxzZXNzaW9uLWFzc2lnbm1lbnQtdmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tYXNzaWdubWVudC12aWV3L3Nlc3Npb24tYXNzaWdubWVudC12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBSTtFQUNFLHFCQUFBO0FDRU47O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LXZpZXcvc2Vzc2lvbi1hc3NpZ25tZW50LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNjcm9sbGluZy13cmFwcGVyIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBwYWRkaW5nOiAwZW07XHJcbiAgfSIsIi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY3JvbGxpbmctd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNjcm9sbGluZy13cmFwcGVyIC5jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMGVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/session-assignment-view/session-assignment-view.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/session-assignment-view/session-assignment-view.page.ts ***!
  \*******************************************************************************/
/*! exports provided: SessionAssignmentViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentViewPage", function() { return SessionAssignmentViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_session_assignment_chat_session_assignment_chat_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/session-assignment-chat/session-assignment-chat.page */ "./src/app/pages/session-assignment-chat/session-assignment-chat.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _shared_module_session_view_image_discussion_session_view_image_discussion_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared-module/session-view-image-discussion/session-view-image-discussion.page */ "./src/app/pages/shared-module/session-view-image-discussion/session-view-image-discussion.page.ts");
/* harmony import */ var _session_my_session_my_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../session-my/session-my.page */ "./src/app/pages/session-my/session-my.page.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");














let SessionAssignmentViewPage = class SessionAssignmentViewPage {
    constructor(ngZone, nativeHttp, globalService, platform, sessionmypage, dms, router, activatedRoute, modalController, assignmentsService, storage, networkService) {
        this.ngZone = ngZone;
        this.nativeHttp = nativeHttp;
        this.globalService = globalService;
        this.platform = platform;
        this.sessionmypage = sessionmypage;
        this.dms = dms;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.assignmentsService = assignmentsService;
        this.storage = storage;
        this.networkService = networkService;
        this.refreshvalue = false;
        //Segment
        this.segmentModel = "assignment";
    }
    ngOnInit() {
        //Segment
        console.log('this.router.url', 'this.rout');
        this.isactiveassignment = "activesegment";
    }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        this.getAssignmentList();
        this.tutornamefordisplay = this.assignmentsService.getselectedtutorname();
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.router.navigateByUrl('tabs/session-view/session-view/' + this.sessionid);
        });
    }
    /*Get AssignmentList*/
    getAssignmentList() {
        this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].SESSION_STATUS_ENDED;
        // Get the ID that was passed with the URL
        this.activatedRoute.paramMap.subscribe(params => {
            let id = params.getAll('id');
            this.sessionid = id;
        });
        this.activatedRoute.paramMap.subscribe(params => {
            let asgmtid = params.getAll('asgmtid');
            this.asgmtid = asgmtid;
        });
        this.sessionstatus = this.assignmentsService.getselectedsessionstatus();
        this.storage.get('assignmentdetails').then((val) => {
            val.forEach((valor) => {
                if (this.asgmtid == valor.asgmt_Id) {
                    this.asgmtlist = valor;
                    this.imgdisplayinapp = this.display(valor.asgmt_Data);
                    this.asgmtdiscusslist = this.asgmtlist.assignmentDiscussions;
                }
            });
        });
    }
    UpdateData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].SESSION_STATUS_ENDED;
            this.token = this.globalService.getselectedtoken();
            this.studentid = this.globalService.getselectedStudentId();
            this.sessionstatus = this.assignmentsService.getselectedsessionstatus();
            let header = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
            let fetchinfo = { "Authentication_Token": this.token, "Student_Id": this.studentid, "inDepth": "Y" };
            this.nativeHttp.setDataSerializer('json');
            this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_8__["apiurl"].apiUrl + 'session/mySessions', fetchinfo, header).then(response => {
                try {
                    response.data = JSON.parse(response.data); //whole asgmtlist of particular session ,returns a promise
                    this.storage.set('AssignmentDiscussion', response.data).then(val => {
                        this.storage.get('AssignmentDiscussion').then((val) => {
                            // console.log('storage get',this.storage.get('AssignmentDiscussion'))
                            val.forEach((valor) => {
                                this.test = valor.assignments;
                                this.test.forEach(valor2 => {
                                    this.test2 = valor2.asgmt_Id;
                                    if (this.asgmtid == this.test2) {
                                        this.test = valor2.assignmentDiscussions;
                                        this.test3 = valor2;
                                        console.log('this is the apilist', this.test.created_On);
                                        this.imgdisplayinapp = this.display(this.test3.asgmt_Data);
                                        this.asgmtdiscusslist = this.test;
                                    }
                                });
                            });
                        });
                        event.target.complete();
                    });
                }
                catch (e) {
                    console.error('JSON parsing error');
                    this.assignmentsService.presentError();
                    setTimeout(() => {
                        event.target.complete();
                        this.router.navigateByUrl('tabs/main');
                    }, 3000);
                }
            }).catch(response => {
                // prints 403
                console.log(response.status, ' errorsss');
                // prints Permission denied
                console.log(response.error, ' error');
                this.assignmentsService.presentError();
                setTimeout(() => {
                    event.target.complete();
                    this.router.navigateByUrl('tabs/main');
                }, 3000);
            });
        });
    }
    // refreshing(){
    //   this.ngZone.run(() => {
    //     this.refreshvalue = true;
    //   })
    // }
    /*Segment */
    segmentChanged(event) {
        if (this.segmentModel != "assignment") {
            this.isactiveassignment = "inactivesegment";
            this.isactivevideoorvoice = "activesegment";
        }
        else if (this.segmentModel == "assignment") {
            this.isactiveassignment = "activesegment";
            this.isactivevideoorvoice = "inactivesegment";
        }
    }
    /*Chat Pop up*/
    presentModal(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.modalController.create({
                component: _pages_session_assignment_chat_session_assignment_chat_page__WEBPACK_IMPORTED_MODULE_5__["SessionAssignmentChatPage"],
                cssClass: 'small-modal',
                backdropDismiss: true
            });
            return yield popover.present();
        });
    }
    /*Edit Drawing*/
    EditDrawing() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        else {
            this.assignmentsService.presentDrawing('Cancel', 'Confirm').then((res) => {
                if (res === 'Confirm') {
                    this.router.navigateByUrl('/tabs/session-view/session-assignment-edit/' + this.sessionid + '/' + this.asgmtid);
                    //Drawing Page
                }
            });
        }
    }
    /*Open Chat*/
    StayonPage(asgmtid) {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        else {
            this.assignmentsService.setselectedasgmtid(asgmtid);
            this.presentModal(event);
        }
    }
    PreviousPage() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        else {
            this.router.navigateByUrl('/tabs/session-view/session-view/' + this.sessionid);
        }
    }
    //Image Sanitize
    display(bImg) {
        return this.dms.bypassSecurityTrustResourceUrl("data:image/png;base64, " + bImg);
    }
    //Display Image 
    presentModalImage(imgdisplayinapp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_module_session_view_image_discussion_session_view_image_discussion_page__WEBPACK_IMPORTED_MODULE_11__["SessionViewImageDiscussionPage"],
                componentProps: {
                    imagedisplay: this.imgdisplayinapp,
                    discussimgdisplayinapp: this.asgmtlist.asgmtDiscuss_Data
                }
            });
            return yield modal.present();
        });
    }
    presentModalDiscussImage(imgdisplayinapp, asgmt_id, asgmt_disc_id, student_id, auth_token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_module_session_view_image_discussion_session_view_image_discussion_page__WEBPACK_IMPORTED_MODULE_11__["SessionViewImageDiscussionPage"],
                componentProps: {
                    imagedisplay: this.display(imgdisplayinapp),
                    asgmt_id: asgmt_id,
                    asgmt_disc_id: asgmt_disc_id,
                    student_id: student_id,
                    auth_token: auth_token
                }
            });
            return yield modal.present();
        });
    }
};
SessionAssignmentViewPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_13__["HTTP"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _session_my_session_my_page__WEBPACK_IMPORTED_MODULE_12__["SessionMyPage"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"] }
];
SessionAssignmentViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-assignment-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-assignment-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-view/session-assignment-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-assignment-view.page.scss */ "./src/app/pages/session-assignment-view/session-assignment-view.page.scss")).default]
    })
], SessionAssignmentViewPage);



/***/ })

}]);
//# sourceMappingURL=pages-session-assignment-view-session-assignment-view-module-es2015.js.map