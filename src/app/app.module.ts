import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiceComponent } from './dice/dice.component';
import { DieDetailComponent } from './die-detail/die-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    DieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
