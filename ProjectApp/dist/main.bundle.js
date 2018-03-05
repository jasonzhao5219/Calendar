webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var showevent_component_1 = __webpack_require__("./src/app/showevent/showevent.component.ts");
var dayone_component_1 = __webpack_require__("./src/app/dayone/dayone.component.ts");
var march_component_1 = __webpack_require__("./src/app/march/march.component.ts");
var management_component_1 = __webpack_require__("./src/app/management/management.component.ts");
var sanjose_component_1 = __webpack_require__("./src/app/sanjose/sanjose.component.ts");
var routes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'showevent', component: showevent_component_1.ShoweventComponent },
    { path: 'dayone/:id', component: dayone_component_1.DayoneComponent },
    { path: 'march', component: march_component_1.MarchComponent },
    { path: 'management', component: management_component_1.ManagementComponent },
    //  { path: 'daytwo/:id',component: DaytwoComponent },
    // { path: 'daythree/:id',component: DaythreeComponent },
    { path: 'sanjose', component: sanjose_component_1.SanjoseComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "form, table {\n     display:inline;\n     margin:0px;\n     padding:0px;\n}\n.gb_bc .gb_Cc {\n    height: 24px;\n    width: 74px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.firstC{\n\tcolor: blue;\n}\n.secondA{\n\tcolor: red;\n}\n.thirdL{\n\tcolor: yellow;\n}\n.fourE{\n\tcolor: blue;\n}\n.fiveD{\n\tcolor: gray;\n}\n.sixE{\n\tcolor: red;\n}\n.sevenR{\n\tcolor: green;\n}\n.theN{\n\tcolor: orange;\n}\n.calenderfont{\n\tfont-size: 400%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calenderfont\"><span class=\"firstC\">C</span><span class=\"secondA\">a</span><span class=\"thirdL\">L</span><span class=\"fourE\">e</span><span class=\"theN\">n</span><span class=\"fiveD\">d</span><span class=\"sixE\">a</span><span class=\"sevenR\">r</span></div>\n  <span style=\"display:inline-block; width: 200px;\"></span> <span>of Jason</span>\n  \n  <H3><a [routerLink]=\"['/march']\"> March</a> 2018</H3>\n\n   <form class=\"Management\" (submit)=\"managementsubmit()\"><input type=\"submit\" name=\"bbg\" value=\"Management\"></form>\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.managementsubmit = function () {
        this._router.navigate(['/management']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var showevent_component_1 = __webpack_require__("./src/app/showevent/showevent.component.ts");
var dayone_component_1 = __webpack_require__("./src/app/dayone/dayone.component.ts");
var march_component_1 = __webpack_require__("./src/app/march/march.component.ts");
var management_component_1 = __webpack_require__("./src/app/management/management.component.ts");
var daytwo_component_1 = __webpack_require__("./src/app/daytwo/daytwo.component.ts");
var daythree_component_1 = __webpack_require__("./src/app/daythree/daythree.component.ts");
var sanjose_component_1 = __webpack_require__("./src/app/sanjose/sanjose.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                showevent_component_1.ShoweventComponent,
                dayone_component_1.DayoneComponent,
                march_component_1.MarchComponent,
                management_component_1.ManagementComponent,
                daytwo_component_1.DaytwoComponent,
                daythree_component_1.DaythreeComponent,
                sanjose_component_1.SanjoseComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/dayone/dayone.component.css":
/***/ (function(module, exports) {

module.exports = ".modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n\n.modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.addeventtitle{\n    width: 200px;\n}\n\n.eventform{\n    display: block;\n    \n}\n\n.reminderform{\n    display: none;\n   \n}\n\n.smallone{\n    background: blue;\n    color: yellow;\n}\n\n.smalltwo{\n     background: white;\n     color: yellow;\n\n}\n\n.gotosanjose{\n    width: 200px;\n    background-color: green;\n    color: white;\n    \n}"

/***/ }),

/***/ "./src/app/dayone/dayone.component.html":
/***/ (function(module, exports) {

module.exports = "\n \n  \n<br>\n<div (click)=\"dayonebuttonclick()\">-----------------------------------------------------\n\n\t<h5>March {{myDays+1}}</h5>\n\t  <div *ngFor=\"let ques of tempArrayTwo\"><div class=\"eventcss\">Event: {{ques.events}}</div><form  *ngIf=\"ques.events=='go to seattle' \" (submit)=\"gosomewhere()\"><input class=\"gotosanjose\" type=\"submit\" name=\"uui\" value=\"Go\"></form></div> \n</div>\n<form (submit)=\"PreSetting()\"><input type=\"submit\" name=\"wwyy\" value=\"PreSetting\"></form>\n<form (submit)=\"getallEvents(tempId)\"><input type=\"submit\" name=\"www\" value=\"Show Event\"></form>\n<form (submit)=\"clearEvents()\"><input type=\"submit\" name=\"wwq\" value=\"Clear Event\"></form>\n\t<!-- The Modal -->\n\t<div id=\"myModal\" class=\"modal\" [ngStyle]=\"{'display':ishidden}\" >\n\n\t  <!-- Modal content -->\n\t  <div class=\"modal-content\">\n\t    <span class=\"close\" (click)=\"closebuttonclick()\">&times;</span>\n\t    <p>Add events or reminder to your Calendar here:</p>\n\t    \n\t    <form  (submit)=\"switchtore()\"><input class=\"smallone\" [ngStyle]=\"{'background':eventcolor}\" type=\"submit\" name=\"aac\" value=\"Event\"></form><form class=\"smalltwo\"  (submit)=\"switchtoev()\"><input [ngStyle]=\"{'background':remindercolor}\" type=\"submit\" name=\"aae\" value=\"Reminder\"></form>\n\t    \n\t    <form class=\"eventform\" [ngStyle]=\"{'display':ishiddenEvent}\" (submit)=\"eventsubmit()\"><input class=\"addeventtitle\" type=\"text\" name=\"title\" value=\"add title\" [(ngModel)]=\"tempEvent.event\"  ><br><input type=\"submit\" name=\"aab\" value=\"Save Event\"></form>\n\n\t    <form class=\"reminderform\" [ngStyle]=\"{'display':ishiddenReminder}\" ><input class=\"addreminderttitle\" type=\"text\" name=\"title\" value=\"add Reminder\"><br><input type=\"submit\" name=\"aab\" value=\"Save Reminder\"></form>\n\n\t  </div>\n\n\t</div>\n\n\t-----------------------------------------------------\n"

/***/ }),

/***/ "./src/app/dayone/dayone.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DayoneComponent = /** @class */ (function () {
    function DayoneComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.whatDay = this.myDays;
        this.tempEvent = { _id: "", event: "", whatday: this.whatDay };
        this.errors = {};
        this.ishidden = "none";
        this.ishiddenEvent = "block";
        this.ishiddenReminder = "none";
        this.eventcolor = "blue";
        this.remindercolor = "white";
        this.modal = document.getElementById('myModal');
        this.btn = document.getElementById("myBtn");
        this.StoreEvent = {};
        this.tempArray = [];
        this.tempArrayTwo = [];
        this.passday = { day: this.whatDay };
        this.tempId = "5a976e13419a7eb3f5e16795";
        this.span = document.getElementsByClassName("close")[0];
        this.tempQuestion = { day: 31 };
        this.passToAfter = [];
        this.tempIdAfter = "";
        this.tempArrayForDays = [];
        this.tempdata = {};
        this.cityid = 1689498;
        this.storedafterSearch = [];
        this.authorInSearchBar = "";
    }
    DayoneComponent.prototype.ngOnInit = function () {
        this.getAllDays();
        //this.passID();
        //this.questionsubmit();
        this.generateWhatDay();
        //this.getSpecificQuestion(this.tempId);
        //this.getallEvents(this.tempId);
    };
    DayoneComponent.prototype.generateWhatDay = function () {
        console.log("generateWhatday run");
        this.whatDay = this.myDays;
        this.tempEvent.whatday = this.myDays;
        //conenect to API
        this.getTasksFromService();
        //console.log("what is whatDay in generateWhatDay? ",this.whatDay);
    };
    DayoneComponent.prototype.clearEvent = function () {
        this.tempArrayTwo = [];
        //this.getallEvents(this.tempId);
    };
    DayoneComponent.prototype.getAllDays = function () {
        var _this = this;
        console.log("may i be getalldays in dayOne?");
        var observable = this._httpService.getdayInService();
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            _this.tempArrayForDays = [];
            console.log("the responsedata in getallDay In DayOne is : ", responseData);
            _this.tempArrayForDays.push(responseData);
            console.log(_this.tempArrayForDays);
            console.log("whatDay before define the id? ", _this.whatDay);
            _this.tempId = _this.tempArrayForDays[0][_this.whatDay]._id;
            //this.tempIdAfter = this.tempArray[0][this.whatDay-1];
            console.log("In getAllDays of dayOne, 123 tempId is : ", _this.tempId);
            _this.tempEvent._id = _this.tempId;
            //this._router.navigate(['/']);
            // 	for(var i = 0; i<this.tempArray[0].length;i++){
            // 		var date = new Date(this.tempArray[0][i])
            // }
        });
    };
    //temporary need :
    DayoneComponent.prototype.questionsubmit = function () {
        console.log("may i be question submit?");
        var observable = this._httpService.addQuestion(this.tempQuestion);
        observable.subscribe(function (responseData) {
            console.log("the responsedata in questionsubmit is : ", responseData);
        });
    };
    DayoneComponent.prototype.dayonebuttonclick = function () {
        console.log("may i be dayonebuttonclick ?");
        this.ishidden = "block";
        //this.modal.style.display = "block";
        //console.log("test one",this.modal.style.display);
    };
    DayoneComponent.prototype.closebuttonclick = function () {
        this.ishidden = "none";
    };
    DayoneComponent.prototype.eventsubmit = function () {
        var _this = this;
        console.log("may i be event submit?");
        console.log("what is tempEvent", this.tempEvent);
        var observable = this._httpService.addEvent(this.tempEvent);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in eventsubmit is : ", responseData);
            _this.errors = responseData;
            _this.getallEvents(_this.tempId);
            //this.StoreEvent = responseData;
            //this._router.navigate(['/']);
        });
    };
    DayoneComponent.prototype.switchtore = function () {
        this.ishiddenEvent = "block";
        this.ishiddenReminder = "none";
        this.eventcolor = "blue";
        this.remindercolor = "white";
    };
    DayoneComponent.prototype.switchtoev = function () {
        this.ishiddenEvent = "none";
        this.ishiddenReminder = "block";
        this.eventcolor = "white";
        this.remindercolor = "blue";
    };
    DayoneComponent.prototype.PreSetting = function () {
        this.tempEvent._id = this.tempArrayForDays[0][this.whatDay]._id;
        this.whatDay = this.myDays;
        this.tempId = this.tempArrayForDays[0][this.whatDay]._id;
        console.log("Successfully PreSetting, the day is: ", this.whatDay, " the tempId is : ", this.tempId);
    };
    DayoneComponent.prototype.getallEvents = function (id) {
        var _this = this;
        console.log("what is whatDay After press Show Event: ", this.whatDay);
        console.log("what is tempId After press Show Event: ", this.tempId);
        console.log("may i be getallEvent in DayOne?", id);
        console.log("test two!!! ", this.tempId);
        var observable = this._httpService.getAlleventsInService(id);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            _this.tempArray = [];
            console.log("the responsedata in getall events is : ", responseData);
            _this.tempArray.push(responseData);
            console.log("the tempArray in getall events is : ", _this.tempArray);
            _this.tempArrayTwo = _this.tempArray[0].events;
            console.log("what is temparrayTwo: ", _this.tempArrayTwo);
            //nested request
            //console.log("may i be getallEventAfter?");
            //	console.log("what is tempIdafter ? ",this.tempIdAfter);
            // //sort by desc
            // this.tempArrayTwo = this.tempArrayTwo.sort((a,b) => {
            // 	return b.likes-a.likes;
            // });
            //console.log(this.tempArray);
            //this._router.navigate(['/']);
        });
    };
    DayoneComponent.prototype.getSpecificQuestion = function (id) {
        var _this = this;
        console.log("may i be getSpecificquestion?");
        console.log("what is id now?", id);
        var observable = this._httpService.getSpecificquestionInService(id);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in getSpecificQuestion is : ", responseData);
            _this.whatDay = responseData.day;
            //console.log("what is tempObj is : ",this.tempObj);
            //this.tempArray.push(responseData);
            //console.log(this.tempArray);
            //this._router.navigate(['/']);
        });
    };
    DayoneComponent.prototype.getTasksFromService = function () {
        var _this = this;
        var observable = this._httpService.requestDojo(this.cityid);
        observable.subscribe(function (data) {
            console.log("what is data send back  : ", data);
            _this.tempdata = data;
        });
    };
    // eventsdelete(id){
    // 	console.log("may i be eventdelete? ");
    // 	let observable = this._httpService.DeleteEventsInService(id);
    //   	observable.subscribe(responseData=>{
    //   		//this.tempAuthors.push(responseData);
    //   		console.log("the responsedata in questiondelete is : ",responseData);
    //   		this.getAllQuestion();
    //   	});
    // }
    DayoneComponent.prototype.gosomewhere = function () {
        this._router.navigate(['/sanjose']);
    };
    DayoneComponent.prototype.searchsubmit = function () {
        console.log("may i be searchsubmit?");
        //this.tempAuthors = [];
        var tempObj = [];
        console.log("before search, what is temArray", this.tempArray);
        for (var i = 0; i < this.tempArray[0].length; i++) {
            //console.log("includes works");
            if (this.tempArray[0][i].includes(this.authorInSearchBar)) {
                //console.log("includes works");
                tempObj.push(this.tempArray[0][i]);
            }
        }
        this.tempArray[0] = [];
        this.tempArray[0] = tempObj;
        //this.tempArrayTwo = this.tempArray;
        //this.storedafterSearch = tempObj;
        if (this.authorInSearchBar == "") {
            this.getallEvents(this.tempId);
        }
        //this.tempArray[0].filter(this.checkIfInclude);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DayoneComponent.prototype, "myDays", void 0);
    DayoneComponent = __decorate([
        core_1.Component({
            selector: 'app-dayone',
            template: __webpack_require__("./src/app/dayone/dayone.component.html"),
            styles: [__webpack_require__("./src/app/dayone/dayone.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DayoneComponent);
    return DayoneComponent;
}());
exports.DayoneComponent = DayoneComponent;


/***/ }),

/***/ "./src/app/daythree/daythree.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/daythree/daythree.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  daythree works!\n</p>\n"

/***/ }),

/***/ "./src/app/daythree/daythree.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DaythreeComponent = /** @class */ (function () {
    function DaythreeComponent() {
    }
    DaythreeComponent.prototype.ngOnInit = function () {
    };
    DaythreeComponent = __decorate([
        core_1.Component({
            selector: 'app-daythree',
            template: __webpack_require__("./src/app/daythree/daythree.component.html"),
            styles: [__webpack_require__("./src/app/daythree/daythree.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DaythreeComponent);
    return DaythreeComponent;
}());
exports.DaythreeComponent = DaythreeComponent;


/***/ }),

/***/ "./src/app/daytwo/daytwo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/daytwo/daytwo.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div (click)=\"dayonebuttonclick()\">\n\n\t<h4> Day {{whatDay}}   </h4>\n\t  <div *ngFor=\"let ques of tempArrayTwo\"><div>Event: {{ques.events}}</div></div> \n</div>\n\t<!-- The Modal -->\n\t<div id=\"myModal\" class=\"modal\" [ngStyle]=\"{'display':ishidden}\" >\n\n\t  <!-- Modal content -->\n\t  <div class=\"modal-content\">\n\t    <span class=\"close\" (click)=\"closebuttonclick()\">&times;</span>\n\t    <p>Some text in the Modal..</p>\n\t    \n\t    <form  (submit)=\"switchtore()\"><input class=\"smallone\" [ngStyle]=\"{'background':eventcolor}\" type=\"submit\" name=\"aac\" value=\"Event\"></form><form class=\"smalltwo\"  (submit)=\"switchtoev()\"><input [ngStyle]=\"{'background':remindercolor}\" type=\"submit\" name=\"aae\" value=\"Reminder\"></form>\n\t    \n\t    <form class=\"eventform\" [ngStyle]=\"{'display':ishiddenEvent}\" (submit)=\"eventsubmit()\"><input class=\"addeventtitle\" type=\"text\" name=\"title\" value=\"add title\" [(ngModel)]=\"tempEvent.event\"  ><br><input type=\"submit\" name=\"aab\" value=\"Save Event\"></form>\n\n\t    <form class=\"reminderform\" [ngStyle]=\"{'display':ishiddenReminder}\" ><input class=\"addreminderttitle\" type=\"text\" name=\"title\" value=\"add Reminder\"><br><input type=\"submit\" name=\"aab\" value=\"Save Reminder\"></form>\n\n\t  </div>\n\n\t</div>"

/***/ }),

/***/ "./src/app/daytwo/daytwo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DaytwoComponent = /** @class */ (function () {
    function DaytwoComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.whatDay = this.myDays + 1;
        this.tempEvent = { _id: "", event: "", whatday: this.whatDay };
        this.errors = {};
        this.ishidden = "none";
        this.ishiddenEvent = "block";
        this.ishiddenReminder = "none";
        this.eventcolor = "blue";
        this.remindercolor = "white";
        this.modal = document.getElementById('myModal');
        this.btn = document.getElementById("myBtn");
        this.StoreEvent = {};
        this.tempArray = [];
        this.tempArrayTwo = [];
        this.passday = { day: this.whatDay };
        this.tempId = "";
        this.span = document.getElementsByClassName("close")[0];
        this.tempQuestion = { day: 5 };
    }
    DaytwoComponent.prototype.ngOnInit = function () {
        this.getAllDays();
        this.generateWhatDay();
        //this.getSpecificQuestion();
        //this.getallEvents(this.tempId);
    };
    //temporary need :
    DaytwoComponent.prototype.questionsubmit = function () {
        console.log("may i be question submit?");
        var observable = this._httpService.addQuestion(this.tempQuestion);
        observable.subscribe(function (responseData) {
            console.log("the responsedata in questionsubmit is : ", responseData);
        });
    };
    DaytwoComponent.prototype.generateWhatDay = function () {
        this.whatDay = this.myDays + 1;
    };
    DaytwoComponent.prototype.getAllDays = function () {
        var _this = this;
        console.log("may i be getalldays in day Two?");
        var observable = this._httpService.getdayInService();
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            _this.tempArray = [];
            console.log("the responsedata in getallDay In DayTwo is : ", responseData);
            _this.tempArray.push(responseData);
            console.log(_this.tempArray);
            _this.tempId = _this.tempArray[0][_this.whatDay - 1];
            console.log("In day two, tempId is : ", _this.tempId);
            //this._router.navigate(['/']);
            // 	for(var i = 0; i<this.tempArray[0].length;i++){
            // 		var date = new Date(this.tempArray[0][i])
            // }
        });
    };
    // passID(){
    // 	this._route.params.subscribe((params: Params) => {
    // 		if (params['id'] == undefined){
    // 			this.tempId ="5a9733ca25e374b03bf3ed79";
    // 		}else{
    // 			this.tempId = params['id'];
    // 			this.tempEvent._id = params['id']
    // 		}
    // 		console.log("show one id is: ",this.tempId);
    // 	});
    // }
    DaytwoComponent.prototype.dayonebuttonclick = function () {
        console.log("may i be dayonebuttonclick ?");
        this.ishidden = "block";
        //this.modal.style.display = "block";
        //console.log("test one",this.modal.style.display);
    };
    DaytwoComponent.prototype.closebuttonclick = function () {
        this.ishidden = "none";
    };
    DaytwoComponent.prototype.eventsubmit = function () {
        var _this = this;
        console.log("may i be event submit?");
        console.log("what is tempEvent", this.tempEvent);
        var observable = this._httpService.addEvent(this.tempEvent);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in eventsubmit is : ", responseData);
            _this.errors = responseData;
            _this.getallEvents(_this.tempId);
            //this.StoreEvent = responseData;
            //this._router.navigate(['/']);
        });
    };
    DaytwoComponent.prototype.switchtore = function () {
        this.ishiddenEvent = "block";
        this.ishiddenReminder = "none";
        this.eventcolor = "blue";
        this.remindercolor = "white";
    };
    DaytwoComponent.prototype.switchtoev = function () {
        this.ishiddenEvent = "none";
        this.ishiddenReminder = "block";
        this.eventcolor = "white";
        this.remindercolor = "blue";
    };
    DaytwoComponent.prototype.getallEvents = function (id) {
        var _this = this;
        console.log("may i be getallEvent in day two?", this.tempId);
        var observable = this._httpService.getAlleventsInService(id);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            _this.tempArray = [];
            console.log("the responsedata in getall events of dayTwo is : ", responseData);
            _this.tempArray.push(responseData);
            console.log("the tempArray in getall events of dayTwo is : ", _this.tempArray);
            _this.tempArrayTwo = _this.tempArray[0].events;
            console.log("what is temparrayTwo Of dayTwo: ", _this.tempArrayTwo);
            // //sort by desc
            // this.tempArrayTwo = this.tempArrayTwo.sort((a,b) => {
            // 	return b.likes-a.likes;
            // });
            //console.log(this.tempArray);
            //this._router.navigate(['/']);
        });
    };
    DaytwoComponent.prototype.getSpecificQuestion = function () {
        var _this = this;
        console.log("may i be getSpecificquestion in day Two?");
        //console.log("what is id now?",this.passID);
        var observable = this._httpService.getSpecificquestionInService(this.tempId);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in getSpecificQuestion In day two is : ", responseData);
            _this.whatDay = responseData.day;
            //console.log("what is tempObj is : ",this.tempObj);
            //this.tempArray.push(responseData);
            //console.log(this.tempArray);
            //this._router.navigate(['/']);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DaytwoComponent.prototype, "myDays", void 0);
    DaytwoComponent = __decorate([
        core_1.Component({
            selector: 'app-daytwo',
            template: __webpack_require__("./src/app/daytwo/daytwo.component.html"),
            styles: [__webpack_require__("./src/app/daytwo/daytwo.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DaytwoComponent);
    return DaytwoComponent;
}());
exports.DaytwoComponent = DaytwoComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.addEvent = function (eventObj) {
        console.log("may i be addEvent in service?");
        return this._http.post('/api/addEvent/', eventObj);
    };
    HttpService.prototype.getdayInService = function () {
        return this._http.get('/api/getDays/');
    };
    HttpService.prototype.getAlleventsInService = function (id) {
        console.log("may i be getallEvent in service?", id);
        return this._http.get('/api/getallEvent/' + id);
    };
    // getAlleventsInServiceTwo(id){
    // 	console.log("may i be getallEvent in service of DayTwo?");
    // 	console.log("what the id in service of day Two? ",id);
    // 	return this._http.get('/api/getallEventTwo/'+id);
    // }
    HttpService.prototype.getSpecificquestionInService = function (id) {
        console.log("may i be get specific ques in service?", id);
        return this._http.get('/api/ShowSpecificQues/' + id);
    };
    //temporary need
    HttpService.prototype.addQuestion = function (quesObj) {
        console.log("may i be addQuestion in service?");
        return this._http.post('/api/addQues/', quesObj);
    };
    HttpService.prototype.DeleteInService = function (id) {
        console.log("may i be events delete in service?");
        return this._http.delete('api/delete/' + id);
    };
    HttpService.prototype.requestDojo = function (cityid) {
        return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=' + cityid + '&APPID=af955f0fd20fdc9d305f96aea6720f93');
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/management/management.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/management/management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  management works!\n</p>\n<div *ngFor=\"let ques of tempArray[0]\"><h5>Day: {{ques.day}}</h5><form (submit)=\"questiondelete(ques._id)\">Delete only if You are administrator!<input type=\"submit\" name=\"Answer\" value=\"Delete\"></form></div> "

/***/ }),

/***/ "./src/app/management/management.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ManagementComponent = /** @class */ (function () {
    function ManagementComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tempArray = [];
    }
    ManagementComponent.prototype.ngOnInit = function () {
        this.getAllDays();
    };
    ManagementComponent.prototype.getAllDays = function () {
        var _this = this;
        console.log("may i be getalldays?");
        var observable = this._httpService.getdayInService();
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            _this.tempArray = [];
            console.log("the responsedata in getallDay is : ", responseData);
            _this.tempArray.push(responseData);
            console.log(_this.tempArray);
            //this._router.navigate(['/']);
            // 	for(var i = 0; i<this.tempArray[0].length;i++){
            // 		var date = new Date(this.tempArray[0][i])
            // }
        });
    };
    ManagementComponent.prototype.questiondelete = function (id) {
        var _this = this;
        var observable = this._httpService.DeleteInService(id);
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            console.log("the responsedata in questiondelete is : ", responseData);
            _this.getAllDays();
        });
    };
    ManagementComponent = __decorate([
        core_1.Component({
            selector: 'app-management',
            template: __webpack_require__("./src/app/management/management.component.html"),
            styles: [__webpack_require__("./src/app/management/management.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ManagementComponent);
    return ManagementComponent;
}());
exports.ManagementComponent = ManagementComponent;


/***/ }),

/***/ "./src/app/march/march.component.css":
/***/ (function(module, exports) {

module.exports = "form, table {\n     display:inline;\n     margin:0px;\n     padding:0px;\n}\n"

/***/ }),

/***/ "./src/app/march/march.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"MainCalendar\">\n <p><span style=\"display:inline-block; width: 6px;\"></span> S <span style=\"display:inline-block; width: 10px;\"></span> M <span style=\"display:inline-block; width: 10px;\"></span> T <span style=\"display:inline-block; width: 10px;\"></span> W <span style=\"display:inline-block; width: 10px;\"></span> T <span style=\"display:inline-block; width: 10px;\"></span> F <span style=\"display:inline-block; width: 10px;\"></span> S</p>\n\n  <form id=\"blockform\"><span style=\"display:inline-block; width: 95px;\"></span><form (click)=\"showdayone()\"><input type=\"submit\" name=\"one\" value=\"1\"></form><span style=\"display:inline-block; width: 5px;\"></span><form (click)=\"showdaytwo()\"><input type=\"submit\" name=\"two\" value=\"2\"></form><span style=\"display:inline-block; width: 5px;\"></span> <form (click)=\"showdaythree()\"><input type=\"submit\" name=\"three\" value=\"3\"></form> <form (click)=\"showdayfour()\"><input type=\"submit\" name=\"two\" value=\"4\"></form> </form><br>\n\n  <form id=\"blockform\"><form (click)=\"showdayfive()\"><input type=\"submit\" name=\"two\" value=\"5\"></form><span style=\"display:inline-block; width: 5px;\"></span><form (click)=\"showdaysix()\"><input type=\"submit\" name=\"one\" value=\"6\"></form><span style=\"display:inline-block; width: 5px;\"></span><form (click)=\"showdayseven()\"><input type=\"submit\" name=\"two\" value=\"7\"></form><span style=\"display:inline-block; width: 5px;\"></span><form (click)=\"showdayeight()\"><input type=\"submit\" name=\"two\" value=\"8\"></form><span style=\"display:inline-block; width: 5px;\"></span><form (click)=\"showdaynine()\"><input type=\"submit\" name=\"two\" value=\"9\"></form><span style=\"display:inline-block; width: 5px;\"></span><form (click)=\"showdayten()\"><input type=\"submit\" name=\"two\" value=\"10\"></form><span style=\"display:inline-block; width: 5px;\"></span><form (click)=\"showdayeleven()\"><input type=\"submit\" name=\"two\" value=\"11\"></form><br>\n\n    <form id=\"blockform\"></form><form (click)=\"showdaytwelf()\"><input type=\"submit\" name=\"two\" value=\"12\"></form><form (click)=\"showdaythirteen()\"><input type=\"submit\" name=\"one\" value=\"13\"></form><form (click)=\"showdayfourteen()\"><input type=\"submit\" name=\"two\" value=\"14\"></form><form (click)=\"showdayfifteen()\"> <input type=\"submit\" name=\"two\" value=\"15\"></form><form (click)=\"showdaysixteen()\"><input type=\"submit\" name=\"two\" value=\"16\"></form><form (click)=\"showdayseventeen()\"><input type=\"submit\" name=\"two\" value=\"17\"></form><form (click)=\"showdayeightteen()\"><input type=\"submit\" name=\"two\" value=\"18\"></form></form><br>\n\n    <form id=\"blockform\"></form><form (click)=\"showdaynineteen()\"><input type=\"submit\" name=\"two\" value=\"19\"></form><form (click)=\"showdaytwenty()\"><input type=\"submit\" name=\"one\" value=\"20\"></form><form (click)=\"showdaytwentyone()\"><input type=\"submit\" name=\"two\" value=\"21\"></form><form (click)=\"showdaytwentytwo()\"><input type=\"submit\" name=\"two\" value=\"22\"></form><form (click)=\"showdaytwentythree()\"><input type=\"submit\" name=\"two\" value=\"23\"></form><form (click)=\"showdaytwentyfour()\"><input type=\"submit\" name=\"two\" value=\"24\"></form><form (click)=\"showdaytwentyfive()\"><input type=\"submit\" name=\"two\" value=\"25\"></form><br>\n\n    <form id=\"blockform\"></form><form (click)=\"showdaytwentysix()\"><input type=\"submit\" name=\"two\" value=\"26\"></form><form (click)=\"showdaytwentyseven()\"><input type=\"submit\" name=\"one\" value=\"27\"></form><form (click)=\"showdaytwentyeight()\"><input type=\"submit\" name=\"two\" value=\"28\"></form><form (click)=\"showdaytwentynine()\"><input type=\"submit\" name=\"two\" value=\"29\"></form><form (click)=\"showdaythirty()\"><input type=\"submit\" name=\"two\" value=\"30\"></form><form (click)=\"showdaythirtyone()\"><input type=\"submit\" name=\"two\" value=\"31\"></form><br>\n\n</div>\n\n<!-- <app-dayone > </app-dayone> -->\n<app-dayone  [myDays]=\"whatDay-3\" > </app-dayone>\n<app-dayone  [myDays]=\"whatDay-2\" > </app-dayone>\n<app-dayone [myDays]=\"whatDay-1\" > </app-dayone>\n<app-dayone [myDays]=\"whatDay\" > </app-dayone>\n<app-dayone [myDays]=\"whatDay+1\" > </app-dayone>\n"

/***/ }),

