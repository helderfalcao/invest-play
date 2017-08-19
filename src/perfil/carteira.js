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

    investimentos = [
        {
            produto: "Fundo Garantidor de Credito",
            valor: "49.117,75"
        },
        {
            produto: "Tesouro direto",
            valor: "45.700,70"
        },
        {
            produto: "LCI/LCA",
            valor: "48.713,39"
        },
        {
            produto: "LC",
            valor: "48.034,49"
        },
        {
            produto: "Fundo DI",
            valor: "47.834,49"
        },
        {
            produto: "Poupança",
            valor: "47.017,49"
        },
    ]

    constructor(router, investimentoService, produtoService) {
        this.router = router;
        this.investimentoService = investimentoService;
        this.produtoService = produtoService;
    }

    attached() {
        this.produtoService.buscarPerguntasFilho()
            .buscarProdutosFilho()
            .then(response => response.json())
            .then(data => {
                This.produtos = data;
            }).catch(function (error) {
                console.log(error);
            });
    }

    nextScreen() {
        this.router.navigate('dashboard');
    }

    createInvestiments() {
        
    }
}
