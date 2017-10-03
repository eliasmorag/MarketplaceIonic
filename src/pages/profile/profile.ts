import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Profile } from '../../models/profile';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileData:FirebaseObjectObservable<Profile>
  userData = null;

  constructor(private afAuth:AngularFireAuth, private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
    this.userData = {email: navParams.get('email'), picture: navParams.get('picture'), username: navParams.get('username')};
  }

  editProfile(){
    this.navCtrl.push('EditProfilePage',{
      mail:this.userData.email,
      foto:this.userData.picture,
      nombre:this.userData.username
    });
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data =>{
      this.profileData = this.afDatabase.object(`profile/${data.uid}`)
    })
  }

}
