import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;
import {Subject} from "rxjs";
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import * as HighCharts from 'highcharts';


declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  temp;
  humidity;
  myChart;

  constructor(public navCtrl: NavController) {

  }



  // afficher() {
  //     //temperature
  //     this.temp = firebase.database().ref('Temp/').on('value', (data: DataSnapshot) => {
  //       this.temp = data.val() ? data.val() : [];
  //     })

  //       //Humidite
  //       this.humidity = firebase.database().ref('Humidity/').on('value', (data: DataSnapshot) => {
  //         this.humidity = data.val() ? data.val() : [];

  //         console.log(this.temp + " " + this.humidity);
          
  //     }); 

  //   }
    //Localisation de l'objet connecté
    location() {
      this.navCtrl.push(ContactPage);
    }


    // STATITIQUE 1
    ionViewDidLoad() {


      this.temp = firebase.database().ref('Temp/').on('value', (data: DataSnapshot) => {
        this.temp = data.val() ? data.val() : [];
      })

        //Humidite
        this.humidity = firebase.database().ref('Humidity/').on('value', (data: DataSnapshot) => {
          this.humidity = data.val() ? data.val() : [];

          console.log(this.temp + " " + this.humidity);
          
      }); 

    }
    

  


  }

  // tempE() {
         
  // }
  
  // humidE() {
   
  
  // }


    //STATISTIQUE 2
    
    // ionViewDidLoad(){
    //   var data = google.visualization.arrayToDataTable([
    //     ['Label', 'Value'],
    //     ['Temperature', 80],
    //     ['Humidité', 55],
    //     ['Network', 68]
        
    //   ]);

    //   var options = {
    //     width: 400, height: 120,
    //     redFrom: 90, redTo: 100,
    //     yellowFrom:75, yellowTo: 90,
    //     minorTicks: 5
    //   };

    //   var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    //   chart.draw(data, options);

    //   setInterval(function() {
    //     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    //     chart.draw(data, options);
    //   }, 13000);
    //   setInterval(function() {
    //     data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    //     chart.draw(data, options);
    //   }, 5000);
    //   setInterval(function() {
    //     data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    //     chart.draw(data, options);
    //   }, 26000);

    // }

