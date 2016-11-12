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
import { View, Text, StyleSheet, TextInput, Radio, Option, Image, TouchableOpacity } from 'react-native';
import { Header } from './Header';
import { CreditInfo } from './CreditInfo';
import { Images } from '../util/Images';
import { AppStore } from '../stores/AppStore';
import RadioButton from 'react-native-radio-button'

/**
 * @class Transfer
 * @extends React.Component
 */
export class Transfer extends React.Component {

    constructor(props) {
        super();
        this.state = {
            beneficiaryNo: '',
            amount: 0,
            message: '',
            whoPays: 1
        };

        if (props.data) {
            this.state.beneficiaryNo = props.data.beneficiaryNo
        }
    }

    onTransfer() {
        let users = {
        }
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
                    <Text style={styles.approveHeadingStyle}>TRANSFER</Text>
                    <View style={styles.listviewContainer}>
                        <View style={styles.textInputDetailContainer}>
                            <TextInput placeholder="Benificiery number"
                                value={this.state.beneficiaryNo}
                                style={styles.textInputContainer}>
                            </TextInput>
                        </View>
                        <View style={styles.textInputDetailContainer}>
                            <TextInput placeholder="Amount" style={styles.textInputContainer}></TextInput>
                        </View>
                        <View style={styles.textInputDetailContainer}>
                            <TextInput placeholder="Message" style={styles.textInputContainer}></TextInput>
                        </View>
                        <Text style={styles.whoPaysTextTyle}>Who pays the fee ?</Text>
                        <View style={{ marginTop: 20, alignItems: 'flex-start' }}>
                            <View style={styles.radioButtonCt}>
                                <RadioButton
                                    animation={'bounceIn'}
                                    isSelected={this.state.whoPays == 1}
                                    onPress={() => this.setState({ whoPays: 1 })} />
                                <Text> I Pay</Text>
                            </View>
                            <View style={styles.radioButtonCt}>
                                <RadioButton
                                    animation={'bounceIn'}
                                    isSelected={this.state.whoPays == 2}
                                    onPress={() => this.setState({ whoPays: 2 })}
                                    />
                                <Text> Reciepient Pay</Text>
                            </View>
                            <View style={styles.radioButtonCt}>
                                <RadioButton
                                    animation={'bounceIn'}
                                    isSelected={this.state.whoPays == 3}
                                    onPress={() => this.setState({ whoPays: 3 })} />
                                <Text>Share 50/50</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.approveButtonContainer} backgroundColor={'#22ab3b'}>
                        <Text style={styles.qrCodeButtonStyle}>SEND</Text>
                    </View>
                </TouchableOpacity>
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
    },
    textInputContainer: {
        height: 35,
        borderColor: '#ECECEC',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 15,
        flex: 1
    },
    approveButtonContainer: {
        width: 250,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35,
        marginLeft: 60,
        shadowColor: 'black',
        shadowOpacity: .6,
        shadowOffset: {
            width: .5,
            height: .5,
        },
    },
    radioButtonCt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    qrCodeButtonStyle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInputDetailContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    whoPaysTextTyle: {
        marginTop: 20,
        flexDirection: 'row',
        textAlign: 'center'
    }
});