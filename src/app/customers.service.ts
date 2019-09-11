import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  uri = 'http://localhost:8081/customer';

  constructor(private http: HttpClient) { }

  addCustomer(id, name, creditLimit,state) {
    const obj = {
      id,
      name,
      creditLimit,
      state
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }

  getCustomers() {
    return this
           .http
           .get(`${this.uri}`);
  }
}
