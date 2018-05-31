import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AccountsModule} from 'accounts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
