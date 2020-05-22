import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WithWebComponentComponent } from './with-web-component/with-web-component.component';

import './shared/web-components/Tab';
import './shared/web-components/Tabs';
import { PopupComponent } from './popup/popup.component';
import { ForWebComponentComponent } from './for-web-component/for-web-component.component';
import { PopupService } from './shared/popup.service';

const routes: Routes = [
  {
    path: '',
    component: WithWebComponentComponent
  },
  {
    path: 'popup',
    component: ForWebComponentComponent
  }
];

@NgModule({
  declarations: [WithWebComponentComponent, PopupComponent, ForWebComponentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [PopupService],
  entryComponents: [PopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebComponentModule {}
