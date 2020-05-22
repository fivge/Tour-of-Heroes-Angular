import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityTrustComponent } from './security-trust/security-trust.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SecurityTrustComponent
  }
];

@NgModule({
  declarations: [SecurityTrustComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SecurityTrustModule {}
