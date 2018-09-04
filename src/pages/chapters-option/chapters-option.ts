import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptGeneratorProvider } from '../../providers/opt-generator/opt-generator';
import { BiblePage } from '../bible/bible';

/**
 * Generated class for the ChaptersOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapters-option',
  templateUrl: 'chapters-option.html',
})
export class ChaptersOptionPage {

  chaptersArray:any[]=[];
  mybook:string;
  mybookIndex: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private OptGenerator:OptGeneratorProvider,
  ) {
    
  }

  ionViewWillEnter(){
    this.mybook = this.navParams.get("sel_book");
    this.mybookIndex = this.navParams.get("book_index");
    this.chaptersArray =  this.OptGenerator.generateChapters(this.mybook);
  }

  ionViewDidLoad() {
    
    //console.log('ionViewDidLoad ChaptersOptionPage');
  }

 
  nowToBible(val){
    var bookOptions = {
      myBookIndex:this.mybookIndex,
      myBook: this.mybook,
      myChapter: val
    }

    this.navCtrl.pop();
    //this.navCtrl.popTo(BiblePage, {sel_bookVerse: bookChapter});
    this.navCtrl.push(BiblePage, {sel_bookOptions: bookOptions});
  
  }

}
