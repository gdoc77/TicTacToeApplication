import { View, Text, Pressable } from "react-native";
import Board from "@/components/Board";
import React, {useState} from "react";
import { BoardType, PlayerType, PositionIndexType } from "@/types/Types";
import { initBoard, makeMove, checkForWinner, checkFullBoard } from "@/functions/HackyTicTacToe";

export default function App() {
    const [player, setPlayer] = useState<PlayerType>(1);
    const [board, setBoard] = useState<BoardType>(initBoard());
    const [winner, setWinner] = useState<undefined | 10 /* random number hack */ | PlayerType>(undefined);

    const onTurnEnd = (xPos: PositionIndexType, yPos: PositionIndexType, oldBoard: BoardType, player: PlayerType) => {
        const newBoard = makeMove(oldBoard, player, xPos, yPos);
        setBoard(newBoard);
        const winner : undefined | PlayerType = checkForWinner(board);
        if (winner) {
            setWinner(player);
        } else if (checkFullBoard(newBoard)) {
            setWinner(10);
        } else {
            const nextPlayer = player === 1 ? 2 : 1;
            setPlayer(nextPlayer);
        }
    }

    const newGame = () => {
        const newBoard = initBoard();
        setBoard(newBoard);
        setPlayer(1);
        setWinner(undefined);
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Board player={player} board={board} onTurnEnd={onTurnEnd} isLocked={!!winner} />
            {winner && <View style={{flex: 1, padding: 30, justifyContent: "center", alignItems: "center"}}>
                <Text style={{ fontSize: 40, fontWeight: 500, textAlign: "center"}}>{winner === 10 ? "No winner" : `Winner is player ${winner}`}</Text>
                <Pressable style={{
                    width: 200,
                    height: 60,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                }} onPress={newGame}><Text style={{color: "white", fontWeight: "bold"}}>New Game</Text></Pressable>
            </View>}
        </View>
    );
}