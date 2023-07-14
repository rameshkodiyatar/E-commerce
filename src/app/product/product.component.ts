import { Component ,ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { EditComponent } from '../edit/edit.component';
//import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //@ViewChild('stepper', { static: true }) stepper!: MatStepper;

data:any;
show:boolean=false;
constructor(private dialog: MatDialog,public service:ServiceService,private router :Router){
 this.service.getdata().subscribe(res=>{
  console.log(res);
  this.data=res;
  this.data  = this.data.reverse()
  //reverse
 })

 
 
  
}
// images: string[] = [
//   'assets/oppo-a5s-pakistan-priceoye-ogjns-270x270.webp',
//   'assets/oppo-a5s-pakistan-priceoye-puzeq-270x270.webp',
//   'assets/oppo-a5s-pakistan-priceoye-24ggj-270x270.webp',
//   'assets/oppo-a5s-pakistan-priceoye-nqii2-270x270.webp',
//   'assets/oppo-a5s-pakistan-priceoye-0pfq2-270x270.webp',
  
// ];
imageUrl = this.service.image;

onDeleteClicked(id:number){
  this.service.deleteData(id).subscribe(res => {
    console.log(res);
  })
}

fun(){
  const dialogRef = this.dialog.open(PopupComponent);
  this.show = this.service.show;
}
editData(id:number){
  this.service.editId = id;
  const dialogRef = this.dialog.open(EditComponent);
}

previousStep(index: number) {
    if (this.data[index].currentIndex > 0) {
      this.data[index].currentIndex--;
    }
  }

nextStep(index: number) {
  if (this.data[index].currentIndex < this.data[index].images.length - 1) {
    this.data[index].currentIndex++;
  }
}

product: any = {
  name: 'Product 1',
  price: 100,
  quantity: 1
};
billGenerated: boolean = false;
billAmount: number = 0;

generateBill() {
  this.billAmount = this.product.price * this.product.quantity;
  this.billGenerated = true;
}

buy(id : number,index:number){
  this.service.id = id;
  this.service.index = index;
  // this.router.navigate(['/bill']);
}
}
