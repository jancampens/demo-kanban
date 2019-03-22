import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>('http://localhost:3000/lists');
  }
}
