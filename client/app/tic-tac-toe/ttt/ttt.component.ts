import {Component} from '@angular/core';
import {BoardComponent} from '../ttt-board/ttt-board.component'


@Component({
  selector: 'tic-tac-toe',
  template: `<tc-board></tc-board>`,
  directives: [BoardComponent]
})

export class TicTacToeComponent{
  
}