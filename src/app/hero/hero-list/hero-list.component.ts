import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: []
})
export class HeroListComponent implements OnInit {
  // Router 服务及其 routerState 属性来访问当前的 RouterState
  constructor(private router: Router, private route: ActivatedRoute) {}

  id = '52788';

  ngOnInit() {
    // console.log(`Router`, this.router.routerState);
    this.route.paramMap.subscribe((params: ParamMap) => (this.id = params.get('id') ? params.get('id') : '52788'));
  }

  public goDetail() {
    // this.router.navigate(['/hero/hero', this.id, { id: '12345' }]); 解析不到必要参数的id
    this.router.navigate(['/hero/hero', this.id, { ids: '12345' }]);
  }
}
