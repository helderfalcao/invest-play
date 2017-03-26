import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Contatos {
    title = 'Siga a investplay';
    
    constructor(http) {
        this.http = http;
    }

    activate() {

    }
}
