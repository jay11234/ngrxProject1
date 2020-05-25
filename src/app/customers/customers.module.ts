import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerReducer } from './state/customer.reducer';
const customerRoutes: Routes = [
  {
    path: "", component: CustomerComponent
  },
];


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent
  ],
  imports: [
    StoreModule.forFeature("customers", CustomerReducer),
    FormsModule, ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(customerRoutes),

  ]
})
export class CustomersModule { }
