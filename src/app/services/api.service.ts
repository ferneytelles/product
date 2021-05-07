import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * Cadena que contiene el token de autenticación.
   */
  token: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {}

  authentication(): void {
    this.http
      .post('http://3.134.87.94/api/token/', {
        username: 'grupocato@gmail.com',
        password: 'grupocato',
      })
      .subscribe((data: any) => {
        this.token = data.token;
        console.log(this.token);
        this.headers = new HttpHeaders({
          Authorization: `token ${this.token}`
        });
      });
  }

  getProductDesignById(id: string): Observable<any> {
    return this.http
      .get(`http://3.134.87.94/api/product_designs/${id}/`, {
        headers: this.headers,
      })
      .pipe(map((data) => data));
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(`http://3.134.87.94/api/products/${id}/`, {
      headers: this.headers,
    });
  }
}
