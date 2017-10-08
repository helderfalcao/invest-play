import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class ModuloService {

    constructor(http) {
        this.http = http;
    }

    buscarModulos() {
        let request = 'modulos';
        return this.http.GET(request);
    }

    buscarModuloById(id) {
        let request = 'modulos/' + id;
        return this.http.GET(request);
    }

    salvarModulo(Modulo) {
        let request = 'modulos';
        return this.http.POST(request, Modulo);
    }

    editarModulo(Modulo) {
        let request = 'modulos';
        return this.http.PUT(request, Modulo);
    }

    buscarModuloPorExercicio(idExercicio) {
        let request = 'modulosByExercicio/' + idExercicio;
        return this.http.GET(request);
    }
    
}