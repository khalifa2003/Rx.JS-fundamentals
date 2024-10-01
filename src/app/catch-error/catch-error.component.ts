import { Component } from '@angular/core';
import {
  catchError,
  delay,
  interval,
  map,
  NEVER,
  retryWhen,
  scan,
  take,
} from 'rxjs';

@Component({
  selector: 'app-catch-error',
  standalone: true,
  imports: [],
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.css',
})
export class CatchErrorComponent {
  // <-- Catch Error -->

  ngOnInit(): void {
    const obs$ = interval(1000).pipe(
      map((value) => {
        if (value > 3) {
          throw new Error('over 3');
        }
        return value;
      }),
      // catchError((err, cought$) => {
      // Skip error and continue to complete the stream
      // return EMPTY;

      // It keeps you stuck in the same place.
      // return NEVER;

      // return cought$;
      // }),
      // Reconnect a certain number of times
      // retry(3),

      // take first 20 values
      // take(20)

      // Retry with specific condition
      retryWhen((errors$) => {
        return errors$.pipe(
          delay(2000),
          scan((count, currentError: Error, index) => {
            console.log('Insider scan ', count, currentError.message, index);
            if (count > 3) {
              throw currentError;
            }
            return count + 1;
          }, 0)
        );
      })
    );
    obs$.subscribe(
      (value) => {
        console.log(value);
      },
      (err) => {
        console.error(err.message);
      },
      () => {
        console.log('complete');
      }
    );
  }
}
