import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list/data-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DataListComponent
  }
];

@NgModule({
  declarations: [DataListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ProtobufDemoModule {}
