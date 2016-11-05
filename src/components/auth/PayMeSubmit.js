

'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Radio, Option, Image, TouchableOpacity } from 'react-native';
import { Header } from '../shared/Header';
import { CreditInfo } from '../shared/CreditInfo';
import { WhoPays } from '../shared/WhoPays';
import { Images } from '../../util/Images';
import { AppStore } from '../../stores/AppStore';
import RadioButton from 'react-native-radio-button'


/**
 * @class PayMeSubmit
 * @extends React.Component
 */
export class PayMeSubmit extends React.Component {

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
                    <Text style={styles.approveHeadingStyle}>PAY - ME</Text>
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
                        <WhoPays />
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.approveButtonContainer} backgroundColor={'#22ab3b'}>
                        <Text style={styles.qrCodeButtonStyle}>ASK</Text>
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