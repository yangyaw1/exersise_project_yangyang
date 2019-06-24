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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-test/add-test.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-test/add-test.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formRef = 'ngForm'>\n<div class = 'container'>\n<div class = 'form-group'>\n    <label for = 'testName'>Test name</label>\n    <input type = 'text' name = 'name' class = 'form-control' \n        [(ngModel)] = 'newtest.name'\n        required placeholder=\"Please enter test name\">\n</div>\n<div class = 'form-group'>\n    <label for = 'testSubject'>Subject</label>\n    <select name = \"subject\" class = 'form-control' \n        [(ngModel)] = 'newtest.subject'>\n        <option *ngFor = 'let subject of subjects' [value] = 'subject'>\n            {{subject}}\n        </option>\n    </select>\n</div>\n<div class = 'form-group'>\n    <label for = 'Questions'>Questions</label>\n    <div class = 'form-group'>\n        <label for = 'testSubject'>Number of questions</label>\n        <select name = \"numberofquestion\" class = 'form-control' \n            [(ngModel)] = 'numberofquestion' (change) = 'questions_init()'>\n            <option *ngFor = \"let dummy of [].constructor(10); let i = index\"  [value] = 'i'>\n                {{i}}\n            </option>\n        </select>\n    </div>\n    <div class = 'list-group' *ngFor = \"let question of newtest.body; let j = index\">\n        <label for = \"{{'question' +j.toString}}\"> Question {{j+1}}</label>\n            <div class = 'form-group'>\n                 <label for = \"{{'question' +j.toString+'des'}}\">Qusetion description</label>\n                 <input type = 'text' name = \"{{'question' +j.toString()+'name'}}\" class = 'form-control' \n                 [(ngModel)] = 'newtest.body[j].des'\n                 required placeholder=\"Please enter description of question {{j+1}}\">\n            </div>\n            <div class = 'form-group'>\n                 <label for = \"{{'question' +j.toString()+'numchioce'}}\">Number of chioces</label>\n                 <select name = \"{{'chioces of question' + j.toString()}}\" class = 'form-control' \n                      [(ngModel)] = 'numberofchioce[j]' (change) = 'chioce_init(j)'>\n                      <option *ngFor = \"let dummy of [].constructor(5); let k = index\"  [value] = 'k'>\n                          {{k}}\n                      </option>\n                 </select>\n                 <!--<div> chioces of question {{j}}: {{numberofchioce[j]}}</div>-->\n                 <div class = 'list-group' *ngFor = 'let dummy of newtest.body[j].chioces; let q = index'>\n                      <label for = \"{{'question'+j.toString()+'chioce'+q.toString()}}\">chioce {{q+1}} construction </label>\n                      <input type = 'text' name = \"{{'question'+j.toString()+'chioce'+q.toString()}}\" class = 'form-control' \n                      [(ngModel)] = 'newtest.body[j].chioces[q].value'\n                      required placeholder=\"Please enter chioce {{q+1}} of question {{j+1}}\">\n                      <div>\n                         <input type = 'radio' name = \"{{'question'+j.toString()+'solu'}}\" class = 'btn' \n                         [(ngModel)] = 'newtest.body[j].solu.value' [value]=\"q\"> Chioce {{q+1}} is the answer!\n                      </div>\n                 </div>\n                 <!--<div> solu for {{j}} is {{newtest.body[j].solu.value}} </div>-->\n            </div>\n    </div>\n</div>\n<div class = 'row'>\n        <div class = 'col-md-12'>\n            <button type = 'submit' class='btn btn-primary pull-right'\n                    (click) = 'addtest()'> submit test!  </button>\n        </div>\n</div>\n</div>\n</form>\n<br/>\n<br/>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/chatbox/chatbox.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/chatbox/chatbox.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatbox border\">\n  <div class = 'list-group'>\n     <div class = 'chattitle'> Discussion about the test: \n     <br/>\n     current {{usernumber.value}} active user \n     <br/>\n     Your id is {{userId.value}}.\n     </div>\n     <!--<div class = 'chattitle'> Discussion forum </div>-->\n     <div class = 'chatbody'> {{chatbody.body}} </div>\n     <form #formRef = 'ngForm'> \n     <textarea name = 'chatsend' id = 'chatsend' class = 'form-control chatsend'\n              placeholder=\"Please enter message\"\n              [(ngModel)] = \"chatmessage\" (keydown.shift.enter)=\"sendmessage()\"\n              (keyup.shift)=\"resetmessage()\"\n              (keyup.enter)=\"resetmessage()\"\n              rows = '2'>\n     </textarea>\n     </form>\n  </div>  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/test-detail/test-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/test-detail/test-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formRef = 'ngForm'>\n<div class = 'container'>\n  <div class = 'list-group' *ngIf = 'start'>\n      <a class = 'list-group-item' *ngFor = 'let question of test.body; let i = index;'>\n          <strong class = 'list-group-item'> Question {{question.id}}: </strong>\n          <strong class = 'list-group-item'> {{question.des}} </strong> \n            <div *ngFor = \"let chioce of question.chioces; let j = index;\">\n              <input type = 'radio' name = \"{{i.toString()}}\" class = 'btn' \n              [(ngModel)] = 'answer[i].value' [value]=\"j\"> {{chioce.value}}\n            </div>\n          <div *ngIf = 'graded'> The solution is: {{question.chioces[question.solu.value].value}} </div>\n      </a>\n  </div>\n<div class = 'row'>\n        <div class = 'col-md-12'>\n            <button type = 'submit' class='btn btn-primary pull-right'\n                    (click) = 'grading()'> submit answer!  </button>\n        </div>\n</div>\n<div *ngIf = 'graded'> correct: {{correct}}, wrong: {{wrong}}, unanswered: {{unanswered}}</div>\n</div>\n</form>\n<app-chatbox></app-chatbox>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/test-list/test-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/test-list/test-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'container'>\n  <app-add-test></app-add-test>\n  <div class = 'list-group'>\n      <a class = 'list-group-item' *ngFor = 'let test of tests' [routerLink]=\"['/tests', test.id]\">\n      <!--<a class = 'list-group-item' *ngFor = 'let test of tests'>-->\n          <span class = \"{{'pull-left badge subject subject-' + test.subject.toLocaleLowerCase()}}\">\n              {{test.subject}}\n          </span>\n          <strong class = 'title'> {{test.id}} {{test.name}} </strong>\n      </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/test-list/test-list.component */ "./src/app/components/test-list/test-list.component.ts");
/* harmony import */ var _components_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/test-detail/test-detail.component */ "./src/app/components/test-detail/test-detail.component.ts");
/* harmony import */ var _components_add_test_add_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-test/add-test.component */ "./src/app/components/add-test/add-test.component.ts");
/* harmony import */ var _components_chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chatbox/chatbox.component */ "./src/app/components/chatbox/chatbox.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_9__["TestListComponent"],
            _components_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_10__["TestDetailComponent"],
            _components_add_test_add_test_component__WEBPACK_IMPORTED_MODULE_11__["AddTestComponent"],
            _components_chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_12__["ChatboxComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_3__["routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/test-list/test-list.component */ "./src/app/components/test-list/test-list.component.ts");
