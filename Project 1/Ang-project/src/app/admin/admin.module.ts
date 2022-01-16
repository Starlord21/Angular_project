import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserAccessComponent } from './pages/user-access/user-access.component';
import { LOGINComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { FileStorageComponent } from './pages/file-storage/file-storage.component';


@NgModule({
  declarations: [
    AdminComponent,
    UserAccessComponent,
    LOGINComponent,
    HeaderComponent,
    FooterComponent,
    MyaccountComponent,
    FileStorageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
