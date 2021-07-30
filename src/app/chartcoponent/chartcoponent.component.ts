import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import type { ChartData, ChartOptions } from 'chart.js';
import { Observable, Subscription } from 'rxjs';
import { covidDataInterface } from '../Store/covidDataState';
@Component({
  selector: 'app-chartcoponent',
  templateUrl: './chartcoponent.component.html',
  styleUrls: ['./chartcoponent.component.css']
})
export class ChartcoponentComponent implements OnInit {
  chartData$: any = [1,2,3,5];
  chartsubs: Subscription;
  data: ChartData = {
    labels: ['Confirmed', 'Recovered', 'Death', 'New cases'],
    datasets: [
      {
        // confirmed, recovered, death, new cases
        data: [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , '#47409F'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , '#47409F'],
      },
    ],
  };

  options: ChartOptions = {
    responsive: true,
  };
  constructor(private store: Store<{covidData: covidDataInterface}>) { }

  ngOnInit(): void {
    this.chartsubs = this.store.select('covidData').subscribe(data=>{
      this.data = {
        labels: ['Confirmed', 'Recovered', 'Death', 'New cases'],
        datasets: [
          {
            // confirmed, recovered, death, new cases
            data: data.chartState,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , '#47409F'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , '#47409F'],
          },
        ],
      };
    });

    
  }

  ngOnDestroy(){
    if(this.chartsubs){
      this.chartsubs.unsubscribe();
    }
  }
 

}
