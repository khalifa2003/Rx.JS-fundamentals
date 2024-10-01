import { Component } from '@angular/core';
import { of, delay, tap, concat } from 'rxjs';

@Component({
  selector: 'app-concat',
  standalone: true,
  imports: [],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.css',
})
export class ConcatComponent {
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
