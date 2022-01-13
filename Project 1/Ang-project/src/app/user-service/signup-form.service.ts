import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {
 apiUrl = environment.ApiUrl
  constructor(private _http :HttpClient) { }

  save(obj:any){
    return this._http.post<any>("http://localhost:3000/api/user", obj);
  }
 getAll()
 {
   return this._http.get<any>(this.apiUrl+"/api/user")
 }
 update(id:any, obj:any){
  return this._http.put<any>(this.apiUrl+"/api/user/"+id, obj);

}
}
