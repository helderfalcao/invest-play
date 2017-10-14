import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ModuloService } from '../services/ModuloService';
import { PerguntaService } from '../services/PerguntaService';
import { RespostaService } from '../services/RespostaService';
import { App } from '../app';

@inject(Router, ModuloService, PerguntaService, RespostaService, App)
export class Pontos {

    constructor(router, moduloService, perguntaService, respostaService, app) {
        this.router = router;
        this.moduloService = moduloService;
        this.perguntaService = perguntaService;
        this.respostaService = respostaService;
        this.app = app;
        if (!app.usuario) {
            this.router.navigate('login-aluno');
        }
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
                                    This.summaryPerguntasRespostas(perguntas, respostas, This);
                                });
                        }).catch(function (error) {
                            console.log(error);
                        });
                }
            }).catch(function (error) {
                console.log(error);
            });;
    }

    summaryPerguntasRespostas(perguntas, respostas, context) {
        var perguntaQtd = perguntas.length;
        var respostasQtd = respostas.length;
        var perc = 0;
        if (isNaN(perguntaQtd) || isNaN(respostasQtd)) {
            perc = 0;
        } else {
            perc = ((respostasQtd / perguntaQtd) * 100).toFixed(3);
        }
        context.result = "_2,5";
        if (perc <= 25) {
            context.result = "_2,5";
        } else if(perc <= 50) {
            context.result = "_5";
        } else if(perc <= 75) {
            context.result = "_7,5";
        } else {
            context.result = "_10";
        }
        context.perguntas = perguntas;
        context.respostas = respostas
    }

    login() {
        this.app.configurarUsuario(this.usuario);
        this.router.navigate('exercicio-aluno');
    }
}
