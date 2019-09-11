import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
export default class ReducerScreen extends React.Component {
    render() {
        return (
            <View style={{ padding: 5, marginTop: 24 }}>
                <View>
                    <Button title="Go to Reducer" />
                </View>
            </View>
        );
    }
}