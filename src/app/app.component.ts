import { Component } from '@angular/core';
import {Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[]=[
    {id:1,name:'The way i see it,if you want the rainbow, you gotta put up with the rain'},
       {id:2,name:'Choose to be happy'},
    {id:3,name:'He who is not courageous to take risks will accomplish nothing in life'}
  
  ];

  // constructor(){
  //   this.quotes = ['The way i see it,if you want the rainbow, you gotta put up with the rain','Choose to be happy', 'He who is not courageous to take risks will accomplish nothing in life']
  // }

}
