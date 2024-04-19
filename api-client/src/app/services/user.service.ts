import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  id: any;
  constructor(private http: HttpClient) { }

  usuarios(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/users/all');
  }

  login(usuario: any,clave: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/user/login/${usuario}/${clave}`);
  }

  registro(user:User): Observable<any>{
    return this.http.post('http://localhost:3000/user/registro',user);    
  }
}
