import { ChartModule } from './../../../components/chart/chart.module';
import { ChartComponent } from './../../../components/chart/chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusPageRoutingModule } from './status-routing.module';

import { StatusPage } from './status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPageRoutingModule,
    ChartModule
  ],
  declarations: [StatusPage]
})
export class StatusPageModule {}
