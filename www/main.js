(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**********************************************!*\
  !*** multi ./projects/quran-web/src/main.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/mkhaled/46229A46229A3B3F/Applications/Web/Angular/QuranApps/projects/quran-web/src/main.ts */"K4gq");


/***/ }),

/***/ "07xQ":
/*!******************************************************************!*\
  !*** ./projects/quran-web/src/app/Services/messaging.service.ts ***!
  \******************************************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _Models_notification_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/notification.model */ "FgP8");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/messaging */ "XoYk");






class MessagingService {
    constructor(angularFireMessaging) {
        this.angularFireMessaging = angularFireMessaging;
        this.currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.newNotes = 0;
        this.allNotes = [];
        this.newNotesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.angularFireMessaging.messages.subscribe((msg) => {
            // msg.onMessage = msg.onMessage.bind(msg);
            // msg.onTokenRefresh = msg.onTokenRefresh.bind(msg);
            console.log("M : ", msg);
        });
    }
    requestPermission() {
        this.angularFireMessaging.requestToken.subscribe((token) => {
            console.log("FB Token : ", token);
        }, (err) => {
            console.error('Unable to get permission to notify.', err);
        });
    }
    receiveMessage() {
        this.angularFireMessaging.messages.subscribe((payload) => {
            console.log("Note Recived : ", payload);
            let note = new _Models_notification_model__WEBPACK_IMPORTED_MODULE_2__["Note"](payload.title || "Note Title", payload.notification.body || "Note Body", payload.notification.click_action || "https://www.google.com");
            // this.allNotes.push(note);
            // this.newNotes++;
            this.newNotesChanged.next(note);
            this.currentMessage.next(payload);
            this.showCutomeNotification(payload);
        });
    }
    showCutomeNotification(payload) {
        let notifyData = payload['notification'];
        let title = payload['title'] || "Quran MK Note";
        let options = {
            body: notifyData['body'],
            icon: 'https://image.shutterstock.com/image-vector/mk-initial-letters-looping-linked-260nw-419294407.jpg',
            badge: 'https://image.shutterstock.com/image-vector/mk-initial-letters-looping-linked-260nw-419294407.jpg',
            image: 'https://image.shutterstock.com/image-vector/mk-initial-letters-looping-linked-260nw-419294407.jpg'
        };
        console.log("new message recieved : ", notifyData);
        let notify = new Notification(title, options);
        // notify.onclick = event =>{
        //   event.preventDefault(); 
        //   window.location.href = 'https://quranmk.herokuapp.com'
        // }
    }
}
MessagingService.ɵfac = function MessagingService_Factory(t) { return new (t || MessagingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__["AngularFireMessaging"])); };
MessagingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessagingService, factory: MessagingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__["AngularFireMessaging"] }]; }, null); })();


/***/ }),

