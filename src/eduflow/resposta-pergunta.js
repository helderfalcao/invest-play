import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { PerguntaService } from '../services/PerguntaService';
import { RespostaService } from '../services/RespostaService';
import { App } from '../app';

@inject(Router, PerguntaService, RespostaService, App)
export class RespostaPergunta {

    resposta = {};
    constructor(router, perguntaService, respostaService, app) {
        this.router = router;
        this.perguntaService = perguntaService;
        this.respostaService = respostaService;
        this.app = app;
        if (!app.usuario) {
            this.router.navigate('login-aluno');
        }
        this.idUsuario = app.usuario;
    }

    activate(params) {
        this.idPergunta = params.idPergunta;
        this.idExercicio = params.idExercicio;
        this.loadPergunta(this.idPergunta);
    }

    loadPergunta(idPergunta) {
        var This = this;
        this.perguntaService.buscarPergunta(idPergunta)
            .then(response => response.json())
            .then(function (pergunta) {
                This.respostaService
                    .buscarRespostas([idPergunta], This.idUsuario)
                    .then(response => response.json())
                    .then(function (resposta) {
                        if (resposta.length) {
                            This.resposta = resposta[0];
                        }
                        This.pergunta = pergunta;
                    });
            });

    }
    salvarResposta() {
        var This = this;
        if (this.resposta._id) {
            this.respostaService.editarResposta(this.resposta)
                .then(response => response.json())
                .then(function (data) {
                    This.router.navigate('modulo-aluno?idExercicio=' + This.idExercicio);
                });
        } else {
            this.respostaService.salvarResposta(this.resposta.valorTexto, this.idPergunta, this.app.usuario)
                .then(response => response.json())
                .then(function (data) {
                    This.router.navigate('modulo-aluno?idExercicio=' + This.idExercicio);
                });
        }
    }

}
