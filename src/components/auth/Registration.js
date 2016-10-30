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
 */

'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Header } from '../shared/Header';
import { Images } from '../../util/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { AppStore } from '../../stores/AppStore';
/**
 * @class Registration
 * @extends React.Component
 */
export class Registration extends React.Component {

    constructor() {
        super();

        /**
         * @state
         */
        this.state = {
            isValid: true,
            user: {},
            isSubmitting: false
        };
    }

    onRegisterUser() {
        //validate
        let valid = true;
        if (this.state.user.userName == '') valid = false;
        if (this.state.user.password == '') valid = false;
        if (valid) {
            this.setState({ isSubmitting: true })
            AppStore.registerUser(this.state.user).then(response => {
                if (response.Result) {
                    //this.props.navigator.push({ component: AbcCom, props: {}})
                }
                this.setState({ isSubmitting: false });
            }).catch(() => {
                this.setState({ isSubmitting: false });
            });
        }
    }

    onChangeUser(text, field) {
        let state = this.state.user;
        state[field] = text;
        this.setState({ user: state });
    }

    renderSubmitBtn() {
        if (this.state.isSubmitting) {
            return (
                <View style={styles.continueButtonContainer}>
                    <Text style={styles.buttonStyle}>
                        Registering User
                    </Text>
                </View>
            );
        }
        return (
            <View style={styles.continueButtonContainer}>
                <Text style={styles.buttonStyle}>
                    Submit
                </Text>
            </View>
        );
    }

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={{ marginTop: 10, flex: 1 }}>
                    <TextInput placeholder="Place"
                        readOnly={this.state.isSubmitting}
                        value={this.state.user.place}
                        onChangeText={text => this.onChangeUser(text, 'place')}
                        style={styles.textInputContainer}></TextInput>
                    <View style={styles.phoneNumberContainer}>
                        <TextInput placeholder="971" style={styles.contryCodeTextInput}></TextInput>
                        <TextInput placeholder="Phone number" style={styles.phoneNumberTextInput}></TextInput>
                    </View>
                    <TextInput placeholder="User Name"
                        onChangeText={text => this.onChangeUser(text, 'userName')}
                        style={styles.textInputContainer} marginTop={10}></TextInput>
                    <TextInput placeholder="Password" style={styles.textInputContainer} marginTop={10}></TextInput>
                    <TextInput placeholder="Confirm password" style={styles.textInputContainer} marginTop={10}></TextInput>
                    <View style={styles.captchaContainer}>
                        <Image style={styles.captchaImageStyle} source={Images.captcha}></Image>
                        <Icon style={{ marginLeft: 15 }} name="refresh" color="#000" size={19} />
                    </View>
                    <TextInput placeholder="Captcha code" style={styles.captchaCodeTextInputStyle}></TextInput>
                </View>
                {this.renderSubmitBtn()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
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
    phoneNumberContainer: {
        height: 40,
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20
    },
    contryCodeTextInput: {
        width: 50,
        borderColor: '#ECECEC',
        borderWidth: 1,
        paddingLeft: 10
    },
    phoneNumberTextInput: {
        flex: 1,
        marginLeft: 10,
        borderColor: '#ECECEC',
        borderWidth: 1,
        paddingLeft: 10
    },
    continueButtonContainer: {
        width: 250,
        height: 35,
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
    captchaContainer: {
        height: 40,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    captchaImageStyle: {
        height: 40,
        width: 100
    },
    captchaCodeTextInputStyle: {
        width: 140,
        height: 40,
        borderColor: '#ECECEC',
        borderWidth: 1,
        paddingLeft: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        fontSize: 14
    },
    buttonStyle: {
        color: '#FFF',
        fontWeight: 'bold'
    }
});