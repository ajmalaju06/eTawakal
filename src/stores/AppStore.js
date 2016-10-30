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
 */
'use strict';

import { AsyncStorage, ToastAndroid, } from 'react-native';
import { EventEmitter } from 'eventemitter3';
import { RequestManager } from '../core/RequestManager';
/**
 * App Store is flux store. This store serves as skeleton for server side data  service
 * for the application.
 *
 * @class AppStore
 * @extends EventEmitter
 * @store
 * @singleton
 */
export var AppStore = Object.assign({}, EventEmitter.prototype, {

    transactionCode: '',

    deviceCode: '7uTOEBSz3pFGrEz6vsgiE6Odt6PbooWs',

    userName: 'N67a2TEuY68gnqZfuayeVg==',

    password: 't1h6/ATZ26WqXugQ+DJs4g==',

    partnerLogin: function () {
        let param = {
            ServiceUsersBE: {
                UserName: 'N67a2TEuY68gnqZfuayeVg==',
                Password: 't1h6/ATZ26WqXugQ+DJs4g==',
                DeviceCode: '7uTOEBSz3pFGrEz6vsgiE6Odt6PbooWs'
            }
        };
        return RequestManager.post('partnerService.svc/PartnerLogin', param).then(response => {
            if (response.Result) {
                let loginInfo = {
                    transactionCode: response.ServiceUsersBE.TransactionCode,
                    serviceApiUrl: response.ServiceUsersBE.ServiceAPIUrl,
                    statusCode: response.StatusCode,
                    statusDescription: response.StatusDescription
                };
                this.transactionCode = loginInfo.transactionCode;
                this.syncLoginInfo(loginInfo)
            }
            return response;
        });
    },

    getCountryList: function () {
        let transactionCode = null;
        if (this.transactionCode != '') {
            transactionCode = this.transactionCode;
        }

        return RequestManager.post('commonServices.svc/GetCountryList', {
            ServiceUsersBE: {
                UserName: this.userName,
                Password: this.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            }
        });
    },

    registerUser: function (user) {
        let userObject = {
            ServiceUsersBE: {
                UserName: user.userName, Password: user.password,
                DeviceCode: this.deviceCode, TransactionCode: this.transactionCode
            },
            MobileUsersBE: {
                UserName: user.userName, Password: user.password,
                Mobile: user.mobile, CountryId: user.countryId,
                UserTypeId: user.userTypeId
            }
        }:
        return RequestManager
            .post('userServices.svc/CreateUserAccount', userObject);
    },

    syncLoginInfo: function (loginInfo) {
        let key = '@Etawakal:loginInfo';
        AsyncStorage.setItem(key, JSON.stringify(loginInfo));
    },

    getLoginInfo: function () {
        let key = '@Etawakal:loginInfo';
        return AsyncStorage.getItem(key).then(data => JSON.parse(data || '{}'));
    }

});