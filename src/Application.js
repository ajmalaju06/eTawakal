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
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet, Text, TextInput, Dimensions,
    View, Navigator, DrawerLayoutAndroid, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';

import { AppStore } from './stores/AppStore';
import { NavigationStore } from './stores/NavigationStore';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { DrawerContent } from './components/DrawerContent';



var _initialRoute = null;
var _navigator = null;
var _windowHeight = Dimensions.get('window').height;
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
        AppStore.partnerLogin().then(response => { });
    }

    getChildContext() {
        return { drawer: this.drawer };
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
            <DrawerLayout ref={ref => this.drawer = ref}
                drawerWidth={300}
                content={<DrawerContent />}
                renderNavigationView={this.renderDrawerNavigationView.bind(this)}
                tapToClose={true}>
                <View style={styles.container}>
                    <Component {...route.props} navigator={navigator} drawer={this.drawer} />
                </View>
            </DrawerLayout>
        );

        return screenView;
    }

    renderDrawerNavigationView() {
        return (
            <DrawerContent
                style={{ backgroundColor: '#FFF', height: _windowHeight }}
                language={this.state.language}
                resourceKeys={this.state.resourceKeys}
                navigator={_navigator} />
        );
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

Application.childContextTypes = {
    drawer: PropTypes.object
};

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
