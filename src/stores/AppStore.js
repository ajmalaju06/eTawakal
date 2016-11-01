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
        };
        return RequestManager
            .post('userServices.svc/CreateUserAccount', userObject);
    },

    getVerificationCode: function (user) {
        let verificationcode = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            MobileUsersBE: {
                UserName: user.userName,
                Mobile: user.mobile,
            }
        };
        return RequestManager
            .post('userServices.svc / GetVerificationCode', verificationcode);
    },
    verifyVerificationCode: function (user) {
        let verifyCode = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            MobileUsersBE: {
                UserName: user.userName,
                Mobile: user.mobile
            },
            VerificationCode: null
        };
        return RequestManager
            .post('userServices.svc /VerifyVerificationCode', verifyCode);
    },
    uploadUserDocument: function (user) {
        let userDocument = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            MobileUsersBE: {
                UserName: user.userName,
                Mobile: user.mobile,
                DocumentsBE: {
                    DocID: user.docid,
                    DocFile: user.docfile
                }
            },
        };
        return RequestManager
            .post('userServices.svc/UploadUserDocument', userDocument);
    },
    updateUserAccountInformation: function (user) {
        let userAccountInformation = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            MobileUsersBE: {
                UserName: user.username,
                Mobile: user.mobile,
                UserInformationBE: {
                    FirstName: user.firstname,
                    MiddleName: user.middilename,
                    LastName: user.lastname,
                    Email: uer.email,
                    DateofBirth: user.dateofbirth,
                    Gender: user.gender,
                    Nationalility: user.nationality,
                    geoLocation: user.geolocation
                }
            }
        };
        return RequestManager
            .post('userServices.svc /UpdateUserAccountInformation', userAccountInformation);
    },
    updateUserPinNumber: function (user) {
        let userPinNumber = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            MobileUsersBE: {
                UserName: user.username,
                Mobile: user.mobile,
                DeviceCode: this.deviceCode,
                Pin: this.pin
            }
        };
        return RequestManager
            .post('userServices.svc / UpdateUserPinNumber', userPinNumbera);
    },
    mobileUserAppLogin: function (user) {
        let mobileuserapplogin = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            MobileUsersBE: {
                UserName: user.username,
                Mobile: user.mobile,
                DeviceCode: this.deviceCode,
            }
        };
        return RequestManager
            .post('userServices.svc / MobileUserAppLogin', mobileuserapplogin);
    },
    normalTransferRequest: function (user) {
        let nomaltransferrequest = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            TransactionBE: {
                Amount: user.amount,
                FeesOptionID: user.feeoptionId,
                MobileUsersBE: {
                    UserName: user.userName,
                    MobileUserId: user.mobileuserId,
                    DeviceCode: this.deviceCode,
                },
                BeneficiaryBE: {
                    MobileNo: user.mobilenumber
                }
            }
        };
        return RequestManager
            .post('TransferOperations.svc / NormalTransferRequest', nomaltransferrequest);
    },
    submitTransferRequest: function (user) {
        let submitTransferRequest = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            TransactionBE: {
                Amount: user.amount,
                FeesOptionID: user.feeoptionId,
                MobileUsersBE: {
                    UserName: user.userName,
                    MobileUserId: user.mobileuserId,
                    DeviceCode: this.deviceCode,
                    PinNumber: users.pinNumber
                },
                BeneficiaryBE: {
                    MobileNo: users.mobileNumber,
                    BeneficiaryId: users.benificiaryId
                }
            }
        };
        return RequestManager
            .post('TransferOperations.svc / SubmitTransferRequest', submitTransferRequest);
    },
    PaymeRegisterTransferRequest: function (user) {
        let paymeRegisterTransferRequest = {
            ServiceUsersBE: {
                UserName: user.userName,
                Password: user.password,
                DeviceCode: this.deviceCode,
                TransactionCode: this.transactionCode
            },
            MobileUsersBE: {
                UserName: user.userName,
                MobileUserId: user.mobileUserId,
                DeviceCode: this.deviceCode,
            },
            BeneficiaryBE: {
                MobileNo: user.mobileNo
            }
        };
        return RequestManager
            .post('TransferOperations.svc / PayMeRegisterTransferRequest', paymeRegisterTransferRequest);
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