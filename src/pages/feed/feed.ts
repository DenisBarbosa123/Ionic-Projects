import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { checkNoChangesView } from '@angular/core/src/view/view';
import {MoovieProvider} from '../../providers/moovie/moovie'
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
  ]
})
export class FeedPage {
  public object_feed = { // criando json e passando para variavel 
    titulo:"Denis Barbosa",
    data: "November, 5, 2019",
    descricao: "Estou criando um app incrivel...",
    qtd_like: 12,
    qtd_coment: 10,
    time_coment: "12h ago"
  }
  public nome_usuario:string = 'Denis Barbosa';//variavel do tipo string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider ) {
  }



  ionViewDidLoad() {//metodo que carrega junto com tela
    this.movieProvider.getLetesMovies().subscribe(
      data=>{
        console.log(data);
      }, error=>{
        console.log(error);
      }
    )
  }

}
