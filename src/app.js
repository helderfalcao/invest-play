export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'login'], name: 'login', moduleId: 'intro/login', nav: true, title: 'Login investplay' },
      { route: 'prequestion', name: 'prequestion', moduleId: 'intro/prequestion', nav: true, title: 'Pré Pergunta Investplay' },
      { route: 'question', name: 'question', moduleId: 'intro/questions', nav: true, title: 'Perguntas Investplay' },
      { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
