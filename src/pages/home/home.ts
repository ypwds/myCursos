import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosProvider } from '../../providers/dados/dados';
import { ListPage } from '../list/list';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    cursosDone = [];  //Para os cursos concluídos
    cursosToDo = [];  //Para os cursos para fazer
    listas: string;

    constructor(public navCtrl: NavController, public dadosProvider: DadosProvider) {
        this.listas = "done";
    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter HomePage');

        //Pegando os cursos feitos e adicionando a vetor de cursos concluídos
        this.cursosDone = this.dadosProvider.pegarCursosDone();

        //Pegando os cursos para fazer e adicionando ao vetor de cursos pra fazer
        this.cursosToDo = this.dadosProvider.pegarCursosToDo();

        console.log("Dados recebidos no HOME: (Done)", this.cursosDone); //mostrando no console
        console.log("Dados recebidos no HOME: (ToDo)", this.cursosToDo); //mostrando no console
    }

    detalhar(curso) {
        //console.log("ENTRANDO NA TELA DE DETALHES");
        //console.log(curso);
        this.navCtrl.push(ListPage, { detalhe: curso });
    }

}
