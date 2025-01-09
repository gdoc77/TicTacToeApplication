import React, {useState} from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { PositionIndexType, BoardType } from "@/types/Types";

type Props = {
    xPos: PositionIndexType;
    yPos: PositionIndexType;
    board: BoardType;
    onPress: (xPos: PositionIndexType, yPos: PositionIndexType) => void;
    isLocked: boolean;
}

export default function Space({xPos, yPos, board, onPress, isLocked} : Props) {
    const spacePushed = (xPos: PositionIndexType, yPos: PositionIndexType) => {
        if (isLocked) {
            return;
        }
        onPress(xPos, yPos);
    }
    
    const checkContent = () : "X" | "O" | "" => {
        if (board[xPos][yPos] === 1) {
            return "X";
        } else if (board[xPos][yPos] === 4) {
            return "O";
        }
        return "";
    }

    return (
        <View
            style={{
                flex: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Pressable style={{
                flex: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }} onPress={() => spacePushed(xPos, yPos)}>
                <Text style={{fontSize: 40, fontWeight: 700}}>{checkContent()}</Text>
            </Pressable>
        </View>
    );
}
