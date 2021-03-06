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
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Header } from './Header';
import { CreditInfo } from './CreditInfo';
import { Images } from '../util/Images';

/**
 * @class MobileMoneyDetail
 * @extends React.Component
 */
export class MobileMoneyDetail extends React.Component {

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <Image style={styles.container} source={Images.background_pattern}>
                <Header />
                <CreditInfo />
                <View style={styles.contentContainer}>
                    <View style={styles.lineStyle}></View>
                    <Text style={styles.approveHeadingStyle}>MOBILE MONEY</Text>
                    <View style={styles.listviewContainer}>
                        <Text style={styles.detailTextStyle}>User Name</Text>
                        <Text style={styles.detailTextStyle}>+9198847935983</Text>
                        <Text style={styles.detailTextStyle}>Place Name Country</Text>
                        <View style={styles.textInputStyle}>
                            <TextInput placeholder="Pupose" style={styles.textInputContainer}></TextInput>
                            <TextInput placeholder="Amount" style={styles.textInputContainer} marginTop={10}></TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.approveButtonContainer} marginLeft={62} backgroundColor={'#22ab3b'}>
                    <Text style={styles.qrCodeButtonStyle}>SEND</Text>
                </View>
            </Image>
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
        marginTop: 40,
        height: 80,
        flex: 1,
        alignItems: 'center',
        width: 280,
    },
    approveButtonContainer: {
        width: 250,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35
        // shadowColor: 'black',
        // shadowOpacity: .6,
        // shadowOffset: {
        // width: .5,
        // height: .5,
        // },
    },
    qrCodeButtonStyle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInputContainer: {
        height: 40,
        borderColor: '#ECECEC',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 15,
        flex: 1
    },
    detailTextStyle: {
        color: '#5a5a5a',
        marginTop: 5
    },
    textInputStyle: {
        width: 280,
        marginTop: 40
    }
});