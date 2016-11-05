


'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Images } from '../../util/Images';
import { Header } from '../shared/Header';
import { CreditInfo } from '../shared/CreditInfo';
import { PayMe } from './PayMe';
import { PayMeFarAway } from './PayMeFarAway';

/**
 * @class PayMeHome
 * @extends React.Component
 */
export class PayMeHome extends React.Component {

    onPayMe() {
        this.props.navigator.push({ component: PayMe });
    }
    onPayMeFarAway() {
        this.props.navigator.push({ component: PayMeFarAway });
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
                    <View style={styles.menuContainer} marginTop={10}>
                        <TouchableOpacity style={styles.tile} onPress={this.onPayMe.bind(this)}>
                            <View style={styles.tileInnerCt}>
                                <Image style={styles.menuIcon} source={Images.ic_transfer} />
                                <Text style={styles.tileText}> Near by</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tile} onPress={this.onPayMeFarAway.bind(this)}>
                            <View style={styles.tileInnerCt}>
                                <Image style={styles.menuIcon} source={Images.ic_payme} />
                                <Text style={styles.tileText}> Far Away</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.tile} >
                            <View style={styles.tileInnerCt}>
                                <Image style={styles.menuIcon} source={Images.ic_find_merchant} />
                                <Text style={styles.tileText}>Report</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tile} >
                            <View style={styles.tileInnerCt}>
                                <Image style={styles.menuIcon} source={Images.ic_mobile_money} />
                                <Text style={styles.tileText}>On Hold Request</Text>
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
        fontSize: 14,
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
    }, lineStyle: {
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
});