import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WithWebComponentComponent } from './with-web-component/with-web-component.component';

import './shared/web-components/Tab';
import './shared/web-components/Tabs';

const routes: Routes = [
  {
    path: '',
    component: WithWebComponentComponent
  }
];

@NgModule({
  declarations: [WithWebComponentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebComponentModule {}
