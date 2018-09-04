import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiblePopoverPage } from './bible-popover';

@NgModule({
  declarations: [
    BiblePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(BiblePopoverPage),
  ],
})
export class BiblePopoverPageModule {}
