import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class InvestimentoService {

    pergunta;

    constructor(http) {
        this.http = http;
    }

    salvar(valorAtual, valorMensal, tempo) {
        var investimento = {
            "valorInicial": valorAtual,
            "valorMensal": valorMensal,
            "tempoInvestimento": tempo
        }
        var request = "investimentos";
        return this.http.POST(request, investimento);
    }

    buscarInvestimentoAtual() {
        var request = "investimentoUsuario";
        return this.http.GET(request);
    }

    calcularInvestimentoProduto(valorInicial, valorMensal, quantidadeMes, produto, porcentagem) {
        var request = "investimentoRendimento";
        var valorInicialReal = this.getInvestimentoReal(valorInicial, porcentagem);
        var valorMensalReal = this.getInvestimentoReal(valorMensal, porcentagem);
        var investQuery = "?valorInicial="+valorInicialReal+"&valorMensal="+valorMensalReal+"+&quantidadeMes="+quantidadeMes+"&produto="+produto;
        return this.http.GET(request + investQuery);
    }

    getInvestimentoReal(investimento, porcentagem) {
        return investimento * (porcentagem / 100);
    }

}