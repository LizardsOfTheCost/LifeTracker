// import * as React from 'react';
import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Modal } from 'react-native';

import LifeTotal from '../components/LifeTotal';
import CommanderDamage from '../components/CommanderDamage';

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



const defaultSettings = {
  lifeTotal: 40,
  commanderTax: 0,
  poison: 0,
  poisonVisible: false,
  damageOpponentOne: 0,
  damageOpponentTwo: 0,
  damageOpponentThree: 0,
};

export default function FourPlayer() {

  const [one, dispatchOne] = useReducer(playerReducer, defaultSettings);

  const [playerOne, setPlayerOne] = useState({
    lifeTotal: 40,
    commanderTax: 0,
    poison: 0,
    poisonVisible: false,
    damageOpponentOne: 0,
    damageOpponentTwo: 0,
    damageOpponentThree: 0,
    event: "setPlayerOne",
    backgroundColor: "darkred"
  });

  const [playerTwo, setPlayerTwo] = useState({
    lifeTotal: 40,
    commanderTax: 0,
    poison: 0,
    poisonVisible: false,
    damageOpponentOne: 0,
    damageOpponentTwo: 0,
    damageOpponentThree: 0,
    event: "setPlayerTwo",
    backgroundColor: "darkblue"
  });

  const [playerThree, setPlayerThree] = useState({
    lifeTotal: 40,
    commanderTax: 0,
    poison: 0,
    poisonVisible: false,
    damageOpponentOne: 0,
    damageOpponentTwo: 0,
    damageOpponentThree: 0,
    event: "setPlayerThree",
    backgroundColor: "darkgreen"
  });

  const [playerFour, setPlayerFour] = useState({
    lifeTotal: 40,
    commanderTax: 0,
    poison: 0,
    poisonVisible: false,
    damageOpponentOne: 0,
    damageOpponentTwo: 0,
    damageOpponentThree: 0,
    event: "setPlayerFour",
    backgroundColor: "black"
  });

  function onPressMinusLifeTotal(mPlayer) {
    eval(mPlayer.event)({
      ...mPlayer,
      lifeTotal: mPlayer.lifeTotal - 1
    })
  }

  function onPressPlusLifeTotal(mPlayer) {
    eval(mPlayer.event)({
      ...mPlayer,
      lifeTotal: mPlayer.lifeTotal + 1
    })
  }

  function onPressMinusDamageOpponent(mPlayer, sOpponent) {
    if (mPlayer[sOpponent] > 0) {
      eval(mPlayer.event)({
        ...mPlayer,
        lifeTotal: mPlayer.lifeTotal + 1,
        [sOpponent]: mPlayer[sOpponent] - 1
      })
    }
  }

  function onPressPlusDamageOpponent(mPlayer, sOpponent) {
    eval(mPlayer.event)({
      ...mPlayer,
      lifeTotal: mPlayer.lifeTotal - 1,
      [sOpponent]: mPlayer[sOpponent] + 1
    })
  }

  return (
    <View
      style={{ height: '100%' }}>

      <View
        style={styles.screen}>

        {/* Player 1 - Top Left */}

        <View
          style={[styles.playerArea, { backgroundColor: playerOne.backgroundColor }]}>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <CommanderDamage
                colorOpponentOne={playerTwo.backgroundColor}
                damageOpponentOne={one.damageOpponentOne}
                colorOpponentTwo={playerFour.backgroundColor}
                damageOpponentTwo={one.damageOpponentTwo}
                colorOpponentThree={playerThree.backgroundColor}
                damageOpponentThree={one.damageOpponentThree}
                onPressPlusDamageOpponent={(opponent) => dispatchOne({ type: 'plusDamageOpponent', value: opponent })}
                onPressMinusDamageOpponent={(opponent) => dispatchOne({ type: 'minusDamageOpponent', value: opponent })}
              />
            </View>
          </View>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-end' }]}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <LifeTotal
                lifeTotal={one.lifeTotal}
                // onPressLifeTotal={() => toggleModalVisible()}
                onPressPlus={() => dispatchOne({ type: 'plusLifeTotal' })}
                onPressMinus={() => dispatchOne({ type: 'minusLifeTotal' })}

              />
            </View>
          </View>
        </View>

        {/* Top Right */}

        <View
          style={[styles.playerArea, { backgroundColor: playerTwo.backgroundColor }]}>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-start' }]}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <LifeTotal
                lifeTotal={playerTwo.lifeTotal}
                onPressPlus={() => onPressPlusLifeTotal(playerTwo)}
                onPressMinus={() => onPressMinusLifeTotal(playerTwo)}
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
                colorOpponentOne={playerFour.backgroundColor}
                damageOpponentOne={playerTwo.damageOpponentOne}
                colorOpponentTwo={playerThree.backgroundColor}
                damageOpponentTwo={playerTwo.damageOpponentTwo}
                colorOpponentThree={playerOne.backgroundColor}
                damageOpponentThree={playerTwo.damageOpponentThree}
                onPressMinusDamageOpponent={(player, opponent) => onPressMinusDamageOpponent(player, opponent)}
                onPressPlusDamageOpponent={(player, opponent) => onPressPlusDamageOpponent(player, opponent)}
              />
            </View>
          </View>
        </View>

        {/* Bottom Left */}

        <View
          style={[styles.playerArea, { backgroundColor: playerThree.backgroundColor }]}>
          <View style={styles.playerAreaHalf}>
            <View
              style={{
                transform: [{ rotate: "90deg" }]
              }}>
              <CommanderDamage
                player={playerThree}
                colorOpponentOne={playerOne.backgroundColor}
                damageOpponentOne={playerThree.damageOpponentOne}
                colorOpponentTwo={playerTwo.backgroundColor}
                damageOpponentTwo={playerThree.damageOpponentTwo}
                colorOpponentThree={playerFour.backgroundColor}
                damageOpponentThree={playerThree.damageOpponentThree}
                onPressMinusDamageOpponent={(player, opponent) => onPressMinusDamageOpponent(player, opponent)}
                onPressPlusDamageOpponent={(player, opponent) => onPressPlusDamageOpponent(player, opponent)}
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
                onPressPlus={() => onPressPlusLifeTotal(playerThree)}
                onPressMinus={() => onPressMinusLifeTotal(playerThree)}
              />
            </View>
          </View>
        </View>

        {/* Bottom Right */}

        <View
          style={[styles.playerArea, { backgroundColor: playerFour.backgroundColor }]}>
          <View style={[styles.playerAreaHalf, { alignItems: 'flex-start' }]}>
            <View
              style={{
                transform: [{ rotate: "-90deg" }]
              }}>
              <LifeTotal
                lifeTotal={playerFour.lifeTotal}
                onPressPlus={() => onPressPlusLifeTotal(playerFour)}
                onPressMinus={() => onPressMinusLifeTotal(playerFour)}
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
                colorOpponentOne={playerThree.backgroundColor}
                damageOpponentOne={playerFour.damageOpponentOne}
                colorOpponentTwo={playerOne.backgroundColor}
                damageOpponentTwo={playerFour.damageOpponentTwo}
                colorOpponentThree={playerTwo.backgroundColor}
                damageOpponentThree={playerFour.damageOpponentThree}
                onPressMinusDamageOpponent={(player, opponent) => onPressMinusDamageOpponent(player, opponent)}
                onPressPlusDamageOpponent={(player, opponent) => onPressPlusDamageOpponent(player, opponent)}
              />
            </View>
          </View>
        </View>

      </View>
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
