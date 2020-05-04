import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fencer } from './../models/fencer';



@Injectable({
  providedIn: 'root'
})
export class FencerService {


  constructor(private http: HttpClient) { }
  
  getFencers(): Observable<any>  {
    return this.http.get('http://localhost:3000/fencer');
  }

  getFencer(id: number): Observable<any>  {
    return this.http.get('http://localhost:3000/fencer/'+id);
  }

  addFencer(fencer: Fencer): Observable<any>  {
    return this.http.post('http://localhost:3000/fencer/', fencer);
  }
}
