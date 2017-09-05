webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/advance/advance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g advance\" style=\"overflow-y:auto;\">\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12\">\n\n    <div class=\"httprequestget\">\n      <h1>Http Request</h1>\n      <p-accordion class=\"Httprequestget\">\n        <p-accordionTab header=\"{{httpg.type}}\" *ngFor=\"let httpg of Httprequestget;let index = index;\">\n          <p class=\"\">{{httpg.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{httpg.code}}<br>\n            <pre class=\"\">{{httpg.furtherexplaination1}}</pre> {{httpg.code2}}<br>\n            <pre class=\"\">{{httpg.furtherexplaination2}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index == 0\">\n              <md-card>\n                <button md-raised-button (click)=\"getData()\">Click me to view request</button>\n                <md-spinner *ngIf=\"spinner\"></md-spinner><br><br>\n                <ul class=\"ul-margin\">\n                  <li *ngFor=\"let x of getDataObject\">\n                    <input type=\"text\" class=\"\" [(ngModel)]=\"x.first_name\">\n                    <input type=\"text\" class=\"\" [(ngModel)]=\"x.middle_name\">\n                    <input type=\"text\" class=\"\" [(ngModel)]=\"x.last_name\">\n                    <input type=\"text\" class=\"\" [(ngModel)]=\"x.location\">\n                    <button md-raised-button (click)=\"removeData(x.id,'Data Deleted (i refresh sa ang page kay di pa ni live refresh)','Close')\">remove</button>\n                    <button md-raised-button (click)=\"putData(x.id,x.first_name,x.middle_name,x.last_name,x.location,'Data updated','Close')\">update</button>\n                  </li>\n                </ul>\n              </md-card>\n            </ng-template>\n            <ng-template [ngIf]=\"index == 1\">\n              <md-spinner *ngIf=\"postSpinner\"></md-spinner><br><br>\n              <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"fname\" placeholder=\"First name\">\n              <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"mname\" placeholder=\"Middle name\">\n              <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"lname\" placeholder=\"Last name\">\n              <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"loc\" placeholder=\"Location\"><br> {{fname}}&nbsp;{{mname}}&nbsp;{{lname}}&nbsp;{{loc}}\n              <br>\n              <button md-raised-button (click)=\"postData(fname,mname,lname,loc,'Data stored ','Close')\">Click me to send request</button>\n            </ng-template>\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"routes\">\n      <h1>Routes</h1>\n      <p-accordion class=\"routes\">\n        <p-accordionTab header=\"{{router.type}}\" *ngFor=\"let router of Routes;let index = index;\">\n          <p class=\"\">{{router.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{router.code}}<br>\n            <pre class=\"\">{{router.furtherexplaination1}}</pre> {{router.code2}}\n            <br>\n            <pre class=\"\">{{router.furtherexplaination2}}</pre> {{router.code3}}\n            <br>\n            <pre class=\"\">{{router.furtherexplaination3}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index == 0\">\n              <md-card>\n                Ang output is naa na sa screen mismo. Kanang basic and advance na naa sa akong side menu\n              </md-card>\n            </ng-template>\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"ngmodules\">\n      <h1>NgModules</h1>\n      <p-accordion class=\"ngmodules\">\n        <p-accordionTab header=\"{{ngmod.type}}\" *ngFor=\"let ngmod of Ngmodules;let index = index;\">\n          <p class=\"\">{{ngmod.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{ngmod.code}}<br>\n            <pre class=\"\">{{ngmod.furtherexplaination1}}</pre> {{ngmod.code2}}\n            <br>\n            <pre class=\"\">{{ngmod.furtherexplaination2}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index == 0\">\n              <md-card>\n                {{ngmod.soutput}}\n              </md-card>\n            </ng-template>\n            <ng-template [ngIf]=\"index == 1\">\n              <md-card>\n                {{ngmod.soutput}}\n              </md-card>\n            </ng-template>\n            <ng-template [ngIf]=\"index == 2\">\n              <md-card>\n                {{ngmod.soutput}}\n              </md-card>\n            </ng-template>\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"templating\">\n      <h1>Templating</h1>\n      <p-accordion class=\"templating\">\n        <p-accordionTab header=\"{{temp.type}}\" *ngFor=\"let temp of Template;let index = index;\">\n          <p class=\"\">{{temp.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{temp.code}}<br>\n            <pre class=\"\">{{temp.furtherexplaination1}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index == 0\">\n              <md-card>\n                {{temp.soutput}}\n              </md-card>\n            </ng-template>\n            <ng-template [ngIf]=\"index == 1\">\n              <md-card>\n                {{temp.soutput}}\n              </md-card>\n            </ng-template>\n\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"styling\">\n      <h1>Style</h1>\n      <p-accordion class=\"style\">\n        <p-accordionTab header=\"{{styl.type}}\" *ngFor=\"let styl of Style;let index = index;\">\n          <p class=\"\">{{styl.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{styl.code}}<br>\n            <pre class=\"\">{{styl.furtherexplaination1}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index == 0\">\n              <md-card>\n                {{styl.soutput}}\n              </md-card>\n            </ng-template>\n            <ng-template [ngIf]=\"index == 1\">\n              <md-card>\n                {{styl.soutput}}\n              </md-card>\n            </ng-template>\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/advance/advance.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".advance .httprequestget {\n  margin-top: 1em;\n  margin-bottom: 1em; }\n  .advance .httprequestget .p-class {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .advance .httprequestget .ul-margin {\n    margin-top: 20px; }\n\n.advance .routes,\n.advance .ngmodules,\n.advance .templating,\n.advance .styling {\n  margin-top: 1em;\n  margin-bottom: 1em; }\n  .advance .routes .p-class,\n  .advance .ngmodules .p-class,\n  .advance .templating .p-class,\n  .advance .styling .p-class {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/advance/advance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvanceComponent = (function () {
    function AdvanceComponent(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.Httprequestget = httprequest;
        this.Routes = route;
        this.Ngmodules = ngmodule;
        this.Template = template;
        this.Style = style;
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        //path:string = 'https://my-rest-api-postgre.herokuapp.com';
        this.path = 'http://127.0.0.1:8000';
        this.spinner = false;
        this.postSpinner = false;
    }
    AdvanceComponent.prototype.ngOnInit = function () {
    };
    AdvanceComponent.prototype.getData = function () {
        var _this = this;
        this.spinner = true;
        this.http.get(this.path + '/info/information-list/').subscribe(function (data) {
            _this.getDataObject = data;
            _this.spinner = false;
            return _this.spinner;
        }), function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred:', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        };
    };
    AdvanceComponent.prototype.postData = function (fname, mname, lname, loc, message, action) {
        var _this = this;
        this.postSpinner = true;
        var body = { first_name: fname, middle_name: mname, last_name: lname, location: loc };
        this.http
            .post(this.path + '/info/information-list/', body, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('Content-Type', 'application/json'),
        })
            .retry(3)
            .subscribe(function (data) {
            _this.postSpinner = false;
            _this.snackBar.open(message, action, {
                duration: 3000,
            });
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    AdvanceComponent.prototype.removeData = function (id, message, action) {
        var _this = this;
        this.spinner = true;
        var pk = id;
        var options = {};
        options.header = new Headers({
            'Content-Type': 'application/json'
        });
        this.http.delete(this.path + '/info/information-request/' + pk + '/', options).subscribe(function (data) {
            _this.spinner = false;
            _this.snackBar.open(message, action, {
                duration: 3000,
            });
        }), function (err) {
            if (err.error instanceof Error) {
                console.log('An error occurred:', err.error.message);
            }
            else {
                console.log("Backend returned code " + err.status + ", body was: " + err.error);
            }
        };
    };
    AdvanceComponent.prototype.putData = function (id, fname, mname, lname, loc, message, action) {
        var _this = this;
        var pk = id;
        this.spinner = true;
        var body = { first_name: fname, middle_name: mname, last_name: lname, location: loc };
        var jsonString = JSON.stringify(body);
        this.http
            .put(this.path + '/info/information-request/' + pk + '/', jsonString, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('Content-Type', 'application/json'),
        })
            .retry(3)
            .subscribe(function (data) {
            _this.spinner = false;
            _this.snackBar.open(message, action, {
                duration: 3000,
            });
        }, function (error) {
            console.log('An error occurred:', error.message);
        });
    };
    AdvanceComponent.prototype.getTxt = function () {
        alert("coming soon . . . ");
    };
    return AdvanceComponent;
}());
AdvanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-advance',
        template: __webpack_require__("../../../../../src/app/advance/advance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/advance/advance.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdSnackBar */]) === "function" && _b || Object])
], AdvanceComponent);

var httprequest = [
    {
        type: 'Http Request Get / Put / Delete (not yet a live refresh. needs to reload the page again to take effect)',
        explaination: '....',
        code: '....',
        furtherexplaination1: '....',
        code2: "....",
        furtherexplaination2: '....'
    }, {
        type: 'Http Request Post (not yet a live refresh. needs to reload the page again to take effect)',
        explaination: 'Same ra sa HTTP GET pero kita na mismo naga pasa sa data',
        code: "let body = { first_name: fname, last_name: lname, location: loc };",
        furtherexplaination1: 'Sa kani na code ako sang gi pang declare tanan after ana i cast nako tanan sa string para matawag sa akong body kay ang body kay mo dawat lang ug string sa akong na hibal.an',
        code2: "this.http.post('https://my-sample-rest-api.herokuapp.com/credentials/?format=api', body, { headers: new HttpHeaders().set('Content-Type', 'application/json'), }) .subscribe( . . . );",
        furtherexplaination2: 'after ana ako nang i post ang body gamit ang http.post then i set ang headers sa certain type which is sa akong gi gamit karun kay json after ana ang subscribe kay pwede nimo i condition like sucess and error.'
    }
];
var route = [
    {
        type: 'Routing',
        explaination: 'Sa ani na style mao ni ang pinakadali para mag himo og routes sa angularjs 4 kay uban tutorial samukan ko. naa ray duha configuration para ma achieve ni.',
        code: 'const appRoutes: Routes = [ { path: "basic", component: BasicsComponent }, { path: "advance", component: AdvanceComponent },];',
        furtherexplaination1: 'mao na ang i butang sa module.ts ang path kay kung aha nako gusto i route na page and ang component is katong component na gi create nako',
        code2: 'const cs: cheatSheet[] = [ { name: "Basics", link: "basic" }, { name: "Advance", link: "advance" },];',
        furtherexplaination2: 'then after ana need tag constant array same sa taas para didto ra ta mag tawag sa example sa taas. Kay mahulog na siyag interface kung sa JAVA.',
        code3: '<router-outlet></router-outlet>',
        furtherexplaination3: 'Sa kana na directive gi tawag nato ang unsa man na template na gi tawag sa atong router.'
    }
];
var ngmodule = [
    {
        type: 'Declarations',
        explaination: 'Listahan sa component , directives, pipes na na belong sa kani na module',
        code: 'declarations: [AppComponent,BasicsComponent,AdvanceComponent,PushNotificationComponent,]',
        furtherexplaination1: 'Regarding sa code above. Akong gipang tawag ang akong component ug isa ka directive na na belong sa akong module',
        code2: '@NgModule({declarations: [AppComponent,BasicsComponent,AdvanceComponent,PushNotificationComponent,]})',
        furtherexplaination2: 'so ingon ani ang pag implement sa code above',
        soutput: '@NgModule({ declarations: [AppComponent,BasicsComponent,AdvanceComponent,PushNotificationComponent,], imports: [ .... ], providers: [], bootstrap: [AppComponent] })'
    }, {
        type: 'Imports',
        explaination: 'Tanang module na gitawag nimo dapat nato i declate sa imports',
        code: 'import {MdButtonModule, MdCheckboxModule} from "@angular/material";',
        furtherexplaination1: 'sa kani na code gi tawag nako ang classes inside sa @angular/material',
        code2: '@NgModule({ imports: [MdButtonModule, MdCheckboxModule],})',
        furtherexplaination2: 'sa code above ako nang gi declare ang class na MdButtonModule ug MdCheckboxModule para ma tawag na nako ang api sa akong module.',
        soutput: '@NgModule({ declarations: [ .... ], imports: [ MdButtonModule, MdToolbarModule ], providers: [], bootstrap: [AppComponent] })'
    }, {
        type: 'Bootstrap',
        explaination: 'Mao ni ang root element sa akong application',
        code: 'bootstrap: [AppComponent]',
        furtherexplaination1: 'akong gi butang ang root para ma bootstrap siya sa angular',
        code2: '@NgModule({ bootstrap: [AppComponent] })',
        furtherexplaination2: 'ingon ani pag implement sa code above',
        soutput: '@NgModule({ declarations: [ .... ], imports: [ .... ], providers: [], bootstrap: [AppComponent] })'
    }
];
var template = [
    {
        type: 'Inline template',
        explaination: 'Template inside sa @component',
        code: ' template: `<p>some template</p>`,',
        furtherexplaination1: 'nag template ko sulod sa akong @component and instead "" the way gamiton siya is ` ` ',
        soutput: "@Component({ selector: 'app-root', template: `<p>some template</p>`, styleUrls: ['./app.component.scss'],})"
    }, {
        type: 'External template',
        explaination: 'Template outside na sa @component',
        code: "templateUrl: './app.component.html',",
        furtherexplaination1: 'if na pansin ninyu nag lahi ang pag implement instead template nahimong templateUrl kay mao ni ang way para ma access ni angular ang external links',
        soutput: "@Component({ selector: 'app-root',templateUrl: './app.component.html',styleUrls: ['./app.component.scss'],})"
    }
];
var style = [
    {
        type: 'Inline css / scss',
        explaination: 'Style inside sa @component',
        code: "styles: ['.primary {color: red}']",
        furtherexplaination1: 'nag styles ko sulod sa akong @component and instead "" the way gamiton siya is ` ` ',
        soutput: "@Component({ selector: 'app-root', templateUrl: './app.component.html', styles: ['.primary {color: red}'], })"
    }, {
        type: 'External css / scss',
        explaination: 'Style outside na sa @component',
        code: "styleUrls: ['./app.component.scss'],",
        furtherexplaination1: 'if na pansin ninyu nag lahi ang pag implement instead styles nahimong styleUrls kay mao ni ang way para ma access ni angular ang external stylesheet',
        soutput: "@Component({ selector: 'app-root',templateUrl: './app.component.html',styleUrls: ['./app.component.scss'],})"
    }
];
var _a, _b;
//# sourceMappingURL=advance.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- rule of responsive 101: main is bootstrap : sub is primefaces -->\n<push-notification #notification [title]=\"name\" [body]=\"content\" \n    [icon]=\"icon\"\n    (load)=\"notification.show()\" closeDelay=\"7000\">\n  </push-notification>\n<md-sidenav-container class=\"example-sidenav-fab-container\">\n  <md-sidenav #sidenav mode=\"side\" opened=\"false\">\n\n    <div class=\"example-scrolling-content\">\n      <div style=\"width:270px;\"></div>\n      <p-accordion>\n        <p-accordionTab header=\"AngularJS 4\" [selected]=\"true\">\n          <div class=\"finalcs inside-collapse ui-g\">\n            <div class=\"ui-g-12 ui-md-6 ui-lg-6\" *ngFor=\"let fixsheet of finalcs\">\n              <a md-raised-button [routerLink]=\"['/',fixsheet.link]\" routerLinkActive=\"active\" class=\"\">{{fixsheet.name}}</a>\n            </div>\n          </div>\n        </p-accordionTab>\n        <p-accordionTab header=\"AngularJS 1\">\n          Coming soon . . . . . .\n        </p-accordionTab>\n        <p-accordionTab header=\"Git\">\n          Coming soon . . . . . .\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n  </md-sidenav>\n\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <md-toolbar color=\"primary\">\n        <button class=\"example-fab2\" (click)=\"sidenav.toggle()\">\n          <md-icon>. . . </md-icon>\n        </button>\n      </md-toolbar>\n      <div class=\"col-12\">\n        <router-outlet></router-outlet>\n        <fb-comments data-order-by=\"reverse_time\" data-mobile=\"true\" data-href=\"https://sirb0rab0g1.github.io/angularjs4-tutorial/#/\"></fb-comments>\n      </div>\n    </div>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-sidenav-fab-container {\n  width: 100%;\n  height: 100vh; }\n\n.example-sidenav-fab-container md-sidenav {\n  max-width: 270px !important; }\n\n.example-sidenav-fab-container .mat-sidenav-content,\n.example-sidenav-fab-container md-sidenav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto; }\n\n.example-fab {\n  position: absolute;\n  right: 20px;\n  bottom: 10px; }\n\n.example-fab2 {\n  left: 20px;\n  top: 10px;\n  position: absolute;\n  z-index: 99999999; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-scrolling-content {\n  overflow-y: auto;\n  overflow-x: hidden; }\n  .example-scrolling-content a {\n    text-decoration: none; }\n  .example-scrolling-content .inside-collapse {\n    margin-top: -10px;\n    margin-bottom: -10px;\n    margin-left: 0px; }\n\n.inside-collapse {\n  margin-left: -70px;\n  width: 270px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* unused harmony export cheatSheet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var cheatSheet = (function () {
    function cheatSheet() {
    }
    return cheatSheet;
}());

