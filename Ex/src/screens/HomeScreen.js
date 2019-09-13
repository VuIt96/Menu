import React, { Component } from 'react';
import { View, Button } from 'react-native';
export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ padding: 5, marginTop: 24 }}>
                <View>
                    <Button title="Go to ChangeInfo" onPress={() => this.props.navigation.navigate('ChangeInfo')} />
                </View>
                <View style={{ marginTop: 2 }}>
                    <Button title="Go to ReducerEx2Screen" onPress={() => this.props.navigation.navigate('ReducerEx2Screen')} />
                </View>
                <View style={{ marginTop: 2 }}>
                    <Button title="Go to InputScreen" onPress={() => this.props.navigation.navigate('InputScreen')} />
                </View>
                <View style={{ marginTop: 2 }}>
                    <Button title="Go to BoxScreen" onPress={() => this.props.navigation.navigate('BoxScreen')} />
                </View>
                <View style={{ marginTop: 2 }}>
                    <Button title="Go to AlignItemScreen" onPress={() => this.props.navigation.navigate('AlignItemScreen')} />
                </View>
                <View style={{ marginTop: 2 }}>
                    <Button title="Go to KeyBoardPc" onPress={() => this.props.navigation.navigate('KeyBoardPc')} />
                </View>
                <View style={{ marginTop: 2 }}>
                    <Button title="Go to Login" onPress={() => this.props.navigation.navigate('Login')} />
                </View>
                <View style={{ marginTop: 2 }}>
                    <Button title="Go to FlexScreen" onPress={() => this.props.navigation.navigate('FlexScreen')} />
                </View>
            </View>
        );
    }

}
