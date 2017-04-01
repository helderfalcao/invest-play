import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import { UserInfo } from '../services/UserInfo';
import { Router } from 'aurelia-router';
import 'fetch';

@inject(HttpService, UserInfo, Router)
export class objetivo {

    objetivoSelecionado;

    constructor(http, userInfo, router) {
        this.http = http;
        this.userInfo = userInfo;
        this.router = router;
        this.loadUserInfo();
        this.loadObjetivos();
    }

    loadObjetivos() {
        let request = 'objetivos';
        this.http.GET(request)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.objetivos = data;
            }).catch(function (error) {
                console.log(error);
            });;;
    }

    loadUserInfo() {
        var This = this;
        this.userInfo.authUser(function (user) {
            This.user = user;
        });
    }

    continuar() {
        this.router.navigate("question");
        this.userInfo.objetivo = this.objetivoSelecionado;
    }
}