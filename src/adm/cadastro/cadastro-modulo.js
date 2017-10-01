
import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ModuloService } from '../../services/ModuloService';

@inject(Router, ModuloService)
export class CadastroModulo {

    constructor(router, moduloService) {
        this.router = router;
        this.moduloService = moduloService;
        this.modulo = {};
    }

    attached() {
        Materialize.updateTextFields();
    }

    activate(params) {
        var This = this;
        this.moduloService
            .buscarModuloById(params.id)
            .then(response => response.json())
            .then(data => {
                This.modulo = data;
            }).catch(function (error) {
                console.log(error);
            });
    }

    salvarModulo() {
        var This = this;
        if (this.modulo._id) {
            this.moduloService.editarModulo(this.modulo)
                .then(response => response.json())
                .then(data => {
                    This.router.navigate('consulta-modulo');
                }).catch(function (error) {
                    console.log(error);
                });
        } else {
            this.moduloService.salvarModulo(this.modulo)
                .then(response => response.json())
                .then(data => {
                    This.router.navigate('consulta-modulo');
                }).catch(function (error) {
                    console.log(error);
                });
        }
    }

}