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

    partnerLogin: function (callback) {
        let param = {
            ServiceUsersBE: {
                UserName: '',
                Password: '',
                DeviceCode: ''
            }
        };
        return RequestManager.get('commonServices.svc/PartnerLogin', param).then(response => {
            this.transactionCode = response.transactionCode;
            this.saveTransactionCode(this.transactionCode);
            callback(response)
        });
    },

    saveTransactionCode: function (transactionCode) {
        let key = '@Etawakal:transactionCode';
        AsyncStorage.setItem(key, transactionCode);
    }

});





// {
//     ServiceUsersBE: {
//         UserName: ''
//     },
//     MobileUSer: {
//         UserName: 
//     }
// }