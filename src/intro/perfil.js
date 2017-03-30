'use strict'

import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Perfil {
    title = "Meu InvestPlayer";

    constructor(http) {
        this.http = http;
    }

    activate() {

    }
}
