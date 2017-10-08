import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class RespostaService {

    constructor(http) {
        this.http = http;
    }

    salvarResposta(resposta, idPergunta, idUsuario) {
        let request = 'respostas';
        var respostaBody = {
            "usuarioId": idUsuario,
            "perguntaId": idPergunta,
            "valorTexto": resposta
        }
        return this.http.POST(request, respostaBody);
    }

    editarResposta(resposta) {
        let request = 'respostas';
        return this.http.PUT(request, resposta);
    }


    buscarRespostas(idPerguntas, idUsuario) {
        let request = 'respostasUsuario/' + idUsuario;
        return this.http.POST(request, idPerguntas);
    }

    buscarProduto(produtoId) {
        let request = 'produtos/' + produtoId;
        return this.http.GET(request);
    }
}