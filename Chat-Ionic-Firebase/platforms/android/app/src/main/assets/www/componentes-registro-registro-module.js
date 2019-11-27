(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-registro-registro-module"],{

/***/ "./src/app/componentes/registro/registro.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.module.ts ***!
  \*********************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/componentes/registro/registro.page.ts");







var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]
    }
];
var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/componentes/registro/registro.page.html":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img class=\"login-icon\" src=\"../../../assets/icon/favicon.png\" alt=\"\">\n\n  <ion-item>\n    <ion-label position=\"floating\">Nombre</ion-label>\n    <ion-input [(ngModel)]=\"name\" type=\"text\" name=\"Nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Correo electronico</ion-label>\n    <ion-input [(ngModel)]=\"email\" type=\"text\" name=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Contraseña</ion-label>\n    <ion-input [(ngModel)]=\"password1\" type=\"password\" name=\"password\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Confirmar contraseña</ion-label>\n    <ion-input [(ngModel)]=\"password2\" type=\"password\" name=\"password\"></ion-input>\n  </ion-item>\n\n  <p>\n    <ion-button (click)=\"onClickedVerificarPass()\" expand=\"block\" class=\"new-background-register\">\n      Registrarse</ion-button>\n  </p>\n\n  <p>\n    <ion-button [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" expand=\"block\"\n      class=\"new-background-back\">\n      Iniciar Sesión\n    </ion-button>\n  </p>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/componentes/registro/registro.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-icon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n  width: 30%; }\n\nspan {\n  font-family: 'Dosis-Regular'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thdmltL1bDrWRlb3MvQ2hhdC1Jb25pYy1GaXJlYmFzZS9zcmMvYXBwL2NvbXBvbmVudGVzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUtkO0VBQ0ksNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4taWNvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcblxyXG5cclxuc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0Rvc2lzLVJlZ3VsYXInO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/registro/registro.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/registro/registro.page.ts ***!
  \*******************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RegistroPage = /** @class */ (function () {
    function RegistroPage(auth, router, actionSheetController, alertController) {
        this.auth = auth;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
    }
    RegistroPage.prototype.ngOnInit = function () {
    };
    RegistroPage.prototype.onClickedVerificarPass = function () {
        if (this.name != null && this.email != null && this.password1 != null && this.password2 != null) {
            if (this.password1 === this.password2) {
                if (this.password1.length >= 6) {
                    this.onClickedRegistrar();
                }
                else {
                    this.showAlert("¡Error!", "La contrseña debe tener por lo menos 6 carácteres.");
                }
            }
            else {
                this.showAlert("¡Error!", "Las constraseñas son distintas.");
            }
        }
        else {
            this.showAlert("¡Error!", "Ingresa los campos faltantes.");
        }
    };
    RegistroPage.prototype.onClickedRegistrar = function () {
        var _this = this;
        this.auth.registrarUsuario(this.name, this.email, this.password1).then(function (auth) {
            _this.showAlert("Registrado", "El usuario se ha creado con éxito.");
            _this.router.navigate(['/home']);
            console.log(auth);
        }).catch(function (err) {
            _this.showAlert("¡Usuario existente!", "El correo está registrado.");
        });
    };
    RegistroPage.prototype.showAlert = function (titulo, mensaje) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: titulo,
                            message: mensaje,
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
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.page.html */ "./src/app/componentes/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/componentes/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=componentes-registro-registro-module.js.map