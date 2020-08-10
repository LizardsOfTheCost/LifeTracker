import * as React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function OptionItem(props) {
    return (
        <Animated.View style={{ position: "absolute", left: props.horizontal, top: props.vertical }} >
            <View style={[
                styles.button,
                { width: props.settins.width },
                { height: props.settins.height },
                { top: props.settins.yPosition },
                { left: props.settins.xPosition },
                { borderRadius: props.settins.borderRadius },
            ]}>
                <TouchableOpacity>
                    <Animated.View>
                        <FontAwesome5 name={props.icon} size={props.settins.generalSize} color="#FFF" />
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