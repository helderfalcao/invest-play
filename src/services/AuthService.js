import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import { ServiceUtils } from './ServiceUtils';
import 'fetch';

@inject(HttpService, ServiceUtils)
export class AuthService {

    constructor(http, utils) {
        this.http = http;
        this.utils = utils;
    }

    autenticarFacebook() {
        let request = this.utils.API_URL + 'auth/facebook'
        window.location.replace(request)
    }

}