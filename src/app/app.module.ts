import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsDataComponent } from './cards-data/cards-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { covidReducer } from './Store/Data.Reducer';
import { ChartcoponentComponent } from './chartcoponent/chartcoponent.component';

import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PieController,
  ArcElement
} from 'chart.js';
// What you register will depend on what chart you are using and features used.
Chart.register(PieController, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend );

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsDataComponent,
    ChartcoponentComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    StoreModule.forRoot({covidData: covidReducer}),
    MatFormFieldModule,
    MatSelectModule,
    ChartjsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
