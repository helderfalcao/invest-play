import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class resultado {
    perfil;

    constructor(http) {
        this.http = http;
    }

    activate(params) {
        this.perfil = params.resultado;
    }
}
