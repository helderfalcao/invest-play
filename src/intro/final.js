import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import { UserInfo } from '../services/UserInfo';
import 'fetch';

@inject(HttpClient, Router, UserInfo)
export class Final {    
    
    constructor(http, router, userInfo) {
        this.http = http;
        this.router = router;
        this.userInfo = userInfo
    }

    activate() {
    }

    continuarInvestir() {
        this.router.navigate('fechamento');
        this.userInfo.salvarInfoUserEscolhaInvestimento('Investir');
    }

    continuarVerMais() {
        this.router.navigate('fechamento');
        this.userInfo.salvarInfoUserEscolhaInvestimento('VerMais');
    }

}