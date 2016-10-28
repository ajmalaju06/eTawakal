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
 * @class HomeNew
 * @extends React.Component
 */
export class HomeNew extends React.Component {

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
                    <View style={styles.menuContainer} marginTop={40}>
                        <View style={styles.tile}>
                            <Image source={Images.ic_transfer} />
                            <Text style={styles.tileText}> Transfer</Text>
                        </View>
                        <View style={styles.tile}>
                            <Image source={Images.ic_payme} />
                            <Text style={styles.tileText}> Pay - Me</Text>
                        </View>
                    </View>
                    <View style={styles.menuContainer}>
                        <View style={styles.tile}>
                            <Image source={Images.ic_payment} />
                            <Text style={styles.tileText}> Payment</Text>
                        </View>
                        <View style={styles.tile}>
                            <Image source={Images.ic_approve} />
                            <Text style={styles.tileText}> Approve</Text>
                        </View>
                    </View>
                    <View style={styles.menuContainer}>
                        <View style={styles.tile}>
                            <Image source={Images.ic_send_fund} />
                            <Text style={styles.tileText}> Send Fund</Text>
                        </View>
                        <View style={styles.tile}>
                            <Image source={Images.ic_mobile_money} />
                            <Text style={styles.tileText}> Mobile Money</Text>
                        </View>
                    </View>
                    <View style={styles.lastMenuContainer}>
                        <Image source={Images.ic_find_merchant} />
                        <Text style={styles.tileText}> Find Merchant</Text>
                    </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    },
    tileText: {
        color: '#464646',
        fontSize: 16,
        fontWeight: 'bold'
    },
    tile: {
        height: 80,
        margin: 5,
        borderColor: '#bababa',
        borderWidth: 1,
        borderRadius: 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuContainer: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    lastMenuContainer: {
        width: 140,
        height: 80,
        margin: 5,
        borderColor: '#bababa',
        borderWidth: 1,
        borderRadius: 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});