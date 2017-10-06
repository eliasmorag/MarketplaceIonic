import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider  } from '../../providers/cart/cart'
import { Cart } from '../../app/cart'
import { HomePage } from '../home/home';
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
  public totalQuantity: number;
  public tab1Root = HomePage;
  userData = null;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,protected cartService: CartProvider) {
    this.userData = {email: navParams.get('email'), picture: navParams.get('picture'), username: navParams.get('username')};
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
            let cantida=0;
            for(let cart of this.cartList) {
                
                total += cart.producto.precio * cart.quantity;
                cantida += cart.quantity;
            }
            this.totalPrice = total;
            this.totalQuantity=cantida;
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
  };

  removeFromCart = index => {
    this.cartService.removeCart(index);
  };
  goHome(){
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.goToRoot;
  }
}
