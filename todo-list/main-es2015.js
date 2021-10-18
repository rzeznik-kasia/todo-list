(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"app-title\">Welcome to {{ title }}!</h1>\n<app-list-manager></app-list-manager>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/input-button-unit/input-button-unit.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/input-button-unit/input-button-unit.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input class=\"todo-input\"s #inputElementRef\n[value]=\"title\"\n(keyup.enter)=\"submitValue($event.target.value)\">\n\n<button class=\"btn\" (click)=\"submitValue(inputElementRef.value)\">\nSave\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-manager/list-manager.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-manager/list-manager.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"todo-app\">\n<app-input-button-unit (submit)=\"addItem($event)\"></app-input-button-unit>\n<ng-container *ngIf=\"todoListItems$ | async as todoListItems\">\n  <ul>\n    <li *ngFor=\"let todoItem of todoListItems\">\n      <app-todo-item [item]=\"todoItem\" (remove)=\"removeItem($event)\"  (update)=\"updateItem($event.item, $event.changes)\"></app-todo-item>\n    </li>\n  </ul>\n</ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo-item/todo-item.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo-item/todo-item.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"todo-item\">\n  <input type=\"checkbox\" class=\"todo-checkbox\" (click)=\"completeItem()\" [checked]='item.completed'/>\n  <span class=\"todo-title\" [ngClass]=\"{ 'todo-complete': item.completed }\">\n    {{ item.title }}\n  </span>\n  <button class=\"btn btn-red\" (click)=\"removeItem()\">\n    remove\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'todo-list';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _input_button_unit_input_button_unit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-button-unit/input-button-unit.component */ "./src/app/input-button-unit/input-button-unit.component.ts");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");
/* harmony import */ var _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-manager/list-manager.component */ "./src/app/list-manager/list-manager.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _input_button_unit_input_button_unit_component__WEBPACK_IMPORTED_MODULE_4__["InputButtonUnitComponent"],
            _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_5__["TodoItemComponent"],
            _list_manager_list_manager_component__WEBPACK_IMPORTED_MODULE_6__["ListManagerComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/enums/status-code.ts":
/*!**************************************!*\
  !*** ./src/app/enums/status-code.ts ***!
  \**************************************/
/*! exports provided: StatusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCode", function() { return StatusCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Added"] = 0] = "Added";
    StatusCode[StatusCode["Deleted"] = 1] = "Deleted";
    StatusCode[StatusCode["Updated"] = 2] = "Updated";
})(StatusCode || (StatusCode = {}));


/***/ }),

/***/ "./src/app/input-button-unit/input-button-unit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/input-button-unit/input-button-unit.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-input {\n  padding: 4px 10px 4px;\n  font-size: 16px;\n  font-family: 'Lucida Grande', Verdana, sans-serif;\n  line-height: 20px;\n  border: solid 1px #dddddd;\n  border-radius: 5px;\n  flex-grow: 1;\n}\n\n:host(:not([hidden])) {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtYnV0dG9uLXVuaXQvaW5wdXQtYnV0dG9uLXVuaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaURBQWlEO0VBQ2pELGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaW5wdXQtYnV0dG9uLXVuaXQvaW5wdXQtYnV0dG9uLXVuaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWlucHV0IHtcbiAgcGFkZGluZzogNHB4IDEwcHggNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIEdyYW5kZScsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGRkZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuOmhvc3QoOm5vdChbaGlkZGVuXSkpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/input-button-unit/input-button-unit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/input-button-unit/input-button-unit.component.ts ***!
  \******************************************************************/
/*! exports provided: InputButtonUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputButtonUnitComponent", function() { return InputButtonUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputButtonUnitComponent = class InputButtonUnitComponent {
    constructor() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.title = 'Hello World';
    }
    ngOnInit() {
    }
    submitValue(newTitle) {
        this.submit.emit(newTitle);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InputButtonUnitComponent.prototype, "submit", void 0);
InputButtonUnitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-input-button-unit",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-button-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/input-button-unit/input-button-unit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-button-unit.component.css */ "./src/app/input-button-unit/input-button-unit.component.css")).default]
    })
], InputButtonUnitComponent);



/***/ }),

/***/ "./src/app/list-manager/list-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-manager/list-manager.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-app {\n  position: relative;\n  width: 400px;\n  padding: 30px 30px 15px;\n  background: white;\n  border: 1px solid;\n  border-color: #dfdcdc #d9d6d6 #ccc;\n  border-radius: 2px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  margin: 20px auto;\n}\n\n.todo-app::before, .todo-app::after {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  height: 4px;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n}\n\n.todo-app::after {\n  bottom: -3px;\n  left: 0;\n  right: 0;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.todo-app::before {\n  bottom: -5px;\n  left: 2px;\n  right: 2px;\n  border-color: #c4c4c4;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1tYW5hZ2VyL2xpc3QtbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBRWxCLHdDQUF3QztFQUN4QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7RUFFUix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFFckIseUNBQXlDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1tYW5hZ2VyL2xpc3QtbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tYXBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2RmZGNkYyAjZDlkNmQ2ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLnRvZG8tYXBwOjpiZWZvcmUsIC50b2RvLWFwcDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50b2RvLWFwcDo6YWZ0ZXIge1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50b2RvLWFwcDo6YmVmb3JlIHtcbiAgYm90dG9tOiAtNXB4O1xuICBsZWZ0OiAycHg7XG4gIHJpZ2h0OiAycHg7XG4gIGJvcmRlci1jb2xvcjogI2M0YzRjNDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/list-manager/list-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-manager/list-manager.component.ts ***!
  \********************************************************/
