import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class ExercicioService {

    constructor(http) {
        this.http = http;
    }

    buscarExercicios() {
        let request = 'exercicios';
        return this.http.GET(request);
    }

    buscarExercicioById(id) {
        let request = 'exercicios/' + id;
        return this.http.GET(request);
    }

    salvarExercicio(exercicio) {
        let request = 'exercicios';
        return this.http.POST(request, exercicio);
    }

    editarExercicio(exercicio) {
        let request = 'exercicios';
        return this.http.PUT(request, exercicio);
    }
    
}