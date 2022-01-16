import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminloginauthService {
apiUrl = environment.ApiUrl
  constructor(private _http :HttpClient, private _router : Router) { }
  doLogin(obj:any)
  {
    return this._http.post<any>(this.apiUrl+"/api/adminauth",obj)
  }
  LoggedIn()
  {
    if(localStorage.getItem("admintoken"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  LoggedOut()
  {
    localStorage.removeItem("admintoken")
    this._router.navigate(["/admin"])
  }
}
