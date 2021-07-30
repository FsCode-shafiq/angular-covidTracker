import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { covidDataInterface } from '../Store/covidDataState';

import { findDataBYSelect, listData } from '../Store/Data.Action';

@Injectable({
  providedIn: 'root'
})
export class CovidtrackingService {

  constructor(private store: Store <{covidData: covidDataInterface}>) { }

  getData = async () => {
    let response = await fetch(
      "https://covid-19-tracking.p.rapidapi.com/v1",
      {
        method: "GET",
        headers:<any> {
          "x-rapidapi-key":
            "8590fd2a06mshedac11f4703d28ep1631b3jsnc22317e6faa2",
          "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
          useQueryString: true,
        },
      }
    );
    let data = await response.json();
      this.store.select('covidData');
      this.store.dispatch(listData({data: data}));
      this.store.dispatch(findDataBYSelect({option: 'World'}));
      
  }
}
