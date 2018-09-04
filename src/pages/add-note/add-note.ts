import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NotesDataService } from '../../app/services/notesDataService';
import { BiblePage } from '../bible/bible';

//Jquery in Use, dont take out
//declare var jquery:any;
//declare var $:any;
 

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {
   
  timestamp:any;
  noteyear:any;
  notemonth:any;
  noteday:any;
  notedate:any;
  notehour:any;
  notemin:any;
  

note: any;
noteTitle:string;
noteText:string;
//textarea;





  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private notesDataService : NotesDataService,
   
  ){
    this.note = navParams.get("note");

   
    var dateStamp = new Date();
    var notedayindex = dateStamp.getDay();
    var notemonthindex = dateStamp.getMonth();


    this.noteyear = dateStamp.getFullYear();
    this.notedate = dateStamp.getDate();
    this.noteday = this.processDateDay(notedayindex);
    this.notemonth = this.processDateMonth(notemonthindex);
    this.notehour = dateStamp.getHours();
    this.notemin = dateStamp.getMinutes();
    

   //console.log("notedayindex "+":"+notedayindex);
  }

  @ViewChild('textarea') textarea: ElementRef;
 
  ngOnInIt(){
   
 
  }

  ionViewWillEnter(){
    this.timestamp = new Date();
  }

  //process Day
  processDateDay(value:number){
    if(value === 0){
      return "Sunday";
    } else if(value === 1){
      return "Monday";
    }  else if(value === 2){
      return "Tuesday";
    } else if(value === 3){
      return "Wednesday";
    } else if(value === 4){
      return "Thursday";
    } else if(value === 5){
      return "Friday";
    } else if(value === 6){
      return "Saturday";
    } else { return null};
  }

  //Process Month
  processDateMonth(value:number){
    if(value === 0){
      return "January";
    } else if(value === 1){
      return "February";
    }  else if(value === 2){
      return "March";
    } else if(value === 3){
      return "Aoril";
    } else if(value === 4){
      return "May";
    } else if(value === 5){
      return "June";
    }else if(value === 6){
      return "July";
    } else if(value === 7){
      return "August";
    }  else if(value === 8){
      return "September";
    } else if(value === 9){
      return "October";
    } else if(value === 10){
      return "November";
    } else if(value === 11){
      return "December";
    } 
    else { return null};
  }
 
  


  closeAddNote(){
    this.viewCtrl.dismiss();
  }

  onAddNote(){
    //var notetime = this.noteyear +" "+this.notedate+" "+this.noteday;
    if(this.noteTitle === undefined){
      this.navCtrl.pop();
    } else{

      this.saveAction();
      this.navCtrl.pop();
      
      //this.navCtrl.push(HomePage);
      
    } 
    
  }

  //Save Note function
  private saveAction() {
    //var textAreaDiv = this.textarea.nativeElement as HTMLDivElement;
    var textAreaVal = document.querySelector(".textarea").textContent;
    this.noteText = textAreaVal;

    var notedate = this.noteday + ", " + this.notemonth + " " + this.notedate + ", " + this.noteyear;
    var notetime = this.notehour + ":" + this.notemin;
    
    var noteObj = {
      noteTitle: this.noteTitle,
      noteText: this.noteText,
      noteDate: notedate,
      noteTime: notetime
    };
    this.notesDataService.addNotesData(noteObj);
    console.log(noteObj);
  }

  openBible(){
    //this.navCtrl.pop();
    this.navCtrl.push(BiblePage);
  }

  onFocusTextArea(){
  }

  

 

}
