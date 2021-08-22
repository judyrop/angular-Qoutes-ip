import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote' ;
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Gloria adams','butterflies eddie','The way i see it,if you want the rainbow, you gotta put up with the rain',new Date(2020,12,12)),
  new Quote('Edwards butt','louisem','Choose to be happy',new Date(2021,2,12)),
  new Quote('Pauljack','bruis constance','He who is not courageous to take risks will accomplish nothing in life',new Date(2021,1,4))  
  ];
  quoteDetails(index:any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  // deleteQuote(isComplete,index){
  //   if(isComplete){
  //     let toDelete =confirm('Are you sure you want to delete $ {this.quotes[index].name}?')
  //     if(toDelete){
  //       this.quotes.splice(index,1)
  //     }
  //   }
  // }
  
  constructor() { }

  ngOnInit(): void {
  }

}
