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
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var monster_service_1 = require('./monster.service');
var filter_list_pipe_1 = require('../shared/pipes/filter-list.pipe');
var monster_filter_component_1 = require('./monster-filter.component');
var monster_thumb_component_1 = require('./monster-thumb.component');
var MonsterListComponent = (function () {
    function MonsterListComponent(
        // private toastr : ToastsManager, 
        monsterService) {
        this.monsterService = monsterService;
        // TODO: let the pipe setup the initial filter
        this.filter = { byName: '', byPower: '' };
        this.monsters = [];
    }
    MonsterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var prmMonsters = this.monsterService.query();
        prmMonsters.then(function (monsters) {
            _this.monsters = monsters;
        });
        prmMonsters.catch(function (err) {
            alert('Sorry,cannot load the monsters, try again later');
            console.log('Cought an error in MonsterList', err);
        });
    };
    MonsterListComponent.prototype.removeMonster = function (monsterId) {
        var _this = this;
        this.monsterService.remove(monsterId)
            .then(function (monsters) {
            _this.monsters = monsters;
            // this.toastr.success('You are awesome!', 'Success!');
        });
    };
    MonsterListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ["monster.css"],
            pipes: [filter_list_pipe_1.FilterByPipe],
            directives: [monster_filter_component_1.MonsterFilterComponent, monster_thumb_component_1.MonsterThumbComponent],
            // selector: 'monster-list',
            template: "\n    <section>\n      <h2>Monsters</h2>\n\n      <monster-filter (filterChange)=\"filter = $event\"></monster-filter>\n\n      <a routerLink=\"/monster/edit\" class=\"btn btn-primary\">+ Add Monster</a>\n      <ul>\n        <li *ngFor=\"let monster of monsters | filterBy:filter\">\n            <monster-thumb [monster]=\"monster\"></monster-thumb>\n            <div class=\"text-center\">\n              <button class=\"btn btn-danger\" (click)=\"removeMonster(monster.id)\">Delete</button>\n              <a routerLink=\"/monster/edit/{{monster.id}}\" class=\"btn btn-success\">Edit</a>\n            </div>\n        </li>\n      </ul>\n    </section>\n\n\n  "
        }), 
        __metadata('design:paramtypes', [monster_service_1.MonsterService])
    ], MonsterListComponent);
    return MonsterListComponent;
}());
exports.MonsterListComponent = MonsterListComponent;
//# sourceMappingURL=monster-list.component.js.map