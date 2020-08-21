
import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Modal } from 'react-native';

export default function ValueHelper(props) {

    function calculationReducer(state, action) {
        switch (action.type) {
            case 'manual':
                return {
                    ...state,
                    finalValue: action.value,
                }

            default:
                return state;
        }
    };

    const [values, dispatchValues] = useReducer(calculationReducer, props.settings);

    return (
        <Modal
            animationType="slide" // maybe fade?
            transparent={true} // !fullscreen 
            visible={props.settings.visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 22,
                // transform: [{ rotate: "90deg" }],
            }}>
                <View style={{
                    margin: 20,
                    backgroundColor: "white",
                    borderRadius: 20,
                    padding: 35,
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                }}>
                    <Text style={{
                        marginBottom: 15,
                        textAlign: "center"
                    }}>{props.settings.initialValue}</Text>

                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            marginBottom: 15,
                            textAlign: "center"
                        }}
                        // autoFocus={true}
                        keyboardType="number-pad"
                        onChangeText={text => dispatchValues({ type: 'manual', value: text })}
                        value={(values.finalValue).toString()}
                    />

{/* 
                    <Text style={{
                        marginBottom: 15,
                        textAlign: "center"
                    }}>{props.settings.finalValue}</Text> */}

                    <TouchableHighlight
                        style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: "#2196F3"
                        }}
                        onPress={() => props.onPressSave(props.settings.finalValue)}
                    >
                        <Text style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>Save</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: "#2196F3"
                        }}
                        onPress={() => props.onPressClose()}
                    >
                        <Text style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}