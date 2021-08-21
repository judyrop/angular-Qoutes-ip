import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes :string[];

  constructor(){
    this.quotes = ['The way i see it,if you want the rainbow, you gotta put up with the rain','Choose to be happy', 'He who is not courageous to take risks will accomplish nothing in life']
  }

}
