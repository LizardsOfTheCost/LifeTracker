import * as React from 'react';
import { Text, TouchableOpacity, Animated, View, ColorPropType } from 'react-native';
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function LifeTotal(props) {
  return (
    <View
      style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => props.onPressMinus(props.player.id)}
        style={{
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <Animated.View>
          <AntDesign name="minus" size={24} color="#FFF" />
        </Animated.View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={props.onPressLifeTotal}
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'white',
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <Text style={{
          color: 'white',
          fontSize: 48,
          paddingBottom: 5
        }}>{props.player.lifeTotal}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => props.onPressPlus(props.player.id)} 
        style={{
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <Animated.View>
          <AntDesign name="plus" size={24} color="#FFF" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  )
}
