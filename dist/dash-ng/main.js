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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <header>\n        <app-header></app-header>\n    </header>\n    <main>\n        <job-tile [type]=\"near\"></job-tile>\n        <cards [type]=\"userType\"></cards>\n        <div class=\"category\">\n            <h3>Jobs by category</h3>\n            <cards [type]=\"\"></cards>\n        </div>\n        <job-tile [type]=\"for\"></job-tile>\n        <cards [type]=\"dep\"></cards>\n        <cards [type]=\"userType\"></cards>\n        <card [type]='singleType' [data]='whatsappData'></card>\n        <job-tile [type]=\"by\"></job-tile>\n        <cards [type]='imgType'></cards>\n    </main>\n    <footer>\n\n    </footer>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper header {\n  padding: 20px;\n  background-color: #00cec9; }\n\n.wrapper .category {\n  background-color: #ffbe76; }\n\n.wrapper h3 {\n  padding: 20px 20px 0 20px; }\n\n@media only screen and (min-width: 600px) {\n  .wrapper {\n    width: 100%; } }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        //defining properties as constant for demo only
        this.title = 'app';
        this.near = 'near';
        this.by = 'by';
        this.for = 'for';
        this.userType = 'user';
        this.dep = 'dep';
        this.whatsappData = {
            email: "xyz@whatsapp.com",
            location: { city: "Business Account" },
            name: {
                first: "Alert",
                last: "on Whatsapp",
                title: "Get"
            },
            picture: {
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/78.jpg"
            }
        };
        this.singleType = 'whatsapp';
        this.imgType = "image";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user-data.service */ "./src/app/services/user-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_job_tile_job_tile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/job-tile/job-tile.component */ "./src/app/components/job-tile/job-tile.component.ts");
/* harmony import */ var _components_img_card_img_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/img-card/img-card.component */ "./src/app/components/img-card/img-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _components_job_tile_job_tile_component__WEBPACK_IMPORTED_MODULE_10__["JobTileComponent"],
                _components_img_card_img_card_component__WEBPACK_IMPORTED_MODULE_11__["ImgCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [
                _services_user_data_service__WEBPACK_IMPORTED_MODULE_6__["UserDataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [ngClass]=\"{'user': type == 'user' || type == 'whatsapp', 'shape-oval': type == 'dep', 'center': type == 'whatsapp'}\">\n    <user [data]=\"data\" *ngIf=\"type == 'user' || type == 'whatsapp'\"></user>\n    <div class=\"address\">\n        <div class=\"icon\"  *ngIf=\"type == 'user'\">\n            <img src=\"./../../../assets/icons/Jobs by Location.svg\" alt=\"location\">\n        </div>\n         <div class=\"icon\"  *ngIf=\"type == 'whatsapp'\">\n            <img width=\"100%\" src=\"./../../../assets/icons/whatsapp.png\" alt=\"WhatsApp\">\n        </div>\n        <div class=\"add\" [ngClass]=\"{'dep': type == 'dep', 'btn': type == 'whatsapp'}\">\n            {{data.location.city}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 100px;\n  height: auto;\n  text-align: center;\n  background-color: white;\n  margin: 20px;\n  padding: 20px 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px; }\n  .card.user {\n    width: 300px;\n    height: auto; }\n  .card.shape-oval {\n    border-radius: 35%; }\n  .card.center {\n    margin: 0 auto; }\n  .card .address {\n    display: flex;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .card .address .add {\n      flex-basis: 80%;\n      -ms-grid-row-align: center;\n          align-self: center; }\n  .card .address .icon {\n      flex-basis: 15%; }\n  .card .dep {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .card .btn {\n    background-color: #22a6b3;\n    padding: 10px;\n    margin: 0 20px;\n    cursor: pointer;\n    border-radius: 10px; }\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "type", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/cards.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/cards/cards.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards-wrap\">\n  <ng-container *ngIf=\"data && data.length\">\n    <card *ngFor=\"let item of data\" [type]='type' [data]='item'></card>\n  </ng-container>\n  <ng-container *ngIf=\"type == 'image'\">\n    <img-card *ngFor=\"let item of cityData\" [data]='item'></img-card>\n  </ng-container>\n\n</div>"

/***/ }),

/***/ "./src/app/components/cards/cards.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/cards/cards.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-wrap {\n  display: flex;\n  overflow-x: scroll; }\n  .cards-wrap::-webkit-scrollbar {\n    width: 0 !important; }\n  @media only screen and (min-width: 600px) {\n  .cards-wrap {\n    flex-wrap: wrap;\n    justify-content: space-evenly; } }\n"

/***/ }),

