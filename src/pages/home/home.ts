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

  constructor(private firebaseService:FirebaseProvider,public navCtrl: NavController,public navParams: NavParams) {
    this.userData = {email: navParams.get('mail'), picture: navParams.get('foto'), username: navParams.get('nombre')};
    this.firebaseService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }
}
