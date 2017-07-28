import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ProdutoService } from '../services/ProdutoService'

@inject(Router, ProdutoService)
export class Dashboard {

    perfil = "Conservador"
    produtosPai = [
        {
            'acronimo': 'FGC',
            'nome': 'FGC',
            'caracteristica': 'green'
        },
        {
            'acronimo': 'TRI',
            'nome': 'Tributação',
            'caracteristica': 'light-blue'
        },
        {
            'acronimo': '',
            'nome': 'Liquidez',
            'caracteristica': 'blue'
        },
        {
            'acronimo': '',
            'nome': 'Risco',
            'caracteristica': 'red'
        }

    ]
    produtos = [
        {
            'acronimo': 'CDB',
            'nome': 'CDB',
            'caracteristica': 'green',
            'risco': 20,
            'liquidez': 80
        },
        {
            'acronimo': 'LCI/LCA',
            'nome': 'LCI/LCA',
            'caracteristica': 'light-blue',
            'risco': 30,
            'liquidez': 50
        },
        {
            'acronimo': 'LC',
            'nome': 'LC',
            'caracteristica': 'blue',
            'risco': 30,
            'liquidez': 80
        },
        {
            'acronimo': 'FGC',
            'nome': 'Fundo Investimento',
            'caracteristica': 'red',
            'risco': 20,
            'liquidez': 80
        },
        {
            'acronimo': 'TRI',
            'nome': 'Tesouro Direto',
            'caracteristica': 'red',
            'risco': 50,
            'liquidez': 50
        }
    ]

    constructor(router, produtoService) {
        this.router = router;
        this.produtoService = produtoService;
    }

    attached() {
        var This = this;
        this.produtoService.buscarPerguntasPai()
            .then(response => response.json())
            .then(data => {
                This.produtosPai = data;
            }).catch(function (error) {
                console.log(error);
            });

        this.produtoService.buscarPerguntasFilho()
            .then(response => response.json())
            .then(data => {
                This.produtos = data;
            }).catch(function (error) {
                console.log(error);
            });

    }

    nextScreen() {
        this.router.navigate('objetivo');
    }

}
