import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibleOptionsPage } from './bible-options';

@NgModule({
  declarations: [
    BibleOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(BibleOptionsPage),
  ],
})
export class BibleOptionsPageModule {}
