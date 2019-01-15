(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Kid/viewkids/viewkids.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Kid/viewkids/viewkids.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0tpZC92aWV3a2lkcy92aWV3a2lkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Kid/viewkids/viewkids.component.html":
/*!******************************************************!*\
  !*** ./src/app/Kid/viewkids/viewkids.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf = \"kids?.length > 0; else noKids\">\n  <table class=\"table table-dark\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Code</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">More info</th>\n        \n      </tr>\n    </thead>\n    <tbody>\n      <tr  *ngFor=\"let kid of kids\" >\n        <th scope=\"row\"><button disabled class=\"btn btn-outline-info\">{{kid.id}}</button></th>\n        <td>{{kid.Name}}</td>\n        <th scope=\"col\"><button type=\"button\" class=\"btn btn-success\">Details</button></th>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<ng-template #noKids>\n<hr>\n<h5>There are no kids to list</h5>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/Kid/viewkids/viewkids.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Kid/viewkids/viewkids.component.ts ***!
  \****************************************************/
/*! exports provided: ViewkidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewkidsComponent", function() { return ViewkidsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/kid.service */ "./src/app/services/kid.service.ts");



var ViewkidsComponent = /** @class */ (function () {
    //const
    function ViewkidsComponent(kidService) {
        this.kidService = kidService;
    }
    ViewkidsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kidService.GetItem().subscribe(function (Kids) {
            //console.log(Kids);
            _this.kids = Kids;
        });
    };
    ViewkidsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewkids',
            template: __webpack_require__(/*! ./viewkids.component.html */ "./src/app/Kid/viewkids/viewkids.component.html"),
            styles: [__webpack_require__(/*! ./viewkids.component.css */ "./src/app/Kid/viewkids/viewkids.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kid_service__WEBPACK_IMPORTED_MODULE_2__["KidService"]])
    ], ViewkidsComponent);
    return ViewkidsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _kid_addkid_addkid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kid/addkid/addkid.component */ "./src/app/kid/addkid/addkid.component.ts");
/* harmony import */ var _services_kid_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/kid.service */ "./src/app/services/kid.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
/* harmony import */ var _learn_learn_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./learn/learn.component */ "./src/app/learn/learn.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _Kid_viewkids_viewkids_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Kid/viewkids/viewkids.component */ "./src/app/Kid/viewkids/viewkids.component.ts");
/* harmony import */ var _newkid_newkids_list_newkids_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./newkid/newkids-list/newkids-list.component */ "./src/app/newkid/newkids-list/newkids-list.component.ts");
/* harmony import */ var _newkid_newkid_detail_newkid_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./newkid/newkid-detail/newkid-detail.component */ "./src/app/newkid/newkid-detail/newkid-detail.component.ts");
/* harmony import */ var _newkid_newkid_form_newkid_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./newkid/newkid-form/newkid-form.component */ "./src/app/newkid/newkid-form/newkid-form.component.ts");





//Fierbase






//Services

//Components












