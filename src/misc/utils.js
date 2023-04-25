import globals from "./globals";

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
            let row, col, math, pos, isValid;
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
                    } else {
                        if (col + j < 10) {
                            BOARD[row][col + j] = 1;
                        }
                    }
                }
            } else {
                for (let j = 0; j < SHIPS[i]; j++) {
                    if (pos === 0) {
                        if (row - j >= 0) {
                            BOARD[row - j][col] = 1;
                        }
                    } else {
                        if (col - j >= 0) {
                            BOARD[row][col - j] = 1;
                        }
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

    static loadGameBoards() {
        utils.randomizeOpponentBoard();
        const BODY = document.querySelector("body");
        const DIV = document.createElement("div");
        const EMPTYDIV1 = document.createElement("div");
        const EMPTYDIV2 = document.createElement("div");
        const HEADING1 = document.createElement("h1");
        const HEADING2 = document.createElement("h1");
        const PLAYERDIV = document.createElement("div");
        const OPPONENTDIV = document.createElement("div");
        DIV.setAttribute("id", "boards");
        PLAYERDIV.setAttribute("id", "playerboard");
        OPPONENTDIV.setAttribute("id", "opponentboard");
        HEADING1.textContent = "YOU";
        HEADING2.textContent = "ENEMY";
        const PBoard = globals.getPlayer().board;
        const OBoard = globals.getOpponent().board;
        // Player Board
        for (let i = 0; i < PBoard.length; i++) {
            for (let j = 0; j < PBoard[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("cell");
                PBoard[i][j] === 0
                    ? (CELL.style.backgroundColor = "white")
                    : (CELL.style.backgroundColor = "black");
                PLAYERDIV.appendChild(CELL);
            }
        }
        // Opponent Board
        for (let i = 0; i < OBoard.length; i++) {
            for (let j = 0; j < OBoard[0].length; j++) {
                const CELL = document.createElement("div");
                CELL.classList.add("cell");
                OBoard[i][j] === 0
                    ? (CELL.style.backgroundColor = "white")
                    : (CELL.style.backgroundColor = "black");
                OPPONENTDIV.appendChild(CELL);
            }
        }
        BODY.appendChild(DIV);
        DIV.append(EMPTYDIV1, EMPTYDIV2);
        EMPTYDIV1.append(HEADING1, PLAYERDIV);
        EMPTYDIV2.append(HEADING2, OPPONENTDIV);
    }
}
