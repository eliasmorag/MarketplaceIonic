import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart'
import { Producto } from '../../app/producto'
import { ToastController } from 'ionic-angular';
import {AngularFireDatabase,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database'
import {FirebaseProvider} from '../../providers/firebase/firebase'
import { Comentario } from '../../models/comentario'
import { HomePage } from '../../pages/home/home'
import { Profile } from '../../models/profile'
import { AngularFireAuth } from 'angularfire2/auth';

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
  productos:any;
  cantidad:any;
  comentario = {} as Comentario
  comentarios = null;
  constructor(public navCtrl: NavController,private firebaseService:FirebaseProvider, public navParams: NavParams, private view:ViewController, protected cartService:CartProvider,public toastCtrl: ToastController, private database:AngularFireDatabase) {
    this.producto=this.navParams.get('pro');
    this.firebaseService.getProductos().subscribe(productos => {
      this.productos = productos;
    this.firebaseService.getComentarios().subscribe(comentarios => {
      this.comentarios = comentarios;
      })
    })};

  closeModal(producto){
    this.view.dismiss(producto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  save(producto : Producto,usuario : Profile) {
    this.database.list(`comentario/${producto.id}`).push(this.comentario)
     // .then(() => {this.navCtrl.setRoot('HomePage')})
    console.log(this.comentario);
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