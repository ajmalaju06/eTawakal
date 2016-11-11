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
import { Header } from '../shared/Header';
import { CreditInfo } from '../shared/CreditInfo';
import { Images } from '../../util/Images';

/**
 * @class Home
 * @extends React.Component
 */
export class Home extends React.Component {

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <Image style={styles.container} source={Images.background_pattern}>
                <Header />
                <CreditInfo />

                <View style={styles.menuContainer}>
                    <View style={styles.menuButtonContainer} backgroundColor={'#073e93'}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>TRANSFER</Text>
                    </View>
                    <View style={styles.menuButtonContainer} backgroundColor={'#0d50b3'}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>PAY - ME</Text>
                    </View>
                    <View style={styles.menuButtonContainer} backgroundColor={'#1666db'}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>PAYMENT</Text>
                    </View>
                    <View style={styles.menuButtonContainer} backgroundColor={'#247cf3'}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>APPROVE</Text>
                    </View>
                    <View style={styles.menuButtonContainer} backgroundColor={'#32aa39'}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SEND FUND</Text>
                    </View>
                    <View style={styles.menuButtonContainer} backgroundColor={'#149940'}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>MOBILE MONEY</Text>
                    </View>
                    <View style={styles.menuButtonContainer} backgroundColor={'#0c6128'}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>FIND MERCHANT</Text>
                    </View>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        width: null,
        height: null
    },
    menuContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    },
    menuButtonContainer: {
        width: 250,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        // shadowColor: 'black',
        // shadowOpacity: .6,
        // shadowOffset: {
        // width: .5,
        // height: .5,
        // },
    },
});