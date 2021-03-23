import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../model/iproduct';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = "../assets/product.json"; 
  constructor(private httpClient: HttpClient) { }
  getProducts():Observable<Iproduct[]>{
  return this.httpClient.get<Iproduct[]>(this.url) 
  }
}
