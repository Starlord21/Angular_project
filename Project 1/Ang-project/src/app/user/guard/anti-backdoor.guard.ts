import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginauthService } from '../service/loginauth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AntiBackdoorGuard implements CanActivate {
  constructor(private _router : Router, private _loginauth : LoginauthService) {}
  canActivate()
  {
    if(this._loginauth.LoggedIn())
    {
      this._router.navigate(["/myaccount"])
      return false;
    }
    else
    {
      return true;
    }
  }
  
}
