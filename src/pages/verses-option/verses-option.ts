import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BibleOptionsPage } from '../bible-options/bible-options';

/**
 * Generated class for the VersesOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verses-option',
  templateUrl: 'verses-option.html',
})
export class VersesOptionPage {

  versesArray:any[]=[];
  myVerses:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.verses();
  }

  ionViewDidLoad() {
    //this.myVerses = this.navParams.get("sel_bookVerse");
    console.log('ionViewDidLoad VersesOptionPage');
    console.log(this.navParams.get("sel_bookVerse"));

  }

  verses(){
    this.versesArray =  [
      1,2,3, 4,5, 6,7, 8,9,10,11,12,13,14,15,16,17,18,19,20
    ]
  }

}