var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.title = 'app';
        this.finalcs = cs;
        this.name = "Kent Fueconcillo";
        this.content = "Hello! This is all about angular 4 tutorial";
        this.icon = "https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/19961222_1740052446022448_1520076539138365916_n.jpg?oh=213e3372ea9a6687f80fa07822fb3059&oe=59F36FB0";
        var initParams = {
            appId: '1569442779733042',
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object])
], AppComponent);

var cs = [
    { name: 'Basics', link: 'basic' },
    { name: 'Advance', link: 'advance' }
];
var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basics_basics_component__ = __webpack_require__("../../../../../src/app/basics/basics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__advance_advance_component__ = __webpack_require__("../../../../../src/app/advance/advance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_notifications_ng2_notifications__ = __webpack_require__("../../../../ng2-notifications/ng2-notifications.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_notifications_ng2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_notifications_ng2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//component



//angular material



//prime faces

//rxjs


//libraries

//facebook

//router
var appRoutes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_6__basics_basics_component__["a" /* BasicsComponent */] },
    { path: 'advance', component: __WEBPACK_IMPORTED_MODULE_7__advance_advance_component__["a" /* AdvanceComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__basics_basics_component__["a" /* BasicsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__advance_advance_component__["a" /* AdvanceComponent */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_notifications_ng2_notifications__["PushNotificationComponent"],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["FieldsetModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MdProgressSpinnerModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/basics/basics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g basic\">\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12\">\n\n    <div class=\"variable\">\n      <h1>Variable Declaration</h1>\n      <p-accordion class=\"Declaration\">\n        <p-accordionTab header=\"{{dec.type}}\" *ngFor=\"let dec of Declaration;let index = index;\">\n          <p class=\"\">{{dec.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{dec.code}}<br>\n            <pre class=\"\">{{dec.furtherexplaination1}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index==0\">\n              <md-toolbar>{{str}}</md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==1\">\n              <md-toolbar>{{num}}</md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==2\">\n              <md-toolbar>{{bol}}</md-toolbar>\n            </ng-template>\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"condition\">\n      <h1>Conditions</h1>\n      <p-accordion class=\"Condition\">\n        <p-accordionTab header=\"{{con.type}}\" *ngFor=\"let con of Condition;let index = index;\">\n          <p class=\"\">{{con.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{con.code}}<br> {{con.code2}}<br>\n            <pre class=\"\">{{con.furtherexplaination1}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index==0\">\n              <md-toolbar>\n                if you`re on browser mode try to f12 and look for output: True\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==1\">\n              <md-toolbar>\n                <div *ngIf='x'>Found</div>\n                <div *ngIf='!x'>Not found</div>\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==2\">\n              <md-toolbar>\n                <div *ngIf='x; then templateTrue else templateFalse'></div>\n                <ng-template #templateTrue>Found</ng-template>\n                <ng-template #templateFalse>Not Found</ng-template>\n              </md-toolbar>\n            </ng-template>\n          </md-card>\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"parse\">\n      <h1>Parsing</h1>\n      <p-accordion class=\"Parsing\">\n        <p-accordionTab header=\"{{par.type}}\" *ngFor=\"let par of Parsing;let index = index;\">\n          <p class=\"\">{{par.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{par.code}}<br> {{par.code2}}\n\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index==0\">\n              <md-toolbar>\n                {{parsey1}}\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==1\">\n              <md-toolbar>\n                {{parsey2}}\n              </md-toolbar>\n            </ng-template>\n\n          </md-card>\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"array\">\n      <h1>Array</h1>\n      <p-accordion class=\"Array\">\n        <p-accordionTab header=\"{{arr.type}}\" *ngFor=\"let arr of Array\">\n          <p class=\"\">{{arr.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{arr.code}}\n          </md-card>\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"object\">\n      <h1>Object</h1>\n      <p-accordion class=\"Object\">\n        <p-accordionTab header=\"{{obj.type}}\" *ngFor=\"let obj of Object\">\n          <p class=\"\">{{obj.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{obj.code}}\n          </md-card>\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"objectarray\">\n      <h1>Object Array</h1>\n      <p-accordion class=\"Objectarray\">\n        <p-accordionTab header=\"{{objarr.type}}\" *ngFor=\"let objarr of Objectarray\">\n          <p class=\"\">{{objarr.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{objarr.code}}\n          </md-card>\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"loop\">\n      <h1>Loops</h1>\n      <p-accordion class=\"Objectarray\">\n        <p-accordionTab header=\"{{loop.type}}\" *ngFor=\"let loop of Loops;let index = index;\">\n          <p class=\"\">{{loop.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{loop.code}}<br>\n            <pre class=\"\">{{loop.furtherexplaination1}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index==0\">\n              <md-toolbar>\n                if you`re on browser mode try to f12 and look for output: name\n                < looping </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==1\">\n              <md-toolbar>\n                <ul class=\"\">\n                  <li *ngFor=\"let name of names\"> {{name}} </li>\n                </ul>\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==2\">\n              <md-toolbar>\n                <ul class=\"\">\n                  <li *ngFor=\"let objarr of objarray\"> {{objarr.fname}} </li>\n                </ul>\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==3\">\n              <md-toolbar>\n                <ul class=\"\">\n                  <ul class=\"\">\n                    <li *ngFor=\"let objarr of objarray;let in = index;\"> {{in}} {{objarr.fname}} </li>\n                  </ul>\n                </ul>\n              </md-toolbar>\n            </ng-template>\n          </md-card>\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"event\">\n      <h1>Event</h1>\n      <md-toolbar>\n        <a href=\"https://developer.mozilla.org/en/docs/Web/Events/\" mdTooltip=\"Follow this link for more information\" mdTooltipPosition=\"below\"\n          class=\"\">Referrences</a>\n      </md-toolbar>\n      <p-accordion class=\"Event\">\n        <p-accordionTab header=\"{{evnt.type}}\" *ngFor=\"let evnt of Event;let index = index;\">\n          <p class=\"\">{{evnt.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{evnt.html}}<br>\n            <pre class=\"\">{{evnt.furtherexplaination1}}</pre>{{evnt.code}}<br>\n            <pre class=\"\">{{evnt.furtherexplaination2}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index==0\">\n              <md-toolbar>\n                <button (click)=\"click()\"> On click event </button>\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==1\">\n              <md-toolbar>\n                <button (dblclick)=\"dbclick()\"> Double click event </button>\n              </md-toolbar>\n            </ng-template>\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"function\">\n      <h1>Function</h1>\n      <p-accordion class=\"function\">\n        <p-accordionTab header=\"{{func.type}}\" *ngFor=\"let func of Func;let index = index;\">\n          <p class=\"\">{{func.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{func.code}} <br>\n            <pre class=\"\">{{func.furtherexplaination1}}</pre> {{func.code2}}\n            <pre class=\"\">{{func.furtherexplaination2}}</pre>\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index==0\">\n              <md-toolbar>\n                <button (click)=\"withoutparameter()\"> Withoutparameter </button>\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==1\">\n              <md-toolbar>\n                <button (click)=\"withparameter(10,'kent')\"> Withparameter </button>\n              </md-toolbar>\n            </ng-template>\n          </md-card>\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"arithmetic\">\n      <h1>Arithmetic</h1>\n      <md-toolbar>\n        <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random\" mdTooltip=\"Follow this link for more information\"\n          mdTooltipPosition=\"below\" class=\"\">Referrences</a>\n      </md-toolbar>\n      <p-accordion class=\"Arithmetic\">\n        <p-accordionTab header=\"{{ari.type}}\" *ngFor=\"let ari of Arithmetic;let index = index\">\n          <p class=\"\">{{ari.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{ari.code}}\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index==0\">\n              <md-toolbar>\n                {{1 + 1}} , {{1 - 1}} , {{1 * 1}} , {{1 / 1}}\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==1\">\n              <md-toolbar>\n                <button (click)=\"brandom()\">Click me to random</button> {{basicrand}}\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index==2\">\n              <md-toolbar>\n                <button (click)=\"arandom()\">Click me to random</button> {{advancerand}}\n              </md-toolbar>\n            </ng-template>\n          </md-card>\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"databinding\">\n      <h1>Data Binding</h1>\n      <p-accordion class=\"Databinding\">\n        <p-accordionTab header=\"{{db.type}}\" *ngFor=\"let db of Databinding;let index = index;\">\n          <p class=\"\">{{db.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{db.intantiation}}<br> {{db.code}}\n            <p class=\"p-class\">Output</p>\n            <ng-template [ngIf]=\"index == 0\">\n              <md-toolbar>\n                <input type=\"text\" class=\"\" [(ngModel)]=\"ngmodel\"> {{ngmodel}}\n              </md-toolbar>\n            </ng-template>\n            <ng-template [ngIf]=\"index == 1\">\n              <md-toolbar>\n                <img src=\"{{img}}\" height=\"50\">\n              </md-toolbar>\n            </ng-template>\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n\n    <div class=\"export\">\n      <h1>Export</h1>\n      <p-accordion class=\"Export\">\n        <p-accordionTab header=\"{{ex.type}}\" *ngFor=\"let ex of Export;let index = index;\">\n          <p class=\"\">{{ex.explaination}}</p>\n          <p class=\"\">\n            Code:\n          </p>\n          <md-card>\n            {{ex.code}}\n          </md-card>\n\n        </p-accordionTab>\n      </p-accordion>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/basics/basics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".basic {\n  overflow-y: auto; }\n  .basic .variable {\n    margin-top: 1em;\n    margin-bottom: 1em; }\n    .basic .variable .p-class {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n  .basic .condition, .basic .parse, .basic .objectarray, .basic .event, .basic .method, .basic .arithmetic, .basic .databinding, .basic .export {\n    margin-top: 1em;\n    margin-bottom: 1em; }\n    .basic .condition .p-class, .basic .parse .p-class, .basic .objectarray .p-class, .basic .event .p-class, .basic .method .p-class, .basic .arithmetic .p-class, .basic .databinding .p-class, .basic .export .p-class {\n      margin-top: 10px;\n      margin-bottom: 10px; }\n  .basic .array {\n    margin-top: 1em;\n    margin-bottom: 1em; }\n  .basic .object {\n    margin-top: 1em;\n    margin-bottom: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basics/basics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicsComponent = (function () {
    function BasicsComponent() {
        this.Declaration = declaration;
        this.Condition = condition;
        this.Parsing = parsing;
        this.Array = array;
        this.Object = object;
        this.Objectarray = objectarray;
        this.Loops = loop;
        this.Func = func;
        this.Arithmetic = arithmetic;
        this.Databinding = databinding;
        this.Export = exported;
        this.Event = event;
        this.x = 10;
        //declarations
        this.str = 'this is string';
        this.num = 10;
        this.bol = true;
        //parsings string to int - int to string
        this.parsex1 = '10';
        this.parsey1 = +this.parsex1;
        this.parsex2 = 10;
        this.parsey2 = String(this.parsex2);
        this.names = ['kent', 'john', 'lloyd'];
        this.nums = [1, 2, 3];
        this.named = {
            fname: 'kent',
            mname: 'dela cruz',
            lname: 'fueconcillo'
        };
        this.objarray = [
            { fname: 'kent' },
            { fname: 'daniel' },
            { fname: 'riel' }
        ];
        //bindings
        this.ngmodel = '';
        this.img = "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-9/19961222_1740052446022448_1520076539138365916_n.jpg?oh=6e8162f9e3bff101da85d93ff1ab8f91&oe=5A1AFCB0";
        //conditions
        if (this.x == 10)
            console.log("Condition\nTrue");
        else
            console.log("Condition\nFalse");
        for (var _i = 0, _a = this.names; _i < _a.length; _i++) {
            var n = _a[_i];
            console.log(n + " < looping");
        }
    }
    BasicsComponent.prototype.ngOnInit = function () {
    };
    //methods
    BasicsComponent.prototype.withoutparameter = function () {
        alert("too handsome for humanity");
    };
    BasicsComponent.prototype.withparameter = function (numb, stri) {
        alert(numb + " " + stri);
    };
    BasicsComponent.prototype.brandom = function () {
        this.basicrand = Math.random();
        return this.basicrand;
    };
    BasicsComponent.prototype.arandom = function () {
        this.advancerand = Math.random() * (1 * 100);
        return this.advancerand;
    };
    //event
    BasicsComponent.prototype.click = function () {
        alert("Hello! Angular 4 - single click");
    };
    BasicsComponent.prototype.dbclick = function () {
        alert("Hello! Angular 4 - double click");
    };
    return BasicsComponent;
}());
BasicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basics',
        template: __webpack_require__("../../../../../src/app/basics/basics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/basics/basics.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BasicsComponent);

var declaration = [
    {
        type: "String",
        explaination: "Declaring str to string",
        code: "str: string = 'this is string';",
        furtherexplaination1: 'Sa kani na instance gi global nato ang atong string para ma cast siya inside method for example like let samplestring = this.str;'
    }, {
        type: "Number",
        explaination: "Declaring num to number",
        code: "num:number = 10;",
        furtherexplaination1: 'Sa kani na instance gi global nato ang atong number para ma cast siya inside method for example like let samplenumber = this.num;'
    }, {
        type: "Boolean",
        explaination: "Declaring bol to boolean",
        code: "bol:boolean = true;",
        furtherexplaination1: 'Sa kani na instance gi global nato ang atong boolean para ma cast siya inside method for example like let sampleboolean = this.bol;'
    }
];
var condition = [
    {
        type: "If and Else statement ",
        explaination: "Lets say *ngIf naka declare na kog x:number = 10; so atong i condition na if true naay True else False sa console log. And if napansin ninyu wala na ang {} after condition kay optional na siya.",
        code: "if (this.x == 10) console.log('True');",
        code2: "else console.log('False');",
        furtherexplaination1: 'Sa diri na way nag condition ta sulod sa atong component.'
    }, {
        type: "Basic *ngIf",
        explaination: "Nag declare ko x:number=10. Then if existing si x mo prompt si found else kung wa pa na declare mo not found siya",
        code: "<div *ngIf='x'>Found</div>",
        code2: "<div *ngIf='!x'>Not found</div>",
        furtherexplaination1: 'Sa diri dapit nag template involve ta kay nag conditioning na ta mismo inside sa atong html'
    }, {
        type: "Advance *ngIf",
        explaination: "Continuation sa basic *ngIf. Sa diri na part nag if else condition ta regarding nag gamit tag <ng-template> na directive.",
        code: "<div *ngIf='x; then templateTrue else templateFalse'></div>",
        code2: "<ng-template #templateTrue>Found</ng-template> <ng-template #templateFalse>Not Found</ng-template>",
        furtherexplaination1: 'Sa diri dapit nag template involve ta kay nag advance conditioning na ta mismo inside sa atong html na if true then template else template'
    }
];
var parsing = [
    {
        type: "Parsing String to Number",
        explaination: "So far mao ni ang pinaka the best and easy way na conversion sa angularjs. By adding +.",
        code: "parsex: string = '10';",
        code2: "parsey: number = +this.parsex;",
    },
    {
        type: "Parsing Number to String",
        explaination: "Para ma parse number to string kailngan nato ang String() function na built in na daan.",
        code: "parsex2: number = 10;",
        code2: "parsey2: string = String(this.parsex2);",
    }
];
var array = [
    {
        type: "Array of String",
        explaination: "Creating a string array",
        code: "names:string[] = ['kent','john','lloyd']",
    },
    {
        type: "Array of Numbers",
        explaination: "Creating a number array",
        code: "nums:number[] = [1,2,3];",
    }
];
var object = [
    {
        type: "Object",
        explaination: "Creating object",
        code: "named:object = { fname: 'kent', mname: 'dela cruz', lname: 'fueconcillo'};",
    }
];
var objectarray = [
    {
        type: "Object Arrays",
        explaination: "Creating object array",
        code: "objarray: object[] = [{ fname: 'kent' }, { fname: 'daniel' }, { fname: 'riel' }];",
    }
];
var loop = [
    {
        type: 'Basic looping using for not *ngFor',
        explaination: 'Diri dapita kay basic looping inside component. Dili pa to diri mao parihas atong ng-repeat sa angular 1 ug *ngFor sa angular 2 / 4',
        code: 'for (let n of this.names) { console.log(n + " < looping"); }',
        furtherexplaination1: 'Sa diri na part nag looping pa ta inside sa atong component.'
    }, {
        type: 'Array Looping *ngFor',
        explaination: 'Referring to array tutorial.',
        code: '<ul class=""> <li *ngFor="let name of names"> {{name}} </li> </ul>',
        furtherexplaination1: 'Sa diri na part nag array looping na ta with template involved. '
    }, {
        type: 'Object Array Looping *ngFor',
        explaination: 'Referring to Object Array tutorial.',
        code: '<ul class=""> <li *ngFor="let objarr of objarray"> {{objarr.fname}} </li> </ul>',
        furtherexplaination1: 'Sa diri na part nag object looping na ta with template involved '
    }, {
        type: 'Object Array Looping *ngFor and getting its index',
        explaination: 'Referring to Object Array tutorial ug need kuhaon ang iyang index.',
        code: '<ul class=""> <li *ngFor="let objarr of objarray;let in = index;"> {{in}} {{objarr.fname}} </li> </ul>',
        furtherexplaination1: 'Sa diri na part nag Object Array looping na ta with template involved '
    }
];
var func = [
    {
        type: 'Basic function',
        explaination: 'Basic function once mag click sa button.',
        code: '<button (click)="example()"> try me </button>',
        furtherexplaination1: 'Sa diri dapit nag buhat lang kog sample function with combination of click event',
        code2: 'withoutparameter() { alert("too handsome for humanity"); }}',
        furtherexplaination2: 'after ana mo trigger si alert then mo display too handsome for humanity. '
    }, {
        type: 'Advance function',
        explaination: 'Mao na ni na function na naa nay parameter.',
        code: '<button (click)="example(10,"kent")">try me</button>',
        furtherexplaination1: 'Sa diri dapit nag buhat lang kog sample function with combination of click event',
        code2: 'withparameter(numb:number, stri:string) { alert(numb + " " + stri); }',
        furtherexplaination2: 'sa diri na dapita is naa nay parameter which is number and string.'
    }
];
var arithmetic = [
    {
        type: 'Arithmetic inside binding',
        explaination: 'Basic arithmetic inside sa binding so far para sa akoa mao ni ang best way to do arithmetic operations',
        code: '{{1 + 1}} , {{1 - 1}} , {{1 * 1}} , {{1 / 1}}'
    }, {
        type: 'Basic Math Random',
        explaination: 'Kanang gusto ka mag generate ug random numbers',
        code: 'this.rand:number=Math.random();'
    }, {
        type: 'Advance Math Random',
        explaination: 'Kanang gusto ka mag generate ug random numbers pero naay limit ex. 1-100 . regarding kung aha makita tanan function here`s the link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random',
        code: 'this.advancerand = Math.random() * (1 * 100);'
    }
];
var databinding = [
    {
        type: "Two-way Data Binding",
        explaination: "Data binding gamit ang ngModel sa angular 4. WARNING: i import sa ang library import { FormsModule, ReactiveFormsModule } from '@angular/forms'; then i butang ang FormsModule ug ReactiveFormsModule inside imports",
        intantiation: "ngmodel: string = '';",
        code: '<input type="text" class="" [(ngModel)]="ngmodel"> {{ngmodel}}'
    }, {
        type: "Property Binding",
        explaination: "Daghay way para ma bind ang src sa image like [src], src='{{}}' ug bind-src='' pero mas prefer nako ang src='{{}}' old but gold.",
        intantiation: "img: string = 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-9/19961222_1740052446022448_1520076539138365916_n.jpg?oh=6e8162f9e3bff101da85d93ff1ab8f91&oe=5A1AFCB0';",
        code: '<img src="{{img}}" height="50" >'
    }
];
var exported = [
    {
        type: "Interface",
        explaination: "string",
        code: "export interface exports { type: string; explaination: string; code: string; }"
    }, {
        type: "Class",
        explaination: "string",
        code: "export class exports { type: string; explaination: string; code: string; }"
    }
];
var event = [
    {
        type: 'On Click',
        explaination: 'On click event',
        html: '<button (click)="click()"> On click event </button>',
        furtherexplaination1: 'Sa dri dapita sa atong html nag buhat sa kog button para mo trigger sa akong on click na event',
        code: "click(){ alert('Hello! Angular 4'); }",
        furtherexplaination2: 'Then sa akong function nag buhat sad kog sample alert para naa lay mo prompt once akong i press ang On click event',
    }, {
        type: 'Double click',
        explaination: 'double click event',
        html: '<button (dblclick)="dbclick()"> Double click event </button>',
        furtherexplaination1: 'Sa dri dapita sa atong html nag buhat sa kog button para mo trigger sa akong double click na event',
        code: "dbclick(){ alert('Hello! Angular 4'); }",
        furtherexplaination2: 'Then sa akong function nag buhat sad kog sample alert para naa lay mo prompt once akong i press ang Double click event',
    }
];
//# sourceMappingURL=basics.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map