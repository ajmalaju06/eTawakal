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
import { View, Text, StyleSheet, TextInput, Image, Picker, TouchableOpacity } from 'react-native';
import { Header } from './Header';
import { Images } from '../util/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppStore } from '../stores/AppStore';
import RadioButton from 'react-native-radio-button'
import { Verification } from './Verification';

const Item = Picker.Item;


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
            isSubmitting: false,
            countryList: []
        };
    }

    onRegisterUser() {
        //validate
        let valid = true;
        if (this.state.user.userName == '') valid = false;
        if (this.state.user.password == '') valid = false;
        if (this.state.user.phoneNumber == '') valid = false;
        if (this.state.user.confirmPassWord == '') valid = false;
        if (this.state.user.captcha == '') valid = false;
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

    componentDidMount() {
        AppStore.getCountryList().then(response => {
            if (response.Result) {
                let country = [
                    { countryId: 1, name: 'India' },
                    { countryId: 2, name: 'United Arab Emirates' }
                ];
                this.setState({ countryList: country });
            }
        });
    }
    onRegister() {
        this.props.navigator.push({ component: Verification });
    }

    renderCountryList() {
        return (
            <Picker
                style={[styles.picker, { color: 'white', backgroundColor: '#333' }]}
                selectedValue={this.state.color}
                mode="dropdown">
                <Item label="red" color="red" value="red" />
                <Item label="green" color="green" value="green" />
                <Item label="blue" color="blue" value="blue" />
            </Picker>
        );
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
            <TouchableOpacity onpress={this.onRegister.bind(this)}>
                <View style={styles.continueButtonContainer} >
                    <Text style={styles.buttonStyle}>
                        Submit
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }


    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <Image style={styles.container} style={styles.container} source={Images.background_pattern}>
                <Header isHomePage={false} navigator={this.props.navigator} />
                <View style={{ marginTop: 10, flex: 1 }}>
                    <TextInput placeholder="Place" style={styles.textInputContainer} marginTop={10}></TextInput>
                    <View style={styles.phoneNumberContainer}>
                        <TextInput placeholder="971" style={styles.contryCodeTextInput}></TextInput>
                        <TextInput placeholder="Phone number"
                            onChangeText={text => this.onChangeUser(text, 'phoneNumber')}
                            style={styles.phoneNumberTextInput}></TextInput>
                    </View>
                    <TextInput placeholder="User Name"
                        onChangeText={text => this.onChangeUser(text, 'userName')}
                        style={styles.textInputContainer} marginTop={10}></TextInput>
                    <TextInput placeholder="Password"
                        onChangeText={text => this.onChangeUser(text, 'passWord')}
                        style={styles.textInputContainer} marginTop={10}></TextInput>
                    <TextInput placeholder="Confirm password"
                        onChangeText={text => this.onChangeUser(text, 'confirmPassWord')}
                        style={styles.textInputContainer} marginTop={10}>
                    </TextInput>
                    <View style={{ marginTop: 10, marginLeft: 20, alignItems: 'flex-start', flexDirection: 'row' }}>
                        <View style={styles.radioButtonCt}>
                            <RadioButton
                                animation={'bounceIn'}
                                isSelected={this.state.whoPays == 1}
                                onPress={() => this.setState({ whoPays: 1 })} />
                            <Text style={styles.radioButtonTextStyle}> USER</Text>
                        </View>
                        <View style={styles.radioButtonCt} marginLeft={30}>
                            <RadioButton
                                animation={'bounceIn'}
                                isSelected={this.state.whoPays == 2}
                                onPress={() => this.setState({ whoPays: 2 })}
                                />
                            <Text style={styles.radioButtonTextStyle}> MERCHANT</Text>
                        </View>
                    </View>
                    <View style={styles.captchaContainer}>
                        <Image style={styles.captchaImageStyle} source={Images.captcha}></Image>
                        <TouchableOpacity>
                            <Icon style={{ marginLeft: 15 }} name="refresh" color="#000" size={19} />
                        </TouchableOpacity>
                    </View>
                    <TextInput placeholder="Captcha code"
                        onChangeText={text => this.onChangeUser(text, 'captcha')} style={styles.captchaCodeTextInputStyle}></TextInput>
                </View>
                <TouchableOpacity onPress={this.onRegister.bind(this)}>
                    <View style={styles.continueButtonContainer} >
                        <Text style={styles.buttonStyle}>
                            Submit
                        </Text>
                    </View>
                </TouchableOpacity>
            </Image >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        width: null,
        height: null,
        backgroundColor: '#F5FCFF',
    },
    textInputContainer: {
        height: 40,
        borderColor: '#ECECEC',
        borderWidth: 1,
        backgroundColor: 'white',
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
        backgroundColor: 'white',
        paddingLeft: 10
    },
    phoneNumberTextInput: {
        flex: 1,
        marginLeft: 10,
        borderColor: '#ECECEC',
        borderWidth: 1,
        backgroundColor: 'white',
        paddingLeft: 10
    },
    continueButtonContainer: {
        height: 35,
        backgroundColor: '#e44c0d',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
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
        backgroundColor: 'white',
        paddingLeft: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        fontSize: 14
    },
    buttonStyle: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    radioButtonCt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    radioButtonTextStyle: {
        backgroundColor: 'transparent'
    }
});