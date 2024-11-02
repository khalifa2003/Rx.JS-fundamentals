import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { defer, fromEvent, tap, interval, switchMapTo, of, take } from 'rxjs';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css',
})
export class DeferComponent {
  @ViewChild('button', { static: true })
  buttonEL: ElementRef<HTMLButtonElement> = {} as any;
  clicks$ = defer(() =>
    fromEvent(this.buttonEL.nativeElement, 'click').pipe(
      tap(() => console.log('clicked'))
    )
  );
  obs1$ = interval(1000).pipe(
    switchMapTo(of(Math.floor(Math.random() * 10))),
    take(10)
  );
  obs2$ = interval(1000).pipe(
    switchMapTo(defer(() => of(Math.floor(Math.random() * 10)))),
    take(10)
  );
  ngOnInit(): void {
    this.clicks$.subscribe();
  }
}
