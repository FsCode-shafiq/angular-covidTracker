import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { covidDataInterface} from '../Store/covidDataState'


@Component({
  selector: 'app-cards-data',
  templateUrl: './cards-data.component.html',
  styleUrls: ['./cards-data.component.css']
})
export class CardsDataComponent implements OnInit {
  
  covidData$: Observable<covidDataInterface>;
  constructor(private store: Store<{ covidData: covidDataInterface }>) {
    
   }


  ngOnInit(): void {
    this.covidData$ = this.store.select('covidData');
    
  }
  
}
