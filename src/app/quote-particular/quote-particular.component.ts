import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-particular',
  templateUrl: './quote-particular.component.html',
  styleUrls: ['./quote-particular.component.css']
})
export class QuoteParticularComponent implements OnInit {
@Input() quote: Quote;
@Output() isLike = new EventEmitter<boolean>();
@Output() isDislike = new EventEmitter<boolean>();  
 
constructor() { }

  ngOnInit(): void {
  }

}
