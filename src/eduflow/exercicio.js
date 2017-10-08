import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ExercicioService } from '../services/ExercicioService';

@inject(Router, ExercicioService)
export class Exercicio {

    constructor(router, exercicioService) {
        this.router = router;
        this.exercicioService = exercicioService;
    }

    nextScreen(idExercicio) {
        this.router.navigate('modulo?idExercicio=' + idExercicio);
    }

    listarExercicios() {
        var This = this;
        this.exercicioService
            .buscarExercicios()
            .then(response => response.json())
            .then(data => {
                This.exercicios = data;
            }).catch(function (error) {
                console.log(error);
            });;
    }

    attached() {
        this.listarExercicios();
    }

}
