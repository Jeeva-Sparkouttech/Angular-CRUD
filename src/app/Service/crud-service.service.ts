import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  private _url:any = "/src/asset/JsonData/employee.json"

  constructor(private http :HttpClient) { }

  getEmployees():Observable<[]>{
    return this.http.get<[]>(this._url)
  }
}
