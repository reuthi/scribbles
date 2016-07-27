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
var MonsterFilterComponent = (function () {
    function MonsterFilterComponent() {
        this.filterChange = new core_1.EventEmitter();
        this.filter = { byName: '', byPower: '' };
    }
    MonsterFilterComponent.prototype.ngOnInit = function () { };
    MonsterFilterComponent.prototype.filterChanged = function () {
        this.filterChange.emit(this.filter);
    };
    MonsterFilterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'monster-filter',
            outputs: ['filterChange'],
            styles: ["section {background-color: #DDD; margin: 2em 0; padding:0.4em 1em 1em; border-radius:0.4em} "],
            template: "\n      <section>\n        <h3>Filter</h3>\n        By Name: <input type=\"text\" [(ngModel)]=\"filter.byName\" (input)=\"filterChanged()\" />\n        By Power: <input type=\"number\" [(ngModel)]=\"filter.byPower\" (input)=\"filterChanged()\">\n      </section>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MonsterFilterComponent);
    return MonsterFilterComponent;
}());
exports.MonsterFilterComponent = MonsterFilterComponent;
//# sourceMappingURL=monster-filter.component.js.map