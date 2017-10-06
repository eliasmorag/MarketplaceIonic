import { Component } from '@angular/core';
import {FirebaseProvider} from '../../providers/firebase/firebase'
import { NavController ,NavParams,ModalController, ModalOptions} from 'ionic-angular';
import { DetailPage } from '../../pages/detail/detail'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userData = null;
  productos:any;
  galleryType = 'regular';
  producto:any;

  constructor(private modal:ModalController,private firebaseService:FirebaseProvider,public navCtrl: NavController,public navParams: NavParams) {
    this.userData = {email: navParams.get('email'), picture: navParams.get('picture'), username: navParams.get('username')};
    this.firebaseService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
    console.log(this.productos);
  }

  goDetail(producto){
    this.navCtrl.push(DetailPage,{pro:producto});
  }

  openModal(producto){
    
    const myModalOptions: ModalOptions={
      showBackdrop:true
    }
    const myModal=this.modal.create('ModalPage',{pro:producto, username:this.userData.username}, myModalOptions);
    myModal.present();
  }
}
