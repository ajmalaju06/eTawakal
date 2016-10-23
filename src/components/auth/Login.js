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
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Image } from 'react-native';
import { Header } from '../shared/Header';
import { Images } from '../../util/Images';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * @class Login
 * @extends React.Component
 */
export class Login extends React.Component {

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.loginContainer}>
                    <TextInput placeholder="Username" style={styles.textInputContainer}></TextInput>
                    <TextInput placeholder="PassWord" style={styles.textInputContainer} marginTop={25}></TextInput>
                    <TouchableHighlight>
                        <View style={styles.loginButtonContainer}>
                            <Text style={styles.buttonStyle}> Login</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={styles.forgotPasswordTextStyle}>Forgot password ?</Text>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={styles.registerAccountTextStyle}>
                        Register New Account
          			</Text>
                    <View style={styles.iconContainer}>
                        <Icon name="plus" color="#FFF" size={15} />
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        backgroundColor: '#E7E4E6',
        marginTop: 20
    },
    textContainer: {
        width: 80,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        color: 'white'
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputContainer: {
        height: 40,
        borderColor: '#ECECEC',
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        fontSize: 15
    },
    loginButtonContainer: {
        width: 250,
        height: 35,
        backgroundColor: '#e44c0d',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    buttonStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    forgotPasswordTextStyle: {
        color: '#073D96',
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    registerContainer:
    {
        height: 40,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    registerAccountTextStyle: {
        fontSize: 14,
        color: '#808080',
        marginRight: 5
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginRight: 10,
        backgroundColor: '#073D96',
        borderRadius: 20
    }
});