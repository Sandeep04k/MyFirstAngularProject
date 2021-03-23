import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ireview } from '../model/ireview';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url:string = "../assets/review.json"; 
  constructor(private httpClient: HttpClient) { }
  getReview():Observable<Ireview[]>{
  return this.httpClient.get<Ireview[]>(this.url) 
  }
}
