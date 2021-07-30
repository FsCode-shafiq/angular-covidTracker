import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { CovidTrackingServicesService } from "../covid-tracking-services.service";

Injectable()

export class CovidData{
    constructor(private action$ : Actions , private covidservice: CovidTrackingServicesService){}
    
}