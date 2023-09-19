import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amexio-d3-chart-bar-new',
  templateUrl: './d3barchart.demo.component.html',
})
export class AmexioD3BarChartDemoComponent {
  dataSource: string;
  copyMsgArray: any[];
  selectedData: any;
  userDefineColors: any;
  defultColorData: any;
  waterfallChartData: any;
  userDataSource: any;
  constructor() {
    this.waterfallChartData = [
      // {label: 'Total', y: 100 , indexLabel: '100' },
      //     // {label: 'Pricing', y: -30, indexLabel: '-30' },
      //     {label: 'Costs', y: -30, indexLabel: '-30' },
      //     {label: 'Bundles', y: -20, indexLabel: '-20' },
      //     {label: 'Bonus', y: -20, indexLabel: '-20' },
      //     {label: 'Samples', y: -15, indexLabel: '-15' },
      //     {label: 'Promo', y: -10, indexLabel: '-10' },
      //     {label: 'Discount', y: -5, indexLabel: '-5' },
      ['Product', 'Yield'],
      ['Total', 100],
      ['Costs', 20],
      ['Bonus', 20],
      ['Samples', 15],
      ['End', -155],
    ];
  }

  onUserDefineLegendClick(event: any) {
    this.userDataSource = event;
  }

  onDefaultChartClick(event: any) {
    this.userDataSource = event;
  }
}
