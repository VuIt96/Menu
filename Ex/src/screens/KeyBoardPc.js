import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
export default class KeyBoardPc extends React.Component {
    render() {
        return (
            <View style={styles.mainview}>
                <View style={styles.chidview}>
                    <View style={styles.keyrow}>
                        <View style={styles.keytext}>
                            <Text>esc</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f1</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f2</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f3</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f4</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f5</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f6</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f7</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f8</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f9</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f10</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f11</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>f12</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>pause</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>prt sc</Text>
                        </View>
                        <View style={styles.keytext}>
                            <Text>delete</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.chidview}>
                    <View style={styles.chidview}>
                        <View style={styles.keyrow}>
                            <View style={styles.keytext}>
                                <Text>~</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>1</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>2</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>3</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>4</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>5</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>6</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>7</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>8</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>9</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>0</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>-</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>=</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>back</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.chidview}>
                    <View style={styles.chidview}>
                        <View style={styles.keyrow}>
                            <View style={styles.keytext}>
                                <Text>tab</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>Q</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>W</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>E</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>R</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>T</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>Y</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>U</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>I</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>O</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>P</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>[</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>]</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>\</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.chidview}>
                    <View style={styles.chidview}>
                        <View style={styles.keyrow}>
                            <View style={styles.keytext}>
                                <Text>caps</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>A</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>S</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>D</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>F</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>G</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>H</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>J</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>K</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>L</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>;</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>'</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>enter</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.chidview}>
                    <View style={styles.chidview}>
                        <View style={styles.keyrow}>
                            <View style={styles.keytext}>
                                <Text>shift</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>Z</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>X</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>C</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>V</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>B</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>N</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>M</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>,</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>.</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>/</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>shift</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>11</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.chidview}>
                    <View style={styles.chidview}>
                        <View style={styles.keyrow}>
                            <View style={styles.keytext}>
                                <Text>ctrl</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>fn</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Image source={{ uri: 'https://cungdev.com/wp-content/uploads/2018/02/avatar-300x300.jpg' }}>
                                </Image>
                            </View>
                            <View style={styles.keytext}>
                                <Text>alt</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text></Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>alt</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text></Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text>ctrl</Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text></Text>
                            </View>
                            <View style={styles.keytext}>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        flexDirection: 'column'
    },
    chidview: {
        flex: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    keyrow: {
        flex: 1,
        flexDirection: 'row'
    },
    keytext: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});