import { Component } from '@angular/core';

import { LISTS } from './mock/mock-lists';
import { APPLICANTS } from './mock/mock-applicants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-kanban';
  lists = LISTS;
  applicants = APPLICANTS;
}
