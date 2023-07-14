import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
//import pdfMake from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
//(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
//import { saveAs } from 'file-saver';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  imageUrl!: string;

  //pdfMake: any.vfs = pdfFonts.pdfMake.vfs;
  item:any;
  index:any;
  paymentdone:boolean=false;
  constructor(private  service:ServiceService,private router : Router,private http: HttpClient, private sanitizer: DomSanitizer){
    this.service.getdatabyId(this.service.id).subscribe((res : any) => {
      this.item = res;
      console.log(res);
      this.paymentdone = this.service.ispaymentDone;
      (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


      this.http
      .get('assets/oppo-a5s-pakistan-priceoye-nqii2-270x270.webp', { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          //this.imageUrl = reader.result as string;
          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string) as string;

        };
        reader.readAsDataURL(blob);
      });

      // this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string) as string;

    })
    this.index = this.service.index;
  }
  onPayNowClicked(total : number){
    this.service.totalmany = total;
    console.log(total);
    this.router.navigate(['payment']);
  }

  generateBillPDF(): void {
    this.service.ispaymentDone = false;
     var documentDefinition : any = {
      content: [
        // Card image
        {
          text:'Payment Bill',
          style:'he',
          margin: [0, 0, 0, 10], // Optional: Adjust the margin as per your requirement
          blur: true 
        },
        {
          image: this.item.images[this.index],
          width: 200,
          margin: [0, 0, 0, 10],
          alignment: 'center'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              ['Name', this.item?.name],
              ['Price', this.item?.price],
              ['Ram', this.item?.ram],
              ['Storage', this.item?.storage],
              ['Tax', this.item?.price * 0.18],
              ['Total', this.item?.price * 1 + this.item?.price * 0.18]
            ]
          }
        },
        {
          text: `Payment successfully completed`,
          style:'cl'
        },
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 16,
          marginBottom: 10,
          
        },
        cl: {
          color: 'green'
        },
        he: {
          alignment: 'center', // Updated to align center
          fontSize: 18, // Optional: Adjust the font size as per your requirement
          bold: true
        }
      }
    };

   // pdfMake.createPdf(documentDefinition).download('bill.pdf');
   //const pdfDocGenerator = pdfMake.default.createPdf(documentDefinition);
   const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download('bill.pdf');
    //pdfDocGenerator.download('bill.pdf');
    this.router.navigate(['product']);
  }

}
