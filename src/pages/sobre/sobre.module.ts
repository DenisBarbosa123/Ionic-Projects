import {NgModule} from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { NgClass } from '@angular/common';
import { SobrePage } from './sobre';

@NgModule({
    declarations:[
        SobrePage,
    ],
    imports:[
        IonicPageModule.forChild(SobrePage),
    ],
    exports:[
        SobrePage
    ]
})

export class SobrePageModule{}
