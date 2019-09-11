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

  editCustomer(id) {
    console.log(id);
    return this
            .http
            .get(`${this.uri}/${id}`);
    }

    updateCustomer( id, name, creditLimit, state) {
      console.log(id);
      console.log(name);
      console.log(creditLimit);
      console.log(state);
      const obj = {
        id,
        name,
        creditLimit,
        state
        };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }
}
