import { inject } from 'aurelia-framework';
import { UserInfo } from './services/UserInfo';
import 'fetch';

@inject(UserInfo)
export class App {
  user;
  constructor(userInfo) {
    this.userInfo = userInfo;
  }

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'login'], name: 'login', moduleId: 'intro/login', nav: true, title: 'Login investplay' },
      { route: 'objetivo', name: 'objetivo', moduleId: 'intro/objetivo', nav: true, title: 'Pré Pergunta Investplay' },
      { route: 'question/:id', name: 'question', moduleId: 'intro/questions', title: 'Perguntas Investplay' },
      { route: 'resultado/:resultado', name: 'resultado', moduleId: 'intro/resultado', title: 'Resultado Investplay' },
      { route: 'info1', name: 'info1', moduleId: 'info/info_1', title: 'Investplay Info' },
      { route: 'info2', name: 'info2', moduleId: 'info/info_2', title: 'Investplay Info' },
      { route: 'info3', name: 'info3', moduleId: 'info/info_3', title: 'Investplay Info' },
      { route: 'info4', name: 'info4', moduleId: 'info/info_4', title: 'Investplay Info' },
      { route: 'info5v1', name: 'info5v1', moduleId: 'info/info_5v1', title: 'Investplay Info' },
      { route: 'info5v2', name: 'info5v2', moduleId: 'info/info_5v2', title: 'Investplay Info' },
      { route: 'info5v3', name: 'info5v3', moduleId: 'info/info_5v3', title: 'Investplay Info' },
      { route: 'info5v4', name: 'info5v4', moduleId: 'info/info_5v4', title: 'Investplay Info' },
      { route: 'info5v5', name: 'info5v5', moduleId: 'info/info_5v5', title: 'Investplay Info' }
    ]);

    this.router = router;
  }

  activate() {
    var This = this;
    this.userInfo.authUser(function (user) {
      This.user = user;
    });
  }

}
