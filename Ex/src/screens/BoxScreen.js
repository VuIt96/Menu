import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
export default class BoxScreen extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.viewinput}>
                    <View style={styles.viewtext}>
                        <Text style={styles.text}>Box Screen</Text>
                    </View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewinput: {
        height: 200,
        borderWidth: 10,
        borderColor: 'black'
    },
    viewtext: {
        margin: 40,
        height: 100,
        width: 250,
        borderWidth: 10,
        borderColor: 'red',
    },
    text: {
        margin: 20
    }

});