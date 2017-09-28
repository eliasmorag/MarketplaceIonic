import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userData = null;
  constructor(private facebook:Facebook) {

  }

  /*login(){
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      }).catch(function(error){
        alert(JSON.stringify(error))
      });
    })
  }*/

  loginWithFB(){
    this.facebook.login(['email', 'user_about_me']).then((response:FacebookLoginResponse)=> {
      this.facebook.api('me?fields=id,name,email,picture.width(720).height(720).as(picture_large)',[]).then(profile =>{
        this.userData = {email: profile['email'], picture: profile['picture_large']['data']['url'], username: profile['name']};
      })
    })
  }

}
