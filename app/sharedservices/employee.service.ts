import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from '../model/iemployee';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string = "../assets/employee.json"; 
  // private url:string = "https://jsonplaceholder.typicode.com/users/";
  
  constructor(private httpClient: HttpClient) { }
  getEmployees():Observable<Iemployee[]>{
  return this.httpClient.get<Iemployee[]>(this.url) 
}
}