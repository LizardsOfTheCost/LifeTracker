import * as React from 'react';
import { TouchableHighlight, TouchableOpacity, Animated, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";


const mode = new Animated.Value(0);

const options = {
    available: [
        {
            icon: "location-arrow",
        },
        {
            icon: "biohazard",
        },
        {
            icon: "accessible-icon",
        },
        {
            icon: "syringe",
        },
    ],
    coordinates: [

    ],
    selected: {
        icon: "dice-d20",
    },
}

const leftPosition = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100]
})

const topPosition = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100]
})

const rightPosition = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100]
})

const bottomPosition = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100]
})

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

function handleLongPress() {
    changeMode()
}

function changeMode() {
    Animated.sequence([
        Animated.timing(mode, {
            toValue: mode._value === 0 ? 1 : 0
        })
    ]).start()
}

export default function Randomizer(props) {

    const dynamicSettings = calcSettings(props);

    return (
        <View style={{ position: "absolute", alignItems: "center" }}>
            <Animated.View style={{ position: "absolute", left: leftPosition }} >
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
            <Animated.View style={{ position: "absolute", top: topPosition }} >
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
            <Animated.View style={{ position: "absolute", left: rightPosition }} >
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
            <Animated.View style={{ position: "absolute", top: bottomPosition }} >
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
                <TouchableOpacity onLongPress={handleLongPress} underlayColor="#805618">
                    <Animated.View>
                        <FontAwesome5 name={options.selected.icon} size={dynamicSettings.generalSize} color="#FFF" />
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