import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LOGINComponent } from './pages/login/login.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { UserAccessComponent } from './pages/user-access/user-access.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { AntiBackdoorGuard } from './guard/anti-backdoor.guard';
import { FileStorageComponent } from './pages/file-storage/file-storage.component';
const routes: Routes = 
[
  {
    path : "",
    component : AdminComponent,
    children : 
    [
      {
        path : "",
        component : LOGINComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "users",
        component : UserAccessComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "myaccount",
        component : MyaccountComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "file-storage",
        component : FileStorageComponent,
        canActivate : [BackdoorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
