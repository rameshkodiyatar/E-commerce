import { Component ,Inject} from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  imageUrl: string | ArrayBuffer | null | undefined;

  data:{
    "name":string
    "price":number,
    "ram":string,
    "storage":string,
    "images":any
    "currentIndex":number
  } ={
    price: 0,
    ram: '',
    storage: '',
    images: [],
    name: '',
    currentIndex:0
  }

  product: any = {
    // name:'bag',
    // description:'good',
    // price:'1000'
  }; // Object to store the product details
  selectedFile!: File; // Variable to store the selected image file
images:any[] = [];
len =0;

  constructor(private dialogRef: MatDialogRef<EditComponent>,@Inject(MAT_DIALOG_DATA) public dta: any,
  private dialog: MatDialog,private service:ServiceService,private route:Router){
    // this.service.deleteData(23).subscribe(res => {
    //   console.log(res);
    // })
    this.service.getdatabyId(this.service.editId).subscribe((res:any) => {
      this.product.name = res.name;
      this.product.price = res.price;
      this.product.ram = res.ram;
      this.product.storage = res.storage;
      this.images =res.images;
      console.log(res,this.product)
    }
    )
  }

  onCloseClicked(){
    this.dialog.closeAll();
  }

  submitForm() {
    // Logic to submit the form and add the product to the database or perform any desired action
    console.log('Product:', this.product);
    console.log('Image File:', this.selectedFile);
    // Reset the form
    //this.product = {};
    this.data.name = this.product.name;
    this.data.price = this.product.price;
    this.data.ram = this.product.ram;
    this.data.storage = this.product.storage;
    this.data.images = this.images
    console.log("Ramesh ",this.data)
    this.service.updateData(this.service.editId,this.data).subscribe(res => {
      console.log(res);
      // this.route.navigate(['/product']);
      this.route.navigateByUrl('/product')
      this.service.show = false
      //this.dialogRef.close();
      
      this.dialog.closeAll()
    })
  }

}
