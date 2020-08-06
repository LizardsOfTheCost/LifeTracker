import * as React from 'react';
import { TouchableHighlight, Animated, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

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

export default function Randomizer(props) {

    const dynamicSettings = calcSettings(props);

    return (
        <View style={{ position: "absolute", alignItems: "center" }}>
            <View style={[
                styles.button,
                { width: dynamicSettings.width },
                { height: dynamicSettings.height },
                { top: dynamicSettings.yPosition },
                { left: dynamicSettings.xPosition },
                { borderRadius: dynamicSettings.borderRadius },
            ]}>
                <TouchableHighlight underlayColor="#805618">
                    <View>
                        <FontAwesome5 name="dice-d20" size={dynamicSettings.generalSize} color="#FFF" />
                    </View>
                </TouchableHighlight>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "transparent",
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