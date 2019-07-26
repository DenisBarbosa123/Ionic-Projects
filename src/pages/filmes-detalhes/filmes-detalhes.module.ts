import {NgModule} from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { FilmesDetalhesPage } from "./filmes-detalhes";
import { NgClass } from '@angular/common';

@NgModule({
    declarations:[
        FilmesDetalhesPage,
    ],
    imports:[
        IonicPageModule.forChild(FilmesDetalhesPage),
    ],
    exports:[
        FilmesDetalhesPage
    ]
})

export class FilmesDetalhesPageModule{}
