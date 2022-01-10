import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';

const routes: Routes = 
[
  {
    path : "",
    component : UserComponent,
    children :
     [
    {
      path : "",
      component : SignupComponent
    },
    {
      path : "login",
      component : LoginComponent
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
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
