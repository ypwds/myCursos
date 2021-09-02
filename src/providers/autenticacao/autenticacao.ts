import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AutenticacaoProvider {

    constructor(public http: HttpClient) {
        console.log('Hello AutenticacaoProvider Provider');
    }

    login(username, senha) {
        // fazer uma função de login de usuário 
        //return this.http.get('http://httpbin.org/get');
        return this.http.get('assets/db/usuarios.json');
    }

    cadastrar() {
        //fazer uma função de cadastro de usuário
    }

    recuperarSenha() {
        //Fazer uma função para recuperar a senha se acesso
    }

}
