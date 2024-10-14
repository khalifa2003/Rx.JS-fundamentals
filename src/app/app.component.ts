import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  asapScheduler,
  bindCallback,
  combineLatest,
  concat,
  delay,
  first,
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  mergeMap,
  Observable,
  of,
  pluck,
  share,
  take,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Rx.js-fundamentals';

  // <-- combine-latest -->
  // It receives data from multiple observables inside it,
  // and if it receives data before the time expires,
  // then it works and rejects anything else.
  // and when data updated the new data will be emitted
  // combine latest not work if one observable is not completed

  ngOnInit() {
    const obs1$ = interval(1000).pipe(take(3));
    const obs2$ = interval(1000).pipe(take(5));
    const combinedObs$ = combineLatest(obs1$, obs2$);
    combinedObs$.subscribe(console.log);

  }
}
