import { Component } from '@angular/core';

/**
 * Generated class for the TextEditorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'text-editor',
  templateUrl: 'text-editor.html'
})
export class TextEditorComponent {

  

  constructor() {
    console.log('Hello TextEditorComponent Component');
    
  }

  makeList(){
    document.execCommand('insertOrderedList',false,null);
  }

  makeBold(){
    document.execCommand('bold',false,null);
  }

  makeItalic(){
    document.execCommand('italic',false,null);
  }

  makeUderline(){
    document.execCommand('underline',false,null);
  }

}