/* harmony import */ var _components_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test-detail/test-detail.component */ "./src/app/components/test-detail/test-detail.component.ts");



const routes = [
    // Homework
    {
        path: '',
        redirectTo: 'tests',
        pathMatch: 'full'
    },
    {
        path: 'tests',
        component: _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_1__["TestListComponent"]
    },
    {
        path: 'tests/:id',
        component: _components_test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_2__["TestDetailComponent"]
    },
    {
        path: '**',
        redirectTo: 'tests'
    }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/add-test/add-test.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-test/add-test.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRlc3QvYWRkLXRlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-test/add-test.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-test/add-test.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTestComponent", function() { return AddTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




const DEFAULT_TEST = Object.freeze({
    'id': 0,
    'name': '',
    'body': [],
    'subject': 'Math'
});
const DEFAULT_QUESTION = Object.freeze({
    'id': 0,
    'des': '',
    'chioces': [],
    'solu': { 'value': -1 }
});
let AddTestComponent = class AddTestComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.newtest = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(DEFAULT_TEST);
        this.subjects = ['Math', 'Physics', 'Coding'];
        this.numberofquestion = 0;
        this.numberofchioce = [];
    }
    ngOnInit() {
    }
    questions_init() {
        this.newtest.body = [];
        this.numberofchioce = [];
        for (let i = 0; i < this.numberofquestion; i++) {
            this.newquestion = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(DEFAULT_QUESTION);
            this.newquestion.id = i + 1;
            this.newtest.body.push(this.newquestion);
            this.numberofchioce.push(0);
        }
    }
    chioce_init(j) {
        this.newtest.body[j].chioces = [];
        for (let i = 0; i < this.numberofchioce[j]; i++) {
            this.newtest.body[j].chioces.push({ value: '' });
        }
    }
    addtest() {
        this.dataService.addtest(this.newtest);
    }
    solu_get(j, q) {
        this.newtest.body[j].solu.value = q + 1;
        console.log(j.toString());
    }
};
AddTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-test',
        template: __webpack_require__(/*! raw-loader!./add-test.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-test/add-test.component.html"),
        styles: [__webpack_require__(/*! ./add-test.component.css */ "./src/app/components/add-test/add-test.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], AddTestComponent);



/***/ }),

