import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNotePage } from '../pages/add-note/add-note';
import { BibleServices } from './services/bible.services';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { NotesDataService } from './services/notesDataService';
import { NoteDetailsPage } from '../pages/note-details/note-details';
import { BiblePage } from '../pages/bible/bible';
import { BibleOptionsPage } from '../pages/bible-options/bible-options';
import { OptGeneratorProvider } from '../providers/opt-generator/opt-generator';
import { VersesOptionPage } from '../pages/verses-option/verses-option';
import { ChaptersOptionPage } from '../pages/chapters-option/chapters-option';
import { MorePopoverPage } from '../pages/more-popover/more-popover';
import { BiblePopoverPage } from '../pages/bible-popover/bible-popover';
import { MyAccountPage } from '../pages/my-account/my-account';
import { TextEditorComponent } from '../components/text-editor/text-editor';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNotePage,
    BiblePage,
    NoteDetailsPage,
    BibleOptionsPage,
    VersesOptionPage,
    ChaptersOptionPage,
    MorePopoverPage,
    BiblePopoverPage,
    MyAccountPage,
    LoginPage,
    TextEditorComponent
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddNotePage,
    BiblePage,
    NoteDetailsPage,
    BibleOptionsPage,
    VersesOptionPage,
    ChaptersOptionPage,
    MorePopoverPage,
    BiblePopoverPage,
    MyAccountPage,
    LoginPage,
    TextEditorComponent
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BibleServices,
    NotesDataService,
    OptGeneratorProvider,
     
    
    
    
  ]
})
export class AppModule {}
