webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"../../../../../src/app/authentication/authentication.module.ts",
		"authentication.module",
		"common"
	],
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"home.module"
	],
	"./offers/offers.module": [
		"../../../../../src/app/offers/offers.module.ts",
		"offers.module",
		"common"
	],
	"./users/users.module": [
		"../../../../../src/app/users/users.module.ts",
		"users.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'user',
        loadChildren: './users/users.module#UsersModule',
    },
    {
        path: 'offers',
        loadChildren: './offers/offers.module#OffersModule',
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".animationload {\r\n    background-color: #fff;\r\n    height: 100%;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 10000;\r\n}\r\n\r\n.osahanloading {\r\n    -webkit-animation: 1.5s linear 0s normal none infinite running osahanloading;\r\n            animation: 1.5s linear 0s normal none infinite running osahanloading;\r\n    background: #fed37f none repeat scroll 0 0;\r\n    border-radius: 50px;\r\n    height: 50px;\r\n    left: 50%;\r\n    margin-left: -25px;\r\n    margin-top: -25px;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 50px;\r\n}\r\n\r\n.osahanloading::after {\r\n    -webkit-animation: 1.5s linear 0s normal none infinite running osahanloading_after;\r\n            animation: 1.5s linear 0s normal none infinite running osahanloading_after;\r\n    border-color: #85d6de transparent;\r\n    border-radius: 80px;\r\n    border-style: solid;\r\n    border-width: 10px;\r\n    content: \"\";\r\n    height: 80px;\r\n    left: -15px;\r\n    position: absolute;\r\n    top: -15px;\r\n    width: 80px;\r\n}\r\n\r\n@-webkit-keyframes osahanloading {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n    50% {\r\n        background: #85d6de none repeat scroll 0 0;\r\n        -webkit-transform: rotate(180deg);\r\n                transform: rotate(180deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes osahanloading {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n    50% {\r\n        background: #85d6de none repeat scroll 0 0;\r\n        -webkit-transform: rotate(180deg);\r\n                transform: rotate(180deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Application Brato</h1>\r\n<a [routerLink]=\"[ '/auth/register']\">Register</a>\r\n<a [routerLink]=\"[ '/auth/login']\">Login</a>\r\n<a [routerLink]=\"[ '/auth/logout']\">Logout</a>\r\n<button class=\"btn btn-default\">Test Button</button> -->\r\n<div>\r\n    <app-navigation></app-navigation>\r\n    <router-outlet (activate)=\"onRouteChange()\"></router-outlet>\r\n</div>\r\n\r\n<div *ngIf=\"loaderHidden == false\" class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"animationload\">\r\n            <div class=\"osahanloading\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LOADER_TIMEOUT = 1000;
var AppComponent = (function () {
    function AppComponent(notificationService, vcr) {
        this.notificationService = notificationService;
        this.vcr = vcr;
        this.notificationService.init(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loaderHidden = true;
    };
    AppComponent.prototype.onRouteChange = function () {
        var _this = this;
        this.loaderHidden = false;
        setTimeout(function () {
            _this.loaderHidden = true;
        }, LOADER_TIMEOUT);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_notification_service__["a" /* NotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_file_uploader_service__ = __webpack_require__("../../../../../src/app/services/file-uploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_offers_service__ = __webpack_require__("../../../../../src/app/services/offers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_guards_logout_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/logout-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_requester_service__ = __webpack_require__("../../../../../src/app/services/http-requester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = CoreModule_1 = (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_1__services_offers_service__["a" /* OffersService */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_7__services_http_requester_service__["a" /* HttpRequesterService */],
                __WEBPACK_IMPORTED_MODULE_4__services_user_storage_service__["a" /* UserStorageService */],
                __WEBPACK_IMPORTED_MODULE_5__services_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_3__services_guards_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_2__services_guards_logout_guard_service__["a" /* LogoutGuardService */],
                __WEBPACK_IMPORTED_MODULE_0__services_file_uploader_service__["a" /* FileUploaderService */]
            ]
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: []
    })
], CoreModule);

var CoreModule_1;
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(text) {
        if (text === void 0) { text = ''; }
        this.text = text;
    }
    return Comment;
}());

