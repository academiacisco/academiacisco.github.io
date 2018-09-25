(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p class=\"\">\r\n    Oferta académica\r\n  </p>\r\n  <ul class=\"nav flex-column\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/courses', 'CCNA1']\">CCNA 1 Routing & Switching</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/courses', 'CCNA2']\">CCNA 2 </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/courses', 'ITESSENTIALS']\">IT Essentials</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/courses', 'GETCONNECTED']\">Get Connected</a>\r\n    </li>\r\n  </ul>\r\n -->\r\n\r\n  <div class=\"text-center\">\r\n    <h1>Academia Cisco - Funadeh Genesis La Ceiba</h1>\r\n  </div>\r\n\r\n\r\n<div class=\"text-center\">\r\n  <img src=\"../../../assets/img/ciscoacademy.png\" alt=\"Academia Cisco\">\r\n</div>\r\n\r\n<h3>Programa Cisco Networking Academy</h3>\r\n<p class=\"text-justify\">\r\n  Cada año, cientos de miles de alumnos de Networking Academy de todo el mundo adquieren las habilidades necesarias\r\n  para crear, diseñar y mantener las redes informáticas, lo que mejora sus perspectivas profesionales a la vez que\r\n  se satisface la demanda a nivel mundial de profesionales de redes. Con 10 000 academias en 165 países, Networking\r\n  Academy ayuda a las personas a prepararse para certificaciones reconocidas en el sector y carreras profesiones de\r\n  nivel básico relacionadas con las tecnologías de la información y la comunicación (TIC) en prácticamente cualquier\r\n  tipo de sector. Los alumnos desarrollan habilidades básicas en TIC, al tiempo que adquieren conocimientos profesionales\r\n  para la resolución de problemas, colaboración y pensamiento crítico, elementos fundamentales en el siglo XXI.\r\n</p>\r\n\r\n<h3>Modelo de aprendizaje</h3>\r\n<p class=\"text-justify\">\r\n  Los cursos de Networking Academy se ofrecen en varios idiomas a través de un modelo de aprendizaje mixto que combina la instrucción en el aula con los programas de estudios online, herramientas interactivas, actividades prácticas y evaluaciones online que proporcionan información inmediata.\r\n  Este modelo utiliza varias tecnologías innovadoras:\r\n</p>\r\n\r\n\r\n<ul class=\"text-justify\">\r\n  <li>Cisco Packet Tracer: una potente herramienta de visualización y simulación que permite a los usuarios diseñar, crear, resolver problemas y experimentar con redes virtuales. Los alumnos e instructores utilizan Packet Tracer para experimentar con los complejos conceptos técnicos y diseños de sistemas de redes en un entorno seguro y virtual.</li>\r\n  <li>Cisco Passport21 to Entrepreneurship: una serie de casos prácticos, simulaciones y herramientas interactivas diseñados para ayudar a los alumnos a desarrollar importantes habilidades empresariales y financieras.</li>\r\n  <li>Cisco Aspire: un juego educativo en un atractivo entorno virtual que permite a los alumnos resolver retos empresariales y técnicos a medida que llevan a cabo proyectos para los clientes.</li>\r\n  <li>Evaluaciones online: a medida que se avanza en el programa de estudios, los exámenes proporcionan información inmediata, interactiva y personal a los alumnos.</li>\r\n  <li>Herramientas de redes sociales: los recursos como Facebook, Twitter, LinkedIn y el sitio NetAcad Instructor Community mantienen en contacto a los alumnos e instructores de todo el mundo para fomentar la colaboración y el aprendizaje fuera del aula.​</li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Academia Cisco';
        this.subtitle = 'Funadeh-Genesis';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map