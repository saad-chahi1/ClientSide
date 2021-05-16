import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from '../models/iclient';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<IClient>('http://localhost:8080/spring-crm-rest/api/customers/1');
  }
}
