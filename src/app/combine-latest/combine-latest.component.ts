import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, interval, map, take } from 'rxjs';

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
    /*
    // const obs1$ = interval(1000).pipe(take(3));
    const obs1$ = new Observable((observer) => {
      observer.complete();
    });
    obs1$.subscribe((x) => console.log('obs 2 ', x));
    const obs2$ = interval(1000).pipe(take(5));
    const combinedObs$ = combineLatest(obs1$, obs2$);
    combinedObs$.subscribe(
      console.log,
      () => {},
      () => {
        console.log('Completed');
      }
    );
    */
    const movies = [
      { id: 1, name: 'movie 1' },
      { id: 2, name: 'movie 2' },
      { id: 3, name: 'movie 3' },
    ];
    const user = { name: 'user', favoriteMoviesIds: [2] };
    const movies$ = new BehaviorSubject(movies);
    const user$ = new BehaviorSubject(user);
    combineLatest(movies$, user$)
      .pipe(
        map(([movies, user]) =>
          movies.filter((movie) => user.favoriteMoviesIds.includes(movie.id))
        )
      )
      .subscribe(console.log);
    setTimeout(() => {
      user.favoriteMoviesIds.push(3);
      user$.next(user);
    }, 3000);
  }
}
