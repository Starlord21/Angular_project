import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {
 apiUrl = environment.ApiUrl
  constructor(private _http :HttpClient) { }
  // posting data to database
  save(obj:any){
    return this._http.post<any>("http://localhost:3000/api/user", obj);
  }
// getting data from database to server 
 getAll()
 {
   return this._http.get<any>(this.apiUrl+"/api/user")
 }

 
//  updating user status Access from admin 
 update(id:any, obj:any){
  return this._http.put<any>(this.apiUrl+"/api/user/"+id, obj);
}
}
