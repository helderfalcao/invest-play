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

}