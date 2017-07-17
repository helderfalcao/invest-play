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
        this.http.POST(request, investimento)
            .then(response => response.json())
            .then(data => {
                console.log("sucesso");
            }).catch(function (error) {
                console.log(error);
            });
    }

    buscarInvestimentoAtual() {
        var request = "investimentoUsuario";
        return this.http.GET(request);
    }

}