import * as React from 'react';
import { Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';

export default function CommanderDamage(props) {
  return (
    <View
      style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {/* opponent one */}
      <View style={{ flexDirection: 'row'}}>
        {/* <TouchableOpacity
          onPress={() => props.onPressMinusDamageOpponent("damageOpponentOne")}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}> - </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent("damageOpponentOne")}
          onLongPress={() => props.onLongPressDamageOpponent(props.player.damageOpponentOne)}
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
        {/* <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent("damageOpponentOne")}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white'}}> + </Text>
        </TouchableOpacity> */}
      </View>

      {/* opponent two */}
      <View style={{ flexDirection: 'row' }}>
        {/* <TouchableOpacity
          onPress={() => props.onPressMinusDamageOpponent("damageOpponentTwo")}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white'}}> - </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent("damageOpponentTwo")}
          onLongPress={() => props.onLongPressDamageOpponent(props.player.damageOpponentTwo)}
          style={{
            alignItems: 'center',
            backgroundColor: props.colorOpponentTwo,
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> {props.player.damageOpponentTwo} </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent("damageOpponentTwo")}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}> + </Text>
        </TouchableOpacity> */}
      </View>

      {/* opponent three */}
      <View style={{ flexDirection: 'row' }}>
        {/* <TouchableOpacity
          onPress={() => props.onPressMinusDamageOpponent("damageOpponentThree")}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}> - </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent("damageOpponentThree")}
          onLongPress={() => props.onLongPressDamageOpponent(props.player.damageOpponentThree)}
          style={{
            alignItems: 'center',
            backgroundColor: props.colorOpponentThree,
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> {props.player.damageOpponentThree} </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => props.onPressPlusDamageOpponent("damageOpponentThree")}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}> + </Text>
        </TouchableOpacity> */}
      </View>

    </View>
  )
}
