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
import {
    StyleSheet, Text, TextInput, View, Navigator,
    DrawerLayoutAndroid, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStore } from '../stores/AppStore';
import { NavigationStore } from '../stores/NavigationStore';

import { Header } from './shared/Header';
import { Login } from './Login';
import { RegisterInfo } from './RegisterInfo';
import { Registration } from './Registration';
import { Home } from './Home'
import { CreditInfo } from './shared/CreditInfo';
import { WhoPays } from './shared/WhoPays';
import { ApproveConfirm } from './ApproveConfirm';
import { Approve } from './Approve';
import { Marchant } from './Marchant';
import { MobileMoneyDetail } from './MobileMoneyDetail';
import { MobileMoney } from './MobileMoney';
import { NearByConfirm } from './NearByConfirm';
import { NearBy } from './NearBy';
import { PayMe } from './PayMe';
import { PaymentConfirm } from './PaymentConfirm';
import { Payment } from './Payment';
import { SendFundDetail } from './SendFundDetail';
import { SendFund } from './SendFund';
import { TransferConfirm } from './TransferConfirm';
import { Transfer } from './Transfer';
import { TransferSuccessfull } from './TransferSuccessfull';
import { HomeNew } from './HomeNew';
import { NewDeviceFound } from './NewDeviceFound';


var _initialRoute = null;
var _navigator = null;

/**
 * @class Application 
 * @extends React.Component
 */
export class Application extends React.Component {

    constructor() {
        super();

        _initialRoute = {
            component: Login
        };

        this.state = {};
    };

    componentDidMount() {
        AppStore.partnerLogin().then(response => {
            console.warn('partner logged in');
        });
    }

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
            <Navigator ref="navigator" initialRoute={_initialRoute}
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