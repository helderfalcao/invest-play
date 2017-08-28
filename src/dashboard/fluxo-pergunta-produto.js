import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@inject(Router)
export class FluxoPerguntaProduto {
    pergunta;
    constructor(router, perguntaService) {
        this.router = router;
        this.perguntaService = perguntaService;
    }

    attached() {
        var This = this;
        this.perguntaService.buscarPergunta(this.produtoId)
            .then(response => response.json())
            .then(data => {
                This.pergunta = data;
                This.pergunta.nextScreen = This.nextScreen;
            }).catch(function (error) {
                console.log(error);
            });
    }

    activate(params) {
        this.produtoId = params.firstQuestionId;
        if (!this.produtoId) {
            this.produtoId = "596bfb1c22149217a74261e6";
        }
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