//# sourceMappingURL=comment.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/file-uploader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_service__ = __webpack_require__("../../../../../src/app/services/http-requester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UPLOAD_FILE_NAME = 'uploads[]';
var UPLOAD_IMAGE_URL = 'http://localhost:4201/upload';
var FileUploaderService = (function () {
    function FileUploaderService(httpRequester, userStorageService) {
        this.httpRequester = httpRequester;
        this.userStorageService = userStorageService;
    }
    FileUploaderService.prototype.uploadFile = function (files) {
        var formData = new FormData();
        formData.append(UPLOAD_FILE_NAME, files[0]);
        return this.httpRequester.postFormData(UPLOAD_IMAGE_URL, formData);
    };
    return FileUploaderService;
}());
FileUploaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_requester_service__["a" /* HttpRequesterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_requester_service__["a" /* HttpRequesterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_storage_service__["a" /* UserStorageService */]) === "function" && _b || Object])
], FileUploaderService);

var _a, _b;
//# sourceMappingURL=file-uploader.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/guards/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(userStorageService, router) {
        this.userStorageService = userStorageService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var isUserLogged = this.userStorageService.isUserLogged();
        if (isUserLogged) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_storage_service__["a" /* UserStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/guards/logout-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutGuardService = (function () {
    function LogoutGuardService(userStorageService, router) {
        this.userStorageService = userStorageService;
        this.router = router;
    }
    LogoutGuardService.prototype.canActivate = function (route, state) {
        var isUserLogged = this.userStorageService.isUserLogged();
        if (!isUserLogged) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    return LogoutGuardService;
}());
LogoutGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_storage_service__["a" /* UserStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoutGuardService);

var _a, _b;
//# sourceMappingURL=logout-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http-requester.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequesterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_CONTENT_TYPE = 'application/json';
var HttpRequesterService = (function () {
    function HttpRequesterService(http) {
        this.http = http;
    }
    HttpRequesterService.prototype.get = function (url, requestHeaders) {
        var requestOptions = this.getRequestOptions(requestHeaders);
        return this.http.get(url, requestOptions);
    };
    HttpRequesterService.prototype.put = function (url, data, requestHeaders) {
        var body = JSON.stringify(data);
        var requestOptions = this.getRequestOptions(requestHeaders);
        return this.http.put(url, body, requestOptions);
    };
    HttpRequesterService.prototype.post = function (url, data, requestHeaders) {
        // const body = JSON.stringify(data);
        var requestOptions = this.getRequestOptions(requestHeaders);
        return this.http.post(url, data, requestOptions);
    };
    HttpRequesterService.prototype.postFormData = function (url, formData) {
        return this.http.post(url, formData);
    };
    HttpRequesterService.prototype.getRequestOptions = function (requestHeaders) {
        requestHeaders['Content-Type'] = 'application/json';
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */](requestHeaders);
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    return HttpRequesterService;
}());
HttpRequesterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpRequesterService);

