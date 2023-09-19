import {Routes} from '@angular/router';

export const APP_ROUTE: Routes = [
  {
    path: 'amexio-d3-chart-bar-new', redirectTo: 'amexio-d3-chart-bar-new', pathMatch: 'full'
  },
  {
path: '', loadChildren: './d3chart/d3barchart/d3barchart.demo.module#d3BarChartDemoModule'
  }
];