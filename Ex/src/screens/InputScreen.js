import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
export default class InputScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pass: 'PassWord  must be longer than 5 charaters',
            text: ''
        }
    }
    onTest = (typedText) => {
        if (this.state.text.value === 5) {
            this.setState({ text: typedText, pass: '' })
        }

    }
    render() {
        return (
            <View style={{ margin: 5 }}>

                <View>
                    <Text>Enter Name:</Text>
                </View>
                <View style={styles.viewinput}>
                    <TextInput
                        style={styles.input}
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}
                    />
                    <Text>My name is: {this.state.name} </Text>
                </View>

                <View>
                    <Text>Enter PassWord: </Text>
                </View>
                <View style={styles.viewinput}>
                    <TextInput style={styles.input}
                        value={this.state.text}
                        onChangeText={this.onTest}
                    />
                    <Text>{this.state.pass}</Text>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewinput: {
        margin: 15
    },
    input: {
        height: 40,
        width: 340,
        borderWidth: 1,
        borderColor: 'black'
    },
});