/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import { AsyncStorage, ToastAndroid, } from 'react-native';
import { EventEmitter } from 'eventemitter3';
/**
 * RequestManager is the central piece for managing the network connection with the service
 *
 * @class RequestManager
 * @extends EventEmitter
 * @singleton
 */
export var RequestManager = Object.assign({}, EventEmitter.prototype, {

    /**
     * Base url of the service
     * @property {String} endpointBase
     */
    endpointBase: 'http://online.etawakal.com/TestService/',

    /**
     * Make get request to the server
     * @param {String} type - the method type GET or POST
     * @param {String} url
     * @param {Object} params - request param if any
     * @return {Promise} promise
     */
    get: function (action, params, endpoint) {
        let url = endpoint || this.endpointBase;
        url = this.endpointBase + action;

        if (params) {
            let queryString = Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key])).join('&');
            url = url + '?' + queryString;
        }

        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.onreadystatechange = (e) => {
                if (request.readyState !== 4) {
                    return;
                }

                if (request.status === 200) {
                    parseString(request.responseText, (error, result) => {
                        resolve(result);
                    })
                } else {
                    console.warn('error');
                }
            };

            request.open('GET', url);
            request.send();
        });
    },

    getYoutubeRequest: function (params, endpoint) {
        let url = endpoint || this.endpointBase;

        if (params) {
            let queryString = Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key])).join('&');
            url = url + '?' + queryString;
        }

        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.onreadystatechange = (e) => {
                if (request.readyState !== 4) {
                    return;
                }

                if (request.status === 200) {
                    let json = JSON.parse(request.responseText);
                    resolve(json);
                } else {
                    console.warn(url);
                }
            };

            request.open('GET', url);
            request.send();
        });
    }
});
