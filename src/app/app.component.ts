import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { configProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers:[
    configProvider
  ]
})
export class MyApp {
  rootPage:any;//primeira pagina que abre do app

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    ConfigProvider:configProvider) {
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.

        let config = ConfigProvider.getConfigData();

        if(config == null){//first open app
          this.rootPage = IntroPage;
          ConfigProvider.setConfigData(false);
        }else{//no first open app
          this.rootPage = TabsPage;
        }

        console.log(config);

        statusBar.styleDefault();
        splashScreen.hide();
      });
  }
}
