import {NgModule} from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { NgClass } from '@angular/common';
import { ConfiguracoesPage } from './configuracoes';

@NgModule({
    declarations:[
        ConfiguracoesPage,
    ],
    imports:[
        IonicPageModule.forChild(ConfiguracoesPage),
    ],
    exports:[
        ConfiguracoesPage
    ]
})

export class ConfiguracoesPageModule{}
