import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { InvestimentoService } from '../services/InvestimentoService';

@inject(Router, InvestimentoService)
export class Investimento {

    constructor(router, investimentoService) {
        this.investimentoService = investimentoService;
        this.router = router;
        this.investRange = this.createRange("Valor Atual", 0, 5000);
        this.mesInvestRange = this.createRange("Valor mensal", 0, 1000);
        this.tempoRange = this.createRange("Tempo(escala de 0 a 10)", 0, 10);;
        this.tempo = 0;
        this.min = 0;
        this.max = 5000;
    }
    attached() {
        this.buscarInvestimentoAtual();
    }
    nextScreen() {
        this.router.navigate('fluxo-perfil');
    }

    createRange(label, min, max) {
        return {
            "label": label,
            "min": min,
            "max": max,
            "value": 0
        }
    }

    salvarInvestimento() {
        this.investimentoService.salvar(
            this.investRange.value,
            this.mesInvestRange.value,
            this.tempoRange.value
        )
    }

    buscarInvestimentoAtual() {
        var This = this;
        this.investimentoService.buscarInvestimentoAtual()
            .then(response => response.json())
            .then(data => {
                var investimento  = data[0];
                This.investRange.value = investimento.valorInicial;
                This.mesInvestRange.value = investimento.valorMensal;
                This.tempoRange.value = investimento.tempoInvestimento;
            }).catch(function (error) {
                console.log(error);
            });
    }
}
