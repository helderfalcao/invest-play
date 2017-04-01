import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Agradecimento {    
    
    constructor(http) {
        this.http = http;
    }

    activate() {
    }

}