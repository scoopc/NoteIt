import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesProvider {
  public notes:{noteTitle: any, noteText:any}[]=[];

  addNote(note:{noteTitle: any, noteText:any}){
      this.notes.push(note);
  }

  getNotes(){
      return this.notes.slice();
  }

  constructor(public http: HttpClient) {
    console.log('Hello NotesProvider Provider');
  }

}
