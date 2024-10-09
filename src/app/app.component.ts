import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent {
  title = 'space-angular';

  constructor(protected route: ActivatedRoute) { }

  getRouteAnimationData(outlet: any) {
    console.log(outlet);

    return outlet;
  }
}
