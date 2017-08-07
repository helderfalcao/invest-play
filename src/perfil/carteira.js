import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { InvestimentoService } from '../services/InvestimentoService'

@inject(Router, InvestimentoService)
export class Carteira {

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

    constructor(router, investimentoService) {
        this.router = router;
        this.investimentoService = investimentoService;
    }

    nextScreen() {
        this.router.navigate('dashboard');
    }

}
