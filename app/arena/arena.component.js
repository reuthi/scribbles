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
var core_1 = require('@angular/core');
var arena_service_1 = require('./arena.service');
var ArenaComponent = (function () {
    function ArenaComponent(arenaService) {
        this.arenaService = arenaService;
    }
    ArenaComponent = __decorate([
        core_1.Component({
            selector: 'arena',
            styles: ["\n    *{font-family: Monaco, Consolas;}\n    "],
            template: "\n      <h2>{{(arenaService.connected$ | async) ? \"Connected!\" : \"Disconnected...\"}}</h2>\n      <input #i (keyup.enter)=\"arenaService.send$.next(i.value); i.value = ''\">\n      <div *ngFor=\"let message of arenaService.messages$ | async\">\n        {{message}}\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [arena_service_1.ArenaService])
    ], ArenaComponent);
    return ArenaComponent;
}());
exports.ArenaComponent = ArenaComponent;
//# sourceMappingURL=arena.component.js.map