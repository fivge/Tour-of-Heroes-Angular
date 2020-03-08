import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailDetailComponent } from './hero-detail-detail/hero-detail-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { animation: 'heroes' }
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
    data: {
      name: 'hero-detail',
      animation: 'hero'
    }
  },
  {
    path: 'hero/:id/:name',
    component: HeroDetailDetailComponent,
    data: { animation: 'heroes' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
