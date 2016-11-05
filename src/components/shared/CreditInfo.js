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
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SlideDownPanel from './SlideDownPanel';

const { width, height } = Dimensions.get('window');

/**
 * @class CreditInfo
 * @extends React.Component
 */
export class CreditInfo extends React.Component {

    constructor() {
        super();
    }


    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <Icon name="refresh" color="#FFF" size={18} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.balanceTextStyle}>Balance</Text>
                </View>
                <View style={styles.creditContainer}>
                    <Text style={styles.amountTextStyle}>5000$</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#c73629',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    creditContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    balanceTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    amountTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 130,
        marginRight: 20
    },
    iconWrapper: {
        marginLeft: 10,
        marginRight: 10
    }
});