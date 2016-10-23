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
import { View, Text, StyleSheet, ListView, Image } from 'react-native';
import { Header } from '../shared/Header';
import { CreditInfo } from '../shared/CreditInfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images } from '../../util/Images';


/**
 * @class Marchant
 * @extends React.Component
 */
export class Marchant extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', '6', '7', '8', '9', '10'
                , 'row 1', 'row 2', 'row 3', 'row 4', '6', '7', '8', '9', '10', 'sdf', 'sdfsfdf', 'sdfsdf']),
        };
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderRow(rowData, index) {
        let component = (
            <View key={index} style={styles.listviewContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.listMarchantContainer}>
                        <Text style={styles.listMarchantTextStyle}>Marchant name</Text>
                        <View style={styles.listContactContainer}>
                            <Image style={styles.listCallImageStyle} source={Images.call}></Image>
                            <Text style={styles.listNumberTextStyle}>+91984657567</Text>
                        </View>
                    </View>
                    <Icon style={styles.iconStyle} name="map-marker" color="gray" size={20} />
                </View>
                <View style={styles.listLineStyle}></View>
                <View style={styles.listMailContainer}>
                    <Icon style={styles.listIconStyle} name="envelope-o" color="gray" size={13}></Icon>
                    <Text style={styles.listEmailTextStyle}>marchant@gmail.com</Text>
                    <View style={styles.listChatContainer}>
                        <Icon style={styles.listIconStyle} name="envelope-o" color="#FFF" size={13}></Icon>
                        <Text style={styles.listMailTextStyle}>Chat</Text>
                    </View>
                </View>
            </View>
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
                <Header />
                <CreditInfo />
                <View style={styles.contentContainer}>
                    <View style={styles.lineStyle}></View>
                    <Text style={styles.approveHeadingStyle}>NEAR BY MARCHANT</Text>
                    <View style={{ flex: 1 }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                            />
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
        marginBottom: 20

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
        width: 280,
        borderColor: 'gray',
        borderWidth: .5
    },
    listMarchantContainer:
    {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 5,
        flex: 1
    },
    listMarchantTextStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    listContactContainer: {
        flexDirection: 'row',
        marginTop: 3,
        flex: 1,
        alignItems: 'center'
    },
    listCallImageStyle: {
        width: 18,
        height: 18
    },
    listNumberTextStyle: {
        color: '#5a5a5a',
        marginLeft: 7,
        fontSize: 10
    },
    iconStyle: {
        marginRight: 10
    },
    listLineStyle: {
        backgroundColor: 'gray',
        marginTop: 5,
        height: 0.5
    },
    listMailContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listIconStyle: {
        marginLeft: 10
    },
    listMailTextStyle: {
        color: 'white',
        marginLeft: 7,
        flex: 1,
        fontSize: 10
    },
    listEmailTextStyle: {
        color: '#5a5a5a',
        marginLeft: 7,
        flex: 1,
        fontSize: 10
    },
    listChatContainer: {
        backgroundColor: '#22ab3b',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 30
    }
});