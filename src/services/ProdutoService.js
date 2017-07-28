import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class ProdutoService {

    produto;

    constructor(http) {
        this.http = http;
    }

    buscarPerguntasPai() {
        let request = 'produtosPai';
        return this.http.GET(request);
    }

    buscarPerguntasFilho() {
        let request = 'produtos';
        return this.http.GET(request);
    }
}