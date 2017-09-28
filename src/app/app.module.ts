import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook } from '@ionic-native/facebook';

import firebase from 'firebase';


firebase.initializeApp({
  apiKey: "AIzaSyAw511SdhAZc1_6D-kPTAHGSpx1XgzwKPM",
  authDomain: "marketplace-aed36.firebaseapp.com",
  databaseURL: "https://marketplace-aed36.firebaseio.com",
  projectId: "marketplace-aed36",
  storageBucket: "marketplace-aed36.appspot.com",
  messagingSenderId: "150581034664"
});

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
  ]
})
export class AppModule {}
