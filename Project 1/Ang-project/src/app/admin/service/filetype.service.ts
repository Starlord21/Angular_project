import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiletypeService {
apiUrl = environment.ApiUrl
  constructor(private _http : HttpClient) { }
  getfile()
  {
    return this._http.get<any>(this.apiUrl+"/api/filetypes")
  }
  get(id:any){
    return this._http.get<any>(this.apiUrl+"/api/filetypes/"+id);
  }
  addfile(obj:any)
  {
    return this._http.post<any>(this.apiUrl+"/api/filetypes",obj)
  }
  deleteFile(id:any)
  {
    return this._http.delete<any>(this.apiUrl+"/api/filetypes/"+id)
  }
  update(id:any,obj:any)
  {
    return this._http.put<any>(this.apiUrl+"/api/filetypes/"+id,obj)
  }
}
