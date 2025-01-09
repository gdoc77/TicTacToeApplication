import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Space from "./Space";
import {BoardType, PositionIndexType, PlayerType} from "../types/Types";

type Props = {
  player: PlayerType;
  board: BoardType;
  onTurnEnd: (xPos: PositionIndexType, yPos: PositionIndexType, board: BoardType, player: PlayerType) => void;
  isLocked: boolean;
}

const Board = ({player, board, onTurnEnd, isLocked} : Props) => {

  const onPress = (xPos: PositionIndexType, yPos: PositionIndexType) => {
    onTurnEnd(xPos, yPos, board, player);
  }

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <View key={0} style={styles.gridItem}>
          <Space xPos={0} yPos={0} board={board} onPress={onPress} isLocked={isLocked} />
        </View>
        <View key={1} style={styles.gridItem}>
          <Space xPos={0} yPos={1} board={board} onPress={onPress} isLocked={isLocked} />
        </View>
        <View key={2} style={styles.gridItem}>
          <Space xPos={0} yPos={2} board={board} onPress={onPress} isLocked={isLocked} />
        </View>

        <View key={3} style={styles.gridItem}>
          <Space xPos={1} yPos={0} board={board} onPress={onPress} isLocked={isLocked} />
        </View>
        <View key={4} style={styles.gridItem}>
          <Space xPos={1} yPos={1} board={board} onPress={onPress} isLocked={isLocked} />
        </View>
        <View key={5} style={styles.gridItem}>
          <Space xPos={1} yPos={2} board={board} onPress={onPress} isLocked={isLocked} />
        </View>

        <View key={6} style={styles.gridItem}>
          <Space xPos={2} yPos={0} board={board} onPress={onPress} isLocked={isLocked} />
        </View>
        <View key={7} style={styles.gridItem}>
          <Space xPos={2} yPos={1} board={board} onPress={onPress} isLocked={isLocked} />
        </View>
        <View key={8} style={styles.gridItem}>
          <Space xPos={2} yPos={2} board={board} onPress={onPress} isLocked={isLocked} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    padding: 10,
    width: "100%",
  },
  gridItem: {
    width: '30%', // Each item takes 30% of the width to fit 3 items per row
    aspectRatio: 1, // Ensures the items are square
    margin: '1.5%', // Adds spacing between items
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Board;
