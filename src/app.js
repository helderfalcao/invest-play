import { inject } from 'aurelia-framework';
import 'fetch';

export class App {

  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'Investplay';
    config.map([
      { route: ['', 'apresentacao'], name: 'apresentacao', moduleId: 'intro/apresentacao', nav: true },
      { route: 'investimento', name: 'investimento', moduleId: 'perfil/investimento', nav: true },
      { route: 'fluxo-perfil', name: 'fluxo-perfil', moduleId: 'perfil/fluxo-perfil', nav: true },
      { route: 'carteira', name: 'carteira', moduleId: 'perfil/carteira', nav: true },
      { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard/home', nav: true },
      { route: 'adm', name: 'adm', moduleId: 'adm/home', nav: true },
      { route: 'cadastro-pergunta', name: 'cadastro-pergunta', moduleId: 'adm/cadastro-pergunta', nav: true }
    ]);

    this.router = router;
  }

  activate() {
  }

}
