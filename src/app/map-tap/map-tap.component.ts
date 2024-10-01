import { Component } from '@angular/core';
import { interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-map-tap',
  standalone: true,
  imports: [],
  templateUrl: './map-tap.component.html',
  styleUrl: './map-tap.component.css',
})
export class MapTapComponent {
  // <-- map -->
  //  transform on data
  // make edits on data and return new data

  // <-- tap -->
  // most of uses for debugging
  // it is used for side effects

  ngOnInit() {
    // fromEvent(document, 'click')
    interval(1000)
      .pipe(
        map((value: number) => {
          if (value > 2) {
            throw new Error('over 2');
          }
          return value;
        }),
        tap(
          (value: number) => console.log('In tap: ', value),
          (err) => console.error('Error: ', err.message)
        )
      )
      .subscribe();
  }
}
