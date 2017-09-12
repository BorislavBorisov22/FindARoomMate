webpackJsonp(["authentication.module"],{

/***/ "../../../../../src/app/authentication/authentication-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_guards_logout_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/logout-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logout_logout_component__ = __webpack_require__("../../../../../src/app/authentication/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/authentication/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_guards_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_guards_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_guards_logout_guard_service__["a" /* LogoutGuardService */]] }
];
var AuthenticationRoutingModule = (function () {
    function AuthenticationRoutingModule() {
    }
    return AuthenticationRoutingModule;
}());
AuthenticationRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]]
    })
], AuthenticationRoutingModule);

//# sourceMappingURL=authentication-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms___ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_routing_module__ = __webpack_require__("../../../../../src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/authentication/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__ = __webpack_require__("../../../../../src/app/authentication/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__authentication_routing_module__["a" /* AuthenticationRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms___["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__["a" /* LogoutComponent */]],
        providers: []
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login-container {\r\n    margin-bottom: 10%;\r\n}\r\n\r\ninput.ng-invalid {\r\n    border-color: red;\r\n}\r\n\r\ninput.ng-valid {\r\n    border-color: green;\r\n}\r\n\r\n.login-button {\r\n    margin-top: 5px;\r\n}\r\n\r\n.validation-feedback {\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"login-container\">\r\n    <div class=\"container py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-4 mx-auto\">\r\n                <div class=\"card card-body\">\r\n                    <h3 class=\"text-center mb-4\">Sing in</h3>\r\n                    <form (ngSubmit)='onLoginSubmit()' #loginForm=ngForm>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group has-error\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n                                <input #usernameInput=ngModel required minLength=\"4\" class=\"form-control input-lg\" [(ngModel)]=\"user.username\" placeholder=\"Username\" name=\"firstName\" type=\"text\">\r\n                            </div>\r\n                            <label class=\"validation-feedback\" *ngIf=\"(usernameInput.errors && (usernameInput.dirty || usernameInput.touched)) || usernameInput.errors && mouseover\">\r\n                                        <span *ngIf=\"usernameInput.errors.required\">Username is required</span>\r\n                                        <span *ngIf=\"usernameInput.errors.minlength\">Username must be at least 4 characters </span>\r\n                            </label>\r\n                        </div>\r\n\r\n                        <div class=\"form-group has-success\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                                <input #passwordInput=ngModel class=\"form-control input-lg\" [(ngModel)]=\"user.password\" placeholder=\"Password\" name=\"password\" type=\"password\" required minlength=\"8\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}$\">\r\n                            </div>\r\n                            <label class=\"validation-feedback\" *ngIf=\"(passwordInput.errors && (passwordInput.dirty || passwordInput.touched)) || passwordInput.errors && mouseover\">\r\n                                    <span *ngIf=\"passwordInput.errors.required\">Password is required</span>\r\n                                    <span *ngIf=\"passwordInput.errors.minlength\">Password must be 8 characters long, we need another {{passwordInput.errors.minlength.requiredLength - passwordInput.errors.minlength.actualLength}} characters </span>\r\n                                    <span *ngIf=\"passwordInput.errors.pattern\">Password must contain at least one uppercase letter and at least one number.</span>\r\n                            </label>\r\n                        </div>\r\n                        <input [disabled]=\"!loginForm.valid\" class=\"btn btn-lg btn-primary btn-block\" value=\"Sign Me In\" type=\"submit\">\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(usersService, userStorageService, router, notificationService) {
        this.usersService = usersService;
        this.userStorageService = userStorageService;
        this.router = router;
        this.notificationService = notificationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.usersService.loginUser(this.user)
            .map(function (r) { return r.json(); })
            .subscribe(function (response) {
            var username = response.username, token = response.token, message = response.message, profilePicture = response.profilePicture;
            _this.userStorageService.loginUser(username, token, profilePicture);
            _this.notificationService.showSuccess(message);
            _this.router.navigateByUrl('/');
        }, function (err) {
            var message = err.message;
            _this.notificationService.showError('Invalid username or password');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/authentication/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__["a" /* UserStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  logout works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/authentication/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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




var LogoutComponent = (function () {
    function LogoutComponent(userStorageService, router, notificationService) {
        this.userStorageService = userStorageService;
        this.router = router;
        this.notificationService = notificationService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.userStorageService.logoutUser();
        this.notificationService.showSuccess('You have logged out successfully');
        this.router.navigateByUrl('/');
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/authentication/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_user_storage_service__["a" /* UserStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], LogoutComponent);

var _a, _b, _c;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid {\r\n    border-color: red;\r\n}\r\n\r\ninput.ng-valid {\r\n    border-color: green;\r\n}\r\n\r\n.login-button {\r\n    margin-top: 5px;\r\n}\r\n\r\n.validation-feedback {\r\n    color: red;\r\n}\r\n\r\n.left {\r\n    float: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"container py-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-4 mx-auto\">\r\n                <div class=\"card card-body\">\r\n                    <form (ngSubmit)='onRegisterSubmit()' #registerForm=ngForm>\r\n                        <div class=\"form-group has-error\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                                <input required minLength=\"3\" class=\"form-control input-lg\" #firstNameInput=ngModel [(ngModel)]=\"user.firstName\" placeholder=\"First name\" name=\"firstName\" type=\"text\">\r\n                            </div>\r\n                            <label class=\"validation-feedback\" *ngIf=\"(firstNameInput.errors && (firstNameInput.dirty || firstNameInput.touched)) || firstNameInput.errors && mouseover\">\r\n                                <span *ngIf=\"firstNameInput.errors.required\">First Name is required</span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group has-error\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n                                <input required minlength=\"3\" class=\"form-control input-lg\" #lastNameInput=ngModel [(ngModel)]=\"user.lastName\" placeholder=\"Last name\" name=\"lastName\" type=\"text\">\r\n                            </div>\r\n                            <label class=\"validation-feedback\" *ngIf=\"(lastNameInput.errors && (lastNameInput.dirty || lastNameInput.touched)) || lastNameInput.errors && mouseover\">\r\n                                <span *ngIf=\"lastNameInput.errors.required\">Last Name is required</span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group has-error\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n                                <input required minlength=\"4\" class=\"form-control input-lg\" #usernameInput=ngModel [(ngModel)]=\"user.username\" placeholder=\"Username\" name=\"username\" type=\"text\">\r\n                            </div>\r\n                            <label class=\"validation-feedback\" *ngIf=\"(usernameInput.errors && (usernameInput.dirty || usernameInput.touched)) || usernameInput.errors && mouseover\">\r\n                                <span *ngIf=\"usernameInput.errors.required\">Username is required</span>\r\n                                <span *ngIf=\"usernameInput.errors.minlength\">Username must be at least 4 characters </span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group has-success\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\r\n                                <input required class=\"form-control input-lg\" #emailInput=ngModel [(ngModel)]=\"user.email\" placeholder=\"Email\" name=\"email\" value=\"\" type=\"email\">\r\n                            </div>\r\n                            <label class=\"validation-feedback\" *ngIf=\"(emailInput.errors && (emailInput.dirty || emailInput.touched)) || emailInput.errors && mouseover\">\r\n                                <span *ngIf=\"emailInput.errors.required\">Email is required</span>\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-group has-success\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                                <input #passwordInput=ngModel class=\"form-control input-lg\" [(ngModel)]=\"user.password\" placeholder=\"Password\" name=\"password\" type=\"password\" required minlength=\"8\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}$\">\r\n                            </div>\r\n                            <label class=\"validation-feedback\" *ngIf=\"(passwordInput.errors && (passwordInput.dirty || passwordInput.touched)) || passwordInput.errors && mouseover\">\r\n                                    <span *ngIf=\"passwordInput.errors.required\">Password is required</span>\r\n                                    <span *ngIf=\"passwordInput.errors.minlength\">Password must be 8 characters long, we need another {{passwordInput.errors.minlength.requiredLength - passwordInput.errors.minlength.actualLength}} characters </span>\r\n                                    <span *ngIf=\"passwordInput.errors.pattern\">Password must contain at least one uppercase letter and at least one number.</span>\r\n                            </label>\r\n                        </div>\r\n                        <!-- <div class=\"form-group has-success\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n                                <input #passwordConfirmInput required class=\"form-control input-lg\" placeholder=\"Confirm Password\" name=\"password_confirm\" value=\"\" type=\"password\">\r\n                            </div>\r\n                            <label class=\"validation-feedback\" *ngIf=\"passwordInput.value != passwordConfirmInput.value\">\r\n                                    <span *ngIf=\"passwordInput.value != passwordConfirmInput.value\">Passwords do not match.</span>\r\n                            </label>\r\n                        </div> -->\r\n                        <div class=\"checkbox\">\r\n                            <label class=\"small\">\r\n                                <input name=\"terms\" class = \"checkbox-testing\" type=\"checkbox\">I have read and agree to the <a href=\"#\">terms of service</a>\r\n                            </label>\r\n                        </div>\r\n                        <input class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!registerForm.valid\" value=\"Sign Me Up\" type=\"submit\">\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/authentication/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(usersService, router, notificationService) {
        this.usersService = usersService;
        this.router = router;
        this.notificationService = notificationService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.usersService.registerUser(this.user)
            .map(function (r) { return r.json(); })
            .subscribe(function (responseObject) {
            var message = responseObject.message;
            _this.notificationService.showSuccess(message);
            _this.router.navigateByUrl('/auth/login');
        }, function (err) {
            var message = err.message;
            _this.notificationService.showError(message);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/authentication/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ })

});
//# sourceMappingURL=authentication.module.chunk.js.map