import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import 'fetch';

@inject(HttpClient, Router)
export class Final {    
    
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }

    activate() {
    }

}