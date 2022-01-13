import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {
apiUrl = environment.ApiUrl
  constructor(private _http : HttpClient,private _router :Router) { }
  doLogin(obj:any)
  {
    return this._http.post<any>(this.apiUrl+"/api/userauth",obj)
  }
  LoggedIn()
  {
    if(localStorage.getItem("usertoken"))
    {
      return true;
    }
    else
    {
      return false
    }
  }
  LoggedOut()
  {
    localStorage.removeItem("usertoken");
    this._router.navigate(["/login"])
  }
}
