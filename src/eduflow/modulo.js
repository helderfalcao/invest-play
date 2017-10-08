import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ModuloService } from '../services/ModuloService';
import { PerguntaService } from '../services/PerguntaService';
import { RespostaService } from '../services/RespostaService';
import { App } from '../app';

@inject(Router, ModuloService, PerguntaService, RespostaService, App)
export class Modulo {

    constructor(router, moduloService, perguntaService, respostaService, app) {
        this.router = router;
        this.moduloService = moduloService;
        this.perguntaService = perguntaService;
        this.respostaService = respostaService;
        this.app = app;
        this.idUsuario = app.usuario;
    }

    activate(params) {
        this.idExercicio = params.idExercicio
        this.buscarPerguntas(this.idExercicio);
    }

    buscarPerguntas(idExercicio) {
        var This = this;
        this.moduloService.buscarModuloPorExercicio(idExercicio)
            .then(response => response.json())
            .then(function (data) {
                This.modulos = data;
                if (This.modulos.length) {
                    This.perguntaService.buscarPerguntaPorModulo(This.modulos[0]._id)
                        .then(response => response.json())
                        .then(function (perguntas) {
                            This.respostaService
                                .buscarRespostas(perguntas.map(function (a) {
                                    return a["_id"];
                                }), This.idUsuario)
                                .then(response => response.json())
                                .then(function (respostas) {
                                    This.configPerguntas(perguntas, respostas, This);
                                });
                        }).catch(function (error) {
                            console.log(error);
                        });
                }
            }).catch(function (error) {
                console.log(error);
            });;
    }


    imagemPergunta(pergunta) {
        var imagem = pergunta.imagem;
        for (var i = 0; i < this.respostas.length; i++) {
            var resposta = this.respostas[i];
            if (resposta.perguntaId == pergunta._id) {
                imagem = "correto";
            }
        }
        return imagem;
    }
    configPerguntas(perguntas, respostas, context) {
        perguntas.forEach(function (pergunta) {
            respostas.forEach(function (resposta) {
                if (resposta.perguntaId == pergunta._id) {
                    pergunta.status = "ok";
                }
            }, this);
        }, this);
        context.perguntas = perguntas;
        context.respostas = respostas
    }
}
