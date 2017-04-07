import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import { UserInfo } from '../services/UserInfo';
import { Router } from 'aurelia-router';
import { App } from 'app';
import 'fetch';

@inject(HttpService, UserInfo, Router, App)
export class objetivo {

    objetivoSelecionado;

    constructor(http, userInfo, router, app) {
        this.http = http;
        this.userInfo = userInfo;
        this.router = router;
        this.app = app;
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
        this.userInfo.objetivo = this.getObjeto(this.objetivoSelecionado);
        this.app.objetivo = this.userInfo.objetivo.name;
        this.userInfo.salvarInfoUserObjetivo(this.objetivoSelecionado);
        this.router.navigate("question/" + "58df4248bf76c758b1cfb77d");
    }

    getObjeto(idObjeto) {
        for (var ob of this.objetivos) {
            if (ob._id == idObjeto) {
                return ob;
            }
        }
    }
}