var _a;
//# sourceMappingURL=http-requester.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
    }
    NotificationService.prototype.init = function (vcr) {
        this.toastr.setRootViewContainerRef(vcr);
    };
    NotificationService.prototype.showSuccess = function (message) {
        this.toastr.success(message, 'Success!');
    };
    NotificationService.prototype.showError = function (message) {
        this.toastr.error(message, 'Oops!');
    };
    NotificationService.prototype.showWarning = function (message) {
        this.toastr.warning('You are being warned.', 'Alert!');
    };
    NotificationService.prototype.showInfo = function (message) {
        this.toastr.info(message);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/offers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_comment_model__ = __webpack_require__("../../../../../src/app/models/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_requester_service__ = __webpack_require__("../../../../../src/app/services/http-requester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DOMAIN_URL = 'http://localhost:4201/api';
var ADD_OFFER_URL = DOMAIN_URL + '/offers/add';
var ALL_OFFERS_URL = DOMAIN_URL + '/offers/all';
var OFFER_INFO_URL = DOMAIN_URL + '/offers/';
var OFFERS_COUNT_URL = DOMAIN_URL + '/offers/count';
var OffersService = (function () {
    function OffersService(httpRequester, userStorageService) {
        this.httpRequester = httpRequester;
        this.userStorageService = userStorageService;
    }
    OffersService.prototype.addOffer = function (offer) {
        var token = this.userStorageService.getLoggedUserToken();
        var headers = {
            token: token,
            'Content-Type': 'application/json',
        };
        return this.httpRequester.post(ADD_OFFER_URL, offer, headers);
    };
    OffersService.prototype.getAllOffers = function () {
        return this.httpRequester.get(ALL_OFFERS_URL, {});
    };
    OffersService.prototype.getOfferInfo = function (offerId) {
        var url = OFFER_INFO_URL + offerId;
        return this.httpRequester.get(url, {});
    };
    OffersService.prototype.addComment = function (commentText, offerId) {
        var url = OFFER_INFO_URL + offerId;
        var loggedUsername = this.userStorageService.getLoggedUserUsername();
        var userPic = this.userStorageService.getLoggedUserProfilePicture();
        var commentToAdd = new __WEBPACK_IMPORTED_MODULE_0__models_comment_model__["a" /* Comment */](commentText);
        var body = {
            comment: commentToAdd,
        };
        var token = this.userStorageService.getLoggedUserToken();
        var headers = {
            token: token,
        };
        return this.httpRequester.put(url, body, headers);
    };
    return OffersService;
}());
OffersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_requester_service__["a" /* HttpRequesterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_storage_service__["a" /* UserStorageService */]) === "function" && _b || Object])
], OffersService);

var _a, _b;
//# sourceMappingURL=offers.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var USERNAME_COOKIE_NAME = 'username';
var TOKEN_COOKIE_NAME = 'auth-token';
var PROFILE_PICTURE_NAME = 'profile-pic';
var UserStorageService = (function () {
    function UserStorageService(cookieService) {
        this.cookieService = cookieService;
    }
    UserStorageService.prototype.isUserLogged = function () {
        return this.cookieService.check(TOKEN_COOKIE_NAME);
    };
    UserStorageService.prototype.loginUser = function (username, authToken, profilePicture) {
        this.cookieService.set(USERNAME_COOKIE_NAME, username);
        this.cookieService.set(TOKEN_COOKIE_NAME, authToken);
        this.cookieService.set(PROFILE_PICTURE_NAME, profilePicture);
    };
    UserStorageService.prototype.logoutUser = function () {
        this.cookieService.deleteAll();
    };
    UserStorageService.prototype.getLoggedUserProfilePicture = function () {
        return this.cookieService.get(PROFILE_PICTURE_NAME);
    };
    UserStorageService.prototype.setUserInfo = function (user) {
        this.cookieService.set(USERNAME_COOKIE_NAME, user.username);
        this.cookieService.set(PROFILE_PICTURE_NAME, user.profilePictureUrl);
    };
    UserStorageService.prototype.getLoggedUserUsername = function () {
        return this.cookieService.get(USERNAME_COOKIE_NAME);
    };
    UserStorageService.prototype.getLoggedUserToken = function () {
        return this.cookieService.get(TOKEN_COOKIE_NAME);
    };
    return UserStorageService;
}());
UserStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object])
], UserStorageService);

