import { inject } from 'aurelia-framework';
import 'fetch';

export class App {

  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'Investplay';
    config.map([
      { route: ['', 'apresentacao'], name: 'apresentacao', moduleId: 'intro/apresentacao', nav: true },
      { route: 'login', name: 'login', moduleId: 'intro/login', nav: true },
      { route: 'investimento', name: 'investimento', moduleId: 'perfil/investimento', nav: true },
      { route: 'objetivo', name: 'objetivo', moduleId: 'perfil/objetivo', nav: true },
      { route: 'carteira', name: 'carteira', moduleId: 'perfil/carteira', nav: true },
      { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard/home', nav: true },
    ]);

    this.router = router;
  }

  activate() {
  }

}
