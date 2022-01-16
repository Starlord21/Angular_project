import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { AdminloginauthService } from '../service/adminloginauth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AntiBackdoorGuard implements CanActivate {
  constructor(private _router : Router,private _adminauth : AdminloginauthService){}
  canActivate()
  {
    if(this._adminauth.LoggedIn())
    {
      this._router.navigate(["/admin/myaccount"])
      return false;
    }
    else
    {
      return true;
    }
  }
  
}
