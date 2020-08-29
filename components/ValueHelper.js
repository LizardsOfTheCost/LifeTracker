
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Modal } from 'react-native';

export default function ValueHelper(props) {
    return (
        <Modal
            animationType="slide" // maybe fade?
            transparent={true} // !fullscreen 
            visible={props.settings.visible}
        // onRequestClose={() => {
        //     Alert.alert("Modal has been closed.");
        // }}
        >
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                // transform: [{ rotate: "90deg" }],
            }}>
                <View style={{
                    margin: 20,
                    backgroundColor: "black",
                    borderRadius: 20,
                    padding: 15,
                    // alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                }}>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{

                            width: 65,
                            padding: 10,
                            color: "white",
                            fontWeight: "bold",
                            textAlignVertical: "center",
                            textAlign: "center"

                        }}>{props.settings.initialValue}</Text>

                        <TextInput
                            style={{
                                backgroundColor: "gray",
                                borderRadius: 5,
                                width: 65,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}
                            keyboardType="number-pad"
                            onChangeText={value => props.onChangeValue(parseInt(value))}
                            value={(props.settings.finalValue).toString()}
                        />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableHighlight
                            style={{
                                borderRadius: 5,
                                width: 65,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "#2196F3"
                            }}
                            onPress={() => props.onChangeValue(parseInt(props.settings.finalValue) - 1)}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>- 1</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{
                                borderRadius: 5,
                                width: 65,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "#2196F3"
                            }}
                            onPress={() => props.onChangeValue(parseInt(props.settings.finalValue) + 1)}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>+ 1</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableHighlight
                            style={{
                                borderRadius: 5,
                                width: 65,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "#2196F3"
                            }}
                            onPress={() => props.onChangeValue(parseInt(props.settings.finalValue) - 5)}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>- 5</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{
                                borderRadius: 5,
                                width: 65,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "#2196F3"
                            }}
                            onPress={() => props.onChangeValue(parseInt(props.settings.finalValue) + 5)}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>+ 5</Text>
                        </TouchableHighlight>
                    </View>

                    {/* <View style={{ flexDirection: "row" }}>
                        <TouchableHighlight
                            style={{
                                borderRadius: 5,
                                width: 65,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "#2196F3"
                            }}
                            onPress={() => props.onChangeValue(parseInt(props.settings.finalValue) - 10)}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>- 10</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{
                                borderRadius: 5,
                                width: 65,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "#2196F3"
                            }}
                            onPress={() => props.onChangeValue(parseInt(props.settings.finalValue) + 10)}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>+ 10</Text>
                        </TouchableHighlight>
                    </View> */}

                    <View style={{ flexDirection: "row" }}>
                        <TouchableHighlight
                            style={{
                                borderRadius: 5,
                                width: 65,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "darkred"
                            }}
                            onPress={() => props.onPressClose()}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>Cancel</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{
                                borderRadius: 5,
                                width: 65,
                                padding: 10,
                                elevation: 2,
                                backgroundColor: "darkgreen"
                            }}
                            onPress={() => props.onPressSave(props.settings.finalValue)}
                        >
                            <Text style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>Save</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        </Modal>
    )
}