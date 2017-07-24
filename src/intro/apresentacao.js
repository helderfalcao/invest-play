import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@inject(Router)
export class Apresentacao {

    constructor(router) {
        this.router = router;
    }

    nextScreen() {
        this.router.navigate('investimento');
    }

}
