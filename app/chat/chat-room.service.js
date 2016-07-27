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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var ChatRoomService = (function () {
    function ChatRoomService(io) {
        // url$ = Observable.of('https://socket-chat-example-qsaokhakmv.now.sh/');
        this.url$ = Rx_1.Observable.of('http://localhost:3003');
        this.send$ = new Rx_1.Subject();
        this.socket$ = this.url$
            .switchMap(function (url) { return Rx_1.Observable.of(io(url)); });
        this.messages$ = this.socket$
            .switchMap(function (socket) { return Rx_1.Observable.fromEvent(socket, 'chat message'); })
            .startWith([])
            .scan(function (acc, curr) { return acc.concat([curr]); });
        var disconnect$ = this.socket$
            .switchMap(function (socket) { return Rx_1.Observable.fromEvent(socket, 'disconnect'); });
        var connect$ = this.socket$
            .switchMap(function (socket) { return Rx_1.Observable.fromEvent(socket, 'connect'); });
        this.connected$ = Rx_1.Observable.merge(connect$.mapTo(true), disconnect$.mapTo(false));
        this.send$.withLatestFrom(this.socket$, function (message, socket) {
            return { message: message, socket: socket };
        })
            .subscribe(function (_a) {
            var message = _a.message, socket = _a.socket;
            // console.log('Emitting msg: ', message);
            socket.emit('chat message', message);
        });
    }
    ChatRoomService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('io')), 
        __metadata('design:paramtypes', [Object])
    ], ChatRoomService);
    return ChatRoomService;
}());
exports.ChatRoomService = ChatRoomService;
//# sourceMappingURL=chat-room.service.js.map