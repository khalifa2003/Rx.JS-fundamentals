import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  asapScheduler,
  bindCallback,
  combineLatest,
  concat,
  delay,
  first,
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  mergeMap,
  Observable,
  of,
  pluck,
  share,
  take,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Rx.js-fundamentals';

  ngOnInit() {}
}
