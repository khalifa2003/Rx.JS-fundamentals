import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-bind-call-back',
  standalone: true,
  imports: [],
  templateUrl: './bind-call-back.component.html',
  styleUrl: './bind-call-back.component.css',
})
export class BindCallBackComponent {
  // <-- bindCallback -->
  // It receives data from an observable inside it,
  // and if it receives data before the time expires,
  // then it works and rejects anything else.

  ngOnInit() {
    const someFunction = (x: any, y: any, callBack: any) => {
      callBack(x);
    };

    const boundSomeFunction = bindCallback(someFunction);
    boundSomeFunction('my name', 'my age').subscribe((x) =>
      console.log('data is ', x)
    );
  }
}
