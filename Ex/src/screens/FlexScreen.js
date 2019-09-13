import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import Login from './Login';
export default class FlexScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewroot}>
                <View style={styles.viewText1}>
                    <Text style={styles.text}>Text 1</Text>
                </View>
                <View style={styles.viewText2}>
                    <Text style={styles.text}>Text 2</Text>
                </View>
                <View style={styles.viewText3}>
                    <Text style={styles.text} >Text 3</Text>
                </View>
                <View style={styles.viewText4}>
                    <Text style={styles.text}>Text 4</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewroot: {
        height: 300,
        borderColor: 'back',
        borderWidth: 3,
        flexDirection: 'row'
    },
    viewText1: {
        alignItems: 'stretch',
        borderWidth: 2,
        borderColor: 'blue',
    },
    viewText2: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        flexDirection: 'row'
    },
    viewText3: {
        alignItems: 'flex-start',
        borderWidth: 2,
        borderColor: 'blue',
        flexDirection: 'row'
    },
    viewText4: {
        alignItems: 'flex-end',
        borderWidth: 2,
        borderColor: 'blue',
        flexDirection: 'row'
    },
    text: {
        borderWidth: 2,
        borderColor: 'red'
    }
});