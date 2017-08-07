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
        var request = "investimentoRendimento";
        return this.http.GET(request);
    }

    calcularInvestimentoProduto(valorInicial, valorMensal, quantidadeMes, produto, porcentagem) {
        var investQuery = "?valorInicial={0}}&valorMensal={1}&quantidadeMes={2}&produto={3}";
        investQuery.format(
            this.getInvestimentoReal(valorInicial),
            this.getInvestimentoReal(valorMensal),
            quantidadeMes,
            produto,
            porcentagem);
        return this.http.GET(investimentoUsuario + investQuery);
    }

    getInvestimentoReal(investimento, porcentagem) {
        return investimento * (porcentagem / 100);
    }

}