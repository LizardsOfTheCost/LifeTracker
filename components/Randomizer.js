import React, { useReducer } from 'react';
import { TouchableOpacity, Animated, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

import OptionItem from './OptionItem';


function optionReducer(state, action) {
    switch (action.type) {
        case 'select':
            changeMode()

            state.available.map((x, i) => {
                x.selected = (i === action.value) ? true : false;
            })

            return {
                ...state,
            }
        case 'minusLifeTotal':
            return {
                ...state,
                lifeTotal: state.lifeTotal - 1,
            }
        case 'plusDamageOpponent':
            return {
                ...state,
                lifeTotal: state.lifeTotal - 1,
                [action.value]: state[action.value] + 1,
            }
        case 'minusDamageOpponent':
            return {
                ...state,
                ...(state[action.value] > 0 && {
                    lifeTotal: state.lifeTotal + 1,
                    [action.value]: state[action.value] - 1,
                }),
            }
        default:
            break;
    }
    return state;
};

const mode = new Animated.Value(0);

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

const initialOptions = {
    available: [
        {
            icon: "location-arrow",
            selected: false,
        },
        {
            icon: "biohazard",
            selected: false,
        },
        {
            icon: "accessible-icon",
            selected: false,
        },
        {
            icon: "syringe",
            selected: false,
        },
        {
            icon: "dice-d20",
            selected: true,
        },
    ],
    coordinates: [
        {
            key: "left",
            horizontal: leftPosition,
            vertical: 0,
        },
        {
            key: "top",
            horizontal: 0,
            vertical: topPosition,
        },
        {
            key: "right",
            horizontal: rightPosition,
            vertical: 0,
        },
        {
            key: "bottom",
            horizontal: 0,
            vertical: bottomPosition,
        },
        // {
        //     key: "center",
        //     horizontal: 0,
        //     vertical: 0,
        // },
    ],
}

function calcSettings(props) {
    let paddingMultiplyer = 1.5;

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

    const [options, dispatchOptions] = useReducer(optionReducer, initialOptions);

    const optionItems = options.available.filter(a => !a.selected)
    // .map((b, i) => {
    //     return <OptionItem key={i} icon={b.icon} coordinates={options.coordinates[i]} settins={dynamicSettings} />
    // })

    return (
        <View style={{ position: "absolute", alignItems: "center" }}>
            {/* {optionItems} */}
            <Animated.View style={{ position: "absolute", left: options.coordinates[0].horizontal, top: options.coordinates[0].vertical }} >
                <View style={[
                    styles.button,
                    { width: dynamicSettings.width },
                    { height: dynamicSettings.height },
                    { top: dynamicSettings.yPosition },
                    { left: dynamicSettings.xPosition },
                    { borderRadius: dynamicSettings.borderRadius },
                ]}>
                    <TouchableOpacity onPress={() => dispatchOptions({ type: 'select', value: 0 })}>
                        <Animated.View>
                            <FontAwesome5 name={optionItems[0].icon} size={dynamicSettings.generalSize} color="#FFF" />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: options.coordinates[1].horizontal, top: options.coordinates[1].vertical }} >
                <View style={[
                    styles.button,
                    { width: dynamicSettings.width },
                    { height: dynamicSettings.height },
                    { top: dynamicSettings.yPosition },
                    { left: dynamicSettings.xPosition },
                    { borderRadius: dynamicSettings.borderRadius },
                ]}>
                    <TouchableOpacity onPress={() => dispatchOptions({ type: 'select', value: 1 })}>
                        <Animated.View>
                            <FontAwesome5 name={optionItems[1].icon} size={dynamicSettings.generalSize} color="#FFF" />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: options.coordinates[2].horizontal, top: options.coordinates[2].vertical }} >
                <View style={[
                    styles.button,
                    { width: dynamicSettings.width },
                    { height: dynamicSettings.height },
                    { top: dynamicSettings.yPosition },
                    { left: dynamicSettings.xPosition },
                    { borderRadius: dynamicSettings.borderRadius },
                ]}>
                    <TouchableOpacity onPress={() => dispatchOptions({ type: 'select', value: 2 })}>
                        <Animated.View>
                            <FontAwesome5 name={optionItems[2].icon} size={dynamicSettings.generalSize} color="#FFF" />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: options.coordinates[3].horizontal, top: options.coordinates[3].vertical }} >
                <View style={[
                    styles.button,
                    { width: dynamicSettings.width },
                    { height: dynamicSettings.height },
                    { top: dynamicSettings.yPosition },
                    { left: dynamicSettings.xPosition },
                    { borderRadius: dynamicSettings.borderRadius },
                ]}>
                    <TouchableOpacity onPress={() => dispatchOptions({ type: 'select', value: 3 })}>
                        <Animated.View>
                            <FontAwesome5 name={optionItems[3].icon} size={dynamicSettings.generalSize} color="#FFF" />
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </Animated.View>

            <Animated.View style={{ position: "absolute", top: 0, left: 0 }} >
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
                            <FontAwesome5 name={options.available.find(a => a.selected).icon} size={dynamicSettings.generalSize} color="#FFF" />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
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