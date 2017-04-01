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
      { route: 'info1', name: 'info1', moduleId: 'intro/info_1', title: 'Investplay Info' }
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
