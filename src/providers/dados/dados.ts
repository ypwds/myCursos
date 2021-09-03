import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DadosProvider {

    constructor(public http: HttpClient) {
        console.log('Hello DadosProvider Provider');
    }

    pegarCursos() {

        let cursos = [];

        this.http.get('assets/db/cursos.json').toPromise().then(data => {
            console.log("Dados recebidos no PROVIDER: ", data);
            //console.log(data[1].nome);

            for (let key in data) {
                if(data.hasOwnProperty(key)) {
                    cursos.push(data[key]);
                }
            }
        });

        return cursos;
    }

}
