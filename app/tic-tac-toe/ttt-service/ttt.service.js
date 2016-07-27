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
var CellModel = (function () {
    function CellModel(rowNum, colNum, entity) {
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.entity = entity;
    }
    return CellModel;
}());
exports.CellModel = CellModel;
var TttService = (function () {
    function TttService() {
        this.row = [];
        this.board = [];
        this.create();
    }
    TttService.prototype.create = function () {
        for (var row = 0; row < 3; row++) {
            var newRow = [];
            this.board.push(newRow);
            for (var col = 0; col < 3; col++) {
                var newCell = new CellModel(row, col, '');
                newRow.push(newCell);
            }
        }
    };
    TttService.prototype.checkGame = function (board, cell) {
        if ((board[cell.rowNum][0].entity === board[cell.rowNum][1].entity) &&
            (board[cell.rowNum][1].entity === board[cell.rowNum][2].entity))
            return true;
        else if ((board[0][cell.colNum].entity === board[1][cell.colNum].entity) &&
            (board[1][cell.colNum].entity === board[2][cell.colNum].entity))
            return true;
        else
            return false;
    };
    TttService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TttService);
    return TttService;
}());
exports.TttService = TttService;
//# sourceMappingURL=ttt.service.js.map