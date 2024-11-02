import { Component } from '@angular/core';
import { combineLatest, interval, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css',
})
export class CombineLatestComponent {
  // <-- combine-latest -->
  // It receives data from multiple observables inside it,
  // and if it receives data before the time expires,
  // then it works and rejects anything else.
  // and when data updated the new data will be emitted
  // combine latest not work if one observable is not completed

  // It work when all observables have completed

  ngOnInit() {
    const obs1$ = interval(1000).pipe(take(3));
    const obs2$ = interval(1000).pipe(take(5));
    const combinedObs$ = combineLatest(obs1$, obs2$);
    combinedObs$.subscribe(console.log);
  }
}
