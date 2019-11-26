(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-login-login-module"],{

/***/ "./src/app/componentes/login/login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/componentes/login/login.module.ts ***!
  \***************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/componentes/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/componentes/login/login.page.html":
/*!***************************************************!*\
  !*** ./src/app/componentes/login/login.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <!-- PONEMOS COLOR AL TOOLBAR PARA QUE SE SINCRIONICE CON EL BOTON -->\n  <ion-toolbar>  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- AGREGAMOS UNA IMAGEN AL TOP -->\n  <img class=\"login-icon\" src=\"../../../assets/icon/favicon.png\" alt=\"\">\n  <!-- ION ITEM POR CADA INPUT -->\n\n  <ion-item>\n    <!-- PONEMOS FLOATING PARA QUE EL TEXTO SE ELEVE AL DAR CLICK EN EL INPUT -->\n    <ion-label position=\"floating\">Correo electronico</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <!-- PONEMOS FLOATING PARA QUE EL TEXTO SE ELEVE AL DAR CLICK EN EL INPUT -->\n    <ion-label position=\"floating\">Contraseña</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\n  </ion-item>\n\n  <p>\n    <!-- AGREGAMOS UN BUTTON EN FORMA DE BLOQUE -->\n    <ion-button class=\"new-background-login\" (click)=\"OnClickedIniciarSesion()\" expand=\"block\">\n      Ingresar\n    </ion-button>\n  </p>\n\n  <p>\n    <!-- LIGAMOS EL BOTON A UNA PAGINA -->\n    <ion-button class=\"new-background-register\" [routerLink]=\"['/registro']\" routerLinkActive=\"router-link-active\" expand=\"block\">\n      Registrate\n    </ion-button>\n  </p>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/componentes/login/login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/componentes/login/login.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  width: 30%; }\n\nspan {\n  font-family: 'Dosis-Regular'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thdmltL1bDrWRlb3MvQ2hhdC1Jb25pYy1GaXJlYmFzZS9zcmMvYXBwL2NvbXBvbmVudGVzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQU1kO0VBQ0ksNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4taWNvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbnNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdEb3Npcy1SZWd1bGFyJztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/componentes/login/login.page.ts":
/*!*************************************************!*\
  !*** ./src/app/componentes/login/login.page.ts ***!
  \*************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");



// NAVEGAR ENTRE PAGINAS


// CAMBIAR COLOR AL STATUS BAR

var LoginPage = /** @class */ (function () {
    function LoginPage(AService, router, actionSheetController, alertController, statusBar) {
        this.AService = AService;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.statusBar = statusBar;
    }
    LoginPage.prototype.showAlertError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¡Error!',
                            message: 'El usuario no existe o los datos son incorrectos.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ngOnInit = function () {
        // SET STATUS BAR
        this.statusBar.styleBlackTranslucent();
        this.statusBar.backgroundColorByHexString('#C8C8C8');
    };
    // FUNCION QUE HACE REFERENCIA A AUTH.SERVICES.TS
    LoginPage.prototype.OnClickedIniciarSesion = function () {
        var _this = this;
        // RESPUESTA POSITIVA REDIRIGIR A LA PAGINA HOME
        this.AService.iniciarSesion(this.email, this.password).then(function (res) {
            _this.router.navigate(['/home']);
        }).catch(function (err) {
            _this.showAlertError();
        });
    };
    LoginPage.prototype.exitApp = function () {
        this.exitApp();
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/componentes/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/componentes/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=componentes-login-login-module.js.map