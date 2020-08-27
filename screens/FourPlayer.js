import React, { useState, useReducer } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, Button, Modal } from 'react-native';

import ValueHelper from '../components/ValueHelper';
import LifeTotal from '../components/LifeTotal';
import CommanderDamage from '../components/CommanderDamage';
import Randomizer from '../components/randomizer/Main';

function valueHelpReducer(state, action) {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        visible: true,
        initialValue: action.value.currentValue,
        finalValue: action.value.currentValue,
        attribute: action.value.attribute,
        playerId: action.value.playerId,
      }

    case 'change':
      return {
        ...state,
        finalValue: action.value.currentValue,
      }

    case 'close':
      return {
        ...state,
        visible: false
      }

    case 'save':
      state.callback(state);

      return {
        ...state,
        visible: false,
      }

    default:
      break;
  }
  return state;
};

function playerReducer(state, action) {
  switch (action.type) {
    case 'setValue':
      state.forEach(item => {
        if (item.id === action.value.playerId) {
          if (action.value.attribute === "lifeTotal") {
            item[action.value.attribute] = action.value.finalValue;
          } else {
            const newValue = (action.value.finalValue < 0) ? 0 : action.value.finalValue;
            const valDiff = parseInt(newValue) - item[action.value.attribute];

            item[action.value.attribute] = newValue;
            item.lifeTotal = item.lifeTotal + (valDiff * -1)
          }
        }
      })

      return [...state];

    case 'plusLifeTotal':
      state.forEach(item => {
        if (item.id === action.value.playerId) {
          item.lifeTotal = item.lifeTotal + 1;
        }
      })

      return [...state];

    case 'minusLifeTotal':
      state.forEach(item => {
        if (item.id === action.value.playerId) {
          item.lifeTotal = item.lifeTotal - 1;
        }
      })

      return [...state];

    case 'setDamageOpponent':
      state.forEach(item => {
        if (item.id === action.value.playerId) {
          // item[action.value.path] = item[action.value.opponent];
        }
      })

      return [...state];

    case 'plusDamageOpponent':
      state.forEach(item => {
        if (item.id === action.value.playerId) {
          item.lifeTotal = item.lifeTotal - 1;
          item[action.value.opponent] = item[action.value.opponent] + 1;
        }
      })

      return [...state];

    case 'minusDamageOpponent':
      state.forEach(item => {
        if (item.id === action.value.playerId) {
          item.lifeTotal = item.lifeTotal + 1;
          item[action.value.opponent] = item[action.value.opponent] - 1;
        }
      })

      return [...state];

    default:
      break;
  }
  return state;
};

// Calculate Randomizer Coordinates
let { width, height } = Dimensions.get('window')
let xPosition = width / 2;
let yPosition = height / 2;

const playerSettings = [
  {
    id: "one",
    lifeTotal: 40,
    commanderTax: 0,
    damageOpponentOne: 0,
    damageOpponentTwo: 0,
    damageOpponentThree: 0,
    backgroundColor: "darkred"
  },
  {
    id: "two",
    lifeTotal: 40,
    commanderTax: 0,
    damageOpponentOne: 0,
    damageOpponentTwo: 0,
    damageOpponentThree: 0,
    backgroundColor: "darkblue"
  },
  {
    id: "three",
    lifeTotal: 40,
    commanderTax: 0,
    damageOpponentOne: 0,
    damageOpponentTwo: 0,
    damageOpponentThree: 0,
    backgroundColor: "darkgreen"
  },
  {
    id: "four",
    lifeTotal: 40,
    commanderTax: 0,
    damageOpponentOne: 0,
    damageOpponentTwo: 0,
    damageOpponentThree: 0,
    backgroundColor: "black"
  },
];



