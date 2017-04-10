import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import { UserInfo } from '../services/UserInfo';
import 'fetch';

@inject(HttpClient, Router, UserInfo)
export class Fechamento_1 {    
    
    constructor(http, router, userInfo) {
        this.http = http;
        this.router = router;
        this.userInfo = userInfo
    }

    activate() {

    }

    continuar() {
        this.userInfo.salvarInfoUserFeedback(this.nome, this.email, this.feedback);
        this.router.navigate("agradecimento");
    }

}