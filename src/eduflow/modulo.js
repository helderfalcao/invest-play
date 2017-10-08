import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ModuloService } from '../services/ModuloService';
import { PerguntaService } from '../services/PerguntaService';

@inject(Router, ModuloService, PerguntaService)
export class Modulo {

    constructor(router, moduloService, perguntaService) {
        this.router = router;
        this.moduloService = moduloService;
        this.perguntaService = perguntaService;
    }

    activate(params) {
        this.idExercicio = params.idExercicio
        this.buscarPerguntas(this.idExercicio);
    }

    buscarPerguntas(idExercicio) {
        var This = this;
        this.moduloService.buscarModuloPorExercicio(idExercicio)
            .then(response => response.json())
            .then(function (data) {
                This.modulos = data;
                if (This.modulos.length) {
                    This.perguntaService.buscarPerguntaPorModulo(This.modulos[0]._id)
                        .then(response => response.json())
                        .then(function (data) {
                            This.perguntas = data;
                        }).catch(function (error) {
                            console.log(error);
                        });
                }
            }).catch(function (error) {
                console.log(error);
            });;
    }
}
