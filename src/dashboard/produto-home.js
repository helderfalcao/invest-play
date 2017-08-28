import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ProdutoService } from '../services/ProdutoService';

@inject(Router, ProdutoService)
export class ProdutoHome {

    constructor(router, produtoService) {
        this.router = router;
        this.produtoService = produtoService;
    }

    activate(params) {
        this.produtoId = params.produtoId;
    }
    attached() {
        var This = this;
        this.produtoService
            .buscarProduto(this.produtoId)
            .then(response => response.json())
            .then(data => {
                This.produto = data;
            }).catch(function (error) {
                console.log(error);
            });
    }

    fluxoPerguntas() {
        this.router.navigate('fluxo-pergunta-produto?produtoId?' + this.produtoId);
    }

}
