import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import {BibleServices} from '../../app/services/bible.services'
import { BibleOptionsPage } from '../bible-options/bible-options';
import { BiblePopoverPage } from '../bible-popover/bible-popover';

/**
 * Generated class for the BiblePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage {

  bibleContent:any []= [];
  bibleName:any;
  bibleNameChptrs:any[]=[];
  bibleNameChapter: any[]=[];

  bibleBookIndex:number = 0;
  bibleBookChpNum:number = 0;
  bibleChpNumhead : any = 1;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private bibleservice : BibleServices,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController
  ) {

  }

  ionViewWillEnter(){
    this.getBibleContent();

   var mybibleopt =  this.navParams.get("sel_bookOptions");
   if(mybibleopt){

     var selChapterNum = mybibleopt.myChapter -1;
     this.bibleBookChpNum = selChapterNum ;
     this.bibleChpNumhead =  mybibleopt.myChapter;
     this.bibleBookIndex = mybibleopt.myBookIndex;


     //this.bibleBookIndex = booknameIndex;

    console.log("from Select mybibleopt");
    console.log(mybibleopt);
    //console.log(booknameIndex);

   }else {
     console.log("nothing yet");
   }
    //this.trythis();
  }

  private getBibleContent() {
    this.bibleservice.getBibleVerse()
      .subscribe(response => {
        this.bibleContent = response;
        //console.log("From Bible:");
        console.log(response);
        this.bibleName = this.bibleContent[this.bibleBookIndex].name;
        //this.bibleNameChptrs = this.bibleContent[0].chapters;
        this.bibleNameChapter = this.bibleContent[this.bibleBookIndex].chapters[this.bibleBookChpNum];
        //var bibleNameVerse = this.bibleContent[this.bibleBookIndex].chapters[this.bibleBookChpNum][0];
        //console.log(bibleNameVerse);
      });
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }


  ionViewDidLoad() {
    this.presentLoading();
    console.log('ionViewDidLoad BiblePage');
  }

  chooseOpt(){
    this.navCtrl.pop();
    this.navCtrl.push(BibleOptionsPage);
   
  }// end of choose opt

  swipRight(){
    this.bibleChpNumhead--;
    this.bibleBookChpNum--
    if(this.bibleBookChpNum >= 0){
      
      this.getBibleContent();
    }else {
      console.log("No more chapters")
    }

    if(this.bibleChpNumhead < 1){
      this.bibleChpNumhead = 1;
    }
    
    //alert("Go to Prev Chapter");
  }// end of to prev chapter

  


  swipLeft(){
    if(this.bibleBookChpNum < 0){
      this.bibleBookChpNum = 0;
      this.bibleChpNumhead = 1;
      this.bibleChpNumhead++;
      this.bibleBookChpNum++
      this.getBibleContent();
    } else {
      this.bibleChpNumhead++;
      this.bibleBookChpNum++
      this.getBibleContent();
    }
  }// end of to prev chapter

  pressEvent(i){
    var targetVerseIndex = i;

    this.bibleservice.getBibleVerse()
      .subscribe(response => {
        this.bibleContent = response;
        //console.log(response);
        this.bibleName = this.bibleContent[this.bibleBookIndex].name;

        //this.bibleNameChapter = this.bibleContent[this.bibleBookIndex].chapters[this.bibleBookChpNum];
        var bibleChapterNum = this.bibleBookIndex + 1;
        var targetBibleVerseNum = targetVerseIndex+1 ;
        var targetBibleVerse = this.bibleContent[this.bibleBookIndex].chapters[this.bibleBookChpNum][targetVerseIndex];
        
        var toInsertIntoNoteObj = {
          BibleName: this.bibleName,
          BibleChapterNum: bibleChapterNum,
          TargetBibleVerseNum: targetBibleVerseNum,
          TargetBibleVerse: targetBibleVerse
        }

        //console.log(toInsertIntoNoteObj);

        const popover = this.popoverCtrl.create(BiblePopoverPage, {toInsertIntoNote:toInsertIntoNoteObj});
        popover.present();
        //console.log("targetVerseIndex: " + targetVerseIndex);

      });


    
  }

}// end of class