var _a;
//# sourceMappingURL=user-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_service__ = __webpack_require__("../../../../../src/app/services/http-requester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DOMAIN_URL = 'http://localhost:4201/api';
var REGISTER_USER_URL = DOMAIN_URL + '/auth/register';
var LOGIN_USER_URL = DOMAIN_URL + '/auth/login';
var USER_PERSONAL_INFO_URL = DOMAIN_URL + '/users/profile';
var UPDATE_USER_INFO_URL = DOMAIN_URL + '/users/update';
var GET_ALL_USERS_URL = DOMAIN_URL + '/users';
var UsersService = (function () {
    function UsersService(httpRequester, userStorageService) {
        this.httpRequester = httpRequester;
        this.userStorageService = userStorageService;
    }
    UsersService.prototype.isUserLoggedIn = function () {
        return this.userStorageService.isUserLogged();
    };
    UsersService.prototype.registerUser = function (user) {
        return this.httpRequester.post(REGISTER_USER_URL, user, {});
    };
    UsersService.prototype.loginUser = function (user) {
        return this.httpRequester.put(LOGIN_USER_URL, user, {});
    };
    UsersService.prototype.getLoggedUserInfo = function () {
        var token = this.userStorageService.getLoggedUserToken();
        var headers = {
            token: token,
            'Content-Type': 'application/json',
        };
        var url = USER_PERSONAL_INFO_URL;
        return this.httpRequester.get(USER_PERSONAL_INFO_URL, headers);
    };
    UsersService.prototype.getAllUsers = function () {
        return this.httpRequester.get(GET_ALL_USERS_URL, {});
    };
    UsersService.prototype.updateUserInfo = function (user) {
        var token = this.userStorageService.getLoggedUserToken();
        var headers = {
            token: token,
            'Content-Type': 'application/json',
        };
        return this.httpRequester.put(UPDATE_USER_INFO_URL, user, headers);
    };
    UsersService.prototype.rateUser = function (userToRate, dislike) {
        var token = this.userStorageService.getLoggedUserToken();
        var headers = {
            token: token,
            'Content-Type': 'application/json',
        };
        var body = {
            dislike: dislike,
        };
        var userId = userToRate._id;
        var url = DOMAIN_URL + '/users/' + userId + '/rate';
        return this.httpRequester.put(url, body, headers);
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_requester_service__["a" /* HttpRequesterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_requester_service__["a" /* HttpRequesterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_storage_service__["a" /* UserStorageService */]) === "function" && _b || Object])
], UsersService);

