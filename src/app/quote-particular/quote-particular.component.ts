import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-particular',
  templateUrl: './quote-particular.component.html',
  styleUrls: ['./quote-particular.component.css']
})
export class QuoteParticularComponent implements OnInit {
@Input() quote: Quote;
@Output() isComplete = new EventEmitter<boolean>();
// @Output() isLike = new EventEmitter<boolean>();
// @Output() isDislike = new EventEmitter<boolean>();  
votes:number=0;
likes(){
  this.votes++;
}
dislike(){
  this.votes--;
} 
quoteDelete(complete:boolean){
   this.isComplete.emit(complete);
 }
constructor() { }

  ngOnInit(): void {
  }

}
