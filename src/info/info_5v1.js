import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class info_5v1 {    
    
    constructor(http) {
        this.http = http;
    }

    activate() {

    }
}
