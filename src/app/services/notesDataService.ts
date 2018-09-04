import {Injectable} from '@angular/core';
//import { Storage } from '@ionic/storage';

var notesData = [];
@Injectable()
export class NotesDataService {
    
    constructor(){

    }

    addNotesData(note:any){

        if(localStorage.length){
            notesData = JSON.parse(localStorage.getItem("notesData")) ;
            notesData.push(note);
            localStorage.setItem("notesData", JSON.stringify(notesData));
            console.log(notesData);
            
           } else {
               notesData.push(note);
               localStorage.setItem("notesData", JSON.stringify(notesData));
               console.log(note);
           }

        /*if(this.storage){
         this.storage.get("notesData").then(
                (res) =>{
                    notesData = res;
                    notesData.push(note);
                    this.storage.set("notesData", notesData);
                    console.log(notesData);
                }
            ). catch(
                (error)=>{
                    console.log(error);
                }
            );
        } else {
            notesData.push(note);
            this.storage.set("notesData", notesData);
            //console.log(note);
            //console.log("notesData");
        }*/
        
        
    }

    getNotesData(){
       return notesData;
        //return this.notesData;
    }
}