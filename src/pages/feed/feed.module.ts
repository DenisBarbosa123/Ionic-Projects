import {NgModule} from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { FeedPage } from "./feed";
import { NgClass } from '@angular/common';

@NgModule({
    declarations:[
        FeedPage,
    ],
    imports:[
        IonicPageModule.forChild(FeedPage),
    ],
    exports:[
        FeedPage
    ]
})

export class FeedPageModule{}
