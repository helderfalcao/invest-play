
import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { PerguntaService } from '../../services/PerguntaService';

@inject(Router, PerguntaService)
export class CadastroPergunta {

    constructor(router, perguntaService) {
        this.router = router;
        this.perguntaService = perguntaService;
        this.pergunta = {};
    }

    attached() {
        Materialize.updateTextFields();
    }

    activate(params) {
        var This = this;
        this.perguntaService
            .buscarPergunta(params.id)
            .then(response => response.json())
            .then(data => {
                This.pergunta = data;
            }).catch(function (error) {
                console.log(error);
            });
    }

    salvarPergunta() {
        var This = this;
        if (this.pergunta._id) {
            this.perguntaService.editarPergunta(this.pergunta)
                .then(response => response.json())
                .then(data => {
                    This.router.navigate('consulta-pergunta');
                }).catch(function (error) {
                    console.log(error);
                });
        } else {
            this.perguntaService.salvarPergunta(this.pergunta)
                .then(response => response.json())
                .then(data => {
                    This.router.navigate('consulta-pergunta');
                }).catch(function (error) {
                    console.log(error);
                });
        }
    }

}