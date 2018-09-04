import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class BibleServices {
    //bibleBook:string;
    //bibleChapter:number;
    
    http:any;
    baseUrl: any;

    constructor(http:HttpClient){
        this.http = http;
        this.baseUrl = "assets/bible.json"; 

    }

    getBibleVerse(){
        return this.http.get(this.baseUrl);

    }
}