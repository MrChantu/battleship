export default class game {
    constructor() {
        this.board = game.generateBoard();
    }

    static generateBoard() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push([]);
            for (let j = 0; j < 10; j++) {
                array[i].push(0);
            }
        }
        return array;
    }

    getBoard() {
        return this.board;
    }
}