import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  productos:FirebaseListObservable<any[]>;
  producto:FirebaseObjectObservable<any[]>;
  folder:any;

  constructor(public http: Http, private af:AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    this.folder = 'productoimages';
  }
  getProductos(){
    this.productos = this.af.list('/productos/') as FirebaseListObservable<Producto[]>
    return this.productos;
  }
  getProductoDetails(id){
    this.producto = this.af.object('/productos/'+id) as FirebaseObjectObservable<Producto[]>
    return this.producto;
  }
  deleteProducto(id){
    this.af.object('/productos/'+id).remove();
  }
}

interface Producto{
  id?:number;
  name?:string;
  descripcion?:string;
  price?:number;
  foto?:string;
  tipo?:string;
  cantidad?:number;
  color?:string;
  dimensiones?:string;
  peso?:string;
  caracteristicas?:string;
}
