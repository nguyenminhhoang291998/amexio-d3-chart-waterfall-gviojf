import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AmexioDataModule} from 'amexio-ng-extensions';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTE} from "./app.routes";
import { AmexioChartD3Module } from "amexio-chart-d3";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, HttpClientModule,
                  AmexioDataModule,AmexioChartD3Module,
                  RouterModule.forRoot(APP_ROUTE, { useHash: true })],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
