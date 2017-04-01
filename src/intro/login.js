import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import { ServiceUtils } from '../services/ServiceUtils';
import 'fetch';

@inject(HttpService, ServiceUtils)
export class Login {
    users = [];

    constructor(httpService, utils) {
        this.httpService = httpService;
        this.utils = utils;
        this.facebookLogin = utils.API_URL + 'auth/facebook'
        this.googleLogin = utils.API_URL + 'auth/google'
    }

    activate() {
        
    }
}
