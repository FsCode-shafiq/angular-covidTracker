import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { covidDataInterface } from '../Store/covidDataState';
import {findDataBYSelect} from '../Store/Data.Action'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //option:string;
  countryText= 'world'
  ListData$: Observable<covidDataInterface>;
  constructor(private store: Store<{ covidData: covidDataInterface }>) {
    
   }


  ngOnInit(): void {
    this.ListData$ = this.store.select('covidData');
    //this.selectCall("World")
  }
  selectCall=(params: string)=>{
    this.countryText = params;
    this.store.dispatch(findDataBYSelect({option: params}));
  }
}
