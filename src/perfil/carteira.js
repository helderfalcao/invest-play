import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@inject(Router)
export class Carteira {
    
    constructor(router) {
        this.router = router;
        this.investRange = this.createRange("Valor Atual", 0, 5000);
        this.mesInvestRange = this.createRange("Valor mensal", 0, 1000);
        this.riscoRange = this.createRange("Risco(escala de 0 a 10)", 0, 10);;
        this.risco = 0;
        this.min = 0;
        this.max = 5000;
    }

    nextScreen() {
        this.router.navigate('objetivo');
    }

    createRange(label, min, max) {
        return {
            "label": label,
            "min" : min,
            "max" : max,
            "value" : 0
        }
    }

}
