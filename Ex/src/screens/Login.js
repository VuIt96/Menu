import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { firebaseApp } from '../components/firebase/FireBaseConfig';
export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pass: ''
        }
    }
    onLogin() {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Alert.alert('Thông báo', 'Đăng Nhập thành công');
                this.props.navigation.navigate('ChangeInfo')
            })

            .catch(function (error) {
                Alert.alert('Thông báo', 'Đăng Nhập thất bại');
            });
    }
    render() {
        return (
            <View>
                <View style={styles.viewconten}>
                    <Text style={{ fontSize: 30, marginBottom: 30 }}>Đăng nhập</Text>
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
                <View style={styles.viewbutton}>
                    <View>
                        <TouchableOpacity onPress={this.onLogin}>
                            <Text style={{ backgroundColor: '#2980b6', fontSize: 15, margin: 5 }}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                            <Text style={{ backgroundColor: '#2980b6', fontSize: 15, margin: 5 }}>Đăng Ký</Text>
                        </TouchableOpacity>
                    </View>

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
    },
    viewbutton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});