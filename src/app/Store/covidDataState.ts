
// interface cardInterace{
//     active: string,
//     country: string,
//     lastUpdate: string,
//     newCases: string,
//     deathCase: string,
//     totalDeathCase: string,

// }

export interface covidDataInterface{
    mainState: any[],
    listState: any[],
    cardState: any[],
    chartState: any[],
}

export const InitialState: covidDataInterface ={
    mainState: [],
    listState: [],
    cardState: [],
    chartState: [],

};

