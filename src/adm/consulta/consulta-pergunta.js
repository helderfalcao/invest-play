
import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { PerguntaService } from '../../services/PerguntaService';

@inject(Router, PerguntaService)
export class ConsultaPergunta {

    constructor(router, perguntaService) {
        this.router = router;
        this.perguntaService = perguntaService;
        this.perguntas = [];
    }

    attached() {
        this.listarPerguntas();
        Materialize.updateTextFields();
    }

    listarPerguntas() {
        var This = this;
        this.perguntaService
            .buscarPerguntas()
            .then(response => response.json())
            .then(data => {
                This.perguntas = data;
            }).catch(function (error) {
                console.log(error);
            });;
    }

    editarPergunta(idPergunta) {
        this.router.navigate('cadastro-pergunta?id=' + idPergunta);
    }

    novoPergunta() {
        this.router.navigate('cadastro-pergunta');
    }

}