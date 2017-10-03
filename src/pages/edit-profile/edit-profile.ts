import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile = {} as Profile;
  userData:any=null; //los datos de Facebook  
  

  constructor(private afAuth:AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.userData = {email: navParams.get('mail'), picture: navParams.get('foto'), username: navParams.get('nombre')};      
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(()=>this.navCtrl.pop())
    })
  }

  cancelar(){
    this.navCtrl.pop();
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
