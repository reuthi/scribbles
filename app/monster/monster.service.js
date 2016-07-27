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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var monster_model_1 = require('./monster.model');
var MonsterService = (function () {
    function MonsterService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3003/data/monster/';
    }
    // query (GETs a list)
    MonsterService.prototype.query = function () {
        var prmMonsters = this.http.get(this.baseUrl)
            .toPromise()
            .then(function (res) {
            var jsonMonsters = res.json();
            return jsonMonsters.map(function (jsonMonster) {
                return new monster_model_1.MonsterModel(jsonMonster.name, jsonMonster.power, jsonMonster._id);
            });
        });
        prmMonsters.catch(function (err) {
            console.log('MonsterService::query - Problem talking to server');
        });
        return prmMonsters;
    };
    // get (GETs a single)
    MonsterService.prototype.get = function (id) {
        var prmMonster = this.http.get(this.baseUrl + id)
            .toPromise()
            .then(function (res) {
            var jsonMonster = res.json();
            return new monster_model_1.MonsterModel(jsonMonster.name, jsonMonster.power, jsonMonster._id);
        });
        prmMonster.catch(function (err) {
            console.log('MonsterService::get - Problem talking to server');
        });
        return prmMonster;
    };
    // DELETE 
    MonsterService.prototype.remove = function (id) {
        var _this = this;
        var prmMonster = this.http.delete(this.baseUrl + id)
            .toPromise()
            .then(function (res) {
            return _this.query();
        });
        prmMonster.catch(function (err) {
            console.log('MonsterService::remove - Problem talking to server', err);
        });
        return prmMonster;
    };
    // save - Adds (POST) or update (PUT)  
    MonsterService.prototype.save = function (monsterData, id) {
        var response;
        var prmMonster;
        if (id) {
            var url = this.baseUrl + id;
            response = this.http.put(url, monsterData);
        }
        else {
            var url = this.baseUrl;
            response = this.http.post(url, monsterData);
        }
        prmMonster = response.toPromise()
            .then(function (res) {
            var jsonMonster = res.json();
            return new monster_model_1.MonsterModel(jsonMonster.name, jsonMonster.power, jsonMonster.id);
        });
        prmMonster.catch(function (err) {
            console.log('MonsterService::save - Problem talking to server', err);
        });
        return prmMonster;
    };
    MonsterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MonsterService);
    return MonsterService;
}());
exports.MonsterService = MonsterService;
//# sourceMappingURL=monster.service.js.map