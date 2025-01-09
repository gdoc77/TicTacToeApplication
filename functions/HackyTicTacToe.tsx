import {BoardType, PositionIndexType, PlayerType} from "../types/Types";
import _ from "lodash";

/**
 * x is first number
 * y is second number
 * 
 * [
 *   [[0, 0], [0, 1], [0, 2]],
 *   [[1, 0], [1, 1], [1, 2]],
 *   [[2, 0], [2, 1], [2, 2]]
 * ]
 */

export const initBoard = () : BoardType => {
    return [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
}

export const makeMove = (board: BoardType, player: PlayerType, xPos: PositionIndexType, yPos: PositionIndexType) : BoardType => {
    board[xPos][yPos] = player === 1 ? 1 : 4;
    return board;
}

export const checkFullBoard = (board: BoardType) : boolean => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

const horizontalChecks = (board: BoardType) : undefined | PlayerType => {
    for (let i = 0; i < 3; i++) {
        const val = _.sum(board[i]);
        if (val === 3) {
            return 1;
        } else if (val === 12) {
            return 2;
        }
    }
    return undefined;
}

const verticalChecks = (board: BoardType) : undefined | PlayerType => {
    for (let j = 0; j < 3; j++) {
        let val = 0;
        for (let i = 0; i < 3; i++) {
            val = val + board[i][j];
        }
        if (val === 3) {
            return 1;
        } else if (val === 12) {
            return 2;
        }
    }
    return undefined;
}

const diagonalChecks = (board: BoardType) : undefined | PlayerType => {
    let val = board[0][0] + board[1][1] + board[2][2];
    if (val === 3) {
        return 1;
    } else if (val === 12) {
        return 2;
    }
    val = board[2][0] + board[1][1] + board[0][2];
    if (val === 3) {
        return 1;
    } else if (val === 12) {
        return 2;
    }
    return undefined;
}

export const checkForWinner = (board: BoardType) : undefined | PlayerType => {
    let val = horizontalChecks(board);
    if (val) {
        return val;
    }
    val = verticalChecks(board);
    if (val) {
        return val;
    }
    val = diagonalChecks(board);
    if (val) {
        return val;
    }
    return undefined;
}
