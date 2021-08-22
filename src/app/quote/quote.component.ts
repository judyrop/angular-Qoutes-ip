import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote' ;
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Gloria adams','butterflies eddie','The way i see it,if you want the rainbow, you gotta put up with the rain'),
  new Quote('Edwards butt','louisem','Choose to be happy'),
  new Quote('Pauljack','bruis constance','He who is not courageous to take risks will accomplish nothing in life')  
  ];
  quoteDetails(index:any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
