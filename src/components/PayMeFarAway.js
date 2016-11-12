


'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity } from 'react-native';
import { Header } from './Header';
import { CreditInfo } from './CreditInfo';
import { Images } from '../util/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Transfer } from './Transfer'
import { PayMeSubmit } from './PayMeSubmit'
import faker from 'faker';

/**
 * @class PayMeFarAway
 * @extends React.Component
 */
export class PayMeFarAway extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let data = [];
        for (var i = 0; i < 10; i++) {
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

    onPress(data) {
        this.props.navigator.push({
            component: PayMeSubmit, props: {
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
                        <Text style={[styles.listviewTextStyle, styles.usernameStyle]} >{rowData.name}</Text>
                        <Text style={styles.listviewTextStyle}>{rowData.city}</Text>
                        <Text style={styles.listviewTextStyle}>{rowData.phone}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
        return component;
    }

    onTransferAdd() {
        this.props.navigator.push({ component: Transfer });
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
                    <Text style={styles.approveHeadingStyle}>PAY - ME</Text>
                    <View style={{ flex: 1 }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)} />
                    </View>
                </View>
                <View style={styles.registerContainer}>
                    <TouchableOpacity onPress={this.onTransferAdd.bind(this)}>
                        <View style={styles.iconContainer}>
                            <Icon name="plus" color="#FFF" size={18} />
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
        flex: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        width: 280,
    },
    listviewTextStyle: {
        color: '#5a5a5a',
    },
    registerContainer:
    {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 10
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        backgroundColor: '#073D96',
        borderRadius: 20
    },
    usernameStyle: {
        fontWeight: 'bold'
    }
});