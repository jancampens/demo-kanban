import { Component, Input, OnInit } from '@angular/core';

import { List } from '../../models/list';

import { APPLICANTS } from './../../mock/mock-applicants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;
  applicants = APPLICANTS;
  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = this.applicants.filter(applicant => applicant.list === this.list.id).length;
  }
}
