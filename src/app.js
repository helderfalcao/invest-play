import { inject } from 'aurelia-framework';
import 'fetch';

export class App {

  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'Investplay';
    config.map([
      { route: ['', 'apresentacao'], name: 'apresentacao', moduleId: 'eduflow/login', nav: true },
      { route: 'investimento', name: 'investimento', moduleId: 'perfil/investimento', nav: true },
      { route: 'fluxo-perfil', name: 'fluxo-perfil', moduleId: 'perfil/fluxo-perfil', nav: true },
      { route: 'carteira', name: 'carteira', moduleId: 'perfil/carteira', nav: true },
      { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard/home', nav: true },
      { route: 'adm', name: 'adm', moduleId: 'adm/home', nav: true },
      { route: 'produto-home', name: 'produto-home', moduleId: 'dashboard/produto-home', nav: true },
      { route: 'fluxo-pergunta-produto', name: 'fluxo-pergunta-produto', moduleId: 'dashboard/fluxo-pergunta-produto', nav: true },
      { route: 'cadastro-pergunta', name: 'cadastro-pergunta', moduleId: 'adm/cadastro/cadastro-pergunta' },
      { route: 'consulta-pergunta', name: 'consulta-pergunta', moduleId: 'adm/consulta/consulta-pergunta' },
      { route: 'cadastro-exercicio', name: 'cadastro-exercicio', moduleId: 'adm/cadastro/cadastro-exercicio' },
      { route: 'consulta-exercicio', name: 'consulta-exercicio', moduleId: 'adm/consulta/consulta-exercicio' },
      { route: 'cadastro-modulo', name: 'cadastro-modulo', moduleId: 'adm/cadastro/cadastro-modulo' },
      { route: 'consulta-modulo', name: 'consulta-modulo', moduleId: 'adm/consulta/consulta-modulo' },
      //Fluxo edu
      { route: 'login-aluno', name: 'login-aluno', moduleId: 'eduflow/login' },
      { route: 'exercicio-aluno', name: 'exercicio-aluno', moduleId: 'eduflow/exercicio' },
      { route: 'modulo-aluno', name: 'modulo-aluno', moduleId: 'eduflow/modulo' },
      { route: 'resposta-pergunta', name: 'resposta-pergunta', moduleId: 'eduflow/resposta-pergunta' }
      
    ]);

    this.router = router;
  }

  configurarUsuario(usuario) {
    this.usuario = usuario;
  }

}
