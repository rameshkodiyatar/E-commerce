import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillComponent } from './bill/bill.component';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PaymentComponent } from './payment/payment.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatDrawerModule } from '@angular/material/drawer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ToolbarComponent,
    BillComponent,
    PopupComponent,
    PaymentComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
