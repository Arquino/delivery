import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;
import {Subject} from "rxjs";
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  temp;
  humidity;

  constructor(public navCtrl: NavController) {

  }


  afficher() {
      //temperature
      this.temp = firebase.database().ref('Temp/').on('value', (data: DataSnapshot) => {
        this.temp = data.val() ? data.val() : [];
      })

        //Humidite
        this.humidity = firebase.database().ref('Humidity/').on('value', (data: DataSnapshot) => {
          this.humidity = data.val() ? data.val() : [];

          console.log(this.temp + " " + this.humidity);
          
      }); 

    }
    

  // tempE() {
         
  // }
  
  // humidE() {
   
  
  // }

  }

