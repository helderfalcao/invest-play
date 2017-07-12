import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';

@inject(Router)
export class FluxoPerfil {
    pergunta = {
        "objetivo": "descrição objetivo",
        "titulo": "Titulo da pergunta",
        "opcoes": [
            { "descricao": "pergunta 1" },
            { "descricao": "pergunta 2" },
            { "descricao": "pergunta 3" },
            { "descricao": "pergunta 4" }]
    }
    constructor(router) {
        this.router = router;
    }

    nextScreen() {
        this.router.navigate('carteira');
    }

}
