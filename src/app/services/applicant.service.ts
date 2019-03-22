import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Applicant } from '../models/applicant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(
    private http: HttpClient
  ) { }

  updateApplicant(applicant, containerId, index): Observable<any> {
    return this.http.put('http://localhost:3000/card', {
      applicant: applicant,
      container: containerId,
      index: index
    }, httpOptions);
  }
}
