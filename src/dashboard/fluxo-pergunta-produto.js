import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@inject(Router)
export class FluxoPerguntaProduto {

    constructor(router) {
        this.router = router;
    }

}
