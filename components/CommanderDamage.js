import * as React from 'react';
import { Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';

export default function CommanderDamage(props) {
  return (
    <View
      style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {/* opponent one */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent(props.player.id, "damageOpponentOne")}
          onLongPress={() => props.onLongPressDamageOpponent(
            props.player.id,
            props.player.damageOpponentOne,
            "damageOpponentOne",
          )}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.colorOpponentOne,
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> {props.player.damageOpponentOne} </Text>
        </TouchableOpacity>
      </View>

      {/* opponent two */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent(props.player.id, "damageOpponentTwo")}
          onLongPress={() => props.onLongPressDamageOpponent(
            props.player.id,
            props.player.damageOpponentOne,
            "damageOpponentTwo",
          )}
          style={{
            alignItems: 'center',
            backgroundColor: props.colorOpponentTwo,
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> {props.player.damageOpponentTwo} </Text>
        </TouchableOpacity>
      </View>

      {/* opponent three */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent(props.player.id, "damageOpponentThree")}
          onLongPress={() => props.onLongPressDamageOpponent(
            props.player.id,
            props.player.damageOpponentOne,
            "damageOpponentThree",
          )}
          style={{
            alignItems: 'center',
            backgroundColor: props.colorOpponentThree,
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> {props.player.damageOpponentThree} </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
