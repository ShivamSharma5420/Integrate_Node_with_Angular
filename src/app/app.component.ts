import { Component } from '@angular/core';

import { WebService } from './web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.comp.html',
  styleUrls: ['./app.component.css'],
  providers: [WebService]
})
export class AppComponent {
  title = 'integrate';

  constructor() {

  }




}
