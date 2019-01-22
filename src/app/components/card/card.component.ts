import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from 'src/app/models/applicant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() applicant: Applicant;

  constructor() { }

  ngOnInit() {
  }

}
