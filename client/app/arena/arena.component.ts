import {Component} from '@angular/core';
import {ArenaService} from './arena.service'
@Component({
  selector: 'arena',
  styles: [`
    *{font-family: Monaco, Consolas;}
    `],
  template: `
      <h2>{{(arenaService.connected) ? "Connected!" : "Disconnected..."}}</h2>
      <input #i (keyup.enter)="arenaService.sendMsg(i.value); i.value = ''">
      <div *ngFor="let message of arenaService.messages">
        {{message}}
      </div>
    `
})
export class ArenaComponent {
  constructor(private arenaService: ArenaService) {
  }
}