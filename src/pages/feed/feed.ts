import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { checkNoChangesView } from '@angular/core/src/view/view';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = 'Denis Barbosa';//variavel do tipo string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {//metodo que carrega junto com tela
  }

}
