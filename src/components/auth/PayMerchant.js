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
import { View, Text, StyleSheet, TextInput, Radio, Option, Image, TouchableOpacity } from 'react-native';
import { Header } from '../shared/Header';
import { CreditInfo } from '../shared/CreditInfo';
import { WhoPays } from '../shared/WhoPays';
import { Images } from '../../util/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
/**
 * @class PayMe
 * @extends React.Component
 */
export class PayMerchant extends React.Component {

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <Image style={styles.container} source={Images.background_pattern}>
                <Header isHomePage={false} navigator={this.props.navigator} />
                <CreditInfo />
                <View style={styles.contentContainer}>
                    <View style={styles.lineStyle}></View>
                    <Text style={styles.approveHeadingStyle}>PAY MERCHANT</Text>
                    <View style={styles.listviewContainer}>
                        <View style={styles.textInputDetailContainer}>
                            <TextInput placeholder="Phone Number"
                                onChangeText={text => this.setState({ amount: text })}
                                style={styles.textInputContainer}></TextInput>
                        </View>
                        <View style={styles.textInputDetailContainer}>
                            <TextInput placeholder="Amount"
                                onChangeText={text => this.setState({ amount: text })}
                                style={styles.textInputContainer}></TextInput>
                        </View>
                        <View style={styles.textInputDetailContainer}>
                            <TextInput placeholder="Message"
                                onChangeText={text => this.setState({ message: text })}
                                style={styles.textInputContainer}></TextInput>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style={styles.approveButtonContainer} backgroundColor={'#22ab3b'}>
                                    <Text style={styles.qrCodeButtonStyle}>SEND</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginTop: 20,
                    marginLeft: 40,
                    marginRight: 50,
                    alignItems: 'stretch'
                }}>
                    <View style={{ marginBottom: 3, alignItems: 'center', borderBottomWidth: .3, borderBottomColor: '#000' }}>
                        <Text>OR</Text>
                    </View>
                    <View style={{ alignItems: 'center', padding: 3 }}>
                        <Text style={{ color: '#999' }}>Scan QR code</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={[styles.approveButtonContainer, { marginTop: 10 }]} backgroundColor={'blue'}>
                            <Text style={styles.qrCodeButtonStyle}>SCAN QR CODE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Image >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        flex: 1,
        width: null,
        height: null
    },
    contentContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
    },
    lineStyle: {
        height: 1,
        width: 280,
        marginTop: 30,
        backgroundColor: 'gray'
    },
    approveHeadingStyle: {
        marginTop: -10,
        borderBottomColor: 'yellow',
        borderBottomWidth: 1,
        color: '#5a5a5a'
    },
    listviewContainer: {
        marginTop: 10,
        height: 80,
        flex: 1,
        alignItems: 'stretch',
        width: 280
    },
    iconStyle: {
        marginRight: 10
    },
    approveButtonContainer: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 35,
        shadowColor: 'black',
        shadowOpacity: .6,
        shadowOffset: {
            width: .5,
            height: .5,
        },
    },
    qrCodeButtonStyle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    detailContainer: {
        height: 40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    detailTextStyle: {
        flex: 1,
        marginLeft: 10,
        color: '#5a5a5a'
    },
    textInputDetailContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    textInputContainer: {
        height: 35,
        borderColor: '#ECECEC',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 15,
        flex: 1
    },
});