/***/ "1bcC":
/*!***********************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/splash/splash.component.ts ***!
  \***********************************************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_themes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/themes.service */ "c8oj");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class SplashComponent {
    constructor(theme, meta) {
        this.theme = theme;
        this.meta = meta;
        theme.modeChanging.subscribe(m => {
            this.mode = m;
        });
    }
    ngOnInit() {
        this.mode = this.theme.mode;
        this.meta.addTag({
            name: 'description',
            content: "This is a web site used to help students to learn Quran Karim "
        });
    }
}
SplashComponent.ɵfac = function SplashComponent_Factory(t) { return new (t || SplashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_themes_service__WEBPACK_IMPORTED_MODULE_1__["ThemesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"])); };
SplashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashComponent, selectors: [["app-splash"]], decls: 2, vars: 1, consts: [[1, "cont", 3, "ngClass"]], template: function SplashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".cont[_ngcontent-%COMP%]{\n    min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNwbGFzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnR7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-splash',
                templateUrl: './splash.component.html',
                styleUrls: ['./splash.component.css']
            }]
    }], function () { return [{ type: _Services_themes_service__WEBPACK_IMPORTED_MODULE_1__["ThemesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }]; }, null); })();


/***/ }),

/***/ "2Q7E":
/*!*****************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/teacher-profile/teacher-profile.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeacherProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherProfileComponent", function() { return TeacherProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/api-call.service */ "9gK7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/lang.service */ "CFso");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/sample-card/sample-card.component */ "lNKm");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function TeacherProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeacherProfileComponent_div_2_div_22_button_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "enroll"), " ");
} }
function TeacherProfileComponent_div_2_div_22_button_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
function TeacherProfileComponent_div_2_div_22_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherProfileComponent_div_2_div_22_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.enroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherProfileComponent_div_2_div_22_button_1_p_1_Template, 3, 3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeacherProfileComponent_div_2_div_22_button_1_img_2_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loading);
} }
function TeacherProfileComponent_div_2_div_22_button_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "unEnroll"), " ");
} }
function TeacherProfileComponent_div_2_div_22_button_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
function TeacherProfileComponent_div_2_div_22_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherProfileComponent_div_2_div_22_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.unEnroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherProfileComponent_div_2_div_22_button_2_p_1_Template, 3, 3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeacherProfileComponent_div_2_div_22_button_2_img_2_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading);
} }
function TeacherProfileComponent_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherProfileComponent_div_2_div_22_button_1_Template, 3, 2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeacherProfileComponent_div_2_div_22_button_2_Template, 3, 2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.enrolled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.enrolled);
} }
function TeacherProfileComponent_div_2_sample_card_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sample-card", 26);
} if (rf & 2) {
    const sample_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sample", sample_r14);
} }
function TeacherProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Students : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Samples : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Price : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TeacherProfileComponent_div_2_div_22_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TeacherProfileComponent_div_2_sample_card_29_Template, 1, 1, "sample-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.teacher == null ? null : ctx_r1.teacher.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.lang === "ar" ? ctx_r1.teacher == null ? null : ctx_r1.teacher.arName : ctx_r1.teacher == null ? null : ctx_r1.teacher.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.teacher == null ? null : ctx_r1.teacher.students.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.teacher == null ? null : ctx_r1.teacher.samples.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 8, ctx_r1.teacher == null ? null : ctx_r1.teacher.price, "EGP"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 11, "samples"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.teacher == null ? null : ctx_r1.teacher.samples);
} }
class TeacherProfileComponent {
    constructor(apiService, activeRoute, langService, title) {
        this.apiService = apiService;
        this.activeRoute = activeRoute;
        this.langService = langService;
        this.title = title;
        this.teacherID = "";
        this.user = JSON.parse(localStorage.getItem('quranUser'));
        this.loading = false;
        this.enrolled = false;
    }
    ngOnInit() {
        this.getTeacherData();
        this.lang = this.langService.urlLang;
    }
    getTeacherData() {
        this.teacherID = this.activeRoute.snapshot.params['id'];
        this.apiService.getTeacherProfile(this.teacherID).subscribe(t => {
            this.teacher = t;
            if (this.teacher.students.includes(this.user._id)) {
                this.enrolled = true;
            }
            else {
                this.enrolled = false;
            }
            this.title.setTitle(this.teacher.name || "Teacher Profile");
        });
    }
    enroll() {
        let data = {
            studentID: this.user._id,
            teacherID: this.teacher._id
        };
        this.loading = true;
        this.apiService.studentEnroll(data).subscribe(res => {
            this.enrolled = true;
            this.loading = false;
            this.getTeacherData();
        }, (err) => {
            this.loading = false;
            console.error("ERR ", err);
        });
    }
    unEnroll() {
        let data = {
            studentID: this.user._id,
            teacherID: this.teacher._id
        };
        this.loading = true;
        this.apiService.studentUnEnroll(data).subscribe(res => {
            this.enrolled = false;
            this.loading = false;
            this.getTeacherData();
            console.log("UnEnroll RES :", res);
        }, (err) => {
            this.loading = false;
            console.error("ERR ", err);
        });
    }
}
TeacherProfileComponent.ɵfac = function TeacherProfileComponent_Factory(t) { return new (t || TeacherProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
TeacherProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherProfileComponent, selectors: [["app-teacher-profile"]], decls: 3, vars: 2, consts: [[1, "container"], ["class", "loadCont", 4, "ngIf"], [4, "ngIfContainer", "ngIf"], [1, "loadCont"], ["src", "../../../assets/images/loading.gif", "alt", "", 1, "loadImg"], [1, "row", "head"], [1, "teacherDataLeft", "col-md-6"], [1, "row"], [1, "col-md-5"], [1, "profileImg", 3, "src"], [1, "col-md-6", "teacherData"], [1, "h3", "teacherName"], [1, "teacherSub"], ["class", "teacherDataRight col-md-6", 4, "ngIf"], [1, "header"], [1, "text-center", "h1"], [1, "line"], [1, "row", "samples"], ["class", "col-md-4", 3, "sample", 4, "ngFor", "ngForOf"], [1, "teacherDataRight", "col-md-6"], ["class", "btn btn-warning enrollBtn", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", "enrollBtn", 3, "click"], ["class", "btnText h3", 4, "ngIf"], ["src", "../../../assets/images/loading.gif", "alt", "", "class", "loadingImg", 4, "ngIf"], [1, "btnText", "h3"], ["src", "../../../assets/images/loading.gif", "alt", "", 1, "loadingImg"], [1, "col-md-4", 3, "sample"]], template: function TeacherProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherProfileComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeacherProfileComponent_div_2_Template, 30, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.teacher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teacher);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_6__["SampleCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  min-height: 20vh;\n}\n.teacherDataLeft[_ngcontent-%COMP%] {\n  \n}\n.teacherDataRight[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: Cairo;\n}\n.profileImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.teacherData[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  \n  font-family: Cairo;\n  \n}\n.teacherSub[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.enrollBtn[_ngcontent-%COMP%]{\n \n height: 10vh;\n min-width: 45%;\n padding-top: 4%;\n}\n.loadingImg[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 90%;\n}\n.teacherSub[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: gold;\n}\n.samples[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.line[_ngcontent-%COMP%] {\n  background: url(https://vatican.modeltheme.com/wp-content/plugins/modeltheme-framework/inc/shortcodes/img/delimiter_dark.png)\n    no-repeat center center;\n  height: 5vh;\n}\n.header[_ngcontent-%COMP%] {\n  margin: 3vh 0;\n  font-family: Cairo;\n  font-weight: bolder;\n}\n.loadCont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media(max-width:766px){\n  .teacherData[_ngcontent-%COMP%]{\n    align-items: center;\n    margin: 3% 0;\n  }\n  .enrollBtn[_ngcontent-%COMP%]{\n    width:100%\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFOzJCQUN5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtFQUNBO0lBQ0U7RUFDRjtBQUNGIiwiZmlsZSI6InRlYWNoZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDIwdmg7XG59XG4udGVhY2hlckRhdGFMZWZ0IHtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbn1cbi50ZWFjaGVyRGF0YVJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cblxuLnByb2ZpbGVJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuLnRlYWNoZXJEYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbiAgLyogbWFyZ2luOiAwIDUlOy4gKi9cbn1cbi50ZWFjaGVyU3ViIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZW5yb2xsQnRue1xuIC8qIG1heC13aWR0aDogMTB2dzsgICovXG4gaGVpZ2h0OiAxMHZoO1xuIG1pbi13aWR0aDogNDUlO1xuIHBhZGRpbmctdG9wOiA0JTtcbn1cbi5sb2FkaW5nSW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA5MCU7XG59XG4udGVhY2hlclN1YiBzdHJvbmcge1xuICBjb2xvcjogZ29sZDtcbn1cbi5zYW1wbGVzIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmxpbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly92YXRpY2FuLm1vZGVsdGhlbWUuY29tL3dwLWNvbnRlbnQvcGx1Z2lucy9tb2RlbHRoZW1lLWZyYW1ld29yay9pbmMvc2hvcnRjb2Rlcy9pbWcvZGVsaW1pdGVyX2RhcmsucG5nKVxuICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDV2aDtcbn1cbi5oZWFkZXIge1xuICBtYXJnaW46IDN2aCAwO1xuICBmb250LWZhbWlseTogQ2Fpcm87XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ubG9hZENvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY2cHgpe1xuICAudGVhY2hlckRhdGF7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDMlIDA7XG4gIH1cbiAgLmVucm9sbEJ0bntcbiAgICB3aWR0aDoxMDAlXG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-profile',
                templateUrl: './teacher-profile.component.html',
                styleUrls: ['./teacher-profile.component.css']
            }]
    }], function () { return [{ type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


/***/ }),

/***/ "37z2":
/*!*************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/teacher/teacher.component.ts ***!
  \*************************************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/api-call.service */ "9gK7");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/teacher-card/teacher-card.component */ "Sd26");







function TeacherComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeacherComponent_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "teacher-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teacher_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("teacher", teacher_r3);
} }
function TeacherComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherComponent_ul_9_li_1_Template, 2, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.teachers);
} }
class TeacherComponent {
    constructor(apiService, title, translate) {
        this.apiService = apiService;
        this.title = title;
        this.translate = translate;
        this.teachers = [];
    }
    ngOnInit() {
        this.apiService.getTeachers().subscribe(t => {
            this.teachers = t.teachers;
        });
        this.translate.get('teachers').subscribe(t => {
            this.title.setTitle(t);
        });
    }
}
TeacherComponent.ɵfac = function TeacherComponent_Factory(t) { return new (t || TeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
TeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherComponent, selectors: [["app-teacher"]], decls: 10, vars: 6, consts: [[1, "text-center", 3, "ngClass"], [1, "header"], [1, ""], [1, "line"], [1, "desc"], ["class", "loadCont", 4, "ngIf"], ["class", "teachers row", 4, "ngIf"], [1, "loadCont"], ["src", "../../../assets/images/loading.gif", "alt", "", 1, "loadImg"], [1, "teachers", "row"], ["class", "teacherItem col-md-3", 4, "ngFor", "ngForOf"], [1, "teacherItem", "col-md-3"], [3, "teacher"]], template: function TeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, sed optio quis a amet cum, excepturi reprehenderit ut odio asperiores nam esse vero non ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeacherComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeacherComponent_ul_9_Template, 2, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "teachers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.teachers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teachers.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_5__["TeacherCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".header[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n}\n.line[_ngcontent-%COMP%] {\n  background: url(https://vatican.modeltheme.com/wp-content/plugins/modeltheme-framework/inc/shortcodes/img/delimiter_dark.png)\n    no-repeat center center;\n  height: 5vh;\n}\n.desc[_ngcontent-%COMP%]{\n    margin-top: 2vh;\n    color: #666666;\n    font-family: Cairo;\n}\nh1[_ngcontent-%COMP%]{\n  \n  font-family: Cairo;\n}\n.teachers[_ngcontent-%COMP%]{\n    \n    margin-top: 10vh;\n    margin-bottom: 10vh;\n    width:100%;\n    list-style-type: none;\n    justify-content: center;\n\n}\n.teacherItem[_ngcontent-%COMP%]{\n    \n    display: inline-block;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFOzJCQUN5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHVCQUF1Qjs7QUFFM0I7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsVUFBVTtBQUNkO0FBRUE7Ozs7O0dBS0ciLCJmaWxlIjoidGVhY2hlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbn1cbi5saW5lIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdmF0aWNhbi5tb2RlbHRoZW1lLmNvbS93cC1jb250ZW50L3BsdWdpbnMvbW9kZWx0aGVtZS1mcmFtZXdvcmsvaW5jL3Nob3J0Y29kZXMvaW1nL2RlbGltaXRlcl9kYXJrLnBuZylcbiAgICBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiA1dmg7XG59XG4uZGVzY3tcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1mYW1pbHk6IENhaXJvO1xufVxuaDF7XG4gIC8qIGZvbnQtZmFtaWx5OiBPc3dhbGQ7ICovXG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cblxuLnRlYWNoZXJze1xuICAgIC8qIGhlaWdodDogNTB2aDsgKi9cbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cblxuLnRlYWNoZXJJdGVte1xuICAgIC8qIHdpZHRoOiAyMCU7ICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi8qIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCl7XG4gIC50ZWFjaGVySXRlbXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher',
                templateUrl: './teacher.component.html',
                styleUrls: ['./teacher.component.css']
            }]
    }], function () { return [{ type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "3RUT":
/*!***************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/liberary/liberary.component.ts ***!
  \***************************************************************************/
/*! exports provided: LiberaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiberaryComponent", function() { return LiberaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/api-call.service */ "9gK7");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/sample-card/sample-card.component */ "lNKm");







function LiberaryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiberaryComponent_div_7_sample_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sample-card", 10);
} if (rf & 2) {
    const sample_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sample", sample_r3);
} }
function LiberaryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LiberaryComponent_div_7_sample_card_1_Template, 1, 1, "sample-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.samples);
} }
class LiberaryComponent {
    constructor(apiService, title, translate) {
        this.apiService = apiService;
        this.title = title;
        this.translate = translate;
        this.samples = [];
    }
    ngOnInit() {
        this.apiService.getSamples().subscribe(t => {
            this.samples = t.samples;
            console.log("Samples : ", t);
        });
        this.translate.get('library').subscribe(t => this.title.setTitle(t));
    }
}
LiberaryComponent.ɵfac = function LiberaryComponent_Factory(t) { return new (t || LiberaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
LiberaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiberaryComponent, selectors: [["app-liberary"]], decls: 8, vars: 5, consts: [[1, "container"], [1, "header"], [1, "text-center", "h1"], [1, "line"], ["class", "loadCont", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "loadCont"], ["src", "../../../assets/images/loading.gif", "alt", "", 1, "loadImg"], [1, "row"], ["class", "col-md-4", 3, "sample", 4, "ngFor", "ngForOf"], [1, "col-md-4", 3, "sample"]], template: function LiberaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LiberaryComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LiberaryComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "library"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.samples.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.samples.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_5__["SampleCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".line[_ngcontent-%COMP%] {\n    background: url(https://vatican.modeltheme.com/wp-content/plugins/modeltheme-framework/inc/shortcodes/img/delimiter_dark.png)\n      no-repeat center center;\n    height: 5vh;\n  }\n  .header[_ngcontent-%COMP%]{\n      margin: 3vh 0;\n      font-family: Cairo;\n      font-weight: bolder;\n  }\n  .loadCont[_ngcontent-%COMP%]{\n      text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYmVyYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTs2QkFDeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7TUFDSSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLG1CQUFtQjtFQUN2QjtFQUNBO01BQ0ksa0JBQWtCO0VBQ3RCIiwiZmlsZSI6ImxpYmVyYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdmF0aWNhbi5tb2RlbHRoZW1lLmNvbS93cC1jb250ZW50L3BsdWdpbnMvbW9kZWx0aGVtZS1mcmFtZXdvcmsvaW5jL3Nob3J0Y29kZXMvaW1nL2RlbGltaXRlcl9kYXJrLnBuZylcbiAgICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIGhlaWdodDogNXZoO1xuICB9XG4gIC5oZWFkZXJ7XG4gICAgICBtYXJnaW46IDN2aCAwO1xuICAgICAgZm9udC1mYW1pbHk6IENhaXJvO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuICAubG9hZENvbnR7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiberaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-liberary',
                templateUrl: './liberary.component.html',
                styleUrls: ['./liberary.component.css']
            }]
    }], function () { return [{ type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "3Ua4":
/*!****************************************************************!*\
  !*** ./projects/quran-web/src/app/Services/teacher.service.ts ***!
  \****************************************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var _api_call_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-call.service */ "9gK7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TeacherService {
    constructor(http) {
        this.http = http;
    }
    addManyTeachers(teachers) {
        let url = _api_call_service__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + "/teacher/addMany";
        return this.http.post(url, { teachers });
    }
}
TeacherService.ɵfac = function TeacherService_Factory(t) { return new (t || TeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TeacherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeacherService, factory: TeacherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeacherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4XdC":
/*!**********************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/logo/logo.component.ts ***!
  \**********************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo-img"]], decls: 1, vars: 0, consts: [["src", "../../../assets/images/logo.jpg", "alt", "", "height", "72", 1, "mb-4", "logoImg"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: [".logoImg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoibG9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29JbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjB2aDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo-img',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4YiL":
/*!****************************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/loading/loading.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/lang.service */ "CFso");




class LoadingComponent {
    constructor(router, langS) {
        this.router = router;
        this.langS = langS;
        this.storedUser = localStorage.getItem('quranUser');
        this.storedAdmin = localStorage.getItem('quranAdmin');
    }
    ngOnInit() {
        this.langS.intialization();
        if (this.storedUser) {
            setTimeout(() => {
                this.router.navigateByUrl(this.langS.urlLang + '/home');
            }, 2000);
        }
        if (this.storedAdmin) {
            setTimeout(() => {
                this.router.navigateByUrl(this.langS.urlLang + '/admin');
            }, 2000);
        }
        else {
            setTimeout(() => {
                this.router.navigateByUrl(this.langS.urlLang + '/login');
            }, 2000);
        }
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 2, vars: 0, consts: [[1, "cont"], ["src", "../../../assets/images/loading.gif", "alt", "", 1, "loadImg"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cont[_ngcontent-%COMP%]{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnR7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }]; }, null); })();


/***/ }),

/***/ "8/rM":
/*!***************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/Admin/login/login.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/api-call.service */ "9gK7");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../Services/lang.service */ "CFso");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/logo/logo.component */ "4XdC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AdminLoginComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} }
function AdminLoginComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminLoginComponent {
    constructor(api, title, router, l) {
        this.api = api;
        this.title = title;
        this.router = router;
        this.l = l;
        this.loading = false;
        this.errMsg = '';
    }
    ngOnInit() {
    }
    login() {
        let data = {
            email: this.email,
            password: this.password
        };
        console.log("Email : ", this.email);
        this.loading = true;
        this.loginSub = this.api.adminLogin(data).subscribe(data => {
            console.log("Admin Login Data : ", data);
            localStorage.setItem('quranAdmin', data);
            this.loading = false;
            this.router.navigateByUrl("/" + this.l.urlLang + '/admin');
        }, err => {
            console.log("ERR admin login : ", err);
            this.loading = false,
                this.errMsg = err.message || "Can't Login Please Try Later";
        });
    }
    ngOnDestroy() {
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 24, vars: 5, consts: [[1, "cont"], [1, "view"], [1, "text-center"], [1, "form-signin", 3, "submit"], [1, "mb-3", "font-weight-normal"], [1, "gold"], [1, "h3"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "Password Required", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btnCont"], ["type", "submit", 1, "btn", "btn-lg", "btn-warning", "btn-block"], ["class", "btnLoad", "src", "../../../../assets/images/loading.gif", 4, "ngIf"], [4, "ngIf"], ["src", "../../../../assets/images/loading.gif", 1, "btnLoad"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdminLoginComponent_Template_form_submit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-logo-img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "alem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminLoginComponent_img_20_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminLoginComponent_span_21_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".cont[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Cairo;\n  background-color: #eee;\n}\n.view[_ngcontent-%COMP%] {\n  width: 90%;\n  \n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 5%;\n  border-radius: 5%;\n  background-color: #333;\n  color: #fff;\n}\n.logoImg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 20vh;\n}\ninput.form-control[_ngcontent-%COMP%] {\n  margin: 5% 0;\n  height: 8vh;\n  border-radius: 2vh;\n  border-color: gold;\n}\n.btnCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2vh;\n  width: 50%;\n  height: 8vh;\n}\n.gold[_ngcontent-%COMP%] {\n  color: gold;\n  font-size: 5vh;\n  \n}\n.btnLoad[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.signUp[_ngcontent-%COMP%] {\n  margin: 2vh 0;\n}\n.link[_ngcontent-%COMP%] {\n  color: gold;\n  cursor: pointer;\n}\n@media (min-width: 1025px) {\n  .view[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsNEVBQTRFO0VBQzVFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogQ2Fpcm87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4udmlldyB7XG4gIHdpZHRoOiA5MCU7XG4gIC8qIGhlaWdodDogNDAlOyAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBwYWRkaW5nOiA1JTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmxvZ29JbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjB2aDtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luOiA1JSAwO1xuICBoZWlnaHQ6IDh2aDtcbiAgYm9yZGVyLXJhZGl1czogMnZoO1xuICBib3JkZXItY29sb3I6IGdvbGQ7XG59XG4uYnRuQ29udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJ2aDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA4dmg7XG59XG4uZ29sZCB7XG4gIGNvbG9yOiBnb2xkO1xuICBmb250LXNpemU6IDV2aDtcbiAgLyogLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrOyAqL1xufVxuLmJ0bkxvYWQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2lnblVwIHtcbiAgbWFyZ2luOiAydmggMDtcbn1cbi5saW5rIHtcbiAgY29sb3I6IGdvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAudmlldyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"] }]; }, null); })();


/***/ }),

/***/ "94aK":
/*!***************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/Admin/admin/admin.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Components/side-bar/side-bar.component */ "PsTd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 6, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-2"], [1, "col-md-9", "content"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n  padding-left: 0;\n}\n\n.content[_ngcontent-%COMP%]{\n  max-height: 100vh;\n  overflow: auto;\n}\n\n.content[_ngcontent-%COMP%]::-webkit-scrollbar{\n  display: none\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRTtBQUNGIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5jb250ZW50e1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gIGRpc3BsYXk6IG5vbmVcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9gK7":
/*!*****************************************************************!*\
  !*** ./projects/quran-web/src/app/Services/api-call.service.ts ***!
  \*****************************************************************/
/*! exports provided: baseURL, ApiCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallService", function() { return ApiCallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "Uxgo");




const baseURL = "https://quranmkserver.herokuapp.com";
class ApiCallService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    getTeachers() {
        let url = baseURL + "/teacher";
        return this.http.get(url);
    }
    getSamples() {
        let url = baseURL + "/sample";
        return this.http.get(url);
    }
    getTeacherProfile(id) {
        let url = baseURL + "/teacher/" + id;
        return this.http.get(url);
    }
    getStudentProfile(id) {
        let url = baseURL + "/student/" + id;
        return this.http.get(url);
    }
    studentLogin(email, password) {
        let url = baseURL + "/student/login";
        return this.http.post(url, {
            email,
            password
        });
    }
    studentReg(user) {
        let url = baseURL + "/student/add";
        return this.http.post(url, {
            email: user.email,
            password: user.password,
            name: user.name
        });
    }
    studentEnroll(data) {
        let url = baseURL + "/student/enroll";
        return this.http.post(url, {
            teacher: data.teacherID,
            student: data.studentID
        });
    }
    studentUnEnroll(data) {
        let url = baseURL + "/student/unenroll";
        return this.http.post(url, {
            teacher: data.teacherID,
            student: data.studentID
        });
    }
    adminLogin(data) {
        let url = baseURL + "/admin/login";
        console.log("Login Data : ", data);
        return this.http.post(url, {
            email: data.email,
            password: data.password
        });
    }
}
ApiCallService.ɵfac = function ApiCallService_Factory(t) { return new (t || ApiCallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ApiCallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiCallService, factory: ApiCallService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiCallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "9zOc":
/*!*********************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/Admin/admin-teachers/admin-teachers.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdminTeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTeachersComponent", function() { return AdminTeachersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../Services/api-call.service */ "9gK7");
/* harmony import */ var _Services_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../Services/teacher.service */ "3Ua4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/teacher-card/teacher-card.component */ "Sd26");
/* harmony import */ var _Components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Components/add-item/add-item.component */ "uHEp");
/* harmony import */ var _Components_add_teacher_form_add_teacher_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Components/add-teacher-form/add-teacher-form.component */ "gobI");










function AdminTeachersComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTeachersComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeMode("edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminTeachersComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTeachersComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.submitEditing("show"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminTeachersComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTeachersComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.cancelEditMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminTeachersComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminTeachersComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "teacher-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delTeacher", function AdminTeachersComponent_li_13_Template_teacher_card_delTeacher_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteTeacher($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teacher_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx_r4.activeMode)("teacher", teacher_r14);
} }
function AdminTeachersComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "comp-add-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addAction", function AdminTeachersComponent_li_14_Template_comp_add_item_addAction_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.addPressed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemName", "Teacher");
} }
function AdminTeachersComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry but there is no teachers with name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.filterName);
} }
function AdminTeachersComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "comp-add-teacher-form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("teacherSubmited", function AdminTeachersComponent_div_16_Template_comp_add_teacher_form_teacherSubmited_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.addTeacher($event); })("hideForm", function AdminTeachersComponent_div_16_Template_comp_add_teacher_form_hideForm_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.changeMode("edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminTeachersComponent {
    constructor(api, teacherService) {
        this.api = api;
        this.teacherService = teacherService;
        this.teachers = [];
        this.addedTeachers = [];
        this.loadTeachers = true;
        this.activeMode = "show";
    }
    ngOnInit() {
        this.api.getTeachers().subscribe(data => {
            this.loadTeachers = false;
            this.teachersCopy = data.teachers;
            this.teachers = data.teachers;
        });
    }
    filterTeacehers() {
        if (this.filterName) {
            this.teachers = this.teachers.filter(t => {
                return t.name.toLocaleLowerCase().includes(this.filterName.toLocaleLowerCase()) ||
                    t.arName.toLocaleLowerCase().includes(this.filterName.toLocaleLowerCase());
            });
        }
        else {
            this.teachers = this.teachersCopy;
        }
    }
    changeMode(mode) {
        this.activeMode = mode;
    }
    deleteTeacher(id) {
        this.teachers = this.teachers.filter(t => t._id !== id);
    }
    addPressed() {
        // alert('clicked')
        this.activeMode = "addTeacher";
    }
    addTeacher(teacher) {
        console.log("Received teacher : ", teacher);
        this.teachers.push(teacher);
        this.addedTeachers.push(teacher);
        this.activeMode = 'edit';
    }
    cancelEditMode() {
        this.teachers = this.teachersCopy;
        this.activeMode = 'show';
    }
    submitEditing() {
        this.teachersCopy = this.teachers;
        this.activeMode = 'show';
        if (this.addedTeachers.length) {
            this.teachSub = this.teacherService.addManyTeachers(this.addedTeachers).subscribe(data => {
                console.log("Teachers Added : ", data);
                this.addedTeachers = [];
            });
        }
    }
    ngOnDestroy() {
        if (this.teachSub)
            this.teachSub.unsubscribe();
    }
}
AdminTeachersComponent.ɵfac = function AdminTeachersComponent_Factory(t) { return new (t || AdminTeachersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"])); };
AdminTeachersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTeachersComponent, selectors: [["app-admin-teachers"]], decls: 17, vars: 9, consts: [[1, "container", "admin"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Filter by Name", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", "filterInput", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-md-3", "text-center"], ["class", "btn btn-warning m-3", 3, "click", 4, "ngIf"], ["class", "btn btn-success m-3", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "row", "text-center"], [1, "col-sm-12"], ["class", "loadCont", 4, "ngIf"], [1, "teachers", "row"], ["class", "teacherItem col-md-3", 4, "ngFor", "ngForOf"], ["class", "teacherItem col-md-3", 4, "ngIf"], [4, "ngIf"], ["class", "addFormCont", 4, "ngIf"], [1, "btn", "btn-warning", "m-3", 3, "click"], [1, "fa", "fa-edit"], [1, "btn", "btn-success", "m-3", 3, "click"], [1, "fa", "fa-check-circle"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-times-circle"], [1, "loadCont"], ["src", "../../../../assets/images/loading.gif", "alt", "", 1, "loadImg"], [1, "teacherItem", "col-md-3"], [3, "mode", "teacher", "delTeacher"], [3, "itemName", "addAction"], [1, "filterName"], [1, "addFormCont"], [1, "addForm"], [3, "teacherSubmited", "hideForm"]], template: function AdminTeachersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminTeachersComponent_Template_input_ngModelChange_4_listener($event) { return ctx.filterName = $event; })("keyup", function AdminTeachersComponent_Template_input_keyup_4_listener() { return ctx.filterTeacehers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminTeachersComponent_button_6_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminTeachersComponent_button_7_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminTeachersComponent_button_8_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminTeachersComponent_div_11_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminTeachersComponent_li_13_Template, 2, 2, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminTeachersComponent_li_14_Template, 2, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminTeachersComponent_p_15_Template, 4, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminTeachersComponent_div_16_Template, 3, 0, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeMode === "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeMode === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeMode === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadTeachers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teachers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeMode === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterName && !ctx.teachers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeMode === "addTeacher");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_6__["TeacherCardComponent"], _Components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__["AddItemComponent"], _Components_add_teacher_form_add_teacher_form_component__WEBPACK_IMPORTED_MODULE_8__["AddTeacherFormComponent"]], styles: [".admin[_ngcontent-%COMP%] {\n  font-family: Cairo;\n  padding-top: 8vh;\n}\n.filterName[_ngcontent-%COMP%]{\n  color:crimson;\n  font-weight: bolder;\n}\n.teachers[_ngcontent-%COMP%] {\n  \n  margin-top: 10vh;\n  margin-bottom: 10vh;\n  width: 100%;\n  list-style-type: none;\n  justify-content: center;\n}\n.filterInput[_ngcontent-%COMP%]{\n  height: 7vh;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.teacherItem[_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  padding: 0;\n}\n.deleteBtn[_ngcontent-%COMP%]{\n  position: absolute;\n  left: 0;\n  z-index: 10;\n}\n.addFormCont[_ngcontent-%COMP%]{\n  position: fixed;\n  top: 0;\n  left:0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 100;\n}\n.addForm[_ngcontent-%COMP%]{\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXRlYWNoZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLDRFQUE0RTtBQUM5RTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsV0FBVztBQUNiO0FBR0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJhZG1pbi10ZWFjaGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluIHtcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xuICBwYWRkaW5nLXRvcDogOHZoO1xufVxuLmZpbHRlck5hbWV7XG4gIGNvbG9yOmNyaW1zb247XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4udGVhY2hlcnMge1xuICAvKiBoZWlnaHQ6IDUwdmg7ICovXG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZpbHRlcklucHV0e1xuICBoZWlnaHQ6IDd2aDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cbi50ZWFjaGVySXRlbSB7XG4gIC8qIHdpZHRoOiAyMCU7ICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbn1cbi5kZWxldGVCdG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cblxuLmFkZEZvcm1Db250e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDowO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5hZGRGb3Jte1xuICB3aWR0aDogNTAlO1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 0
                })),
                // transition('void => *',[
                //   animate(1000)
                // ]) ,
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000)
                ])
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTeachersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-teachers',
                templateUrl: './admin-teachers.component.html',
                styleUrls: ['./admin-teachers.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0
                        })),
                        // transition('void => *',[
                        //   animate(1000)
                        // ]) ,
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000)
                        ])
                    ]),
                ]
            }]
    }], function () { return [{ type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }, { type: _Services_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"] }]; }, null); })();


/***/ }),

/***/ "ABlm":
/*!*************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/profile/profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/auth.service */ "Uxgo");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/api-call.service */ "9gK7");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/navbar/navbar.component */ "FGd5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/teacher-card/teacher-card.component */ "Sd26");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function ProfileComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_12_teacher_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "teacher-card", 13);
} if (rf & 2) {
    const teacher_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("teacher", teacher_r4);
} }
function ProfileComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_12_teacher_card_1_Template, 1, 1, "teacher-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.user == null ? null : ctx_r1.user.teachers);
} }
function ProfileComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sorry but you haven't subscribe to any teacher yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(auth, api) {
        this.auth = auth;
        this.api = api;
        this.loading = true;
    }
    ngOnInit() {
        this.user = this.auth.user;
        this.getStudentData();
    }
    getStudentData() {
        this.sub = this.api.getStudentProfile(this.auth.user._id).subscribe(data => {
            console.log("US : ", data);
            this.user = data;
            this.loading = false;
            this.auth.setActiveUser(this.user);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 14, vars: 9, consts: [[1, "profile"], [1, "cover"], [1, "imgCont"], [1, "profileImg", 3, "src", "alt"], [1, "h1", "name"], [1, "container", "section"], [1, "h1", "sectionH"], ["class", "row ", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row text-center", 4, "ngIf"], [1, "row"], ["src", "../../../assets/images/loading.gif", "alt", ""], ["class", "col-md-4 text-center", 3, "teacher", 4, "ngFor", "ngForOf"], [1, "col-md-4", "text-center", 3, "teacher"], [1, "row", "text-center"], [1, "col-sm-12", "h3"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_div_13_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.user.name + "Img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "teachers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.user.teachers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.user.teachers.length);
    } }, directives: [_Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_5__["TeacherCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".profile[_ngcontent-%COMP%]{\n    font-family: Cairo;\n}\n.cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25vh;\n  background-color: gold;\n}\n.imgCont[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: -15vh;\n  flex-direction: column;\n  margin-bottom: 10vh;\n}\n.profileImg[_ngcontent-%COMP%] {\n  width: 30vh;\n  height: 30vh;\n  border-radius: 15vh;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.name[_ngcontent-%COMP%]{\n    margin: 3vh 0 ;\n    font-size: 4vh;\n}\n.section[_ngcontent-%COMP%]{\n    padding-bottom: 5vh;\n}\n.sectionH[_ngcontent-%COMP%]{\n    margin-bottom: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNEVBQTRFO0FBQzlFO0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGV7XG4gICAgZm9udC1mYW1pbHk6IENhaXJvO1xufVxuLmNvdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbn1cbi5pbWdDb250IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMTV2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cblxuLnByb2ZpbGVJbWcge1xuICB3aWR0aDogMzB2aDtcbiAgaGVpZ2h0OiAzMHZoO1xuICBib3JkZXItcmFkaXVzOiAxNXZoO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubmFtZXtcbiAgICBtYXJnaW46IDN2aCAwIDtcbiAgICBmb250LXNpemU6IDR2aDtcbn1cbi5zZWN0aW9ue1xuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XG59XG4uc2VjdGlvbkh7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }]; }, null); })();


/***/ }),

/***/ "CFso":
/*!*************************************************************!*\
  !*** ./projects/quran-web/src/app/Services/lang.service.ts ***!
  \*************************************************************/
