import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { AuthService } from '../services/AuthService'

@inject(Router, AuthService)
export class Apresentacao {

    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }

    autenticar() {
        this.authService.autenticarFacebook();
    }

}
