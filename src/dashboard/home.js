import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@inject(Router)
export class Dashboard {

    perfil = "Conservador"
    produtosPai = [
        {
            'acronimo': 'FGC',
            'nome': 'FGC',
            'color': 'green'
        },
        {
            'acronimo': 'TRI',
            'nome': 'Tributação',
            'color': 'light-blue'
        },
        {
            'acronimo': '',
            'nome': 'Liquidez',
            'color': 'blue'
        },
        {
            'acronimo': '',
            'nome': 'Risco',
            'color': 'red'
        }

    ]
    produtos = [
        {
            'acronimo': 'CDB',
            'nome': 'CDB',
            'color': 'green',
            'risco': 20,
            'liquidez': 80
        },
        {
            'acronimo': 'LCI/LCA',
            'nome': 'LCI/LCA',
            'color': 'light-blue',
            'risco': 30,
            'liquidez': 50
        },
        {
            'acronimo': 'LC',
            'nome': 'LC',
            'color': 'blue',
            'risco': 30,
            'liquidez': 80
        },
        {
            'acronimo': 'FGC',
            'nome': 'Fundo Investimento',
            'color': 'red',
            'risco': 20,
            'liquidez': 80
        },
        {
            'acronimo': 'TRI',
            'nome': 'Tesouro Direto',
            'color': 'red',
            'risco': 50,
            'liquidez': 50
        }
    ]

    constructor(router) {
        this.router = router;
    }

    nextScreen() {
        this.router.navigate('objetivo');
    }

}
