import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "https://localhost:44373/api";

  constructor(private http:HttpClient) { }

  getContatoList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/contato');
  }

  addContato(val:any)
  {
    return this.http.post<any>(this.ApiUrl+'/contato', val);
  }

  updateContato(val:any)
  {
    return this.http.put<any>(this.ApiUrl+'/contato', val);
  }

  deleteContato(val:any){
    return this.http.delete(this.ApiUrl+'/contato/'+val);
  }
}
