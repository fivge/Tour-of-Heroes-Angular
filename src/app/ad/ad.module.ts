import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdComponent } from './ad/ad.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AdService } from './ad.service';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "k8s",
  //   pathMatch: "full"
  // },
  {
    path: '',
    component: HeroesComponent
  }
  // {
  //   path: "ecs",
  //   component: EcsComponent
  // }
];

@NgModule({
  providers: [AdService],
  declarations: [AdDirective, AdBannerComponent, HeroJobAdComponent, HeroProfileComponent, HeroesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent]
})
export class AdModule {}
