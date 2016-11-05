


'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SlideDownPanel from './SlideDownPanel';
import RadioButton from 'react-native-radio-button'

/**
 * @class WhoPays
 * @extends React.Component
 */
export class WhoPays extends React.Component {

    constructor(props) {
        super();
        this.state = {
            whoPays: 1
        };
    }

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20
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
    whoPaysTextTyle: {
        marginTop: 20,
        flexDirection: 'row',
        textAlign: 'center'
    },
    radioButtonCt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    creditContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    balanceTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    amountTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 130,
        marginRight: 20
    },
    iconWrapper: {
        marginLeft: 10,
        marginRight: 10
    }
});