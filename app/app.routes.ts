import { PLATFORM_DIRECTIVES } from '@angular/core';
import {AppComponent} from './app.component';
import {MonsterListComponent} from './monster/monster-list.component';
import {MonsterComponent} from './monster/monster.component';
import {MonsterEditComponent} from './monster/monster-edit.component';
import {ChatRoomComponent} from './chat/chat-room.component';
<<<<<<< HEAD
import {TicTacToeComponent} from './tic-tac-toe/ttt/ttt.component';

=======
import {ArenaComponent} from './arena/arena.component';
import {BoardComponent} from './ticTacToe/board/board.component';
>>>>>>> b15c72624b721174565cb776f004449904002a77
import { RouterConfig, ROUTER_DIRECTIVES, provideRouter } from '@angular/router';

const routes: RouterConfig = [
  { path: '', component: AppComponent },
  { path: 'monster', component: MonsterListComponent },
  { path: 'monster/edit', component: MonsterEditComponent },
  { path: 'monster/edit/:id', component: MonsterEditComponent },
  { path: 'monster/:id/:name', component: MonsterComponent },
  { path: 'chat', component: ChatRoomComponent },
<<<<<<< HEAD
  { path: 'tic-tac-toe', component: TicTacToeComponent }
=======
  { path: 'arena', component: ArenaComponent },
  { path: 'ticTacToe', component: BoardComponent }
>>>>>>> b15c72624b721174565cb776f004449904002a77
  
];

export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
