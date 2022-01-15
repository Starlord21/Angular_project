import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginauthService } from '../service/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  constructor(private _loginauth : LoginauthService, private _router : Router) {}
  canActivate() 
  {
    if(this._loginauth.LoggedIn())
    {
      return true;
    }
    else
    {
      this._router.navigate(["/login"])
      return false;
    }
  }
  
}
