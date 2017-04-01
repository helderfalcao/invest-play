import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import { ServiceUtils } from '../services/ServiceUtils';
import 'fetch';

@inject(HttpService, ServiceUtils)
export class questions {

    constructor(http, utils) {
        this.http = http;
        this.utils = utils;
    }

    activate() {
        let request = 'objetivo';
        return this.httpService.GET(request)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.objetivos = data;
            }).catch(function (error) {
                console.log(error);
            });;;
    }
}    