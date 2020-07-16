import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { CounterWithoutZoneComponent } from './counter-without-zone/counter-without-zone.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '01',
    pathMatch: 'full'
  },
  {
    path: '01',
    component: ChangeDetectionComponent
  },
  {
    path: '02',
    component: CounterWithoutZoneComponent
  }
];

@NgModule({
  declarations: [ChangeDetectionComponent, CounterWithoutZoneComponent, CounterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class NgZoneModule {}
