import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function CommanderDamage(props) {
  return (
    <View
      style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {/* opponent one */}
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={props.onPressMinusDamageOpponentOne}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={props.onPressDamageOpponentOne}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.colorOpponentOne,
            borderRadius: 10,
            padding: 10
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> {props.damageOpponentOne} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onPressPlusDamageOpponentOne}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white'}}> + </Text>
        </TouchableOpacity>
      </View>

      {/* opponent two */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={props.onPressMinusDamageOpponentTwo}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white'}}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={props.onPressDamageOpponentTwo}
          style={{
            alignItems: 'center',
            backgroundColor: props.colorOpponentTwo,
            borderRadius: 10,
            padding: 10
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> {props.damageOpponentTwo} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onPressPlusDamageOpponentTwo}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}> + </Text>
        </TouchableOpacity>
      </View>

      {/* opponent three */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={props.onPressMinusDamageOpponentThree}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={props.onPressDamageOpponentThree}
          style={{
            alignItems: 'center',
            backgroundColor: props.colorOpponentThree,
            borderRadius: 10,
            padding: 10
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> {props.damageOpponentThree} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onPressPlusDamageOpponentThree}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
          }}>
          <Text style={{ color: 'white' }}> + </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
