import React from 'react';
import { TouchableOpacity, Animated, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function OptionItems(props) {
    return props.items.map(item =>
        <OptionItem
            key={item.id}
            option={item}
            settings={props.settings}
            onLongPress={props.onLongPress}
            onPress={(action) => props.onPress(action)}
        />);
}

function OptionItem(props) {
    return (
        <Animated.View style={{
            position: "absolute",
            left: props.option.coordinates.horizontal,
            top: props.option.coordinates.vertical
        }} >
            <View style={[
                styles.button,
                props.settings.position
            ]}>
                <TouchableOpacity onLongPress={props.onLongPress}
                    onPress={() => props.onPress({ type: 'select', payload: props.option.id })}>
                    <Animated.View>
                        <FontAwesome5 name={props.option.item.icon}
                            size={props.settings.size}
                            color="#FFF" />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#805618",
        borderColor: "#FFF",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
    }
})