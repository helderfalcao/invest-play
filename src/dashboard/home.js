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
            'caracteristica': 'green',            
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

    constructor(router, produtoService) {
        this.router = router;
        this.produtoService = produtoService;
    }

    attached() {
        var This = this;
        this.produtoService.buscarProdutosPai()
            .then(response => response.json())
            .then(data => {
                This.produtosPai = data;
            }).catch(function (error) {
                console.log(error);
            });

        this.produtoService.buscarProdutosFilho()
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

    perguntaFlow(produtoId) {
        this.router.navigate('produto-home?produtoId=' + produtoId);
    } 

}
