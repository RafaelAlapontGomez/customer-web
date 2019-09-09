import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';

const routes: Routes = [
  {
    path: 'customer/create',
    component: CustomerAddComponent
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'customers',
    component: CustomerGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
