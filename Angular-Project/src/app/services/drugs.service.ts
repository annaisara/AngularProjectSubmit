import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  httpOptions: any
  constructor(private http: HttpClient) { }
  getDrugs(): Observable<any> {
    return this.http.get("http://localhost:4500/drugdetail", this.httpOptions)
  }
  getDrugsUom(): Observable<any> {
    return this.http.get("http://localhost:4500/drugdetail", this.httpOptions)
  }
  postDrug(obj: any): Observable<any> {
    this.httpOptions = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post("http://localhost:4500/drugdetail", obj, this.httpOptions)

  }
  callConsole() {

    alert("Just check")

  }
}
