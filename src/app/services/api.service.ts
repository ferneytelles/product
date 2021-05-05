import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // tslint:disable-next-line: max-line-length
    http.post('http://192.168.1.178:8000/api/token/', {username: 'grupocato@gmail.com', password: 'grupocato'}, {headers}).subscribe(token => console.log(token));
   }
}
