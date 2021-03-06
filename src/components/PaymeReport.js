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
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity } from 'react-native';
import { Header } from './Header';
import { CreditInfo } from './CreditInfo';
import { Images } from '../util/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Transfer } from './Transfer'
import faker from 'faker';

/**
 * @class TansferHistory
 * @extends React.Component
 */
export class PaymeReport extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let data = [];
        for (var i = 0; i < 10; i++) {
            data.push({
                name: faker.name.firstName(), city: faker.address.city(),
                phone: faker.phone.phoneNumber(), beneficiaryNo: faker.finance.account()
            })
        }
        this.state = {
            dataSource: ds.cloneWithRows(data)
        };
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderRow(rowData, index) {
        let component = (
            <View key={index} style={styles.listviewContainer}>
                <Text style={[styles.listviewTextStyle, { fontWeight: 'bold', marginBottom: 5 }]}>{rowData.name}</Text>
                <Text style={styles.listviewTextStyle}>Date - 01/01/2010</Text>
                <Text style={[styles.listviewTextStyle, { color: 'blue' }]}>Status - Registered</Text>
                <Text style={styles.listviewTextStyle}>Amount - 500.10</Text>
                <Text style={styles.listviewTextStyle}>Message - Test Message</Text>
            </View>
        );
        return component;
    }

    /**
    * @render
    * @return { View } view
    */
    render() {
        return (
            <Image style={styles.container} source={Images.background_pattern}>
                <Header isHomePage={false} navigator={this.props.navigator} />
                <CreditInfo />
                <View style={styles.contentContainer}>
                    <View style={{ flex: 1, alignItems: 'stretch' }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)} />
                    </View>
                </View>
                <View style={styles.registerContainer}>
                    <TouchableOpacity>
                        <View style={styles.iconContainer}>
                            <Icon name="filter" color="#FFF" size={18} />
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
        flex: 1,
        width: null,
        height: null
    },
    contentContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 0,
        padding: 20
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
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    registerContainer:
    {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    registerAccountTextStyle: {
        fontSize: 14,
        color: '#808080',
        marginRight: 5
    },
    iconContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: '#073D96',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 1.3,
        shadowOffset: {
            width: .5,
            height: .5,
        }
    },
    listviewTextStyle: {
        color: '#5a5a5a',
        textAlign: 'left'
    }
});