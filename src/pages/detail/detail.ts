import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart'
import { Producto } from '../../app/producto'
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  producto:Producto;
  cantidad:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, protected cartService:CartProvider) {
    this.producto=this.navParams.get('pro');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addToCart(producto){
    this.cartService.addToCart({producto:this.producto,quantity: this.cantidad});
    console.log(producto);
    console.log(this.producto);
    console.log(this.cantidad);
  }

}
