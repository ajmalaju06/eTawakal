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
import { StyleSheet, Text, TextInput, View, Navigator, DrawerLayoutAndroid, TouchableHighlight } from 'react-native';
import { Header } from './shared/Header';
import { Login } from './auth/Login';
import { RegisterInfo } from './auth/RegisterInfo';
import { Registration } from './auth/Registration';
import { Home } from './auth/Home'
import { CreditInfo } from './shared/CreditInfo';
import { ApproveConfirm } from './auth/ApproveConfirm';
import { Approve } from './auth/Approve';
import { Marchant } from './auth/Marchant';
import { MobileMoneyDetail } from './auth/MobileMoneyDetail';
import { MobileMoney } from './auth/MobileMoney';
import { NearByConfirm } from './auth/NearByConfirm';
import { NearBy } from './auth/NearBy';
import { PayMe } from './auth/PayMe';
import { PaymentConfirm } from './auth/PaymentConfirm';
import { Payment } from './auth/Payment';
import { SendFundDetail } from './auth/SendFundDetail';
import { SendFund } from './auth/SendFund';
import { TransferConfirm } from './auth/TransferConfirm';
import { Transfer } from './auth/Transfer';
import { TransferSuccessfull } from './auth/TransferSuccessfull';
import { HomeNew } from './auth/HomeNew';
import Icon from 'react-native-vector-icons/FontAwesome';

var _initialRoute = null;
var _navigator = null;

/**
 * @class Application 
 * @extends React.Component
 */
export class Application extends React.Component {

    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <TransferSuccessfull />
    //         </View >
    //     );
    // }

    constructor() {
        super();

        //configure the initial screen
        _initialRoute = {
            component: TransferSuccessfull
        };

    };

    /**
      * Process the routes and renders the appropriate component on the screen.
      *
      * @param {Object} route
      * @param {Navigator} navigator
      * @return {View} application
      */
    renderScene(route, navigator) {
        _navigator = navigator;
        //Component is the passed component
        let Component = route.component;

        /**
         * render the application with the current navigator component
         */
        let screenView = (

            <View style={styles.container}>
                <Component {...route.props} navigator={navigator} />
            </View>
        );
        return screenView;
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <Navigator initialRoute={_initialRoute}
                renderScene={this.renderScene.bind(this)} />
        );
    }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    menuButtonContainer: {
        width: 250,
        height: 35,
        backgroundColor: '#e44c0d',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 65,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
});
