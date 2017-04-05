import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Contatos {
    title = 'Apoiadores';
    
    constructor(http) {
        this.http = http;
    }

    activate() {
    }

}
