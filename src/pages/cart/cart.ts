import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider  } from '../../providers/cart/cart'
import { Cart } from '../../app/cart'
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public cartList:Cart[];
  public totalPrice: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,protected cartService: CartProvider) {
    this.loadCart();
    console.log(this.cartList);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  loadCart = () => {
    this.cartService.cartListSubject
        .subscribe(res => {
            this.cartList = res;
            console.log(this.cartList);
            let total = 0;
            for(let cart of this.cartList) {
                
                total += cart.producto.precio * cart.quantity;

            }
            this.totalPrice = total;
            console.log(this.totalPrice);

        })

};

doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  this.loadCart();
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}

}
