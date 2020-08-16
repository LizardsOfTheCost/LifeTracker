import React, { useReducer } from 'react';
import { Animated, View } from 'react-native';

import OptionItems from './OptionItems';

function optionReducer(state, action) {
    switch (action.type) {
        case "select":
            let newState;

            if (mode._value) {
                const selectedItem = state.find(item => item.id === action.payload).item;
                const centeredItem = state.find(item => item.id === "center").item;

                newState = state.map(a => {
                    if (a.id === action.payload) {
                        a.item = centeredItem
                    }
                    if (a.id === "center") {
                        a.item = selectedItem
                    }

                    return a
                })
                changeMode();
            } else {
                newState = state;
            }

            return newState;
        default:
            return state;
    }
}

const mode = new Animated.Value(0);
const initialOptions = [
    {
        id: "left",
        coordinates: {
            horizontal: mode.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100]
            }),
            vertical: 0,
        },
        item: {
            id: "arrow",
            icon: "location-arrow",
        },
    },
    {
        id: "top",
        coordinates: {
            horizontal: 0,
            vertical: mode.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100]
            }),
        },
        item: {
            id: "biohazard",
            icon: "biohazard",
        },
    },
    {
        id: "right",
        coordinates: {
            horizontal: mode.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100]
            }),
            vertical: 0,
        },
        item: {
            id: "chair",
            icon: "accessible-icon",
        },
    },
    {
        id: "bottom",
        coordinates: {
            horizontal: 0,
            vertical: mode.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100]
            }),
        },
        item: {
            id: "syringe",
            icon: "syringe",
        },
    },
    {
        id: "center",
        coordinates: {
            horizontal: 0,
            vertical: 0,
        },
        item: {
            id: "dice",
            icon: "dice-d20",
        },
    },
];

function calcSettings(props) {
    let paddingMultiplyer = 1.5;

    let generalSize = props.size;
    let width = generalSize * paddingMultiplyer;
    let height = generalSize * paddingMultiplyer;
    let borderRadius = width / 2;
    let xPosition = props.xPosition - (width / 2);
    let yPosition = props.yPosition - (height / 2);

    return {
        position: {
            width: width,
            height: height,
            borderRadius: borderRadius,
            top: yPosition,
            left: xPosition,
        },
        size: generalSize
    }
}

function changeMode() {
    Animated.sequence([
        Animated.timing(mode, {
            toValue: mode._value === 0 ? 1 : 0
        })
    ]).start()
}

function handleLongPress() {
    changeMode()
}

export default function Main(props) {
    const dynamicSettings = calcSettings(props);

    const [options, dispatch] = useReducer(optionReducer, initialOptions);

    return (
        <View style={{ position: "absolute", alignItems: "center" }}>
            <OptionItems
                items={options}
                settings={dynamicSettings}
                onLongPress={handleLongPress}
                onPress={(action) => dispatch(action)}
            />
        </View >
    )
}