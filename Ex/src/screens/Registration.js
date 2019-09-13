import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { firebaseApp } from '../components/firebase/FireBaseConfig';
export default class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pass: ''
        }
    }
    onRegistration = () => {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
            .then(() => {
                Alert.alert(
                    'Thông báo',
                    'Đăng ký thành công ' + this.state.email,
                    [{ text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                    { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },],
                    { cancelable: false }
                )
                this.setState({ email: '', pass: '' })
            })
            .catch(function (error) {
                Alert.alert(
                    'Thông báo',
                    'Đăng ký thất bại',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel', },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );
            });
    }
    render() {
        return (
            <View>
                <View style={styles.viewconten}>
                    <Text style={{ fontSize: 30, marginBottom: 30 }}>Đăng Ký</Text>
                </View>
                <View style={styles.viewconten}>
                    <Text>Nhập địa chỉ Email:</Text>
                    <TextInput
                        style={styles.inputtext}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </View >
                <View style={styles.viewconten}>
                    <Text>Nhập địa chỉ Pass:</Text>
                    <TextInput
                        style={styles.inputtext}
                        value={this.state.pass}
                        onChangeText={(pass) => this.setState({ pass })}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.viewconten}>
                    <TouchableOpacity onPress={this.onRegistration  }>
                        <Text style={{ backgroundColor: '#2980b6', fontSize: 15, marginTop: 10 }}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewconten: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputtext: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 40,
        margin: 5
    }
});