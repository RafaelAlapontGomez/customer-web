import { Component, OnInit } from '@angular/core';
import Customer from '../Customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent implements OnInit {

  customers: Customer[];
  constructor(private ps: CustomersService) { }

  ngOnInit() {
    this.ps
    .getCustomers()
    .subscribe((data: Customer[]) => {
      console.log(data);
      this.customers = data;
  });
  }

}
