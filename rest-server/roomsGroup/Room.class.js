class Room {

    constructor(id) {
        this.id = id;
        this.playersCount = 0;
        this.currTurnPlayerIndex = 0;
    }

}

module.exports = Room;