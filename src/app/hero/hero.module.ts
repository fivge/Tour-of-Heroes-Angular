import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailDetailComponent } from './hero-detail-detail/hero-detail-detail.component';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, HeroDetailDetailComponent],
  imports: [CommonModule, HeroRoutingModule, FormsModule]
})
export class HeroModule {}