var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'application', component: _application_application_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationComponent"] },
    { path: 'learn', component: _learn_learn_component__WEBPACK_IMPORTED_MODULE_16__["LearnComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"] },
    { path: 'addkid', component: _kid_addkid_addkid_component__WEBPACK_IMPORTED_MODULE_10__["AddkidComponent"] },
    { path: 'viewkids', component: _Kid_viewkids_viewkids_component__WEBPACK_IMPORTED_MODULE_20__["ViewkidsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _application_application_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationComponent"],
                _learn_learn_component__WEBPACK_IMPORTED_MODULE_16__["LearnComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _kid_addkid_addkid_component__WEBPACK_IMPORTED_MODULE_10__["AddkidComponent"],
                _Kid_viewkids_viewkids_component__WEBPACK_IMPORTED_MODULE_20__["ViewkidsComponent"],
                _newkid_newkids_list_newkids_list_component__WEBPACK_IMPORTED_MODULE_21__["NewkidsListComponent"],
                _newkid_newkid_detail_newkid_detail_component__WEBPACK_IMPORTED_MODULE_22__["NewkidDetailComponent"],
                _newkid_newkid_form_newkid_form_component__WEBPACK_IMPORTED_MODULE_23__["NewkidFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"] // imports firebase/storage only needed for storage features
            ],
            providers: [_services_kid_service__WEBPACK_IMPORTED_MODULE_11__["KidService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/application.component.css":
/*!*******************************************************!*\
  !*** ./src/app/application/application.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/application/application.component.html":
/*!********************************************************!*\
  !*** ./src/app/application/application.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  application works!\n</p>\n"

/***/ }),

/***/ "./src/app/application/application.component.ts":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent() {
    }
    ApplicationComponent.prototype.ngOnInit = function () {
    };
    ApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.css */ "./src/app/application/application.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1>\n      Welcome to {{ title }}!\n    </h1>\n    <img width=\"300\" alt=\"Angular Logo\" src=\"../assets/img/nobles.png\">\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Nobles kids of academy';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/kid/addkid/addkid.component.css":
/*!*************************************************!*\
  !*** ./src/app/kid/addkid/addkid.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpZC9hZGRraWQvYWRka2lkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/kid/addkid/addkid.component.html":
/*!**************************************************!*\
  !*** ./src/app/kid/addkid/addkid.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><img src=\"../../../assets/img/addkids.png\" width=\"200\" height=\"200\" class=\"rounded mx-auto d-block\"></div>\r\n<div class=\"card text-center\">\r\n  <div class=\"card-header\">\r\n    <ul class=\"nav nav-tabs card-header-tabs\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\">Add new kid *</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"viewkids\">View All Kids</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n    <form #myForm=\"ngForm\" (ngSubmit)='onSubmit()' novalidate>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"id\">Automatic generate code for new kid</label>\r\n          <input [(ngModel)]='kids.id' name=\"id\" type=\"text\" class=\"form-control is-valid\" id=\"id\" placeholder=\"000000000000\"\r\n            style=\"text-align:center;\" disabled>\r\n          <div class=\"valid-feedback\">\r\n            Keep this code in save to give it to parent.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"Name\">Kid full name</label>\r\n          <input [(ngModel)]='kids.Name' name=\"Name\" type=\"text\" #Name= \"ngModel\" [ngClass]= \"{'form-control' : true, 'is-invalid' : !Name?.valid && Name?.touched,\r\n          'is-valid' : Name?.valid && Name?.touched }\" id=\"Name\" direction:RTL\r\n            placeholder=\"Kid arabic name\" required minlength=\"5\">\r\n            <div *ngIf=\"Name?.errors?.required && Name?.touched\" class=\"invalid-feedback\">\r\n              Required valid Name.\r\n            </div>\r\n            <div *ngIf=\"Name?.errors?.minlength && Name?.touched\" class=\"invalid-feedback\">\r\n              Name required 5 character at least.\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"birthday\">Birth Day</label>\r\n          <input [(ngModel)]='kids.BirthDay' name=\"BirthDay\" type=\"date\" #BirthDay =\"ngModel\" [ngClass]= \"{'form-control' : true, 'is-invalid' : !BirthDay?.valid && BirthDay?.touched,\r\n          'is-valid' : BirthDay?.valid && BirthDay?.touched }\" id=\"birthday\" required>\r\n          <div *ngIf=\"BirthDay?.errors?.required && BirthDay?.touched\" class=\"invalid-feedback\">\r\n            Required valid Birth Day.\r\n          </div>\r\n          <div *ngIf=\"Name?.errors?.minlength && Name?.touched\" class=\"invalid-feedback\">\r\n            Birth Day required 5 character at least.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label for=\"address\">Address</label>\r\n          <input [(ngModel)]='kids.Address' name=\"Address\" type=\"text\" #Address=\"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !Address?.valid && Address?.touched,\r\n          'is-valid' : Address?.valid && Address?.touched }\" id=\"address\" placeholder=\"Address in details\"\r\n            required minlength=\"2\">\r\n            <div *ngIf=\"Address?.errors?.required && Address?.touched\" class=\"invalid-feedback\">\r\n              Required valid Address.\r\n            </div>\r\n            <div *ngIf=\"Address?.errors?.minlength && Address?.touched\" class=\"invalid-feedback\">\r\n              Address required 2 character at least.\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"fatherName\">Father Name</label>\r\n          <input [(ngModel)]='kids.FatherName' name=\"FatherName\" type=\"text\" #FatherName= \"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !FatherName?.valid && FatherName?.touched,\r\n          'is-valid' : FatherName?.valid && FatherName?.touched }\" id=\"fatherName\"\r\n            placeholder=\"Full name arabic\" required minlength=\"5\">\r\n            <div *ngIf=\"FatherName?.errors?.required && FatherName?.touched\" class=\"invalid-feedback\">\r\n              Required valid Father Name.\r\n            </div>\r\n            <div *ngIf=\"FatherName?.errors?.minlength && FatherName?.touched\" class=\"invalid-feedback\">\r\n              Father Name required 5 character at least.\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"fatherJop\">Father jop</label>\r\n          <input [(ngModel)]='kids.FatherJop' name=\"FatherJop\" type=\"text\" #FatherJop = \"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !FatherJop?.valid && FatherJop?.touched,\r\n          'is-valid' : FatherJop?.valid && FatherJop?.touched }\" id=\"fatherJop\"\r\n            placeholder=\"Father jop here\" required minlength=\"2\">\r\n            <div *ngIf=\"FatherJop?.errors?.required && FatherJop?.touched\" class=\"invalid-feedback\">\r\n              Required valid Father jop.\r\n            </div>\r\n            <div *ngIf=\"FatherJop?.errors?.minlength && FatherJop?.touched\" class=\"invalid-feedback\">\r\n              Father jop required 2 character at least.\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"fatherPhone\">Father Phone</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">+2</span>\r\n            </div>\r\n            <input [(ngModel)]='kids.FatherPhone' name=\"FatherPhone\" type=\"text\" #FatherPhone = \"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !FatherPhone?.valid && FatherPhone?.touched,\r\n            'is-valid' : FatherPhone?.valid && FatherPhone?.touched }\" id=\"fatherPhone\"\r\n              placeholder=\"Vodafon or Orang or Etisalat\" aria-describedby=\"inputGroupPrepend3\" required pattern=\"^[0-9]{11}\">\r\n              <div *ngIf=\"FatherPhone?.errors?.required && FatherPhone?.touched\" class=\"invalid-feedback\">\r\n                Required valid Father Phone.\r\n              </div>\r\n              <div *ngIf=\"FatherPhone?.errors?.pattern && FatherPhone?.touched\" class=\"invalid-feedback\">\r\n                Father mobile Phone required 11 numbers at least.\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"motherName\">Mother Name</label>\r\n          <input [(ngModel)]='kids.MotherName' name=\"MotherName\" type=\"text\" #MotherName=\"ngModel\" [ngClass]= \"{'form-control' : true, 'is-invalid' : !MotherName?.valid && MotherName?.touched,\r\n          'is-valid' : MotherName?.valid && MotherName?.touched }\" id=\"motherName\"\r\n            placeholder=\"Full name arabic\" required minlength=\"5\">\r\n            <div *ngIf=\"MotherName?.errors?.required && MotherName?.touched\" class=\"invalid-feedback\">\r\n              Required valid Mother Name.\r\n            </div>\r\n            <div *ngIf=\"MotherName?.errors?.minlength && MotherName?.touched\" class=\"invalid-feedback\">\r\n              Mother Name required 5 character at least.\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"MotherJop\">Mother jop</label>\r\n          <input [(ngModel)]='kids.MotherJop' name=\"MotherJop\" type=\"text\" #MotherJop = \"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !MotherJop?.valid && MotherJop?.touched,\r\n          'is-valid' : MotherJop?.valid && MotherJop?.touched }\" id=\"MotherJop\"\r\n            placeholder=\"Mother jop here\" required minlength=\"2\">\r\n            <div *ngIf=\"MotherJop?.errors?.required && MotherJop?.touched\" class=\"invalid-feedback\">\r\n              Required valid Mother jop.\r\n            </div>\r\n            <div *ngIf=\"MotherJop?.errors?.minlength && MotherJop?.touched\" class=\"invalid-feedback\">\r\n              Mother jop required 2 character at least.\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"motherPhone\">Mother Phone</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">+2</span>\r\n            </div>\r\n            <input [(ngModel)]='kids.MotherPhone' name=\"MotherPhone\" type=\"text\" #MotherPhone= \"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !MotherPhone?.valid && MotherPhone?.touched,\r\n            'is-valid' : MotherPhone?.valid && MotherPhone?.touched }\" id=\"motherPhone\"\r\n              placeholder=\"Vodafon or Orang or Etisalat\" aria-describedby=\"inputGroupPrepend3\" required pattern=\"^[0-9]{11}\">\r\n              <div *ngIf=\"MotherPhone?.errors?.required && MotherPhone?.touched\" class=\"invalid-feedback\">\r\n                Required valid Mother Phone.\r\n              </div>\r\n              <div *ngIf=\"MotherPhone?.errors?.pattern && MotherPhone?.touched\" class=\"invalid-feedback\">\r\n                Mother mobile Phone required 11 numbers at least.\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"recipientName\">Recipient Name</label>\r\n          <input [(ngModel)]='kids.RecipientName' name=\"RecipientName\" type=\"text\" #RecipientName =\"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !RecipientName?.valid && RecipientName?.touched,\r\n          'is-valid' : RecipientName?.valid && RecipientName?.touched } \" id=\"recipientName\"\r\n            placeholder=\"Full name arabic like ID\" required minlength=\"5\">\r\n            <div *ngIf=\"RecipientName?.errors?.required && RecipientName?.touched\" class=\"invalid-feedback\">\r\n              Required valid Recipient Name.\r\n            </div>\r\n            <div *ngIf=\"RecipientName?.errors?.minlength && RecipientName?.touched\" class=\"invalid-feedback\">\r\n              Recipient Name required 5 character at least.\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"RecipientPhone\">Recipient Phone</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"recipientPhone\">+2</span>\r\n            </div>\r\n            <input [(ngModel)]='kids.RecipientPhone' name=\"RecipientPhone\" type=\"text\" #RecipientPhone = \"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !RecipientPhone?.valid && RecipientPhone?.touched,\r\n            'is-valid' : RecipientPhone?.valid && RecipientPhone?.touched }\" id=\"RecipientPhone\"\r\n              placeholder=\"Vodafon or Orang or Etisalat\" aria-describedby=\"inputGroupPrepend3\" required pattern=\"^[0-9]{11}\">\r\n              <div *ngIf=\"RecipientPhone?.errors?.required && RecipientPhone?.touched\" class=\"invalid-feedback\">\r\n                Required valid Recipient Phone.\r\n              </div>\r\n              <div *ngIf=\"RecipientPhone?.errors?.pattern && RecipientPhone?.touched\" class=\"invalid-feedback\">\r\n                Recipient mobile Phone required 11 numbers at least.\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"DepartName\">Select depart</label>\r\n          <select name=\"DepartName\" class=\"form-control\" id=\"DepartName\" [(ngModel)]='kids.DepartName'>\r\n            <option [ngValue]=\"null\">Choose depart</option>\r\n            <option *ngFor=\"let Depart of Departs\" [ngValue]=\"Depart.Name\">{{ Depart.Name }}</option>\r\n          </select>\r\n          <div class=\"invalid-feedback\">\r\n            Please provide a valid Depart Name.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"classes\">Class Name</label>\r\n          <input [(ngModel)]='kids.ClassName' name=\"ClassName\" type=\"text\" #ClassName=\"ngModel\" [ngClass]=\"{'form-control' : true, 'is-invalid' : !ClassName?.valid && ClassName?.touched,\r\n        'is-valid' : ClassName?.valid && ClassName?.touched } \"\r\n            id=\"classes\" placeholder=\"Type right class name case sensitive\" required minlength=\"2\">\r\n          <div *ngIf=\"ClassName?.errors?.required && ClassName?.touched\" class=\"invalid-feedback\">\r\n            Required valid class Name.\r\n          </div>\r\n          <div *ngIf=\"ClassName?.errors?.minlength && ClassName?.touched\" class=\"invalid-feedback\">\r\n            Class Name required 2 character at least.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"Note\">Note</label>\r\n          <!-- <input [(ngModel)] ='kids.Note' name=\"Note\" type=\"text\" class=\"form-control \" id=\"Note\" placeholder=\"Type your comment or note here\"> -->\r\n          <textarea [(ngModel)]='kids.Note' name=\"Note\" rows=\"1\" class=\"form-control \" id=\"Note\" placeholder=\"Type your comment or note here\"></textarea>\r\n          <div class=\"invalid-feedback\">\r\n            Please provide a valid Note.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"form-check\">\r\n          <input  Class=\"form-check-input\" type=\"checkbox\" id=\"Agree\" name=\"Agree\" required checked> \r\n          <label class=\"form-check-label \" for=\"Agree\">\r\n            Agree to <a href='addkid'>terms</a> and <a href='addkid'>conditions</a>\r\n          </label>\r\n          <div *ngIf=\"Agree?.errors?.required\" class=\"invalid-feedback\">\r\n            You must agree before submitting.\r\n          </div>\r\n        </div>\r\n        <input class=\"btn btn-primary\" [disabled]=\"!myForm.form.valid\" type=\"submit\" value=\"Save\">\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!-- is-valid -->\r\n<!-- is-invaled -->"

/***/ }),

