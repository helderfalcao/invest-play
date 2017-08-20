import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { InvestimentoService } from '../services/InvestimentoService'
import { ProdutoService } from '../services/ProdutoService'

@inject(Router, InvestimentoService, ProdutoService)
export class Carteira {

    produtos = [
        {
            'acronimo': 'resources/images/png/iten_a.png',
            'nome': 'CDB',
            'caracteristica': 'blue lighten-4',
            'risco': 20,
            'liquidez': 80,
        },
        {
            'acronimo': 'resources/images/png/iten_b.png',
            'nome': 'LCI/LCA',
            'caracteristica': 'blue lighten-4 disable',
            'risco': 30,
            'liquidez': 50
        },
        {
            'acronimo': 'resources/images/png/iten_c.png',
            'nome': 'LC',
            'caracteristica': 'blue lighten-4 disable',
            'risco': 30,
            'liquidez': 80
        },
        {
            'acronimo': 'resources/images/png/iten_b.png',
            'nome': 'Fundo Investimento',
            'caracteristica': 'blue lighten-4 disable',
            'risco': 20,
            'liquidez': 80
        },
        {
            'acronimo': 'resources/images/png/iten_a.png',
            'nome': 'Tesouro Direto',
            'caracteristica': 'blue lighten-4 disable',
            'risco': 50,
            'liquidez': 50
        }
    ]

    constructor(router, investimentoService, produtoService) {
        this.router = router;
        this.investimentoService = investimentoService;
        this.produtoService = produtoService;
    }

    attached() {
        var This = this;
        this.produtoService
            .buscarProdutosFilho()
            .then(response => response.json())
            .then(data => {
                This.produtos = data;
                This.definePercentageProducts(This.produtos);
                This.investimentoService
                    .buscarInvestimentoAtual()
                    .then(response => response.json())
                    .then(data => {
                        This.investimentoAtual = data[0];
                        This.calcularInvestimentoProdutos(data[0]);
                    });
            }).catch(function (error) {
                console.log(error);
            });
    }

    nextScreen() {
        this.router.navigate('dashboard');
    }

    assigneInvestiments() {
        This.investimentosAtuais
    }

    definePercentageProducts(products) {
        var percentage = 100/products.length;
        products.forEach(function(prod) {
            prod['percentage'] = percentage;
        }, this);
    }
    calcularInvestimentoProdutos() {
        var investimentoAtual = this.investimentoAtual;
        var This = this;
        this.produtos.forEach(function(prod) {
            This.investimentoService.calcularInvestimentoProduto(
                investimentoAtual.valorInicial,
                investimentoAtual.valorMensal,
                investimentoAtual.tempoInvestimento,   
                prod.nome,
                prod.percentage
            ).then(response => response.json())
            .then(data => {
                prod.valor = data;
            });
        }, this);
    }
}
