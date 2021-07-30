import { createReducer, on } from '@ngrx/store';
import { InitialState } from './covidDataState';
import { findDataBYSelect, listData } from './Data.Action';

const _covidReducer = createReducer(
  InitialState,
  on(listData, (state, action) => {
    const { data } = action;
    let listData = [];
    for (let index = 0; index < data.length; index++) {
      listData.push(data[index].Country_text);
    }
    
    return {
      ...state,

      mainState: [...data],
      listState: [...listData],
    };
  }),
  on(findDataBYSelect, (state:any, action:any) => {
    for (let index = 0; index < state.mainState.length; index++) {
      if (state.mainState[index].Country_text == action.option) {
        //console.log(Object.values(state.mainState[index]));
        let temp  = Object.values(state.mainState[index]);
        let filterChartData = [];
        filterChartData.push(temp[7]);
        filterChartData.push(temp[7]);
        filterChartData.push(temp[4]);
        filterChartData.push(temp[3]);
        filterChartData=filterChartData.map(ele=>{
          return parseInt(ele.replaceAll("+", "").replaceAll(",", ""));
        })
        console.log(filterChartData);
        return {
          ...state,
          cardState: Object.values(state.mainState[index]),
          chartState: filterChartData,
        };
      }
    }
  })
);

export function covidReducer(state: any, action: any) {
  return _covidReducer(state, action);
}
