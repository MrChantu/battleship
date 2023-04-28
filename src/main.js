import "./styles.css";
import utils from "./misc/utils";
import listeners from "./misc/eventlisteners";
import globals from "./misc/globals";

const startup = (() => {
    // Generate cells into  container
    utils.addDomCells(100);
    globals.newGame();

    // Load eventlisteners (Allow player to place ships down and confirm)
    listeners.addShipPositionListeners();
    console.log(globals.getOpponent().board);
})();
