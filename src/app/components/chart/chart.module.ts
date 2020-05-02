import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ChartsModule],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule { }
