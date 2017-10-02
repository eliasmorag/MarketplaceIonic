import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { CartPage } from '../pages/cart/cart'
import { TabsPage } from '../pages/tabs/tabs'
import { DetailPage } from '../pages/detail/detail'
import { Facebook } from '@ionic-native/facebook';

import { FirebaseProvider } from '../providers/firebase/firebase';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBTGY08NdYQq6BuT2JgjuYo4QTnAYm8IJ0",
  authDomain: "productos-angular.firebaseapp.com",
  databaseURL: "https://productos-angular.firebaseio.com",
  projectId: "productos-angular",
  storageBucket: "productos-angular.appspot.com",
  messagingSenderId: "837986261668"
  }

firebase.initializeApp ({
  apiKey: "AIzaSyBTGY08NdYQq6BuT2JgjuYo4QTnAYm8IJ0",
  authDomain: "productos-angular.firebaseapp.com",
  databaseURL: "https://productos-angular.firebaseio.com",
  projectId: "productos-angular",
  storageBucket: "productos-angular.appspot.com",
  messagingSenderId: "837986261668"
  });


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    ProfilePage,
    CartPage,
    TabsPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    ProfilePage,
    CartPage,
    TabsPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    FirebaseProvider,
  ]
})
export class AppModule {}
