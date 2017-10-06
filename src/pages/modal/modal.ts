import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart'
import { Producto } from '../../app/producto'
import { ToastController } from 'ionic-angular';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database'
import {FirebaseProvider} from '../../providers/firebase/firebase'
import { Comentario } from '../../models/comentario'
import { Profile } from '../../models/profile'
import { DatePipe } from '@angular/common';

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
  mostrarComentarios=false;  
  producto:Producto;
  productos:any;
  cantidad=1;
  comentario = {} as Comentario
  comentarios: FirebaseListObservable<any[]>
  constructor(public navCtrl: NavController,private firebaseService:FirebaseProvider, public navParams: NavParams, private view:ViewController, protected cartService:CartProvider,public toastCtrl: ToastController, private database:AngularFireDatabase) {
    this.comentario.usuario=navParams.get('username'); 
    this.producto=this.navParams.get('pro');
    this.firebaseService.getProductos().subscribe(productos => {
      this.productos = productos;
    //this.firebaseService.getComentarios().subscribe(comentarios => {
    //  this.comentarios = comentarios;
     // })
    })};    
  closeModal(producto){
    this.view.dismiss(producto);
  }

  verComentarios(){
    this.mostrarComentarios=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.comentarios=this.database.list(`comentario/${this.producto.id}`)
  }
  save(producto : Producto,usuario : Profile) {
    const currentDate = (new Date()).toString();
    const today: number = Date.now();
    this.comentario.fecha=today;
    this.database.list(`comentario/${producto.id}`).push(this.comentario)
    this.comentario.comentario="";
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
    this.cantidad=1;
  }

}