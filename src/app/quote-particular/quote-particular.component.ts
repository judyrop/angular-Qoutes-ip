import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-particular',
  templateUrl: './quote-particular.component.html',
  styleUrls: ['./quote-particular.component.css']
})
export class QuoteParticularComponent implements OnInit {
@Input() quote: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
