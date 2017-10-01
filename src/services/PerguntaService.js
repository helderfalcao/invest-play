import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class PerguntaService {

    FIRT_QUESTION_PERFIL = '596bfb1c22149217a74261e6';
    pergunta;

    constructor(http) {
        this.http = http;
    }

    buscarPrimeiraPergunta() {
        let request = 'perguntas/' + this.FIRT_QUESTION_PERFIL;
        return this.http.GET(request);
    }

    proximaPergunta(opcao) {
        let request = 'perguntas/' + opcao.proximaPerguntaId;
        return this.http.GET(request);
    }

    buscarPergunta(idPergunta) {
        let request = 'perguntas/' + idPergunta;
        return this.http.GET(request);
    }

    buscarPerguntas() {
        let request = 'perguntas';
        return this.http.GET(request);
    }
    
    salvarPergunta(Pergunta) {
        let request = 'perguntas';
        return this.http.POST(request, Pergunta);
    }

    editarPergunta(Pergunta) {
        let request = 'perguntas';
        return this.http.PUT(request, Pergunta);
    }

}