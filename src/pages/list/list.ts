import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    curso;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListPage');

        let item = this.navParams.get('detalhe');

        console.log("ListPage", item);

        this.curso = item;
    }

    fechar() {
        //dava error ao abrir a tela de detalhes(list) sem ser clicando nos cursos, daí quando fechava dava error pois não encontrava a página root
        //this.navCtrl.pop()
        this.navCtrl.setRoot(HomePage);
    }
}
