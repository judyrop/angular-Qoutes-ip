import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote' ;
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    {1,'The way i see it,if you want the rainbow, you gotta put up with the rain',description:'inspirational'},
       {id:2,name:'Choose to be happy',description : 'terrible'},
    {id:3,name:'He who is not courageous to take risks will accomplish nothing in life', description:'inspirational'}
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
