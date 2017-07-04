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
      { route: 'modulos', name: 'modulos', moduleId: 'dashboard/modulos', nav: true },
      { route: 'quiz', name: 'quiz', moduleId: 'dashboard/quiz', nav: true },
      { route: 'md-select',  name: 'md-select', moduleId: 'material/select/md-select', nav: true, title: 'Select' },
      { route: 'md-button',  name: 'md-button', moduleId: 'material/button/md-button', nav: true, title: 'Button' },
      { route: 'md-slider',  name: 'md-slider', moduleId: 'material/slider/md-slider', nav: true, title: 'Slider' }
    ]);

    this.router = router;
  }

  activate() {
  }

}
