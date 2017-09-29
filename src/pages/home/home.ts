import { Component } from '@angular/core';
import {FirebaseProvider} from '../../providers/firebase/firebase'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userData = null;
  productos:any;

  constructor(private firebaseService:FirebaseProvider) {
    this.firebaseService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }
}
