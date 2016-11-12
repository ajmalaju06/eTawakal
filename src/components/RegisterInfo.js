/**
 * The MIT License (MIT)
 * Copyright (c) 2016 Aitrich Technologies
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * @author Ajmal<ajmalaju06@gmail.com>
 */

'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header } from './Header';
import { Images } from '../util/Images';
import { Registration } from './Registration';

/**
 * @class Register
 * @extends React.Component
 */
export class RegisterInfo extends React.Component {

    onRegister() {
        this.props.navigator.push({ component: Registration });
    }

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <Image style={styles.container} style={styles.container} source={Images.background_pattern}>
                <Header isHomePage={false} navigator={this.props.navigator} />
                <Text style={styles.textlabelStyle}>User Registration Steps</Text>
                <View style={styles.instructionContainer}>
                    <View style={styles.instructionContentContrainer}>
                        <View style={styles.boxContainer} marginTop={20}>
                            <Text style={styles.boxTextStyle}>
                                {'Register yourself as eTawakal app user by specifying'
                                    + '\n'
                                    + 'Username and Password. You need to specify the phone'
                                    + '\n'
                                    + 'number as well in the next step.'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.instructionContentContrainer}>
                        <View style={styles.boxContainer} marginTop={20}>
                            <Text style={styles.boxTextStyle}>
                                {'Verify your phone number using the OTP received as SMS.'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.instructionContentContrainer}>
                        <View style={styles.boxContainer} marginTop={20}>
                            <Text style={styles.boxTextStyle}>
                                {'Login and continue the registration process by providing'
                                    + '\n'
                                    + 'your personal details and documents required for KYC'
                                    + '\n'
                                    + 'verification'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.instructionContentContrainer}>
                        <View style={styles.boxContainer} marginTop={20}>
                            <Text style={styles.boxTextStyle}>
                                {'Finish up the registration process by entering the four'
                                    + '\n'
                                    + 'digit KEY.'}
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={this.onRegister.bind(this)}>
                    <View style={styles.continueButtonContainer}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
                            Continue
                    </Text>
                    </View>
                </TouchableOpacity>

            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    textlabelStyle: {
        marginLeft: 15,
        marginTop: 15,
        fontWeight: 'bold',
        color: '#808080',
        backgroundColor: 'transparent',
        fontSize: 14
    },
    instructionContainer: {
        flex: 1,
    },
    instructionContentContrainer: {
        height: 70,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxContainer: {
        height: 70,
        flex: 1,
        borderColor: 'gray',
        borderWidth: .5,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    boxTextStyle: {
        fontSize: 12,
        color: '#808080',
        marginLeft: 10,
        marginTop: 5
    },
    continueButtonContainer: {
        width: 250,
        height: 40,
        backgroundColor: '#e44c0d',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 65,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
});