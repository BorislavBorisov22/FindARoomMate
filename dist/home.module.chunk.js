webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */], pathMatch: 'full' },
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content {\r\n    margin-top: 5%;\r\n}\r\n\r\n.carousel-image {\r\n    width: 100%;\r\n    height: 580px;\r\n}\r\n\r\n.homepage-hero-module {\r\n    border-right: none;\r\n    border-left: none;\r\n    position: relative;\r\n}\r\n\r\n.no-video .video-container video,\r\n.touch .video-container video {\r\n    display: none;\r\n}\r\n\r\n.no-video .video-container .poster,\r\n.touch .video-container .poster {\r\n    display: block !important;\r\n}\r\n\r\n.video-container {\r\n    bottom: 0%;\r\n    left: 0%;\r\n    width: 100%;\r\n    height: 640px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    background: #000;\r\n}\r\n\r\n.home-video {\r\n    position: absolute;\r\n}\r\n\r\n.poster img {\r\n    width: 100%;\r\n    bottom: 0;\r\n}\r\n\r\n.video-container .filter {\r\n    z-index: 100;\r\n    background: rgba(0, 0, 0, 0.4);\r\n    width: 100%;\r\n}\r\n\r\n.video-container video.fillWidth {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"video-container\">\r\n    <video class=\"home-video\" loop autoplay>\r\n        <source src=\"/uploads/Busy-City.webm\" type=\"video/webm\">\r\n    </video>\r\n</div>\r\n\r\n<div class=\"container marketing main-content\">\r\n    <!-- Three columns of text below the carousel -->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\" appNavColor>\r\n            <img class=\"rounded-circle\" src=\"/uploads/our-goals.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n            <h2 class=\"for-testing\">Our Goals</h2>\r\n            <p>Our main purpose is to help people find their dream place for living and the perfect people to live with. FindARoomate saves you the struggle of walking from door to door and leaving disappointed at the end of the day.\r\n            </p>\r\n            <p><a class=\"btn btn-secondary\" [routerLink]=\"['/offers/all']\" role=\"button\">Find your dream place »</a></p>\r\n        </div>\r\n        <!-- /.col-lg-4 -->\r\n        <div class=\"col-lg-4\" appNavColor>\r\n            <img class=\"rounded-circle\" src=\"/uploads/no-brocker.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n            <h2>No Brokers Needed</h2>\r\n            <p>If you think that you're already living at the prefect place but do not have the right people to share it with, just upload the room or place that you offer without the need to spend tons of money for broker agencies.\r\n            </p>\r\n            <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">Add You Offer »</a></p>\r\n        </div>\r\n        <!-- /.col-lg-4 -->\r\n        <div class=\"col-lg-4\" appNavColor>\r\n            <img class=\"rounded-circle\" src=\"/uploads/socialize.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n            <h2>Just Socialize</h2>\r\n            <p>If you're neither looking for a place nor offering one you can still have plenty of fun by commenting on different offers or rate other users. This way you can help other people with their choice and even make new friends\r\n            </p>\r\n            <p><a class=\"btn btn-secondary\" [routerLink]=\"['/user/all']\" role=\"button\">Connect Others »</a></p>\r\n        </div>\r\n        <!-- /.col-lg-4 -->\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n\r\n    <!-- START THE FEATURETTES -->\r\n\r\n    <hr class=\"featurette-divider\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_directives_nav_color_directive__ = __webpack_require__("../../../../../src/app/shared/directives/nav-color.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__home_routing_module__["a" /* HomeRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_0__shared_directives_nav_color_directive__["a" /* NavColorDirective */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/nav-color.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavColorDirective; });
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

var NavColorDirective = (function () {
    function NavColorDirective(elementRef) {
        this.elementRef = elementRef;
    }
    NavColorDirective.prototype.onMouseEnter = function () {
        this.elementRef.nativeElement.style.background = '-moz-linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3))';
        this.elementRef.nativeElement.style.background = '-webkit-linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3))';
        this.elementRef.nativeElement.style.background = 'linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3))';
        this.elementRef.nativeElement.style.filter =
            'unquote("progid:DXImageTransform.Microsoft.gradient( startColorstr="#b3000000", endColorstr="#b3000000",GradientType=0 )")';
    };
    NavColorDirective.prototype.onMouseLeave = function () {
        this.elementRef.nativeElement.style.background = '';
    };
    return NavColorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavColorDirective.prototype, "onMouseEnter", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavColorDirective.prototype, "onMouseLeave", null);
NavColorDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appNavColor]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NavColorDirective);

var _a;
//# sourceMappingURL=nav-color.directive.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map