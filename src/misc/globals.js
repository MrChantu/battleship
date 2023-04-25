import game from "../classes/game";

export default class globals {
    static player = new game();
    static opponent = new game();

    static newGame() {
        globals.battleship = new game();
    }

    static getPlayer() {
        return globals.player;
    }

    static getOpponent() {
        return globals.opponent;
    }
}