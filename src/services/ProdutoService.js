import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class ProdutoService {

    produto;

    constructor(http) {
        this.http = http;
    }

    buscarProdutosPai() {
        let request = 'produtosPai';
        return this.http.GET(request);
    }

    buscarProdutosFilho() {
        let request = 'produtos';
        return this.http.GET(request);
    }
}