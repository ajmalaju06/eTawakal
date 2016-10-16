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
import { View, Text, StyleSheet, Image } from 'react-native';
import { Images } from '../../util/Images';
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
    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <Image source={Images.logo} style={{ width: 30, height: 30 }}></Image>
                    <Text style={styles.textContainer}>
                        eTawakal
                    </Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderBottomWidth: .5,
        borderBottomColor: '#ECECEC',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    welcome: {
        marginTop: 20,
        flexDirection: 'row'
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

