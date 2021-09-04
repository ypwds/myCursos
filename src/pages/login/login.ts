import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    username = '';
    password = '';

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public autenticacaoProvider: AutenticacaoProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    entrar() {
        //console.log('Entrar ---' + ' Username: ' + this.username + ' Senha: ' + this.password);

        const loader = this.loadingCtrl.create({
            content: "Aguarde...",
        });
        loader.present();

        this.autenticacaoProvider.login(this.username, this.password).subscribe((data: any) => {
            console.log('Dados Recebidos:', data);
            loader.dismiss();

            if (data.username === this.username && data.senha == this.password) {
            //if (data.username === 'ypwds' && data.senha === 12345) {
                console.log('USUARIO LOGADO');
                this.navCtrl.setRoot(HomePage);

            } else {
                const alert = this.alertCtrl.create({
                    title: 'Erro',
                    subTitle: 'Verifique suas credenciais de acesso.',
                    buttons: ['OK']
                });
                alert.present();
            }

        }, error => {
            console.log('erro', error);
            loader.dismiss();

            const alert = this.alertCtrl.create({
                title: 'Offline',
                subTitle: 'Verifique sua conexão com a internet!',
                buttons: ['OK']
            });
            alert.present();
        });

        // this.navCtrl.setRoot(HomePage);
    }

    cadastrar(){
        console.log("AINDA EM CONSTRUÇÃO");

        const alert = this.alertCtrl.create({
            title: 'Indisponível',
            subTitle: 'Não estamos aceitando novos usuários no momento!',
            buttons: ['OK']
        });
        alert.present();
    }

}
