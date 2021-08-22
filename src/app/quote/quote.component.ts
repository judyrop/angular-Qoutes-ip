import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote' ;
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,'The way i see it,if you want the rainbow, you gotta put up with the rain','inspirational'),
    new Quote(2,'Choose to be happy','terrible'),
    new Quote(3,'He who is not courageous to take risks will accomplish nothing in life','Empowering')  
  ];
  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;  }
  constructor() { }

  ngOnInit(): void {
  }

}