/*! exports provided: LangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangService", function() { return LangService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class LangService {
    constructor(router, trans) {
        this.router = router;
        this.trans = trans;
        this.intialization();
    }
    intialization() {
        this.urlLang = this.router.url.substring(1, 3);
        if (this.urlLang) {
            this.trans.setDefaultLang(this.urlLang);
            localStorage.setItem('lang', this.urlLang);
        }
    }
    changeLanguage() {
        let currentURL = this.router.url;
        if (this.urlLang === "en") {
            this.router.navigateByUrl(currentURL.replace("/en", "/ar"));
            localStorage.setItem('lang', 'ar');
        }
        else {
            this.router.navigateByUrl(currentURL.replace("/ar", "/en"));
            localStorage.setItem('lang', 'en');
        }
    }
}
LangService.ɵfac = function LangService_Factory(t) { return new (t || LangService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
LangService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LangService, factory: LangService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "FDD5":
/*!***********************************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/Admin/admin-teacher-profile/admin-teacher-profile.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AdminTeacherProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTeacherProfileComponent", function() { return AdminTeacherProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Services/api-call.service */ "9gK7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../Services/lang.service */ "CFso");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Components/sample-card/sample-card.component */ "lNKm");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function AdminTeacherProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminTeacherProfileComponent_div_2_div_22_button_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "enroll"), " ");
} }
function AdminTeacherProfileComponent_div_2_div_22_button_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
function AdminTeacherProfileComponent_div_2_div_22_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTeacherProfileComponent_div_2_div_22_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.enroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminTeacherProfileComponent_div_2_div_22_button_1_p_1_Template, 3, 3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminTeacherProfileComponent_div_2_div_22_button_1_img_2_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loading);
} }
function AdminTeacherProfileComponent_div_2_div_22_button_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "unEnroll"), " ");
} }
function AdminTeacherProfileComponent_div_2_div_22_button_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
function AdminTeacherProfileComponent_div_2_div_22_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminTeacherProfileComponent_div_2_div_22_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.unEnroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminTeacherProfileComponent_div_2_div_22_button_2_p_1_Template, 3, 3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminTeacherProfileComponent_div_2_div_22_button_2_img_2_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading);
} }
function AdminTeacherProfileComponent_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminTeacherProfileComponent_div_2_div_22_button_1_Template, 3, 2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminTeacherProfileComponent_div_2_div_22_button_2_Template, 3, 2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.enrolled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.enrolled);
} }
function AdminTeacherProfileComponent_div_2_sample_card_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sample-card", 26);
} if (rf & 2) {
    const sample_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sample", sample_r14);
} }
function AdminTeacherProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Students : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Samples : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Price : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdminTeacherProfileComponent_div_2_div_22_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AdminTeacherProfileComponent_div_2_sample_card_29_Template, 1, 1, "sample-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.teacher == null ? null : ctx_r1.teacher.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.lang === "ar" ? ctx_r1.teacher == null ? null : ctx_r1.teacher.arName : ctx_r1.teacher == null ? null : ctx_r1.teacher.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r1.teacher == null ? null : ctx_r1.teacher.students == null ? null : ctx_r1.teacher.students.length) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r1.teacher == null ? null : ctx_r1.teacher.samples == null ? null : ctx_r1.teacher.samples.length) || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 8, ctx_r1.teacher == null ? null : ctx_r1.teacher.price, "EGP"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 11, "samples"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.teacher == null ? null : ctx_r1.teacher.samples);
} }
class AdminTeacherProfileComponent {
    constructor(apiService, activeRoute, langService, title) {
        this.apiService = apiService;
        this.activeRoute = activeRoute;
        this.langService = langService;
        this.title = title;
        this.teacherID = "";
        this.user = JSON.parse(localStorage.getItem('quranUser'));
        this.loading = false;
        this.enrolled = false;
    }
    ngOnInit() {
        this.getTeacherData();
        this.lang = this.langService.urlLang;
    }
    getTeacherData() {
        this.teacherID = this.activeRoute.snapshot.params['id'];
        this.apiService.getTeacherProfile(this.teacherID).subscribe(t => {
            this.teacher = t;
            console.log("Teacher Data : ", t);
            // if (this.teacher?.students?.includes(this.user?._id)) {
            //   this.enrolled = true
            // } else {
            //   this.enrolled = false
            // }
            this.title.setTitle(this.teacher.name || "Teacher Profile");
        });
    }
    enroll() {
        let data = {
            studentID: this.user._id,
            teacherID: this.teacher._id
        };
        this.loading = true;
        this.apiService.studentEnroll(data).subscribe(res => {
            this.enrolled = true;
            this.loading = false;
            this.getTeacherData();
        }, (err) => {
            this.loading = false;
            console.error("ERR ", err);
        });
    }
    unEnroll() {
        let data = {
            studentID: this.user._id,
            teacherID: this.teacher._id
        };
        this.loading = true;
        this.apiService.studentUnEnroll(data).subscribe(res => {
            this.enrolled = false;
            this.loading = false;
            this.getTeacherData();
            console.log("UnEnroll RES :", res);
        }, (err) => {
            this.loading = false;
            console.error("ERR ", err);
        });
    }
}
AdminTeacherProfileComponent.ɵfac = function AdminTeacherProfileComponent_Factory(t) { return new (t || AdminTeacherProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
AdminTeacherProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminTeacherProfileComponent, selectors: [["app-admin-teacher-profile"]], decls: 3, vars: 2, consts: [[1, "container"], ["class", "loadCont", 4, "ngIf"], [4, "ngIfContainer", "ngIf"], [1, "loadCont"], ["src", "../../../assets/images/loading.gif", "alt", "", 1, "loadImg"], [1, "row", "head"], [1, "teacherDataLeft", "col-md-6"], [1, "row"], [1, "col-md-5"], [1, "profileImg", 3, "src"], [1, "col-md-6", "teacherData"], [1, "h3", "teacherName"], [1, "teacherSub"], ["class", "teacherDataRight col-md-6", 4, "ngIf"], [1, "header"], [1, "text-center", "h1"], [1, "line"], [1, "row", "samples"], ["class", "col-md-4", 3, "sample", 4, "ngFor", "ngForOf"], [1, "teacherDataRight", "col-md-6"], ["class", "btn btn-warning enrollBtn", 3, "click", 4, "ngIf"], [1, "btn", "btn-warning", "enrollBtn", 3, "click"], ["class", "btnText h3", 4, "ngIf"], ["src", "../../../assets/images/loading.gif", "alt", "", "class", "loadingImg", 4, "ngIf"], [1, "btnText", "h3"], ["src", "../../../assets/images/loading.gif", "alt", "", 1, "loadingImg"], [1, "col-md-4", 3, "sample"]], template: function AdminTeacherProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminTeacherProfileComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminTeacherProfileComponent_div_2_Template, 30, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.teacher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teacher);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_6__["SampleCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  min-height: 20vh;\n}\n.teacherDataLeft[_ngcontent-%COMP%] {\n  \n}\n.teacherDataRight[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: Cairo;\n}\n.profileImg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.teacherData[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  \n  font-family: Cairo;\n  \n}\n.teacherSub[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.enrollBtn[_ngcontent-%COMP%]{\n \n height: 10vh;\n min-width: 45%;\n padding-top: 4%;\n}\n.loadingImg[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 90%;\n}\n.teacherSub[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: gold;\n}\n.samples[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n.line[_ngcontent-%COMP%] {\n  background: url(https://vatican.modeltheme.com/wp-content/plugins/modeltheme-framework/inc/shortcodes/img/delimiter_dark.png)\n    no-repeat center center;\n  height: 5vh;\n}\n.header[_ngcontent-%COMP%] {\n  margin: 3vh 0;\n  font-family: Cairo;\n  font-weight: bolder;\n}\n.loadCont[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media(max-width:766px){\n  .teacherData[_ngcontent-%COMP%]{\n    align-items: center;\n    margin: 3% 0;\n  }\n  .enrollBtn[_ngcontent-%COMP%]{\n    width:100%\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXRlYWNoZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFOzJCQUN5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtFQUNBO0lBQ0U7RUFDRjtBQUNGIiwiZmlsZSI6ImFkbWluLXRlYWNoZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDIwdmg7XG59XG4udGVhY2hlckRhdGFMZWZ0IHtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbn1cbi50ZWFjaGVyRGF0YVJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cblxuLnByb2ZpbGVJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuLnRlYWNoZXJEYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbiAgLyogbWFyZ2luOiAwIDUlOy4gKi9cbn1cbi50ZWFjaGVyU3ViIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZW5yb2xsQnRue1xuIC8qIG1heC13aWR0aDogMTB2dzsgICovXG4gaGVpZ2h0OiAxMHZoO1xuIG1pbi13aWR0aDogNDUlO1xuIHBhZGRpbmctdG9wOiA0JTtcbn1cbi5sb2FkaW5nSW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA5MCU7XG59XG4udGVhY2hlclN1YiBzdHJvbmcge1xuICBjb2xvcjogZ29sZDtcbn1cbi5zYW1wbGVzIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLmxpbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly92YXRpY2FuLm1vZGVsdGhlbWUuY29tL3dwLWNvbnRlbnQvcGx1Z2lucy9tb2RlbHRoZW1lLWZyYW1ld29yay9pbmMvc2hvcnRjb2Rlcy9pbWcvZGVsaW1pdGVyX2RhcmsucG5nKVxuICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDV2aDtcbn1cbi5oZWFkZXIge1xuICBtYXJnaW46IDN2aCAwO1xuICBmb250LWZhbWlseTogQ2Fpcm87XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ubG9hZENvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY2cHgpe1xuICAudGVhY2hlckRhdGF7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDMlIDA7XG4gIH1cbiAgLmVucm9sbEJ0bntcbiAgICB3aWR0aDoxMDAlXG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTeacherProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-teacher-profile',
                templateUrl: './admin-teacher-profile.component.html',
                styleUrls: ['./admin-teacher-profile.component.css']
            }]
    }], function () { return [{ type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


/***/ }),

/***/ "FGd5":
/*!**************************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/navbar/navbar.component.ts ***!
  \**************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/lang.service */ "CFso");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/auth.service */ "Uxgo");
/* harmony import */ var _Services_themes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Services/themes.service */ "c8oj");
/* harmony import */ var _Services_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Services/messaging.service */ "07xQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function NavbarComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.newNotes);
} }
function NavbarComponent_div_26_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r7.body);
} }
function NavbarComponent_div_26_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_26_div_4_a_1_Template, 2, 1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.allNotes);
} }
function NavbarComponent_div_26_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_26_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.emptyNotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_26_div_2_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_div_26_div_4_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_div_26_div_5_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newNotes > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.allNotes == null ? null : ctx_r0.allNotes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.allNotes == null ? null : ctx_r0.allNotes.length));
} }
function NavbarComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_27_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeLanguage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_27_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toggleTheme(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_27_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx_r1.urlLang + "/profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "otherLang"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "darkMode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.mode === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, "logOut"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.user == null ? null : ctx_r1.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx_r2.urlLang + "/login/student");
} }
const _c0 = function (a0, a1) { return { light: a0, dark: a1 }; };
class NavbarComponent {
    constructor(router, langService, auth, theme, msg) {
        this.router = router;
        this.langService = langService;
        this.auth = auth;
        this.theme = theme;
        this.msg = msg;
        this.allNotes = [];
        theme.modeChanging.subscribe(m => {
            this.mode = m;
        });
        msg.newNotesChanged.subscribe(n => {
            this.allNotes.push(n);
            this.newNotes++;
        });
    }
    ngOnInit() {
        this.langService.intialization();
        this.urlLang = this.langService.urlLang;
        this.active = this.router.url.substring(9);
        this.user = JSON.parse(localStorage.getItem('quranUser'));
        this.mode = this.theme.mode;
        this.allNotes = this.msg.allNotes;
        this.newNotes = this.msg.newNotes;
    }
    changeActive(active) {
        this.active = active;
    }
    changeLanguage() {
        this.langService.changeLanguage();
    }
    logOut() {
        this.auth.logOut();
    }
    toggleTheme() {
        this.theme.toggleTheme();
    }
    emptyNotes() {
        this.newNotes = 0;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_themes_service__WEBPACK_IMPORTED_MODULE_4__["ThemesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 30, vars: 26, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "navBar", 3, "ngClass"], [1, "logo", 3, "routerLink", "click"], ["src", "../../../assets/images/logo.jpg", 1, "logoImg"], [1, "navbar-brand", "logoName"], [1, "gold"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "menu"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "click"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"], [1, "nav-item"], [1, "nav-link", 3, "routerLink", "click"], ["class", "dropdown my-2 my-lg-0 noteDiv", 4, "ngIf"], ["class", "my-2 my-lg-0 dropdown", 4, "ngIf"], [1, "my-2", "my-lg-0"], ["class", "btn btn-warning", 3, "routerLink", 4, "ngIf"], [1, "dropdown", "my-2", "my-lg-0", "noteDiv"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "fa", "fa-bell", 3, "click"], ["class", "notesCount", 4, "ngIf"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [4, "ngIf"], [1, "notesCount"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"], [1, "dropdown-item"], [1, "text-center"], [1, "my-2", "my-lg-0", "dropdown"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 3, "click"], ["type", "checkbox", "data-toggle", "toggle", "data-size", "lg", 3, "checked"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "ddMenu"], ["aria-hidden", "true", 1, "fa", "fa-caret-down"], ["alt", "", 1, "usrImg", 3, "src"], [1, "btn", "btn-warning", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_1_listener() { return ctx.changeActive(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "alem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_12_listener() { return ctx.changeActive(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_19_listener() { return ctx.changeActive("teachers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_23_listener() { return ctx.changeActive("library"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_div_26_Template, 6, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_div_27_Template, 18, 13, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NavbarComponent_button_29_Template, 2, 1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx.mode === "light", ctx.mode === "dark"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.urlLang + "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.active === "" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.urlLang + "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.active === "teachers" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.urlLang + "/home/teachers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 19, "teachers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.active === "library" ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.urlLang + "/home/library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, "library"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".navBar[_ngcontent-%COMP%] {\n  min-height: 10vh;\n  font-family: Cairo;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-weight: bolder;\n  z-index: 2;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  align-items: center;\n}\n.logoImg[_ngcontent-%COMP%] {\n  width: 7vh;\n  border-radius: 3.5vh;\n  margin-left: 1.5vh;\n  margin-right: 1.5vh;\n}\n.logoName[_ngcontent-%COMP%] {\n  font-family: \"Oswald\";\n  font-weight: bolder;\n  font-size: 3vh;\n}\n.gold[_ngcontent-%COMP%] {\n  color: gold;\n  font-size: 4vh;\n  -webkit-text-stroke: 1px black;\n}\n.active[_ngcontent-%COMP%] {\n  border-bottom: 3px gold solid;\n  \n}\n.menu[_ngcontent-%COMP%] {\n  font-size: 2.5vh;\n  text-align: center;\n}\n.usrImg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 30px;\n  background-color: #fff;\n  cursor: pointer;\n  \n}\ni[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.ddMenu[_ngcontent-%COMP%] {\n  \n  align-items: center;\n  \n  width: 10%;\n  justify-content: center;\n  color: #333;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  left:-10vw\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: gold;\n}\n.notesCount[_ngcontent-%COMP%]{\n  position: absolute;\n    background-color: red;\n    font-size: 1.8vh;\n    width: 2.4vh;\n    height: 2.4vh;\n    border-radius: 1.5vh;\n    text-align: center;\n    top: -1vh;\n}\n.noteDiv[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n@media (max-width: 966px) {\n  .dropdown-menu[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw0RUFBNEU7RUFDNUUsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0VBQ1Q7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5uYXZCYXIge1xuICBtaW4taGVpZ2h0OiAxMHZoO1xuICBmb250LWZhbWlseTogQ2Fpcm87XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHotaW5kZXg6IDI7XG59XG4ubG9nbyB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9nb0ltZyB7XG4gIHdpZHRoOiA3dmg7XG4gIGJvcmRlci1yYWRpdXM6IDMuNXZoO1xuICBtYXJnaW4tbGVmdDogMS41dmg7XG4gIG1hcmdpbi1yaWdodDogMS41dmg7XG59XG4ubG9nb05hbWUge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG59XG4uZ29sZCB7XG4gIGNvbG9yOiBnb2xkO1xuICBmb250LXNpemU6IDR2aDtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xufVxuLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBnb2xkIHNvbGlkO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkOyAqL1xufVxuXG4ubWVudSB7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c3JJbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIG1hcmdpbjogMCAxNSU7ICovXG59XG5pIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uZGRNZW51IHtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICB3aWR0aDogMTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMzMzM7XG59XG4uZHJvcGRvd24tbWVudSB7XG4gIGxlZnQ6LTEwdndcbn1cbi5kcm9wZG93bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xufVxuXG4ubm90ZXNDb3VudHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEuOHZoO1xuICAgIHdpZHRoOiAyLjR2aDtcbiAgICBoZWlnaHQ6IDIuNHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IC0xdmg7XG59XG5cbi5ub3RlRGl2e1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjZweCkge1xuICAuZHJvcGRvd24tbWVudSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }, { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _Services_themes_service__WEBPACK_IMPORTED_MODULE_4__["ThemesService"] }, { type: _Services_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"] }]; }, null); })();


/***/ }),

