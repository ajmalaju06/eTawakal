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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from './Header';
import { CreditInfo } from './CreditInfo';
import { Images } from '../util/Images';
import { SendFundDetail } from './SendFundDetail';

/**
 * @class SendFund
 * @extends React.Component
 */
export class SendFund extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                'row 1', 'row 2', 'row 3', 'row 4', '6', '7', '8', '9', '10'
                , 'row 1', 'row 2', 'row 3', 'row 4', '6', '7', '8', '9', '10', 'sdf', 'sdfsfdf', 'sdfsdf'
            ])
        };

        this.onRowPress = this.onRowPress.bind(this);
    }

    onRowPress() {
        this.props.navigator.push({ component: SendFundDetail })
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderRow(rowData, index) {
        let component = (
            <TouchableOpacity onPress={this.onRowPress}>
                <View key={index} style={styles.listviewContainer}>
                    <View style={{ height: 40, }}>
                        <Text style={[styles.listviewTextStyle, { marginBottom: 5, fontWeight: 'bold' }]}>USER NAME</Text>
                        <Text style={styles.listviewTextStyle} marginTop={5}>+91745649487</Text>
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
                    <Text style={styles.approveHeadingStyle}>SEND FUND</Text>
                    <View style={{ flex: 1 }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                            />
                    </View>
                </View>
                <View style={styles.registerContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={this.onRowPress}>
                        <View>
                            <Icon name="plus" color="#FFF" size={20} />
                        </View>
                    </TouchableOpacity>
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
        marginBottom: 40
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
        height: 45,
        flex: 1,
        borderBottomColor: '#5a5a5a',
        borderBottomWidth: 0.5,
        width: 280,
    },
    registerContainer:
    {
        height: 40,
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
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginRight: 20,
        marginBottom: 40,
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
        color: '#5a5a5a'
    }
});