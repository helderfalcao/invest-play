import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { UserInfo } from '../services/UserInfo';
import { Router } from 'aurelia-router';
import { App } from 'app';
import 'fetch';

@inject(HttpClient, UserInfo, Router, App)
export class info_4 {

    comprarCarro = "58df3519377b0d2a417adea8";
    comprarApartamento = "58df3537377b0d2a417adea9";
    fazerViagem = "58df354c377b0d2a417adeaa";
    garantirAposentadoria = "58df3578377b0d2a417adeab";
    outroSonho = "58df358b377b0d2a417adeac";

    constructor(http, userInfo, router, app) {
        this.http = http;
        this.userInfo = userInfo;
        this.router = router;
        this.app = app;
    }

    activate() {
        this.app.updateProgress(4, 80);
    }

    continuar() {
        var idObjetivoEscolhido = this.userInfo.objetivo._id;
        switch (idObjetivoEscolhido) {
            case this.comprarCarro:
                this.router.navigate("info5v1");
                break;
            case this.comprarApartamento:
                this.router.navigate("info5v2");
                break;
            case this.fazerViagem:
                this.router.navigate("info5v4");
                break;
            case this.garantirAposentadoria:
                this.router.navigate("info5v3");
                break;
            case this.outroSonho:
                this.router.navigate("info5v5");
                break;
        }
        this.app.updateProgress(5, 100);
    }
}
