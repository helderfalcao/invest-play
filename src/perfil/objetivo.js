import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@inject(Router)
export class Objetivo {
    
    constructor(router) {
        this.router = router;
        this.selectedValue = 3;
    }

    nextScreen() {
        this.router.navigate('carteira');
    }

}
