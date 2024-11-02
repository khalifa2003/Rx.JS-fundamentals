import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  asapScheduler,
  BehaviorSubject,
  bindCallback,
  combineLatest,
  concat,
  defer,
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
  switchMapTo,
  take,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Rx.js-fundamentals';

}
