import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL="http://localhost:3000/api/"

  constructor(private _http: HttpClient) { }

  registrarUsuario(userparams): Observable<any> {
    let params = JSON.stringify(userparams);
    let options= new HttpHeaders().set("Content-type", "application/json");
    return this. _http.post(this.apiURL, params, {headers:options}).pipe((res) =>res)
  }
}