/*! exports provided: ListManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListManagerComponent", function() { return ListManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todo_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo-list.service */ "./src/app/services/todo-list.service.ts");



let ListManagerComponent = class ListManagerComponent {
    constructor(todoListService) {
        this.todoListService = todoListService;
        this.todoListItems$ = this.todoListService.todoListItemsWithCRUD$;
    }
    addItem(title) {
        this.todoListService.addItem({ title });
    }
    removeItem(item) {
        this.todoListService.deleteItem(item);
    }
    updateItem(item, changes) {
        this.todoListService.updateItem(item, changes);
    }
};
ListManagerComponent.ctorParameters = () => [
    { type: _services_todo_list_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"] }
];
ListManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-manager/list-manager.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-manager.component.css */ "./src/app/list-manager/list-manager.component.css")).default]
    })
], ListManagerComponent);



/***/ }),

/***/ "./src/app/services/todo-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/todo-list.service.ts ***!
  \***********************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _enums_status_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/status-code */ "./src/app/enums/status-code.ts");





// import { StorageService } from './storage.service';
// const todoListStorageKey = 'Todo_List_Observable';
let TodoListService = class TodoListService {
    // import { StorageService } from './storage.service';
    // const todoListStorageKey = 'Todo_List_Observable';
    constructor() {
        this.todoListItems$ = this.fetchData();
        // saveList() {
        //   this.storageService.setData(todoListStorageKey, this.todoListItems$);
        // }
        this.todoItemsModifyOperationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.todoItemsModifyOperationAction$ = this.todoItemsModifyOperationSubject.asObservable();
        this.todoListItemsWithCRUD$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.todoListItems$, this.todoItemsModifyOperationAction$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])((todoItems, operation) => this.modifyTodoList(todoItems, operation.todoItem, operation.status)));
    }
    //storageService.getData(todoListStorageKey) || defaultTodoList;
    fetchData() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            const data = [
                { title: 'install NodeJS', id: 1634477705055 },
                { title: 'install Angular CLI', id: 1634477716641 },
                { title: 'create new app', id: 1634477710000 },
                { title: 'serve app', id: 16344777100001 },
                { title: 'develop app', id: 16344777100002 },
                { title: 'deploy app', id: 16344777100003 },
            ];
            observer.next(data);
            observer.complete();
        });
    }
    addItem(item) {
        const addedTodoItem = Object.assign({}, item);
        addedTodoItem.id = Date.now(); //TODO
        this.todoItemsModifyOperationSubject.next({ todoItem: addedTodoItem, status: _enums_status_code__WEBPACK_IMPORTED_MODULE_4__["StatusCode"].Added });
    }
    deleteItem(item) {
        const deletedTodoItem = Object.assign({}, item);
        this.todoItemsModifyOperationSubject.next({ todoItem: deletedTodoItem, status: _enums_status_code__WEBPACK_IMPORTED_MODULE_4__["StatusCode"].Deleted });
    }
    updateItem(item, changes) {
        const updatedTodoItem = Object.assign({}, item, changes);
        this.todoItemsModifyOperationSubject.next({ todoItem: updatedTodoItem, status: _enums_status_code__WEBPACK_IMPORTED_MODULE_4__["StatusCode"].Updated });
    }
    modifyTodoList(todoItems, todoItem, status) {
        if (status === _enums_status_code__WEBPACK_IMPORTED_MODULE_4__["StatusCode"].Added) {
            return [...todoItems, Object.assign({}, todoItem)];
        }
        if (status === _enums_status_code__WEBPACK_IMPORTED_MODULE_4__["StatusCode"].Deleted) {
            return todoItems.filter(item => item.id !== todoItem.id);
        }
        if (status === _enums_status_code__WEBPACK_IMPORTED_MODULE_4__["StatusCode"].Updated) {
            return todoItems.map(item => item.id === todoItem.id ? Object.assign({}, todoItem) : item);
        }
    }
};
TodoListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodoListService);



/***/ }),

/***/ "./src/app/todo-item/todo-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-item {\n  padding: 10px 0;\n  border-top: solid 1px #ddd;\n  min-height: 30px;\n  line-height: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo-checkbox {\n  flex-shrink: 0;\n  margin: auto 1ex auto 0;\n}\n\n.todo-title {\n  flex-grow: 1;\n  padding-left: 11px;\n}\n\n.todo-complete {\n  text-decoration: line-through;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWl0ZW0ge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZGRkO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udG9kby1jaGVja2JveCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW46IGF1dG8gMWV4IGF1dG8gMDtcbn1cblxuLnRvZG8tdGl0bGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctbGVmdDogMTFweDtcbn1cblxuLnRvZG8tY29tcGxldGUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/todo-item/todo-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.ts ***!
  \**************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoItemComponent = class TodoItemComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    removeItem() {
        this.remove.emit(this.item);
    }
    completeItem() {
        this.update.emit({
            item: this.item,
            changes: { completed: !this.item.completed }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TodoItemComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TodoItemComponent.prototype, "remove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TodoItemComponent.prototype, "update", void 0);
TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo-item/todo-item.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-item.component.css */ "./src/app/todo-item/todo-item.component.css")).default]
    })
], TodoItemComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kasia/Repos/todo-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map