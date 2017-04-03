'use strict'

import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Perfil {
    
    constructor(http) {
        this.http = http;
    }

    activate() {

    }

    updatePerfil(perfil) {
        this.perfil = perfil;
        console.log(this.perfil);
    }
}