/***/ "./src/app/components/chatbox/chatbox.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/chatbox/chatbox.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatbox {\n    position:fixed;\n    background-color: #FBECEC;\n    bottom:5px;\n    right:5px;\n    margin:0;\n    width: 300px;\n    height: 450px;\n}\n\n.chattitle {\n    /*position:fixed;*/\n    background-color: #B6FED5;\n    bottom:5px;\n    right:5px;\n    margin:0;\n    width: 300px;\n    height: 75px;\n    white-space: pre-line;\n}\n\n.chatbody {\n    /*position:fixed;*/\n    background-color: #DCDCDC;\n    bottom:5px;\n    right:5px;\n    margin:0;\n    width: 300px;\n    height: 325px;\n    word-wrap:break-word;\n    overflow-y: auto;\n    white-space: pre-line;\n}\n\n.chatsend {\n    position:fixed;\n    background-color: #FBECEC;\n    bottom:5px;\n    right:5px;\n    margin:0;\n    width: 300px;\n    height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0Ym94L2NoYXRib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdGJveCB7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUNFQztcbiAgICBib3R0b206NXB4O1xuICAgIHJpZ2h0OjVweDtcbiAgICBtYXJnaW46MDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0NTBweDtcbn1cblxuLmNoYXR0aXRsZSB7XG4gICAgLypwb3NpdGlvbjpmaXhlZDsqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCNkZFRDU7XG4gICAgYm90dG9tOjVweDtcbiAgICByaWdodDo1cHg7XG4gICAgbWFyZ2luOjA7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5jaGF0Ym9keSB7XG4gICAgLypwb3NpdGlvbjpmaXhlZDsqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XG4gICAgYm90dG9tOjVweDtcbiAgICByaWdodDo1cHg7XG4gICAgbWFyZ2luOjA7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzI1cHg7XG4gICAgd29yZC13cmFwOmJyZWFrLXdvcmQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5jaGF0c2VuZCB7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUNFQztcbiAgICBib3R0b206NXB4O1xuICAgIHJpZ2h0OjVweDtcbiAgICBtYXJnaW46MDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/chatbox/chatbox.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/chatbox/chatbox.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function() { return ChatboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");




let ChatboxComponent = class ChatboxComponent {
    constructor(route, chatservice) {
        this.route = route;
        this.chatservice = chatservice;
        this.chatbody = { body: '' };
        this.chatmessage = '';
        this.usernumber = { value: 0 };
        this.userId = { value: '' };
    }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
            this.testId = params['id'];
        });
        this.chatservice.init(this.userId, this.usernumber, this.chatbody, this.testId);
        this.chatservice.newuser();
    }
    sendmessage() {
        this.chatservice.sendchat('Anonymous (id: ' + this.userId.value + '): ' + this.chatmessage);
        this.chatmessage = '';
    }
    resetmessage() {
        if (this.chatmessage == '\n') {
            this.chatmessage = '';
        }
    }
};
ChatboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatbox',
        template: __webpack_require__(/*! raw-loader!./chatbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/chatbox/chatbox.component.html"),
        styles: [__webpack_require__(/*! ./chatbox.component.css */ "./src/app/components/chatbox/chatbox.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
], ChatboxComponent);



/***/ }),

/***/ "./src/app/components/test-detail/test-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/test-detail/test-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charbox {\n    position: fixed;\n    bottom: 0px;\n    right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0LWRldGFpbC90ZXN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rlc3QtZGV0YWlsL3Rlc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcmJveCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/test-detail/test-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/test-detail/test-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: TestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDetailComponent", function() { return TestDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




let TestDetailComponent = class TestDetailComponent {
    constructor(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.answer = [];
        this.correct = 0;
        this.wrong = 0;
        this.unanswered = 0;
        this.graded = false;
        this.start = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            // this.test = this.dataService.gettest(+params['id']);
            this.dataService.gettest(+params['id'])
                .then((test) => {
                console.log(test);
                this.test = test;
                console.log(this.test);
                for (var i = 0; i < this.test.body.length; i++) {
                    this.answer.push({ value: -1 });
                }
                this.unanswered = this.test.body.length;
                this.start = true;
            });
        });
    }
    grading() {
        this.correct = 0;
        this.wrong = 0;
        this.unanswered = 0;
        this.graded = true;
        for (var i = 0; i < this.test.body.length; i++) {
            if (this.answer[i].value === this.test.body[i].solu.value) {
                this.correct++;
            }
            else if (this.answer[i].value != -1) {
                this.wrong++;
            }
            else {
                this.unanswered++;
            }
        }
    }
};
TestDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-detail',
        template: __webpack_require__(/*! raw-loader!./test-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/test-detail/test-detail.component.html"),
        styles: [__webpack_require__(/*! ./test-detail.component.css */ "./src/app/components/test-detail/test-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], TestDetailComponent);



/***/ }),

