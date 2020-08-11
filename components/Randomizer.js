import React, { useReducer } from 'react';
import { TouchableOpacity, Animated, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

function optionReducer(state, action) {
    switch (action.type) {
        case "select":
            return state;
        default:
            return state;
    }
}

const Context = React.createContext();
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

export default function Randomizer(props) {
    const dynamicSettings = calcSettings(props);

    const [options, dispatch] = useReducer(optionReducer, initialOptions);

    return (
        <Context.Provider value={{ dispatch, dynamicSettings }}>
            <View style={{ position: "absolute", alignItems: "center" }}>
                <OptionItems items={options} />
                {/* <Animated.View style={{ position: "absolute" }} >
                    <Animated.View style={[
                        styles.button,
                        dynamicSettings.position
                    ]}>
                        <TouchableOpacity onLongPress={handleLongPress} underlayColor="#805618">
                            <Animated.View>
                                <FontAwesome5 name="syringe" size={dynamicSettings.size} color="#FFF" />
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View> */}
            </View >
        </Context.Provider>
    )
}

function OptionItems({ items }) {
    return items.map(item => <OptionItem key={item.id} {...item} />);
}

function OptionItem({ id, coordinates, item }) {
    return (
        <Context.Consumer>
            {optionContext => (
                <Animated.View style={{ position: "absolute", left: coordinates.horizontal, top: coordinates.vertical }} >
                    <View style={[
                        styles.button,
                        optionContext.dynamicSettings.position
                    ]}>
                        <TouchableOpacity onLongPress={handleLongPress}
                            onPress={() => optionContext.dispatch({ type: 'select', payload: id })}>
                            <Animated.View>
                                <FontAwesome5 name={item.icon}
                                    size={optionContext.dynamicSettings.size}
                                    color="#FFF" />
                            </Animated.View>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            )}
        </Context.Consumer>
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