import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
// commenting out for web build
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { WatchedMoviesService } from '../services/watched-movies.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    platform: Platform,
    // statusBar: StatusBar,
    // splashScreen: SplashScreen,
    private _watchedMoviesService: WatchedMoviesService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      // splashScreen.hide();
    });

    this._watchedMoviesService.init();
  }
}
