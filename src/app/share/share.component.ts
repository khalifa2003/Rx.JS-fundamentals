import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, share } from 'rxjs';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css',
})
export class ShareComponent {
  // <-- share -->
  // It allows you to share an observable between multiple subscribers.
  // It ensures that the observable will be subscribed only once.

  ngOnInit() {
    const req = this.getPosts();
    this.doSomething(req);
    req.subscribe();
  }

  constructor(private http: HttpClient) {}
  doSomething(obs: Observable<any>) {
    obs.subscribe();
  }
  getPosts() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .pipe(share());
  }
}
