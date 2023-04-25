import utils from "./utils";
import globals from "./globals";

export default class listeners {
    static addShipPositionListeners() {
        const SHIPS = [2, 3, 3, 4, 5];
        const CELLS = Array.prototype.slice.call(
            document.querySelectorAll(".cell")
        );
        let currentShip = 0;
        const BOARD = globals.getPlayer().board;

        function addClass(cell) {
            const selectedShip = SHIPS[currentShip];
            const num = Math.ceil(selectedShip / 2);
            const CELLS = document.querySelectorAll(".cell");
            const CELLSARRAY = [];
            let counter = 0;
            for (let i = 0; i < 10; i++) {
                CELLSARRAY.push([]);
                for (let j = 0; j < 10; j++) {
                    CELLSARRAY[i].push(CELLS[counter]);
                    counter += 1;
                }
            }
            if (!cell.classList.contains("placed")) {
                cell.classList.add("hover");
            }
            const [row, col] = utils.findCell(cell);
            if (num === 1) {
                for (let i = 0; i < 2; i++) {
                    if (
                        row + i < 10 &&
                        !CELLSARRAY[row + i][col].classList.contains("placed")
                    ) {
                        CELLSARRAY[row + i][col].classList.add("hover");
                    }
                }
            } else if (selectedShip === 4) {
                for (let i = 0; i < 3; i++) {
                    if (
                        row + i < 10 &&
                        !CELLSARRAY[row + i][col].classList.contains("placed")
                    ) {
                        CELLSARRAY[row + i][col].classList.add("hover");
                    }
                }
                for (let i = 0; i < 2; i++) {
                    if (
                        row - i >= 0 &&
                        !CELLSARRAY[row - i][col].classList.contains("placed")
                    ) {
                        CELLSARRAY[row - i][col].classList.add("hover");
                    }
                }
            } else {
                for (let i = 0; i < num; i++) {
                    if (
                        row + i < 10 &&
                        !CELLSARRAY[row + i][col].classList.contains("placed")
                    ) {
                        CELLSARRAY[row + i][col].classList.add("hover");
                    }
                }
                for (let i = 0; i < num; i++) {
                    if (
                        row - i >= 0 &&
                        !CELLSARRAY[row - i][col].classList.contains("placed")
                    ) {
                        CELLSARRAY[row - i][col].classList.add("hover");
                    }
                }
            }
        }

        function removeClass(cell) {
            const selectedShip = SHIPS[currentShip];
            const num = Math.ceil(selectedShip / 2);
            const CELLS = document.querySelectorAll(".cell");
            const CELLSARRAY = [];
            let counter = 0;
            for (let i = 0; i < 10; i++) {
                CELLSARRAY.push([]);
                for (let j = 0; j < 10; j++) {
                    CELLSARRAY[i].push(CELLS[counter]);
                    counter += 1;
                }
            }
            cell.classList.remove("hover");
            const foundCell = utils.findCell(cell);
            const [row, col] = foundCell;
            if (num === 1) {
                for (let i = 0; i < 2; i++) {
                    if (row + i < 10) {
                        CELLSARRAY[row + i][col].classList.remove("hover");
                    }
                }
            } else if (selectedShip === 4) {
                for (let i = 0; i < 3; i++) {
                    if (row + i < 10) {
                        CELLSARRAY[row + i][col].classList.remove("hover");
                    }
                }
                for (let i = 0; i < 2; i++) {
                    if (row - i >= 0) {
                        CELLSARRAY[row - i][col].classList.remove("hover");
                    }
                }
            } else {
                for (let i = 0; i < num; i++) {
                    if (row + i < 10) {
                        CELLSARRAY[row + i][col].classList.remove("hover");
                    }
                }
                for (let i = 0; i < num; i++) {
                    if (row - i >= 0) {
                        CELLSARRAY[row - i][col].classList.remove("hover");
                    }
                }
            }
        }

        function handleBoardPlacement() {
            const selectedShip = SHIPS[currentShip];
            const BOARDSIZE = BOARD.length;
            const placements = document.querySelectorAll(".hover");
            placements.forEach((placement) => {
                placement.classList.remove("hover");
            });
            // Check if placement length matches current ship
            if (placements.length !== selectedShip) {
                return;
            }

            let canBePlaced = true;
            for (let i = 0; i < placements.length; i++) {
                const placementIndex = CELLS.indexOf(placements[i]);
                const row = Math.floor(placementIndex / BOARDSIZE);
                const col = placementIndex % BOARDSIZE;
                // Check if cell is already occupied
                if (BOARD[row][col] === 1) {
                    canBePlaced = false;
                    return;
                }
            }

            // Place ship and update array if all cells are valid
            if (canBePlaced) {
                for (let i = 0; i < placements.length; i++) {
                    const placementIndex = CELLS.indexOf(placements[i]);
                    const row = Math.floor(placementIndex / BOARDSIZE);
                    const col = placementIndex % BOARDSIZE;
                    placements[i].classList.add("placed");
                    BOARD[row][col] = 1;
                    console.log(BOARD);
                }
                // Get next ship from array
                currentShip++;
                // If all ships are placed, load a button that says finalize placements
                // Code...
                if (currentShip >= SHIPS.length) {
                    console.log("All ships placed");
                    const SETUPCONTAINER = document.querySelector("#setup");
                    utils.loadButton("Finalize Placements", SETUPCONTAINER);
                    // Remove board and load player and opponent boards
                    const BODY = document.querySelector("body");
                    BODY.removeChild(SETUPCONTAINER);
                    // Load game boards
                    utils.loadGameBoards();
                }
            }
        }

        CELLS.forEach((cell) => {
            cell.addEventListener("mouseover", () => {
                addClass(cell);
            });

            cell.addEventListener("mouseleave", () => {
                removeClass(cell);
            });

            cell.addEventListener("click", handleBoardPlacement);
        });

        // AXIS BTN
        const CURRENTAXIS = "Y";
        const AXISBTN = document.querySelector("#axisbtn");
        AXISBTN.addEventListener("click", () => {
            // Change axis and rerender board with all cells that are already placed
            // And add new eventlisteners to all cells
        });
    }
}
