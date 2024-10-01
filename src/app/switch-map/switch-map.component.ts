import { Component } from '@angular/core';
import { fromEvent, switchMap, interval } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css',
})
export class SwitchMapComponent {
  // <-- switchMap -->
  // It receives data from an observable inside it,
  // and if it receives data before the time expires,
  // then it works on new and rejects anything else.

  ngOnInit(): void {
    const click = fromEvent(document, 'click');
    click.pipe(switchMap(() => interval(1000))).subscribe((x) => {
      console.log(x);
    });
  }
}
