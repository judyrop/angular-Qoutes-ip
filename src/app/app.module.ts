import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Quote} from './quote';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteParticularComponent } from './quote-particular/quote-particular.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteParticularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
