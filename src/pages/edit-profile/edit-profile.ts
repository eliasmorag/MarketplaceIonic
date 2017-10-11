import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { Geolocation } from '@ionic-native/geolocation';

declare var google:any;

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  @ViewChild('map') mapRef:ElementRef;
  datosFireBase:FirebaseObjectObservable<Profile>;
  profile = {} as Profile;
  userData:any=null; //los datos de Facebook  
  userLocation:any;
   
  

  constructor(private afAuth:AngularFireAuth, private afDatabase: AngularFireDatabase, private geolocation: Geolocation,
    public navCtrl: NavController, public navParams: NavParams) {
      this.userData = {email: navParams.get('mail'), picture: navParams.get('foto'), username: navParams.get('nombre')};
      this.datosFireBase = navParams.get('datosFireBase'); 
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(()=>this.navCtrl.pop())
    })
  }

  cancelar(){
    this.navCtrl.pop();
  }  

  ionViewDidLoad() {
    this.datosFireBase.subscribe(datos => {
      this.profile = datos;
    });
    if (this.profile.latitud && this.profile.longitud){
      this.showMap(this.profile.latitud,this.profile.longitud);
    } 
    else{
      this.showMap(-25.336348, -57.521995);
    }
    
  }

  showMap(lat, lng){

    const location = new google.maps.LatLng(lat,lng);    
    
    //Map Options
    const options = {
      center: location,
      zoom: 15,
      streetViewControl:false
    }

    const map = new google.maps.Map(this.mapRef.nativeElement,options);

    //this.addMarker(location, map);
    var marker = new google.maps.Marker({
      position: {lat,lng},
      map: map,
      title: 'Mi direccion',
      draggable:true,
      animation: google.maps.Animation.DROP,      
    });

    marker.addListener('click', toggleBounce);
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    marker.addListener('dragend', function(e) {
      map.setCenter(marker.getPosition());
      document.getElementById('profile.latitud').innerHTML=e.latLng.lat();
      document.getElementById('profile.longitud').innerHTML=e.latLng.lng();
    });

    
  }

  onLocateUser(){
     this.geolocation.getCurrentPosition().then((resp) => {
      this.userLocation = resp;
      this.profile.latitud=resp.coords.latitude;
      this.profile.longitud=resp.coords.longitude;
      this.showMap(resp.coords.latitude,resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    
  }

  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }

}
