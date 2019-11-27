(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentes-chat-add-chat-add-module"],{

/***/ "./src/app/componentes/chat-add/chat-add.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/chat-add/chat-add.module.ts ***!
  \*********************************************************/
/*! exports provided: ChatAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAddPageModule", function() { return ChatAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-add.page */ "./src/app/componentes/chat-add/chat-add.page.ts");







var routes = [
    {
        path: '',
        component: _chat_add_page__WEBPACK_IMPORTED_MODULE_6__["ChatAddPage"]
    }
];
var ChatAddPageModule = /** @class */ (function () {
    function ChatAddPageModule() {
    }
    ChatAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_add_page__WEBPACK_IMPORTED_MODULE_6__["ChatAddPage"]]
        })
    ], ChatAddPageModule);
    return ChatAddPageModule;
}());



/***/ }),

/***/ "./src/app/componentes/chat-add/chat-add.page.html":
/*!*********************************************************!*\
  !*** ./src/app/componentes/chat-add/chat-add.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img class=\"login-icon\" src=\"../../../assets/icon/favicon.png\" alt=\"\">\n\n\n  <ion-item>\n    <ion-label position=\"floating\">Nome</ion-label>\n    <ion-input [(ngModel)]=\"name\" type=\"text\" name=\"name\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">descripcion</ion-label>\n    <ion-input [(ngModel)]=\"description\" type=\"text\" name=\"description\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Id</ion-label>\n    <ion-input [(ngModel)]=\"id\" type=\"text\" name=\"id\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Img</ion-label>\n    <ion-input [(ngModel)]=\"img\" type=\"file\" name=\"img\"></ion-input>\n  </ion-item>\n\n\n\n    <ion-button (click)=\"onClickedRegistrar()\" expand=\"block\" class=\"new-background-register\">\n      Nuevo Chat</ion-button>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/componentes/chat-add/chat-add.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/componentes/chat-add/chat-add.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NoYXQtYWRkL2NoYXQtYWRkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/chat-add/chat-add.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentes/chat-add/chat-add.page.ts ***!
  \*******************************************************/
/*! exports provided: ChatAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAddPage", function() { return ChatAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_chats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/chats.service */ "./src/app/servicios/chats.service.ts");





var ChatAddPage = /** @class */ (function () {
    function ChatAddPage(chats, router, actionSheetController, alertController) {
        this.chats = chats;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.attachment = null;
    }
    ChatAddPage.prototype.ngOnInit = function () {
    };
    ChatAddPage.prototype.attachFile = function (e) {
        if (e.target.files.length == 0) {
            console.log("No file selected!");
            return;
        }
        var file = e.target.files[0];
        console.log(file);
        this.attachment = file;
    };
    ChatAddPage.prototype.onClickedRegistrar = function () {
        var _this = this;
        this.chats.Chatadd(this.name, this.description, this.img, this.id).then(function (chats) {
            _this.showAlert("Registrado", "El usuario se ha creado con éxito.");
            _this.router.navigate(['/home']);
            console.log(chats);
        }).catch(function (err) {
            _this.showAlert("¡Usuario existente!", "El correo está registrado.");
        });
    };
    ChatAddPage.prototype.showAlert = function (titulo, mensaje) {
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
    ChatAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-add',
            template: __webpack_require__(/*! ./chat-add.page.html */ "./src/app/componentes/chat-add/chat-add.page.html"),
            styles: [__webpack_require__(/*! ./chat-add.page.scss */ "./src/app/componentes/chat-add/chat-add.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_chats_service__WEBPACK_IMPORTED_MODULE_4__["ChatsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ChatAddPage);
    return ChatAddPage;
}());



/***/ })

}]);
//# sourceMappingURL=componentes-chat-add-chat-add-module.js.map