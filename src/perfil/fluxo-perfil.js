import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { PerguntaService } from '../services/PerguntaService';

@inject(Router, PerguntaService)
export class FluxoPerfil {
    pergunta;
    constructor(router, perguntaService) {
        this.router = router;
        this.perguntaService = perguntaService;
    }

    attached() {
        var This = this;
        this.perguntaService.buscarPrimeiraPergunta()
            .then(response => response.json())
            .then(data => {
                This.pergunta = data;
                This.pergunta.nextScreen = This.nextScreen;
            }).catch(function (error) {
                console.log(error);
            });
    }

    nextScreen(opcao) {
        if (opcao.proximaPerguntaId) {
            var This = this;
            this.perguntaService.proximaPergunta(opcao)
                .then(response => response.json())
                .then(data => {
                    This.pergunta = data;
                }).catch(function (error) {
                    console.log(error);
                });
        } else {
            this.router.navigate('carteira');
        }
    }

}