/***/ "./src/app/components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-data.service */ "./src/app/services/user-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent(_dataService) {
        this._dataService = _dataService;
        this.cards = 10;
        this.data = [];
        this.cityData = ['delhi', 'gurgaon', 'noida'];
    }
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.type != 'image') {
            this._dataService.getData(this.cards).subscribe(function (res) {
                _this.data = res['results'];
                console.log(_this.data);
            }, function (err) {
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "type", void 0);
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/components/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/components/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"data\">\n  <user [data]=\"data\"></user>\n  <app-search></app-search>\n</ng-container>\n\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .pic {\n  text-align: right !important; }\n\n/deep/ .user {\n  padding-bottom: 20px; }\n\n@media only screen and (min-width: 600px) {\n  :host {\n    display: flex;\n    justify-content: space-between; }\n    :host /deep/ .user {\n      padding-bottom: 0; }\n    :host user {\n      flex-basis: 45%; }\n    :host .user {\n      padding-bottom: 0; }\n    :host app-search {\n      flex-basis: 48%; } }\n\n@media only screen and (min-width: 768px) {\n  :host {\n    display: flex;\n    justify-content: space-between; }\n    :host user {\n      flex-basis: 32%;\n      max-width: 300px; }\n    :host app-search {\n      flex-basis: 35%; } }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-data.service */ "./src/app/services/user-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userData) {
        this.userData = userData;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userData.getData(1).subscribe(function (res) {
            _this.data = res['results'][0];
            console.log(_this.data);
        }, function (err) {
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/img-card/img-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/img-card/img-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n   <div class=\"city\">\n     <img height=\"100\" [src]=\"cityMap[data]\">\n   </div>\n   <div class=\"name\">\n     {{data}}\n   </div>\n   <div class=\"jobs\">\n     123\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/components/img-card/img-card.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/img-card/img-card.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  padding: 20px;\n  text-align: center; }\n  .card .name {\n    text-transform: capitalize;\n    padding: 10px; }\n"

/***/ }),

/***/ "./src/app/components/img-card/img-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/img-card/img-card.component.ts ***!
  \***********************************************************/
/*! exports provided: ImgCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgCardComponent", function() { return ImgCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImgCardComponent = /** @class */ (function () {
    function ImgCardComponent() {
    }
    ImgCardComponent.prototype.ngOnInit = function () {
        this.cityMap = {
            'delhi': './assets/city_images/delhi.jpeg',
            'noida': './assets/city_images/noida.jpeg',
            'gurgaon': './assets/city_images/gurgaon.jpeg'
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], ImgCardComponent.prototype, "data", void 0);
    ImgCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'img-card',
            template: __webpack_require__(/*! ./img-card.component.html */ "./src/app/components/img-card/img-card.component.html"),
            styles: [__webpack_require__(/*! ./img-card.component.scss */ "./src/app/components/img-card/img-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImgCardComponent);
    return ImgCardComponent;
}());



/***/ }),

/***/ "./src/app/components/job-tile/job-tile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/job-tile/job-tile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile\">\n  <div class=\"icon\">\n    <img [src]=\"imgIcon\" alt=\"job icon\">\n  </div>\n  <div class=\"text\">\n    <div>Job {{type}} \n      <span *ngIf=\"type == 'by'\">city</span>\n      <span *ngIf=\"type != 'by'\">you</span>\n    </div><div>In and around sector</div>\n  </div>\n  <div class=\"link\">\n    <a href=\"#\"> View</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/job-tile/job-tile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/job-tile/job-tile.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile {\n  margin-top: 20px;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  max-width: 320px; }\n  .tile .icon {\n    flex-basis: 14%; }\n  .tile .text {\n    flex-basis: 70%; }\n  .tile .link a {\n    text-decoration: none;\n    text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/components/job-tile/job-tile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/job-tile/job-tile.component.ts ***!
  \***********************************************************/
/*! exports provided: JobTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobTileComponent", function() { return JobTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobTileComponent = /** @class */ (function () {
    function JobTileComponent() {
        this.typeMap = {
            'by': './assets/icons/Jobs by Location.svg',
            'for': './assets/icons/Jobs For You.svg',
            'near': './assets/icons/Jobs Near You.svg'
        };
    }
    JobTileComponent.prototype.ngOnInit = function () {
        this.imgIcon = this.typeMap[this.type];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", Object)
    ], JobTileComponent.prototype, "type", void 0);
    JobTileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'job-tile',
            template: __webpack_require__(/*! ./job-tile.component.html */ "./src/app/components/job-tile/job-tile.component.html"),
            styles: [__webpack_require__(/*! ./job-tile.component.scss */ "./src/app/components/job-tile/job-tile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JobTileComponent);
    return JobTileComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"search-bar\">\n  <input type=\"text\" placeholder=\"Search...\" name=\"search\">\n  <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n</form>"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form.search-bar input[type=\"text\"] {\n  padding: 10px;\n  font-size: 17px;\n  border: none;\n  width: 88%;\n  background: white;\n  border-radius: 4px 0 0 4px; }\n\nform.search-bar input[type=\"text\"]:focus {\n  outline-color: transparent; }\n\nform.search-bar button {\n  width: 12%;\n  padding: 10px;\n  background: white;\n  color: grey;\n  font-size: 17px;\n  border: none;\n  border-left: none;\n  cursor: pointer;\n  border-radius: 0 4px 4px 0; }\n\nform.search-bar button:hover {\n  background-color: #00cec9; }\n\nform.search-bar::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user\">\n  <div class=\"info\">\n    <div>\n      {{data.name.title}} {{data.name.first}} {{data.name.last}}\n    </div>\n    <div>\n      {{data.email}}\n    </div>\n  </div>\n  <div class=\"pic\">\n    <img [src]=\"data.picture.thumbnail\" alt=\"user img\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user {\n  display: flex; }\n  .user .info {\n    flex-basis: 70%;\n    text-align: left;\n    -ms-grid-row-align: center;\n        align-self: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 0.8rem; }\n  .user .info div:first-child {\n      text-transform: capitalize;\n      font-size: 1.2rem;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .user .pic {\n    flex-basis: 30%;\n    text-align: center; }\n  .user .pic img {\n      border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "data", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/services/user-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDataService = /** @class */ (function () {
    function UserDataService(http) {
        this.http = http;
        this.APIUrl = 'https://randomuser.me/api/';
    }
    UserDataService.prototype.getData = function (count) {
        return this.http.get(this.APIUrl + "?results=" + count);
    };
    UserDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserDataService);
    return UserDataService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/delhivery/amit/pocs/Assignment2/dash-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map