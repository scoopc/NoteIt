import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BibleServices} from './services/bible.services'
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';
import { firebaseConfig } from './credentials';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  providers:[BibleServices]
})
export class MyApp {
  rootPage:any;

  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      firebase.initializeApp(firebaseConfig);
      
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (!user) {
        this.rootPage = LoginPage;
        unsubscribe();
        } else {
        this.rootPage = HomePage;
        unsubscribe();
        }
        });



      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }
}

