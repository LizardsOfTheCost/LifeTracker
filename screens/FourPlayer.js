// import * as React from 'react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import LifeTotal from '../components/LifeTotal';
import CommanderDamage from '../components/CommanderDamage';

export default function FourPlayer() {

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

  function onPressMinusDamageOpponentOne(mPlayer) {
    if (mPlayer.damageOpponentOne > 0) {
      eval(mPlayer.event)({
        ...mPlayer,
        lifeTotal: mPlayer.lifeTotal + 1,
        damageOpponentOne: mPlayer.damageOpponentOne - 1
      })
    }
  }

  function onPressPlusDamageOpponentOne(mPlayer) {
    eval(mPlayer.event)({
      ...mPlayer,
      lifeTotal: mPlayer.lifeTotal - 1,
      damageOpponentOne: mPlayer.damageOpponentOne + 1
    })
  }

  function onPressMinusDamageOpponentTwo(mPlayer) {
    if (mPlayer.damageOpponentTwo > 0) {
      eval(mPlayer.event)({
        ...mPlayer,
        lifeTotal: mPlayer.lifeTotal + 1,
        damageOpponentTwo: mPlayer.damageOpponentTwo - 1
      })
    }
  }

  function onPressPlusDamageOpponentTwo(mPlayer) {
    eval(mPlayer.event)({
      ...mPlayer,
      lifeTotal: mPlayer.lifeTotal - 1,
      damageOpponentTwo: mPlayer.damageOpponentTwo + 1
    })
  }

  function onPressMinusDamageOpponentThree(mPlayer) {
    if (mPlayer.damageOpponentThree > 0) {
      eval(mPlayer.event)({
        ...mPlayer,
        lifeTotal: mPlayer.lifeTotal + 1,
        damageOpponentThree: mPlayer.damageOpponentThree - 1
      })
    }
  }

  function onPressPlusDamageOpponentThree(mPlayer) {
    eval(mPlayer.event)({
      ...mPlayer,
      lifeTotal: mPlayer.lifeTotal - 1,
      damageOpponentThree: mPlayer.damageOpponentThree + 1
    })
  }


  return (
    <View
      style={styles.screen}>

      {/* Top Left */}

      <View
        style={[styles.playerArea, { backgroundColor: playerOne.backgroundColor }]}>
        <View style={styles.playerAreaHalf}>
          <View
            style={{
              transform: [{ rotate: "90deg" }]
            }}>
            <CommanderDamage
              colorOpponentOne={playerTwo.backgroundColor}
              damageOpponentOne={playerOne.damageOpponentOne}
              onPressMinusDamageOpponentOne={() => onPressMinusDamageOpponentOne(playerOne)}
              onPressPlusDamageOpponentOne={() => onPressPlusDamageOpponentOne(playerOne)}
              colorOpponentTwo={playerFour.backgroundColor}
              damageOpponentTwo={playerOne.damageOpponentTwo}
              onPressMinusDamageOpponentTwo={() => onPressMinusDamageOpponentTwo(playerOne)}
              onPressPlusDamageOpponentTwo={() => onPressPlusDamageOpponentTwo(playerOne)}
              colorOpponentThree={playerThree.backgroundColor}
              damageOpponentThree={playerOne.damageOpponentThree}
              onPressMinusDamageOpponentThree={() => onPressMinusDamageOpponentThree(playerOne)}
              onPressPlusDamageOpponentThree={() => onPressPlusDamageOpponentThree(playerOne)}
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
              onPressPlus={() => onPressPlusLifeTotal(playerOne)}
              onPressMinus={() => onPressMinusLifeTotal(playerOne)}
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
              colorOpponentOne={playerFour.backgroundColor}
              damageOpponentOne={playerTwo.damageOpponentOne}
              onPressMinusDamageOpponentOne={() => onPressMinusDamageOpponentOne(playerTwo)}
              onPressPlusDamageOpponentOne={() => onPressPlusDamageOpponentOne(playerTwo)}
              colorOpponentTwo={playerThree.backgroundColor}
              damageOpponentTwo={playerTwo.damageOpponentTwo}
              onPressMinusDamageOpponentTwo={() => onPressMinusDamageOpponentTwo(playerTwo)}
              onPressPlusDamageOpponentTwo={() => onPressPlusDamageOpponentTwo(playerTwo)}
              colorOpponentThree={playerOne.backgroundColor}
              damageOpponentThree={playerTwo.damageOpponentThree}
              onPressMinusDamageOpponentThree={() => onPressMinusDamageOpponentThree(playerTwo)}
              onPressPlusDamageOpponentThree={() => onPressPlusDamageOpponentThree(playerTwo)}
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
              colorOpponentOne={playerOne.backgroundColor}
              damageOpponentOne={playerThree.damageOpponentOne}
              onPressMinusDamageOpponentOne={() => onPressMinusDamageOpponentOne(playerThree)}
              onPressPlusDamageOpponentOne={() => onPressPlusDamageOpponentOne(playerThree)}
              colorOpponentTwo={playerTwo.backgroundColor}
              damageOpponentTwo={playerThree.damageOpponentTwo}
              onPressMinusDamageOpponentTwo={() => onPressMinusDamageOpponentTwo(playerThree)}
              onPressPlusDamageOpponentTwo={() => onPressPlusDamageOpponentTwo(playerThree)}
              colorOpponentThree={playerFour.backgroundColor}
              damageOpponentThree={playerThree.damageOpponentThree}
              onPressMinusDamageOpponentThree={() => onPressMinusDamageOpponentThree(playerThree)}
              onPressPlusDamageOpponentThree={() => onPressPlusDamageOpponentThree(playerThree)}
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
              colorOpponentOne={playerThree.backgroundColor}
              damageOpponentOne={playerFour.damageOpponentOne}
              onPressMinusDamageOpponentOne={() => onPressMinusDamageOpponentOne(playerFour)}
              onPressPlusDamageOpponentOne={() => onPressPlusDamageOpponentOne(playerFour)}
              colorOpponentTwo={playerOne.backgroundColor}
              damageOpponentTwo={playerFour.damageOpponentTwo}
              onPressMinusDamageOpponentTwo={() => onPressMinusDamageOpponentTwo(playerFour)}
              onPressPlusDamageOpponentTwo={() => onPressPlusDamageOpponentTwo(playerFour)}
              colorOpponentThree={playerTwo.backgroundColor}
              damageOpponentThree={playerFour.damageOpponentThree}
              onPressMinusDamageOpponentThree={() => onPressMinusDamageOpponentThree(playerFour)}
              onPressPlusDamageOpponentThree={() => onPressPlusDamageOpponentThree(playerFour)}
            />
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
