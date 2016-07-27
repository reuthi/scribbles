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
var ttt_service_1 = require('../ttt-service/ttt.service');
var BoardComponent = (function () {
    function BoardComponent(tttService) {
        this.tttService = tttService;
        this.currentPlayer = true; //true = x | false = o 
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.board = this.tttService.board;
        this.row = this.tttService.row;
    };
    BoardComponent.prototype.play = function (cell) {
        var x = cell.rowNum;
        var y = cell.colNum;
        console.log('cell', cell);
        if (cell.entity !== 'X' || cell.entity !== 'O') {
            if (this.currentPlayer)
                cell.entity = 'X';
            else
                cell.entity = 'O';
            this.win = this.tttService.checkGame(this.board, cell);
            if (this.win)
                alert('game over!');
            this.currentPlayer = !this.currentPlayer;
        }
    };
    BoardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tc-board',
            providers: [ttt_service_1.TttService],
            styleUrls: ['ttt-board.component.css'],
            templateUrl: 'ttt-board.component.html',
        }), 
        __metadata('design:paramtypes', [ttt_service_1.TttService])
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=ttt-board.component.js.map