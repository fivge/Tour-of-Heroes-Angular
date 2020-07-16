import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChangeDetectionComponent } from './change-detection/change-detection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '01',
    pathMatch: 'full'
  },
  {
    path: '01',
    component: ChangeDetectionComponent
  }
];

@NgModule({
  declarations: [ChangeDetectionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class NgZoneModule {}
