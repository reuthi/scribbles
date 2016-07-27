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
var chat_room_service_1 = require('./chat-room.service');
var ChatRoomComponent = (function () {
    function ChatRoomComponent(chatRoom) {
        this.chatRoom = chatRoom;
    }
    ChatRoomComponent = __decorate([
        core_1.Component({
            selector: 'chat-room',
            styles: ["\n    *{font-family: Monaco, Consolas;}\n    "],
            template: "\n      <h2>{{(chatRoom.connected$ | async) ? \"Connected!\" : \"Disconnected...\"}}</h2>\n      <input #i (keyup.enter)=\"chatRoom.send$.next(i.value); i.value = ''\">\n      <div *ngFor=\"let message of chatRoom.messages$ | async\">\n        {{message}}\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [chat_room_service_1.ChatRoomService])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());
exports.ChatRoomComponent = ChatRoomComponent;
//# sourceMappingURL=chat-room.component.js.map