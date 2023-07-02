import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DispensingService {
  httpOptions: any
  constructor(private http: HttpClient) { }
  getDispensing(): Observable<any> {
    return this.http.get("http://localhost:4500/dispdetail", this.httpOptions)
  }
  postDispensing(obj: any): Observable<any> {
    this.httpOptions = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post("http://localhost:4500/dispdetail", obj, this.httpOptions)

  }
  callConsole() {

    alert("Just check")

  }
}
