import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StyleClassModule} from 'primeng/styleclass';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckboxModule } from 'primeng/checkbox';

import { ChipsModule } from 'primeng/chips';


import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule, CalendarModule, StyleClassModule, CheckboxModule, ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
