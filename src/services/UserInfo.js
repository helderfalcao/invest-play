import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class UserInfo {

    PERFIL_MODERADO = 'MODERADO';
    PERFIL_CONSERVADOR = 'CONSERVADOR';

    user;
    objetivo;
    resposta1;
    resposta2;
    perfil;

    constructor(http) {
        this.http = http;
    }

    authUser(userCallback) {
        if (this.user) {
            userCallback(this.user);
        } else {
            let request = 'auth';
            return this.http.GET(request)
                .then(response => response.json())
                .then(data => {
                    this.user = data;
                    userCallback(this.user);
                }).catch(function (error) {
                    console.log(error);
                });
        }
    }

    salvarInfoUserObjetivo(objetivo) {
        var This = this;
        this.authUser(function (user) {
            var userInfo = {
                "idUsuario": user._id,
                "objetivo": objetivo
            };
            let request = 'usuarioinfo';
            return This.http.POST(request, userInfo)
                .then(response => response.json())
                .then(data => {
                    
                }).catch(function (error) {
                    console.log(error);
                });
        });
    }

    salvarInfoUserEscolhaInvestimento(investimento) {
        var This = this;
        this.authUser(function (user) {
            var userInfo = {
                "idUsuario": user._id,
                "escolhaInvestimento": investimento
            };
            let request = 'usuarioinfo';
            return This.http.POST(request, userInfo)
                .then(response => response.json())
                .then(data => {
                    
                }).catch(function (error) {
                    console.log(error);
                });
        });
    }

    salvarInfoUserFeedback(nome, email, feed) {
        var This = this;
        this.authUser(function (user) {
            var userInfo = {
                "idUsuario": user._id,
                "info": {
                    "nome": nome,
                    "email": email,
                    "feed": feed
                }
            };
            let request = 'usuarioinfo';
            return This.http.POST(request, userInfo)
                .then(response => response.json())
                .then(data => {
                    
                }).catch(function (error) {
                    console.log(error);
                });
        });
    }

    calcularPerfil() {
        var r1 = this.resposta1;
        var r2 = this.resposta2;
        if ((r1 == 'C' && r2 == 'B')
            || (r1 == 'C' && r2 == 'A')) {
            this.perfil = this.PERFIL_MODERADO;
        } else {
            this.perfil = this.PERFIL_CONSERVADOR
        }
        return this.perfil;
    }
}