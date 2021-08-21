import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote' ;
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    {id:1,name:'The way i see it,if you want the rainbow, you gotta put up with the rain'},
       {id:2,name:'Choose to be happy'},
    {id:3,name:'He who is not courageous to take risks will accomplish nothing in life'}
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
