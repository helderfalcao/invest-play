import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Prequestion {

    constructor(http) {
        this.http = http;
    }

    activate() {

    }
}    