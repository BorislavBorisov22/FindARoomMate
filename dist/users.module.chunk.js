webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/users/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"container\" style=\"padding-top: 60px;\">\r\n        <h1 class=\"page-header\">Edit Profile</h1>\r\n        <form class=\"row\" (ngSubmit)=\"onSubmit()\" #editProfileForm=ngForm>\r\n            <!-- left column -->\r\n            <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"text-center\">\r\n                    <img src=\"{{this.user.profilePictureUrl}}\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar\">\r\n                    <h6>Upload a different photo...</h6>\r\n                    <input (change)=\"onChange(updateProfilePictureInput.files)\" type=\"file\" #updateProfilePictureInput class=\"text-center center-block well well-sm\">\r\n                </div>\r\n            </div>\r\n            <!-- edit form column -->\r\n            <div class=\"col-md-8 col-sm-6 col-xs-12 personal-info\">\r\n                <div class=\"alert alert-info alert-dismissable\">\r\n                    <a class=\"panel-close close\" data-dismiss=\"alert\">×</a>\r\n                    <i class=\"fa fa-coffee\"></i> Here you can edit you profile information.\r\n                </div>\r\n                <h3>Personal info</h3>\r\n                <div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-lg-3 control-label\">First name</label>\r\n                        <div class=\"col-lg-8\">\r\n                            <input required class=\"form-control\" [(ngModel)]=\"user.firstName\" name=\"firstName\" value=\"{{this.user.firstName}}\" type=\"text\" name=\"firstName\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-lg-3 control-label\">Last name:</label>\r\n                        <div class=\"col-lg-8\">\r\n                            <input required class=\"form-control\" [(ngModel)]=\"user.lastName\" name=\"lastName\" value=\"{{this.user.lastName}}\" type=\"text\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-lg-3 control-label\">Email:</label>\r\n                        <div class=\"col-lg-8\">\r\n                            <input required class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" value=\"{{this.user.email}}\" type=\"text\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-3 control-label\">Description:</label>\r\n                        <div class=\"col-md-8\">\r\n                            <textarea required class=\"form-control\" [(ngModel)]=\"user.description\" name=\"description\" value=\"{{this.user.description}}\" type=\"text\">\r\n                            </textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-3 control-label\"></label>\r\n                        <div class=\"col-md-8\">\r\n                            <button [disabled]=\"editProfileForm.valid == false\" class=\"btn btn-primary\" type=\"submit\">Save Changes </button>\r\n                            <span></span>\r\n                            <input class=\"btn btn-default\" value=\"Cancel\" type=\"reset\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/users/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_file_uploader_service__ = __webpack_require__("../../../../../src/app/services/file-uploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditProfileComponent = (function () {
    function EditProfileComponent(router, usersService, fileUploader, notificationService, userStorageService) {
        this.router = router;
        this.usersService = usersService;
        this.fileUploader = fileUploader;
        this.notificationService = notificationService;
        this.userStorageService = userStorageService;
        this.subscriptions = [];
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]();
        var subscription = this.usersService.getLoggedUserInfo()
            .map(function (r) { return r.json(); })
            .subscribe(function (response) {
            _this.user = response.user;
        }, function (err) {
        });
        this.subscriptions.push(subscription);
    };
    EditProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        var sub = this.usersService.updateUserInfo(this.user)
            .map(function (r) { return r.json(); })
            .subscribe(function (response) {
            _this.userStorageService.setUserInfo(_this.user);
            _this.notificationService.showSuccess('Your profile changes have been saved!');
        }, function (err) {
        });
        this.subscriptions.push(sub);
    };
    EditProfileComponent.prototype.onChange = function (files) {
        var _this = this;
        var sub = this.fileUploader.uploadFile(files)
            .map(function (r) { return r.json(); })
            .subscribe(function (response) {
            var filesUrls = response.filesUrls;
            _this.user.profilePictureUrl = filesUrls[0];
            console.log(filesUrls, 'url');
            _this.notificationService.showInfo('Click on save changes in order to save your work');
        }, function (err) { });
        this.subscriptions.push(sub);
    };
    EditProfileComponent.prototype.ngAfterContentInit = function () {
        this.notificationService.showInfo('Please fill out all the fields in order to update your profile');
    };
    EditProfileComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) {
            s.unsubscribe();
        });
    };
    return EditProfileComponent;
}());
EditProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__("../../../../../src/app/users/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/edit-profile/edit-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_file_uploader_service__["a" /* FileUploaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_file_uploader_service__["a" /* FileUploaderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_storage_service__["a" /* UserStorageService */]) === "function" && _e || Object])
], EditProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Kumar+One);", ""]);
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);", ""]);

