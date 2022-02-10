import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly pizzas$ = this.activatedRoute.data.pipe(pluck('pizzas'));

  constructor(private activatedRoute: ActivatedRoute) {}
}
