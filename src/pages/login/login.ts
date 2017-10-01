import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../home/home'
import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  userData = null;
  homePage = HomePage;
  constructor(private facebook:Facebook,public navCtrl:NavController) {

  }

  loginWithFB(){
    this.facebook.login(['email', 'user_about_me']).then((response:FacebookLoginResponse)=> {
      this.facebook.api('me?fields=id,name,email,picture.width(720).height(720).as(picture_large)',[]).then(profile =>{
        this.userData = {email: profile['email'], picture: profile['picture_large']['data']['url'], username: profile['name']};
      })
    });
    this.navCtrl.setRoot(TabsPage,{
      mail:this.userData.email,
      foto:this.userData.picture,
      nombre:this.userData.username
    });
  }
}
