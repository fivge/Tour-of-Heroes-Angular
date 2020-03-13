import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hero',
    pathMatch: 'full'
  },
  {
    path: 'doc',
    loadChildren: () => import('./document/document.module').then(mod => mod.DocumentModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./data-list/data-list.module').then(mod => mod.DataListModule)
  },
  {
    path: 'hero',
    loadChildren: () => import('./hero/hero.module').then(mod => mod.HeroModule)
  },
  {
    path: 'mock',
    loadChildren: () => import('./protobuf-demo/protobuf-demo.module').then(mod => mod.ProtobufDemoModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
