import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail-detail',
  templateUrl: './hero-detail-detail.component.html',
  styles: []
})
export class HeroDetailDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  public id$;
  public id;
  public name$;

  ngOnInit() {
    // Snapshot
    let id = this.route.snapshot.paramMap.get('id');
    // let id = this.route.snapshot.params['id']; --> 不建议
    console.log(`id: `, id);
    // Observable
    this.id$ = this.route.paramMap.pipe(map((params: ParamMap) => params.get('id')));
    this.name$ = this.route.paramMap.pipe(map((params: ParamMap) => params.get('name')));
    this.route.paramMap.subscribe((params: ParamMap) => (this.id = params.get('id')));
  }

  gotoHeroes() {
    this.router.navigate(['/hero/heroes', { id: this.id, foo: 'bar' }]);
  }
}