/***/ "./src/app/march/march.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var MarchComponent = /** @class */ (function () {
    function MarchComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.tempArray = [];
        this.whatDay = 3;
        this.tempIdAfter = "";
        this.whatDayAfter = 1;
        this.note = { passDay: 1, passId: "" };
    }
    MarchComponent.prototype.ngOnInit = function () {
        this.getAllDays();
    };
    MarchComponent.prototype.showdayone = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][0]._id]);
        this.whatDay = this.tempArray[0][0].day;
        //this.getAllDays();
    };
    MarchComponent.prototype.showdaytwo = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][1]._id]);
        this.whatDay = this.tempArray[0][1].day;
    };
    MarchComponent.prototype.showdaythree = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][2]._id]);
        this.whatDay = this.tempArray[0][2].day;
    };
    MarchComponent.prototype.showdayfour = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][3]._id]);
        this.whatDay = this.tempArray[0][3].day;
    };
    MarchComponent.prototype.showdayfive = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][4].day;
    };
    MarchComponent.prototype.showdaysix = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][5].day;
    };
    MarchComponent.prototype.showdayseven = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][6].day;
    };
    MarchComponent.prototype.showdayeight = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][7].day;
    };
    MarchComponent.prototype.showdaynine = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][8].day;
    };
    MarchComponent.prototype.showdayten = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][9].day;
    };
    MarchComponent.prototype.showdayeleven = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][10].day;
    };
    MarchComponent.prototype.showdaytwelf = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][11].day;
    };
    MarchComponent.prototype.showdaythirteen = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][12].day;
    };
    MarchComponent.prototype.showdayfourteen = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][13].day;
    };
    MarchComponent.prototype.showdayfifteen = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][14].day;
    };
    MarchComponent.prototype.showdaysixteen = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][15].day;
    };
    MarchComponent.prototype.showdayseventeen = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][16].day;
    };
    MarchComponent.prototype.showdayeightteen = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][17].day;
    };
    MarchComponent.prototype.showdaynineteen = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][18].day;
    };
    MarchComponent.prototype.showdaytwenty = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][19].day;
    };
    MarchComponent.prototype.showdaytwentyone = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][20].day;
    };
    MarchComponent.prototype.showdaytwentytwo = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][21].day;
    };
    MarchComponent.prototype.showdaytwentythree = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][22].day;
    };
    MarchComponent.prototype.showdaytwentyfour = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][23].day;
    };
    MarchComponent.prototype.showdaytwentyfive = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][24].day;
    };
    MarchComponent.prototype.showdaytwentysix = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][25].day;
    };
    MarchComponent.prototype.showdaytwentyseven = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][26].day;
    };
    MarchComponent.prototype.showdaytwentyeight = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][27].day;
    };
    MarchComponent.prototype.showdaytwentynine = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][28].day;
    };
    MarchComponent.prototype.showdaythirty = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][29].day;
    };
    MarchComponent.prototype.showdaythirtyone = function () {
        // this._router.navigate(['/dayone',this.tempArray[0][4]._id]);
        this.whatDay = this.tempArray[0][30].day;
    };
    // getAllDays(){
    // 	console.log("may i be getalldays?");
    // 	let observable = this._httpService.getdayInService();
    //   	observable.subscribe(responseData=>{
    //   		//this.tempAuthors.push(responseData);
    //   		this.tempArray = [];
    //   		console.log("the responsedata in getallDay is : ",responseData);
    //   		this.tempArray.push(responseData);
    //   		console.log(this.tempArray);
    //   		//this._router.navigate(['/']);
    //   	// 	for(var i = 0; i<this.tempArray[0].length;i++){
    //   	// 		var date = new Date(this.tempArray[0][i])
    //   	// }
    //   	});
    // }
    MarchComponent.prototype.getAllDays = function () {
        var _this = this;
        console.log("may i be getalldays in March?");
        var observable = this._httpService.getdayInService();
        observable.subscribe(function (responseData) {
            //this.tempAuthors.push(responseData);
            _this.tempArray = [];
            console.log("the responsedata in getallDay In March is : ", responseData);
            _this.tempArray.push(responseData);
            console.log(_this.tempArray);
            _this.tempIdAfter = _this.tempArray[0][_this.whatDay - 1];
            console.log("In March, tempId is : ", _this.tempIdAfter);
            //this._router.navigate(['/']);
            //   for(var i = 0; i<this.tempArray[0].length;i++){
            //     var date = new Date(this.tempArray[0][i])
            // }
        });
    };
    MarchComponent = __decorate([
        core_1.Component({
            selector: 'app-march',
            template: __webpack_require__("./src/app/march/march.component.html"),
            styles: [__webpack_require__("./src/app/march/march.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], MarchComponent);
    return MarchComponent;
}());
exports.MarchComponent = MarchComponent;


/***/ }),

/***/ "./src/app/sanjose/sanjose.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sanjose/sanjose.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Seattle WA</h1>\n<p>Humudity: {{ tempdataTwo.list[0].main.humidity }}</p>\n<p>  Lowest temerature: {{tempdataTwo.list[0].main.temp_min}}</p>\n<p>  Highest temerature: {{tempdataTwo.list[0].main.temp_max}}</p>\n<p>  Status: {{tempdataTwo.list[0].weather[0].main}}</p>\n<img src=\"https://static.pexels.com/photos/419235/pexels-photo-419235.jpeg\" width=\"200\" height=\"200\">"

/***/ }),

