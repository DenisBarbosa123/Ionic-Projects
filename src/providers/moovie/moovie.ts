import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3/";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLetesMovies(){
    return this.http.get(this.baseApiPath + "movie/popular?api_key="+this.getApiKey());
  }

  getApiKey():string{
    var key : string ='ff4d2c7b2ebcacbdb1aadbf6ea84a5cd'; 
    return key;
  }
}
