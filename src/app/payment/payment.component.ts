import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  cardNumber!: string;
  cvv!: string;
  expiration!: string;
  amount!:number;
  
  constructor(private router:Router,private service:ServiceService) {
    this.amount = this.service.totalmany;
  }

  onPaymentSubmit(paymentForm: NgForm): void {
    // Add your payment processing logic here
    // You can interact with the payment gateway or perform any necessary actions\
    if(paymentForm.invalid){
      return;
    }
    console.log('Payment su',paymentForm.value);
    this.service.ispaymentDone = true;
    this.router.navigate(['bill'])
  }

}