export default function FourPlayer() {

  const [players, dispatchPlayers] = useReducer(playerReducer, playerSettings)

  const valueHelperSettings = {
    visible: false,
    rotation: "",
    initialValue: 67,
    finalValue: 89,
    attribute: "",
    playerId: "",
    callback: (vals) => dispatchPlayers({ type: 'setValue', value: vals }),
  }


  const [valueHelp, dispatchValueHelper] = useReducer(valueHelpReducer, valueHelperSettings);

  return (

    <View
      style={{ height: '100%' }}>

      <ValueHelper
        settings={valueHelp}

        onChangeValue={(currentValue) => dispatchValueHelper({
          type: 'change',
          value: {
            currentValue: currentValue,
          }
        })}
        onPressSave={() => dispatchValueHelper({ type: 'save' })}
        onPressClose={() => dispatchValueHelper({ type: 'close' })} />

      <View
        style={styles.screen}>

        {/* Player 1 - Top Left */}

        <View
          style={[styles.playerArea, { backgroundColor: players[0].backgroundColor }]}>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <CommanderDamage
                player={players[0]}
                colorOpponentOne={players[1].backgroundColor}
                colorOpponentTwo={players[3].backgroundColor}
                colorOpponentThree={players[2].backgroundColor}
                onPressPlusDamageOpponent={(playerId, opponent) => dispatchPlayers({
                  type: 'plusDamageOpponent',
                  value: {
                    playerId: playerId,
                    opponent: opponent
                  }
                })}
                onLongPressDamageOpponent={(playerId, currentValue, attribute) => dispatchValueHelper({
                  type: 'open',
                  value: {
                    playerId: playerId,
                    currentValue: currentValue,
                    attribute: attribute,
                  }
                })}
              />
            </View>
          </View>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-end' }]}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              {/* onPressLifeTotal={() => toggleModalVisible()} */}
              <LifeTotal
                player={players[0]}
                onPressPlus={(playerId) => dispatchPlayers({
                  type: 'plusLifeTotal',
                  value: {
                    playerId: playerId,
                  }
                })}
                onPressMinus={(playerId) => dispatchPlayers({
                  type: 'minusLifeTotal',
                  value: {
                    playerId: playerId,
                  }
                })}
              />
            </View>
          </View>
        </View>

        {/* Top Right */}

        <View
          style={[styles.playerArea, { backgroundColor: players[1].backgroundColor }]}>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-start' }]}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <LifeTotal
                player={players[1]}
                onPressPlus={(playerId) => dispatchPlayers({
                  type: 'plusLifeTotal',
                  value: {
                    playerId: playerId,
                  }
                })}
                onPressMinus={(playerId) => dispatchPlayers({
                  type: 'minusLifeTotal',
                  value: {
                    playerId: playerId,
                  }
                })}
              />
            </View>
          </View>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <CommanderDamage
                player={players[1]}
                colorOpponentOne={players[3].backgroundColor}
                colorOpponentTwo={players[2].backgroundColor}
                colorOpponentThree={players[0].backgroundColor}
                onPressPlusDamageOpponent={(playerId, opponent) => dispatchPlayers({
                  type: 'plusDamageOpponent',
                  value: {
                    playerId: playerId,
                    opponent: opponent
                  }
                })}
              />
            </View>
          </View>
        </View>

        {/* Bottom Left */}

        <View
          style={[styles.playerArea, { backgroundColor: players[2].backgroundColor }]}>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <CommanderDamage
                player={players[2]}
                colorOpponentOne={players[0].backgroundColor}
                colorOpponentTwo={players[1].backgroundColor}
                colorOpponentThree={players[3].backgroundColor}
                onPressPlusDamageOpponent={(playerId, opponent) => dispatchPlayers({
                  type: 'plusDamageOpponent',
                  value: {
                    playerId: playerId,
                    opponent: opponent
                  }
                })}
              />
            </View>
          </View>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-end' }]}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <LifeTotal
                player={players[2]}
                onPressPlus={(playerId) => dispatchPlayers({
                  type: 'plusLifeTotal',
                  value: {
                    playerId: playerId,
                  }
                })}
                onPressMinus={(playerId) => dispatchPlayers({
                  type: 'minusLifeTotal',
                  value: {
                    playerId: playerId,
                  }
                })}
              />
            </View>
          </View>
        </View>

        {/* Bottom Right */}

        <View
          style={[styles.playerArea, { backgroundColor: players[3].backgroundColor }]}>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-start' }]}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <LifeTotal
                player={players[3]}
                onPressPlus={(playerId) => dispatchPlayers({
                  type: 'plusLifeTotal',
                  value: {
                    playerId: playerId,
                  }
                })}
                onPressMinus={(playerId) => dispatchPlayers({
                  type: 'minusLifeTotal',
                  value: {
                    playerId: playerId,
                  }
                })}
              />
            </View>
          </View>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <CommanderDamage
                player={players[3]}
                colorOpponentOne={players[2].backgroundColor}
                colorOpponentTwo={players[0].backgroundColor}
                colorOpponentThree={players[1].backgroundColor}
                onPressPlusDamageOpponent={(playerId, opponent) => dispatchPlayers({
                  type: 'plusDamageOpponent',
                  value: {
                    playerId: playerId,
                    opponent: opponent
                  }
                })}
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
