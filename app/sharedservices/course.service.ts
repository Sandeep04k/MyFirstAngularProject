import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icourse } from '../model/icourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url:string = "../assets/course.json"; 
  constructor(private httpClient: HttpClient) { }
  getCourse():Observable<Icourse[]>{
  return this.httpClient.get<Icourse[]>(this.url) 
}
}
