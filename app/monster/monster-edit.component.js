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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var monster_service_1 = require('./monster.service');
var upload_demo_component_1 = require('../shared/upload-demo/upload-demo.component');
var MonsterEditComponent = (function () {
    function MonsterEditComponent(formBuilder, route, router, monsterService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.monsterService = monsterService;
    }
    MonsterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('this.route.params', this.route.params);
        this.prepareForm();
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            // This means EDIT mode
            if (id) {
                _this.monsterService.get(id)
                    .then(function (monster) {
                    _this.monsterToEdit = monster;
                    console.log('in edit, ajax returned : ', _this.monsterToEdit, _this.frmMonster.controls);
                    _this.frmMonster.controls['name'].updateValue(monster.name);
                    _this.frmMonster.controls['power'].updateValue(monster.power);
                });
            }
        });
    };
    MonsterEditComponent.prototype.save = function () {
        var _this = this;
        var monsterId = (this.monsterToEdit) ? this.monsterToEdit.id : undefined;
        this.monsterService.save(this.frmMonster.value, monsterId)
            .then(function () {
            _this.router.navigate(['/monster']);
        });
    };
    MonsterEditComponent.prototype.prepareForm = function () {
        this.frmMonster = this.formBuilder.group({
            name: ['',
                forms_1.Validators.compose([forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(100)])],
            power: [5, forms_1.Validators.required]
        });
    };
    MonsterEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            // selector: 'monster-edit',
            templateUrl: 'monster-edit.component.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, upload_demo_component_1.UploadDemoComponent]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, monster_service_1.MonsterService])
    ], MonsterEditComponent);
    return MonsterEditComponent;
}());
exports.MonsterEditComponent = MonsterEditComponent;
//# sourceMappingURL=monster-edit.component.js.map