/***/ "FgP8":
/*!*****************************************************************!*\
  !*** ./projects/quran-web/src/app/Models/notification.model.ts ***!
  \*****************************************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
    constructor(title, body, click_action) {
        this.title = title;
        this.body = body;
        this.click_action = click_action;
    }
}


/***/ }),

/***/ "GwBx":
/*!*******************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/home/home.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/navbar/navbar.component */ "FGd5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HomeComponent {
    constructor(translate, title) {
        this.translate = translate;
        this.title = title;
    }
    ngOnInit() {
        this.translate.get('siteName').subscribe(t => {
            if (t !== 'siteNameI')
                this.title.setTitle(t);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "K4gq":
/*!****************************************!*\
  !*** ./projects/quran-web/src/main.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "pHxQ");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "a1a1");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "KgTB":
/*!*************************************************************************!*\
  !*** ./projects/quran-web/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "KgTB";

/***/ }),

/***/ "PsTd":
/*!******************************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/side-bar/side-bar.component.ts ***!
  \******************************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/auth.service */ "Uxgo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





const _c0 = function () { return { exact: true }; };
class SideBarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    adminLogOut() {
        this.auth.adminLogOut();
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 12, vars: 5, consts: [["id", "sidebar-wrapper", 1, "sidebar", "bg-light", "border-right"], [1, "sidebar-heading", "h3"], [1, "list-group", "list-group-flush"], ["routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", "bg-light", "menu-item", 3, "routerLink"], [1, "list-group-item", "list-group-item-action", "bg-light", "menu-item", 3, "click"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quran Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Teachers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_a_click_10_listener() { return ctx.adminLogOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./teachers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./students");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  \n  color: #333;\n  \n  display: block;\n  font-family: Cairo;\n  padding-left: 5%;\n  padding-top: 5%;\n}\n.active[_ngcontent-%COMP%], .active[_ngcontent-%COMP%]:hover, .active[_ngcontent-%COMP%]:focus {\n  background-color: #333 !important;\n}\n.list-group[_ngcontent-%COMP%]{\n  margin-top: 15%;\n}\n.menu-item[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzaWRlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogaG9uZXlkZXc7ICovXG4gIGNvbG9yOiAjMzMzO1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogQ2Fpcm87XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbi5hY3RpdmUgLCAuYWN0aXZlOmhvdmVyLC5hY3RpdmU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWdyb3Vwe1xuICBtYXJnaW4tdG9wOiAxNSU7XG59XG5cbi5tZW51LWl0ZW17XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.css']
            }]
    }], function () { return [{ type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sd26":
/*!**************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/teacher-card/teacher-card.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TeacherCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherCardComponent", function() { return TeacherCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/lang.service */ "CFso");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






function TeacherCardComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherCardComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.deleteTeacher(ctx_r1.teacher._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["./", a1]; };
class TeacherCardComponent {
    constructor(l) {
        this.l = l;
        this.mode = 'show';
        this.delTeacher = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.animateClass = "animate__fadeInLeft";
        console.log("T: ", this.teacher);
    }
    ngOnInit() {
        this.lang = this.l.urlLang;
    }
    deleteTeacher(id) {
        console.log("Deleting : ", id);
        this.animateClass = "animate__hinge";
        setTimeout(() => {
            this.delTeacher.emit(id);
        }, 2000);
    }
}
TeacherCardComponent.ɵfac = function TeacherCardComponent_Factory(t) { return new (t || TeacherCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"])); };
TeacherCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherCardComponent, selectors: [["teacher-card"]], inputs: { teacher: "teacher", mode: "mode" }, outputs: { delTeacher: "delTeacher" }, decls: 8, vars: 8, consts: [[1, "animate__animated", 3, "ngClass"], [1, "cardItem", 3, "routerLink"], [1, "teacherImg", 3, "src"], [1, "teacherName"], [1, "teacherEmail"], ["class", "btn btn-danger deleteBtn", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "deleteBtn", 3, "click"], [1, "fa", "fa-trash"]], template: function TeacherCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TeacherCardComponent_button_7_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.animateClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.teacher._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.teacher.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "ar" ? ctx.teacher == null ? null : ctx.teacher.arName : ctx.teacher.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teacher.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "edit");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".cardItem[_ngcontent-%COMP%] {\n  \n  padding-top: 5%;\n  \n  cursor: pointer;\n  font-family: Cairo;\n}\n.teacherName[_ngcontent-%COMP%]{\n  font-size: 150%;\n}\n.teacherImg[_ngcontent-%COMP%] {\n  width: 14vh;\n  height: 14vh;\n  border-radius: 7vh;\n  margin-bottom: 5%;\n}\n.cardItem[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);\n  transform: scale(1.05);\n  transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease;\n}\n.teacherEmail[_ngcontent-%COMP%]{\n    color:#666;\n\n}\n.deleteBtn[_ngcontent-%COMP%]{\n  position: absolute;\n  left: -1vw;\n  top:-1vh;\n  z-index: 50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7aUJBQ2U7RUFDZixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUdBO0VBQ0UseUNBQXlDO0VBQ3pDLHNCQUFzQjtFQUN0Qix5RUFBeUU7QUFDM0U7QUFHQTtJQUNJLFVBQVU7O0FBRWQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUVBOzs7O0dBSUciLCJmaWxlIjoidGVhY2hlci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZEl0ZW0ge1xuICAvKiB3aWR0aDogMTh2dztcbiAgaGVpZ2h0OiAzMHZoOyAqL1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xufVxuLnRlYWNoZXJOYW1le1xuICBmb250LXNpemU6IDE1MCU7XG59XG5cbi50ZWFjaGVySW1nIHtcbiAgd2lkdGg6IDE0dmg7XG4gIGhlaWdodDogMTR2aDtcbiAgYm9yZGVyLXJhZGl1czogN3ZoO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuXG4uY2FyZEl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsIHotaW5kZXggMHMgMHMgZWFzZTtcbn1cblxuXG4udGVhY2hlckVtYWlse1xuICAgIGNvbG9yOiM2NjY7XG5cbn1cbi5kZWxldGVCdG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTF2dztcbiAgdG9wOi0xdmg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwMHB4KXtcbiAgLmNhcmRJdGVte1xuICAgIHdpZHRoOiA5MyU7XG4gIH1cbn0gKi9cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'teacher-card',
                templateUrl: './teacher-card.component.html',
                styleUrls: ['./teacher-card.component.css'],
            }]
    }], function () { return [{ type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"] }]; }, { teacher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['teacher']
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mode']
        }], delTeacher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['delTeacher']
        }] }); })();


/***/ }),

/***/ "Uxgo":
/*!*************************************************************!*\
  !*** ./projects/quran-web/src/app/Services/auth.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lang_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang.service */ "CFso");




class AuthService {
    constructor(router, lang) {
        this.router = router;
        this.lang = lang;
        this.user = JSON.parse(localStorage.getItem('quranUser'));
    }
    setActiveUser(user) {
        this.user = user;
        localStorage.setItem('quranUser', JSON.stringify(user));
    }
    logOut() {
        localStorage.removeItem('quranUser');
        this.router.navigateByUrl('/' + this.lang.urlLang);
    }
    adminLogOut() {
        localStorage.removeItem('quranAdmin');
        this.router.navigateByUrl('/' + this.lang.urlLang);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _lang_service__WEBPACK_IMPORTED_MODULE_2__["LangService"] }]; }, null); })();


/***/ }),

/***/ "YV8P":
/*!**************************************************************!*\
  !*** ./projects/quran-web/src/app/Services/admin.service.ts ***!
  \**************************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _api_call_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-call.service */ "9gK7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AdminService {
    constructor(http) {
        this.http = http;
        this.getActiveEnrolls = () => {
            let url = _api_call_service__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + "/enroll/all/active/grouped";
            return this.http.get(url);
        };
        this.getAllEnrolls = () => {
            let url = _api_call_service__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + "/enroll/all/grouped";
            return this.http.get(url);
        };
        this.getAllUnEnrolls = () => {
            let url = _api_call_service__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + "/enroll/unenrolls/grouped";
            return this.http.get(url);
        };
        this.getStudentEnrolls = (id) => {
            let url = _api_call_service__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + "/enroll/student/" + id;
            return this.http.get(url);
        };
        this.getStudentActiveEnrolls = (id) => {
            let url = _api_call_service__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + "/enroll/student/" + id + "/active";
            return this.http.get(url);
        };
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "a1a1":
/*!**************************************************!*\
  !*** ./projects/quran-web/src/app/app.module.ts ***!
  \**************************************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _Screens_Admin_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screens/Admin/login/login.component */ "8/rM");
/* harmony import */ var _Services_themes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/themes.service */ "c8oj");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/auth.service */ "Uxgo");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/lang.service */ "CFso");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/api-call.service */ "9gK7");
/* harmony import */ var _Services_messaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/messaging.service */ "07xQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nguniversal/common */ "rsbC");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/messaging */ "XoYk");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "pHxQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "tUWV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "ep0x");
/* harmony import */ var _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Screens/login/login.component */ "yQrr");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ "FGd5");
/* harmony import */ var _Screens_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Screens/home/home.component */ "GwBx");
/* harmony import */ var _Components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/carousel/carousel.component */ "gIjB");
/* harmony import */ var _Screens_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Screens/teacher/teacher.component */ "37z2");
/* harmony import */ var _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/teacher-card/teacher-card.component */ "Sd26");
/* harmony import */ var _Screens_liberary_liberary_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Screens/liberary/liberary.component */ "3RUT");
/* harmony import */ var _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Components/sample-card/sample-card.component */ "lNKm");
/* harmony import */ var _Screens_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Screens/teacher-profile/teacher-profile.component */ "2Q7E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_loaders_translate_browser_loader__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/loaders/translate-browser.loader */ "tQQw");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _Screens_splash_splash_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Screens/splash/splash.component */ "1bcC");
/* harmony import */ var _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Components/loading/loading.component */ "4YiL");
/* harmony import */ var _Screens_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Screens/student-login/student-login.component */ "yaOv");
/* harmony import */ var _Screens_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Screens/student-reg/student-reg.component */ "t4Uj");
/* harmony import */ var _Screens_profile_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Screens/profile/profile.component */ "ABlm");
/* harmony import */ var _Screens_Admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Screens/Admin/admin/admin.component */ "94aK");
/* harmony import */ var _Screens_Admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Screens/Admin/admin-home/admin-home.component */ "ozwy");
/* harmony import */ var _Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Components/side-bar/side-bar.component */ "PsTd");
/* harmony import */ var _Screens_Admin_admin_teachers_admin_teachers_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Screens/Admin/admin-teachers/admin-teachers.component */ "9zOc");
/* harmony import */ var _Screens_Admin_admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Screens/Admin/admin-students/admin-students.component */ "h74p");
/* harmony import */ var _Screens_Admin_admin_teacher_profile_admin_teacher_profile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Screens/Admin/admin-teacher-profile/admin-teacher-profile.component */ "FDD5");
/* harmony import */ var _Components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Components/add-item/add-item.component */ "uHEp");
/* harmony import */ var _Components_add_teacher_form_add_teacher_form_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Components/add-teacher-form/add-teacher-form.component */ "gobI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Components/logo/logo.component */ "4XdC");






















































