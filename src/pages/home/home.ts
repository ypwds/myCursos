import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosProvider } from '../../providers/dados/dados';
import { ListPage } from '../list/list';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    cursos = [];
    listas: string;

    constructor(public navCtrl: NavController, public dadosProvider: DadosProvider) {
        this.listas = "done";
    }

    ionViewDidEnter() {
        this.cursos = this.dadosProvider.pegarCursos();

        console.log("Dados recebidos no HOME: ", this.cursos);
    }

    detalhar(item) {
        console.log("ENTRANDO NA TELA DE DETALHES");
        console.log(item.nome);
        console.log(item.conteudo);
        this.navCtrl.push(ListPage, { datelhes: item });
    }

}
