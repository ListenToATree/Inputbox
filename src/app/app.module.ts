import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRefDirective } from './input-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    FaInputComponent,
    InputRefDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
