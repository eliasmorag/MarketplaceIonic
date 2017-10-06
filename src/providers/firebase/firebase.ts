import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Comentario } from '../../models/comentario'

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  productos:FirebaseListObservable<any[]>;
  comentarios:FirebaseListObservable<any[]>;
  producto:FirebaseObjectObservable<any[]>;
  folder:any;

  constructor(public http: Http, private af:AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
    this.folder = 'productoimages';
  }
  getProductos(){
    this.productos = this.af.list('/productos/') as FirebaseListObservable<Producto[]>
    console.log(this.productos)
    console.log("arriba prod")
    return this.productos;
    
  }
  getComentarios(){
    this.comentarios = this.af.list('/comentario/') as FirebaseListObservable<Comentario[]>
    console.log(this.comentarios)
    console.log("holaaaa")
    return this.comentarios;
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
  comentario?:string;
}
