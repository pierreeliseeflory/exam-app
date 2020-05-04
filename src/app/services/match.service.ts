import { Match } from './../models/match';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  
  constructor(private http: HttpClient) { 
  }

  
  getMatches(): Observable<any> {
    return this.http.get('http://localhost:3000/match');
  }

  addMatch(match: Match): Observable<any> {
    return this.http.post('http://localhost:3000/match', match);
  }
}
