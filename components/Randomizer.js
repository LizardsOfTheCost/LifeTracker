import * as React from 'react';
import { TouchableHighlight, TouchableOpacity, Animated, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";


const mode = new Animated.Value(0);

function calcSettings(props) {
    let paddingMultiplyer = 1.25;

    let generalSize = props.size;
    let width = generalSize * paddingMultiplyer;
    let height = generalSize * paddingMultiplyer;
    let borderRadius = width / 2;
    let xPosition = props.xPosition - (width / 2);
    let yPosition = props.yPosition - (height / 2);

    return {
        width: width,
        height: height,
        borderRadius: borderRadius,
        xPosition: xPosition,
        yPosition: yPosition,
        generalSize: generalSize,
    }
}

function handlePress() {
    Animated.sequence([
        Animated.timing(mode, {
            toValue: mode._value === 0 ? 1 : 0
        })
    ]).start()
}

export default function Randomizer(props) {

    const dynamicSettings = calcSettings(props);

    const arrowX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -100]
    })

    const chairX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100]
    })

    const bioY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -100]
    })

    const syringeY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100]
    })

    return (
        <View style={{ position: "absolute", alignItems: "center" }}>
            <Animated.View style={{ position: "absolute", left: arrowX }} >
                <View style={[
                    styles.button,
                    { width: dynamicSettings.width },
                    { height: dynamicSettings.height },
                    { top: dynamicSettings.yPosition },
                    { left: dynamicSettings.xPosition },
                    { borderRadius: dynamicSettings.borderRadius },
                ]}>
                    <FontAwesome5 name="location-arrow" size={dynamicSettings.generalSize / 1.5} color="#FFF" />
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", top: bioY }} >
                <View style={[
                    styles.button,
                    { width: dynamicSettings.width },
                    { height: dynamicSettings.height },
                    { top: dynamicSettings.yPosition },
                    { left: dynamicSettings.xPosition },
                    { borderRadius: dynamicSettings.borderRadius },
                ]}>
                    <FontAwesome5 name="biohazard" size={dynamicSettings.generalSize / 1.5} color="#FFF" />
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: chairX }} >
                <View style={[
                    styles.button,
                    { width: dynamicSettings.width },
                    { height: dynamicSettings.height },
                    { top: dynamicSettings.yPosition },
                    { left: dynamicSettings.xPosition },
                    { borderRadius: dynamicSettings.borderRadius },
                ]}>
                    <FontAwesome5 name="accessible-icon" size={dynamicSettings.generalSize / 1.5} color="#FFF" />
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", top: syringeY }} >
                <View style={[
                    styles.button,
                    { width: dynamicSettings.width },
                    { height: dynamicSettings.height },
                    { top: dynamicSettings.yPosition },
                    { left: dynamicSettings.xPosition },
                    { borderRadius: dynamicSettings.borderRadius },
                ]}>
                    <FontAwesome5 name="syringe" size={dynamicSettings.generalSize / 1.5} color="#FFF" />
                </View>
            </Animated.View>
            
            <Animated.View style={[
                styles.button,
                { width: dynamicSettings.width },
                { height: dynamicSettings.height },
                { top: dynamicSettings.yPosition },
                { left: dynamicSettings.xPosition },
                { borderRadius: dynamicSettings.borderRadius },
            ]}>
                <TouchableOpacity onPress={handlePress} underlayColor="#805618">
                    <Animated.View>
                        <FontAwesome5 name="dice-d20" size={dynamicSettings.generalSize} color="#FFF" />
                    </Animated.View>
                </TouchableOpacity>
            </Animated.View>
        </View >
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

/**
 * To Add:
 *  - d20
 *  - d4
 *  - d3
 *  - Coin
 *  - Arrow (spinning / pointing)
 */