function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__["TranslateHttpLoader"](httpClient);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Services_api_call_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallService"],
        _Services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"],
        _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _Services_themes_service__WEBPACK_IMPORTED_MODULE_1__["ThemesService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"],
        _Services_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _nguniversal_common__WEBPACK_IMPORTED_MODULE_11__["TransferHttpCacheModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__["TranslateLoader"],
                    useFactory: _shared_loaders_translate_browser_loader__WEBPACK_IMPORTED_MODULE_32__["translateBrowserLoaderFactory"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"]]
                }
            }),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_12__["AngularFireMessagingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_47__["IonicModule"].forRoot(),
            ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
        _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"],
        _Screens_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
        _Components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_25__["CarouselComponent"],
        _Screens_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_26__["TeacherComponent"],
        _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_27__["TeacherCardComponent"],
        _Screens_liberary_liberary_component__WEBPACK_IMPORTED_MODULE_28__["LiberaryComponent"],
        _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_29__["SampleCardComponent"],
        _Screens_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_30__["TeacherProfileComponent"],
        _Screens_splash_splash_component__WEBPACK_IMPORTED_MODULE_34__["SplashComponent"],
        _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_35__["LoadingComponent"],
        _Screens_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_36__["StudentLoginComponent"],
        _Screens_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_37__["StudentRegComponent"],
        _Screens_profile_profile_component__WEBPACK_IMPORTED_MODULE_38__["ProfileComponent"],
        _Screens_Admin_login_login_component__WEBPACK_IMPORTED_MODULE_0__["AdminLoginComponent"],
        _Screens_Admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_39__["AdminComponent"],
        _Screens_Admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_40__["AdminHomeComponent"],
        _Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_41__["SideBarComponent"],
        _Screens_Admin_admin_teachers_admin_teachers_component__WEBPACK_IMPORTED_MODULE_42__["AdminTeachersComponent"],
        _Screens_Admin_admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_43__["AdminStudentsComponent"],
        _Screens_Admin_admin_teacher_profile_admin_teacher_profile_component__WEBPACK_IMPORTED_MODULE_44__["AdminTeacherProfileComponent"],
        _Components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_45__["AddItemComponent"],
        _Components_add_teacher_form_add_teacher_form_component__WEBPACK_IMPORTED_MODULE_46__["AddTeacherFormComponent"],
        _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_48__["LogoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _nguniversal_common__WEBPACK_IMPORTED_MODULE_11__["TransferHttpCacheModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__["TranslateModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
        _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_12__["AngularFireMessagingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_47__["IonicModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                    _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                    _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"],
                    _Screens_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                    _Components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_25__["CarouselComponent"],
                    _Screens_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_26__["TeacherComponent"],
                    _Components_teacher_card_teacher_card_component__WEBPACK_IMPORTED_MODULE_27__["TeacherCardComponent"],
                    _Screens_liberary_liberary_component__WEBPACK_IMPORTED_MODULE_28__["LiberaryComponent"],
                    _Components_sample_card_sample_card_component__WEBPACK_IMPORTED_MODULE_29__["SampleCardComponent"],
                    _Screens_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_30__["TeacherProfileComponent"],
                    _Screens_splash_splash_component__WEBPACK_IMPORTED_MODULE_34__["SplashComponent"],
                    _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_35__["LoadingComponent"],
                    _Screens_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_36__["StudentLoginComponent"],
                    _Screens_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_37__["StudentRegComponent"],
                    _Screens_profile_profile_component__WEBPACK_IMPORTED_MODULE_38__["ProfileComponent"],
                    _Screens_Admin_login_login_component__WEBPACK_IMPORTED_MODULE_0__["AdminLoginComponent"],
                    _Screens_Admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_39__["AdminComponent"],
                    _Screens_Admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_40__["AdminHomeComponent"],
                    _Components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_41__["SideBarComponent"],
                    _Screens_Admin_admin_teachers_admin_teachers_component__WEBPACK_IMPORTED_MODULE_42__["AdminTeachersComponent"],
                    _Screens_Admin_admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_43__["AdminStudentsComponent"],
                    _Screens_Admin_admin_teacher_profile_admin_teacher_profile_component__WEBPACK_IMPORTED_MODULE_44__["AdminTeacherProfileComponent"],
                    _Components_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_45__["AddItemComponent"],
                    _Components_add_teacher_form_add_teacher_form_component__WEBPACK_IMPORTED_MODULE_46__["AddTeacherFormComponent"],
                    _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_48__["LogoComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _nguniversal_common__WEBPACK_IMPORTED_MODULE_11__["TransferHttpCacheModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__["TranslateLoader"],
                            useFactory: _shared_loaders_translate_browser_loader__WEBPACK_IMPORTED_MODULE_32__["translateBrowserLoaderFactory"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["TransferState"]]
                        }
                    }),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                    _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_12__["AngularFireMessagingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_47__["IonicModule"].forRoot(),
                    ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"]
                ],
                providers: [_Services_api_call_service__WEBPACK_IMPORTED_MODULE_4__["ApiCallService"],
                    _Services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"],
                    _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                    _Services_themes_service__WEBPACK_IMPORTED_MODULE_1__["ThemesService"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"],
                    _Services_messaging_service__WEBPACK_IMPORTED_MODULE_5__["MessagingService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c8oj":
/*!***************************************************************!*\
  !*** ./projects/quran-web/src/app/Services/themes.service.ts ***!
  \***************************************************************/
/*! exports provided: ThemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesService", function() { return ThemesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ThemesService {
    constructor() {
        this.mode = localStorage.getItem('theme') || 'dark';
        this.modeChanging = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setDarkTheme() {
        this.mode = 'dark';
    }
    setLightTheme() {
        this.mode = 'light';
    }
    toggleTheme() {
        if (this.mode === 'dark') {
            this.mode = 'light';
            localStorage.setItem('theme', 'light');
        }
        else {
            this.mode = 'dark';
            localStorage.setItem('theme', 'dark');
        }
        // return this.mode;
        this.modeChanging.next(this.mode);
    }
}
ThemesService.ɵfac = function ThemesService_Factory(t) { return new (t || ThemesService)(); };
ThemesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemesService, factory: ThemesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ep0x":
/*!*****************************************************!*\
  !*** ./projects/quran-web/src/app/app.component.ts ***!
  \*****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _Services_messaging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/messaging.service */ "07xQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(translate, msgService) {
        this.translate = translate;
        this.msgService = msgService;
        this.title = 'QuranWeb';
        this.lastUsedLang = localStorage.getItem('lang') || 'en';
        translate.setDefaultLang(this.lastUsedLang);
    }
    ngOnInit() {
        this.msgService.requestPermission();
        this.msgService.receiveMessage();
        this.message = this.msgService.currentMessage;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".dark[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .cardItem[_ngcontent-%COMP%]\n\n {\n  background-color: #333;\n  color: #fff;\n}\n\n.dark[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .dark[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.dark[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .dark[_ngcontent-%COMP%]   a.dropdown-item[_ngcontent-%COMP%]:hover{\n    color: #333;\n}\n.dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.dark[_ngcontent-%COMP%]   .cardItem[_ngcontent-%COMP%]{\n  border: 1px solid grey;\n\n}\n.light[_ngcontent-%COMP%]{\n    background-color: #fff;\n    color:#333;\n}\n.light[_ngcontent-%COMP%]   .cardItem[_ngcontent-%COMP%]{\n    background-color: #fff;\n    border: 1px solid #e1e9ed;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRoZW1lcy9kYXJrTW9kZS5jc3MiLCJUaGVtZXMvbGlnaHRNb2RlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUUsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBLFdBQVc7QUFDWDs7Ozs7RUFLRSxXQUFXO0FBQ2I7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxzQkFBc0I7O0FBRXhCO0FDN0JBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5Qjs7QUFFN0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyayxcbi5kYXJrIC5kcm9wZG93bi1tZW51ICwgXG4uZGFyayAuY2FyZCxcbi5kYXJrIC5jYXJkSXRlbVxuXG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi8qIE5hdkJhciAqL1xuLmRhcmsgaSxcbi5kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3Zlcixcbi5kYXJrIC5kcm9wZG93bi1pdGVtLFxuLmRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSxcbi5kYXJrIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZT4ubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRhcmsgLmRyb3Bkb3duLWl0ZW06aG92ZXIsLmRhcmsgYS5kcm9wZG93bi1pdGVtOmhvdmVye1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4uZGFyayAuY2FyZEl0ZW17XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG5cbn0iLCIubGlnaHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjojMzMzO1xufVxuXG4ubGlnaHQgLmNhcmRJdGVte1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTllZDtcblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _Services_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"] }]; }, null); })();


/***/ }),

/***/ "gIjB":
/*!******************************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/carousel/carousel.component.ts ***!
  \******************************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




class CarouselComponent {
    constructor(translate, title) {
        this.translate = translate;
        this.title = title;
    }
    ngOnInit() {
        this.translate.get('siteName').subscribe(t => {
            if (t !== 'siteNameI')
                this.title.setTitle(t);
        });
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], decls: 35, vars: 0, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://vatican.modeltheme.com/wp-content/uploads/2019/03/vatican_home1_slider2_v3-1.jpg", "alt", "First slide", 1, "d-block", "w-100", "carImg"], [1, "carousel-caption", "d-md-block"], [1, "capHead"], [1, "capText"], [1, "carousel-item"], ["src", "https://vatican.modeltheme.com/wp-content/uploads/2019/03/vatican_home1_slider1_v2-1.jpg", "alt", "Second slide", 1, "d-block", "w-100", "carImg"], ["src", "https://vatican.modeltheme.com/wp-content/uploads/2019/03/sermon-article-2.jpg", "alt", "Third slide", 1, "d-block", "w-100", "carImg"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nostrum, eligendi eius aspernatur quasi reiciendis hic sed mollitia enim praesentium! Ex earum beatae eius recusandae nobis ratione consequatur natus dolore!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nostrum, eligendi eius aspernatur quasi reiciendis hic sed mollitia enim praesentium! Ex earum beatae eius recusandae nobis ratione consequatur natus dolore!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nostrum, eligendi eius aspernatur quasi reiciendis hic sed mollitia enim praesentium! Ex earum beatae eius recusandae nobis ratione consequatur natus dolore!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".carousel[_ngcontent-%COMP%] {\n  height: 90vh;\n  \n  \n}\n.carImg[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n.carousel-caption[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.capHead[_ngcontent-%COMP%] {\n  font-family: Oswald;\n  font-size: 5vh;\n}\n.capText[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  font-family: Cairo;\n  font-size: 2.5vh;\n}\n@media (min-width: 768px) {\n  .carousel-caption[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 44%;\n    width: 37%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwge1xuICBoZWlnaHQ6IDkwdmg7XG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gIC8qIG1hcmdpbi10b3A6IDIwdmg7ICovXG59XG4uY2FySW1nIHtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXBIZWFkIHtcbiAgZm9udC1mYW1pbHk6IE9zd2FsZDtcbiAgZm9udC1zaXplOiA1dmg7XG59XG4uY2FwVGV4dCB7XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xuICBmb250LXNpemU6IDIuNXZoO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDQ0JTtcbiAgICB3aWR0aDogMzclO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "gobI":
/*!**********************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/add-teacher-form/add-teacher-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddTeacherFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherFormComponent", function() { return AddTeacherFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class AddTeacherFormComponent {
    constructor() {
        this.formClass = "animate__backInDown";
        this.teacherSubmited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    addTeacher() {
        let { price, name, email, password, avatar, arName } = this;
        if (!name)
            this.errMsg = "Sorry but Teacher Name is Required";
        else if (!password) {
            this.errMsg = "Sorry but Teacher Password is Required";
        }
        else if (!arName) {
            this.errMsg = "Sorry but Teacher arName is Required";
        }
        else if (!avatar) {
            this.errMsg = "Sorry but Teacher Avatar is Required";
        }
        else if (!price) {
            this.errMsg = "Sorry but Teacher Price is Required";
        }
        else if (!email) {
            this.errMsg = "Sorry but Teacher Email is Required";
        }
        else {
            let teacher = {
                name,
                email,
                password,
                avatar,
                arName,
                price
            };
            this.errMsg = "";
            this.teacherSubmited.emit(teacher);
            this.hideForm();
        }
    }
    hideForm() {
        this.formClass = "animate__backOutUp";
        setTimeout(() => {
            this.cancelForm.emit();
        }, 500);
    }
}
AddTeacherFormComponent.ɵfac = function AddTeacherFormComponent_Factory(t) { return new (t || AddTeacherFormComponent)(); };
AddTeacherFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTeacherFormComponent, selectors: [["comp-add-teacher-form"]], outputs: { teacherSubmited: "teacherSubmited", cancelForm: "hideForm" }, decls: 19, vars: 8, consts: [[3, "ngClass", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Enter Name", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Arabic Name", "name", "arName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter Email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Avatar URL", "name", "avatar", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Price", "name", "price", "required", "true", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-danger", "closeBtn", "mh-5", 3, "click"], [1, "errMsg"]], template: function AddTeacherFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTeacherFormComponent_Template_form_ngSubmit_0_listener() { return ctx.addTeacher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTeacherFormComponent_Template_input_ngModelChange_2_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTeacherFormComponent_Template_input_ngModelChange_4_listener($event) { return ctx.arName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTeacherFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTeacherFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTeacherFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.avatar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTeacherFormComponent_Template_input_ngModelChange_12_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTeacherFormComponent_Template_button_click_15_listener() { return ctx.hideForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "animate__animated " + ctx.formClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.arName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".closeBtn[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin-right: 2%;\n}\nform[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 3%;\n  border-radius: 2%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-family: Cairo;\n}\n.errMsg[_ngcontent-%COMP%]{\n  text-align: center;\n  color:red\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10ZWFjaGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDRFQUE0RTtFQUM1RSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImFkZC10ZWFjaGVyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZUJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cbmZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cbi5lcnJNc2d7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6cmVkXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTeacherFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'comp-add-teacher-form',
                templateUrl: './add-teacher-form.component.html',
                styleUrls: ['./add-teacher-form.component.css']
            }]
    }], function () { return []; }, { teacherSubmited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['teacherSubmited']
        }], cancelForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['hideForm']
        }] }); })();


/***/ }),

/***/ "h74p":
/*!*********************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/Admin/admin-students/admin-students.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdminStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminStudentsComponent", function() { return AdminStudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminStudentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminStudentsComponent.ɵfac = function AdminStudentsComponent_Factory(t) { return new (t || AdminStudentsComponent)(); };
AdminStudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminStudentsComponent, selectors: [["app-admin-students"]], decls: 2, vars: 0, template: function AdminStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-students works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1zdHVkZW50cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminStudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-students',
                templateUrl: './admin-students.component.html',
                styleUrls: ['./admin-students.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lNKm":
/*!************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/sample-card/sample-card.component.ts ***!
  \************************************************************************************/
/*! exports provided: SampleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleCardComponent", function() { return SampleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/lang.service */ "CFso");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






