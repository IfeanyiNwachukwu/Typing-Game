import { Component } from '@angular/core';

import {randPhrase} from '@ngneat/falso'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   randomText = randPhrase();
   enteredText = '';
   

   onInput(value:string){
     this.enteredText = value;
   }
   compare(randomLetter:string,enteredLetter:string){
      if(!enteredLetter){
        return 'pending';
      }
      
      return randomLetter === enteredLetter ? 'correct' : 'incorrect'
   }
}
