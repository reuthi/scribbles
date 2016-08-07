const Board = require('../ttt.service/board.class');

class Room {

    constructor(id) {
        this.id = id;
        this.playersCount = 0;
        // this.board = new Board();
        this.state = {
            // currTurnPlayer: true, //true: X, false: O         
            board: new Board(),
            isWin: false,
            players:[
                {
                name: 'player 1',
                currTurnPlayer: true,
                playerCellEntity: 'fa-times',
                isWin: false
                }, 
                {                
                name: 'player 2',
                currTurnPlayer: false,
                playerCellEntity: 'fa-circle-o',
                isWin: false                
                }
            ],
            

        }
    }

}

module.exports = Room;