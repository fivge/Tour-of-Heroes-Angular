import { Component, OnInit } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
