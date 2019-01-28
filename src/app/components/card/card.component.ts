import { Component, Input } from '@angular/core';
import { Applicant } from 'src/app/models/applicant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() applicant: Applicant;

  constructor() { }
}