/***/ "./src/app/components/test-list/test-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/test-list/test-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .badge.subject {\n\tpadding-top: 0.6em;\n\tcolor: #fbfdfa;\n\tfont-size: 12px;\n}\n .title {\n\tfont-size: 1.2em;\n}\n .subject-math {\n\tbackground-color: #42ebf4;\n}\n .subject-physics {\n\tbackground-color: #92cf5c;\n}\n .subject-english {\n    background-color: #dd0d1e;\n}\n .subject-coding {\n\tbackground-color: #8d16e2;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0LWxpc3QvdGVzdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7Q0FDQSxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGVBQWU7QUFDaEI7Q0FDQztDQUNBLGdCQUFnQjtBQUNqQjtDQUNDO0NBQ0EseUJBQXlCO0FBQzFCO0NBQ0M7Q0FDQSx5QkFBeUI7QUFDMUI7Q0FDQztJQUNHLHlCQUF5QjtBQUM3QjtDQUNDO0NBQ0EseUJBQXlCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZXN0LWxpc3QvdGVzdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmJhZGdlLnN1YmplY3Qge1xuXHRwYWRkaW5nLXRvcDogMC42ZW07XG5cdGNvbG9yOiAjZmJmZGZhO1xuXHRmb250LXNpemU6IDEycHg7XG59XG4gLnRpdGxlIHtcblx0Zm9udC1zaXplOiAxLjJlbTtcbn1cbiAuc3ViamVjdC1tYXRoIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzQyZWJmNDtcbn1cbiAuc3ViamVjdC1waHlzaWNzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzkyY2Y1Yztcbn1cbiAuc3ViamVjdC1lbmdsaXNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQwZDFlO1xufVxuIC5zdWJqZWN0LWNvZGluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4ZDE2ZTI7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/test-list/test-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/test-list/test-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestListComponent", function() { return TestListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");



let TestListComponent = class TestListComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.gettests();
    }
    ngOnDestroy() {
        this.subscriptionTests.unsubscribe();
    }
    gettests() {
        // this.tests = this.dataService.gettests();
        this.subscriptionTests = this.dataService.gettests()
            .subscribe(tests => {
            this.tests = tests;
        });
    }
};
TestListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-list',
        template: __webpack_require__(/*! raw-loader!./test-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/test-list/test-list.component.html"),
        styles: [__webpack_require__(/*! ./test-list.component.css */ "./src/app/components/test-list/test-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], TestListComponent);



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatService = class ChatService {
    constructor() { }
    init(userId, usernumber, chatbody, testId) {
        this.chatSocket = io(window.location.origin, { query: 'testId=' + testId });
        this.chatSocket.on("message", message => {
            console.log("message received from the server: " + message);
        });
        this.chatSocket.on("userchange", (users, id) => {
            console.log("get users " + String(usernumber.value));
            usernumber.value = users;
            if (userId.value == '') {
                userId.value = String(id);
            }
        });
        this.chatSocket.on("newchat", (newchat) => {
            console.log("get chat " + newchat);
            if (chatbody.body != '') {
                chatbody.body += '\n';
            }
            chatbody.body += newchat;
        });
    }
    sendchat(newchat) {
        this.chatSocket.emit("newchat", newchat);
    }
    newuser() {
        this.chatSocket.emit("newuser");
    }
};
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatService);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


// import { TESTS } from '../mock-tests';


let DataService = class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // private tests: Test[] = TESTS;
        this._testSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    gettests() {
        // return this.tests;
        this.httpClient.get(`api/v1/tests`)
            .toPromise()
            .then((res) => {
            this._testSource.next(res);
        })
            .catch(this.handleError);
        return this._testSource.asObservable();
    }
    gettest(id) {
        // return this.tests.find((test) => test.id === id)
        return this.httpClient.get(`api/v1/tests/${id}`)
            .toPromise()
            .then((res) => res)
            .catch(this.handleError);
    }
    addtest(newtest) {
        // newtest.id = this.tests.length + 1;
        const options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post(`api/v1/tests/`, newtest, options)
            .toPromise()
            .then((res) => {
            this.gettests();
            return res;
        })
            .catch(this.handleError);
    }
    handleError(error) {
        return Promise.reject(error.body || error);
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/environment/start/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map