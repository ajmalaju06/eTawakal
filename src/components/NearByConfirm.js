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
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header } from './Header';
import { CreditInfo } from './CreditInfo';
import { Images } from '../util/Images';

/**
 * @class NearByConfirm
 * @extends React.Component
 */
export class NearByConfirm extends React.Component {

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
                    <Text style={styles.approveHeadingStyle}>NEAR BY</Text>
                    <View style={styles.listviewContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.imageStyle} source={Images.qrCode}></Image>
                        </View>
                        <View style={styles.detailMainContainer}>
                            <View style={styles.detailContainer}>
                                <Text style={styles.detailheadStyle}>Amount</Text>
                                <Text style={styles.detailValueStyle}>500$</Text>
                            </View>
                            <View style={styles.detailContainer}>
                                <Text style={styles.detailheadStyle}>Fee</Text>
                                <Text style={styles.detailValueStyle}>2$</Text>
                            </View>
                            <View style={styles.detailContainer}>
                                <Text style={styles.detailheadStyle}>Total</Text>
                                <Text style={styles.detailValueStyle}>502$</Text>
                            </View>
                        </View>
                        <Text style={styles.trasactionTextStyle}>Transaction fee shared 50 / 50</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.okButtonContainer}>
                        <Text style={styles.buttonTextStyle}>OK</Text>
                    </View>
                    <View style={styles.checkBalanceButtonContainer}>
                        <Text style={styles.buttonTextStyle}>CHECK BAlANCE</Text>
                    </View>
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
        marginTop: 10,
        height: 80,
        flex: 1,
        alignItems: 'center',
        width: 280,
    },
    imageContainer: {
        height: 170,
        width: 170,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    imageStyle: {
        height: 170,
        width: 170
    },
    detailMainContainer: {
        marginTop: 40,
        width: 310
    },
    detailContainer: {
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        marginTop: 15
    },
    detailheadStyle: {
        color: '#5a5a5a',
        marginLeft: 15,
        flex: 1,
        fontSize: 14
    },
    detailValueStyle: {
        alignItems: 'flex-end',
        marginRight: 15,
        justifyContent: 'flex-end',
        color: '#5a5a5a',
        fontSize: 13
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30
    },
    okButtonContainer: {
        width: 80,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#22ab3b'
        // shadowColor: 'black',
        // shadowOpacity: .6,
        // shadowOffset: {
        // width: .5,
        // height: .5,
        // },
    },
    checkBalanceButtonContainer: {
        width: 80,
        height: 45,
        flex: 1,
        marginLeft: 20,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b56a3'
        // shadowColor: 'black',
        // shadowOpacity: .6,
        // shadowOffset: {
        // width: .5,
        // height: .5,
        // },
    },
    buttonTextStyle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    trasactionTextStyle: {
        fontSize: 14,
        color: '#5a5a5a',
        marginTop: 30
    }
});