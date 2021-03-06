import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // rootPage:any = TabsPage;
   rootPage:any = LoginPage;
  
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let config = {
        apiKey: "AIzaSyDBzJc7ihzhp8_5Y1wz9wMOD74ZNwoNI10",
        authDomain: "delivery-b1f6d.firebaseapp.com",
        databaseURL: "https://delivery-b1f6d.firebaseio.com",
        projectId: "delivery-b1f6d",
        storageBucket: "delivery-b1f6d.appspot.com",
        messagingSenderId: "697936417847"
      };
      firebase.initializeApp(config);
    });
  }
}
