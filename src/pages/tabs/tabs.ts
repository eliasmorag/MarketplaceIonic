import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = ProfilePage;
  userData:any=null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userData = {email: navParams.get('mail'), picture: navParams.get('foto'), username: navParams.get('nombre')};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
