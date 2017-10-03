import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from "rxjs";
import {Cart} from "../../app/cart";
/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {

  public cartListSubject = new BehaviorSubject([]);
  public toggleCartSubject = new BehaviorSubject(false);

  constructor(public http: Http) {
    console.log('Hello CartProvider Provider');
  }


  toggleCart = () => {
      this.toggleCartSubject.next(!this.toggleCartSubject.getValue());
  };
  addToCart = (cart:Cart) => {
      let current = this.cartListSubject.getValue();
      let dup = current.find(c=>c.producto.name === cart.producto.name);
      if(dup) dup.quantity += cart.quantity;
      else current.push(cart);
      console.log(cart);
      this.cartListSubject.next(current);
  };
  reloadCart = (cartList) => {
      this.cartListSubject.next(cartList);
  };
  removeCart = index => {
      let current = this.cartListSubject.getValue();
      current.splice(index,1);
      this.cartListSubject.next(current);
  };

}
