import {NgModule} from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { NgClass } from '@angular/common';
import { PerfilPage } from './perfil';

@NgModule({
    declarations:[
        PerfilPage,
    ],
    imports:[
        IonicPageModule.forChild(PerfilPage),
    ],
    exports:[
        PerfilPage
    ]
})

export class PerfilPageModule{}
