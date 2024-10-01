import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  asapScheduler,
  concat,
  delay,
  first,
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

  // <-- concat -->

  ngOnInit() {
    const obs1$ = of('a', 'b', 'c').pipe(delay(3000));
    const obs2$ = of(1, 2, 3).pipe(
      tap(() => {
        throw new Error('error');
      })
    );
    const concatData = concat(obs1$, obs2$, obs1$);
    concatData.subscribe(
      (value) => console.log(value),
      (err) => console.log(err),
      () => console.log('complete')
    );
  }
}
