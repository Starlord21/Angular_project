import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { AdminloginauthService } from '../service/adminloginauth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  constructor(private _adminauth : AdminloginauthService, private _router : Router)
 {}
  canActivate( ) 
   {
    if(this._adminauth.LoggedIn())
    {
      return true;
    }
    else
    {
      this._router.navigate(["/admin"])
      return false;
    }
  }
  
}
