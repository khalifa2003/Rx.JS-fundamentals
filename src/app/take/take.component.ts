import { Component } from '@angular/core';
import {
  of,
  take,
  first,
  last,
  tap,
  takeWhile,
  fromEvent,
  interval,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-take',
  standalone: true,
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.css',
})
export class TakeComponent {
  // <-- take -->

  ngOnInit() {
    // <-- take -->
    of(1, 2, 3, 4, 5).pipe(take(3)).subscribe(console.log); // take first 3

    // <-- first -->
    of(1, 2, 3, 4, 5).pipe(first()).subscribe(console.log); // take first one

    // <-- last -->
    of(1, 2, 3, 4, 5).pipe(last()).subscribe(console.log); // take last one

    // <-- takeWhile -->
    let counter = 0;
    of(1, 2, 3, 4, 5)
      .pipe(
        tap((count) => {
          console.log('count is ', count);
          counter++;
        }),
        takeWhile((count) => count < 4)
      )
      .subscribe(console.log);

    // <-- takeUntil -->
    const click = fromEvent(document, 'click');
    interval(1000).pipe(takeUntil(click)).subscribe(console.log);
  }
}
