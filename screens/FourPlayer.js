// import * as React from 'react';
import React, { useState, useReducer } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, Button, Modal } from 'react-native';

import LifeTotal from '../components/LifeTotal';
import CommanderDamage from '../components/CommanderDamage';
import Randomizer from '../components/randomizer/Main';

function playerReducer(state, action) {
  switch (action.type) {
    case 'plusLifeTotal':
      return {
        ...state,
        lifeTotal: state.lifeTotal + 1,
      }
    case 'minusLifeTotal':
      return {
        ...state,
        lifeTotal: state.lifeTotal - 1,
      }
    case 'plusDamageOpponent':
      return {
        ...state,
        lifeTotal: state.lifeTotal - 1,
        [action.value]: state[action.value] + 1,
      }
    case 'minusDamageOpponent':
      return {
        ...state,
        ...(state[action.value] > 0 && {
          lifeTotal: state.lifeTotal + 1,
          [action.value]: state[action.value] - 1,
        }),
      }
    default:
      break;
  }
  return state;
};

// Calculate Randomizer Coordinates
let { width, height } = Dimensions.get('window')
let xPosition = width / 2;
let yPosition = height / 2;

// Settings
const defaultSettings = {
  lifeTotal: 40,
  commanderTax: 0,
  poison: 0,
  poisonVisible: false,
  damageOpponentOne: 0,
  damageOpponentTwo: 0,
  damageOpponentThree: 0,
};

const colorSettings = {
  playerOne: {
    backgroundColor: "darkred"
  },
  playerTwo: {
    backgroundColor: "darkblue"
  },
  playerThree: {
    backgroundColor: "darkgreen"
  },
  playerFour: {
    backgroundColor: "black"
  },
}

export default function FourPlayer() {

  const [playerOne, dispatchOne] = useReducer(playerReducer, defaultSettings);
  const [playerTwo, dispatchTwo] = useReducer(playerReducer, defaultSettings);
  const [playerThree, dispatchThree] = useReducer(playerReducer, defaultSettings);
  const [playerFour, dispatchFour] = useReducer(playerReducer, defaultSettings);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{ height: '100%' }}>

      <Modal
        animationType="slide" // maybe fade?
        transparent={true} // !fullscreen 
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
        }}>
          <View style={{
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
          }}>
            <Text style={{
              marginBottom: 15,
              textAlign: "center"
            }}>Hello World!</Text>

            <TouchableHighlight
              style={{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: "#2196F3"
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center"
              }}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View
        style={styles.screen}>

        {/* Player 1 - Top Left */}

        <View
          style={[styles.playerArea, { backgroundColor: colorSettings.playerOne.backgroundColor }]}>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <CommanderDamage
                player={playerOne}
                colorOpponentOne={colorSettings.playerTwo.backgroundColor}
                colorOpponentTwo={colorSettings.playerFour.backgroundColor}
                colorOpponentThree={colorSettings.playerThree.backgroundColor}
                onPressPlusDamageOpponent={(opponent) => dispatchOne({ type: 'plusDamageOpponent', value: opponent })}
                onPressMinusDamageOpponent={(opponent) => dispatchOne({ type: 'minusDamageOpponent', value: opponent })}
                onLongPressDamageOpponent={() => setModalVisible(true)}
              />
            </View>
          </View>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-end' }]}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <LifeTotal
                lifeTotal={playerOne.lifeTotal}
                // onPressLifeTotal={() => toggleModalVisible()}
                onPressPlus={() => dispatchOne({ type: 'plusLifeTotal' })}
                onPressMinus={() => dispatchOne({ type: 'minusLifeTotal' })}

              />
            </View>
          </View>
        </View>

        {/* Top Right */}

        <View
          style={[styles.playerArea, { backgroundColor: colorSettings.playerTwo.backgroundColor }]}>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-start' }]}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <LifeTotal
                lifeTotal={playerTwo.lifeTotal}
                onPressPlus={() => dispatchTwo({ type: 'plusLifeTotal' })}
                onPressMinus={() => dispatchTwo({ type: 'minusLifeTotal' })}
              />
            </View>
          </View>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <CommanderDamage
                player={playerTwo}
                colorOpponentOne={colorSettings.playerFour.backgroundColor}
                colorOpponentTwo={colorSettings.playerThree.backgroundColor}
                colorOpponentThree={colorSettings.playerOne.backgroundColor}
                onPressPlusDamageOpponent={(opponent) => dispatchTwo({ type: 'plusDamageOpponent', value: opponent })}
                onPressMinusDamageOpponent={(opponent) => dispatchTwo({ type: 'minusDamageOpponent', value: opponent })}
              />
            </View>
          </View>
        </View>

        {/* Bottom Left */}

        <View
          style={[styles.playerArea, { backgroundColor: colorSettings.playerThree.backgroundColor }]}>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <CommanderDamage
                player={playerThree}
                colorOpponentOne={colorSettings.playerOne.backgroundColor}
                colorOpponentTwo={colorSettings.playerTwo.backgroundColor}
                colorOpponentThree={colorSettings.playerFour.backgroundColor}
                onPressPlusDamageOpponent={(opponent) => dispatchThree({ type: 'plusDamageOpponent', value: opponent })}
                onPressMinusDamageOpponent={(opponent) => dispatchThree({ type: 'minusDamageOpponent', value: opponent })}
              />
            </View>
          </View>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-end' }]}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <LifeTotal
                lifeTotal={playerThree.lifeTotal}
                onPressPlus={() => dispatchThree({ type: 'plusLifeTotal' })}
                onPressMinus={() => dispatchThree({ type: 'minusLifeTotal' })}
              />
            </View>
          </View>
        </View>

        {/* Bottom Right */}

        <View
          style={[styles.playerArea, { backgroundColor: colorSettings.playerFour.backgroundColor }]}>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-start' }]}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <LifeTotal
                lifeTotal={playerFour.lifeTotal}
                onPressPlus={() => dispatchFour({ type: 'plusLifeTotal' })}
                onPressMinus={() => dispatchFour({ type: 'minusLifeTotal' })}
              />
            </View>
          </View>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <CommanderDamage
                player={playerFour}
                colorOpponentOne={colorSettings.playerThree.backgroundColor}
                colorOpponentTwo={colorSettings.playerOne.backgroundColor}
                colorOpponentThree={colorSettings.playerTwo.backgroundColor}
                onPressPlusDamageOpponent={(opponent) => dispatchFour({ type: 'plusDamageOpponent', value: opponent })}
                onPressMinusDamageOpponent={(opponent) => dispatchFour({ type: 'minusDamageOpponent', value: opponent })}
              />
            </View>
          </View>
        </View>
      </View>

      <Randomizer
        xPosition={xPosition}
        yPosition={yPosition}
        size={45}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  playerArea: {
    height: '50%',
    width: '50%',
    flexDirection: 'row'
  },
  playerAreaHalf: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

});
