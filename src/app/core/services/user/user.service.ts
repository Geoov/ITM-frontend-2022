import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  register(email: string, password: string, role:number): Observable<string> {
    return this.http
      .post<string>(environment.laravel_api + '/login', {email, password, role})
  }
}
