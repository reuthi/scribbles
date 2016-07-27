"use strict";
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var monster_list_component_1 = require('./monster/monster-list.component');
var monster_component_1 = require('./monster/monster.component');
var monster_edit_component_1 = require('./monster/monster-edit.component');
var chat_room_component_1 = require('./chat/chat-room.component');
var ttt_component_1 = require('./tic-tac-toe/ttt/ttt.component');
var arena_component_1 = require('./arena/arena.component');
var router_1 = require('@angular/router');
var routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'monster', component: monster_list_component_1.MonsterListComponent },
    { path: 'monster/edit', component: monster_edit_component_1.MonsterEditComponent },
    { path: 'monster/edit/:id', component: monster_edit_component_1.MonsterEditComponent },
    { path: 'monster/:id/:name', component: monster_component_1.MonsterComponent },
    { path: 'chat', component: chat_room_component_1.ChatRoomComponent },
    { path: 'tic-tac-toe', component: ttt_component_1.TicTacToeComponent },
    { path: 'arena', component: arena_component_1.ArenaComponent },
];
exports.ROUTER_PROVIDERS = [
    router_1.provideRouter(routes),
    { provide: core_1.PLATFORM_DIRECTIVES, useValue: router_1.ROUTER_DIRECTIVES, multi: true }
];
//# sourceMappingURL=app.routes.js.map