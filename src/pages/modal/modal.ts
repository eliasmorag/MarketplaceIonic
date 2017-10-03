import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart'
import { Producto } from '../../app/producto'
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  producto:Producto;
  cantidad:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController, protected cartService:CartProvider,public toastCtrl: ToastController) {
    this.producto=this.navParams.get('pro');
  }
  closeModal(producto){
    this.view.dismiss(producto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  addToCart(producto){
    this.cartService.addToCart({producto:this.producto,quantity: this.cantidad});
    console.log(producto);
    console.log(this.producto);
    console.log(this.cantidad);
    let toast = this.toastCtrl.create({
      message: 'Item agregado al carrito!',
      duration: 2000,
      position:'bottom' 
    });

    toast.present(toast);
    this.view.dismiss();
  }

}