const _c0 = function (a0, a1) { return [a0, a1]; };
function SampleCardComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Teacher : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, "/" + ctx_r0.currentLang + "/home/teachers", ctx_r0.sample.teacher._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentLang === "ar" ? ctx_r0.sample.teacher == null ? null : ctx_r0.sample.teacher.arName : ctx_r0.sample.teacher == null ? null : ctx_r0.sample.teacher.name, " ");
} }
class SampleCardComponent {
    constructor(langS) {
        this.langS = langS;
    }
    ngOnInit() {
        this.currentLang = this.langS.urlLang;
    }
}
SampleCardComponent.ɵfac = function SampleCardComponent_Factory(t) { return new (t || SampleCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"])); };
SampleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SampleCardComponent, selectors: [["sample-card"]], inputs: { sample: "sample" }, decls: 22, vars: 6, consts: [[1, "card", "text-center", "item"], [1, "card-img"], [1, "playOverlay"], ["aria-hidden", "true", 1, "fa", "fa-play-circle", "fa-3x", "playIcon"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", "name"], ["class", "card-text data", 4, "ngIf"], [1, "card-text", "data"], [3, "routerLink"]], template: function SampleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SampleCardComponent_p_9_Template, 5, 5, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Duration : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ayat Number : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Joz2 : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.sample.avatar || "https://i.pinimg.com/originals/2c/19/7d/2c197db4eb3e3695bc09777a31a86de2.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentLang === "ar" ? ctx.sample.arName : ctx.sample.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sample.teacher == null ? null : ctx.sample.teacher.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sample.duration, " min ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sample.noOfAyat, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sample.joz2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"]], styles: [".item[_ngcontent-%COMP%] {\n  margin: 2vh 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  overflow: hidden;\n  font-family: Cairo;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  transition: box-shadow 0.2s ease, transform 0.5s ease-out, z-index 0s 0s ease;\n  height: 25vh;\n}\n\n.item[_ngcontent-%COMP%]:hover   .card-img-top[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(4deg);\n}\n\n.name[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: bold;\n  \n}\n\n.data[_ngcontent-%COMP%]{\n  text-align: start;\n}\n\n.data[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\n  color: gold;\n}\n\n.data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\n.playOverlay[_ngcontent-%COMP%]{\n  position: absolute;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 20;\n  height: 25vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  display: none;\n}\n\n.playIcon[_ngcontent-%COMP%]{\n  color:gold; \n  cursor: pointer;\n  font-size: 4vw;\n}\n\n.card[_ngcontent-%COMP%]:hover   .playOverlay[_ngcontent-%COMP%]{\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNEVBQTRFO0VBQzVFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2RUFBNkU7RUFDN0UsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic2FtcGxlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgbWFyZ2luOiAydmggMDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xufVxuXG4uY2FyZC1pbWcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0LCB6LWluZGV4IDBzIDBzIGVhc2U7XG4gIGhlaWdodDogMjV2aDtcbn1cbi5pdGVtOmhvdmVyIC5jYXJkLWltZy10b3Age1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xufVxuLm5hbWUge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qIGZvbnQtc2l6ZTogMi41dmg7ICovXG59XG4uZGF0YXtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4uZGF0YSBzdHJvbmd7XG4gIGNvbG9yOiBnb2xkO1xufVxuLmRhdGEgc3BhbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlPdmVybGF5e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgei1pbmRleDogMjA7XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBsYXlJY29ue1xuICBjb2xvcjpnb2xkOyBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDR2dztcbn1cbi5jYXJkOmhvdmVyIC5wbGF5T3ZlcmxheXtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sample-card',
                templateUrl: './sample-card.component.html',
                styleUrls: ['./sample-card.component.css']
            }]
    }], function () { return [{ type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"] }]; }, { sample: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['sample']
        }] }); })();


/***/ }),

/***/ "ozwy":
/*!*************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/Admin/admin-home/admin-home.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/admin.service */ "YV8P");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "LPYB");





const months = [];
class AdminHomeComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.lineChartData = [
            { data: [], label: 'New Enrollments' },
            { data: [], label: 'New Un-Enrollments' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(255,0,0,0.3)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'bar';
        this.lineChartPlugins = [];
        this.getAllEnrolls = () => {
            this.enrollsSub = this.adminService.getAllEnrolls()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((enroll) => {
                return enroll.map((e) => {
                    e['month'] = e._id.month;
                    return e;
                });
            }))
                .subscribe((enrolls) => {
                let newData = new Array(7);
                newData.fill(0);
                enrolls.map((enroll) => {
                    newData[enroll.month - 1] = enroll.count;
                });
                this.lineChartData[0].data.push(...newData);
            });
        };
        this.getUnEnrolls = () => {
            this.enrollsSub = this.adminService.getAllUnEnrolls()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((enroll) => {
                return enroll.map((e) => {
                    e['month'] = e._id.month;
                    return e;
                });
            }))
                .subscribe((enrolls) => {
                console.log("Enrolls : ", enrolls);
                let newData = new Array(7);
                newData.fill(0);
                enrolls.map((enroll) => {
                    newData[enroll.month - 1] = enroll.count;
                });
                this.lineChartData[1].data.push(...newData);
            });
        };
    }
    ngOnInit() {
        this.getAllEnrolls();
        this.getUnEnrolls();
    }
    ngOnDestroy() {
        this.enrollsSub.unsubscribe();
    }
}
AdminHomeComponent.ɵfac = function AdminHomeComponent_Factory(t) { return new (t || AdminHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"])); };
AdminHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHomeComponent, selectors: [["app-admin-home"]], decls: 2, vars: 7, consts: [[2, "display", "block"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]], template: function AdminHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-home',
                templateUrl: './admin-home.component.html',
                styleUrls: ['./admin-home.component.css']
            }]
    }], function () { return [{ type: _Services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "pHxQ":
/*!************************************************************!*\
  !*** ./projects/quran-web/src/environments/environment.ts ***!
  \************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDfY9u2yo2b9zpyZJRYV3d0Bc0SL8URYxk",
        authDomain: "quranak-4a78a.firebaseapp.com",
        projectId: "quranak-4a78a",
        storageBucket: "quranak-4a78a.appspot.com",
        messagingSenderId: "873696623827",
        appId: "1:873696623827:web:ea26ccee646e5126122826",
        measurementId: "G-KQB1GJ59D9"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "t4Uj":
/*!*********************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/student-reg/student-reg.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StudentRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRegComponent", function() { return StudentRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/lang.service */ "CFso");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/api-call.service */ "9gK7");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/auth.service */ "Uxgo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/logo/logo.component */ "4XdC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");












function StudentRegComponent_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} }
function StudentRegComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StudentRegComponent {
    constructor(l, api, auth, router, translate, title) {
        this.l = l;
        this.api = api;
        this.auth = auth;
        this.router = router;
        this.translate = translate;
        this.title = title;
        this.loading = false;
        this.errMsg = "";
    }
    ngOnInit() {
        this.lang = this.l.urlLang;
        this.translate.get('studentLogin').subscribe(t => {
            this.title.setTitle(t);
        });
    }
    register() {
        let user = {
            email: this.email,
            password: this.password,
            name: this.username
        };
        this.loading = true;
        this.api.studentReg(user).subscribe(user => {
            this.auth.setActiveUser(user === null || user === void 0 ? void 0 : user.student);
            this.loading = false;
            localStorage.setItem('quranUser', JSON.stringify(user === null || user === void 0 ? void 0 : user.student));
            this.router.navigateByUrl('/' + this.lang + '/home');
        }, err => {
            console.log("Error : ", err);
            this.loading = false;
        });
    }
}
StudentRegComponent.ɵfac = function StudentRegComponent_Factory(t) { return new (t || StudentRegComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"])); };
StudentRegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentRegComponent, selectors: [["app-student-reg"]], decls: 33, vars: 7, consts: [[1, "cont"], [1, "view"], [1, "text-center"], [1, "form-signin", 3, "submit"], [1, "mb-3", "font-weight-normal"], [1, "gold"], [1, "h3"], ["for", "inputUsername", 1, "sr-only"], ["type", "text", "id", "inputUsername", "placeholder", "Username", "required", "", "autofocus", "", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "Password Required", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btnCont"], ["type", "submit", 1, "btn", "btn-lg", "btn-warning", "btn-block"], ["class", "btnLoad", "src", "../../../assets/images/loading.gif", 4, "ngIf"], [4, "ngIf"], [1, "signUp"], [1, "link", 3, "routerLink"], [1, "mt-5", "mb-3", "text-muted"], ["src", "../../../assets/images/loading.gif", 1, "btnLoad"]], template: function StudentRegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function StudentRegComponent_Template_form_submit_3_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-logo-img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "alem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentRegComponent_Template_input_ngModelChange_14_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentRegComponent_Template_input_ngModelChange_17_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentRegComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, StudentRegComponent_img_23_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StudentRegComponent_span_24_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sign In Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A9 2020-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.lang + "/login/student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["RouterLinkDelegate"]], styles: [".cont[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: Cairo;\n    background-color: #eee;\n  }\n  .view[_ngcontent-%COMP%] {\n    width: 90%;\n    \n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    padding: 5%;\n    border-radius: 5%;\n    background-color: #333;\n    color: #fff;\n  }\n  .logoImg[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    height: 20vh;\n  }\n  input.form-control[_ngcontent-%COMP%] {\n    margin: 5% 0;\n    height: 8vh;\n    border-radius: 2vh;\n    border-color: gold;\n  }\n  .btnCont[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    border-radius: 2vh;\n    width: 50%;\n    height: 8vh;\n  }\n  .gold[_ngcontent-%COMP%] {\n    color: gold;\n    font-size: 5vh;\n    \n  }\n  .btnLoad[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .signUp[_ngcontent-%COMP%] {\n      margin: 2vh 0;\n  }\n  .link[_ngcontent-%COMP%]{\n      color: gold;\n      cursor: pointer;\n  }\n  @media (min-width: 1025px) {\n    .view[_ngcontent-%COMP%] {\n      width: 40%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtcmVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsNEVBQTRFO0lBQzVFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO01BQ0ksYUFBYTtFQUNqQjtFQUNBO01BQ0ksV0FBVztNQUNYLGVBQWU7RUFDbkI7RUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoic3R1ZGVudC1yZWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IENhaXJvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIH1cbiAgLnZpZXcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgLyogaGVpZ2h0OiA0MCU7ICovXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5sb2dvSW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICB9XG5cbiAgaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgICBtYXJnaW46IDUlIDA7XG4gICAgaGVpZ2h0OiA4dmg7XG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xuICAgIGJvcmRlci1jb2xvcjogZ29sZDtcbiAgfVxuICAuYnRuQ29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAydmg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDh2aDtcbiAgfVxuICAuZ29sZCB7XG4gICAgY29sb3I6IGdvbGQ7XG4gICAgZm9udC1zaXplOiA1dmg7XG4gICAgLyogLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrOyAqL1xuICB9XG4gIC5idG5Mb2FkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnNpZ25VcCB7XG4gICAgICBtYXJnaW46IDJ2aCAwO1xuICB9XG4gIC5saW5re1xuICAgICAgY29sb3I6IGdvbGQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgLnZpZXcge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentRegComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-reg',
                templateUrl: './student-reg.component.html',
                styleUrls: ['./student-reg.component.css']
            }]
    }], function () { return [{ type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"] }, { type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }, { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }]; }, null); })();


/***/ }),

/***/ "tQQw":
/*!*******************************************************************************!*\
  !*** ./projects/quran-web/src/app/shared/loaders/translate-browser.loader.ts ***!
  \*******************************************************************************/
/*! exports provided: TranslateBrowserLoader, translateBrowserLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateBrowserLoader", function() { return TranslateBrowserLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateBrowserLoaderFactory", function() { return translateBrowserLoaderFactory; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");



class TranslateBrowserLoader {
    constructor(http, transferState) {
        this.http = http;
        this.transferState = transferState;
    }
    getTranslation(lang) {
        const key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["makeStateKey"])('transfer-translate-' + lang);
        const data = this.transferState.get(key, null);
        // First we are looking for the translations in transfer-state, 
        // if none found, http load as fallback
        if (data) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
                observer.next(data);
                observer.complete();
            });
        }
        else {
            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](this.http).getTranslation(lang);
        }
    }
}
function translateBrowserLoaderFactory(httpClient, transferState) {
    return new TranslateBrowserLoader(httpClient, transferState);
}


/***/ }),

/***/ "tUWV":
/*!**********************************************************!*\
  !*** ./projects/quran-web/src/app/app-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _Screens_Admin_admin_teacher_profile_admin_teacher_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screens/Admin/admin-teacher-profile/admin-teacher-profile.component */ "FDD5");
/* harmony import */ var _Screens_Admin_admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screens/Admin/admin-students/admin-students.component */ "h74p");
/* harmony import */ var _Screens_Admin_admin_teachers_admin_teachers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Screens/Admin/admin-teachers/admin-teachers.component */ "9zOc");
/* harmony import */ var _Screens_Admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Screens/Admin/admin-home/admin-home.component */ "ozwy");
/* harmony import */ var _Screens_Admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Screens/Admin/admin/admin.component */ "94aK");
/* harmony import */ var _Screens_Admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Screens/Admin/login/login.component */ "8/rM");
/* harmony import */ var _Screens_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Screens/profile/profile.component */ "ABlm");
/* harmony import */ var _Screens_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Screens/student-reg/student-reg.component */ "t4Uj");
/* harmony import */ var _Screens_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Screens/student-login/student-login.component */ "yaOv");
/* harmony import */ var _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/loading/loading.component */ "4YiL");
/* harmony import */ var _Screens_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Screens/home/home.component */ "GwBx");
/* harmony import */ var _Screens_splash_splash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Screens/splash/splash.component */ "1bcC");
/* harmony import */ var _Screens_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Screens/teacher-profile/teacher-profile.component */ "2Q7E");
/* harmony import */ var _Screens_liberary_liberary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Screens/liberary/liberary.component */ "3RUT");
/* harmony import */ var _Screens_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Screens/teacher/teacher.component */ "37z2");
/* harmony import */ var _Components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/carousel/carousel.component */ "gIjB");
/* harmony import */ var _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Screens/login/login.component */ "yQrr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "tyNb");





















