import { Component } from '@angular/core';
import { of, mergeMap, map } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css',
})
export class MergeMapComponent {
  // <-- mergeMap -->
  // It combines multiple observables into one observable
  // and it works in the same way as merge

  ngOnInit() {
    const letters$ = of('a', 'b', 'c'); // observable 1
    const numbers$ = of(1, 2, 3); // observable 2
    const combined = letters$.pipe(
      mergeMap((letter) => {
        return numbers$.pipe(map((number) => letter + number));
      })
    );
    combined.subscribe(console.log);
  }
}