// module
exports.push([module.i, ".row-section {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row-section h2 {\r\n    float: left;\r\n    width: 100%;\r\n    color: #fff;\r\n    margin-bottom: 30px;\r\n    font-size: 14px;\r\n}\r\n\r\n.row-section h2 span {\r\n    font-family: 'Kumar One', cursive;\r\n    display: block;\r\n    font-size: 45px;\r\n    text-transform: none;\r\n    margin-bottom: 20px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.row-section h2 a {\r\n    color: #d2abce;\r\n}\r\n\r\n.row-section .row-block {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.row-section .row-block ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.row-section .row-block ul li {\r\n    list-style: none;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.row-section .row-block ul li:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.row-section .row-block ul li:hover {\r\n    cursor: -webkit-grabbing;\r\n    cursor: grabbing;\r\n}\r\n\r\n.media {\r\n    border: 1px solid #d5dbdd;\r\n    padding: 5px 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.04);\r\n    background: #fff;\r\n}\r\n\r\n.media .media-left img {\r\n    width: 75px;\r\n}\r\n\r\n.media .media-body p {\r\n    padding: 0 15px;\r\n    font-size: 14px;\r\n}\r\n\r\n.media .media-body h4 {\r\n    color: #6b456a;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    margin-bottom: 0;\r\n    padding-left: 14px;\r\n    margin-top: 12px;\r\n}\r\n\r\n.btn-default {\r\n    background: #6B456A;\r\n    color: #fff;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 16px;\r\n}\r\n\r\n.user-image {\r\n    width: 100px;\r\n    height: 60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\r\n    <div class=\"media-left align-self-center\">\r\n        <img class=\"rounded-circle\" src=\"{{user.profilePictureUrl}}\">\r\n    </div>\r\n    <div class=\"media-body\">\r\n        <h4>{{user.username}}</h4>\r\n        <p>{{user.description}}</p>\r\n    </div>\r\n    <div class=\"media-right align-self-center\">\r\n        {{user.rating}}\r\n        <button (click)=\"rateUser()\" class=\"btn btn-default\">\r\n            <i *ngIf=\"isUserRated(user) == true\" class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n            <i *ngIf=\"isUserRated(user) == false\" class=\"fa fa-heart-o\"></i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
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







var UserListComponent = (function () {
    function UserListComponent(usersStorageService, usersService, notificator) {
        this.usersStorageService = usersStorageService;
        this.usersService = usersService;
        this.notificator = notificator;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.rateUserSubscription = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subscription__["Subscription"]();
    };
    UserListComponent.prototype.isUserRated = function (user) {
        var loggedUsername = this.usersStorageService.getLoggedUserUsername();
        if (!this.usersStorageService.isUserLogged()) {
            return false;
        }
        return this.user.ratingUsers.some(function (u) { return u === loggedUsername; });
    };
    UserListComponent.prototype.rateUser = function () {
        var _this = this;
        if (!this.usersStorageService.isUserLogged()) {
            this.notificator.showError('You must be logged in order to rate a user!');
            return;
        }
        var dislike = this.isUserRated(this.user);
        this.rateUserSubscription = this.usersService.rateUser(this.user, dislike)
            .map(function (r) { return r.json(); })
            .subscribe(function (response) {
            _this.user = response.user;
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.rateUserSubscription.unsubscribe();
    };
    return UserListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]) === "function" && _a || Object)
], UserListComponent.prototype, "user", void 0);
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/users/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], UserListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-all/users-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Kumar+One);", ""]);
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);", ""]);

