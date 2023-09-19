import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AmexioWidgetModule} from "amexio-ng-extensions";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { AmexioD3BarChartDemoComponent} from './d3barchart.demo.component';
import {HttpClientModule} from "@angular/common/http";
import { AmexioChartD3Module } from "amexio-chart-d3";

/**
 * Created by kedar on 29/6/18.
 */
@NgModule({
  declarations: [AmexioD3BarChartDemoComponent],
  imports: [CommonModule, FormsModule, HttpClientModule,AmexioChartD3Module, AmexioWidgetModule, RouterModule.forChild([{
    path: '', component: AmexioD3BarChartDemoComponent, pathMatch: 'full'
  }])],
  providers: []
})
export class d3BarChartDemoModule {

}
