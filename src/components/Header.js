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
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Images } from '../util/Images';
import { NavigationStore } from '../stores/NavigationStore';
import Icon from 'react-native-vector-icons/FontAwesome';
/**
 * @class eTawakal 
 * @extends React.Component
 */
export class Header extends React.Component {

    constructor() {
        super();

        /**
         * @state
         */
        this.state = {};
    }

    toggleDrawer() {
        this.props.drawer.openDrawer();
    }

    renderMenuButton() {
        return (
            <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                <View style={{ width: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="bars" color="gray" size={18} />
                </View>
            </TouchableOpacity>
        );
    }


    onBackPress() {
        if (this.props.navigator) {
            this.props.navigator.pop();
        }
    }

    renderBackButton() {
        return (
            <TouchableOpacity onPress={this.onBackPress.bind(this)}>
                <View style={{ width: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="arrow-left" color="gray" size={18} />
                </View>
            </TouchableOpacity>
        );
    }

    renderButton() {
        if (!this.props.isLoginPage) {
            if (this.props.isHomePage) {
                return this.renderMenuButton();
            }
            else {
                return this.renderBackButton();
            }
        }
        return null;
    }

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    {this.renderButton()}
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                        <Image source={Images.twkal_exprs_logo} style={{ width: 200, height: 40 }}></Image>
                    </View>
                    {(() => {
                        if (!this.props.isLoginPage) {
                            <View style={{ flexDirection: 'row', marginRight: 15 }}>
                                <Icon name="home" size={20} color="gray" style={{ marginRight: 20 }} />
                                <Icon name="phone" size={20} color="gray" />
                            </View>
                        }
                    })()}
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e7e5e6',
        borderBottomWidth: .5,
        borderBottomColor: '#ECECEC',
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    welcome: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        width: 80,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        color: '#000'
    },

});

