
import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ExercicioService } from '../../services/ExercicioService';

@inject(Router, ExercicioService)
export class ConsultaExercicio {

    constructor(router, exercicioService) {
        this.router = router;
        this.exercicioService = exercicioService;
        this.exercicios = [];
    }

    attached() {
        this.listarExercicios();
        Materialize.updateTextFields();
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

    editarExercicio(idExercicio) {
        this.router.navigate('cadastro-exercicio?id=' + idExercicio);
    }

    novoExercicio() {
        this.router.navigate('cadastro-exercicio');
    }

}