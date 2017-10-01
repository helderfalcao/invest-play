
import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ModuloService } from '../../services/ModuloService';

@inject(Router, ModuloService)
export class ConsultaModulo {

    constructor(router, moduloService) {
        this.router = router;
        this.moduloService = moduloService;
        this.modulos = [];
    }

    attached() {
        this.listarModulos();
        Materialize.updateTextFields();
    }

    listarModulos() {
        var This = this;
        this.moduloService
            .buscarModulos()
            .then(response => response.json())
            .then(data => {
                This.modulos = data;
            }).catch(function (error) {
                console.log(error);
            });;
    }

    editarModulo(idModulo) {
        this.router.navigate('cadastro-modulo?id=' + idModulo);
    }

    novoModulo() {
        this.router.navigate('cadastro-modulo');
    }

}