(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-courses-module"],{

/***/ "./src/app/courses/courses-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/courses/courses-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoursesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesRoutingModule", function() { return CoursesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses/courses.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_2__["CoursesComponent"]
    }
];
var CoursesRoutingModule = /** @class */ (function () {
    function CoursesRoutingModule() {
    }
    CoursesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoursesRoutingModule);
    return CoursesRoutingModule;
}());



/***/ }),

/***/ "./src/app/courses/courses.module.ts":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses-routing.module */ "./src/app/courses/courses-routing.module.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses/courses.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoursesModule = /** @class */ (function () {
    function CoursesModule() {
    }
    CoursesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _courses_routing_module__WEBPACK_IMPORTED_MODULE_2__["CoursesRoutingModule"]
            ],
            declarations: [_courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"]]
        })
    ], CoursesModule);
    return CoursesModule;
}());



/***/ }),

/***/ "./src/app/courses/courses/courses.component.css":
/*!*******************************************************!*\
  !*** ./src/app/courses/courses/courses.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/courses/courses/courses.component.html":
/*!********************************************************!*\
  !*** ./src/app/courses/courses/courses.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Oferta académica</h1>\r\n  <ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">CCNA 1</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">CCNA 2</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\" aria-controls=\"pills-contact\" aria-selected=\"false\">IT Essentials</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"tab-content\" id=\"pills-tabContent\">\r\n      <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\r\n        <h2>Descripción del curso</h2>\r\n        <p class=\"text-justify\">\r\n            Este curso se centra en el aprendizaje de los aspectos básicos de redes. En este curso, aprenderá las habilidades prácticas y conceptuales que constituyen la base para entender lo básico de las redes. En este curso:\r\n            <ul>\r\n              <li>Comparará la comunicación humana con la de red y observará las semejanzas entre ambas.</li>\r\n              <li>Recibirá una introducción a los dos modelos principales para planificar e implementar redes: OSI y TCP/IP.</li>\r\n              <li>Obtendrá cierto entendimiento del enfoque de capas de las redes.</li>\r\n              <li>Examinará las capas OSI y TCP/IP en detalle para comprender sus funciones y servicios.</li>\r\n              <li>Se familiarizará con los diversos dispositivos de red y los esquemas de direccionamiento de red.</li>\r\n              <li>Descubrirá los tipos de medios utilizados para transportar datos a través de la red.</li>\r\n            </ul>\r\n            Al finalizar este curso, podrá crear redes LAN simples, realizar configuraciones básicas de routers y switches, e implementar esquemas de direccionamiento IP.\r\n\r\n        <h2>Temario del curso</h2>\r\n        <p>\r\n          <ul>\r\n            <li>Capítulo 0 | Introducción a las redes</li>\r\n            <li>Capitulo 1 | Exploración de la red</li>\r\n            <li>Capitulo 2 | Configuración de un sistema operativo de red</li>\r\n            <li>Capitulo 3 | Protocolo y comunicaciones de red</li>\r\n            <li>Capitulo 4 | Acceso a la red</li>\r\n            <li>Capitulo 5 | Ethernet</li>\r\n            <li>Capitulo 6 | Capa de red</li>\r\n            <li>Capitulo 7 | Direccionamiento IP</li>\r\n            <li>Capitulo 8 | División de redes IP en Subredes</li>\r\n            <li>Capitulo 9 | Capa de transporte</li>\r\n            <li>Capitulo 10 | Capa de aplicación</li>\r\n            <li>Capitulo 11 | Configuración de un sistema operativo de red</li>\r\n          </ul>\r\n\r\n\r\n        <h2>Otros datos</h2>\r\n        <p>Requisitos: Ninguno</p>\r\n        <p>\r\n          Duración: 74 horas\r\n        </p>\r\n        <p>Para obtener el certificado debe obtener una nota final de mínimo 75%</p>\r\n      </div>\r\n\r\n      <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\r\n        <h2>Descripción del curso</h2>\r\n        <p class=\"text-justify\">\r\n            Este curso se centra en el aprendizaje de la arquitectura, los componentes y el funcionamiento de los routers y switches en una red pequeña. En este curso, aprenderá a configurar un router y un switch para obtener funcionalidad básica. En este curso:\r\n            <ul>\r\n                <li>Describirá las tecnologías de switching mejoradas, como las VLAN, el protocolo de enlace troncal de VLAN (VTP), el protocolo de árbol de expansión rápido (RSTP), el protocolo de árbol de expansión por VLAN (PVSTP) y 802.1q.</li>\r\n                <li>Configurará las operaciones básicas de una red conmutada pequeña y resolverá problemas relacionados.</li>\r\n                <li>Configurará y verificará el routing estático y el routing predeterminado.</li>\r\n                <li>Configurará las operaciones básicas de los routers en una red enrutada pequeña, y resolverá problemas relacionados.</li>\r\n                <li>Configurará VLAN y el routing entre VLAN, y resolverá problemas relacionados.</li>\r\n                <li>Configurará y controlará ACL para IPv4 e IPv6, y resolverá problemas relacionados.</li>\r\n                <li>Configurará y controlará ACL para IPv4 e IPv6, y resolverá problemas relacionados.</li>\r\n            </ul>\r\n            Al final de este curso, podrá configurar routers y switches, y resolver problemas relacionados, así como solucionar problemas frecuentes de RIPv1, de RIPv2, de OSPF de área única y OSPF multiárea, de LAN virtuales y de routing entre VLAN en redes IPv4 e IPv6.\r\n\r\n        <h2>Temario del curso</h2>\r\n        <p>\r\n          <ul>\r\n              <li>Capítulo 1 | Introducción a redes conmutadas</li>\r\n              <li>Capítulo 2 | Configuración y conceptos básicos de switching</li>\r\n              <li>Capítulo 3 | VLAN</li>\r\n              <li>Capítulo 4 | Conceptos de routing</li>\r\n              <li>Capítulo 5 | Enrutamiento entre VLAN</li>\r\n              <li>Capítulo 6 | Enrutamiento estático</li>\r\n              <li>Capítulo 7 | Routing dinámico</li>\r\n              <li>Capítulo 8 | OSPF de área única</li>\r\n              <li>Capítulo 9 | Listas de control de acceso</li>\r\n              <li>Capítulo 10 | DHCP</li>\r\n              <li>Capítulo 11 | Traducción de direcciones de red para IPv4</li>\r\n          </ul>\r\n\r\n        <h2>Otros datos</h2>\r\n        <p>Requisitos: CCNA 1</p>\r\n        <p>Duración: 74 horas</p>\r\n        <p>Para obtener el certificado debe obtener una nota final de mínimo 75%</p>\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\r\n        <h2>Descripción del curso</h2>\r\n        <p class=\"text-justify\">\r\n            El curso IT Essentials de Cisco cubre las destrezas informáticas fundamentales para empleos en TI de nivel básico. La currículo de IT Essentials incluye experiencia práctica en laboratorios. Las herramientas virtuales le ayudan a mejorar su destrezas de solución de  problemas y a practicar lo que aprende.\r\n            <ul>\r\n              <li>Desarrolle conocimientos de trabajo sobre el funcionamiento de las computadoras.\r\n              <li>Desarrolle un pensamiento crítico y aptitudes de solución de problemas complejos mediante las prácticas de laboratorio y las herramientas de aprendizaje virtual.\r\n              <li>Aplique su habilidad y los procedimientos para instalar y actualizar hardware y software y para solucionar problemas de los sistemas.\r\n              <li>Practique lo que aprende en equipos reales y con la herramienta de simulación Cisco Packet Tracer.\r\n              <li>Obtenga comentarios inmediatos sobre su trabajo en pruebas y cuestionarios integrados.\r\n              <li>Conéctese con la comunidad global de Cisco Networking Academy.</li>\r\n            </ul>\r\n\r\n        <h2>Temario del curso</h2>\r\n        <p>\r\n          <ul>\r\n              <li>Capítulo 1 | Introducción al sistema de computación personal.</li>\r\n              <li>Capítulo 2 | Procedimientos de laboratorio seguro y uso de las herramientas.</li>\r\n              <li>Capítulo 3 | Ensamblaje de una computadora.</li>\r\n              <li>Capítulo 4 | Descripción general de mantenimiento preventivo.</li>\r\n              <li>Capítulo 5 | Instalación de Windows.</li>\r\n              <li>Capítulo 6 | Configuración y administración de Windows.</li>\r\n              <li>Capítulo 7 | Concepto de redes.</li>\r\n              <li>Capítulo 8 | Redes aplicadas.</li>\r\n              <li>Capítulo 9 | Computadoras portátiles y dispositivos móviles.</li>\r\n              <li>Capítulo 10 | SO móviles, Linux, y OS X.</li>\r\n              <li>Capítulo 11 | Impresoras.</li>\r\n              <li>Capítulo 12 | Seguridad.</li>\r\n              <li>Capítulo 13 | Profesionales de TI.</li>\r\n              <li>Capítulo 14 | Solución avanzada de problemas.</li>\r\n          </ul>\r\n\r\n        <h2>Otros datos</h2>\r\n        <p>Requisitos: Ninguno</p>\r\n        <p>Duración: 74 horas</p>\r\n        <p>Para obtener el certificado deberá alcanzar una nota final de mínimo 75%</p>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/courses/courses/courses.component.ts":
/*!******************************************************!*\
  !*** ./src/app/courses/courses/courses.component.ts ***!
  \******************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(route) {
        this.route = route;
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.coursesId = this.route.snapshot.params['coursesId'];
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=courses-courses-module.js.map