/***/ "./src/app/kid/addkid/addkid.component.ts":
/*!************************************************!*\
  !*** ./src/app/kid/addkid/addkid.component.ts ***!
  \************************************************/
/*! exports provided: AddkidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddkidComponent", function() { return AddkidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/kid.service */ "./src/app/services/kid.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddkidComponent = /** @class */ (function () {
    //const
    function AddkidComponent(kidService, router) {
        this.kidService = kidService;
        this.router = router;
        //variables
        this.kids = {
            id: Math.random().toString().substr(2, 4),
            Name: null,
            BirthDay: null,
            Address: null,
            FatherName: null,
            FatherJop: null,
            FatherPhone: null,
            MotherName: null,
            MotherJop: null,
            MotherPhone: null,
            RecipientName: null,
            RecipientPhone: null,
            Note: null,
            DepartName: null,
            ClassName: null
        };
        this.Departs = [
            { Name: 'Main Deprt' },
            { Name: 'Naser Depart' },
            { Name: 'Morad Depart' }
        ];
    }
    AddkidComponent.prototype.ngOnInit = function () {
    };
    AddkidComponent.prototype.onSubmit = function () {
        if (confirm('Are you sure you want to save this kid into the database?')) {
            this.kidService.addkid(this.kids);
            this.kids = {
                id: Math.random().toString().substr(2, 4),
                Name: null,
                BirthDay: null,
                Address: null,
                FatherName: null,
                FatherJop: null,
                FatherPhone: null,
                MotherName: null,
                MotherJop: null,
                MotherPhone: null,
                RecipientName: null,
                RecipientPhone: null,
                Note: null,
                DepartName: null,
                ClassName: null
            };
            this.router.navigate(['viewkids']);
        }
        else {
            // Do nothing!
        }
    };
    AddkidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addkid',
            template: __webpack_require__(/*! ./addkid.component.html */ "./src/app/kid/addkid/addkid.component.html"),
            styles: [__webpack_require__(/*! ./addkid.component.css */ "./src/app/kid/addkid/addkid.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kid_service__WEBPACK_IMPORTED_MODULE_2__["KidService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddkidComponent);
    return AddkidComponent;
}());



