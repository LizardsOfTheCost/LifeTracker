
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native';



export default function ValueHelper(props) {

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
                // transform: props.settings.rotation
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
                    }}>Hello World!</Text>

                    <TouchableHighlight
                        style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: "#2196F3"
                        }}
                        onPress={() => props.onPressClose() }
                    >
                        <Text style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}