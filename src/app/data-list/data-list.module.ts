import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { K8sComponent } from './k8s/k8s.component';
import { EcsComponent } from './ecs/ecs.component';

// import { ACLDirective } from "@pkg/acl";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'k8s',
    pathMatch: 'full'
  },
  {
    path: 'k8s',
    component: K8sComponent
  },
  {
    path: 'ecs',
    component: EcsComponent
  }
];

@NgModule({
  declarations: [K8sComponent, EcsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DataListModule {}
