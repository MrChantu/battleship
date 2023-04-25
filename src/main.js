import "./styles.css";
import utils from "./misc/utils";
import listeners from "./misc/eventlisteners";
import globals from "./misc/globals";

class ship {
    constructor(size) {
        this.size = size;
    }

    generateShip() {}

    findPos(row, col) {

    }
}

function handleAxis(axis) {
    if (axis === "Y") {
    }
}

const startup = (() => {
    // Generate cells into  container
    utils.addDomCells(100);
    globals.newGame();

    // Load eventlisteners (Allow player to place ships down and confirm)
    listeners.addShipPositionListeners();
    console.log(globals.getOpponent().board);
})();
