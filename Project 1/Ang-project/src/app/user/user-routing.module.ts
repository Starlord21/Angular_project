import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';
import { MyaccountComponent } from './pages/myaccount/myaccount.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { AntiBackdoorGuard } from './guard/anti-backdoor.guard';

const routes: Routes = 
[
  {
    path : "",
    component : UserComponent,
    children :
     [
    {
      path : "",
      component : SignupComponent,
      canActivate : [AntiBackdoorGuard]
    },
    {
      path : "login",
      component : LoginComponent,
      canActivate : [AntiBackdoorGuard]
    },
    {
      path : "home",
      component : HomeComponent
    },
    {
      path : "contact",
      component : ContactComponent
    },
    {
      path : "about",
      component : AboutComponent
    },
    {
      path : "myaccount",
      component : MyaccountComponent,
      canActivate : [BackdoorGuard]
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
