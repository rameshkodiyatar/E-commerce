import { Component ,Inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  imageUrl: string | ArrayBuffer | null | undefined;

  data:{
    "name":string
    "price":number,
    "ram":number,
    "storage":number,
    "images":any
    "currentIndex":number
  } ={
    price: 0,
    ram: 0,
    storage: 0,
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
  constructor(private dialogRef: MatDialogRef<PopupComponent>,@Inject(MAT_DIALOG_DATA) public dta: any,
  private dialog: MatDialog,private service:ServiceService,private route:Router){
    this.service.deleteData(23).subscribe(res => {
      console.log(res);
    })
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
    this.service.pushData(this.data).subscribe(res => {
      console.log(res);
      // this.route.navigate(['/product']);
      this.route.navigateByUrl('/product')
      this.service.show = false
      //this.dialogRef.close();
      this.dialog.closeAll()
    })
  }

  onCloseClicked(){
    this.dialog.closeAll();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = e => {
        //this.imageUrl = URL.createObjectURL(this.selectedFile);
        this.imageUrl = reader.result;
        this.service.image = reader.result;
        
        this.images.push(this.imageUrl);
        this.len = this.images.length
        console.log("RR ",this.images)
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  // if (selectedFile: Blob) {
  //   const reader = new FileReader();
  //   reader.onload = e => {
  //     this.imageUrl = reader.result;
  //     this.service.image = reader.result;
  //     console.log("RR ",this.imageUrl)
  //   };
  //   reader.readAsDataURL(selectedFile);
  // }

}
