import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import { ServiceUtils } from '../services/ServiceUtils';
import { UserInfo } from '../services/UserInfo';
import 'fetch';

@inject(HttpService, ServiceUtils, UserInfo)
export class questions {

    pergunta;

    constructor(http, utils, userInfo) {
        this.http = http;
        this.utils = utils;
        this.userInfo = userInfo;
    }

    activate(params) {
        console.log(this.userInfo.objetivo);
        this.loadQuestion(params.id);
    }

    loadQuestion(id) {
        var This = this;
        let request = 'perguntas/' + id;
        return this.http.GET(request)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                This.pergunta = data;
            }).catch(function (error) {
                console.log(error);
            });;;

    }
}    