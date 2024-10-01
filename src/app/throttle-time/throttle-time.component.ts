import { Component } from '@angular/core';
import { fromEvent, map, throttleTime, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-throttle-time',
  standalone: true,
  imports: [],
  templateUrl: './throttle-time.component.html',
  styleUrl: './throttle-time.component.css',
})
export class ThrottleTimeComponent {
  title = 'Rx.js-fundamentals';
  // <-- throttleTime -->
  // It receives data from an observable inside it,
  // and if it receives data before the time expires,
  // then it works and rejects anything else.
  ngOnInit(): void {
    const throttleTimeFromConfig = {
      leading: false,
      trailing: true,
    };
    console.log('hello');
    const click = fromEvent(document, 'click');
    const res = click.pipe(
      map(() => {
        console.log('clicked');
      }),
      throttleTime(2000, asyncScheduler, throttleTimeFromConfig)
    );
    res.subscribe((x) => console.log('db clicked'));
  }
}
