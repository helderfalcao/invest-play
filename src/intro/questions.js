import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import { ServiceUtils } from '../services/ServiceUtils';
import { UserInfo } from '../services/UserInfo';
import 'fetch';

@inject(HttpService, ServiceUtils, UserInfo)
export class questions {

    constructor(http, utils, userInfo) {
        this.http = http;
        this.utils = utils;
        this.userInfo = userInfo;
    }

    activate() {
        console.log(this.userInfo.objetivo);
        let request = 'objetivo';
        return this.http.GET(request)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.objetivos = data;
            }).catch(function (error) {
                console.log(error);
            });;;
    }
}    