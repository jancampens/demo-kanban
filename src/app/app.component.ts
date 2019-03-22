import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lists;

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    this.listService.getLists()
      .subscribe(lists => {
        this.lists = lists;
      });
  }
}
