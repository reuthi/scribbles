import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


import {MonsterService} from './monster/monster.service';
import {ChatRoomService} from './chat/chat-room.service';
<<<<<<< HEAD
// import {BoardService} from './tic-tac-toe/tc-service/tictactoe.service';
=======
import {ArenaService} from './arena/arena.service';
>>>>>>> b15c72624b721174565cb776f004449904002a77

import * as io from 'socket.io-client';


@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
<<<<<<< HEAD
  providers: [MonsterService, ChatRoomService , {provide: 'io', useValue: io}]
=======
  providers: [MonsterService, ChatRoomService, ArenaService, ToastsManager, {provide: 'io', useValue: io}]
>>>>>>> b15c72624b721174565cb776f004449904002a77

})
export class AppComponent { }