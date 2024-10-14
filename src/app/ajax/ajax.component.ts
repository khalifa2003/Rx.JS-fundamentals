import { Component } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-ajax',
  standalone: true,
  imports: [],
  templateUrl: './ajax.component.html',
  styleUrl: './ajax.component.css',
})
export class AjaxComponent {
  // <-- Ajax -->
  // It receives data from an observable inside it,
  // and if it receives data before the time expires,
  // then it works and rejects anything else.

  constructor() {}

  ngOnInit() {
    const obs$ = ajax({
      url: 'https://api.github.com/users',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token',
        'rxjs-custom-header': 'Angular Array',
      },
      body: 'Hello World',
    })
      // ajax.perJSON('https://api.github.com/users?per_page=5')
      .pipe(
        tap((userResponse) => {
          console.log('response is ', userResponse);
        })
      );
    obs$.subscribe((x) => console.log(x));
  }
}
