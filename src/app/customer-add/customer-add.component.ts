import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: CustomersService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      CustomerId: ['' ],
      CustomerName: ['', Validators.required ],
      CustomerCreditLimit: ['', Validators.required ],
      CustomerState: ['', Validators.required ]
    });
  }

  addCustomer(id, name, creditLimit,state) {
    this.ps.addCustomer(id, name, creditLimit,state);
  }

  ngOnInit() {
  }

}
