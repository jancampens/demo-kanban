import { Component } from '@angular/core';

import { LISTS } from './mock/mock-lists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lists = LISTS;
}
