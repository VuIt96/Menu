import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default class Main extends React.Component {
    gotoAuthentication(){
        // const navigator = this.props.navigator;
        const { navigator } = this.props
        navigator.push({ name: 'Authentication' });
    }
    render() {
        return (
            <View>
                <Text>Hello</Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Goto Anthentication</Text>
                </TouchableOpacity>
            </View>
        );
    }
}