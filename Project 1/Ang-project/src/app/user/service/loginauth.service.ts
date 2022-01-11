import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {
apiUrl = environment.ApiUrl
  constructor(private _http : HttpClient) { }
  doLogin(obj:any)
  {
    return this._http.post<any>(this.apiUrl+"/api/user",obj)
  }
}
