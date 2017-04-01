import { inject } from 'aurelia-framework';
import { HttpService } from '../services/HttpService';
import 'fetch';

@inject(HttpService)
export class UserInfo {
    user;

    constructor(http) {
        this.http = http;
    }

    authUser(userCallback) {
        if (this.user) {
            userCallback(this.user);
        } else {
            let request = 'auth';
            return this.http.GET(request)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.user = data;
                    userCallback(this.user);
                }).catch(function(error) {
                    console.log(error);
                });
        }
    }

    salvarInfoUserObjetivo(objetivo) {
        var This = this;
        this.authUser(function(user) {
            var userInfo = {
                "idUsuario": user._id,
                "objetivo": objetivo
            };
            let request = 'usuarioinfo';
            return This.http.POST(request, userInfo)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                }).catch(function(error) {
                    console.log(error);
                });
        });
    }
}