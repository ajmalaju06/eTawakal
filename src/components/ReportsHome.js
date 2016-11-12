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
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { AppStore } from '../stores/AppStore';
import { Header } from './Header';
import { CreditInfo } from './CreditInfo';
import { Images } from '../util/Images';
import { NormalReport } from './NormalReport';

/**
 * @class HomeNew
 * @extends React.Component
 */
export class ReportsHome extends React.Component {

    constructor() {
        super();
    }

    onNormalReport() {
        this.props.navigator.push({ component: NormalReport })
    }

    onPaymeHome() { }

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
                    <View style={styles.menuContainer} marginTop={40}>
                        <TouchableOpacity style={styles.tile} onPress={this.onNormalReport.bind(this)}>
                            <View style={styles.tileInnerCt}>
                                <Image style={styles.menuIcon} source={Images.ic_transfer} />
                                <Text style={styles.tileText}> Normal Report</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tile} onPress={this.onPaymeHome.bind(this)}>
                            <View style={styles.tileInnerCt}>
                                <Image style={styles.menuIcon} source={Images.ic_payme} />
                                <Text style={styles.tileText}> Request Statement</Text>
                            </View>
                        </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20
    },
    tileText: {
        color: '#464646',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5
    },
    tile: {
        backgroundColor: '#FFF',
        height: 80,
        margin: 5,
        borderColor: '#bababa',
        borderWidth: 1,
        borderRadius: 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tileInnerCt: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    menuIcon: {
        width: 32,
        height: 32
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