const lang = localStorage.getItem('lang') || 'ar';
console.log("LAng : ", lang);
const routes = [
    {
        path: 'ar', component: _Screens_splash_splash_component__WEBPACK_IMPORTED_MODULE_11__["SplashComponent"],
        children: [
            { path: '', component: _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"] },
            { path: 'login', component: _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
            { path: 'login/student', component: _Screens_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_8__["StudentLoginComponent"] },
            { path: 'reg/student', component: _Screens_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_7__["StudentRegComponent"] },
            {
                path: 'home', component: _Screens_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], children: [
                    { path: '', component: _Components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"] },
                    { path: 'teachers', component: _Screens_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_14__["TeacherComponent"] },
                    { path: 'teachers/:id', component: _Screens_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_12__["TeacherProfileComponent"] },
                    { path: 'library', component: _Screens_liberary_liberary_component__WEBPACK_IMPORTED_MODULE_13__["LiberaryComponent"] },
                ]
            },
            { path: 'admin/login', component: _Screens_Admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"] },
            {
                path: 'admin', component: _Screens_Admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], children: [
                    { path: '', component: _Screens_Admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"], pathMatch: 'full' },
                    { path: 'teachers', component: _Screens_Admin_admin_teachers_admin_teachers_component__WEBPACK_IMPORTED_MODULE_2__["AdminTeachersComponent"] },
                    { path: 'teachers/:id', component: _Screens_Admin_admin_teacher_profile_admin_teacher_profile_component__WEBPACK_IMPORTED_MODULE_0__["AdminTeacherProfileComponent"] },
                    { path: 'students', component: _Screens_Admin_admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_1__["AdminStudentsComponent"] },
                ]
            },
            { path: 'profile', component: _Screens_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
        ]
    },
    {
        path: 'en', component: _Screens_splash_splash_component__WEBPACK_IMPORTED_MODULE_11__["SplashComponent"],
        children: [
            { path: '', component: _Components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"] },
            { path: 'login', component: _Screens_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
            { path: 'login/student', component: _Screens_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_8__["StudentLoginComponent"] },
            { path: 'reg/student', component: _Screens_student_reg_student_reg_component__WEBPACK_IMPORTED_MODULE_7__["StudentRegComponent"] },
            {
                path: 'home', component: _Screens_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], children: [
                    { path: '', component: _Components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"] },
                    { path: 'teachers', component: _Screens_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_14__["TeacherComponent"] },
                    { path: 'teachers/:id', component: _Screens_teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_12__["TeacherProfileComponent"] },
                    { path: 'library', component: _Screens_liberary_liberary_component__WEBPACK_IMPORTED_MODULE_13__["LiberaryComponent"] }
                ]
            },
            {
                path: 'admin', component: _Screens_Admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], children: [
                    { path: '', component: _Screens_Admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"] },
                    { path: 'teachers', component: _Screens_Admin_admin_teachers_admin_teachers_component__WEBPACK_IMPORTED_MODULE_2__["AdminTeachersComponent"] },
                    { path: 'teachers/:id', component: _Screens_Admin_admin_teacher_profile_admin_teacher_profile_component__WEBPACK_IMPORTED_MODULE_0__["AdminTeacherProfileComponent"] },
                    { path: 'students', component: _Screens_Admin_admin_students_admin_students_component__WEBPACK_IMPORTED_MODULE_1__["AdminStudentsComponent"] },
                ]
            },
            { path: 'admin/login', component: _Screens_Admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"] },
            { path: 'profile', component: _Screens_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
        ]
    },
    { path: "**", redirectTo: lang }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uHEp":
/*!******************************************************************************!*\
  !*** ./projects/quran-web/src/app/Components/add-item/add-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddItemComponent {
    constructor() {
        this.addAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    add() {
        this.addAction.emit();
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(); };
AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["comp-add-item"]], inputs: { itemName: "itemName" }, outputs: { addAction: "addAction" }, decls: 5, vars: 1, consts: [[1, "cardItem", 3, "click"], [1, "addCont"], [1, "fa", "fa-plus", "fa-3x"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_div_click_0_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Add ", ctx.itemName, "");
    } }, styles: [".cardItem[_ngcontent-%COMP%] {\n  \n  padding-top: 5%;\n  \n  cursor: pointer;\n  height: 100%;\n  min-height: 25vh;\n  font-family: Cairo;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtpQkFDZTtFQUNmLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6ImFkZC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZEl0ZW0ge1xuICAvKiB3aWR0aDogMTh2dztcbiAgaGVpZ2h0OiAzMHZoOyAqL1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyNXZoO1xuICBmb250LWZhbWlseTogQ2Fpcm87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'comp-add-item',
                templateUrl: './add-item.component.html',
                styleUrls: ['./add-item.component.css']
            }]
    }], function () { return []; }, { itemName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['itemName']
        }], addAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['addAction']
        }] }); })();


/***/ }),

/***/ "yQrr":
/*!*********************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/login/login.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/lang.service */ "CFso");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







class LoginComponent {
    constructor(langService, title, translate) {
        this.langService = langService;
        this.title = title;
        this.translate = translate;
    }
    ngOnInit() {
        this.langService.intialization();
        this.lang = this.langService.urlLang;
        this.translate.get('siteName').subscribe(t => {
            if (t !== 'siteNameI')
                this.title.setTitle(t);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 49, vars: 21, consts: [[1, "all"], [1, "logo"], ["src", "../../../assets/images/logo.jpg", "alt", "", 1, "logoImg"], [1, "h3", "mb-3", "font-weight-normal"], [1, "gold"], [1, "container", "cont"], [1, "row"], [1, "col-md-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [1, "btn", "btn-warning", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "alem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shiekh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " as a Teacher you can add Lectures and view your students status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Talib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " as a Student you can see many Teachers and enroll in any course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " as a Admin you can see many Teachers and enroll in any course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "teacherLogin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.lang + "/login/student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, "loginNow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 13, "studentLogin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.lang + "/login/student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 15, "loginNow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 17, "adminLogin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.lang + "/admin/login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 19, "loginNow"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".all[_ngcontent-%COMP%]{\n    background-color: #333;\n    min-width: 100vw;\n    min-height: 100vh;\n    overflow: auto;\n\n}\n.cont[_ngcontent-%COMP%] {\n  \n  \n  font-family: Cairo;\n\n}\n.card[_ngcontent-%COMP%]{\n    width: 100%;\n    \n    \n    padding: 2vh;\n    border-radius: 2vh;\n    margin: 5% 0;\n}\n.view[_ngcontent-%COMP%] {\n  \n  \n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 5%;\n  border-radius: 5%;\n  \n  color: #fff;\n}\n.logo[_ngcontent-%COMP%]{\n    text-align: center;\n    padding: 10vh 0;\n    color: #fff;\n    font-family: Cairo;\n}\n.logoImg[_ngcontent-%COMP%]{\n    border-radius: 50%;\n    height: 20vh;\n}\ninput.form-control[_ngcontent-%COMP%]{\n    margin: 5% 0;\n    height: 8vh;\n    border-radius: 2vh;\n    border-color: gold;\n}\n.btnCont[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n}\n.btn[_ngcontent-%COMP%]{\n    border-radius: 2vh;\n    \n\n}\n.gold[_ngcontent-%COMP%] {\n    color: gold;\n    font-size: 5vh;\n    \n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjOztBQUVsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNEVBQTRFO0VBQzVFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxvQ0FBb0M7O0VBRXRDIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcblxufVxuLmNvbnQge1xuICAvKiB3aWR0aDogMTAwdnc7ICovXG4gIC8qIGhlaWdodDogMTAwdmg7ICovXG4gIGZvbnQtZmFtaWx5OiBDYWlybztcblxufVxuLmNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgKi9cbiAgICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgICBwYWRkaW5nOiAydmg7XG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xuICAgIG1hcmdpbjogNSUgMDtcbn1cbi52aWV3IHtcbiAgLyogd2lkdGg6IDQwJTsgKi9cbiAgLyogaGVpZ2h0OiA0MCU7ICovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIHBhZGRpbmc6IDUlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgKi9cbiAgY29sb3I6ICNmZmY7XG59XG4ubG9nb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTB2aCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBDYWlybztcbn1cbi5sb2dvSW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDIwdmg7XG59XG5cbmlucHV0LmZvcm0tY29udHJvbHtcbiAgICBtYXJnaW46IDUlIDA7XG4gICAgaGVpZ2h0OiA4dmg7XG4gICAgYm9yZGVyLXJhZGl1czogMnZoO1xuICAgIGJvcmRlci1jb2xvcjogZ29sZDtcbn1cbi5idG5Db250e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDJ2aDtcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xuXG59XG4uZ29sZCB7XG4gICAgY29sb3I6IGdvbGQ7XG4gICAgZm9udC1zaXplOiA1dmg7XG4gICAgLyogLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrOyAqL1xuXG4gIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "yaOv":
/*!*************************************************************************************!*\
  !*** ./projects/quran-web/src/app/Screens/student-login/student-login.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StudentLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLoginComponent", function() { return StudentLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/auth.service */ "Uxgo");
/* harmony import */ var _Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/api-call.service */ "9gK7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Services/lang.service */ "CFso");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/logo/logo.component */ "4XdC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");












function StudentLoginComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} }
function StudentLoginComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StudentLoginComponent {
    constructor(auth, api, router, l, translate, title) {
        this.auth = auth;
        this.api = api;
        this.router = router;
        this.l = l;
        this.translate = translate;
        this.title = title;
        this.loading = false;
    }
    ngOnInit() {
        this.lang = this.l.urlLang;
        this.translate.get('studentLogin').subscribe(t => {
            this.title.setTitle(t);
        });
    }
    login() {
        if (!this.email && !this.password) {
            this.errMsg = "Sorry but PW and Email Required";
        }
        else {
            this.loading = true;
            this.api.studentLogin(this.email, this.password).subscribe(data => {
                console.log("Data : ", data);
                this.auth.setActiveUser(data === null || data === void 0 ? void 0 : data.student);
                localStorage.setItem('quranUser', JSON.stringify(data === null || data === void 0 ? void 0 : data.student));
                this.router.navigateByUrl('/' + this.lang + '/home');
            }, err => {
                console.log("err: ", err.error);
                this.loading = false;
                this.errMsg = err.error.message;
            }, () => {
                this.loading = false;
                this.errMsg = "";
            });
        }
    }
}
StudentLoginComponent.ɵfac = function StudentLoginComponent_Factory(t) { return new (t || StudentLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"])); };
StudentLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentLoginComponent, selectors: [["app-student-login"]], decls: 30, vars: 6, consts: [[1, "cont"], [1, "view"], [1, "text-center"], [1, "form-signin", 3, "submit"], [1, "mb-3", "font-weight-normal"], [1, "gold"], [1, "h3"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "Password Required", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btnCont"], ["type", "submit", 1, "btn", "btn-lg", "btn-warning", "btn-block"], ["class", "btnLoad", "src", "../../../assets/images/loading.gif", 4, "ngIf"], [4, "ngIf"], [1, "signUp"], [1, "link", 3, "routerLink"], [1, "mt-5", "mb-3", "text-muted"], ["src", "../../../assets/images/loading.gif", 1, "btnLoad"]], template: function StudentLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function StudentLoginComponent_Template_form_submit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-logo-img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "alem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, StudentLoginComponent_img_20_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StudentLoginComponent_span_21_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Don't Have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sign Up Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00A9 2020-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + ctx.lang + "/reg/student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errMsg);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _Components_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["RouterLinkDelegate"]], styles: [".cont[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Cairo;\n  background-color: #eee;\n}\n.view[_ngcontent-%COMP%] {\n  width: 90%;\n  \n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 5%;\n  border-radius: 5%;\n  background-color: #333;\n  color: #fff;\n}\n.logoImg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 20vh;\n}\ninput.form-control[_ngcontent-%COMP%] {\n  margin: 5% 0;\n  height: 8vh;\n  border-radius: 2vh;\n  border-color: gold;\n}\n.btnCont[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 2vh;\n  width: 50%;\n  height: 8vh;\n}\n.gold[_ngcontent-%COMP%] {\n  color: gold;\n  font-size: 5vh;\n  \n}\n.btnLoad[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.signUp[_ngcontent-%COMP%] {\n  margin: 2vh 0;\n}\n.link[_ngcontent-%COMP%] {\n  color: gold;\n  cursor: pointer;\n}\n@media (min-width: 1025px) {\n  .view[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0RUFBNEU7RUFDNUUsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InN0dWRlbnQtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLnZpZXcge1xuICB3aWR0aDogOTAlO1xuICAvKiBoZWlnaHQ6IDQwJTsgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgcGFkZGluZzogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5sb2dvSW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDIwdmg7XG59XG5cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbjogNSUgMDtcbiAgaGVpZ2h0OiA4dmg7XG4gIGJvcmRlci1yYWRpdXM6IDJ2aDtcbiAgYm9yZGVyLWNvbG9yOiBnb2xkO1xufVxuLmJ0bkNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG4ge1xuICBib3JkZXItcmFkaXVzOiAydmg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogOHZoO1xufVxuLmdvbGQge1xuICBjb2xvcjogZ29sZDtcbiAgZm9udC1zaXplOiA1dmg7XG4gIC8qIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjazsgKi9cbn1cbi5idG5Mb2FkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNpZ25VcCB7XG4gIG1hcmdpbjogMnZoIDA7XG59XG4ubGluayB7XG4gIGNvbG9yOiBnb2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLnZpZXcge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-login',
                templateUrl: './student-login.component.html',
                styleUrls: ['./student-login.component.css']
            }]
    }], function () { return [{ type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _Services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _Services_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map