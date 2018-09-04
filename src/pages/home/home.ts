import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Storage } from '@ionic/storage';

import { AddNotePage } from '../add-note/add-note';
import { NotesDataService } from '../../app/services/notesDataService';
//import { MorePopoverPage } from '../more-popover/more-popover';
import { BiblePage } from '../bible/bible';
import { NoteDetailsPage } from '../note-details/note-details';
import { MyAccountPage } from '../my-account/my-account';
//import { NoteDetailsPage } from '../note-details/note-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //notesData: any;
  notes:any []=[];
  filteredNotes:any[] =[];

  mySearchInput:string;
  notesCount:number = 0;
  youhave;
  notesString;

  favoriteicon;
  

  //timestamp:any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public storage : Storage,
    private notesDataService: NotesDataService,
    public popoverCtrl: PopoverController
    ) {
      this.favoriteicon = "ios-star-outline";
      //this.lockunlockText = "Lock";
  }

  doRefresh(refresher){
    this.getNotesForList();
    console.log('Begin async operation', refresher); 

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);

  }

  ngOnInit(){
    this.getNotesForList();
    this.youhave = "You have";
    this.notesString = "Notes"
    //this.timestamp = new Date();
    //console.log(this.timestamp);

  };

  private getNotesForList() {
    this.notes = this.notesDataService.getNotesData().reverse();
    if(localStorage.length){
      this.notes = JSON.parse(localStorage.getItem("notesData")).reverse();
      this.notesCount = this.notes.length;
      console.log(this.notes);
    } else{
      console.log("Add your first note");
    }
    
    /*this.storage.get("notesData")
      .then((value) => {
        this.notes = value;
        //console.log("ngOnInit getting:");
        //console.log(value);
      });*/
  }

  ionViewWillLoad(){
    this.getNotesForList(); 
  }

  
  onAddNote(){
    this.modalCtrl.create(AddNotePage).present();
    //alert("Ok");
  }

  viewNote(note, i){
    this.modalCtrl.create(NoteDetailsPage, {notefrom:note, noteIndex:i}).present();
    //this.navCtrl.push(NoteDetailsPage);
    setTimeout(()=>{
      this.notes.splice( i, 1);
    //this.storage.remove("notes");
      localStorage.setItem("notesData", JSON.stringify(this.notes));
    }, 500)
      //console.log("From ViewNote Mothod:");
      console.log(i);
  }

  onInputSearch(e){
    var mySearchInput = e.target.value;
  
    if(mySearchInput && mySearchInput.trim() != ''){
      this.filteredNotes = this.notes.filter((note)=>{
        return note.noteTitle.toLowerCase().indexOf(mySearchInput.toLowerCase()) > -1;
      });
  
      this.notes = this.filteredNotes;
      this.youhave = "Found";
      this.notesCount = this.filteredNotes.length;
      
      if(this.notesCount > 1){
        this.notesString = "Notes";
      } else {
        this.notesString = "Note";
      }
      console.log(this.filteredNotes);
    }
    

    //console.log(this.filteredNotes);
    //console.log(e.target.value);
  }

  onCancelSearch(){
    this.getNotesForList();
    this.youhave = "You have";
    //console.log(event.data);
  }

  onClearSearch(){
    this.getNotesForList();
    this.youhave = "You have";
  }

  deleteNote(i){
    this.notes.splice( i, 1);
    //this.storage.remove("notes");
    localStorage.setItem("notesData", JSON.stringify(this.notes));
    this.notesCount = this.notes.length;
    console.log(this.notes);
  }

  myAccount(){
    this.navCtrl.push(MyAccountPage);
   
  }

  openBible(){
    //this.navCtrl.pop();
    this.navCtrl.push(BiblePage);
  }

  favoriteIt(i){
 

    console.log(i);
    //console.log(eventIcon);
  }

  shareNote(i){
    console.log(i);
  }

}
