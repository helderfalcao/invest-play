import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { App } from 'app';
import 'fetch';

@inject(HttpClient, App)
export class info_2 {    
    
    constructor(http, app) {
        this.http = http;
        this.app = app;
    }

    activate() {
        this.app.updateProgress(2, 40);
    }
}
