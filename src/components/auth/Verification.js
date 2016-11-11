


'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '../shared/Header';
import { Images } from '../../util/Images';

/**
 * @class Verification
 * @extends React.Component
 */
export class Verification extends React.Component {

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <Image style={styles.container} style={styles.container} source={Images.background_pattern}>
                <Header isHomePage={false} navigator={this.props.navigator} />
                <View style={{ marginTop: 10, flex: 1 }}>
                    <Text style={styles.numberContainer}>Place</Text>
                    <Text style={styles.numberContainer}>Phone Number</Text>
                    <TouchableOpacity>
                        <View style={styles.continueButtonContainer} backgroundColor={'#073D96'} >
                            <Text style={styles.buttonStyle}>
                                RESEND
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TextInput placeholder="Verification Code" style={styles.textInputContainer} marginTop={20}></TextInput>
                    <TouchableOpacity>
                        <View style={styles.continueButtonContainer} backgroundColor={'#e44c0d'} >
                            <Text style={styles.buttonStyle}>
                                CONTINUE
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.textContainer}>
                        Waiting to automatically read a SMS send to 971566677953
                    </Text>
                </View>
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
    textContainer: {
        height: 40,
        backgroundColor: 'transparent',
        color: 'gray',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        fontSize: 15
    },
    numberContainer: {
        height: 40,
        borderColor: '#ECECEC',
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'gray',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 15
    },

});