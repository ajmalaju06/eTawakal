


'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { Header } from '../shared/Header';
import { Images } from '../../util/Images';

/**
 * @class ForgotPassword
 * @extends React.Component
 */
export class ForgotPassword extends React.Component {

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <Image style={styles.container} style={styles.container} source={Images.background_pattern}>
                <Header isHomePage={false} navigator={this.props.navigator} />
                <View style={styles.forgotContainer}>
                    <Text style={styles.textContainer}>
                        Please fill in the below textsand you will receive a onetime password
                        on your phone number as SMS. If you are a verified user you will be prompted
                        to enter the PIN as well. On the next screen you can use the onetime password
                        to reset your current password.
                    </Text>
                    <TextInput placeholder="User Name" style={styles.textInputContainer} marginTop={10}></TextInput>
                    <TextInput placeholder="Phone Number" style={styles.textInputContainer} marginTop={10}></TextInput>
                    <TouchableOpacity>
                        <View style={styles.continueButtonContainer} backgroundColor={'#e44c0d'} >
                            <Text style={styles.buttonStyle}>
                                SUBMIT
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
    },
    forgotContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        backgroundColor: 'transparent',
        color: 'gray',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        fontSize: 15
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
    continueButtonContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
    },
    buttonStyle: {
        color: '#FFF',
        fontWeight: 'bold'
    },
});