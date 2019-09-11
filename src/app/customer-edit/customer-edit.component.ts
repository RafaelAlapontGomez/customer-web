import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  angForm: FormGroup;
  customer: any = {}; 

  constructor(private route: ActivatedRoute, private router: Router, private ps: CustomersService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      CustomerId: ['', Validators.required ],
      CustomerName: ['', Validators.required ],
      CustomerCreditLimit: ['', Validators.required ],
      CustomerState: ['', Validators.required ]
    });
  }

  updateCustomer(id, name, creditLimit, state) {
    this.route.params.subscribe(params => {
      this.ps.updateCustomer(id, name, creditLimit, state);
      this.router.navigate(['customers']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editCustomer(params['id']).subscribe(res => {
        this.customer = res;
    });
  });
  }

}
