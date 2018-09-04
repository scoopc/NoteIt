import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChaptersOptionPage } from './chapters-option';

@NgModule({
  declarations: [
    ChaptersOptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ChaptersOptionPage),
  ],
})
export class ChaptersOptionPageModule {}
