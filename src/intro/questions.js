import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import { ServiceUtils } from '../services/ServiceUtils';
import { UserInfo } from '../services/UserInfo';
import { Router } from 'aurelia-router';
import 'fetch';

@inject(HttpService, ServiceUtils, UserInfo, Router)
export class questions {

    pergunta;
    resposta;

    constructor(http, utils, userInfo, router) {
        this.http = http;
        this.utils = utils;
        this.userInfo = userInfo;
        this.router = router;
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
            });
    }

    continuar() {
        console.log(this.resposta);
        var opcao = this.getResposta(this.resposta);
        var resposta = {
            "perguntaId": this.pergunta._id,
            "opcaoEscolhida": this._id
        }
        if (opcao.proxima_pergunta != 'string' && opcao.proxima_pergunta != '') {
            this.router.navigate("question/" + opcao.proxima_pergunta);
            this.userInfo.resposta1 = this.resposta;
        } else {
            this.userInfo.resposta2 = this.resposta;
            var perfil = this.userInfo.calcularPerfil();
            this.router.navigate("resultado/" + perfil);
        }
        this.salvarResposta(opcao);
    }

    salvarResposta(opcao, isResposta1) {
        var This = this;
        this.userInfo.authUser(function (user) {
            var resposta = {
                "perguntaId": This.pergunta._id,
                "opcaoEscolhida": opcao._id,
                "idUsuario": user._id
            };
            let request = 'respostas';
            return This.http.POST(request, resposta)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    This.resposta = data;
                }).catch(function (error) {
                    console.log(error);
                });
        });
    }

    getResposta(opcao) {
        for (var op of this.pergunta.opcoes) {
            if (opcao == op.opcao) {
                return op;
            }
        }
    }
}    