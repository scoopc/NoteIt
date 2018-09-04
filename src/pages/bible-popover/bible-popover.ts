import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BiblePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bible-popover',
  templateUrl: 'bible-popover.html',
})
export class BiblePopoverPage {

  theBook;
  theChapter;
  theVerse;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    var targetVerseData = this.navParams.get("toInsertIntoNote")
    console.log('ionViewWillEnter BiblePopoverPage');
    console.log(targetVerseData);

    this.theBook = targetVerseData.BibleName,
    this.theChapter = targetVerseData.BibleChapterNum,
    this.theVerse = targetVerseData.TargetBibleVerseNum



  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad BiblePopoverPage');
  }

}
