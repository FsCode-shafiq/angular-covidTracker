import { Component, OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CovidtrackingService } from './services/covidtracking.service';
import { covidDataInterface } from './Store/covidDataState';
import { findDataBYSelect } from './Store/Data.Action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-covidTracker';
  
 
  constructor(
    private covidTracking: CovidtrackingService,
    private store: Store<{ covidData: covidDataInterface }>
  ) {
  }
  
  ngOnInit() {
    
    this.covidTracking.getData()

    this.store.select('covidData');
    //this.store.dispatch(findDataBYSelect({option: 'World'}))
  }

 
}
