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
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { AppStore } from '../stores/AppStore';
import { Header } from './Header';
import { CreditInfo } from './CreditInfo';
import { Images } from '../util/Images';
import faker from 'faker';
/**
 * @class HomeNew
 * @extends React.Component
 */
export class NormalReport extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let data = [];
        for (var i = 0; i < 20; i++) {
            data.push({
                name: faker.name.firstName(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                beneficiaryNo: faker.finance.account()
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
            <TouchableOpacity onPress={() => this.onPress(rowData)}>
                <View key={index} style={styles.listviewContainer}>
                    <View style={{}}>
                        <Text style={[styles.listviewTextStyle, { marginBottom: 10 }]}>Rempt No - {rowData.name}</Text>
                        <Text style={styles.listviewTextStyle}>Date - {rowData.phone}</Text>
                        <Text style={styles.listviewTextStyle}>Message - {rowData.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.listviewTextStyle, styles.amount]}>Amount - </Text>
                            <Text style={[styles.listviewTextStyle, styles.amount, { color: 'red' }]}>5,000.00</Text>
                            <View style={{ flex: 1 }}>
                            </View>
                            <Text style={[styles.listviewTextStyle, { color: 'blue' }]}>Status - {rowData.name}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
        return component;
    }

    onTransfer() { }

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
                <ScrollableTabView style={{ flex: 1 }} tabBarBackgroundColor="#1f9e3b" tabBarUnderlineStyle={{ backgroundColor: '#37cd2e' }} tabBarTextStyle={{ color: '#FFF' }}>
                    <View style={{ flex: 1 }} tabLabel="REMITTANCE">
                        <View style={{ flex: 1 }}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow.bind(this)} />
                        </View>
                    </View>
                    <View tabLabel="TRANSFER">
                        <View style={{ flex: 1 }}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={this.renderRow.bind(this)} />
                        </View>
                    </View>
                </ScrollableTabView>
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
    listviewContainer: {
        margin: 5,
        backgroundColor: 'white',
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: .6,
        shadowOffset: {
            width: .5,
            height: .5,
        },
    },
    listviewTextStyle: {
        marginBottom: 10,
        fontSize: 13
    },
    amount: {
        fontWeight: 'bold'
    }
});