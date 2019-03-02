import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email;
  password;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


   //CREATION DE L'UTILISATEURE 
  signUpUser(email: string , password: string){

    this.navCtrl.push(TabsPage);

    return new Promise(
        (resolve,reject) => {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    resolve (user);
                }
                
            ).catch(
                (error)=>{
                    reject(error);
                }
               
            );
            this.email = '';
            this.password = '';
            this.navCtrl.push(TabsPage);
        }
        
       
    )
   
        
    

}



//CONNEXION DE L'UTILISATEUR
signInUser(email: string , password: string){

  return new Promise(
      (resolve,reject) => {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              (user) => {
                  resolve (user);
              }
              
          ).catch(
              (error)=>{
                  reject(error);
              }
             
          );
          this.email = '';
          this.password = '';
          this.navCtrl.push(TabsPage);
      }
  );
  
}


}
