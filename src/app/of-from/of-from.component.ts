import { Component } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  standalone: true,
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css',
})
export class OfFromComponent {
  // <-- of - from -->
  // They both take data and convert it to an observable

  ngOnInit() {
    // it assume that data is an one thing
    // of([1, 2, 3]).subscribe(console.log);
    // of('angular').subscribe(console.log);
    // of('angular array', 'string 2').subscribe(console.log);
    of(Promise.resolve('angular')).subscribe(console.log);

    console.log('start');
    // it split data
    // from([1, 2, 3]).subscribe(console.log);
    // from(['angular array', 'string 2']).subscribe(console.log);
    // from(['angular array', 'string 2'], asapScheduler).subscribe(console.log);
    from(Promise.resolve('angular')).subscribe(console.log);
    console.log('end');

    // of('a', 'b', 'c').pipe(pluck('length')).subscribe((x) => console.log(x));
    // of('a', 'b', 'c').pipe(map((x) => x.length)).subscribe((x) => console.log(x));
  }
}
