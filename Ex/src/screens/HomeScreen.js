import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ padding: 5, marginTop: 24 }}>
                <View>
                    <Button title="Go to Reducer" onPress={() => this.props.navigation.navigate('ReducerScreen')} />
                </View>
                <View style={{ marginTop: 2 }}>
                    <Button title="Go to Reducer" onPress={() => this.props.navigation.navigate('ReducerEx2Screen')} />
                </View>
            </View>
        );
    }
}