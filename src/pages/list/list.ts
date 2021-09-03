import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
        this.navCtrl.pop();
    }
}
