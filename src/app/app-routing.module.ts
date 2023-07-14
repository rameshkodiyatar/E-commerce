import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  },{
    path:'bill',
    component:BillComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
