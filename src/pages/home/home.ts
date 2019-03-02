import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import 'firebase/database';
import DataSnapshot = firebase.database.DataSnapshot;
import {Subject} from "rxjs";
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  items = [
    "Fruits",
    "Légumes",
    "Poulets",
    "Poisson",
    "Boeuf" ,
  ];

   
  
  constructor(public navCtrl: NavController) {
    
  }

  itemSelected(item){
    this.navCtrl.push(AboutPage);

  }

  itemS(item: string){
    this.navCtrl.push(AboutPage, {items: item});

  }
  



}
