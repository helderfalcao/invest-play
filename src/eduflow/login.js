import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { App } from '../app';

@inject(Router, App)
export class Login {
    
    constructor(router, app) {
        this.router = router;
        this.app = app;
    }

    login() {
        this.app.configurarUsuario(this.usuario);
        this.router.navigate('exercicio-aluno');
    }

}
