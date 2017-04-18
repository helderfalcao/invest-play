import { bindable, inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import { UserInfo } from '../services/UserInfo';
import { mask } from 'jquery-mask-plugin';
import 'fetch';

@inject(HttpClient, Router, UserInfo)
export class Fechamento {
    @bindable mask = null

    constructor(http, router, userInfo) {
        this.http = http;
        this.router = router;
        this.userInfo = userInfo
    }

    activate() {
        this.applyMaskPhone();
    }

    submit() {
        this.userInfo.salvarInfoUserFeedback(this.nome, this.email, this.feedback, this.phone);
        this.router.navigate("agradecimento");
    }

    applyMaskPhone() {
        var SPMaskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
            spOptions = {
                onKeyPress: function (val, e, field, options) {
                    field.mask(SPMaskBehavior.apply({}, arguments), options);
                }
            };

        $('#phone').mask(SPMaskBehavior, spOptions);
    }

}