/***/ }),

/***/ "./src/app/learn/learn.component.css":
/*!*******************************************!*\
  !*** ./src/app/learn/learn.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuL2xlYXJuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/learn/learn.component.html":
/*!********************************************!*\
  !*** ./src/app/learn/learn.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  learn works!\n</p>\n"

/***/ }),

/***/ "./src/app/learn/learn.component.ts":
/*!******************************************!*\
  !*** ./src/app/learn/learn.component.ts ***!
  \******************************************/
/*! exports provided: LearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnComponent", function() { return LearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LearnComponent = /** @class */ (function () {
    function LearnComponent() {
    }
    LearnComponent.prototype.ngOnInit = function () {
    };
    LearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-learn',
            template: __webpack_require__(/*! ./learn.component.html */ "./src/app/learn/learn.component.html"),
            styles: [__webpack_require__(/*! ./learn.component.css */ "./src/app/learn/learn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LearnComponent);
    return LearnComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"/\">Nobles Kids Academy</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"application\">Fill Application</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"learn\">Learn</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Link</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Link</a>\n            </li>\n          </ul>\n          <ul class=\"form-inline my-2 my-lg-0\">\n              <ul  class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                              User profile\n                            </a>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                              <a class=\"dropdown-item\" href=\"addkid\">Add New Kid</a>\n                              <a class=\"dropdown-item\" href=\"viewkids\">View all kids</a>\n                              <div class=\"dropdown-divider\"></div>\n                              <a class=\"dropdown-item\" href=\"#\">Sign out</a>\n                            </div>\n                          </li>\n              </ul>\n            <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"login\"><img src=\"../../assets/img/login.png\"><span>Login</span><span class=\"sr-only\">(current)</span></a>\n                    </li>\n            </ul>\n            <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"register\"><img src=\"../../assets/img/register.png\"><span>Register</span> <span class=\"sr-only\">(current)</span></a>\n                    </li>\n            </ul>\n        </ul>\n        </div>\n      </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/newkid/newkid-detail/newkid-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/newkid/newkid-detail/newkid-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2tpZC9uZXdraWQtZGV0YWlsL25ld2tpZC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/newkid/newkid-detail/newkid-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/newkid/newkid-detail/newkid-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  newkid-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/newkid/newkid-detail/newkid-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/newkid/newkid-detail/newkid-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewkidDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewkidDetailComponent", function() { return NewkidDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewkidDetailComponent = /** @class */ (function () {
    function NewkidDetailComponent() {
    }
    NewkidDetailComponent.prototype.ngOnInit = function () {
    };
    NewkidDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newkid-detail',
            template: __webpack_require__(/*! ./newkid-detail.component.html */ "./src/app/newkid/newkid-detail/newkid-detail.component.html"),
            styles: [__webpack_require__(/*! ./newkid-detail.component.css */ "./src/app/newkid/newkid-detail/newkid-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewkidDetailComponent);
    return NewkidDetailComponent;
}());



/***/ }),

/***/ "./src/app/newkid/newkid-form/newkid-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/newkid/newkid-form/newkid-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2tpZC9uZXdraWQtZm9ybS9uZXdraWQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/newkid/newkid-form/newkid-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/newkid/newkid-form/newkid-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  newkid-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/newkid/newkid-form/newkid-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/newkid/newkid-form/newkid-form.component.ts ***!
  \*************************************************************/
/*! exports provided: NewkidFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewkidFormComponent", function() { return NewkidFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewkidFormComponent = /** @class */ (function () {
    function NewkidFormComponent() {
    }
    NewkidFormComponent.prototype.ngOnInit = function () {
    };
    NewkidFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newkid-form',
            template: __webpack_require__(/*! ./newkid-form.component.html */ "./src/app/newkid/newkid-form/newkid-form.component.html"),
            styles: [__webpack_require__(/*! ./newkid-form.component.css */ "./src/app/newkid/newkid-form/newkid-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewkidFormComponent);
    return NewkidFormComponent;
}());



/***/ }),

/***/ "./src/app/newkid/newkids-list/newkids-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/newkid/newkids-list/newkids-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2tpZC9uZXdraWRzLWxpc3QvbmV3a2lkcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/newkid/newkids-list/newkids-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/newkid/newkids-list/newkids-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  newkids-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/newkid/newkids-list/newkids-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/newkid/newkids-list/newkids-list.component.ts ***!
  \***************************************************************/
/*! exports provided: NewkidsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewkidsListComponent", function() { return NewkidsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewkidsListComponent = /** @class */ (function () {
    function NewkidsListComponent() {
    }
    NewkidsListComponent.prototype.ngOnInit = function () {
    };
    NewkidsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newkids-list',
            template: __webpack_require__(/*! ./newkids-list.component.html */ "./src/app/newkid/newkids-list/newkids-list.component.html"),
            styles: [__webpack_require__(/*! ./newkids-list.component.css */ "./src/app/newkid/newkids-list/newkids-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewkidsListComponent);
    return NewkidsListComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/kid.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/kid.service.ts ***!
  \*****************************************/
/*! exports provided: KidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidService", function() { return KidService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/index */ "./node_modules/rxjs/operators/index.js");
/* harmony import */ var rxjs_operators_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_index__WEBPACK_IMPORTED_MODULE_3__);




var KidService = /** @class */ (function () {
    function KidService(db) {
        this.db = db;
        // this.Kids = db.collection('Kids').valueChanges();
        this.KidsCollection = this.db.collection('Kids', function (ref) { return ref.orderBy('id', 'asc'); });
        this.Kids = this.KidsCollection.snapshotChanges().pipe(Object(rxjs_operators_index__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.key = a.payload.doc.id;
                return data;
            });
        }));
    }
    KidService.prototype.GetItem = function () {
        return this.Kids;
    };
    KidService.prototype.addkid = function (kid) {
        this.KidsCollection.add(kid);
    };
    KidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], KidService);
    return KidService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCFjbMzUheBtwwxOyVIrqFj8i61_OsQJwA",
        authDomain: "noblesacademy-d0e0c.firebaseapp.com",
        databaseURL: "https://noblesacademy-d0e0c.firebaseio.com",
        projectId: "noblesacademy-d0e0c",
        storageBucket: "noblesacademy-d0e0c.appspot.com",
        messagingSenderId: "76286661264"
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ANGProjects\NKA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map