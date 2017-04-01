import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { ServiceUtils } from './ServiceUtils';

@inject(HttpClient, ServiceUtils)
export class HttpService {
    client;
    utils;
    constructor(client, utils) {
        this.utils = utils;
        this.client = client;
        this.client.configure(config => {
            config
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    response(response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response;
                    }
                });
        });
    }

    GET(requestUrl, query) {
        let request = new Request(this.utils.API_URL + requestUrl, {
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'Fetch'
            },
            query: query
        });
        return this.client.fetch(request);
    }

    POST(requestUrl, body) {
        let request = new Request(this.utils.API_URL + requestUrl,
            {
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'Fetch'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });
        return this.client.fetch(request);
    }

    PUT(requestUrl, body) {
        let request = new Request(this.utils.API_URL + requestUrl,
            {
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'Fetch'
                },
                method: 'PUT',
                body: JSON.stringify(body)
            });
        return this.client.fetch(request);
    }

} 