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
var MonsterThumbComponent = (function () {
    function MonsterThumbComponent() {
    }
    MonsterThumbComponent.prototype.ngOnInit = function () { };
    MonsterThumbComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'monster-thumb',
            styleUrls: ["monster.css"],
            inputs: ['monster'],
            template: "\n          <section>\n            <p>{{monster.name}}</p>\n            <a routerLink=\"/monster/{{monster.id}}/{{monster.name}}\">\n              <img class=\"imgMonster\" [src]=\"monster.getImgUrl()\" />\n            </a>\n            <h6>Power: {{monster.power}}</h6>\n\n          </section>\n          "
        }), 
        __metadata('design:paramtypes', [])
    ], MonsterThumbComponent);
    return MonsterThumbComponent;
}());
exports.MonsterThumbComponent = MonsterThumbComponent;
//# sourceMappingURL=monster-thumb.component.js.map