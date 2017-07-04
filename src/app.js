import { inject } from 'aurelia-framework';
import 'fetch';

export class App {

  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'Investplay';
    config.map([
      { route: ['', 'apresentacao'], name: 'apresentacao', moduleId: 'intro/apresentacao', nav: true },
      { route: 'login', name: 'login', moduleId: 'intro/login', nav: true }
    ]);

    this.router = router;
  }

  activate() {
  }

}
