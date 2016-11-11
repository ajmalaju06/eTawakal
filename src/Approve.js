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
import { Header } from '../shared/Header';
import { CreditInfo } from '../shared/CreditInfo';
import { Images } from '../../util/Images';
import { ApproveConfirm } from './ApproveConfirm';
import faker from 'faker';

/**
 * @class Approve
 * @extends React.Component
 */
export class Approve extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let data = [];
        for (var i = 0; i < 10; i++) {
            data.push({
                name: faker.name.firstName(),
                city: faker.address.city(),
                phone: faker.phone.phoneNumber(),
                amount: faker.finance.amount(),
                beneficiaryNo: faker.finance.account()
            })
        }
        this.state = {
            dataSource: ds.cloneWithRows(data)
        };
    }
    onPress(data) {
        this.props.navigator.push({
            component: ApproveConfirm, props: {
                data: data
            }
        })
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderRow(rowData, index) {
        let component = (
            <TouchableOpacity onPress={() => this.onPress(rowData)}>
                <View key={index} style={styles.listviewContainer}>
                    <View style={{ height: 55, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.listviewTextStyle, styles.usernameStyle]}>Name - </Text>
                            <Text style={[styles.listviewTextStyle, styles.usernameStyle]}>{rowData.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styles.listviewTextStyle}>Amount -</Text>
                            <Text style={styles.listviewTextStyle}>{rowData.amount}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.listviewTextStyle}>Mobile - </Text>
                            <Text style={styles.listviewTextStyle}>{rowData.phone}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.listviewTextStyle}>Date - </Text>
                            <Text style={styles.listviewTextStyle}>05/11/2016</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
        return component;
    }

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
                    <Text style={styles.approveHeadingStyle}>APPROVE</Text>
                    <View style={{ flex: 1 }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                            />
                    </View>

                </View>
                <View style={styles.approveButtonContainer} marginLeft={62} backgroundColor={'#22ab3b'}>
                    <Text style={styles.qrCodeButtonStyle}>SCAN QR CODE</Text>
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
        backgroundColor: '#555555'
    },
    approveHeadingStyle: {
        marginTop: -10,
        borderBottomColor: 'yellow',
        borderBottomWidth: 1,
        color: '#5a5a5a'
    },
    approveButtonContainer: {
        width: 250,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35,
        marginTop: 5,
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
    listviewContainer: {
        marginTop: 10,
        height: 84,
        flex: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: 280,
    },
    listviewTextStyle: {
        color: '#5a5a5a',
    },
    usernameStyle: {
        fontWeight: 'bold'
    }
});