// module
exports.push([module.i, ".row-section {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.row-section h2 {\r\n    float: left;\r\n    width: 100%;\r\n    color: #fff;\r\n    margin-bottom: 30px;\r\n    font-size: 14px;\r\n}\r\n\r\n.row-section h2 span {\r\n    font-family: 'Kumar One', cursive;\r\n    display: block;\r\n    font-size: 45px;\r\n    text-transform: none;\r\n    margin-bottom: 20px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.row-section h2 a {\r\n    color: #d2abce;\r\n}\r\n\r\n.row-section .row-block {\r\n    background: #fff;\r\n    padding: 20px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.row-section .row-block ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.row-section .row-block ul li {\r\n    list-style: none;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.row-section .row-block ul li:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.btn-default {\r\n    background: #6B456A;\r\n    color: #fff;\r\n    border-radius: 30px;\r\n    border: none;\r\n    font-size: 16px;\r\n}\r\n\r\n.user-image {\r\n    width: 100px;\r\n    height: 60px;\r\n}\r\n\r\n#pagination {\r\n    margin: 5px;\r\n    z-index: 1000 important!;\r\n}\r\n\r\n.container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users-all/users-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <main>\r\n        <section class=\"row-section\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <h1 class=\"text-center\">\r\n                        <i class=\"fa fa-globe fa-2x\" aria-hidden=\"true\"></i> Users\r\n                    </h1>\r\n                </div>\r\n                <div class=\"col-md-10 offset-md-1 row-block\">\r\n                    <ul>\r\n                        <li *ngFor=\"let user of users\">\r\n                            <app-user-list [user]=\"user\"></app-user-list>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </main>\r\n\r\n    <div class=\"pagination-class\" *ngIf=\"totalElementsCount\">\r\n        <app-pagination id=\"pagination\" (pageChangedEmitter)=\"onPageChanged($event)\" [currentPage]=\"currentPage\" [totalElementsCount]=\"totalElementsCount\" [size]=\"pageSize\"></app-pagination>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/users-all/users-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__ = __webpack_require__("../../../../../src/app/services/user-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var USERS_ALL_URL = '/user/all';
var DEFAULT_PAGE_SIZE = 9;
var DEFAULT_PAGE = 1;
var UsersAllComponent = (function () {
    function UsersAllComponent(usersService, usersStorageService, router, activatedRoute) {
        this.usersService = usersService;
        this.usersStorageService = usersStorageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    UsersAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions = [];
        this.users = [];
        this.getUsersForCurrentPage();
        var sub = this.activatedRoute.queryParams
            .subscribe(function (params) {
            _this.currentPage = Number(params.page || DEFAULT_PAGE);
            _this.pageSize = Number(params.size || DEFAULT_PAGE_SIZE);
            _this.getUsersForCurrentPage();
        });
        this.subscriptions.push(sub);
    };
    UsersAllComponent.prototype.onPageChanged = function (page) {
        this.currentPage = page;
        this.pageSize = this.pageSize === 0 ? DEFAULT_PAGE_SIZE : this.pageSize;
        var url = USERS_ALL_URL + '?page=' + this.currentPage + '&size=' + this.pageSize;
        this.router.navigateByUrl(url);
    };
    UsersAllComponent.prototype.getUsersForCurrentPage = function () {
        var _this = this;
        this.users = [];
        var sub = this.usersService.getAllUsers()
            .map(function (x) { return x.json(); })
            .subscribe(function (responseUsers) {
            _this.totalElementsCount = responseUsers.length;
            var lastPage = Math.ceil(_this.totalElementsCount / _this.pageSize);
            if (_this.currentPage > lastPage || _this.currentPage < 1) {
                _this.currentPage = 1;
            }
            _this.users = responseUsers.reverse().splice((_this.currentPage - 1) * _this.pageSize, _this.pageSize);
        }, function () {
        });
        this.subscriptions.push(sub);
    };
    UsersAllComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return UsersAllComponent;
}());
UsersAllComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-users-all',
        template: __webpack_require__("../../../../../src/app/users/users-all/users-all.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users-all/users-all.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_storage_service__["a" /* UserStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], UsersAllComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=users-all.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_all_users_all_component__ = __webpack_require__("../../../../../src/app/users/users-all/users-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_guards_logout_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/logout-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/users/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_guards_logout_guard_service__["a" /* LogoutGuardService */]] },
    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_0__users_all_users_all_component__["a" /* UsersAllComponent */] }
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    return UsersRoutingModule;
}());
UsersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]]
    })
], UsersRoutingModule);

//# sourceMappingURL=users-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_routing_module__ = __webpack_require__("../../../../../src/app/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/users/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_all_users_all_component__ = __webpack_require__("../../../../../src/app/users/users-all/users-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/users/user-list/user-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_0__users_routing_module__["a" /* UsersRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_4__users_all_users_all_component__["a" /* UsersAllComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__["a" /* UserListComponent */],
        ]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map