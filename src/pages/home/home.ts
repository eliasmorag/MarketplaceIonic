import { Component } from '@angular/core';
import {FirebaseProvider} from '../../providers/firebase/firebase'
import { NavController ,NavParams} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userData = null;
  productos:any;
  galleryType = 'regular';

  constructor(private firebaseService:FirebaseProvider,public navCtrl: NavController,public navParams: NavParams) {
    this.userData = {email: navParams.get('email'), picture: navParams.get('picture'), username: navParams.get('username')};
    this.firebaseService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }
}