/***/ "./src/app/sanjose/sanjose.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var SanjoseComponent = /** @class */ (function () {
    function SanjoseComponent(_httpService) {
        this._httpService = _httpService;
        this.tempdataTwo = {};
        this.cityid = 1689498;
    }
    SanjoseComponent.prototype.ngOnInit = function () {
        this.getTasksFromService();
    };
    SanjoseComponent.prototype.getTasksFromService = function () {
        var _this = this;
        var observable = this._httpService.requestDojo(this.cityid);
        observable.subscribe(function (data) {
            console.log("what is data send back : ", data);
            _this.tempdataTwo = data;
        });
    };
    SanjoseComponent = __decorate([
        core_1.Component({
            selector: 'app-sanjose',
            template: __webpack_require__("./src/app/sanjose/sanjose.component.html"),
            styles: [__webpack_require__("./src/app/sanjose/sanjose.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], SanjoseComponent);
    return SanjoseComponent;
}());
exports.SanjoseComponent = SanjoseComponent;


/***/ }),

/***/ "./src/app/showevent/showevent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/showevent/showevent.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  showevent works!\n</p>\n"

/***/ }),

/***/ "./src/app/showevent/showevent.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ShoweventComponent = /** @class */ (function () {
    function ShoweventComponent() {
    }
    ShoweventComponent.prototype.ngOnInit = function () {
    };
    ShoweventComponent = __decorate([
        core_1.Component({
            selector: 'app-showevent',
            template: __webpack_require__("./src/app/showevent/showevent.component.html"),
            styles: [__webpack_require__("./src/app/showevent/showevent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoweventComponent);
    return ShoweventComponent;
}());
exports.ShoweventComponent = ShoweventComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map