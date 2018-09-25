(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"]
            ],
            declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/about/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/about/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/about/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1 class=\"text-center\"> FUNADEH </h1>\r\n\r\n<div class=\"text-center\">\r\n    <img src=\"../../../assets/img/logo.png\" alt=\"Academia Cisco\">\r\n  </div>\r\n\r\n\r\n<h3> ¿Quiénes somos? </h3>\r\n<p class=\"text-justify\">\r\n  Somos una fundación que contribuye al desarrollo económico y social de Honduras, mediante el fortalecimiento de las capacidades del\r\n  talento humano y la gestión de programas y proyectos sociales, comprometidos con la mejora continua y la satisfacción de nuestros\r\n  clientes. Los ingresos recibidos por las Capacitaciones de parte de Empresas o Personas Naturales a traves de FUNADEH, son destinados\r\n  para el Desarrollo Social, con especial enfoque a crear nuevas oportunidades para jóvenes de zonas con oportunidades de desarrollo,\r\n  capacitándolos para que puedan acceder a puestos de trabajo o incluso generar un emprendimiento de nueva empresa.\r\n</p>\r\n\r\n\r\n<h3> Historia </h3>\r\n<p class=\"text-justify\">\r\n  FUNADEH, fue fundada el 05 de febrero de 1983 por iniciativa de un grupo de destacados ciudadanos poseedores de una gran sensibilidad social y espíritu emprendedor, liderado por el Ing. Antonio Bográn Paredes (Q.E.P.D.) Iniciando operaciones un año después, en 1984, con la clara misión de contribuir al desarrollo social y económico del país.\r\n</p>\r\n<p class=\"text-justify\">\r\n  FUNADEH se formó bajo el patrocinio de la Fundación Panamericana de Desarrollo (FUPAD) la cual brindó asesoría, y también un fondo inicial de trabajo. También fue determinante el apoyo económico de la Agencia para el Desarrollo Internacional (AID), y con el soporte adicional de otras instituciones como el Banco Interamericano de Desarrollo (BID) y la Interamerican Foundation, así se consolidó la fase inicial de la Fundación. Desde entonces FUNADEH ha concentrado sus esfuerzos y recursos en proporcionar servicios y productos que llenen las expectativas de los clientes; por esa razón en el año 2002 se certificó bajo la norma ISO 9001:2000. Desde entonces FUNADEH se mantiene en mejora continua, trabajando bajo normas internacionales que garantizan servicios de calidad que nos comprometen a cumplir los procesos que aseguren la satisfacción de nuestros clientes, tanto internos como externos.\r\n</p>\r\n\r\n\r\n<h3>Misión, visión y valores</h3>\r\n<div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\r\n        <a class=\"list-group-item list-group-item-action active\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-home\" role=\"tab\" aria-controls=\"home\">Misión</a>\r\n        <a class=\"list-group-item list-group-item-action\" id=\"list-profile-list\" data-toggle=\"list\" href=\"#list-profile\" role=\"tab\" aria-controls=\"profile\">Visión</a>\r\n        <a class=\"list-group-item list-group-item-action\" id=\"list-messages-list\" data-toggle=\"list\" href=\"#list-messages\" role=\"tab\" aria-controls=\"messages\">Valores</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <div class=\"tab-content\" id=\"nav-tabContent\">\r\n        <div class=\"tab-pane fade show active\" id=\"list-home\" role=\"tabpanel\" aria-labelledby=\"list-home-list\">\r\n          <p class=\"text-justify\">\r\n            Somos una fundación que contribuye al desarrollo económico y social de Honduras, mediante el fortalecimiento de las capacidades\r\n            del talento humano y la gestión de programas y proyectos sociales, comprometidos con la mejora continua y la satisfacción de\r\n            nuestros clientes.\r\n          </p>\r\n        </div>\r\n        <div class=\"tab-pane fade\" id=\"list-profile\" role=\"tabpanel\" aria-labelledby=\"list-profile-list\">\r\n          <p class=\"text-justify\">\r\n            Seremos en 2017 la organización líder en desarrollo humano y empresarial, y la institucion modelo en la realización de\r\n            proyectos sociales en Honduras.\r\n          </p>\r\n        </div>\r\n        <div class=\"tab-pane fade\" id=\"list-messages\" role=\"tabpanel\" aria-labelledby=\"list-messages-list\">\r\n          <ul class=\"text-justify\">\r\n            <li>Integridad: Cada miembro de la Fundación actuará y velará por que todas sus acciones sean transparentes, legales, morales y éticas.</li>\r\n            <li>Sensibilidad: Sensible a los problemas de la sociedad, demostrando unidad y compañerismo para lograr metas o intereses en común.</li>\r\n            <li>Compromiso: Responder a cada necesidad de los clientes internos y externos de la Fundación.</li>\r\n            <li>Excelencia: Interacción y complemento de sus compañeros, realizando las actividades necesarias para transformar los recursos en un servicio con un valor agregado.</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<h1 class=\"text-center\">Proyecto Genesis</h1>\r\n<p class=\"text-justify\">\r\n  El Proyecto GENESIS, Generando Emprendedores y Sinergias Sostenibles, surge de una Alianza Global para el Desarrollo, entre la Agencia de\r\n  los Estados Unidos para el Desarrollo Internacional, (USAID), y la Fundación Nacional para el Desarrollo de Honduras, (FUNADEH).\r\n</p>\r\n\r\n\r\n<h2>Objetivos específicos</h2>\r\n<ol class=\"text-justify\">\r\n  <li>Consolidar la Red de Centros de Alcance a través de alianzas multisectoriales para aumentar los factores de protección y promoción\r\n    de una cultura de paz.\r\n  </li>\r\n  <li>Aumentar las oportunidades de generación de ingresos para los jóvenes en situación de riesgo social y ex miembros de pandillas a\r\n    través de la creación de capacidades y orientación vocacional.\r\n  </li>\r\n</ol>\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/about/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map