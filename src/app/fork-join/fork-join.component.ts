import { Component } from '@angular/core';
import { of, delay, tap, forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  standalone: true,
  imports: [],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.css',
})
export class ForkJoinComponent {
  // <-- forkJoin -->
  // It waits for all observables to complete before emitting the last value.

  // <-- forkJoin  Vs concat -->
  // forkJoin waits for all observables to complete before emitting the last value.
  // concat waits for the first observable to complete before emitting the last value.

  ngOnInit() {
    const obs1$ = of('a', 'b', 'c').pipe(delay(3000));
    const obs2$ = of([1, 2, 3]).pipe(
      tap(() => {
        // throw new Error('error');
      })
    );
    const concatData = forkJoin(obs1$, obs2$, obs1$);
    concatData.subscribe(
      (value) => console.log(value),
      (err) => console.log(err),
      () => console.log('complete')
    );
  }
}
