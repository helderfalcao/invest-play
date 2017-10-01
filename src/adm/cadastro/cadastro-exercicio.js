
import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ExercicioService } from '../../services/ExercicioService';

@inject(Router, ExercicioService)
export class CadastroExercicio {

    constructor(router, exercicioService) {
        this.router = router;
        this.exercicioService = exercicioService;
        this.exercicio = {};
    }

    attached() {
        Materialize.updateTextFields();
    }

    activate(params) {
        var This = this;
        this.exercicioService
            .buscarExercicioById(params.id)
            .then(response => response.json())
            .then(data => {
                This.exercicio = data;
            }).catch(function (error) {
                console.log(error);
            });
    }

    salvarExercicio() {
        var This = this;
        if (this.exercicio._id) {
            this.exercicioService.editarExercicio(this.exercicio)
                .then(response => response.json())
                .then(data => {
                    This.router.navigate('consulta-exercicio');
                }).catch(function (error) {
                    console.log(error);
                });
        } else {
            this.exercicioService.salvarExercicio(this.exercicio)
                .then(response => response.json())
                .then(data => {
                    This.router.navigate('consulta-exercicio');
                }).catch(function (error) {
                    console.log(error);
                });
        }
    }

}