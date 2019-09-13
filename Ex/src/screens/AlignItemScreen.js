import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class AlignItemScreen extends React.Component {
    render() {
        return (
            <View style={styles.viewinput}>
                <View style={styles.viewText1}>
                    <Text>Text1</Text>
                </View>
                <View style={styles.viewText2}>
                    <Text style={styles.text}>Text2</Text>
                </View>
                <View style={styles.viewText3}>
                    <Text style={styles.text} >Text3</Text>
                </View>
                <View style={styles.viewText4}>
                    <Text style={styles.text}>Text4</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewinput: {
        borderWidth: 5,
        borderColor: 'black'
    },
    viewText1: {
        alignItems: 'stretch',
        borderWidth: 3,
        borderColor: 'red',
    },
    viewText2: {
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'blue',
    },
    viewText3: {
        alignItems: 'flex-start',
        borderWidth: 3,
        borderColor: 'blue',
    },
    viewText4: {
        alignItems: 'flex-end',
        borderWidth: 3,
        borderColor: 'blue',
    },
    text: {
        borderWidth: 2,
        borderColor: 'red'
    }
});