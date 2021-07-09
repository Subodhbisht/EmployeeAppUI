import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpSearchComponent } from './emp-search/emp-search.component';
import { HttprestService } from './httprest.service'

import { CalendarModule } from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EmpSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    NgbModule
  ],
  providers: [
    HttprestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
