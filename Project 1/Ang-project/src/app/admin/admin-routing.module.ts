import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LOGINComponent } from './pages/login/login.component';
import { UserAccessComponent } from './pages/user-access/user-access.component';

const routes: Routes = 
[
  {
    path : "",
    component : AdminComponent,
    children : 
    [
      {
        path : "",
        component : LOGINComponent
      },
      {
        path : "users",
        component : UserAccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
