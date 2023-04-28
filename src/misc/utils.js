import globals from "./globals";
import listeners from "./eventlisteners";

export default class utils {
    static addDomCells(number) {
        const CONTAINER = document.querySelector("#container");
        for (let i = 0; i < number; i++) {
            const CELL = document.createElement("div");
            CELL.classList.add("cell");
            CONTAINER.appendChild(CELL);
        }
    }

    static findCell(cell) {
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

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (cell === CELLSARRAY[i][j]) {
                    return [i, j];
                }
            }
        }
    }

    static isValidPosition(row, col, shipSize, board, math) {
        for (let i = 0; i < shipSize; i++) {
            if (math === 0) {
                if (row + i > 9 || board[row + i][col] === 1) return false;
                if (col + i > 9 || board[row][col + i] === 1) return false;
            } else {
                if (row - i < 0 || board[row - i][col] === 1) return false;
                if (col - i < 0 || board[row][col - i] === 1) return false;
            }
        }
        return true;
    }

    static randomizeOpponentBoard() {
        const BOARD = globals.getOpponent().board;
        const SHIPS = [2, 3, 3, 4, 5];
        const usedPositions = [];

        for (let i = 0; i < SHIPS.length; i++) {
            let row;
            let col;
            let math;
            let pos;
            let isValid;
            while (!isValid) {
                row = Math.floor(Math.random() * 10);
                col = Math.floor(Math.random() * 10);
                math = Math.floor(Math.random() * 2);
                pos = Math.floor(Math.random() * 2);
                isValid = utils.isValidPosition(
                    row,
                    col,
                    SHIPS[i],
                    BOARD,
                    math
                );
            }
            usedPositions.push([row, col]);
            if (math === 0) {
                for (let j = 0; j < SHIPS[i]; j++) {
                    if (pos === 0) {
                        if (row + j < 10) {
                            BOARD[row + j][col] = 1;
                        }
                    } else if (col + j < 10) {
                        BOARD[row][col + j] = 1;
                    }
                }
            } else {
                for (let j = 0; j < SHIPS[i]; j++) {
                    if (pos === 0) {
                        if (row - j >= 0) {
                            BOARD[row - j][col] = 1;
                        }
                    } else if (col - j >= 0) {
                        BOARD[row][col - j] = 1;
                    }
                }
            }
        }
    }

    static loadButton(text, container) {
        const BUTTON = document.createElement("button");
        BUTTON.textContent = text;
        container.appendChild(BUTTON);
    }

    static checkCellOpp(cell) {
        const OPPBOARD = globals.getOpponent().board;
        const CELLS = Array.prototype.slice.call(
            document.querySelectorAll(".oppcell")
        );
        const INDEX = CELLS.indexOf(cell);
        const LENGTH = OPPBOARD.length;

        if (OPPBOARD[Math.floor(INDEX / LENGTH)][INDEX % LENGTH] === 1) {
            return true;
        }
        return false;
    }

    static checkCellPlayer(cell) {
        const PBOARD = globals.getPlayer().board;
        const CELLS = Array.prototype.slice.call(
            document.querySelectorAll(".cell")
        );
        const INDEX = CELLS.indexOf(cell);
        const LENGTH = PBOARD.length;

        if (PBOARD[Math.floor(INDEX / LENGTH)][INDEX % LENGTH] === 1) {
            return true;
        }
        return false;
    }

    static shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    static sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static getComputerMove() {
        const BOARD = globals.getOpponent().unmappedBoard;
        const mappedCells = BOARD.flat().filter((x) => x !== null).length;

        if (mappedCells === 0) {
            // handle special case where no cells have been mapped yet
            const size = BOARD.length;
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);
            const target = { x, y };
            return target;
        }

        // find all unmapped cells adjacent to hits
        let potentialMoves = [];
        BOARD.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell === null) {
                    // check if adjacent to hit cell
                    let adjacentHit = false;
                    if (rowIndex > 0 && BOARD[rowIndex - 1][colIndex] === 1) {
                        adjacentHit = true;
                    }
                    if (colIndex > 0 && BOARD[rowIndex][colIndex - 1] === 1) {
                        adjacentHit = true;
                    }
                    if (
                        rowIndex < BOARD.length - 1 &&
                        BOARD[rowIndex + 1][colIndex] === 1
                    ) {
                        adjacentHit = true;
                    }
                    if (
                        colIndex < row.length - 1 &&
                        BOARD[rowIndex][colIndex + 1] === 1
                    ) {
                        adjacentHit = true;
                    }
                    if (adjacentHit) {
                        potentialMoves.push({ x: colIndex, y: rowIndex });
                    }
                }
            });
        });

        // if no adjacent hits, choose randomly from unmapped cells
        if (potentialMoves.length === 0) {
            potentialMoves = [];
            BOARD.forEach((row, rowIndex) => {
                row.forEach((cell, colIndex) => {
                    if (cell === null) {
                        potentialMoves.push({ x: colIndex, y: rowIndex });
                    }
                });
            });
        }

        potentialMoves = utils.shuffle(potentialMoves);

        // iterate through potential moves and select the first one that hasn't been tried yet
        let target = null;
        potentialMoves.forEach((move) => {
            if (BOARD[move.y][move.x] === null) {
                target = move;
            }
        });

        return target;
    }

    static loadInteractableEnemyBoard() {
        const OPPBOARD = document.querySelector("#opponentboard");
        const CONTAINER = OPPBOARD.parentElement;
        const UNMAPPED = globals.getPlayer().unmappedBoard;

        CONTAINER.removeChild(OPPBOARD);

        const NEWBOARD = document.createElement("div");
        NEWBOARD.id = "opponentboard";
        for (let i = 0; i < UNMAPPED.length; i++) {
            for (let j = 0; j < UNMAPPED[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("oppcell");
                if (UNMAPPED[i][j] === 1) {
                    CELL.style.backgroundColor = "red";
                } else if (UNMAPPED[i][j] === 0) {
                    CELL.style.backgroundColor = "gray";
                }
                if (UNMAPPED[i][j] !== 0 && UNMAPPED[i][j] !== 1) {
                    CELL.addEventListener("click", () => {
                        utils.handleCellClick(CELL);
                    });
                }
                NEWBOARD.appendChild(CELL);
            }
        }
        CONTAINER.appendChild(NEWBOARD);
    }

    static loadUninteractableEnemyBoard() {
        const OPPBOARD = document.querySelector("#opponentboard");
        const CONTAINER = OPPBOARD.parentElement;
        const UNMAPPED = globals.getPlayer().unmappedBoard;

        CONTAINER.removeChild(OPPBOARD);

        const NEWBOARD = document.createElement("div");
        NEWBOARD.id = "opponentboard";
        for (let i = 0; i < UNMAPPED.length; i++) {
            for (let j = 0; j < UNMAPPED[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("uninteractablecell");
                if (UNMAPPED[i][j] === 1) {
                    CELL.style.backgroundColor = "red";
                } else if (UNMAPPED[i][j] === 0) {
                    CELL.style.backgroundColor = "gray";
                }
                NEWBOARD.appendChild(CELL);
            }
        }
        CONTAINER.appendChild(NEWBOARD);
    }

    static reloadPlayerBoard() {
        const PBOARD = globals.getPlayer().board;
        const UNMAPPEDBOARD = globals.getOpponent().unmappedBoard;

        const OLDBOARD = document.querySelector("#playerboard");
        const CONTAINER = OLDBOARD.parentElement;

        CONTAINER.removeChild(OLDBOARD);

        const NEWBOARD = document.createElement("div");
        NEWBOARD.id = "playerboard";

        for (let i = 0; i < PBOARD.length; i++) {
            for (let j = 0; j < PBOARD[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("cell");
                if (UNMAPPEDBOARD[i][j] === 1) {
                    CELL.style.backgroundColor = "red";
                } else if (UNMAPPEDBOARD[i][j] === 0) {
                    CELL.style.backgroundColor = "gray";
                } else if (PBOARD[i][j] === 1 && UNMAPPEDBOARD[i][j] === null) {
                    CELL.style.backgroundColor = "black";
                }
                NEWBOARD.appendChild(CELL);
            }
        }
        CONTAINER.appendChild(NEWBOARD);
    }

    static removeAllChildren(parent) {
        while (parent.firstChild) {
            parent.firstChild.remove();
        }
    }

    static handleReset() {
        const BODY = document.querySelector("body");
        utils.removeAllChildren(BODY);

        const SETUP = document.createElement("div");
        const BTN = document.createElement("button");
        const CONTAINER = document.createElement("div");
        SETUP.id = "setup";
        CONTAINER.id = "container";
        BTN.id = "axisbtn";
        BTN.textContent = "CHANGE AXIS";

        BODY.appendChild(SETUP);
        SETUP.append(BTN, CONTAINER);

        utils.addDomCells(100);
        globals.newGame();
        listeners.addShipPositionListeners();
    }

    static loadGameOver(winner) {
        const BODY = document.querySelector("body");
        const BOARDS = document.querySelector("#boards");
        BODY.removeChild(BOARDS);
        const DIV = document.createElement("div");
        DIV.id = "reset";
        const BUTTON = document.createElement("button");
        const H1 = document.createElement("h1");
        BUTTON.textContent = "Play Again";
        BUTTON.id = "resetbtn";
        if (winner === "player") {
            H1.textContent = "You win!";
        } else {
            H1.textContent = "You lose.";
        }
        BODY.appendChild(DIV);
        DIV.append(H1, BUTTON);
        BUTTON.addEventListener("click", utils.handleReset);
    }

    static handleCellClick(cell) {
        (async () => {
            const OPPCELLS = Array.prototype.slice.call(
                document.querySelectorAll(".oppcell")
            );
            const TURNTEXT = document.querySelector("#turntext");
            globals.getPlayer().mapTarget(
                {
                    x: OPPCELLS.indexOf(cell) % 10,
                    y: Math.floor(OPPCELLS.indexOf(cell) / 10),
                },
                globals.getOpponent()
            );

            if (globals.getOpponent().getLives() === 0) {
                utils.loadGameOver("player");
                console.log("You win!");
            }

            utils.loadUninteractableEnemyBoard();

            TURNTEXT.textContent = "Opponents turn";
            const OPPTURN = utils.getComputerMove();
            globals.getOpponent().mapTarget(OPPTURN, globals.getPlayer());
            await utils.sleep(500);
            utils.reloadPlayerBoard();
            if (globals.getPlayer().getLives() === 0) {
                utils.loadGameOver("enemy");
            }
            await utils.sleep(500);
            TURNTEXT.textContent = "Your turn";
            await utils.sleep(500);
            utils.loadInteractableEnemyBoard();
        })();
    }

    static loadGameBoards() {
        utils.randomizeOpponentBoard();
        const BODY = document.querySelector("body");
        const DIV = document.createElement("div");
        const BOARDSCONTAINER = document.createElement("div");
        const EMPTYDIV1 = document.createElement("div");
        const EMPTYDIV2 = document.createElement("div");
        const HEADING1 = document.createElement("h1");
        const HEADING2 = document.createElement("h1");
        const TURNTEXT = document.createElement("h1");
        const PLAYERDIV = document.createElement("div");
        const OPPONENTDIV = document.createElement("div");
        DIV.setAttribute("id", "boards");
        PLAYERDIV.setAttribute("id", "playerboard");
        OPPONENTDIV.setAttribute("id", "opponentboard");
        TURNTEXT.setAttribute("id", "turntext");
        HEADING1.textContent = "YOU";
        HEADING2.textContent = "ENEMY";
        TURNTEXT.textContent = "YOUR TURN";
        const PBoard = globals.getPlayer().board;
        const OBoard = globals.getOpponent().board;
        // Player Board
        for (let i = 0; i < PBoard.length; i++) {
            for (let j = 0; j < PBoard[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("cell");
                if (PBoard[i][j] === 1) CELL.style.backgroundColor = "black";
                PLAYERDIV.appendChild(CELL);
            }
        }
        // Opponent Board
        for (let i = 0; i < OBoard.length; i++) {
            for (let j = 0; j < OBoard[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("oppcell");
                OBoard[i][j] === 1
                    ? (CELL.dataset.hit = "true")
                    : (CELL.dataset.hit = "false");
                CELL.addEventListener("click", () => {
                    utils.handleCellClick(CELL);
                });
                OPPONENTDIV.appendChild(CELL);
            }
        }
        BODY.appendChild(DIV);
        DIV.append(TURNTEXT, BOARDSCONTAINER);
        BOARDSCONTAINER.append(EMPTYDIV1, EMPTYDIV2);
        EMPTYDIV1.append(HEADING1, PLAYERDIV);
        EMPTYDIV2.append(HEADING2, OPPONENTDIV);
    }
}