var _a, _b;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " footer {\r\n     background-color: #0c1a1e;\r\n     min-height: 100px;\r\n     font-family: 'Open Sans', sans-serif;\r\n     left: 0;\r\n     bottom: 0;\r\n     width: 100%;\r\n     overflow: hidden;\r\n }\r\n \r\n .footerleft {\r\n     margin-top: 25px;\r\n     padding: 0 36px;\r\n }\r\n \r\n .logofooter {\r\n     margin-bottom: 10px;\r\n     font-size: 25px;\r\n     color: #fff;\r\n     font-weight: 700;\r\n }\r\n \r\n .footerleft p {\r\n     color: #fff;\r\n     font-size: 12px;\r\n     font-family: 'Open Sans', sans-serif;\r\n     margin-bottom: 15px;\r\n }\r\n \r\n .footerleft p i {\r\n     width: 20px;\r\n     color: #999;\r\n }\r\n \r\n .copyright {\r\n     min-height: 40px;\r\n     background-color: #000000;\r\n }\r\n \r\n .copyright p {\r\n     text-align: left;\r\n     color: #FFF;\r\n     padding: 10px 0;\r\n     margin-bottom: 0;\r\n }\r\n \r\n .footer-icons {\r\n     padding-top: 25px;\r\n     padding-bottom: 10px;\r\n }\r\n \r\n @media screen and (max-width: 1280px) {\r\n     footer {\r\n         background-color: #0c1a1e;\r\n         min-height: 50px;\r\n         font-family: 'Open Sans', sans-serif;\r\n         left: 0;\r\n         bottom: 0;\r\n         width: 100%;\r\n         overflow: hidden;\r\n         zoom: 0.5;\r\n     }\r\n     .footer-icons {\r\n         padding-top: 5px;\r\n         padding-bottom: 5px;\r\n     }\r\n     .footer-hide {\r\n         display: none;\r\n     }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-6 footerleft\">\r\n                <div class=\"logofooter\"> Find A Roommate</div>\r\n                <p>Together we build the future!</p>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-6 footerleft footer-hide\">\r\n                <p><i class=\"fa fa-map-pin fa-lg\"></i> 31, bul. Alexander Malinov - SOFIA</p>\r\n                <p><i class=\"fa fa-phone fa-lg\"></i> Phone (Buglaria) : +359 893 32 80 60</p>\r\n                <p><i class=\"fa fa-envelope fa-lg\"></i> E-mail : TheMomentousOwls@gmail.com</p>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-6 footer-icons\">\r\n                <a href=\"https://github.com/TheMomentousOwls/FindARoomMate\"><i class=\"fa fa-github-square fa-3x\" aria-hidden=\"true\"></i></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"copyright\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-6\">\r\n                <p>© 2017 - The Momentous Owls</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .dropdown {\r\n     width: 120px;\r\n }\r\n \r\n .dropdown-menu {\r\n     width: 120px;\r\n }\r\n /* .dropdown-link {\r\n     text-align: center;\r\n }\r\n  */\r\n \r\n .navbar-right {\r\n     float: right !important;\r\n }\r\n \r\n .profile-pic-small {\r\n     width: 30px;\r\n     height: 30px;\r\n     float: left;\r\n     margin-right: 5px;\r\n }\r\n \r\n .navbar-brand {\r\n     color: #33a1d5;\r\n     font-family: Mistral, Brush Script MT, Rage Italic;\r\n     font-weight: bold;\r\n     font-size: 26px;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-xs navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\r\n    <a class=\"navbar-brand pull-left logo\" [routerLink]=\"['/home']\">Find A Roommate</a>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav navbar-sidenav mr-auto\" id=\"exampleAccordion\">\r\n            <li (click)=\"setActiveItem('home')\" class=\" nav-item \">\r\n                <a class=\"nav-link \" [class.active]=\"activeItem=='home' \" [routerLink]=\"[ '/home'] \">\r\n                    <i class=\"fa fa-home\"></i>\r\n                    <span class=\"nav-link-text \">\r\n                Home</span>\r\n                </a>\r\n            </li>\r\n            <li (click)=\"setActiveItem('offers')\" class=\"nav-item\">\r\n                <a class=\"nav-link dropdown-link\" id=\"offers\" [class.active]=\"activeItem == 'offers'\" [routerLink]=\"[ '/offers/all'] \">\r\n                    <i class=\"fa fa-handshake-o\"></i>\r\n                    <span class=\"nav-link-text\">\r\n                Offers</span>\r\n                </a>\r\n            </li>\r\n            <li (click)=\"setActiveItem('users')\" class=\" nav-item \">\r\n                <a class=\"nav-link \" [class.active]=\"activeItem=='users' \" [routerLink]=\"[ '/user/all'] \">\r\n                    <i class=\"fa fa-commenting \"></i>\r\n                    <span class=\"nav-link-text \">\r\n                Community</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav navbar-sidenav ml-auto\" id=\"exampleAccordion\">\r\n            <li *ngIf=\"isUserLogged==true\" class=\"nav-item\">\r\n                <a class=\"nav-link \" [class.active]=\"activeItem=='register' \" [routerLink]=\"[ '/auth/register'] \">\r\n                    <img src=\"{{profilePicture}}\" alt=\"pic\" class=\"profile-pic-small img-responsive rounded\"> {{username}}\r\n                    <span class=\"nav-link-text \"></span>\r\n                </a>\r\n            </li>\r\n            <li *ngIf=\"isUserLogged==false \" (click)=\"setActiveItem('register')\" class=\"nav-item \">\r\n                <a class=\"nav-link \" [class.active]=\"activeItem=='register' \" [routerLink]=\"[ '/auth/register'] \">\r\n                    <i class=\"fa fa-fw fa-table \"></i>\r\n                    <span class=\"nav-link-text \">\r\n                Register</span>\r\n                </a>\r\n            </li>\r\n            <li *ngIf=\"isUserLogged==false \" (click)=\"setActiveItem( 'login') \" class=\"nav-item\">\r\n                <a class=\"nav-link \" [class.active]=\"activeItem=='login' \" [routerLink]=\"[ '/auth/login'] \">\r\n                    <i class=\"fa fa-fw fa-table \"></i>\r\n                    <span class=\"nav-link-text \">\r\n                Login</span>\r\n                </a>\r\n            </li>\r\n            <li *ngIf=\"isUserLogged==true\" class=\"nav-item dropdown\">\r\n                <a class=\"nav-link\" id=\"navbarDropdown1\" data-target=\"#\" href=\"http://example.com\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> Profile\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown1\">\r\n                        <li>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"[ '/offers/add'] \">\r\n                                <i class=\"fa fa-plus-circle\"></i>\r\n                                <span class=\"nav-link-text \">\r\n                            Add Offer</span>\r\n                            </a>\r\n                        </li>\r\n                        <li><a class=\"dropdown-item\" [routerLink]=\"['/user/edit']\">Edit Profile</a></li>\r\n                        <li>\r\n                            <a class=\"dropdown-item\" [routerLink]=\"[ '/auth/logout'] \">Logout</a>\r\n                        </li>\r\n                    </ul>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DEFAULT_ACTIVE_ITEM = 'home';
var NavigationComponent = (function () {
    function NavigationComponent(userStorageService, router, notificationService) {
        this.userStorageService = userStorageService;
        this.router = router;
        this.notificationService = notificationService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.activeItem = DEFAULT_ACTIVE_ITEM;
        this.isUserLogged = this.userStorageService.isUserLogged();
        if (this.isUserLogged) {
            this.username = this.userStorageService.getLoggedUserUsername().trim();
            this.profilePicture = this.userStorageService.getLoggedUserProfilePicture();
        }
    };
    NavigationComponent.prototype.setActiveItem = function (newActiveItem) {
        this.activeItem = newActiveItem;
    };
    NavigationComponent.prototype.ngDoCheck = function () {
        this.isUserLogged = this.userStorageService.isUserLogged();
        this.activeItem = this.activeItem || '';
        this.profilePicture = this.userStorageService.getLoggedUserProfilePicture();
        this.username = this.userStorageService.getLoggedUserUsername();
    };
    NavigationComponent.prototype.logoutUser = function () {
        this.userStorageService.logoutUser();
        this.notificationService.showSuccess('You are now logged out!');
        this.router.navigateByUrl('/home');
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/shared/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_storage_service__["a" /* UserStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], NavigationComponent);

var _a, _b, _c;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms___ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/shared/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/shared/utils/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms___["d" /* ReactiveFormsModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_8__utils_pagination_pagination_component__["a" /* PaginationComponent */], __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms___["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_8__utils_pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms___["d" /* ReactiveFormsModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/utils/pagination/pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#pagination {\r\n    margin-left: 40%;\r\n    margin-top: 15%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/utils/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"text-center\" id=\"pagination\" aria-label=\"...\">\r\n    <ul class=\"pagination pagination-centered pagination-md\">\r\n        <li *ngIf=\"currentPage > 1\" (click)=\"onPageChanged(currentPage - 1)\" class=\"page-item\">\r\n            <a class=\"page-link\" tabindex=\"-1\">Previous</a>\r\n        </li>\r\n        <ng-container *ngFor=\"let page of pages; let index\">\r\n            <li (click)=\"onPageChanged(page)\" class=\"page-item\" [class.active]=\"page == currentPage\">\r\n                <a class=\"page-link\">{{page}}</a>\r\n            </li>\r\n        </ng-container>\r\n        <li *ngIf=\"lastPage > currentPage\" (click)=\"onPageChanged(currentPage + 1)\" class=\"page-item\">\r\n            <a class=\"page-link\">Next</a>\r\n        </li>\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/utils/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VISIBLE_PAGES = 5;
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageChangedEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PaginationComponent.prototype.getPages = function () {
        this.lastPage = Math.ceil(this.totalElementsCount / this.size);
        this.pages = [this.currentPage];
        var pagesCount = 1;
        var prevPage;
        var nextPage;
        while (pagesCount < VISIBLE_PAGES) {
            prevPage = this.pages[0] - 1;
            nextPage = this.pages[this.pages.length - 1] + 1;
            if (nextPage > this.lastPage && prevPage < 1) {
                break;
            }
            if (prevPage > 0) {
                this.pages.unshift(prevPage);
                pagesCount += 1;
            }
            if (nextPage <= this.lastPage) {
                this.pages.push(nextPage);
                pagesCount += 1;
            }
        }
    };
    PaginationComponent.prototype.onPageChanged = function (page) {
        if (page > this.lastPage) {
        }
        this.currentPage = page;
        this.pageChangedEmitter.emit(page);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.getPages();
    };
    return PaginationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "currentPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "totalElementsCount", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "size", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PaginationComponent.prototype, "pageChangedEmitter", void 0);
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__("../../../../../src/app/shared/utils/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/utils/pagination/pagination.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map