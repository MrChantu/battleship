export default class game {
    constructor() {
        this.board = game.generateBoard();
        this.unmappedBoard = game.generateEmptyBoard();
        this.lives = 17;
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

    static generateEmptyBoard() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push([]);
            for (let j = 0; j < 10; j++) {
                array[i].push(null);
            }
        }
        return array;
    }

    mapTarget(target, opponent) {
        const oppboard = opponent.getBoard();
        const unmapped = this.unmappedBoard;

        if (oppboard[target.y][target.x] === 1) {
            unmapped[target.y][target.x] = 1;
            opponent.removeLife();
        } else {
            unmapped[target.y][target.x] = 0;
        }
    }

    getBoard() {
        return this.board;
    }

    getLives() {
        return this.lives;
    }

    removeLife() {
        this.lives -= 1;
    }

    isGameOver() {
        this.lives === 0 ? true : false;
    }
}