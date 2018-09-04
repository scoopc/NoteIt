import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BibleServices } from '../../app/services/bible.services';
import { OptGeneratorProvider } from '../../providers/opt-generator/opt-generator';
import { ChaptersOptionPage } from '../chapters-option/chapters-option';



@IonicPage()
@Component({
  selector: 'page-bible-options',
  templateUrl: 'bible-options.html',
})
export class BibleOptionsPage {

  bookSelected:string;
  chaterSelected:string;
  verseSelected:string;

  biblebooks:any[]=[];
  bibleChapters:any[]=[];
  book: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private bibleservice : BibleServices,
    private OptGenerator :OptGeneratorProvider

  ) {
    this.book = "gn";
    //console.log(this.book);

  }

  ionViewDidLoad() {
    this.bibleservice.getBibleVerse()
    .subscribe(
      response=>{
        this.biblebooks = response;
      }
    )
    console.log('ionViewDidLoad BibleOptionsPage');
  }

 
//generate book function
  getBook(book){
    this.bookSelected = book;
    this.bibleChapters = this.OptGenerator.generateChapters(book);
    //console.log(this.bibleChapters[0].abbrev);


  }

  toGetChapter(bookabbrev){
    var bookIndex = this.biblebooks.findIndex(obj=>obj.abbrev === bookabbrev);
    this.navCtrl.pop();
    this.navCtrl.push(ChaptersOptionPage, {sel_book:bookabbrev, book_index:bookIndex});
    console.log("to get chapters");

    console.log(bookIndex);
    
    

  }

  

  

}
